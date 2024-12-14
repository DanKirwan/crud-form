// BooleanField.tsx
import { Checkbox, CircularProgress, FormControlLabel, FormHelperText, Switch } from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';

export const CheckboxField = {
    type: 'Edm.Boolean',
    name: 'checkbox',
    display: ({ state, label }: FieldDisplayOptions<boolean>) => (
        <FormControlLabel
            control={<Checkbox checked={!!state.value} disabled color="primary" />}
            label={label}
        />
    ),
    edit: ({ state, handleBlur, handleChange, name, label }: FieldEditOptions<boolean>) => (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <FormControlLabel
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
            {state.meta.errors.length > 0 && (
                <FormHelperText error>{state.meta.isTouched && state.meta.errors.join(', ')}</FormHelperText>
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