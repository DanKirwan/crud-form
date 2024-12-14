import { accessZodField, ZodFormValidator } from '@src/lib/zodAdapter/zodAdapter';
import { describe, expect, it } from 'vitest';
import { z } from 'zod';

describe('basic object fetching', () => {
    type BasicTest = {
        test: string,
        test2: string
    };

    const testSchema = z.string();
    const schema = z.object({
        test: testSchema,
    })
    it('find single level object values', () => {
        expect(accessZodField(schema, 'test')).toBe(testSchema);
    });

    it('returns undefined if object does not exist', () => {
        expect(accessZodField<BasicTest>(schema, 'test2')).toBe(undefined);
    });

})

describe('basic object fetching', () => {
    type BasicTest = {
        test: string,
        l2: {
            a: number,
            b: boolean
        }
    };

    const testSchema = z.string();
    const aSchema = z.number();
    const partialSchema: ZodFormValidator<BasicTest> = z.object({
        test: testSchema,
        l2: z.object({
            a: aSchema,
        }),
    });

    it('find single level object values', () => {
        expect(accessZodField(partialSchema, 'l2.a')).toBe(aSchema);
    });

    it('returns undefined if object does not exist', () => {
        expect(accessZodField<BasicTest>(partialSchema, 'l2.b')).toBe(undefined);
    });

})
