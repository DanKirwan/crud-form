import { AdjustedPrimitivesDeep, IsExactlyUndefined, NullableDeepPrimitives, PrimitiveDeepKeys, UnnestedArrayKeys } from '@src/lib/typeUtils';
import { describe, expect, it } from 'vitest';
import type { TypeMatchGuard } from './testTypeUtils';
import { assertTypeEqual } from './testTypeUtils';

describe('primitive deep keys', () => {
  
    it('returns basic primitve keys', () => {

        type Basic = {
            a: string, 
            b: string
        }
        
        assertTypeEqual<TypeMatchGuard<'a' | 'b' , PrimitiveDeepKeys<Basic>>>();
    });


    it('returns only primitve keys', () => {

        type Nested = {
            a: string, 
            b: {
                c: string
            }
        }

        
        assertTypeEqual<TypeMatchGuard<'a' | 'b.c' , PrimitiveDeepKeys<Nested>>>();
    });


    it('does not return keys inside arrays', () => {

        type Nested = {
            a: string, 
            b: {
                c: string
            }[]
        }
        
        assertTypeEqual<TypeMatchGuard<'a' , PrimitiveDeepKeys<Nested>>>();
    });

    it('does not return primitive array keys', () => {

        type Nested = {
            a: string, 
            b: {
                c: string[]
            }
        }
        assertTypeEqual<TypeMatchGuard<'a' , PrimitiveDeepKeys<Nested>>>();
    });

});

describe('primitive deep keys', () => {
  
    it('is never without any warrays', () => {

        type Basic = {
            a: string, 
            b: string
        }
        
        assertTypeEqual<TypeMatchGuard<never , UnnestedArrayKeys<Basic>>>();
    });


    it('is never without arrays even in nested', () => {

        type Nested = {
            a: string, 
            b: {
                c: string
            }
        }

        
        assertTypeEqual<TypeMatchGuard<never , UnnestedArrayKeys<Nested>>>();
    });


    it('returns arrays of objects', () => {

        type Nested = {
            a: string, 
            b: {
                c: string
            }[]
        }
        assertTypeEqual<TypeMatchGuard<'b' , UnnestedArrayKeys<Nested>>>();
    });

    it('can access deep keys of arrays', () => {

        type Nested = {
            a: string, 
            b: {
                c: string[]
            }
        }
        assertTypeEqual<TypeMatchGuard<'b.c' , UnnestedArrayKeys<Nested>>>();
    });

    it('doesnt attempt to return deep nested arrays', () => {

        type Nested = {
            a: string, 
            b: {
                c: string[]
            }[],
            d: number[]
        }
        assertTypeEqual<TypeMatchGuard<'b' | 'd' , UnnestedArrayKeys<Nested>>>();
    });
});

describe('adjusted primitives', () => {
    it('handles simple primitives', () => {
        type Basic = {a: string, b: string};
        type Adjusted = {a: string | null, b: string | null};
        assertTypeEqual<TypeMatchGuard<Adjusted, AdjustedPrimitivesDeep<Basic, null>>>();
    })

    it('only adjusts  primitives when nested', () => {
        type Nested = {a: { b: string}};
        type Adjusted = {a:{ b: string | null}};
        assertTypeEqual<TypeMatchGuard<Adjusted, AdjustedPrimitivesDeep<Nested, null>>>();
    })

    it('only adjusts primitives when lists', () => {
        type Nested = {a: { b: string}[]};
        type Adjusted = {a:{ b: string | null}[]};
        assertTypeEqual<TypeMatchGuard<Adjusted, AdjustedPrimitivesDeep<Nested, null>>>();
    })
    it('only adjusts non non list properties', () => {
        
        type Test = {a: string[], b: {c: {d: string}[], e: string[]}[]}
        type Adj = AdjustedPrimitivesDeep<Test, null>;
        type Exp = {a: string[], b: {c: {d: string | null}[], e: string[]}[]}
        assertTypeEqual<TypeMatchGuard<Exp, Adj>>();
    
    
    })
});

//Exactly Undefined 
() => {
    type X = undefined;
    type Y = X | null;
    type Z = number;
    assertTypeEqual<TypeMatchGuard<true, IsExactlyUndefined<X>>>();
    assertTypeEqual<TypeMatchGuard<false, IsExactlyUndefined<Y>>>();
    assertTypeEqual<TypeMatchGuard<false, IsExactlyUndefined<Z>>>();
};
// TODO

describe('deep primitive keys', () => {
    type PrimitiveTypeGuard<T> = TypeMatchGuard<PrimitiveDeepKeys<T>, PrimitiveDeepKeys<NullableDeepPrimitives<T>>>;
    it('works regardless of if wrapped in null', () => {
        type Basic = {a: string};
        assertTypeEqual<PrimitiveTypeGuard<Basic>>();
    })

    it('works nested if wrapped in null', () => {
        type Nested = {a: {b: string}};
        assertTypeEqual<PrimitiveTypeGuard<Nested>>();
    })

    it('works with lists if wrapped in null', () => {
        type Lists = {a: {b: string | null}[]};
        assertTypeEqual<PrimitiveTypeGuard<Lists>>();
    })

  
})

// TODO
describe('array keys', () => {
    type PrimitiveTypeGuard<T> = TypeMatchGuard<UnnestedArrayKeys<T>, UnnestedArrayKeys<NullableDeepPrimitives<T>>>;
    it('works regardless of if wrapped in null', () => {
        type Basic = {a: string};
        assertTypeEqual<PrimitiveTypeGuard<Basic>>();
    })

    it('works nested if wrapped in null', () => {
        type Nested = {a: {b: string}};

        
        assertTypeEqual<PrimitiveTypeGuard<Nested>>();
    })

    it('works with lists if wrapped in null', () => {
        type Lists = {a: {b: string | null}[]};

        assertTypeEqual<PrimitiveTypeGuard<Lists>>();
    })


    
})