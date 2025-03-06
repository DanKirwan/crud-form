// Get default component 

import { FieldEditOptions, ObjectMappings, OdataTypeToValue, RenderConfig, SingleComponentType } from './domain';
import { ArrayTypeConfig, FieldTypeConfig, FormItem, FormItems, ObjectTypeConfig } from './form';
import { camelToDisplay } from './stringUtils';

import { first, get } from 'lodash-es';

import { DeepKeys, DeepValue, FieldApi, FieldMeta, FieldValidators, FormApi, Validator } from '@tanstack/form-core';
import { AllPrimitiveDeepKeys, PrimitiveDeepKeys, UnnestedArrayKeys } from './typeUtils';
import { FormValidator as CrudFormValidator } from './validation/validationTypes';
import { ArrayEditOptions } from './arrays';

type FieldRenderer<T, RenderT, TFormValidator extends Validator<T, unknown> | undefined> = <K extends AllPrimitiveDeepKeys<T>>(
    key: K,
    validators: FieldValidators<T, K, undefined, TFormValidator>,
    render: (api: FieldApi<T, K, undefined, TFormValidator>) => RenderT
) => RenderT;




// TODO if I replace DeepKeys<T> with some recursive array keys here would it type check nicely?
type ArrayRenderer<T, RenderT, TFormValidator extends Validator<T, unknown> | undefined> = <K extends DeepKeys<T>>(
    key: K,
    validators: FieldValidators<T, K, undefined, TFormValidator>,
    renderContainer: (api: FieldApi<T, K, undefined, TFormValidator>) => RenderT
) => RenderT;




type ContainerSubscriber<T, RenderT> = <K extends PrimitiveDeepKeys<T>,> (
    keys: K[],
    render: ((metadata: FieldMeta[]) => RenderT),
) => RenderT;


export const renderForm = <
    T,
    RenderT, 
    ConfigT extends ObjectTypeConfig<T>, 
    RenderConfigT extends RenderConfig<RenderT>, 
    TFormValidator extends  Validator<T, unknown> | undefined = undefined
>(
        form: FormItems<T, RenderT, ConfigT, RenderConfigT>,
        formInstance: FormApi<T, TFormValidator>,
        renderConfig: RenderConfigT,
        objectConfig: ObjectTypeConfig<T>,
        renderForm: (contents: RenderT) => RenderT,
        containerSubscriber: ContainerSubscriber<T, RenderT>,
        renderField: FieldRenderer<T, RenderT, TFormValidator>,
        renderArray: ArrayRenderer<T, RenderT, TFormValidator>,
        validator: CrudFormValidator<T, TFormValidator> | undefined ,
    ): RenderT => renderForm(
        renderFormItem(form, formInstance, renderConfig, objectConfig, containerSubscriber, renderField, renderArray, validator, undefined).render)



// TODO should this be PrimitiveDeepKeys?
type RenderNode<T, RenderT> = {
    render: RenderT, 
    meta: DeepKeys<T>[]
}

// TODO make sure the validator can be undefined deep primitives and work some type magic below to fix the errors
// then confirm it works and write some tests to make sure its working in the general case 


type ExtractChild<T, TKey extends DeepKeys<T> | undefined> = 
    undefined extends TKey ? T : DeepValue<T, TKey>;

const appendPrimitiveSuffix = <
    TParentData,
    TPrefix extends DeepKeys<TParentData> | undefined,
    TChildData = ExtractChild<TParentData, TPrefix>
>(
        prefix: TPrefix, 
        suffix: PrimitiveDeepKeys<TChildData>,
    ): AllPrimitiveDeepKeys<TParentData> => {
    if (prefix === undefined) return suffix as unknown as AllPrimitiveDeepKeys<TParentData>; // TODO fix a nicer way to do this
    return `${prefix}.${suffix}` as unknown as AllPrimitiveDeepKeys<TParentData>;
};

const joinArrayPaths = <
    TParentData,
    TPrefix extends DeepKeys<TParentData> & string | undefined,
    TChildData = ExtractChild<TParentData, TPrefix>
>(
        prefix: TPrefix,
        suffix: UnnestedArrayKeys<TChildData>, 
    ): DeepKeys<TParentData> => {
    if (prefix === undefined) return suffix as unknown as DeepKeys<TParentData>; // TODO fix a nicer way to do this
    return `${prefix}.${suffix}` as unknown as DeepKeys<TParentData>;
};

type PrefixT<T> = (DeepKeys<T> & string) | undefined;


const convertPath = (path: string | number): string => {
    return `${path}`.replace(/\[\d+\]/, '.config');
}



const renderFormItem = <
    TFormData,
    RenderT, 
    ConfigT extends ObjectTypeConfig<TChildData>, 
    RenderConfigT extends RenderConfig<RenderT>, 
    TFormValidator extends  Validator<TFormData, unknown> | undefined = undefined,
    TPrefix extends PrefixT<TFormData> = undefined,
    TChildData = ExtractChild<TFormData, TPrefix>
>(
        item: FormItem<TChildData, RenderT, ConfigT, RenderConfigT>,
        formInstance: FormApi<TFormData, TFormValidator>,
        renderConfig: RenderConfigT,
        objectConfig: ObjectTypeConfig<TChildData>,
        containerSubscriber: ContainerSubscriber<TFormData, RenderT>,
        renderField: FieldRenderer<TFormData, RenderT, TFormValidator>,
        renderArray: ArrayRenderer<TFormData, RenderT, TFormValidator>,
        validator: CrudFormValidator<TFormData, TFormValidator> | undefined,
        prefix: TPrefix,
    ): RenderNode<TFormData, RenderT> => {

    if (typeof item === 'string') {
        // It's a simple property key
        const childKey = item satisfies PrimitiveDeepKeys<TChildData>;
        const propertyKey = appendPrimitiveSuffix(prefix, childKey) satisfies AllPrimitiveDeepKeys<TFormData>;
        console.log(propertyKey, convertPath(propertyKey))
        const typeInfo = get(objectConfig, childKey) as FieldTypeConfig<PrimitiveDeepKeys<TFormData>>;
        console.log(typeInfo)
        const componentDef = Object.values(renderConfig.fieldComponents[typeInfo.type])[0];
        const def = componentDef as SingleComponentType<RenderT, any>;

        // TODO make typeinfo.type better typed
        const render: RenderT = renderField(
            propertyKey,
            {
                onMount: validator?.getFieldValidator(propertyKey) ?? undefined,
                onChange: validator?.getFieldValidator(propertyKey) ?? undefined,
                onBlur: validator?.getFieldValidator(propertyKey) ?? undefined,
            },
            field => def.edit({
                state: field.state as FieldEditOptions<OdataTypeToValue<typeof typeInfo.type>>['state'],
                handleChange: field.handleChange as FieldEditOptions<OdataTypeToValue<ObjectMappings['key']> | null>['handleChange'], // TODO make sure you're happy with this null
                handleBlur: field.handleBlur,
                name: `${field.name}`,
                label: camelToDisplay(childKey),
                required: validator?.isFieldRequired(propertyKey) ?? false,
            }, undefined),
        );

        return {meta: [propertyKey], render};   
    }

    
    if (!(item instanceof Object)) throw new Error('Failed to match form item ')

    if ('component' in item) {
        // It's a component-based item
        const { key: childKey, component, label} = item;
        const propertyKey = appendPrimitiveSuffix<TFormData, TPrefix, TChildData>(prefix, childKey);
        const typeInfo = get(objectConfig, childKey) as FieldTypeConfig<PrimitiveDeepKeys<TFormData>>;

        const relevantComponents = renderConfig.fieldComponents[typeInfo.type];
        const componentDef = relevantComponents[component];
        if (!componentDef)
            throw new Error(
                `Could not find definition for type ${typeInfo.type} and component ${component}`,
            );

        const def = componentDef as SingleComponentType<RenderT, any>;

        const options = 'options' in item ? item.options : undefined;

        console.log(validator?.getFieldValidator(propertyKey), validator?.formValidator, propertyKey);
        const render: RenderT = renderField(
            propertyKey,
            {
                onMount: validator?.getFieldValidator(propertyKey) ?? undefined,
                onChange: validator?.getFieldValidator(propertyKey) ?? undefined,
                onBlur: validator?.getFieldValidator(propertyKey) ?? undefined,
            },
            field => def.edit({
                state: field.state as FieldEditOptions<OdataTypeToValue<typeof typeInfo.type>>['state'],
                handleChange: field.handleChange as FieldEditOptions<unknown>['handleChange'],
                handleBlur: field.handleBlur,
                name: field.name as string,
                label: label ?? camelToDisplay(propertyKey as string),
                required: validator?.isFieldRequired(propertyKey) ?? false,
            }, options));

        return {meta: [propertyKey], render};
    }

    if ('display' in item && 'edit' in item) {
        // It's a custom render
        const { key: childKey, edit, label } = item;
        const propertyKey = appendPrimitiveSuffix<TFormData, TPrefix, TChildData>(prefix, childKey);

        const render: RenderT = renderField(
            propertyKey,
            {
                onMount: validator?.getFieldValidator(propertyKey) ?? undefined,
                onChange: validator?.getFieldValidator(propertyKey) ?? undefined,
                onBlur: validator?.getFieldValidator(propertyKey) ?? undefined,
            },
            field => edit({

                state: field.state as FieldEditOptions<any>['state'],
                handleBlur: field.handleBlur,
                handleChange: field.handleChange as FieldEditOptions<unknown>['handleChange'],
                name: field.name as string,
                label: label ?? camelToDisplay(propertyKey as string),
                required: validator?.isFieldRequired(propertyKey) ?? false,
            }));

        return {render, meta: [propertyKey]};
    }

    if('subForm' in item) {
        // This is an array selector

        const {key: childKey, subForm, type, options } = item;
        // Typing magic here needs sorting
        const propertyKey = joinArrayPaths(prefix, childKey) as unknown as DeepKeys<TFormData>;
        type SubformDataT = DeepValue<TChildData, typeof propertyKey>;
        const subformConfig = get(objectConfig, childKey) as ArrayTypeConfig<SubformDataT>;
        const subFormT = subForm as unknown as FormItems<SubformDataT, RenderT, ObjectTypeConfig<SubformDataT>, RenderConfigT>;
        const arrayContainers: RenderConfigT['arrayContainers'] = renderConfig.arrayContainers;
        const arrayContainer = type === undefined ? first(Object.values(arrayContainers)) : arrayContainers[type];

        if(!arrayContainer) throw new Error(`Could not find array container to for type ${String(type)} ensure at least one array container is defined`)
        const render = renderArray(
            propertyKey, 
            {
                onMount: validator?.getFieldValidator(propertyKey as any) ?? undefined,
                onChange: validator?.getFieldValidator(propertyKey as any) ?? undefined,
                onBlur: validator?.getFieldValidator(propertyKey as any) ?? undefined,
            },
            (field) => arrayContainer.edit({
                add: () => field.pushValue(null!),
                content: field.state.value.map((_, index) => renderFormItem<TFormData, RenderT, ObjectTypeConfig<SubformDataT>, RenderConfigT, TFormValidator, any, SubformDataT>(
                    subFormT, formInstance, renderConfig, 
                    subformConfig.config, 
                    containerSubscriber, renderField, renderArray,
                    validator, `${propertyKey}[${index}]`).render),
                remove: field.removeValue
            }, options));
                

        // At some point we need to extract the child meta's here too
        return {render, meta: [propertyKey]}
      
    }


    if ('items' in item) {
        // It's a container item (e.g., section or group)
        const { label, items, container, layout, showStatus } = item;

        const containers: RenderConfigT['containers'] = renderConfig.containers;
        const renderContainer = !!container ?  containers[container] : Object.values(containers)[0] ;
        if(renderContainer === void 0) throw new Error('No containers registered in config')
            
        const layouts: RenderConfigT['layouts'] = renderConfig.layouts;
        const renderLayout = !!layout ? layouts[layout] : Object.values(layouts)[0];
        if(renderLayout === void 0) throw new Error('No layouts registered in config')


        const contents = items.map((nestedItem) =>
            renderFormItem(
                nestedItem,
                formInstance,
                renderConfig,
                objectConfig,
                containerSubscriber,
                renderField,
                renderArray,
                validator,
                prefix,
            ),
        );

        const keys = contents.flatMap(c => c.meta) as PrimitiveDeepKeys<TFormData>[];
        const render = containerSubscriber(keys, fieldMetas => 
        {

            console.log(fieldMetas);
            return renderContainer(
                renderLayout(contents.map(c => c.render)), 
                {
                    hasErrors: fieldMetas.some(m => m?.errorMap?.onBlur), 
                    isCompleted: fieldMetas.every(m => !m?.errorMap?.onBlur && !m?.errorMap?.onMount),
                    label: label ?? '',
                    showStatus: showStatus ?? false,
                })

        },
        );
        
        // todo interface properly with the fields to get the relevant metadata
        return {
            meta: keys,
            render,
        }
    }

    console.log(item);
    throw new Error('Failed to match form item to any renderable type');

}
