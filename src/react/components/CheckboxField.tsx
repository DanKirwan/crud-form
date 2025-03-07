// BooleanField.tsx
import { Checkbox, CircularProgress, FormControlLabel, FormHelperText } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';

export const CheckboxField = {
    type: 'Boolean',
    display: ({ state, label }: FieldDisplayOptions<boolean | null>) => (
        <FormControlLabel
            control={<Checkbox checked={!!state.value} disabled color="primary" />}
            label={label}
        />
    ),
    edit: ({ state, handleBlur, handleChange, name, label, required }: FieldEditOptions<boolean | null>) => (
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
            
            <FormHelperText error={!!state.meta.errorMap.onChange}>
                {state.meta.errorMap.onChange ?? ' '}
            </FormHelperText>

            {state.meta.isValidating && (
                <CircularProgress
                    size={20}
                    style={{ position: 'absolute', right: -30, top: '50%', marginTop: -10 }}
                />
            )}
        </div>
    ),
} as const satisfies SingleComponentType<JSX.Element, 'Boolean'>;