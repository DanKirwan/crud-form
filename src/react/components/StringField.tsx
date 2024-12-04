// StringField.tsx
import React from 'react';
import { TextField, CircularProgress, InputAdornment } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';

export const StringField = {
    type: 'Edm.String',
    name: 'single-line-text-field',
    display: ({ state, label }: FieldDisplayOptions<string>) => (
        <TextField
            label={label}
            value={state.value || ''}
            slotProps={{ input: { readOnly: true } }}
            variant="outlined"
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
} as const satisfies SingleComponentType<JSX.Element, 'Edm.String'>;
