import { KeysOfUnion } from 'type-fest';

/**
 * Like `Object.entries` but typesafe.
 */
export const objectEntries = <T extends object>(obj: T) => Object.entries(obj) as Array<[KeysOfUnion<T>, T[KeysOfUnion<T>]]>;

export const typeSafeObjectFromEntries = <const T extends ReadonlyArray<readonly [string, unknown]>>(
    entries: T,
): { [K in T[number] as K[0]]: K[1] } => {
    return Object.fromEntries(entries) as { [K in T[number] as K[0]]: K[1] };
};