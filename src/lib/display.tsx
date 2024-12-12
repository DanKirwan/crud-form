// Get default component 

import { ComponentMap, FieldEditOptions, ObjectMappings, SingleComponentType } from "./domain";
import { FormDirection, FormItem, FormItems, ObjectConfig } from "./form";
import { camelToDisplay } from "./stringUtils";


import { DeepKeys, FieldApi, FieldValidators, FormApi } from '@tanstack/form-core';

type FieldRenderer<T, RenderT> = <K extends DeepKeys<T>>(
    key: K,
    validators: FieldValidators<T, K>,
    render: (api: FieldApi<T, K>) => RenderT
) => RenderT;


export const renderForm = <T, RenderT, ConfigT extends ObjectConfig<T>, MappingT extends ComponentMap<RenderT>>(
    form: FormItems<T, RenderT, ConfigT, MappingT>,
    formInstance: FormApi<T>,
    componentMap: MappingT,
    objectConfig: ObjectConfig<T>,
    renderForm: (label: string, contents: RenderT[]) => RenderT,
    renderContainer: (label: string, contents: RenderT[], direction: FormDirection) => RenderT,
    renderField: FieldRenderer<T, RenderT>,
): RenderT => renderForm(
    form.label,
    form.items.map((item) => renderFormItem(item, formInstance, componentMap, objectConfig, renderContainer, renderField)));


const renderFormItem = <T, RenderT, ConfigT extends ObjectConfig<T>, MappingT extends ComponentMap<RenderT>>(
    item: FormItem<T, RenderT, ConfigT, MappingT>,
    formInstance: FormApi<T>,
    componentMap: MappingT,
    objectConfig: ObjectConfig<T>,
    renderContainer: (label: string, contents: RenderT[], direction: FormDirection) => RenderT,
    renderField: FieldRenderer<T, RenderT>
): RenderT => {
    if (typeof item === 'string') {
        // It's a simple property key
        const propertyKey = item satisfies DeepKeys<T>;
        const typeName = objectConfig[propertyKey] satisfies ObjectMappings['key'];
        const [componentDef] = componentMap[typeName];


        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const def = componentDef as SingleComponentType<RenderT, any>;

        return renderField(
            propertyKey,
            {},
            field => def.edit({
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                state: field.state as FieldEditOptions<any>['state'],
                handleChange: field.handleChange as FieldEditOptions<unknown>['handleChange'],
                handleBlur: field.handleBlur,
                name: field.name as string,
                label: camelToDisplay(propertyKey as string),
            })

        );
    }

    if (!(item instanceof Object)) throw new Error("Failed to match form item ")

    if ('component' in item) {
        // It's a component-based item
        const { key: propertyKey, component, label, validators } = item;
        const typeName = objectConfig[propertyKey];
        const componentDef = componentMap[typeName].find(
            (x) => x.name === component
        );

        if (!componentDef)
            throw new Error(
                `Could not find definition for type ${typeName} and component ${component}`
            );

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const def = componentDef as SingleComponentType<RenderT, any>;

        return renderField(
            propertyKey,
            validators ?? {},
            field => def.edit({
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        const { label, items, direction } = item;

        const contents = items.map((nestedItem) =>
            renderFormItem(
                nestedItem,
                formInstance,
                componentMap,
                objectConfig,
                renderContainer,
                renderField
            )
        );

        return renderContainer(label, contents, direction);
    }

    throw new Error('Failed to match form item to any renderable type');

}
