import { FieldApi, Validator } from '@tanstack/form-core';
import { ContainerLayoutConfig, ContainerWrapperConfig } from './containers';
import { NonEmptyObject } from 'type-fest';
import { ArrayContainerConfig } from './arrays';
import { EnumTypeConfig } from './form';


// TODO add support for things like longs
export type ObjectTypes =
    'Double' |
    'Single' |
    'Int32' |
    'Byte' |
    'Decimal' |
    'Guid' |
    'Boolean' |
    'DateTimeOffset' |
    'String';

type ObjectMapping<X extends ObjectTypes, T> = { key: X, value: T }


export type ObjectMappings =
    ObjectMapping<'Double', number> |
    ObjectMapping<'Single', number> |
    ObjectMapping<'Int32', number> |
    ObjectMapping<'Byte', number> |
    ObjectMapping<'Decimal', number> |
    ObjectMapping<'Guid', string> |
    ObjectMapping<'Boolean', boolean> |
    ObjectMapping<'String', string> |
    ObjectMapping<'DateTimeOffset', Date> ;


export type OdataTypeToValue<K extends ObjectMappings['key']> =
    Extract<ObjectMappings, { key: K }>['value'];


type TanStackField<TData> = FieldApi<Record<string, TData>, string, Validator<TData, string>, undefined, TData>;

export type FieldEditOptions<TData> = Pick<TanStackField<TData>, 'state' | 'handleBlur' | 'handleChange' | 'name'> & { label: string, required: boolean };
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

export type SelectComponent<RenderT, T = string | number | null | undefined> = 
    [T] extends [string | number | null | undefined] 
        ? {
            edit: (field: FieldEditOptions<T>, options: EnumTypeConfig<T>) => RenderT
            display: (field: FieldDisplayOptions<T>, options: EnumTypeConfig<T>) => RenderT
        } 
        : never;

export type SelectComponentMap<RenderT> = Readonly<Record<string, SelectComponent<RenderT>>>;


export type RenderConfig<RenderT> = {
    fieldComponents: ComponentMap<RenderT>;
    selectComponents: SelectComponentMap<RenderT>;
    layouts: ContainerLayoutConfig<RenderT>;
    containers: ContainerWrapperConfig<RenderT>;
    arrayContainers: ArrayContainerConfig<RenderT>;
}

