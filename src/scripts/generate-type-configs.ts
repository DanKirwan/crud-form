#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import SwaggerParser from '@apidevtools/swagger-parser';
import { OpenAPIV3 } from 'openapi-types';
import { ObjectMappings } from '@src/lib/domain';
import { camelCase, first } from 'lodash-es';

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
        case 'date-time': return 'DateTimeOffset' // TODO this will need changing when we swap to actually using date time offsets
        default: return 'String';
      }
    default: throw new Error(`Unsupported type ${lookup.type} with format ${lookup.format}`);
  }
}

const parseRef = (reference: string): string => {
  const match = reference.match(/^#\/components\/schemas\/(.+)$/);
  if (!match || !match[1]) {
    throw new Error(`Invalid reference format: ${reference}. Expected format "#/components/schemas/{name}".`);
  }
  return match[1];
};


type GenerationResult = {
  value: string;
  errors: string[];
  references: string[];
}

/**
 * Recursively maps a property schema to an EDM-style type configuration.
 * Returns a string representing the configuration.
 */
const mapPropertyToTypeConfig = (
  propSchema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
): string => {
  
  if (isReferenceObject(propSchema)) {
    return getTypeConfigName(parseRef(propSchema.$ref));
  }
  
  const isNullable = propSchema.nullable ?? false;
  console.log(JSON.stringify(propSchema));

  // When the property is an array, handle items separately.
  if (propSchema.type === 'array') {
    return `{ isRelation: true, config: { ${mapPropertyToTypeConfig(propSchema.items)}} }`;
  }

  // For non-array types, if it’s an object with properties then recurse.
  if (propSchema.type === 'object') {
    // const nestedRequired = propSchema.required ?? [];
    const entries = Object.entries(propSchema.properties ?? []).map(([key, value]) => {
      return `${key}: ${mapPropertyToTypeConfig( value)}`;
    });
    return `{\n${entries.join(',\n')}\n  }`;
  }

  // Lookup the EDM type using the nonArrayTypeMap
  // TODO handle relations here

  if(propSchema.type) {
    return `{ type: '${schemaToType(propSchema)}', isNullable: ${isNullable} }`
  }

  // ReferenceTypes
  if(!propSchema?.allOf) return 'Failed';
  const firstAllOf = first(propSchema.allOf)
  if(!firstAllOf || !isReferenceObject(firstAllOf)) return 'Failed';
  return getTypeConfigName(parseRef(firstAllOf.$ref));
}


const getTypeConfigName = (name: string) => `${camelCase(name)}TypeConfig`
/**
 * Generates a type configuration for a given schema.
 * Only object schemas with properties are processed.
 */
function generateTypeConfigForSchema(
  schemaName: string,
  schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject
): string {
  if (isReferenceObject(schema)) {
    return `// Skipping schema ${schemaName} because it is a reference: ${schema.$ref}\n`;
  }
  if (schema.type !== 'object' || !schema.properties) {
    return `// Skipping non-object schema: ${schemaName}\n`;
  }
  const entries = Object.entries(schema.properties).map(([propName, propSchema]) => {
    return `  ${propName}: ${mapPropertyToTypeConfig(propSchema)}`;
  });

  return `export const ${getTypeConfigName(schemaName)} = {\n${entries.join(',\n')}\n} as const satisfies ObjectTypeConfig<${schemaName}>;\n`;
}

/**
 * Main function:
 * 1. Loads the OpenAPI spec.
 * 2. Locates the schemas under components.schemas.
 * 3. Generates type configurations for each object schema.
 * 4. Writes the generated code to a file.
 */
async function generateTypeConfigs(): Promise<void> {
  // Use the first CLI argument as the OpenAPI file path or default to 'openapi.yaml'
  const openApiPath = process.argv[2] || path.join(__dirname, '../../example-schema copy.json');
  console.log(`Parsing OpenAPI spec from: ${openApiPath}`);
  const api = (await SwaggerParser.parse(openApiPath)) as OpenAPIV3.Document;

  if (!api.components || !api.components.schemas) {
    throw new Error("No schemas found in the OpenAPI document.");
  }
  const schemas = api.components.schemas;
  let generatedConfigs = `// AUTO-GENERATED FILE - DO NOT EDIT\n`;
  generatedConfigs += `// Generated from ${path.basename(openApiPath)}\n\n`;
  generatedConfigs += `import { ObjectTypeConfig } from '@src/lib/domain';\n\n`;

  // Generate a type config for each schema
  for (const [schemaName, schema] of Object.entries(schemas)) {
    generatedConfigs += generateTypeConfigForSchema(schemaName, schema);
    generatedConfigs += '\n';
  }

  const outputFilePath = path.join(__dirname, 'object-type-configs.generated.ts');
  fs.writeFileSync(outputFilePath, generatedConfigs, 'utf8');
  console.log(`Type configurations generated at: ${outputFilePath}`);
}

generateTypeConfigs().catch((err) => {
  console.error("Error generating type configs:", err);
  process.exit(1);
});
