import { DeepKeys, DeepValue, FieldValidators, Validator } from '@tanstack/form-core';
import { ComponentNames, FieldDisplayOptions, FieldEditOptions, ObjectMappings, RenderConfig } from './domain';
import { IsExactlyUndefined, IsRecord, PrimitiveDeepKeys, PrimitiveShallowKeys, UnnestedArrayKeys } from './typeUtils';

export type FormDirection = 'row' | 'column';

type CustomRenderFormItem<TParentData, TKey extends DeepKeys<TParentData>, RenderT> = {
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
    RenderConfigT extends RenderConfig<RenderT>
> =
    | PrimitiveShallowKeys<T>
    | {
        label?: string;
    } & {
        [ObjK in PrimitiveShallowKeys<T>]: DeepValue<ConfigT, `${ObjK}.type`> extends ObjectMappings['key'] ?
        {
            [K in ObjectMappings['key']]: DeepValue<ConfigT, `${ObjK}.type`> extends K ? K extends DeepValue<ConfigT, `${ObjK}.type`> ?
            {
                [ComponentK in ComponentNames<RenderT, RenderConfigT['fieldComponents']>[K]]: ComponentK extends string ?  
                    Parameters<RenderConfigT['fieldComponents'][K][ComponentK]['edit']>['1']  extends undefined ? {
                        key: ObjK, 
                        component: ComponentK, 
                    } : 
                    {
                        key: ObjK, 
                        component: ComponentK, 
                        options: Parameters<RenderConfigT['fieldComponents'][K][ComponentK]['edit']>['1'] 
                    } : 
                never
                
               
            }[ComponentNames<RenderT, RenderConfigT['fieldComponents']>[K]]:
            never : never
        }[ObjectMappings['key']]
        // Enforce type compatibility between the object key and component
        : never
    }[PrimitiveShallowKeys<T>]
    | CustomRenderFormItem<T, PrimitiveDeepKeys<T>, RenderT>;



export type FormItem<T, RenderT, ConfigT extends ObjectTypeConfig<T>, RenderConfigT extends RenderConfig<RenderT>> =
    FormPrimitive<T, RenderT, ConfigT, RenderConfigT> |
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

export type FieldTypeConfig<T> = BaseFieldTypeConfig<T,  null extends T ? true : false> 

export type ObjectTypeConfig<T> =  {[ObjK in PrimitiveShallowKeys<T>]: FieldTypeConfig<T[ObjK]>}





