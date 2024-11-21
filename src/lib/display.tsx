// Get default component 

import { ComponentMapping, ObjectMappings, OdataTypeToValue, SingleComponentType } from "./domain";
import { FormItems, FormItem, FormDirection, ObjectConfig } from "./form";


function findComponentKeyForType<
    RenderT,
    MappingT extends ComponentMapping<string, RenderT>
>(
    type: ObjectMappings['key'],
    componentMap: MappingT
): keyof MappingT | null {
    // Find the first component key that matches the object type
    for (const componentKey in componentMap) {
        if (componentMap[componentKey].type === type) {
            return componentKey;
        }
    }
    return null;
}



export const renderForm = <T, RenderT, MappingT extends ComponentMapping<string, RenderT>>(
    form: FormItems<T, RenderT, MappingT>,
    data: T,
    componentMap: MappingT,
    objectConfig: ObjectConfig<T>,
    renderContainer: (label: string, contents: RenderT[], direction: FormDirection) => RenderT,
    renderForm: (label: string, contents: RenderT[]) => RenderT,
    onChange: (updatedData: T) => void
): RenderT => renderForm(form.label, form.items.map((item) => renderFormItem(item, data, componentMap, objectConfig, renderContainer, onChange)));


const renderFormItem = <T, RenderT, ComponentKeyT extends string, MappingT extends ComponentMapping<ComponentKeyT, RenderT>>(
    item: FormItem<T, RenderT, MappingT>,
    data: T,
    componentMap: MappingT,
    objectConfig: ObjectConfig<T>,
    renderContainer: (label: string, contents: RenderT[], direction: FormDirection) => RenderT,
    onChange: (updatedData: T) => void,
): RenderT => {

    if (typeof item === 'string') {
        const propertyKey = item;
        const propertyValue = data[item];


        const componentKey = findComponentKeyForType<RenderT, MappingT>(
            objectConfig[propertyKey],
            componentMap
        );

        if (!componentKey) {
            throw new Error(`No component found for property ${String(propertyKey)}`);
        }

        const componentDef = componentMap[componentKey];
        if (componentDef.type !== componentKey) throw new Error("Test");
        // TODO typecheck here
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
        const componentDef = componentMap[component];

        // Type assertion to ensure types align
        type PropertyType = T[typeof propertyKey];
        type ComponentValueType = OdataTypeToValue<typeof componentDef['type']>;

        // Ensure the property type matches the component value type
        const propertyValue = data[propertyKey] as PropertyType & ComponentValueType;
        const componentDefTyped = componentDef as SingleComponentType<RenderT, typeof componentDef['type']>;

        return componentDefTyped.edit(propertyValue as never, (newValue) => {
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
