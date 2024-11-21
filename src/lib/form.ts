import { ComponentMapping, ObjectMappings, OdataTypeToValue } from "./domain";

type CustomRender<T, RenderT> = {
    key: keyof T;
    display: (value: T[keyof T]) => RenderT;
    edit: (value: T[keyof T], onChange: (value: T[keyof T]) => void) => RenderT;
};

export type Primitive<
    T, // The object type
    RenderT, // Render type
    MappingT extends ComponentMapping<string, RenderT> // Component mappings
> =
    | keyof T // A key from the object
    | {
        key: keyof T; // A key from the object
        component: keyof MappingT; // A predefined component key
    } & {
        // Enforce type compatibility between the object key and component
        [K in keyof MappingT]: MappingT[K]['type'] extends ObjectMappings['key']
        ? { [ObjK in keyof T]: T[ObjK] extends OdataTypeToValue<MappingT[K]['type']>
            ? { key: ObjK; component: K }
            : never }[keyof T]
        : never
    }[keyof MappingT]
    | CustomRender<T, RenderT>; // A custom render function


type Item<T, RenderT, MappingT extends ComponentMapping<string, RenderT>> = Primitive<T, RenderT, MappingT> | Items<T, RenderT, MappingT>;

export type Items<T, RenderT, MappingT extends ComponentMapping<string, RenderT>> = {
    label: string;
    direction: 'row' | 'column'
    items: Item<T, RenderT, MappingT>[]
};

