
import { ReactNode } from 'react';
import {
    FormItems, FormPrimitive, ObjectConfig,
} from './lib/form';
import { ReactRenderComponentMap } from './react/config';


// Steps: 
// Add tanstack with validation
// Update 

// user code
export type ExampleObject = {key1: number; key2: boolean;  key3: string,};


export const exampleObject: ExampleObject = {
    key1: 0,
    key2: true,
    key3: 'test',
};

export const validPrimitive: FormPrimitive<ExampleObject, ReactNode, ExampleObjectConfig, ReactRenderComponentMap> = {
    key: 'key1', // Matches the `number` type
    component: 'double-text-box', // `double-primitive` expects `Edm.Double` which is `number`
};


export const exampleForm: FormItems<ExampleObject, ReactNode, ExampleObjectConfig, ReactRenderComponentMap> = {
    direction: 'column',
    label: 'Test',
    items: [
        {
            key: 'key2',
            component: 'switch',
            label: 'Key 2',
        },
        {
            direction: 'column',
            label: 'test',
            items: [
                'key1',

                {
                    key: 'key3',
                    component: 'single-line-text-field',
                },
            ],
        },
    ],
}


// Type Configuration 
export const exampleObjectConfiguration = {
    key1: 'Edm.Double',
    key2: 'Edm.Boolean',
    key3: 'Edm.String',
} as const satisfies ObjectConfig<ExampleObject>;


export type ExampleObjectConfig = typeof exampleObjectConfiguration;



