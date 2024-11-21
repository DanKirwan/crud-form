// Get default component 

import { ComponentMap, OdataTypeToValue } from "./domain";
import { FormDirection, FormItem, FormItems, ObjectConfig } from "./form";




export const renderForm = <T, RenderT, ConfigT extends ObjectConfig<T>, MappingT extends ComponentMap<RenderT>>(
    form: FormItems<T, RenderT, ConfigT, MappingT>,
    data: T,
    componentMap: MappingT,
    objectConfig: ObjectConfig<T>,
    renderContainer: (label: string, contents: RenderT[], direction: FormDirection) => RenderT,
    renderForm: (label: string, contents: RenderT[]) => RenderT,
    onChange: (updatedData: T) => void
): RenderT => renderForm(form.label, form.items.map((item) => renderFormItem(item, data, componentMap, objectConfig, renderContainer, onChange)));


const renderFormItem = <T, RenderT, ConfigT extends ObjectConfig<T>, MappingT extends ComponentMap<RenderT>>(
    item: FormItem<T, RenderT, ConfigT, MappingT>,
    data: T,
    componentMap: MappingT,
    objectConfig: ObjectConfig<T>,
    renderContainer: (label: string, contents: RenderT[], direction: FormDirection) => RenderT,
    onChange: (updatedData: T) => void,
): RenderT => {

    if (typeof item === 'string') {
        const propertyKey = item;
        const propertyValue = data[item];

        const typeName = objectConfig[propertyKey];
        const [componentDef] = componentMap[typeName];

        return componentDef.edit(
            propertyValue as never,
            (newValue) => {
                onChange({ ...data, [propertyKey]: newValue });
            })
    }

    if (!(item instanceof Object)) throw new Error("Failed to match form item ")
    if ('component' in item) {
        // It's a component-based item
        const { key: propertyKey, component } = item;
        const typeName = objectConfig[propertyKey];
        const componentDef = componentMap[typeName].find(x => x.name === item.component);

        if (!componentDef) throw new Error(`Could not find definition for type ${typeName} and component ${component}`);
        type PropertyType = T[typeof propertyKey];
        type ComponentValueType = OdataTypeToValue<typeof componentDef['type']>;

        // Ensure the property type matches the component value type
        const propertyValue = data[propertyKey] as PropertyType & ComponentValueType;

        return componentDef.edit(propertyValue as never, (newValue) => {
            onChange({ ...data, [propertyKey]: newValue });
        });
    }

    if ('display' in item && 'edit' in item) {
        // It's a custom render
        const propertyValue = data[item.key];
        return item.edit(propertyValue, (newValue) => {
            onChange({ ...data, [item.key]: newValue });
        })
    }


    if ('items' in item) {
        return renderContainer(item.label, item.items.map((nestedItem) => renderFormItem(nestedItem, data, componentMap, objectConfig, renderContainer, onChange)), item.direction)
    }

    throw new Error("Failed to match form object to any renderable type");

}
