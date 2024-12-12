// StringField.tsx
import React from 'react';
import { TextField, CircularProgress, InputAdornment } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';

const buildStringField = (rows: number) => ({
    display: ({ state, label }: FieldDisplayOptions<string>) => (
        <TextField
            label={label}
            value={state.value || ''}
            slotProps={{ input: { readOnly: true } }}
            variant="outlined"
            multiline={rows > 1}
            rows={rows}
            fullWidth
        />
    ),
    edit: ({ state, handleBlur, handleChange, name, label }: FieldEditOptions<string>) => (
        <TextField
            label={label}
            value={state.value || ''}
            onChange={(event) => handleChange(event.target.value)}
            onBlur={handleBlur}
            name={name}
            error={state.meta.errors.length > 0}
            helperText={state.meta.errors.join(', ')}
            variant="outlined"
            fullWidth
            multiline={rows > 1}
            rows={rows}
            slotProps={{
                input: {
                    endAdornment: (
                        <>
                            {state.meta.isValidating && (
                                <InputAdornment position="end">
                                    <CircularProgress size={20} />
                                </InputAdornment>
                            )}
                        </>
                    ),
                },
            }}
        />
    ),
});


export const StringField = {
    ...buildStringField(1),
    type: 'Edm.String',
    name: 'single-line-text-field',
} as const satisfies SingleComponentType<JSX.Element, 'Edm.String'>;


export const MultilineStringField = {
    ...buildStringField(4),
    type: 'Edm.String',
    name: 'multi-line-text-field',
} as const satisfies SingleComponentType<JSX.Element, 'Edm.String'>;
