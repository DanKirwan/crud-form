// Get default component 

import { FieldEditOptions, ObjectMappings, OdataTypeToValue, RenderConfig, SingleComponentType } from './domain';
import { FormItem, FormItems, ObjectTypeConfig, PrimitiveDeepKeys  } from './form';
import { camelToDisplay } from './stringUtils';

import {get} from 'lodash-es';

import { DeepKeys, FieldApi, FieldMeta, FieldValidators, FormApi, Validator } from '@tanstack/form-core';
import { FormValidator as CrudFormValidator } from './validation/validationTypes';

type FieldRenderer<T, RenderT, TFormValidator extends Validator<T, unknown> | undefined> = <K extends DeepKeys<T>>(
    key: K,
    validators: FieldValidators<T, K, undefined, TFormValidator>,
    render: (api: FieldApi<T, K, undefined, TFormValidator>) => RenderT
) => RenderT;


type ContainerSubscriber<T, RenderT> = <K extends DeepKeys<T>,> (
    keys: K[],
    render: ((metadata: FieldMeta[]) => RenderT),
) => RenderT;

export const renderForm = <T, RenderT, ConfigT extends ObjectTypeConfig<T>, RenderConfigT extends RenderConfig<RenderT>, TFormValidator extends  Validator<T, unknown> | undefined = undefined>(
    form: FormItems<T, RenderT, ConfigT, RenderConfigT>,
    formInstance: FormApi<T, TFormValidator>,
    renderConfig: RenderConfigT,
    objectConfig: ObjectTypeConfig<T>,
    renderForm: (contents: RenderT) => RenderT,
    containerSubscriber: ContainerSubscriber<T, RenderT>,
    renderField: FieldRenderer<T, RenderT, TFormValidator>,
    validator: CrudFormValidator<T, TFormValidator> | undefined = undefined,

): RenderT => renderForm(
        renderFormItem(form, formInstance, renderConfig, objectConfig, containerSubscriber, renderField, validator).render)



// TODO should this be PrimitiveDeepKeys?
type RenderNode<T, RenderT> = {
    render: RenderT, 
    meta: DeepKeys<T>[]
}

const renderFormItem = <T, RenderT, ConfigT extends ObjectTypeConfig<T>, RenderConfigT extends RenderConfig<RenderT>, TFormValidator extends  Validator<T, unknown> | undefined = undefined>(
    item: FormItem<T, RenderT, ConfigT, RenderConfigT>,
    formInstance: FormApi<T, TFormValidator>,
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
        const [componentDef] = renderConfig.fieldComponents[typeName];
        const def = componentDef as SingleComponentType<RenderT, any>;

        const render: RenderT = renderField(
            propertyKey,
            validator?.getFieldValidator(propertyKey) ?? {},
            field => def.edit({
                state: field.state as FieldEditOptions<OdataTypeToValue<typeof typeName>>['state'],
                handleChange: field.handleChange as FieldEditOptions<OdataTypeToValue<typeof typeName>>['handleChange'],
                handleBlur: field.handleBlur,
                name: `${field.name}`,
                label: camelToDisplay(propertyKey),
            }),
        );

        return {meta: [propertyKey], render};   
    }

    
    if (!(item instanceof Object)) throw new Error('Failed to match form item ')

    if ('component' in item) {
        // It's a component-based item
        const { key: propertyKey, component, label } = item;
        const typeName = get(objectConfig, propertyKey) as ObjectMappings['key'];
        const componentDef = renderConfig.fieldComponents[typeName].find(
            (x) => x.name === component,
        );

        if (!componentDef)
            throw new Error(
                `Could not find definition for type ${typeName} and component ${component}`,
            );

        const def = componentDef as SingleComponentType<RenderT, any>;

        const render: RenderT = renderField(
            propertyKey,
            validator?.getFieldValidator(propertyKey) ?? {},
            field => def.edit({
                state: field.state as FieldEditOptions<OdataTypeToValue<typeof typeName>>['state'],
                handleChange: field.handleChange as FieldEditOptions<unknown>['handleChange'],
                handleBlur: field.handleBlur,
                name: field.name as string,
                label: label ?? camelToDisplay(propertyKey as string),
            }));

        return {meta: [propertyKey], render};
    }

    if ('display' in item && 'edit' in item) {
        // It's a custom render
        const { key: propertyKey, edit, label } = item;

        const render: RenderT = renderField(
            propertyKey,
            validator?.getFieldValidator(propertyKey) ?? {},
            field => edit({

                state: field.state,
                handleBlur: field.handleBlur,
                handleChange: field.handleChange,
                name: field.name as string,
                label: label ?? camelToDisplay(propertyKey as string),
            }));

        return {render, meta: [propertyKey]};
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
                containerSubscriber,
                renderField,
                validator,
            ),
        );

        const keys = contents.flatMap(c => c.meta);
        const render = containerSubscriber(keys, fieldMetas => 
        {

            console.log(fieldMetas);
            return renderContainer(
                renderLayout(contents.map(c => c.render)), 
                {
                    hasErrors: fieldMetas.some(m => m !== undefined && m.errors.length > 0), 
                    isCompleted: fieldMetas.every(m => !!m?.isTouched),
                    label: label ?? '',
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
