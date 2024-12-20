export type TypeMatchGuard<A, B> =  Exclude<A,B> | Exclude<B,A>;


export function assertTypeEqual<T extends never>() {}