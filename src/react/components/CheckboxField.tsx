// BooleanField.tsx
import { Checkbox, CircularProgress, FormControlLabel, FormHelperText, Switch } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';
import { extractRelevantError } from '@src/lib/errorUtils';

export const CheckboxField = {
    type: 'Edm.Boolean',
    name: 'checkbox',
    display: ({ state, label }: FieldDisplayOptions<boolean>) => (
        <FormControlLabel
            control={<Checkbox checked={!!state.value} disabled color="primary" />}
            label={label}
        />
    ),
    edit: ({ state, handleBlur, handleChange, name, label, required }: FieldEditOptions<boolean>) => (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <FormControlLabel
                required={required}
                control={
                    <Checkbox
                        checked={!!state.value}
                        onChange={(event) => handleChange(event.target.checked)}
                        onBlur={handleBlur}
                        name={name}
                        color="primary"
                    />
                }
                label={label}
            />
            
            {extractRelevantError(state.meta.errorMap) && (
                <FormHelperText error>{extractRelevantError(state.meta.errorMap)}</FormHelperText>
            )}
            {state.meta.isValidating && (
                <CircularProgress
                    size={20}
                    style={{ position: 'absolute', right: -30, top: '50%', marginTop: -10 }}
                />
            )}
        </div>
    ),
} as const satisfies SingleComponentType<JSX.Element, 'Edm.Boolean'>;