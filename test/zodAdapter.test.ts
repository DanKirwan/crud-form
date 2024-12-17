import { ObjectTypeConfig } from '@src/lib/form';
import { accessZodField, buildTypeConfigValidator, PartialZodFormValidator } from '@src/lib/zodAdapter/zodAdapter';
import { describe, expect, it } from 'vitest';
import { z } from 'zod';


type SimpleNested = {
    test: string,
    l2: {
        a: number | null,
        b: boolean
    }
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
        l2: {
            a: {
                isNullable: true,
                type: 'Edm.Int32',
            },
            b: {
                isNullable: false,
                type: 'Edm.Boolean',
            },
        },
        test: {
            isNullable: false,
            type: 'Edm.String',
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
        }

        expect(generatedSchema.parse(validSimpleNested)).toMatchObject(validSimpleNested)
       
    })

    it('fails on missing values', () => {
        const validSimpleNested: Omit<SimpleNested, 'test'> = {
            l2: {
                a: 2,
                b: true,
            },
        }

        expect(() => generatedSchema.parse(validSimpleNested)).toThrow();
    })
});
