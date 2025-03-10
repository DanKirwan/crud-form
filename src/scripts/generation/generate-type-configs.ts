#!/usr/bin/env ts-node

import SwaggerParser from '@apidevtools/swagger-parser';
import { ObjectMappings } from '@src/lib/domain';
import fs from 'fs';
import { camelCase, first, isArray, range, zip } from 'lodash-es';
import { OpenAPIV3 } from 'openapi-types';
import path from 'path';
import { genResultError, genResultMap, genResultOf } from './generationTypeUtils';

const enumNamesField = 'x-enumNames' as const;


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
        return genResultOf(`{ type: '${schemaToType(propSchema)}', isNullable: ${isNullable}, isUndefinable: ${!isRequired} }`);
    }
    // ReferenceTypes
    if(!propSchema?.allOf) return genResultError('Could not match any type, array or object and no references found in "allOf"');
    const firstAllOf = first(propSchema.allOf)
    if(!firstAllOf || !isReferenceObject(firstAllOf)) return genResultError('Could not match any type, array or object and no references found in "allOf"');
    const propResult = parseRef(firstAllOf.$ref);

    const refIsEnum = enumNamesField in propSchema;
    if(!refIsEnum) return genResultError('Non enum references are ignored currently');
    const childName = refIsEnum ? 'type' : 'config'; // If its an enum, this is a field reference rather than a child
    return genResultMap(propResult, r => `{ ${childName}: ${getTypeConfigName(r)}, isNullable: ${isNullable}, isUndefinable: ${!isRequired}}`);
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
function generateTypeConfigForSchema(
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

/**
 * Main function:
 * 1. Loads the OpenAPI spec.
 * 2. Locates the schemas under components.schemas.
 * 3. Generates type configurations for each object schema.
 * 4. Writes the generated code to a file.
//  */
// async function generateTypeConfigs(): Promise<void> {
//   // Use the first CLI argument as the OpenAPI file path or default to 'openapi.yaml'
//   const openApiPath = process.argv[2] || path.join(__dirname, '../../example-schema copy.json');
//   console.log(`Parsing OpenAPI spec from: ${openApiPath}`);
//   const api = (await SwaggerParser.parse(openApiPath)) as OpenAPIV3.Document;

//   if (!api.components || !api.components.schemas) {
//     throw new Error("No schemas found in the OpenAPI document.");
//   }
//   const schemas = api.components.schemas;
//   let generatedConfigs = `// AUTO-GENERATED FILE - DO NOT EDIT\n`;
//   generatedConfigs += `// Generated from ${path.basename(openApiPath)}\n\n`;
//   generatedConfigs += `import { ObjectTypeConfig } from '@src/lib/domain';\n\n`;

//   // Generate a type config for each schema
//   for (const [schemaName, schema] of Object.entries(schemas)) {
//     generatedConfigs += generateTypeConfigForSchema(schemaName, schema).value;
//     generatedConfigs += '\n';
//   }

//   const outputFilePath = path.join(__dirname, 'object-type-configs.generated.ts');
//   fs.writeFileSync(outputFilePath, generatedConfigs, 'utf8');
//   console.log(`Type configurations generated at: ${outputFilePath}`);
// }

const typeAlias = 'types'; 

const typePath = '../exampleTypes.ts'; // Should point to the client types (most likely from nswag)
const dataPath = '../../smallerTest.json'; // Reference to Odata specificationNeeds to support a url or local file path
const outputFilePath = path.join(__dirname,  'generated', `objectTypeConfigs.generated.ts`); // This shold be a relative path


// TODOs
// Support url or local file path
// add a help method for querying the parameters
// fetch all the parameters based on a -typePath or -dataPath etc
// add option to load them from .env maybe?
// Add general stability fixes
const generateTypeConfigs = async (): Promise<void> => {
    // Use the first CLI argument as the OpenAPI file path or default to an example file.
    const openApiPath =
    process.argv[2] || path.join(__dirname, dataPath);
    console.log(`Parsing OpenAPI spec from: ${openApiPath}`);

    const api = (await SwaggerParser.parse(openApiPath)) as OpenAPIV3.Document;
    if (!api.components || !api.components.schemas) {
        throw new Error('No schemas found in the OpenAPI document (currently only v3 onwards is supported).');
    }
    const schemas = api.components.schemas;

    const results = Object.entries(schemas).map(([schemaName, schema]) => {
        return [schemaName, generateTypeConfigForSchema(schemaName, schema)] as const;
    });

    const enums = results.filter(([_, r]) => r.isEnum);
    const objects = results.filter(([_, r]) => !r.isEnum);
    
    let fileContent = `// AUTO-GENERATED FILE - DO NOT EDIT\n`;
    fileContent += `// Generated from ${path.basename(openApiPath)}\n\n`;
    fileContent += `import * as ${typeAlias} from '${typePath}'\n`
    
    const formImports = `${enums.length > 0 ? 'EnumTypeConfig, ' : ''}${objects.length > 0 ? 'ObjectTypeConfig' : ''}`;
    fileContent += `import { ${formImports} } from '@src/lib/form';\n\n`
    
    // Process each schema individually.
    for (const [_, result] of enums) {
        // TODO write errors as comments here above the class definition (result has a .errors field)
        fileContent += result.value;
        fileContent += '\n';
    }
    
    for (const [_, result] of objects) {
        fileContent += result.value;
        fileContent += '\n';
    }

    fs.writeFileSync(outputFilePath, fileContent, 'utf8');
    console.log(`Type configuration for object type configs generated at: ${outputFilePath}`);

};

generateTypeConfigs().catch((err) => {
    console.error('Error generating type configs:', err);
    process.exit(1);
});


