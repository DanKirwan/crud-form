// DoubleField.tsx
import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';
import { extractRelevantError } from '@src/lib/errorUtils';

const floatingFieldParts: Pick<SingleComponentType<JSX.Element, 'Double'>, 'edit' | 'display'> = {
    display: ({ state, label }: FieldDisplayOptions<number | null>) => (
        <TextField
            label={label}
            value={state.value !== undefined ? state.value : ''}
            slotProps={{ input: { readOnly: true } }}
            variant="outlined"
            fullWidth
            type="number"
        />
    ),
    edit: ({ state, handleBlur, handleChange, name, label, required }: FieldEditOptions<number | null>) => (
        <TextField
            required={required}
            label={label}
            value={state.value !== undefined ? state.value : ''}
            onChange={(event) => {
                const value = event.target.value;
                if (!value) return;
                handleChange(parseFloat(value));
            }}
            onBlur={handleBlur}
            name={name}
            error={!!extractRelevantError(state.meta.errorMap)}
            helperText={extractRelevantError(state.meta.errorMap) ?? ' '}
            variant="outlined"
            fullWidth
            type="number"
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
};


export const FloatField = {
    ...floatingFieldParts,
    type: 'Single',
} as const satisfies SingleComponentType<JSX.Element, 'Single'>;

export const DoubleField = {
    ...floatingFieldParts,
    type: 'Double',
} as const satisfies SingleComponentType<JSX.Element, 'Double'>;

export const DecimalField = {
    ...floatingFieldParts,
    type: 'Decimal',
} as const satisfies SingleComponentType<JSX.Element, 'Decimal'>;