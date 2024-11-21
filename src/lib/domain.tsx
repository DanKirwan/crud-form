

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



export type OdataTypeToValue<K extends ObjectMappings['key']> =
    Extract<ObjectMappings, { key: K }>['value'];

export type SingleComponentType<RenderT, K extends ObjectMappings['key']> = {
    type: K,
    display: (data: OdataTypeToValue<K>) => RenderT,
    edit: (data: OdataTypeToValue<K>, onChange: (value: OdataTypeToValue<K>) => void) => RenderT
};

// Enforce a component for each key in ObjectMappings
export type ComponentType<RenderT> = {
    [K in ObjectMappings['key']]: SingleComponentType<RenderT, K>
}[ObjectMappings['key']];


export type ComponentMapping<KeyT extends string, RenderT> = Record<KeyT, ComponentType<RenderT>>;
