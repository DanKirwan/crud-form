// DateTimeOffsetField.tsx
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { extractRelevantError } from '@src/lib/errorUtils';


// TODO add to centralized documentation that making sure blur handling is working is very important for showing correct error messages 

export const DateTimeOffsetField = {
    type: 'Edm.DateTimeOffset',
    display: ({ state, label }: FieldDisplayOptions<Date | null>) => (
        <TextField
            label={label}
            value={state.value ? state.value.toISOString() : ''}
            slotProps={{ input: { readOnly: true } }}
            variant="outlined"
            fullWidth
        />
    ),
    edit: ({ state, handleBlur, handleChange, label }: FieldEditOptions<Date | null>) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                label={label}
                value={state.value || null}
                onChange={(date) => {
                    if (!date) return;
                    console.log(date, typeof date, date?.getTime());
                    handleChange(date)
                }}
                
                onClose={handleBlur}
                onAccept={handleBlur}

                slotProps={{
                    textField: {
                        onBlur: handleBlur,
                        error: !!extractRelevantError(state.meta.errorMap),
                        helperText: extractRelevantError(state.meta.errorMap) ?? ' ',
                    },
                    
                }}
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