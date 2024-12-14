import { DeepKeys, DeepValue, FieldValidators, Validator } from '@tanstack/form-core';
import { ComponentMap, ComponentNames, FieldDisplayOptions, FieldEditOptions, ObjectMappings, RenderConfig } from './domain';

export type FormDirection = 'row' | 'column';

type CustomRenderFormItem<TParentData, TKey extends PrimitiveDeepKeys<TParentData>, RenderT> = {
    key: TKey;
    label?: string;
    display: (options: FieldDisplayOptions<DeepValue<TParentData, TKey>>) => RenderT;
    edit: (options: FieldEditOptions<DeepValue<TParentData, TKey>>) => RenderT;
    validators?: FieldValidators<TParentData, TKey>
}

export type FormPrimitive<
    T, // The object type
    RenderT,
    ConfigT extends ObjectTypeConfig<T>,
    MappingT extends ComponentMap<RenderT> // Component mappings
> =
    | PrimitiveDeepKeys<T>
    | {
        label?: string;
    } & {
        [ObjK in PrimitiveDeepKeys<T>]: ConfigT[ObjK] extends ObjectMappings['key'] ?
        {
            [K in ObjectMappings['key']]: ConfigT[ObjK] extends K ? K extends ConfigT[ObjK] ?
            { key: ObjK, component: ComponentNames<RenderT, MappingT>[K], validators?: FieldValidators<T, ObjK> } :
            never : never
        }[ObjectMappings['key']]
        // Enforce type compatibility between the object key and component
        : never
    }[PrimitiveDeepKeys<T>]
    | CustomRenderFormItem<T, PrimitiveDeepKeys<T>, RenderT>;





export type FormItem<T, RenderT, ConfigT extends ObjectTypeConfig<T>, RenderConfigT extends RenderConfig<RenderT>> =
    FormPrimitive<T, RenderT, ConfigT, RenderConfigT['fieldComponents']> |
    FormItems<T, RenderT, ConfigT, RenderConfigT>;

export type FormItems<T, RenderT, ConfigT extends ObjectTypeConfig<T>, RenderConfigT extends RenderConfig<RenderT>> = {
    label?: string;
    layout?: keyof RenderConfigT['layouts']
    container?: keyof RenderConfigT['containers']
    showStatus?: boolean
    items: FormItem<T, RenderT, ConfigT, RenderConfigT>[]
};




export type ObjectTypeConfig<T> = {[ObjK in keyof T]: 
    IsRecord<T[ObjK]> extends true
        ? ObjectTypeConfig<T[ObjK]>
        :  Extract<ObjectMappings, { value: T[ObjK] }>['key']
};

// This controls the logic of an item in terms of whether it's visible
export type ObjectControlConfig<T, ValidatorFn = undefined> =  {[ObjK in keyof T]:
    IsRecord<T[ObjK]> extends true
        ? ObjectControlConfig<T[ObjK], ValidatorFn>
        : Validator<T[ObjK], ValidatorFn>
};







// Filters existing deep keys to give only the primitive fields
export type PrimitiveDeepKeys<T> = DeepKeys<T> extends infer K
    ? K extends string
        ? IsRecord<DeepValue<T, K>> extends false
            ? K
            : never
        : never
    : never;




    

type IsRecord<T> = T extends object
    ? T extends Date | Uint8Array // Add other non-record types here
        ? false
        : true
    : false;
