// import { DomainObjectTypeConfig } from "@src/lib/form";

import { DomainObjectTypeConfig} from "@src/lib/form";


export type X = {
    y: Y;
}
export type Y = {
    x: X;
    test: string;
}

let xInternal: DomainObjectTypeConfig<X>;
let yInternal: DomainObjectTypeConfig<Y>;

// Initialize with circular references using non-null assertions.
const x = {
    y: {config: yInternal!, isNullable: false, isUndefinable: false}
} as const satisfies DomainObjectTypeConfig<X>;

const y =  {
    x: { config: x satisfies DomainObjectTypeConfig<X>, isNullable: false, isUndefinable: false},
    test: {isNullable: false, isUndefinable: false, type: 'Guid'}
} as const satisfies DomainObjectTypeConfig<Y>;
export type YConfigT = typeof y;


yInternal = y;


export { x, y};


  