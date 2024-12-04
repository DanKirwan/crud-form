import { FieldApi, Validator } from "@tanstack/form-core";


export type ObjectTypes =
    "Edm.Double" |
    "Edm.Single" |
    "Edm.Int32" |
    "Edm.Byte" |
    "Edm.Decimal" |
    "Edm.Guid" |
    "Edm.Boolean" |
    "Edm.DateTimeOffset" |
    "Edm.String" |
    "Edm.GeographyPoint";

type ObjectMapping<X extends ObjectTypes, T> = { key: X, value: T }


export type ObjectMappings =
    ObjectMapping<'Edm.Double', number> |
    ObjectMapping<'Edm.Single', number> |
    ObjectMapping<'Edm.Int32', number> |
    ObjectMapping<'Edm.Byte', number> |
    ObjectMapping<'Edm.Decimal', number> |
    ObjectMapping<'Edm.Guid', string> |
    ObjectMapping<'Edm.Boolean', boolean> |
    ObjectMapping<'Edm.String', string> |
    ObjectMapping<'Edm.DateTimeOffset', Date> |
    ObjectMapping<'Edm.GeographyPoint', { lat: number, long: number }>;


type NonEmptyList<T> = [T, ...T[]];

export type ComponentMap<RenderT> = {
    [K in ObjectMappings['key']]: NonEmptyList<SingleComponentType<RenderT, K>>
}

export type OdataTypeToValue<K extends ObjectMappings['key']> =
    Extract<ObjectMappings, { key: K }>['value'];


type TanStackField<TData> = FieldApi<Record<string, TData>, string, Validator<TData, string>, undefined, TData>;

export type FieldEditOptions<TData> = Pick<TanStackField<TData>, 'state' | 'handleBlur' | 'handleChange' | 'name'> & { label: string };
export type FieldDisplayOptions<TData> = Omit<FieldEditOptions<TData>, 'handleBlur' | 'handleChange'> & { label: string };


export type SingleComponentType<RenderT, K extends ObjectMappings['key']> = {
    type: K,
    name: string,
    display: (field: FieldDisplayOptions<OdataTypeToValue<K>>) => RenderT,
    edit: (data: FieldEditOptions<OdataTypeToValue<K>>) => RenderT
};

export type AllComponentNames<RenderT, MapT extends ComponentMap<RenderT>> = {
    [K in ObjectMappings['key']]: ComponentNames<RenderT, MapT>[K];
}[ObjectMappings['key']];



export type ComponentNames<RenderT, MapT extends ComponentMap<RenderT>> = {
    [K in ObjectMappings['key']]: MapT[K][number]['name'];
};


// Enforce a component for each key in ObjectMappings
export type ComponentType<RenderT> = {
    [K in ObjectMappings['key']]: SingleComponentType<RenderT, K>
}[ObjectMappings['key']];


export type ComponentMapping<KeyT extends string, RenderT> = Record<KeyT, ComponentType<RenderT>>;
