import {
    Box,
    Checkbox,
    Slider,
    Switch,
    TextField,
    Typography
} from '@mui/material';
import { DatePicker, DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { ReactNode } from 'react';

import { ComponentMap } from '../lib/domain';
export const REACT_COMPONENT_MAP = {
    'Edm.Boolean': [
        {
            name: 'switch',
            type: 'Edm.Boolean',
            display: (data: boolean, label?: string) => (
                <Box display="flex" alignItems="center">
                    {label && (
                        <Typography variant="body1" mr={1}>
                            {label}:
                        </Typography>
                    )}
                    <Typography variant="body1">{data ? 'True' : 'False'}</Typography>
                </Box>
            ),
            edit: (
                value: boolean,
                onChange: (value: boolean) => void,
                label?: string
            ) => (
                <Box display="flex" alignItems="center">
                    {label && (
                        <Typography variant="body1" mr={1}>
                            {label}
                        </Typography>
                    )}
                    <Switch
                        checked={value}
                        onChange={(event) => onChange(event.target.checked)}
                        color="primary"
                    />
                </Box>
            ),
        },
        {
            name: 'checkbox',
            type: 'Edm.Boolean',
            display: (data: boolean, label?: string) => (
                <Box display="flex" alignItems="center">
                    <Checkbox checked={data} disabled />
                    {label && (
                        <Typography variant="body1" ml={1}>
                            {label}
                        </Typography>
                    )}
                </Box>
            ),
            edit: (
                value: boolean,
                onChange: (value: boolean) => void,
                label?: string
            ) => (
                <Box display="flex" alignItems="center">
                    <Checkbox
                        checked={value}
                        onChange={(event) => onChange(event.target.checked)}
                        color="primary"
                    />
                    {label && (
                        <Typography variant="body1" ml={1}>
                            {label}
                        </Typography>
                    )}
                </Box>
            ),
        },
    ],
    'Edm.DateTimeOffset': [
        {
            name: 'date-picker',
            type: 'Edm.DateTimeOffset',
            display: (data: Date, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data.toLocaleDateString()}
                            </Typography>
                        </Typography>
                    )}
                    {!label && (
                        <Typography variant="body2">
                            {data.toLocaleDateString()}
                        </Typography>
                    )}
                </Box>
            ),
            edit: (
                value: Date,
                onChange: (value: Date) => void,
                label?: string
            ) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label={label}
                        value={value}
                        onChange={(date) => date && onChange(date)}
                    />
                </LocalizationProvider>
            ),
        },
        {
            name: 'date-time-picker',
            type: 'Edm.DateTimeOffset',
            display: (data: Date, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data.toLocaleString()}
                            </Typography>
                        </Typography>
                    )}
                    {!label && (
                        <Typography variant="body2">{data.toLocaleString()}</Typography>
                    )}
                </Box>
            ),
            edit: (
                value: Date,
                onChange: (value: Date) => void,
                label?: string
            ) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        label={label}
                        value={value}
                        onChange={(date) => date && onChange(date)}
                    />
                </LocalizationProvider>
            ),
        },
    ],
    'Edm.Decimal': [
        {
            name: 'decimal-text-field',
            type: 'Edm.Decimal',
            display: (data: number, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data.toFixed(2)}
                            </Typography>
                        </Typography>
                    )}
                    {!label && (
                        <Typography variant="body2">{data.toFixed(2)}</Typography>
                    )}
                </Box>
            ),
            edit: (
                value: number,
                onChange: (value: number) => void,
                label?: string
            ) => (
                <TextField
                    label={label}
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
        {
            name: 'decimal-slider',
            type: 'Edm.Decimal',
            display: (data: number, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data.toFixed(2)}
                            </Typography>
                        </Typography>
                    )}
                    {!label && (
                        <Typography variant="body2">{data.toFixed(2)}</Typography>
                    )}
                </Box>
            ),
            edit: (
                value: number,
                onChange: (value: number) => void,
                label?: string
            ) => (
                <Box width={'100%'}>
                    {label && (
                        <Typography variant="body1" gutterBottom>
                            {label}
                        </Typography>
                    )}
                    <Slider
                        value={value}
                        min={0}
                        max={100}
                        step={0.01}
                        onChange={(e, newValue) => onChange(newValue as number)}
                        valueLabelDisplay="auto"
                    />
                </Box>
            ),
        },
    ],
    'Edm.Byte': [
        {
            name: 'byte-number-field',
            type: 'Edm.Byte',
            display: (data: number, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data.toString()}
                            </Typography>
                        </Typography>
                    )}
                    {!label && <Typography variant="body2">{data.toString()}</Typography>}
                </Box>
            ),
            edit: (
                value: number,
                onChange: (value: number) => void,
                label?: string
            ) => (
                <TextField
                    label={label}
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
            name: 'single-number-field',
            type: 'Edm.Single',
            display: (data: number, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data.toString()}
                            </Typography>
                        </Typography>
                    )}
                    {!label && <Typography variant="body2">{data.toString()}</Typography>}
                </Box>
            ),
            edit: (
                value: number,
                onChange: (value: number) => void,
                label?: string
            ) => (
                <TextField
                    label={label}
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
            name: 'int-number-field',
            type: 'Edm.Int32',
            display: (data: number, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data.toString()}
                            </Typography>
                        </Typography>
                    )}
                    {!label && <Typography variant="body2">{data.toString()}</Typography>}
                </Box>
            ),
            edit: (
                value: number,
                onChange: (value: number) => void,
                label?: string
            ) => (
                <TextField
                    label={label}
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
            name: 'int-slider',
            type: 'Edm.Int32',
            display: (data: number, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data.toString()}
                            </Typography>
                        </Typography>
                    )}
                    {!label && <Typography variant="body2">{data.toString()}</Typography>}
                </Box>
            ),
            edit: (
                value: number,
                onChange: (value: number) => void,
                label?: string
            ) => (
                <Box width={'100%'}>
                    {label && (
                        <Typography variant="body1" gutterBottom>
                            {label}
                        </Typography>
                    )}
                    <Slider
                        value={value}
                        min={0}
                        max={100}
                        step={1}
                        onChange={(e, newValue) => onChange(newValue as number)}
                        valueLabelDisplay="auto"
                    />
                </Box>
            ),
        },
    ],
    'Edm.Double': [
        {
            name: 'double-number-field',
            type: 'Edm.Double',
            display: (data: number, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data.toFixed(2)}
                            </Typography>
                        </Typography>
                    )}
                    {!label && (
                        <Typography variant="body2">{data.toFixed(2)}</Typography>
                    )}
                </Box>
            ),
            edit: (
                value: number,
                onChange: (value: number) => void,
                label?: string
            ) => (
                <TextField
                    label={label}
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
            name: 'guid-text-field',
            type: 'Edm.Guid',
            display: (data: string, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data}
                            </Typography>
                        </Typography>
                    )}
                    {!label && <Typography variant="body2">{data}</Typography>}
                </Box>
            ),
            edit: (
                value: string,
                onChange: (value: string) => void,
                label?: string
            ) => (
                <TextField
                    label={label}
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
            name: 'single-line-text-field',
            type: 'Edm.String',
            display: (data: string, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1">
                            {label}:{' '}
                            <Typography variant="body2" component="span">
                                {data}
                            </Typography>
                        </Typography>
                    )}
                    {!label && <Typography variant="body2">{data}</Typography>}
                </Box>
            ),
            edit: (
                value: string,
                onChange: (value: string) => void,
                label?: string
            ) => (
                <TextField
                    label={label}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    fullWidth
                />
            ),
        },
        {
            name: 'multi-line-text-field',
            type: 'Edm.String',
            display: (data: string, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1" gutterBottom>
                            {label}:
                        </Typography>
                    )}
                    <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
                        {data}
                    </Typography>
                </Box>
            ),
            edit: (
                value: string,
                onChange: (value: string) => void,
                label?: string
            ) => (
                <TextField
                    label={label}
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
            name: 'geography-point-input',
            type: 'Edm.GeographyPoint',
            display: (data: { lat: number; long: number }, label?: string) => (
                <Box>
                    {label && (
                        <Typography variant="body1" gutterBottom>
                            {label}:
                        </Typography>
                    )}
                    <Typography variant="body2">
                        Latitude: {data.lat}, Longitude: {data.long}
                    </Typography>
                </Box>
            ),
            edit: (
                value: { lat: number; long: number },
                onChange: (value: { lat: number; long: number }) => void,
                label?: string
            ) => (
                <Box>
                    {label && (
                        <Typography variant="body1" gutterBottom>
                            {label}
                        </Typography>
                    )}
                    <Box display="flex" flexDirection="column" gap={2} mt={1}>
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
                </Box>
            ),
        },
        // Optionally, you can add a map component for better UX
    ],
} as const satisfies ComponentMap<ReactNode>;


export type ReactComponentMap = typeof REACT_COMPONENT_MAP;
