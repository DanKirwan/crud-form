import { ComponentMapping, ObjectMappings, OdataTypeToValue } from "./domain";

export type FormDirection = 'row' | 'column';

type CustomRender<T, RenderT> = {
    key: keyof T;
    display: (value: T[keyof T]) => RenderT;
    edit: (value: T[keyof T], onChange: (value: T[keyof T]) => void) => RenderT;
};

export type FormPrimitive<
    T, // The object type
    RenderT,
    MappingT extends ComponentMapping<string, RenderT> // Component mappings
> =
    | keyof T
    | {
        key: keyof T;
        component: keyof MappingT;
    } & {
        // Enforce type compatibility between the object key and component
        [K in keyof MappingT]: MappingT[K]['type'] extends ObjectMappings['key']
        ? { [ObjK in keyof T]: T[ObjK] extends OdataTypeToValue<MappingT[K]['type']>
            ? { key: ObjK; component: K }
            : never }[keyof T]
        : never
    }[keyof MappingT]
    | CustomRender<T, RenderT>;

export type FormItem<T, RenderT, MappingT extends ComponentMapping<string, RenderT>> = FormPrimitive<T, RenderT, MappingT> | FormItems<T, RenderT, MappingT>;

export type FormItems<T, RenderT, MappingT extends ComponentMapping<string, RenderT>> = {
    label: string;
    direction: FormDirection,
    items: FormItem<T, RenderT, MappingT>[]
};





export type VerifyFormConfiguration<
    Config extends Record<keyof T, keyof MappingT>,
    T,
    MappingT extends ComponentMapping<string, unknown>
> = {
        [K in keyof T]: Config[K] extends keyof MappingT
        ? T[K] extends OdataTypeToValue<MappingT[Config[K]]['type']>
        ? true
        : { error: "Key type does not match component type" }
        : { error: "Invalid component key" };
    };

export type ObjectConfig<
    T, // The object type
> = {
        // Map each key in the object T to a valid component key in MappingT
        [ObjK in keyof T]: Extract<ObjectMappings, { value: T[ObjK] }>['key']
    };
