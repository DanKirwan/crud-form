import { Switch, TextField } from "@mui/material";
import { ReactNode } from "react";
import { ComponentMap } from "../lib/domain";

export const REACT_COMPONENT_MAP = {
    'Edm.Boolean': [
        {
            name: 'switch' as const,
            type: 'Edm.Boolean' as const,
            display: (data: boolean) => data ? 'true' : 'false',
            edit: (value: boolean, onChange: (value: boolean) => void) => <Switch checked={value} onClick={() => onChange(!value)} />,
        }
    ],
    "Edm.DateTimeOffset": [
        {
            name: 'date-input' as const,
            type: 'Edm.DateTimeOffset' as const,
            display: (data) => data.toDateString(),
            edit: (data, onChange) => <TextField value={data.toDateString()} onChange={e => onChange(new Date(e.target.value))} />
        }
    ],
    "Edm.Decimal": [
        {
            name: 'decimal-number-box' as const,
            type: 'Edm.Decimal' as const,
            display: (data) => `${data}`,
            edit: (data, onChange) => <TextField value={data} onChange={e => onChange(+e.target.value)} />
        }
    ],
    "Edm.Byte": [
        {
            name: 'byte-number-box' as const,
            type: 'Edm.Byte' as const,
            display: (data) => `${data}`,
            edit: (data, onChange) => <TextField value={data} onChange={e => onChange(+e.target.value)} />
        }
    ],
    "Edm.Single": [
        {
            name: 'single-number-box' as const,
            type: 'Edm.Single' as const,
            display: (data) => `${data}`,
            edit: (data, onChange) => <TextField value={data} onChange={e => onChange(+e.target.value)} />
        }
    ],
    "Edm.Int32": [
        {
            name: 'int-number-box' as const,
            type: 'Edm.Int32' as const,
            display: (data) => `${data}`,
            edit: (data, onChange) => <TextField value={data} onChange={e => onChange(+e.target.value)} />
        }
    ],
    "Edm.Double": [
        {
            name: 'double-number-box' as const,
            type: 'Edm.Double' as const,
            display: (data) => `${data}`,
            edit: (data, onChange) => <TextField value={data} onChange={e => onChange(+e.target.value)} />
        }
    ],
    "Edm.Guid": [
        {
            name: 'guid-text-box' as const,
            type: 'Edm.Guid' as const,
            display: (data) => `${data}`,
            edit: (data, onChange) => <TextField value={data} onChange={e => onChange(e.target.value)} />
        }
    ],
    "Edm.String": [
        {
            name: 'single-line-text-box' as const,
            type: 'Edm.String' as const,
            display: (data) => `${data}`,
            edit: (data, onChange) => <TextField multiline rows={2} value={data} onChange={e => onChange(e.target.value)} />
        },
        {
            name: 'multi-line-text-box' as const,
            type: 'Edm.String' as const,
            display: (data) => `${data}`,
            edit: (data, onChange) => <TextField multiline rows={2} value={data} onChange={e => onChange(e.target.value)} />
        }
    ],
    "Edm.GeographyPoint": [
        {
            name: 'geography-box' as const,
            type: 'Edm.GeographyPoint' as const,
            display: (data) => `${data}`,
            edit: (data) => <TextField value={data.lat} onChange={() => null} />
        }
    ]
} as const satisfies ComponentMap<ReactNode>;


export type ReactComponentMap = typeof REACT_COMPONENT_MAP