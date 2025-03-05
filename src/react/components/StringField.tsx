import { TextField, CircularProgress, InputAdornment } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';
import { extractRelevantError } from '@src/lib/errorUtils';

const buildStringField = (rows: number) => ({
    display: ({ state, label }: FieldDisplayOptions<string | null>) => (
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
    type: 'String',
} as const satisfies SingleComponentType<JSX.Element, 'String'>;


export const MultilineStringField = {
    ...buildStringField(4),
    type: 'String',
} as const satisfies SingleComponentType<JSX.Element, 'String'>;
