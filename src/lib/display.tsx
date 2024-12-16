// Get default component 

import { FieldEditOptions, ObjectMappings, OdataTypeToValue, RenderConfig, SingleComponentType } from './domain';
import { FormItem, FormItems, ObjectTypeConfig } from './form';
import { camelToDisplay } from './stringUtils';

import { get } from 'lodash-es';

import { DeepKeys, DeepValue, FieldApi, FieldMeta, FieldValidators, FormApi, Validator } from '@tanstack/form-core';
import { PrimitiveDeepKeys, UndefinedDeepPrimitives } from './typeUtils';
import { FormValidator as CrudFormValidator } from './validation/validationTypes';

type FieldRenderer<T, RenderT, TFormValidator extends Validator<T, unknown> | undefined> = <K extends PrimitiveDeepKeys<T>>(
    key: K,
    validators: FieldValidators<UndefinedDeepPrimitives<T>, K, undefined, TFormValidator>,
    render: (api: FieldApi<UndefinedDeepPrimitives<T>, K, undefined, TFormValidator>) => RenderT
) => RenderT;


type ContainerSubscriber<T, RenderT> = <K extends PrimitiveDeepKeys<T>,> (
    keys: K[],
    render: ((metadata: FieldMeta[]) => RenderT),
) => RenderT;

export const renderForm = <T, RenderT, ConfigT extends ObjectTypeConfig<T>, RenderConfigT extends RenderConfig<RenderT>, TFormValidator extends  Validator<T, unknown> | undefined = undefined>(
    form: FormItems<T, RenderT, ConfigT, RenderConfigT>,
    formInstance: FormApi<UndefinedDeepPrimitives<T>, TFormValidator>,
    renderConfig: RenderConfigT,
    objectConfig: ObjectTypeConfig<T>,
    renderForm: (contents: RenderT) => RenderT,
    containerSubscriber: ContainerSubscriber<T, RenderT>,
    renderField: FieldRenderer<T, RenderT, TFormValidator>,
    validator: CrudFormValidator<T, TFormValidator> | undefined,
): RenderT => renderForm(
        renderFormItem(form, formInstance, renderConfig, objectConfig, containerSubscriber, renderField, validator).render)



// TODO should this be PrimitiveDeepKeys?
type RenderNode<T, RenderT> = {
    render: RenderT, 
    meta: DeepKeys<T>[]
}

// TODO make sure the validator can be undefined deep primitives and work some type magic below to fix the errors
// then confirm it works and write some tests to make sure its working in the general case 

const renderFormItem = <T, RenderT, ConfigT extends ObjectTypeConfig<T>, RenderConfigT extends RenderConfig<RenderT>, TFormValidator extends  Validator<T, unknown> | undefined = undefined>(
    item: FormItem<T, RenderT, ConfigT, RenderConfigT>,
    formInstance: FormApi<UndefinedDeepPrimitives<T>, TFormValidator>,
    renderConfig: RenderConfigT,
    objectConfig: ObjectTypeConfig<T>,
    containerSubscriber: ContainerSubscriber<T, RenderT>,
    renderField: FieldRenderer<T, RenderT, TFormValidator>,
    validator: CrudFormValidator<T, TFormValidator> | undefined,
): RenderNode<T, RenderT> => {

    if (typeof item === 'string') {
        // It's a simple property key
        const propertyKey = item satisfies PrimitiveDeepKeys<T>;
        const typeName = get(objectConfig, propertyKey) as ObjectMappings['key'];
        const componentDef = Object.values(renderConfig.fieldComponents[typeName])[0];
        const def = componentDef as SingleComponentType<RenderT, any>;

        const render: RenderT = renderField(
            propertyKey,
            {
                onMount: validator?.getFieldValidator(propertyKey) ?? undefined,
                onChange: validator?.getFieldValidator(propertyKey) ?? undefined,
                onBlur: validator?.getFieldValidator(propertyKey) ?? undefined,
            },
            field => def.edit({
                state: field.state as FieldEditOptions<OdataTypeToValue<typeof typeName>>['state'],
                handleChange: field.handleChange as FieldEditOptions<OdataTypeToValue<typeof typeName> | null>['handleChange'], // TODO make sure you're happy with this null
                handleBlur: field.handleBlur,
                name: `${field.name}`,
                label: camelToDisplay(propertyKey),
                required: validator?.isFieldRequired(propertyKey) ?? false,
            }, undefined),
        );

        return {meta: [propertyKey], render};   
    }

    
    if (!(item instanceof Object)) throw new Error('Failed to match form item ')

    if ('component' in item) {
        // It's a component-based item
        const { key: propertyKey, component, label} = item;
        const typeName = get(objectConfig, propertyKey) as ObjectMappings['key'];
        const relevantComponents = renderConfig.fieldComponents[typeName];
        const componentDef = relevantComponents[component];
        if (!componentDef)
            throw new Error(
                `Could not find definition for type ${typeName} and component ${component}`,
            );

        const def = componentDef as SingleComponentType<RenderT, any>;

        const options = 'options' in item ? item.options : undefined;

        const render: RenderT = renderField(
            propertyKey,
            {
                onMount: validator?.getFieldValidator(propertyKey) ?? undefined,
                onChange: validator?.getFieldValidator(propertyKey) ?? undefined,
                onBlur: validator?.getFieldValidator(propertyKey) ?? undefined,
            },
            field => def.edit({
                state: field.state as FieldEditOptions<OdataTypeToValue<typeof typeName>>['state'],
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
        const { key: propertyKey, edit, label } = item;

        const render: RenderT = renderField(
            propertyKey,
            {
                onMount: validator?.getFieldValidator(propertyKey) ?? undefined,
                onChange: validator?.getFieldValidator(propertyKey) ?? undefined,
                onBlur: validator?.getFieldValidator(propertyKey) ?? undefined,
            },
            field => edit({

                state: field.state as FieldEditOptions<DeepValue<T, typeof propertyKey>>['state'],
                handleBlur: field.handleBlur,
                handleChange: field.handleChange as FieldEditOptions<DeepValue<T, typeof propertyKey>>['handleChange'],
                name: field.name as string,
                label: label ?? camelToDisplay(propertyKey as string),
                required: validator?.isFieldRequired(propertyKey) ?? false,
            }));

        return {render, meta: [propertyKey]};
    }

    if ('items' in item) {
        // It's a container item (e.g., section or group)
        const { label, items, container, layout, showStatus } = item;

        const containers: RenderConfigT['containers'] = renderConfig.containers;
        const renderContainer = !!container ?  containers[container] : Object.values(containers)[0] ;

        const layouts: RenderConfigT['layouts'] = renderConfig.layouts;
        const renderLayout = !!layout ? layouts[layout] : Object.values(layouts)[0];


        const contents = items.map((nestedItem) =>
            renderFormItem(
                nestedItem,
                formInstance,
                renderConfig,
                objectConfig,
                containerSubscriber,
                renderField,
                validator,
            ),
        );

        const keys = contents.flatMap(c => c.meta) as PrimitiveDeepKeys<T>[];
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

    throw new Error('Failed to match form item to any renderable type');

}
