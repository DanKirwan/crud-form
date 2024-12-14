import { z, ZodObject, ZodType, ZodTypeAny } from 'zod';
import { FormValidator } from '../validation/validationTypes';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { Validator } from '@tanstack/form-core';
import { T } from 'vitest/dist/chunks/environment.LoooBwUu.js';
import { PrimitiveDeepKeys } from '../form';
import { Z } from 'vitest/dist/chunks/reporters.D7Jzd9GS.js';
import { i } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';

import type {PartialDeep} from 'type-fest';

type TestX = {
    test: string,
    a: number
}
const x = z.object({
    test: z.string(),
    a: z.number(),
})




export type ZodFormValidator<T> = z.ZodType<PartialDeep<T>>;

const buildValidator = <T extends object>(schema: z.ZodType<PartialDeep<T>>): FormValidator<T, Validator<unknown, ZodType>> => ({
    formValidator: schema,
    getFieldValidator: key => accessZodField(schema, key),
}) 



type ZodShape<T> = Record<keyof T, ZodTypeAny>;

export const accessZodField = <T>(schema: z.ZodType<PartialDeep<T>>, key: PrimitiveDeepKeys<T>) => {
    const keys = (key as string).split('.');
    return deepAccessZodField(schema, keys);
}

const deepAccessZodField = <T>(schema: z.ZodType<T>,  keys: string[]) => {
    if(keys.length == 0) return schema;
            
    if(schema instanceof ZodObject) {
        const [key, ...rest] = keys;
        const objSchema: ZodObject<ZodShape<T>> = schema;
        const childSchema = objSchema.shape[key as keyof T];
        if(!childSchema) return undefined;
        return deepAccessZodField(childSchema, rest);
    }
}