import { FormControl, InputLabel, Select, MenuItem, CircularProgress, InputAdornment } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';
import { extractRelevantError } from '@src/lib/errorUtils';

// A helper to build a select field. 
// `T` is the type of the select value (e.g., string).
// `options` is a default list of options.
const buildSelectField = <T extends string | number>() => ({
    display: ({ state, label }: FieldDisplayOptions<T | null>) => (
        <FormControl fullWidth variant="outlined" disabled>
            <InputLabel>{label}</InputLabel>
            <Select
                value={state.value ?? ''}
                label={label}
                readOnly
            >
                {state.value ?
                    <MenuItem key={state.value} value={state.value}>
                        {state.value}
                    </MenuItem> :
                    <MenuItem value='' disabled>
                        Not Set
                    </MenuItem>
                }
            </Select>
        </FormControl>
    ),

    // The edit method now accepts a second argument `componentProps` 
    // to allow customization of the select, like loading indicators, placeholder,
    // or additional options.
    edit: (
        { state, handleBlur, handleChange, name, label, required }: FieldEditOptions<T | null>,
        componentProps?: {
            placeholder?: string;
            options: {key: T, label: string}[];
        },
    ) => {

        const errorText = extractRelevantError(state.meta.errorMap);

        return (
            <FormControl required={required} fullWidth variant="outlined" error={!!errorText}>
                <InputLabel>{label}</InputLabel>
                <Select
                    name={name}
                    value={state.value ?? ''}
                    onChange={(event) => {
                        handleChange(event.target.value as T)
                        console.log('test')
                    } }
                    onBlur={handleBlur}
                    label={label}
                    // Using InputProps from MUI Select is a bit different.
                    // Here we can embed an adornment in the end if needed.
                    endAdornment={
                        (state.meta.isValidating) && (
                            <InputAdornment position="end">
                                <CircularProgress size={20} />
                            </InputAdornment>
                        )
                    }
                >
                    {componentProps?.placeholder && (
                        <MenuItem value="" disabled>
                            {componentProps.placeholder}
                        </MenuItem>
                    )}
                    {componentProps?.options.map(({key, label}) => (
                        <MenuItem key={key} value={key}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
                {errorText && <p style={{ color: 'red', margin: '0.5em 0 0 0' }}>{errorText}</p>}
            </FormControl>
        );
    },
});

export const StringSelectField = {
    ...buildSelectField(),
    type: 'Edm.String',
} as const satisfies SingleComponentType<JSX.Element, 'Edm.String'>;
