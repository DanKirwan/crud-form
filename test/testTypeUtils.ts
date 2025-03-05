export type TypeMatchGuard<A, B> =  Exclude<A,B> | Exclude<B,A>;

//@ts-ignore TS6133
export function assertTypeEqual<T extends never>() {}