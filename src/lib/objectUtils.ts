import { KeysOfUnion } from 'type-fest';

/**
 * Like `Object.entries` but typesafe.
 */
export const objectEntries = <T extends object>(obj: T) => Object.entries(obj) as Array<[KeysOfUnion<T>, T[KeysOfUnion<T>]]>;