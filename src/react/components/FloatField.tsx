// DoubleField.tsx
import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';

const floatingFieldParts: Pick<SingleComponentType<JSX.Element, 'Edm.Double'>, 'edit' | 'display'> = {
    display: ({ state, label }: FieldDisplayOptions<number>) => (
        <TextField
            label={label}
            value={state.value !== undefined ? state.value : ''}
            slotProps={{ input: { readOnly: true } }}
            variant="outlined"
            fullWidth
            type="number"
        />
    ),
    edit: ({ state, handleBlur, handleChange, name, label }: FieldEditOptions<number>) => (
        <TextField
            label={label}
            value={state.value !== undefined ? state.value : ''}
            onChange={(event) => {
                const value = event.target.value;
                if (!value) return;
                handleChange(parseFloat(value));
            }}
            onBlur={handleBlur}
            name={name}
            error={state.meta.errors.length > 0}
            helperText={state.meta.errors.join(', ')}
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
    type: 'Edm.Single',
    name: 'float-text-box',
} as const satisfies SingleComponentType<JSX.Element, 'Edm.Single'>;

export const DoubleField = {
    ...floatingFieldParts,
    type: 'Edm.Double',
    name: 'double-text-box',
} as const satisfies SingleComponentType<JSX.Element, 'Edm.Double'>;

export const DecimalField = {
    ...floatingFieldParts,
    type: 'Edm.Decimal',
    name: 'decimal-text-box',
} as const satisfies SingleComponentType<JSX.Element, 'Edm.Decimal'>;