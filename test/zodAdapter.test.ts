import { ObjectTypeConfig } from '@src/lib/form';
import { accessZodField, buildTypeConfigValidator, PartialZodFormValidator } from '@src/lib/zodAdapter/zodAdapter';
import { describe, expect, it, test } from 'vitest';
import { z } from 'zod';


type SimpleNested = {
    test: string,
    l2: {
        a: number | null,
        b: boolean
    },
    list: {x: string}[]
};

describe('basic object fetching', () => {


    const testSchema = z.string();
    const schema = z.object({
        test: testSchema,
    })
    it('find single level object values', () => {
        expect(accessZodField(schema, 'test')).toBe(testSchema);
    });
})

describe('nested object fetching', () => {

    const testSchema = z.string();
    const aSchema = z.number();
    const partialSchema = z.object({
        test: testSchema,
        l2: z.object({
            a: aSchema,
        }),
    }) satisfies PartialZodFormValidator<SimpleNested>;

    it('find single level object values', () => {
        expect(accessZodField(partialSchema, 'l2.a')).toBe(aSchema);
    });
})

// TODO when arrays exist make sure there are tests for that too
describe('base type config validator building', () => {
    
    const typeConfig: ObjectTypeConfig<SimpleNested> = {
        test: {
            isNullable: false,
            isOptional: false,
            type: 'String',
        },
    }

    const generatedSchema = buildTypeConfigValidator<SimpleNested>(typeConfig);

    it('correctly parses valid inputs', () => {
        const validSimpleNested: SimpleNested = {
            l2: {
                a: 2,
                b: true,
            },
            test: 'test',
            list: [],
        }

        expect(generatedSchema.parse(validSimpleNested)).toMatchObject(validSimpleNested)
       
    })

    it('fails on missing values', () => {
        const validSimpleNested: Omit<SimpleNested, 'test'> = {
            l2: {
                a: 2,
                b: true,
            },
            list: [
                {
                    x: 'test',
                },
            ],
        }

        expect(() => generatedSchema.parse(validSimpleNested)).toThrow();
    })
});


describe('accessZodField', () => {
    // Create a complex schema for testing
    const schema = z.object({
        user: z.object({
            name: z.string(),
            age: z.number(),
            tags: z.array(z.string()),
            address: z.object({
                street: z.string(),
            }),
        }),
        items: z.array(
            z.object({
                id: z.number(),
                values: z.array(z.boolean()),
            }),
        ),
        matrix: z.array(z.number()),
    });
  
    type SchemaT = z.infer<typeof schema>;

    test('accesses a nested object field', () => {
        const validator = accessZodField<SchemaT>(schema, 'user.address.street');
        expect(validator).toBeInstanceOf(z.ZodString);
    });
  
    test('accesses a nested array field', () => {
        const validator = accessZodField<SchemaT>(schema, 'user.tags[2]');
        // 'tags' is an array of strings
        expect(validator).toBeInstanceOf(z.ZodString);
    });
  
    test('accesses an array element field using bracket notation', () => {
        const validator = accessZodField<SchemaT>(schema, 'items[0].id');
        expect(validator).toBeInstanceOf(z.ZodNumber);
    });
  
    test('accesses a doubly nested array element using bracket notation', () => {
        const validator = accessZodField<SchemaT>(schema, 'matrix[2]');
        expect(validator).toBeInstanceOf(z.ZodNumber);
    });
  
  
    test('throws if accessing a non-object field as if it were an object', () => {
        // 'user.name' is a string, not an object or array
        expect(() => accessZodField(schema, 'user.name.something' as unknown as any)).toThrow();
    });
  
    test('throws if accessing an array with a non-numeric key', () => {
        expect(() => accessZodField(schema, 'user.tags.notanumber' as unknown as any)).toThrow();
    });
  
});

