// GuidField.tsx
import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';
import { extractRelevantError } from '@src/lib/errorUtils';

export const GuidField = {
    type: 'Guid',
    display: ({ state, label }: FieldDisplayOptions<string | null>) => (
        <TextField
            label={label}
            value={state.value || ''}
            slotProps={{ input: { readOnly: true } }}
            variant="outlined"
            fullWidth
        />
    ),
    edit: ({ state, handleBlur, handleChange, name, label, required }: FieldEditOptions<string | null>) => (
        <TextField
            required={required}
            label={label}
            value={state.value || ''}
            onChange={(event) => handleChange(event.target.value)}
            onBlur={handleBlur}
            name={name}
            error={!!extractRelevantError(state.meta.errorMap)}
            helperText={extractRelevantError(state.meta.errorMap) ?? ' '}
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
} as const satisfies SingleComponentType<JSX.Element, 'Guid'>;