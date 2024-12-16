import { FieldApi, Validator } from '@tanstack/form-core';
import { ContainerLayoutConfig, ContainerWrapperConfig } from './containers';
import { NonEmptyObject } from 'type-fest';


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

export type FieldEditOptions<TData> = Pick<TanStackField<TData | undefined>, 'state' | 'handleBlur' | 'handleChange' | 'name'> & { label: string, required: boolean };
export type FieldDisplayOptions<TData> = Omit<FieldEditOptions<TData>, 'handleBlur' | 'handleChange'> & { label: string };

// We allow nulls here because primitive types need to be able to handle nulls but this will be type protected at a higher level
// so only nullable fields can use it
export type SingleComponentType<RenderT, K extends ObjectMappings['key'], TOptions = undefined> = {
    type: K,
    display: (field: FieldDisplayOptions<OdataTypeToValue<K> | null>) => RenderT,
    edit: (data: FieldEditOptions<OdataTypeToValue<K> | null>, options: TOptions) => RenderT
};




export type ComponentMap<RenderT> = {
    [K in ObjectMappings['key']]: NonEmptyObject<Record<string, SingleComponentType<RenderT, K>>>
}



// util methods 
export type AllComponentNames<RenderT, MapT extends ComponentMap<RenderT>> = {
    [K in ObjectMappings['key']]: ComponentNames<RenderT, MapT>[K];
}[ObjectMappings['key']];


export type ComponentNames<RenderT, MapT extends ComponentMap<RenderT>> = {
    [K in ObjectMappings['key']]: keyof MapT[K]
};



export type RenderConfig<RenderT> = {
    fieldComponents: ComponentMap<RenderT>;
    layouts: ContainerLayoutConfig<RenderT>;
    containers: ContainerWrapperConfig<RenderT>;
}

