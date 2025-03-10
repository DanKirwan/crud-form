import { CircularProgress, FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';
import { extractRelevantError } from '@src/lib/errorUtils';
import { ReactNode } from 'react';
import { FieldDisplayOptions, FieldEditOptions, SelectComponent } from '../../lib/domain';

// A helper to build a select field. 
// `T` is the type of the select value (e.g., string).
// `options` is a default list of options.
export const BasicSelect = {
    display: ({ state, label }: FieldDisplayOptions<string | number | null | undefined>, options) => (
        <FormControl fullWidth variant="outlined" disabled>
            <InputLabel>{label}</InputLabel>
            <Select
                value={state.value ?? ''}
                label={label}
                readOnly
            >
                {Object.entries(options).map(([k, v]) => (
                    <MenuItem key={k} value={v ?? undefined}>
                        {k}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    ),

    // The edit method now accepts a second argument `componentProps` 
    // to allow customization of the select, like loading indicators, placeholder,
    // or additional options.
    edit: (
        { state, handleBlur, handleChange, name, label, required }: FieldEditOptions<string | number | null | undefined>,
        options,         
    ) => {

        const errorText = extractRelevantError(state.meta.errorMap);

        return (
            <FormControl required={required} fullWidth variant="outlined" error={!!errorText}>
                <InputLabel>{label}</InputLabel>
                <Select
                    name={name}
                    value={state.value ?? ''}
                    onChange={(event) => {
                        handleChange(event.target.value)
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
                    {Object.entries(options).map(([k, v]) => (
                        <MenuItem key={k} value={v ?? undefined}>
                            {k}
                        </MenuItem>
                    ))}

                </Select>
                
                {errorText && <FormHelperText>{errorText}</FormHelperText>}
            </FormControl>
        );
    },
} satisfies SelectComponent<ReactNode>;