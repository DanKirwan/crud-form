import { DeepKeys, Validator } from '@tanstack/form-core';
import { z, ZodArray, ZodBoolean, ZodObject, ZodTuple, ZodType, ZodTypeAny } from 'zod';
import { FormValidator } from '../validation/validationTypes';

import type { PartialDeep } from 'type-fest';
import { ObjectMappings, OdataTypeToValue } from '../domain';
import {  EnumTypeConfig, FieldTypeConfig, ObjectTypeConfig } from '../form';
import { objectEntries } from '../objectUtils';
import { AllPrimitiveDeepKeys, IsRecord} from '../typeUtils';




// Prefer ZodFormValidator but allow for partial (less safe but useful in big objects)
export type ZodFormValidator<T> = z.ZodType<T>;
export type PartialZodFormValidator<T> = z.ZodType<PartialDeep<T>>;

export const buildZodValidator = <T extends object>(typeConfig: ObjectTypeConfig<T>, additionalSchema?: PartialZodFormValidator<T>): FormValidator<T, Validator<unknown, ZodType>> => {
    


    const baseZodTypeSchema = buildTypeConfigValidator<T>(typeConfig);
    
    // TODO typing here should work they match? 

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
            return !(accessZodField(baseZodTypeSchema, key)?.isNullable());
        },
    }
}




type ZodDataTypeMap = {[K in ObjectMappings['key']]: ZodType<OdataTypeToValue<K>>};

const requiredMessage = 'Field Required'


const requiredOptions = {message: requiredMessage, invalid_type_error: requiredMessage, required_error: requiredMessage} as const satisfies z.RawCreateParams;

// TODO make these slightly more safe e.g. checking bounds on numbers
const zodDataTypeMap = {
    'Boolean': z.boolean(requiredOptions),
    'Byte': z.number(requiredOptions).max(256),
    'Decimal': z.number(requiredOptions),
    'DateTimeOffset': z.date(requiredOptions),
    'Double': z.number(requiredOptions),
    'Guid': z.string(requiredOptions),
    'Int32': z.number(requiredOptions).int(requiredMessage),
    'Single': z.number(requiredOptions),
    'String': z.string(requiredOptions).min(1, requiredMessage),
} satisfies ZodDataTypeMap;


type ZodDeep<T> = IsRecord<T> extends true ? ZodObject<{[K in keyof T]: ZodDeep<T[K]>}> : T extends unknown[] ? ZodArray<ZodDeep<T[number]>> : T extends boolean ? ZodBoolean :  ZodType<T>;


const isFieldTypeConfig = <T>(typeConfig: ObjectTypeConfig<T> | FieldTypeConfig<T>): typeConfig is FieldTypeConfig<T> => {
    return (
        ('type' in typeConfig && typeof typeConfig.type === 'string')
        || ('options' in typeConfig && typeof typeConfig.options == 'object'));
}

const isEmptyObject = (typeConfig: object | {}): typeConfig is {} => {
    return Object.values(typeConfig).length == 0;
}

const createEnumValidator = <T extends string | number | undefined | null, TConfig extends EnumTypeConfig<T>>(
    record: TConfig,
): z.ZodType<T[keyof T]> => {
    // Extract all the valid values from the record.
    const validValues = Object.values(record) as T[keyof T][];
    // Gather the keys so we can include them in the error message.
    const allowedKeys = Object.keys(record);
    
    return z.custom<T[keyof T]>(
        (val): val is T[keyof T] => validValues.includes(val),
        {
            message: `Expected one of: ${allowedKeys.join(', ')}`,
        },
    );
}

// TODO write more tests for this
export const buildTypeConfigValidator = <T>(typeConfig: ObjectTypeConfig<T>): ZodDeep<T> => {
    const children = objectEntries(typeConfig).map(([key, child]) => {

        if(child === null || child === void 0) throw new Error('Invalid object configuration - no configuration can be null or undefined');
        if(typeof child !== 'object') throw new Error('Invalid object configuration - field configurations must be objects');

        if(isEmptyObject(child)) throw new Error('Cannot process empty child');

        if(isFieldTypeConfig(child)) {
            // this is a base type config 
            const config = child as FieldTypeConfig<T[keyof T]>;
            if('type' in config) {

                const baseZod = zodDataTypeMap[config.type];
                return [key,  config.isNullable ? baseZod.nullable() : baseZod] as const;
            }
            return [key, createEnumValidator(config.options)]
        }

        return [key, buildTypeConfigValidator(child)] as const;
    });


    const obj = Object.fromEntries(children);
    return z.strictObject(obj) as ZodDeep<T>;
}



function parsePath(path: string): string[] {
    // Split by '.' first
    const parts = path.split('.');
  
    const segments: string[] = [];
    for (const part of parts) {
        // For each part, we may have bracket indices like "a[2]" or "c[3]"
        // Use a regex to capture sequences of characters and indices
        // This pattern matches sequences of non-bracket chars followed by zero or more [\d+] groups
        const regex = /([^[\]]+)(?:\[(\d+)\])?/g;
        let match: RegExpExecArray | null;
        let remainder = part;
  
        while ((match = regex.exec(remainder)) !== null) {
            const [, key, index] = match;
            if (key) segments.push(key);
            if (index !== undefined) segments.push(index);
        }
    }
  
    return segments;
}
  

export function accessZodField<T>(schema: PartialZodFormValidator<T> | ZodDeep<T>, path: DeepKeys<T>) {
    const segments = parsePath(`${path}`);
    let current: ZodTypeAny = schema;
  
    for (const segment of segments) {
        const isIndex = /^\d+$/.test(segment);
  
        if (current instanceof ZodObject) {
        // Current is an object
            if (isIndex) {
                throw new Error(`Encountered numeric segment "${segment}" on an object field at path "${path}".`);
            }
            const shape = current.shape;
            const nextField = shape[segment];
            if (!nextField) {
                console.warn(`No field "${segment}" found in object schema at path "${path}".`);
                return undefined;
            }
            current = nextField;
  
        } else if (current instanceof ZodArray) {
        // Current is an array
            if (!isIndex) {
                throw new Error(`Encountered non-numeric segment "${segment}" on an array field at path "${path}".`);
            }
            // Arrays share the same schema for all elements
            current = current.element;
  
        } else if (current instanceof ZodTuple) {
        // Current is a tuple
            if (!isIndex) {
                throw new Error(`Encountered non-numeric segment "${segment}" on a tuple field at path "${path}".`);
            }
            const index = Number(segment);
            const items = current.items;
            if (index < 0 || index >= items.length) {
                throw new Error(`Index "${segment}" out of range for tuple schema at path "${path}".`);
            }
            current = items[index];
  
        } else {
        // Not an object/array/tuple, can't go deeper
            return undefined;
            console.log(`Cannot access "${segment}" on a non-object/non-array/non-tuple field at path "${path}".`);
        }
    }
  
    return current;
}
 