/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";
import { FormItems, FormPrimitive, ObjectConfig } from "./lib/form";
import { ReactComponentMap } from "./react/config";

// type ComponentKeys = 'double-primitive' | 'boolean-primitive';





// user code
export type ExampleObject = {
    key1: number;
    key2: boolean;
    key3: string;
};


export const exampleObject: ExampleObject = {
    key1: 0,
    key2: true,
    key3: "test"
};


export const validPrimitive: FormPrimitive<ExampleObject, ReactNode, ExampleObjectConfig, ReactComponentMap> = {
    key: 'key1', // Matches the `number` type
    component: 'double-number-field', // `double-primitive` expects `Edm.Double` which is `number`
};



// TODO add a label ability
// Make label automatic if just the key

export const exampleForm: FormItems<ExampleObject, ReactNode, ExampleObjectConfig, ReactComponentMap> = {
    direction: 'column',
    label: 'Test',
    items: [
        {
            key: 'key2',
            component: 'checkbox',
            label: 'Key 2'
        },
        {
            direction: 'column',
            label: 'test',
            items: [
                "key1",

                {
                    key: 'key3',
                    component: 'single-line-text-field'
                }
            ]
        }
    ]
}


// Type Configuration 
export const exampleObjectConfiguration = {
    key1: 'Edm.Double',
    key2: 'Edm.Boolean',
    key3: 'Edm.String'
} as const satisfies ObjectConfig<ExampleObject>;


export type ExampleObjectConfig = typeof exampleObjectConfiguration;



