// Int32Field.tsx
import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';



const integerField: Pick<SingleComponentType<JSX.Element, 'Edm.Int32'>, 'display' | 'edit'> = {

    display: ({ state, label }: FieldDisplayOptions<number>) => (
        <TextField
            label={label}
            value={state.value !== undefined ? state.value : ''}
            inputProps={{ readOnly: true }}
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
                handleChange(parseInt(value, 10));
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



export const Int32Field = {
    ...integerField,
    type: 'Edm.Int32',
    name: 'int-text-box',
} as const satisfies SingleComponentType<JSX.Element, 'Edm.Int32'>;

export const ByteField = {
    ...integerField,
    type: 'Edm.Byte',
    name: 'byte-text-box',
} as const satisfies SingleComponentType<JSX.Element, 'Edm.Byte'>;