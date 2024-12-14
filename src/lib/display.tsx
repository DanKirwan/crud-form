// Get default component 

import { ComponentMap, FieldEditOptions, ObjectMappings, RenderConfig, SingleComponentType } from './domain';
import { FormDirection, FormItem, FormItems, ObjectConfig } from './form';
import { camelToDisplay } from './stringUtils';


import { DeepKeys, FieldApi, FieldValidators, FormApi } from '@tanstack/form-core';

type FieldRenderer<T, RenderT> = <K extends DeepKeys<T>>(
    key: K,
    validators: FieldValidators<T, K>,
    render: (api: FieldApi<T, K>) => RenderT
) => RenderT;


export const renderForm = <T, RenderT, ConfigT extends ObjectConfig<T>, RenderConfigT extends RenderConfig<RenderT>>(
    form: FormItems<T, RenderT, ConfigT, RenderConfigT>,
    formInstance: FormApi<T>,
    renderConfig: RenderConfigT,
    objectConfig: ObjectConfig<T>,
    renderForm: (contents: RenderT) => RenderT,
    renderField: FieldRenderer<T, RenderT>,
): RenderT => renderForm(
        renderFormItem(form, formInstance, renderConfig, objectConfig, renderField))


const renderFormItem = <T, RenderT, ConfigT extends ObjectConfig<T>, RenderConfigT extends RenderConfig<RenderT>>(
    item: FormItem<T, RenderT, ConfigT, RenderConfigT>,
    formInstance: FormApi<T>,
    renderConfig: RenderConfigT,
    objectConfig: ObjectConfig<T>,
    renderField: FieldRenderer<T, RenderT>,
): RenderT => {
    if (typeof item === 'string') {
        // It's a simple property key
        const propertyKey = item satisfies DeepKeys<T>;
        const typeName = objectConfig[propertyKey] satisfies ObjectMappings['key'];
        const [componentDef] = renderConfig.fieldComponents[typeName];


        const def = componentDef as SingleComponentType<RenderT, any>;

        return renderField(
            propertyKey,
            {},
            field => def.edit({
                state: field.state as FieldEditOptions<any>['state'],
                handleChange: field.handleChange as FieldEditOptions<unknown>['handleChange'],
                handleBlur: field.handleBlur,
                name: field.name as string,
                label: camelToDisplay(propertyKey as string),
            }),

        );
    }

    if (!(item instanceof Object)) throw new Error('Failed to match form item ')

    if ('component' in item) {
        // It's a component-based item
        const { key: propertyKey, component, label, validators } = item;
        const typeName = objectConfig[propertyKey];
        const componentDef = renderConfig.fieldComponents[typeName].find(
            (x) => x.name === component,
        );

        if (!componentDef)
            throw new Error(
                `Could not find definition for type ${typeName} and component ${component}`,
            );

        const def = componentDef as SingleComponentType<RenderT, any>;

        return renderField(
            propertyKey,
            validators ?? {},
            field => def.edit({
                state: field.state as FieldEditOptions<any>['state'],
                handleChange: field.handleChange as FieldEditOptions<unknown>['handleChange'],
                handleBlur: field.handleBlur,
                name: field.name as string,
                label: label ?? camelToDisplay(propertyKey as string),
            }));

    }

    if ('display' in item && 'edit' in item) {
        // It's a custom render
        const { key: propertyKey, edit, label } = item;



        return renderField(
            propertyKey,
            {},
            field => edit({

                state: field.state,
                handleBlur: field.handleBlur,
                handleChange: field.handleChange,
                name: field.name as string,
                label: label ?? camelToDisplay(propertyKey as string),
            }));
    }

    if ('items' in item) {
        // It's a container item (e.g., section or group)
        const { label, items, container, layout } = item;

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
                renderField,
            ),
        );
        // todo interface properly with the fields to get the relevant metadata
        return renderContainer(renderLayout(contents), {hasErrors: true, isCompleted: true, label: label ?? ''});
    }

    throw new Error('Failed to match form item to any renderable type');

}
