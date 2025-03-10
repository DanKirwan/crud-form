#!/usr/bin/env ts-node

import { ObjectMappings } from '@src/lib/domain';
import { camelCase, first, isArray, range, zip } from 'lodash-es';
import { OpenAPIV3 } from 'openapi-types';
import { genResultError, genResultMap, genResultOf } from './generationTypeUtils';

const enumNamesField = 'x-enumNames' as const;
export const typeAlias = 'types';

// Type guard for ReferenceObject
function isReferenceObject(
    schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
): schema is OpenAPIV3.ReferenceObject {
    return (schema as OpenAPIV3.ReferenceObject).$ref !== undefined;
}

type LookupType = Pick<OpenAPIV3.NonArraySchemaObject, 'type' | 'format'>;

// TODO handle all cases
export const schemaToType = (lookup: LookupType): ObjectMappings['key'] => {
    switch(lookup.type) {
    case 'boolean': return 'Boolean';
    case 'integer': 
        switch(lookup.format) {
        case 'int64': return 'Int32'; // throw new Error("Longs are not currently supported");
        default: return 'Int32'
        }
    case 'number': 
        switch(lookup.format) {
        case 'double': return 'Double';
        case 'float': return 'Single';
        default: throw new Error('Only single and double number types currently supported');
        }
    case 'object': 
        throw new Error('Schema to type for objects is not valid');
    case 'string': 
        switch(lookup.format) {
        case 'uuid': return 'Guid';
        case 'date': // we may ened a second type here
        case 'date-time': return 'DateTimeOffset' // TODO this will need changing when we swap to actually using date time offsets
        default: return 'String';
        }
    default: throw new Error(`Unsupported type ${lookup.type} with format ${lookup.format}`);
    }
}

const parseRef = (reference: string): GenerationResult => {
    const match = reference.match(/^#\/components\/schemas\/(.+)$/);
    if (!match || !match[1]) {
        return {
            errors:[`Invalid reference format: ${reference}. Expected format "#/components/schemas/{name}".`],
            references: [],
            value: '', 
        };
    }
    return {
        errors: [],
        references: [match[1]],
        value: camelCase(match[1]),
    };
};


type GenerationResult = {
  value: string;
  errors: string[];
  references: string[];
}

const tabChar = '    ';

/**
 * Recursively maps a property schema to an EDM-style type configuration.
 * Returns a string representing the configuration.
 */
const mapPropertyToTypeConfig = (
    propSchema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
    isRequired: boolean,
    tabDepth: number,
): GenerationResult => {
  
    const newLine = `\n${range(0, tabDepth).map(() => tabChar).join('')}`;

    if (isReferenceObject(propSchema)) {
        const propResult = parseRef(propSchema.$ref);
        return genResultMap(propResult, getTypeConfigName);
    }
  
    const isNullable = propSchema.nullable ?? false;

    if (propSchema.type === 'array') return genResultError('Cannot generate for arrays');
    if (propSchema.type === 'object') return genResultError('Cannot generate for nested objects');

    // Lookup the EDM type using the nonArrayTypeMap
    if(propSchema.type) {
        return genResultOf(`{ type: '${schemaToType(propSchema)}', isNullable: ${isNullable}, isOptional: ${!isRequired} }`);
    }
    // ReferenceTypes
    if(!propSchema?.allOf) return genResultError('Could not match any type, array or object and no references found in "allOf"');
    const firstAllOf = first(propSchema.allOf)
    if(!firstAllOf || !isReferenceObject(firstAllOf)) return genResultError('Could not match any type, array or object and no references found in "allOf"');
    const propResult = parseRef(firstAllOf.$ref);

    const refIsEnum = enumNamesField in propSchema;
    if(!refIsEnum) return genResultError('Non enum references are ignored currently');
    const childName = refIsEnum ? 'options' : 'config'; // If its an enum, this is a field reference rather than a child
    return genResultMap(propResult, r => `{ ${childName}: ${getTypeConfigName(r)}, isNullable: ${isNullable}, isOptional: ${!isRequired}}`);
}

type SchemaGenerationResult = GenerationResult & {isEnum?: boolean};

const generateEnum = (schema: OpenAPIV3.SchemaObject): GenerationResult => {
    if(!(enumNamesField in schema)) return genResultError(`Enums expect ${enumNamesField} to be available, cannot generate type configs without this`);
    const names = schema[enumNamesField];
    if(!isArray(names)) return genResultError(`${enumNamesField} is expected to be an array`);

    const values = schema.enum;
    if(!isArray(values)) genResultError('Cannot generate enum without enum values in schema');
  
    const isString = schema.type === 'string';
  
    const quote = isString ? '\'' : '';
    const pairs = zip(names, values)
        .map(([name, value]) => `${tabChar}'${name}': ${quote}${value}${quote},`)
        .join('\n');
    
    return genResultOf(`{\n${pairs}\n}`);
}

const getTypeConfigName = (name: string) => `${camelCase(name)}TypeConfig`
/**
 * Generates a type configuration for a given schema.
 * Only object schemas with properties are processed.
 */
export function generateTypeConfigForSchema(
    schemaName: string,
    schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
): SchemaGenerationResult {
    if (isReferenceObject(schema)) {
        return genResultError(`// Skipping schema ${schemaName} because it is a reference: ${schema.$ref}\n`);
    }


    if(schema.enum) {
        const enumResult = generateEnum(schema);
        return {
            ...genResultMap(enumResult, r => `export const ${getTypeConfigName(schemaName)} = ${r} as const satisfies EnumTypeConfig<${typeAlias}.${schemaName}>;\n`),
            isEnum: true,
        };
    }

    if (schema.type !== 'object' || !schema.properties) {
        return genResultError(`// Skipping non-object schema: ${schemaName}\n`);
    }

    const entries = Object.entries(schema.properties ?? []).map(([key, value]) => {
        const childResult = mapPropertyToTypeConfig(value, schema.required?.includes(key) ?? false, 0);
        // THese are one level deeper so new line needs to be one level deeper too
        return genResultMap(childResult, r => r === '' ? '' : `${tabChar}${key}: ${r}`)
    });
    const result = {
        errors: entries.flatMap(e => e.errors),
        references: entries.flatMap(e => e.references),
        value: `{\n${entries.filter(e => e.value !== '').map(e => `${e.value},`).join('\n')}\n}`,
    }

    const finalResult =  genResultMap(
        result, 
        r =>`export const ${getTypeConfigName(schemaName)} = ${r} as const satisfies ObjectTypeConfig<${typeAlias}.${schemaName}>;\n` );
    return {...finalResult, isEnum: false}
}

