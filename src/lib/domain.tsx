import { FieldApi, Validator } from '@tanstack/form-core';
import { ContainerLayoutConfig, ContainerWrapperConfig } from './containers';


export type ObjectTypes =
    'Edm.Double' |
    'Edm.Single' |
    'Edm.Int32' |
    'Edm.Byte' |
    'Edm.Decimal' |
    'Edm.Guid' |
    'Edm.Boolean' |
    'Edm.DateTimeOffset' |
    'Edm.String';

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
    ObjectMapping<'Edm.DateTimeOffset', Date> ;


export type OdataTypeToValue<K extends ObjectMappings['key']> =
    Extract<ObjectMappings, { key: K }>['value'];


type TanStackField<TData> = FieldApi<Record<string, TData>, string, Validator<TData, string>, undefined, TData>;

export type FieldEditOptions<TData> = Pick<TanStackField<TData>, 'state' | 'handleBlur' | 'handleChange' | 'name'> & { label: string, required: boolean };
export type FieldDisplayOptions<TData> = Omit<FieldEditOptions<TData>, 'handleBlur' | 'handleChange'> & { label: string };

export type SingleComponentType<RenderT, K extends ObjectMappings['key']> = {
    type: K,
    name: string,
    display: (field: FieldDisplayOptions<OdataTypeToValue<K>>) => RenderT,
    edit: (data: FieldEditOptions<OdataTypeToValue<K>>) => RenderT
};


export type ComponentMap<RenderT> = {
    [K in ObjectMappings['key']]: NonEmptyList<SingleComponentType<RenderT, K>>
}



// util methods 
export type AllComponentNames<RenderT, MapT extends ComponentMap<RenderT>> = {
    [K in ObjectMappings['key']]: ComponentNames<RenderT, MapT>[K];
}[ObjectMappings['key']];


export type ComponentNames<RenderT, MapT extends ComponentMap<RenderT>> = {
    [K in ObjectMappings['key']]: MapT[K][number]['name'];
};

type NonEmptyList<T> = [T, ...T[]];


export type RenderConfig<RenderT> = {
    fieldComponents: ComponentMap<RenderT>;
    layouts: ContainerLayoutConfig<RenderT>;
    containers: ContainerWrapperConfig<RenderT>;
}

