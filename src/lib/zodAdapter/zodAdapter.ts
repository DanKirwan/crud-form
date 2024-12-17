import { DeepValue, Validator } from '@tanstack/form-core';
import { z, ZodObject, ZodType } from 'zod';
import { FormValidator } from '../validation/validationTypes';

import { get } from 'lodash-es';
import type { PartialDeep } from 'type-fest';
import { ObjectMappings, OdataTypeToValue } from '../domain';
import { FieldTypeConfig, ObjectTypeConfig } from '../form';
import { objectEntries } from '../objectUtils';
import { IsRecord, PrimitiveDeepKeys } from '../typeUtils';




// Prefer ZodFormValidator but allow for partial (less safe but useful in big objects)
export type ZodFormValidator<T> = z.ZodType<T>;
export type PartialZodFormValidator<T> = z.ZodType<PartialDeep<T>>;

export const buildZodValidator = <T extends object>(typeConfig: ObjectTypeConfig<T>, additionalSchema?: z.ZodObject<ZodDeep<PartialDeep<T>>>): FormValidator<T, Validator<unknown, ZodType>> => {
    


    // TODO figure out why this needs to be cast to unknown first
    const baseZodTypeSchema = buildTypeConfigValidator(typeConfig);
    
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
const zodDataTypeMap = {
    'Edm.Boolean': z.boolean(requiredOptions),
    'Edm.Byte': z.number(requiredOptions).max(256),
    'Edm.Decimal': z.number(requiredOptions),
    'Edm.DateTimeOffset': z.date(requiredOptions),
    'Edm.Double': z.number(requiredOptions),
    'Edm.Guid': z.string(requiredOptions),
    'Edm.Int32': z.number(requiredOptions).int(requiredMessage),
    'Edm.Single': z.number(requiredOptions),
    'Edm.String': z.string(requiredOptions).min(1, requiredMessage),
} satisfies ZodDataTypeMap;


type ZodDeep<T> = {[K in keyof T]: IsRecord<T[K]> extends true ? ZodObject<ZodDeep<T[K]>> : ZodType<T[K]>};


const isFieldTypeConfig = <T>(typeConfig: ObjectTypeConfig<T> | FieldTypeConfig<T> | {}): typeConfig is FieldTypeConfig<T> => {
    return ('type' in typeConfig && typeof typeConfig.type === 'string');
}


type DeepRecord<T> = {[K in keyof T]:  IsRecord<T> extends true ? DeepRecord<T[K]> : T[K]}
// TODO write more tests for this
export const buildTypeConfigValidator = <T>(typeConfig: ObjectTypeConfig<DeepRecord<T>>): z.ZodObject<ZodDeep<DeepRecord<T>>> => {
    const children = objectEntries(typeConfig).map(([key, child]) => {

        if(child === null || child === void 0) throw new Error('Invalid object configuration - no configuration can be null or undefined');
        if(typeof child !== 'object') throw new Error('Invalid object configuration - field configurations must be objects');

        if(isFieldTypeConfig(child)) {
            // this is a base type config 
            const config = child as FieldTypeConfig<T[keyof T]>;

            const baseZod = zodDataTypeMap[config.type];
            return [key,  config.isNullable ? baseZod.nullable() : baseZod] as const;
        }

        return [key, buildTypeConfigValidator(child)] as const;
    });


    const obj: ZodDeep<DeepRecord<T>> = Object.fromEntries(children);
    return z.strictObject(obj);
}

export const accessZodField = <T>(schema: z.ZodObject<ZodDeep<T>>, path: PrimitiveDeepKeys<T>) => {
    const keys = (path as string).split('.');
    return deepAccessZodField(schema, keys);
}

const deepAccessZodField = <T>(schema:  z.ZodObject<ZodDeep<T>>,  keys: string[]) => {
            
    const [key, ...rest] = keys;
    if(key === void 0) throw new Error('Cannot index schema without a key');

    const childSchema = schema.shape[key as keyof T];

    if(!(childSchema instanceof ZodObject)) {
        if(keys.length > 1) throw new Error('Could not find relevant key');
        return childSchema;
    }

    return deepAccessZodField(childSchema, rest);
}