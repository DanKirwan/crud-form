// import { DomainObjectTypeConfig } from "@src/lib/form";

import { DomainObjectTypeConfig} from "@src/lib/form";
import { X, x } from "./xInfo";


export type Y = {
	x: X;
	test: string;
}


export const y =  {
    x: { config: x  satisfies DomainObjectTypeConfig<X>, isNullable: false, isUndefinable: false},
    test: {isNullable: false, isUndefinable: false, type: 'Guid'}
} as const satisfies DomainObjectTypeConfig<Y>;
export type YConfigT = typeof y;

