// import { DomainObjectTypeConfig } from "@src/lib/form";

import { DomainObjectTypeConfig} from "@src/lib/form";
import { y, Y } from "./yInfo";


export type X = {
    y: Y;
}

export const x = {
    y: {config: y satisfies DomainObjectTypeConfig<Y>, isNullable: false, isUndefinable: false}
} as const satisfies DomainObjectTypeConfig<X>;





  