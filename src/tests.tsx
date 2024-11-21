import React, { ReactNode } from "react";
import { SingleComponentType } from "./lib/domain";
import { Items, Primitive } from "./lib/form";
import { Switch, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

// type ComponentKeys = 'double-primitive' | 'boolean-primitive';

type ComponentMappings = {
    'double-primitive': SingleComponentType<ReactNode, 'Edm.Double'>;
    'boolean-primitive': SingleComponentType<ReactNode, 'Edm.Boolean'>;
    'string-primitive': SingleComponentType<ReactNode, 'Edm.String'>;
    'date-picker': SingleComponentType<ReactNode, 'Edm.DateTimeOffset'>;
};

// Firstly make the keys typesafe 
// secondly make util methods to allow the same component for different types - probs needs to be in typing somehow?

const componentMap: ComponentMappings = {
    'double-primitive':
    {
        type: 'Edm.Double',
        display: (value: number) => value,
        edit: (value: number, onChange: (value: number) => void) => <TextField value={value} onChange={e => onChange(+e.target.value)} />,
    },
    'boolean-primitive':
    {
        type: 'Edm.Boolean',
        display: (data: boolean) => data ? 'true' : 'false',
        edit: (value: boolean, onChange: (value: boolean) => void) => <Switch checked={value} onClick={x => onChange(!x)} />,
    },
    "date-picker":
    {
        type: 'Edm.DateTimeOffset',
        display: (data) => data.toDateString(),
        edit: (data, onChange) => <TextField value={data.toDateString()} onChange={e => onChange(new Date(e.target.value))} />
    },
    "string-primitive":
    {
        type: 'Edm.String',
        display: value => value,
        edit: (value: string, onChange: (value: string) => void) => <TextField value={value} onChange={e => onChange(e.target.value)} />,
    }

}


type ExampleObject = {
    key1: number;
    key2: boolean;
    key3: string;
};

const validPrimitive: Primitive<ExampleObject, ReactNode, ComponentMappings> = {
    key: 'key2', // Matches the `number` type
    component: 'boolean-primitive', // `double-primitive` expects `Edm.Double` which is `number`
};



const form: Items<ExampleObject, ReactNode, ComponentMappings> = {
    direction: 'row',
    label: 'Test',
    items: [
        "key1",
        {
            key: 'key2',
            component: 'boolean-primitive'
        },
        {
            direction: 'column',
            label: 'test',
            items: [
                {
                    key: 'key3',
                    component: 'string-primitive'
                }
            ]
        }
    ]
}


