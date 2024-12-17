import { DeepKeys, DeepValue } from '@tanstack/form-core';



export type NullableDeepPrimitives<T> = AdjustedPrimitivesDeep<T, null>;
export type UndefinedDeepPrimitives<T> = AdjustedPrimitivesDeep<T, undefined>;

export type AdjustedPrimitivesDeep<T, AdjT> = {[ObjK in keyof T]: 
    IsRecord<T[ObjK]> extends true
        ? AdjustedPrimitivesDeep<T[ObjK], AdjT>
        : T[ObjK] | AdjT
};


// Filters existing deep keys to give only the primitive fields
export type PrimitiveDeepKeys<T> = DeepKeys<T> extends infer K
    ? K extends string
        ? IsRecord<DeepValue<T, K>> extends false
            ? K
            : never
        : never
    : never;




    
export type IsRecord<T> = T extends object
    ? T extends Date | Uint8Array | File // Add other non-record types here
        ? false
        : true
    : false;

export  type NonEmptyList<T> = [T, ...T[]];
