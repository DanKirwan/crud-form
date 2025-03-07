#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import SwaggerParser from '@apidevtools/swagger-parser';
import { OpenAPIV3 } from 'openapi-types';
import { ObjectMappings } from '@src/lib/domain';
import { camelCase, first, isArray, keyBy, range, uniq, zip } from 'lodash-es';
import { genResultError, genResultMap, genResultOf } from '../generator/generation/generationResultUtils';

const enumNamesField = 'x-enumNames' as const;


// Type guard for ReferenceObject
function isReferenceObject(
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
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
        default: throw new Error("Only single and double number types currently supported");
      }
    case 'object': 
      throw new Error("Schema to type for objects is not valid");
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
      value: '' 
    };
  }
  return {
    errors: [],
    references: [match[1]],
    value: camelCase(match[1])
  };
};


type GenerationResult = {
  value: string;
  errors: string[];
  references: string[];
}

const tabChar = '\t';

/**
 * Recursively maps a property schema to an EDM-style type configuration.
 * Returns a string representing the configuration.
 */
const mapPropertyToTypeConfig = (
  propSchema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
  tabDepth: number
): GenerationResult => {
  
  const newLine = `\n${range(0, tabDepth).map(() => tabChar).join('')}`;

  if (isReferenceObject(propSchema)) {
    const propResult = parseRef(propSchema.$ref);
    return genResultMap(propResult, getTypeConfigName);
  }
  
  const isNullable = propSchema.nullable ?? false;
  console.log(JSON.stringify(propSchema));

  // When the property is an array, handle items separately.
  if (propSchema.type === 'array') {
    const childResult = mapPropertyToTypeConfig(propSchema.items, tabDepth + 1);
    return genResultMap(childResult, r => `{ isRelation: true, isNullable: ${isNullable}, array: ${r} }`)
  }

  // For non-array types, if it’s an object with properties then recurse.
  if (propSchema.type === 'object') {
    // const nestedRequired = propSchema.required ?? [];
    const entries = Object.entries(propSchema.properties ?? []).map(([key, value]) => {
      const childResult = mapPropertyToTypeConfig(value, tabDepth + 1);
      // THese are one level deeper so new line needs to be one level deeper too
      return genResultMap(childResult, r => `${newLine}${tabChar}${key}: ${r}`)
    });
    return {
      errors: entries.flatMap(e => e.errors),
      references: entries.flatMap(e => e.references),
      value: `{${newLine}${tabChar}config: {\n${entries.map(e => `${e.value}`).join(',')}${newLine}},${newLine}isNullable: ${isNullable}${newLine}}`
    }
  }

  // Lookup the EDM type using the nonArrayTypeMap
  if(propSchema.type) {
    return genResultOf(`{ type: '${schemaToType(propSchema)}', isNullable: ${isNullable} }`);
  }

  // ReferenceTypes
  if(!propSchema?.allOf) return genResultError('Could not match any type, array or object and no references found in "allOf"');
  const firstAllOf = first(propSchema.allOf)
  if(!firstAllOf || !isReferenceObject(firstAllOf)) return genResultError('Could not match any type, array or object and no references found in "allOf"');
  const propResult = parseRef(firstAllOf.$ref);

  const refIsEnum = enumNamesField in propSchema;
  const childName = refIsEnum ? 'type' : 'config'; // If its an enum, this is a field reference rather than a child
  return genResultMap(propResult, r => `{ ${childName}: ${getTypeConfigName(r)}, isNullable: ${isNullable}}`);
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
    .map(([name, value]) => `${tabChar}'${name}': ${quote}${value}${quote}`)
    .join(',\n');
    
  return genResultOf(`{\n${pairs}\n}`);

  


}

const getTypeConfigName = (name: string) => `${camelCase(name)}TypeConfig`
/**
 * Generates a type configuration for a given schema.
 * Only object schemas with properties are processed.
 */
function generateTypeConfigForSchema(
  schemaName: string,
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
): SchemaGenerationResult {
  if (isReferenceObject(schema)) {
    return genResultError(`// Skipping schema ${schemaName} because it is a reference: ${schema.$ref}\n`);
  }


  if(schema.enum) {
    const enumResult = generateEnum(schema);
    return {
      ...genResultMap(enumResult, r => `export const ${getTypeConfigName(schemaName)} = ${r} as const satisfies EnumTypeConfig<${schemaName}>`),
      isEnum: true
    };
  }

  if (schema.type !== 'object' || !schema.properties) {
    return genResultError(`// Skipping non-object schema: ${schemaName}\n`);
  }

  const entries = Object.entries(schema.properties ?? []).map(([key, value]) => {
    const childResult = mapPropertyToTypeConfig(value, 0);
    // THese are one level deeper so new line needs to be one level deeper too
    return genResultMap(childResult, r => `${tabChar}${key}: ${r}`)
  });
  const result = {
    errors: entries.flatMap(e => e.errors),
    references: entries.flatMap(e => e.references),
    value: `{\n${entries.map(e => `${e.value}`).join(',\n')}\n}`
  }

  const finalResult =  genResultMap(
    result, 
    r =>`export const ${getTypeConfigName(schemaName)} = ${r} as const satisfies DomainObjectTypeConfig<${schemaName}>;\n` );
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

const typePath = '../exampleTypes.ts';
const generateTypeConfigs = async (): Promise<void> => {
  // Use the first CLI argument as the OpenAPI file path or default to an example file.
  const openApiPath =
    process.argv[2] || path.join(__dirname, '../../smallerTest.json');
  console.log(`Parsing OpenAPI spec from: ${openApiPath}`);

  const api = (await SwaggerParser.parse(openApiPath)) as OpenAPIV3.Document;
  if (!api.components || !api.components.schemas) {
    throw new Error('No schemas found in the OpenAPI document.');
  }
  const schemas = api.components.schemas;
  const outputFolder = path.join(__dirname, 'generated');
  if(!fs.existsSync(outputFolder)){

    fs.mkdirSync(outputFolder);
  }

  // Process each schema individually.
  for (const [schemaName, schema] of Object.entries(schemas)) {
    const result: SchemaGenerationResult = generateTypeConfigForSchema(schemaName, schema);
    // Deduplicate references.
    const uniqueReferences = uniq(result.references);

    // Build the file header with a notice, generation source, and distinct references.
    let fileContent = `// AUTO-GENERATED FILE - DO NOT EDIT\n`;
    fileContent += `// Generated from ${path.basename(openApiPath)}\n\n`;
    fileContent += `import {${schemaName}} from '${typePath}'\n`
    if (uniqueReferences.length > 0) {
      fileContent += `// Distinct References:\n`;
      uniqueReferences.forEach((ref) => {
        fileContent += `import { ${getTypeConfigName(ref)} } from './${camelCase(ref)}.generated.ts'\n`;
      });
      fileContent += '\n';
    }
    fileContent += result.isEnum 
      ?  `import { EnumTypeConfig } from '@src/lib/form';\n\n`
      :  `import { DomainObjectTypeConfig } from '@src/lib/form';\n\n`;
    
    // TODO handle errors here
    fileContent += result.value;

    // Write each schema's type config to its own file.
    const outputFilePath = path.join(__dirname,  'generated', `${camelCase(schemaName)}.generated.ts`);
    fs.writeFileSync(outputFilePath, fileContent, 'utf8');
    console.log(`Type configuration for ${schemaName} generated at: ${outputFilePath}`);
  }
};

generateTypeConfigs().catch((err) => {
  console.error("Error generating type configs:", err);
  process.exit(1);
});


