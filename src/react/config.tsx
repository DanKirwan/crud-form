import React, { ReactNode } from 'react';
import {
    TextField,
    Switch,
    Checkbox,
    Slider,
    Box,
    InputAdornment,
} from '@mui/material';
import { DatePicker, DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

import { ComponentMap } from '../lib/domain';

export const REACT_COMPONENT_MAP = {
    'Edm.Boolean': [
        {
            name: 'switch' as const,
            type: 'Edm.Boolean' as const,
            display: (data: boolean) => (data ? 'True' : 'False'),
            edit: (value: boolean, onChange: (value: boolean) => void) => (
                <Switch
                    checked={value}
                    onChange={(event) => onChange(event.target.checked)}
                />
            ),
        },
        {
            name: 'checkbox' as const,
            type: 'Edm.Boolean' as const,
            display: (data: boolean) => (data ? 'True' : 'False'),
            edit: (value: boolean, onChange: (value: boolean) => void) => (
                <Checkbox
                    checked={value}
                    onChange={(event) => onChange(event.target.checked)}
                />
            ),
        },
    ],
    'Edm.DateTimeOffset': [
        {
            name: 'date-picker' as const,
            type: 'Edm.DateTimeOffset' as const,
            display: (data: Date) => data.toLocaleDateString(),
            edit: (value: Date, onChange: (value: Date) => void) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        value={value}
                        onChange={(date) => date && onChange(date)}
                    />
                </LocalizationProvider>
            ),
        },
        {
            name: 'date-time-picker' as const,
            type: 'Edm.DateTimeOffset' as const,
            display: (data: Date) => data.toLocaleString(),
            edit: (value: Date, onChange: (value: Date) => void) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        value={value}
                        onChange={(date) => date && onChange(date)}
                    />
                </LocalizationProvider>
            ),
        },
    ],
    'Edm.Decimal': [
        {
            name: 'decimal-text-field' as const,
            type: 'Edm.Decimal' as const,
            display: (data: number) => data.toFixed(2),
            edit: (value: number, onChange: (value: number) => void) => (
                <TextField
                    type="number"
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                    InputProps={{
                        inputProps: { step: '0.01' },
                        endAdornment: <InputAdornment position="end">units</InputAdornment>,
                    }}
                    fullWidth
                />
            ),
        },
        {
            name: 'decimal-slider' as const,
            type: 'Edm.Decimal' as const,
            display: (data: number) => data.toFixed(2),
            edit: (value: number, onChange: (value: number) => void) => (
                <Slider
                    value={value}
                    min={0}
                    max={100}
                    step={0.01}
                    onChange={(e, newValue) => onChange(newValue as number)}
                    valueLabelDisplay="auto"
                />
            ),
        },
    ],
    'Edm.Byte': [
        {
            name: 'byte-number-field' as const,
            type: 'Edm.Byte' as const,
            display: (data: number) => data.toString(),
            edit: (value: number, onChange: (value: number) => void) => (
                <TextField
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Math.round(Number(e.target.value)))}
                    InputProps={{
                        inputProps: { min: 0, max: 255, step: 1 },
                    }}
                    fullWidth
                />
            ),
        },
    ],
    'Edm.Single': [
        {
            name: 'single-number-field' as const,
            type: 'Edm.Single' as const,
            display: (data: number) => data.toString(),
            edit: (value: number, onChange: (value: number) => void) => (
                <TextField
                    type="number"
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                    fullWidth
                />
            ),
        },
    ],
    'Edm.Int32': [
        {
            name: 'int-number-field' as const,
            type: 'Edm.Int32' as const,
            display: (data: number) => data.toString(),
            edit: (value: number, onChange: (value: number) => void) => (
                <TextField
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Math.round(Number(e.target.value)))}
                    InputProps={{
                        inputProps: { step: 1 },
                    }}
                    fullWidth
                />
            ),
        },
        {
            name: 'int-slider' as const,
            type: 'Edm.Int32' as const,
            display: (data: number) => data.toString(),
            edit: (value: number, onChange: (value: number) => void) => (
                <Slider
                    value={value}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(e, newValue) => onChange(newValue as number)}
                    valueLabelDisplay="auto"
                />
            ),
        },
    ],
    'Edm.Double': [
        {
            name: 'double-number-field' as const,
            type: 'Edm.Double' as const,
            display: (data: number) => data.toFixed(2),
            edit: (value: number, onChange: (value: number) => void) => (
                <TextField
                    type="number"
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                    InputProps={{
                        inputProps: { step: '0.01' },
                    }}
                    fullWidth
                />
            ),
        },
    ],
    'Edm.Guid': [
        {
            name: 'guid-text-field' as const,
            type: 'Edm.Guid' as const,
            display: (data: string) => data,
            edit: (value: string, onChange: (value: string) => void) => (
                <TextField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    inputProps={{
                        pattern:
                            '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89ab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}',
                        title: 'Enter a valid UUID',
                    }}
                    fullWidth
                />
            ),
        },
    ],
    'Edm.String': [
        {
            name: 'single-line-text-field' as const,
            type: 'Edm.String' as const,
            display: (data: string) => data,
            edit: (value: string, onChange: (value: string) => void) => (
                <TextField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    fullWidth
                />
            ),
        },
        {
            name: 'multi-line-text-field' as const,
            type: 'Edm.String' as const,
            display: (data: string) => data,
            edit: (value: string, onChange: (value: string) => void) => (
                <TextField
                    multiline
                    rows={4}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    fullWidth
                />
            ),
        },
    ],
    'Edm.GeographyPoint': [
        {
            name: 'geography-point-input' as const,
            type: 'Edm.GeographyPoint' as const,
            display: (data: { lat: number; long: number }) =>
                `Latitude: ${data.lat}, Longitude: ${data.long}`,
            edit: (
                value: { lat: number; long: number },
                onChange: (value: { lat: number; long: number }) => void
            ) => (
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Latitude"
                        type="number"
                        value={value.lat}
                        onChange={(e) =>
                            onChange({ ...value, lat: parseFloat(e.target.value) })
                        }
                        fullWidth
                    />
                    <TextField
                        label="Longitude"
                        type="number"
                        value={value.long}
                        onChange={(e) =>
                            onChange({ ...value, long: parseFloat(e.target.value) })
                        }
                        fullWidth
                    />
                </Box>
            ),
        },
        // Optionally, you can integrate a map component for better UX
    ],
} as const satisfies ComponentMap<ReactNode>;

export type ReactComponentMap = typeof REACT_COMPONENT_MAP;
