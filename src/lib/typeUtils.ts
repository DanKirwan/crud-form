import { DeepKeys, DeepValue } from '@tanstack/form-core';

export type NullableDeepPrimitives<T> = AdjustedPrimitivesDeep<T, null>;
export type UndefinedDeepPrimitives<T> = AdjustedPrimitivesDeep<T, undefined>;

type PrefixFromDepth<T extends string | number, TDepth extends any[]> = TDepth['length'] extends 0 ? T : `.${T}`;


// We don't want to nullify direct children of lists because it is disallowed in this libray 

export type AdjustedPrimitivesDeep<
  T,
  AdjT,
  IsListChild extends boolean = false
> =
  // If T is an array, return an array of the adjusted element type.
  T extends any[]
    ? Array<AdjustedPrimitivesDeep<T[number], AdjT, true>>
    : IsRecord<T> extends true
      ? (
          // Preserve required keys exactly
          { [K in RequiredKeys<T>]: AdjustedPrimitivesDeep<T[K], AdjT, false> } &
          // Preserve optional keys
          { [K in OptionalKeys<T>]?: AdjustedPrimitivesDeep<T[K], AdjT, false> }
        )
      // If T is a primitive:
      : IsListChild extends true ? T : T | AdjT;

type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never
  }[keyof T];
  
  type RequiredKeys<T> = Exclude<keyof T, OptionalKeys<T>>;
  


/** Extracts all primitive values of fields that are not inside arrays */
export type PrimitiveDeepKeys<T> = InternalPrimitiveDeepKeys<T, []> & DeepKeys<T>; // DeepKeys required for 

// Filters existing deep keys to give only the primitive fields not in arrays
type InternalPrimitiveDeepKeys<T, TDepth extends any[] > = {[K in keyof T]: 
    K extends string 
        ? IsArray<T[K]> extends false
            ? IsRecord<T[K]> extends true 
                ?  `${PrefixFromDepth<K, TDepth>}${InternalPrimitiveDeepKeys<T[K], [...TDepth, any]>}` 
                : PrefixFromDepth<K, TDepth>
            : never
        : never
}[keyof T];


export type AllPrimitiveDeepKeys<T> = {[K in DeepKeys<T>]: IsPrimitive<DeepValue<T, K>> extends true ? K : never}[DeepKeys<T>];



export type UnnestedArrayKeys<T> = InternalUnestedArrayKeys<T, []> & DeepKeys<T>;
// Returns all keys where they are not children of other arrays
type InternalUnestedArrayKeys<T, TDepth extends any[]> = {[K in keyof T]: 
    IsArray<T[K]> extends true
        ? K extends string ? PrefixFromDepth<K, TDepth> : never
        : IsRecord<T[K]> extends true 
            ? K extends string  ? `${PrefixFromDepth<K, TDepth>}${InternalUnestedArrayKeys<T[K], [...TDepth, any]>}` : never 
            : never
}[keyof T];

export type UnnestedArrayItemKey<T, K extends UnnestedArrayKeys<T>> = 
    DeepValue<T, K> extends unknown[] ? `${K}[${number}]` extends DeepKeys<T> ? `${K}[${number}]`: never : never;


export type IsPrimitive<T> = IsArray<T> extends false 
    ? IsRecord<T> extends false 
        ? true
        : false
    : false;

export type IsArray<T> = T extends unknown[] ? true : false;

export type IsRecord<T> = T extends object 
    ? T extends any[] 
        ? false 
        : T extends Function | Date | Uint8Array | File
            ? false 
            : true
    : false;

export  type NonEmptyList<T> = [T, ...T[]];


export type IsExactlyUndefined<T> =
    [T] extends [undefined]
    ? ([undefined] extends [T] ? true : false)
    : false;