// DateTimeOffsetField.tsx
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

// todo needs better error handling and other input props
export const DateTimeOffsetField = {
    type: 'Edm.DateTimeOffset',
    name: 'datetime',
    display: ({ state, label }: FieldDisplayOptions<Date>) => (
        <TextField
            label={label}
            value={state.value ? state.value.toISOString() : ''}
            slotProps={{ input: { readOnly: true } }}
            variant="outlined"
            fullWidth
        />
    ),
    edit: ({ state, handleBlur, handleChange, label }: FieldEditOptions<Date>) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>



            <DateTimePicker
                label={label}
                value={state.value || null}
                onChange={(date) => {
                    if (!date) return;
                    handleChange(date)
                }}

                onAccept={handleBlur}

            // renderInput={(params) => (
            //     <TextField
            //         {...params}
            //         name={name}
            //         error={state.meta.errors.length > 0}
            //         helperText={state.meta.errors.join(', ')}
            //         variant="outlined"
            //         fullWidth
            //         inputProps={{ readOnly: false }}
            //         slotProps={{
            //             input: {
            //                 endAdornment: (
            //                     <>
            //                         {params.InputProps?.endAdornment}
            //                         {state.meta.isValidating && (
            //                             <InputAdornment position="end">
            //                                 <CircularProgress size={20} />
            //                             </InputAdornment>
            //                         )}
            //                     </>
            //                 ),
            //             },
            //         }}
            //     />
            // )}
            />
        </LocalizationProvider>
    ),
} as const satisfies SingleComponentType<JSX.Element, 'Edm.DateTimeOffset'>;