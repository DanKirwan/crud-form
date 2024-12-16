import { DeepValue, Validator } from '@tanstack/form-core';
import { z, ZodObject, ZodType, ZodTypeAny } from 'zod';
import { FormValidator } from '../validation/validationTypes';

import { get } from 'lodash-es';
import type { PartialDeep } from 'type-fest';
import { ObjectMappings, OdataTypeToValue } from '../domain';
import { FieldTypeConfig, ObjectTypeConfig } from '../form';
import { IsRecord, PrimitiveDeepKeys } from '../typeUtils';




// Prefer ZodFormValidator but allow for partial (less safe but useful in big objects)
export type ZodFormValidator<T> = z.ZodType<T>;
export type PartialZodFormValidator<T> = z.ZodType<PartialDeep<T>>;

export const buildZodValidator = <T extends object>(typeConfig: ObjectTypeConfig<T>, additionalSchema?: z.ZodType<PartialDeep<T>>): FormValidator<T, Validator<unknown, ZodType>> => {
    

    // TODO figure out why this needs to be cast to unknown first
    const baseZodTypeSchema: z.ZodType<T> = buildTypeConfigValidator(typeConfig) as unknown as z.ZodType<T>;
    
    return {
        formValidator: additionalSchema ? baseZodTypeSchema.pipe(additionalSchema) : baseZodTypeSchema,
        getFieldValidator: key => {
            const baseValidator = accessZodField(baseZodTypeSchema, key);
            if(!baseValidator) throw new Error('failed to create a base validator');
            if(!additionalSchema) return baseValidator;
            const additionalValidator = accessZodField(additionalSchema!, key);
            if(!additionalValidator) return baseValidator;
            return additionalValidator.pipe(baseValidator);
        },
        isFieldRequired: key => {
            const config = get(typeConfig, key) as FieldTypeConfig<DeepValue<T, typeof key>>;
            if(!config.isNullable || !additionalSchema) return true;
            return !(accessZodField(additionalSchema, key)?.isOptional() ?? true)
        },
    }
}




type ZodDataTypeMap = {[K in ObjectMappings['key']]: ZodType<OdataTypeToValue<K>>};

const requiredMessage = 'Field Required'


const requiredOptions = {message: requiredMessage, invalid_type_error: requiredMessage, required_error: requiredMessage} as const satisfies z.RawCreateParams;

// TODO make these slightly more safe e.g. checking bounds on numbers
const zodDataTypeMap: ZodDataTypeMap = {
    'Edm.Boolean': z.boolean(requiredOptions),
    'Edm.Byte': z.number(requiredOptions),
    'Edm.Decimal': z.number(requiredOptions),
    'Edm.DateTimeOffset': z.date(requiredOptions),
    'Edm.Double': z.number(requiredOptions),
    'Edm.Guid': z.string(requiredOptions),
    'Edm.Int32': z.number(requiredOptions).int(requiredMessage),
    'Edm.Single': z.number(requiredOptions),
    'Edm.String': z.string(requiredOptions).min(1, requiredMessage),
}



type ZodDeep<T> = {[K in keyof T]: IsRecord<T[K]> extends true ? ZodObject<ZodDeep<T[K]>> : ZodType<T[K]>};

// TODO write more tests for this
export const buildTypeConfigValidator = <T extends object>(typeConfig: ObjectTypeConfig<T>): z.ZodObject<ZodDeep<T>> => {
    const children = Object.entries(typeConfig).map(([key, child]) => {

        if(child === null || child === void 0) throw new Error('Invalid object configuration - no configuration can be null or undefined');
        if(typeof child !== 'object') throw new Error('Invalid object configuration - field configurations must be objects');

        if('type' in child && typeof child.type === 'string') {
            // this is a base type config 
            const config = child as FieldTypeConfig<T[keyof T]>;

            const baseZod = zodDataTypeMap[config.type];
            return [key,  config.isNullable ? baseZod.nullable() : baseZod]
        }

        return [key, buildTypeConfigValidator(child)];
    });

    return z.object<ZodDeep<T>>(Object.fromEntries(children));


}
// const zodject = z.intersection(z.object({
//     a: z.string(),
//     b: z.string(),
// }), z.object({
//     a: z.string(),
// }));

// type Zodject = z.infer<typeof zodject>

// const x: Zodject = {
//     a: 'test',
//     b: 'test',
// }


type ZodShape<T> = Record<keyof T, ZodTypeAny>;

export const accessZodField = <T>(schema: z.ZodType<T>, key: PrimitiveDeepKeys<T>) => {
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
    throw new Error('typeof schema is not a zod object matching T');
}