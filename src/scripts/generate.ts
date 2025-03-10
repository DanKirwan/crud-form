import fs from 'fs';
import path from 'path';
import SwaggerParser from '@apidevtools/swagger-parser';
import { generateTypeConfigForSchema, typeAlias } from './generation/configGeneration';
import type { OpenAPIV3 } from 'openapi-types';

// Load environment variables from .env file if available.

// Default configuration (can be overridden by .env or CLI arguments)
const defaultTypePath =  process.env.CRUD_FORM_TYPE_PATH; // || '../../data/exampleTypes.ts'; // Should point to the client types (most likely from nswag)
const defaultDataPath = process.env.CRUD_FORM_DATA_PATH; // './data/smallerTest.json'; // Reference to Odata specification (supports a URL or local file path)
const defaultOutputFilePath = process.env.CRUD_FORM_OUTPUT_FILE_PATH; // || path.join(__dirname, 'generated', 'objectTypeConfigs.generated.ts');

// Helper: Print usage/help message
function printHelp() {
    console.log(`
Usage: node script.js [options]

Options:
  -h, --help                 Show help information.
  -dataPath <path_or_url>    Specify the OpenAPI file path or URL. Default: ${defaultDataPath}
  -typePath <path>           Specify the client types file path. Default: ${defaultTypePath}
  -outputFilePath <path>     Specify the output file path. Default: ${defaultOutputFilePath}

Environment Variables:
  CRUD_FORM_TYPE_PATH, CRUD_FORM_DATA_PATH, CRUD_FORM_OUTPUT_FILE_PATH can also be set in a .env file.
`);
}

// Helper: Parse command-line arguments into an options object.
interface Options {
  dataPath: string | undefined;
  typePath: string | undefined;
  outputFilePath: string | undefined;
}

function parseArgs(): Options {
    const args = process.argv.slice(2);
    // Check for help flag
    if (args.includes('-h') || args.includes('--help')) {
        printHelp();
        process.exit(0);
    }

    // Start with default values (from .env or hard-coded)
    const options: Options = {
        dataPath: defaultDataPath,
        typePath: defaultTypePath,
        outputFilePath: defaultOutputFilePath,
    };

    // Parse flags manually
    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
        case '-dataPath':
            if (args[i + 1]) {
                options.dataPath = args[i + 1]!;
                i++;
            }
            break;
        case '-typePath':
            if (args[i + 1]) {
                options.typePath = args[i + 1]!;
                i++;
            }
            break;
        case '-outputFilePath':
            if (args[i + 1]) {
                options.outputFilePath = args[i + 1]!;
                i++;
            }
            break;
        default:
        // Ignore unknown flags or treat as positional
            break;
        }
    }
    return options;
}

// Main function to generate type configurations.
const generateTypeConfigs = async (): Promise<void> => {
    // Parse command-line arguments.
    const options = parseArgs();

    
    // Determine the open API path: support URL or local file path.
    console.log(`Using the following parameters:`);
    console.log(`  OpenAPI spec path: ${options.dataPath}`);
    console.log(`  Type definitions path: ${options.typePath}`);
    console.log(`  Output file path: ${options.outputFilePath}`);
    
    
    if(Object.values(options).some(v => v === void 0)) throw new Error('Missing parameters, please define above (use --help flag for guidance)');
    const outputFilePath = path.join(process.cwd(), options.outputFilePath!);
    
    let openApiPath = options.dataPath!;
    // Inform if the provided path looks like a URL.
    if (openApiPath.startsWith('http://') || openApiPath.startsWith('https://')) {
        console.log('Detected URL for OpenAPI spec.');
        
    } else {
        console.log('Detected local file path for OpenAPI spec.');
        openApiPath = path.join(process.cwd(), openApiPath);
    }

    // Ensure the output directory exists.
    const outputDir = path.dirname(outputFilePath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`Created missing output directory: ${outputDir}`);
    }

    // Parse the OpenAPI spec using SwaggerParser.
    console.log(`Parsing OpenAPI spec from: ${openApiPath}`);
    const api = (await SwaggerParser.parse(openApiPath)) as OpenAPIV3.Document;
    if (!api.components || !api.components.schemas) {
        throw new Error(
            'No schemas found in the OpenAPI document (currently only v3 onwards is supported).',
        );
    }
    const schemas = api.components.schemas;

    // Generate type configurations for each schema.
    const results = Object.entries(schemas).map(([schemaName, schema]) => {
        return [schemaName, generateTypeConfigForSchema(schemaName, schema)] as const;
    });

    // Separate enums from objects.
    const enums = results.filter(([_, r]) => r.isEnum);
    const objects = results.filter(([_, r]) => !r.isEnum);

    
    // Build file content.
    let fileContent = `// AUTO-GENERATED FILE - DO NOT EDIT\n`;
    fileContent += `// Generated from ${path.basename(openApiPath)}\n\n`;
    fileContent += `import * as ${typeAlias} from '${options.typePath}';\n`;

    const formImports =
    (enums.length > 0 ? 'EnumTypeConfig, ' : '') +
    (objects.length > 0 ? 'ShallowObjectTypeConfig' : '');
    fileContent += `import { ${formImports} } from '@src/lib/form';\n\n`;

    // Process enums first.
    for (const [_, result] of enums) {
    // TODO: Write errors as comments above the class definition if result.errors exists.
        fileContent += result.value;
        fileContent += '\n';
    }

    // Process objects.
    for (const [_, result] of objects) {
        fileContent += result.value;
        fileContent += '\n';
    }

    // Write the generated content to the output file.
    fs.writeFileSync(outputFilePath, fileContent, 'utf8');
    console.log(`Type configuration for object type configs generated at: ${outputFilePath}`);
};

// Run the generation and catch errors for stability.
generateTypeConfigs().catch((err) => {
    console.error('Error generating type configs:', err);
    process.exit(1);
});
