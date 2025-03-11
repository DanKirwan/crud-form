import { DeepKeys, DeepValue, FieldValidators } from '@tanstack/form-core';
import { ComponentNames, FieldDisplayOptions, FieldEditOptions, ObjectMappings, RenderConfig } from './domain';
import { IsNullishArray, IsNullishRecord, IsPrimitive, IsRecord, PrimitiveShallowKeys } from './typeUtils';
import { T } from 'vitest/dist/chunks/environment.LoooBwUu.js';

export type FormDirection = 'row' | 'column';

type CustomRenderFormItem<TParentData, TKey extends DeepKeys<TParentData>, RenderT> = {
    key: TKey;
    label?: string;
    display: (options: FieldDisplayOptions<DeepValue<TParentData, TKey>>) => RenderT;
    edit: (options: FieldEditOptions<DeepValue<TParentData, TKey>>) => RenderT;
    validators?: FieldValidators<TParentData, TKey>
}

export type EnumTypeConfig<T> = [T] extends [string | number | undefined | null] ? Readonly<Record<string, T>> : never;
// TODO is there a way to make `${ObjK}.type` more safe?

export type FormSelectPrimitive<
    T,
    RenderT,
    ObjK extends PrimitiveShallowKeys<T>,
    RenderConfigT extends RenderConfig<RenderT>
> = {
    key: ObjK,
    selectComponent: keyof RenderConfigT['selectComponents']
}

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
        [ObjK in PrimitiveShallowKeys<T>]: 'options' extends keyof ConfigT[ObjK]
            ? FormSelectPrimitive<T, RenderT, ObjK, RenderConfigT>
            : 'type' extends keyof ConfigT[ObjK]
                ? ConfigT[ObjK]['type'] extends ObjectMappings['key'] 
                    ? {
                        [K in ObjectMappings['key']]: ConfigT[ObjK]['type'] extends K ? K extends  ConfigT[ObjK]['type']
                        ?{
                            [ComponentK in ComponentNames<RenderT, RenderConfigT['fieldComponents']>[K]]: ComponentK extends string 
                                ? Parameters<RenderConfigT['fieldComponents'][K][ComponentK]['edit']>['1']  extends undefined 
                                    ? {
                                        key: ObjK, 
                                        component: ComponentK, 
                                    } 
                                    : {
                                        key: ObjK, 
                                        component: ComponentK, 
                                        options: Parameters<RenderConfigT['fieldComponents'][K][ComponentK]['edit']>['1'] 
                                    }  
                                : never
                            }[ComponentNames<RenderT, RenderConfigT['fieldComponents']>[K]]
                        : never 
                    : never
                }[ObjectMappings['key']]
                // Enforce type compatibility between the object key and component
            : never 
        : never
    }[PrimitiveShallowKeys<T>]
    // | CustomRenderFormItem<T, DeepKeys<T>, RenderT>;



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



export type BaseTypeConfigMeta<NullT extends boolean, UndefinedT extends boolean> = {
    isReadOnly?: boolean,
    isWriteOnly?: boolean,
    isNullable: NullT,
    isOptional: UndefinedT,
}
export type BaseFieldTypeConfig<T, NullT extends boolean, UndefinedT extends boolean > = 
    (
        { type: Extract<ObjectMappings, { value: T }>['key'] } 
        | { options: EnumTypeConfig<T>})
    & BaseTypeConfigMeta<NullT, UndefinedT>

export type FieldTypeConfig<T> = BaseFieldTypeConfig<T,  null extends T ? true : false, undefined extends T ? true : false > 

export type NestedType<T> = IsNullishRecord<T> extends true 
    ? 'object' 
    : IsNullishArray<T> extends true 
        ? 'array' 
        : never;


export type NestedTypeConfig<T> = { nested: NestedType<T>} & BaseTypeConfigMeta<null extends T ? true : false, undefined extends T ? true : false>;


export type ObjectTypeConfig<T> =  {
    [ObjK in keyof T]: ObjK extends string 
        ? IsPrimitive<T[ObjK]> extends true ? FieldTypeConfig<T[ObjK]> : NestedTypeConfig<T[ObjK]>
        : never 
}





