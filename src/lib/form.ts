import { DeepValue, FieldValidators, Validator } from '@tanstack/form-core';
import { ComponentMap, ComponentNames, FieldDisplayOptions, FieldEditOptions, ObjectMappings, RenderConfig } from './domain';
import { IsRecord, PrimitiveDeepKeys } from './typeUtils';

export type FormDirection = 'row' | 'column';

type CustomRenderFormItem<TParentData, TKey extends PrimitiveDeepKeys<TParentData>, RenderT> = {
    key: TKey;
    label?: string;
    display: (options: FieldDisplayOptions<DeepValue<TParentData, TKey>>) => RenderT;
    edit: (options: FieldEditOptions<DeepValue<TParentData, TKey>>) => RenderT;
    validators?: FieldValidators<TParentData, TKey>
}

// TODO is there a way to make `${ObjK}.type` more safe?
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
        [ObjK in PrimitiveDeepKeys<T>]: DeepValue<ConfigT, `${ObjK}.type`> extends ObjectMappings['key'] ?
        {
            [K in ObjectMappings['key']]: DeepValue<ConfigT, `${ObjK}.type`> extends K ? K extends DeepValue<ConfigT, `${ObjK}.type`> ?
            {
                [ComponentK in ComponentNames<RenderT, MappingT>[K]]: ComponentK extends string ?  
                    Parameters<MappingT[K][ComponentK]['edit']>['1']  extends undefined ? {
                        key: ObjK, 
                        component: ComponentK, 
                    } : 
                    {
                        key: ObjK, 
                        component: ComponentK, 
                        options: Parameters<MappingT[K][ComponentK]['edit']>['1'] 
                    } : 
                never
                
               
            }[ComponentNames<RenderT, MappingT>[K]]:
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



export type BaseFieldTypeConfig<T, NullT extends boolean> = {
    type: Extract<ObjectMappings, { value: T }>['key'],
    isReadOnly?: boolean,
    isWriteOnly?: boolean
    isNullable: NullT
}

export type FieldTypeConfig<T> = BaseFieldTypeConfig<T, null extends T ? true : false> 

export type ObjectTypeConfig<T> = 
    IsRecord<T> extends true
        ? {[ObjK in keyof T]: ObjectTypeConfig<T[ObjK]>}
        :  FieldTypeConfig<T>

// This controls the logic of an item in terms of whether it's visible
export type ObjectControlConfig<T, ValidatorFn = undefined> =  {[ObjK in keyof T]:
    IsRecord<T[ObjK]> extends true
        ? ObjectControlConfig<T[ObjK], ValidatorFn>
        : Validator<T[ObjK], ValidatorFn>
};






