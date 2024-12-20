import { DeepKeys, DeepValue, FieldValidators, Validator } from '@tanstack/form-core';
import { ComponentNames, FieldDisplayOptions, FieldEditOptions, ObjectMappings, RenderConfig } from './domain';
import { IsRecord, PrimitiveDeepKeys, UnnestedArrayKeys } from './typeUtils';

export type FormDirection = 'row' | 'column';

type CustomRenderFormItem<TParentData, TKey extends PrimitiveDeepKeys<TParentData> & DeepKeys<TParentData>, RenderT> = {
    key: TKey;
    label?: string;
    display: (options: FieldDisplayOptions<DeepValue<TParentData, TKey>>) => RenderT;
    edit: (options: FieldEditOptions<DeepValue<TParentData, TKey>>) => RenderT;
    validators?: FieldValidators<TParentData, TKey>
}


type ArraySelector<T, RenderT, ConfigT extends ObjectTypeConfig<T>, RenderConfigT extends RenderConfig<RenderT>, TKey extends UnnestedArrayKeys<T>> = {
    key: TKey,
    subForm: FormItems<DeepValue<T, `${TKey}[${number}]`>, RenderT, ArrayConfigValue<T, ConfigT, TKey>, RenderConfigT>;

}
// TODO is there a way to make `${ObjK}.type` more safe?
export type FormPrimitive<
    T, // The object type
    RenderT,
    ConfigT extends ObjectTypeConfig<T>,
    RenderConfigT extends RenderConfig<RenderT>
> =
    | PrimitiveDeepKeys<T>
    | {
        label?: string;
    } & {
        [ObjK in PrimitiveDeepKeys<T>]: DeepValue<ConfigT, `${ObjK}.type`> extends ObjectMappings['key'] ?
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
    }[PrimitiveDeepKeys<T>]
    | CustomRenderFormItem<T, PrimitiveDeepKeys<T>, RenderT>
    | ArraySelector<T, RenderT, ConfigT, RenderConfigT, UnnestedArrayKeys<T>>;





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

// TODO figure out what fields we need here
export type ArrayTypeConfig<T> = null extends T 
    ? {error: 'Array types cannot be nullable'} 
    : { 
        config: ObjectTypeConfig<T>,
        isRelation: boolean; // determines if this needs to be loaded externally
    };



type IsArray<T> = T extends unknown[] ? true : false;

export type ObjectTypeConfig<T> = 
    IsRecord<T> extends true
    ? {[ObjK in keyof T]: ObjectTypeConfig<T[ObjK]>}
    : IsArray<T> extends false 
        ? FieldTypeConfig<T> 
        : T extends unknown[] ? ArrayTypeConfig<T[number]> : never



export type ArrayConfigValue<
    T,
    TConfig extends ObjectTypeConfig<T>,
    TAccessor extends string // Relaxing from UnnestedArrayKeys<T> to string
> = IsRecord<T> extends true 
    ? TAccessor extends `${infer THead}.${infer TTail}`
        ? THead extends keyof T 
            ? THead extends keyof TConfig
                ? ArrayConfigValue<
                    T[THead],
                    TConfig[THead] extends ObjectTypeConfig<T[THead]> ? TConfig[THead] : never,
                    TTail // Just a string now
                  >
                : never
            : never
        : never
    : never;



// This controls the logic of an item in terms of whether it's visible
export type ObjectControlConfig<T, ValidatorFn = undefined> =  {[ObjK in keyof T]:
    IsRecord<T[ObjK]> extends true
        ? ObjectControlConfig<T[ObjK], ValidatorFn>
        : Validator<T[ObjK], ValidatorFn>
};






