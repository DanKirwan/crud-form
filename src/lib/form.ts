import { AllComponentNames, ComponentMap, ComponentNames, ObjectMappings } from "./domain";

export type FormDirection = 'row' | 'column';

type CustomRender<T, RenderT> = {
    key: keyof T;
    display: (value: T[keyof T]) => RenderT;
    edit: (value: T[keyof T], onChange: (value: T[keyof T]) => void) => RenderT;
};

export type FormPrimitive<
    T, // The object type
    RenderT,
    ConfigT extends ObjectConfig<T>,
    MappingT extends ComponentMap<RenderT> // Component mappings
> =
    | keyof T
    | {
        key: keyof T;
        label?: string;
        component: AllComponentNames<RenderT, MappingT>;
    } & {
        [ObjK in keyof T]: ConfigT[ObjK] extends ObjectMappings['key'] ?
        {
            [K in ObjectMappings['key']]: ConfigT[ObjK] extends K ?
            { key: ObjK, component: ComponentNames<RenderT, MappingT>[K] } :
            never
        }[ObjectMappings['key']]
        // Enforce type compatibility between the object key and component
        : never
    }[keyof T]
    | CustomRender<T, RenderT>;

export type FormItem<T, RenderT, ConfigT extends ObjectConfig<T>, MappingT extends ComponentMap<RenderT>> = FormPrimitive<T, RenderT, ConfigT, MappingT> | FormItems<T, RenderT, ConfigT, MappingT>;

export type FormItems<T, RenderT, ConfigT extends ObjectConfig<T>, MappingT extends ComponentMap<RenderT>> = {
    label: string;
    direction: FormDirection,
    items: FormItem<T, RenderT, ConfigT, MappingT>[]
};





export type ObjectConfig<
    T, // The object type
> = {
        // Map each key in the object T to a valid component key in MappingT
        [ObjK in keyof T]: Extract<ObjectMappings, { value: T[ObjK] }>['key']
    };
