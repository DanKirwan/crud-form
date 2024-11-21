import { isObject } from 'lodash';
import { objectEntries } from './object';

/**
 * Example usage of OData query parameters - using NetworkModel for example ref:
 * 
 * 1. Filter
 *    Scenario: Get NetworkModel entities where networkId equals 'x'.
 *    OData Query: $filter=networkId eq 'x'
 *    TypeScript:
 *    ```
 *    const queryParams = buildQueryArray({ filter: "networkId eq 'x'" });
 *    const res = await networkModelClient.getAll(...queryParams);
 *    ```
 * 
 * 2. Select
 *    Scenario: Select only networkId and networkName fields from NetworkModel.
 *    OData Query: $select=networkId,networkName
 *    TypeScript:
 *    ```
 *    const queryParams = buildQueryArray({ select: "networkId,networkName" });
 *    const res = await networkModelClient.getAll(...queryParams);
 *    ```
 * 
 * 3. OrderBy
 *    Scenario: Order NetworkModel entities by networkName in ascending order.
 *    OData Query: $orderby=networkName asc
 *    TypeScript:
 *    ```
 *    const queryParams = buildQueryArray({ orderby: "networkName asc" });
 *    const res = await networkModelClient.getAll(...queryParams);
 *    ```
 * 
 * 4. Top
 *    Scenario: Get the top 5 NetworkModel entities.
 *    OData Query: $top=5
 *    TypeScript:
 *    ```
 *    const queryParams = buildQueryArray({ top: 5 });
 *    const res = await networkModelClient.getAll(...queryParams);
 *    ```
 * 
 * 5. Skip
 *    Scenario: Skip the first 10 NetworkModel entities.
 *    OData Query: $skip=10
 *    TypeScript:
 *    ```
 *    const queryParams = buildQueryArray({ skip: 10 });
 *    const res = await networkModelClient.getAll(...queryParams);
 *    ```
 * 
 * 6. Count
 *    Scenario: Get the count of NetworkModel entities along with the data.
 *    OData Query: $count=true
 *    TypeScript:
 *    ```
 *    const queryParams = buildQueryArray({ count: true });
 *    const res = await networkModelClient.getAll(...queryParams);
 *    ```
 * 
 * 7. Expand
 *    Scenario: Expand the related Network entities of NetworkModel.
 *    OData Query: $expand=network
 *    TypeScript:
 *    ```
 *    const queryParams = buildQueryArray({ expand: "network" });
 *    const res = await networkModelClient.getAll(...queryParams);
 *    ```
 * 
 * 8. Combining Parameters
 *    Scenario: Get the top 5 NetworkModel entities where networkId equals 'x',
 *    including related Network entities, and order them by networkName.
 *    OData Query: $filter=networkId eq 'x'&$orderby=networkName asc&$top=5&$expand=network
 *    TypeScript:
 *    ```
 *    const queryParams = buildQueryArray({
 *        filter: "networkId eq 'x'",
 *        orderby: "networkName asc",
 *        top: 5,
 *        expand: "network"
 *    });
 *    const res = await networkModelClient.getAll(...queryParams);
 *    ```
 */
export type QueryParams = {
    filter?: string;
    select?: string;
    orderby?: string;
    top?: number;
    skip?: number;
    count?: boolean;
    expand?: string;
};

export type GetAllArgs = [
    string | undefined,  // filter
    string | undefined,  // select
    string | undefined,  // orderby
    number | undefined,  // top
    number | undefined,  // skip
    boolean | undefined, // count
    string | undefined   // expand
];

export const buildQueryArray = (params: QueryParams): GetAllArgs => [
    params.filter,
    params.select,
    params.orderby,
    params.top,
    params.skip,
    params.count,
    params.expand,
];


/**
 * Given an entity type E returns an object consisting of its relations (recursively).
 * 
 * Note: Currently there is no max depth of the recursion, might need to be added.
 * 
 * Assumption: relation key = relation object + 'Id' suffix, 
 * e.g. relation key = networkId, where relation object = network
 * 
 * Assumption: If property is nullable and an array of objects,
 * then the property is treated as a relation.
 */
export type Relations<E extends Record<string, any>> = {
    [K in keyof E & string as `${K}Id` extends keyof E & string
    ? K
    : null extends E[K]
    ? NonNullable<E[K]> extends (infer Arr)[]
    ? Arr extends Record<string, any>
    ? K
    : never
    : never
    : never
    ]?: Relations<NonNullable<E[K]> extends (infer Arr)[] ? Arr extends Record<string, any> ? Arr : never : NonNullable<E[K]>> & { _extra?: string }
};

/**
 * Given an entity type E and a relations object R, 
 * returns an object consisting of the non-relation properties of E 
 * and the expanded relations based on R.
 */
export type Expand<E extends Record<string, any>, R extends Relations<E>> = {
    [K in keyof E & string as `${K}Id` extends keyof E & string ? K extends keyof R & string ? K : never : K]: K extends keyof R & string
    ? `${K}Id` extends keyof E & string
    ? null extends E[`${K}Id`]
    ? Expand<NonNullable<E[K]>, NonNullable<R[K]>> | null
    : Expand<NonNullable<E[K]>, NonNullable<R[K]>>
    : null extends E[K]
    ? NonNullable<E[K]> extends (infer Arr)[]
    ? Arr extends Record<string, any>
    ? Expand<Arr, NonNullable<R[K]>>[]
    : E[K]
    : E[K]
    : E[K]
    : E[K]
};

/**
 * Given a relations object, returns a string (used in OData requests) 
 * consisting of the relations expanded.
 */
const relationsToExpand = (relations: Relations<Record<string, any>>): string => {
    return objectEntries(relations).map(([k, v]) => {
        if (!isObject(v) || Object.keys(v).length === 0) return k;
        const { _extra, ...nestedRelations } = v;
        const expand = Object.keys(nestedRelations).length === 0 ? void 0 : `$expand=${relationsToExpand(nestedRelations)}`;
        const nested = [_extra, expand].filter(x => x !== void 0).join(',');
        return `${k}(${nested})`;
    }).join(',');
};

/**
 * Makes an OData get request with the given params and relations.
 * The result correctly expands the relations based on the relations parameter.
 * 
 * Important: This function might not accurately detect properties that can be expanded.
 * If you encounter such a case have a look at the assumtions that the Relations type makes
 */
export const getWithRelations = async <E extends Record<string, any>, R extends Relations<E>>(
    client: { get: (...args: GetAllArgs) => Promise<E[]> },
    params: Omit<QueryParams, 'expand'> & { expand?: R },
) => {
    const { expand, ...restParams } = params;
    const expandStr = expand !== void 0 ? relationsToExpand(expand) : void 0;
    const queryArray = buildQueryArray({ ...restParams, expand: expandStr });
    const res = await client.get(...queryArray)
    return res as Expand<E, R>[];
};