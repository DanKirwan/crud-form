import { DeepKeys, DeepValue } from "@tanstack/form-core";
import { ComponentMap, ComponentNames, FieldDisplayOptions, FieldEditOptions, ObjectMappings } from "./domain";

export type FormDirection = 'row' | 'column';

type CustomRenderFormItem<TParentData, TKey, RenderT> = {
    key: DeepKeys<TParentData>;
    label?: string;
    display: (options: FieldDisplayOptions<DeepValue<TParentData, TKey>>) => RenderT;
    edit: (options: FieldEditOptions<DeepValue<TParentData, TKey>>) => RenderT;
}

export type FormPrimitive<
    T, // The object type
    RenderT,
    ConfigT extends ObjectConfig<T>,
    MappingT extends ComponentMap<RenderT> // Component mappings
> =
    | DeepKeys<T>
    | {
        label?: string;
    } & {
        [ObjK in DeepKeys<T>]: ConfigT[ObjK] extends ObjectMappings['key'] ?
        {
            [K in ObjectMappings['key']]: ConfigT[ObjK] extends K ? K extends ConfigT[ObjK] ?
            { key: ObjK, component: ComponentNames<RenderT, MappingT>[K] } :
            never : never
        }[ObjectMappings['key']]
        // Enforce type compatibility between the object key and component
        : never
    }[DeepKeys<T>]
    | CustomRenderFormItem<T, DeepKeys<T>, RenderT>;





export type FormItem<T, RenderT, ConfigT extends ObjectConfig<T>, MappingT extends ComponentMap<RenderT>> =
    FormPrimitive<T, RenderT, ConfigT, MappingT> |
    FormItems<T, RenderT, ConfigT, MappingT>;

export type FormItems<T, RenderT, ConfigT extends ObjectConfig<T>, MappingT extends ComponentMap<RenderT>> = {
    label: string;
    direction: FormDirection,
    items: FormItem<T, RenderT, ConfigT, MappingT>[]
};





export type ObjectConfig<T> = {
    // Map each key in the object T to a valid component key in MappingT
    [ObjK in DeepKeys<T>]: Extract<ObjectMappings, { value: DeepValue<T, ObjK> }>['key']
};
