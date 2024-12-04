// GeographyPointField.tsx
import {
    CircularProgress,
    Grid,
    InputAdornment,
    TextField
} from '@mui/material';
import { FieldDisplayOptions, FieldEditOptions, SingleComponentType } from '../../lib/domain';

export const GeographyPointField = {
    type: 'Edm.GeographyPoint',
    name: 'geographyPoint',
    display: ({ state, label }: FieldDisplayOptions<{ lat: number; long: number }>) => (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    label={`${label} Latitude`}
                    value={state.value?.lat !== undefined ? state.value.lat : ''}
                    slotProps={{ input: { readOnly: true } }}
                    variant="outlined"
                    fullWidth
                    type="number"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label={`${label} Longitude`}
                    value={state.value?.long !== undefined ? state.value.long : ''}
                    slotProps={{ input: { readOnly: true } }}
                    variant="outlined"
                    fullWidth
                    type="number"
                />
            </Grid>
        </Grid>
    ),
    edit: ({ state, handleBlur, handleChange, name, label }: FieldEditOptions<{ lat: number; long: number }>) => (
        <Grid container spacing={2}>
            <Grid item xs={6} style={{ position: 'relative' }}>
                <TextField
                    label={`${label} Latitude`}
                    value={state.value?.lat !== undefined ? state.value.lat : ''}
                    onChange={(event) =>
                        handleChange({ ...state.value, lat: parseFloat(event.target.value) })
                    }
                    onBlur={handleBlur}
                    name={`${name}.lat`}
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
            </Grid>
            <Grid item xs={6} style={{ position: 'relative' }}>
                <TextField
                    label={`${label} Longitude`}
                    value={state.value?.long !== undefined ? state.value.long : ''}
                    onChange={(event) =>
                        handleChange({ ...state.value, long: parseFloat(event.target.value) })
                    }
                    onBlur={handleBlur}
                    name={`${name}.long`}
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
            </Grid>
        </Grid>
    ),
} as const satisfies SingleComponentType<JSX.Element, 'Edm.GeographyPoint'>;
