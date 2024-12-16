import {
    Box,
    Button,
    Paper,
    Stack,
} from '@mui/material';
import { ReactFormExtendedApi, Validator } from '@tanstack/react-form';
import { ReactNode } from 'react';
import { renderForm } from '../lib/display';
import { RenderConfig } from '../lib/domain';
import { FormItems, ObjectTypeConfig } from '../lib/form';
import { FormValidator } from '@src/lib/validation/validationTypes';
import { UndefinedDeepPrimitives } from '@src/lib/typeUtils';

type Props<T, TObjectConfig extends ObjectTypeConfig<T>, TRenderConfig extends RenderConfig<ReactNode>, TFormValidator extends Validator<T, unknown> | undefined = undefined> = {
    value: ReactFormExtendedApi<UndefinedDeepPrimitives<T>, TFormValidator>;
    config: TObjectConfig;
    form: FormItems<T, ReactNode, TObjectConfig, TRenderConfig>;
    renderConfig: TRenderConfig,
    validator?: FormValidator<T, TFormValidator> 
};

export const EditForm = <T, TObjectConfig extends ObjectTypeConfig<T>, TRenderConfig extends RenderConfig<ReactNode>,TFormValidator extends Validator<T, unknown> | undefined = undefined>({
    config,
    value,
    form,
    renderConfig,
    validator = undefined,
}: Props<T, TObjectConfig, TRenderConfig, TFormValidator>) => {


    return renderForm<T, ReactNode, TObjectConfig, TRenderConfig, TFormValidator>(
        form,
        value,
        renderConfig,
        config,
        // Function to render the entire form
        (content) => (
            <Paper elevation={3}>
                <Box p={2} width='80vw' height='100vh' >
                    <Stack height='100%' justifyContent='space-between'>
                        <Stack overflow='auto'>

                            {content}
                        </Stack>

                        <value.Subscribe 
                            selector={state => [state.canSubmit, state.isValidating]}
                            children={([canSubmit, isValidating]) => (

                            
                                <Box mt={3} mb={1} textAlign="right">
                                
                                    <Button
                                        disabled={!canSubmit}
                                        variant="contained"
                                        color="primary"
                                        // onClick={() => onSubmit && onSubmit(value)}
                                    >
                                Submit
                                    </Button>
                                </Box>
                            )}
                        />
                    </Stack>
                </Box>
            </Paper>
        ),
        (fields, render) => 
            (<value.Subscribe 
                selector={state => fields.map(field => state.fieldMeta[field])}
                children={(fieldMetas) => render(fieldMetas) }
            />),

        (key, validators, render) => (
            <value.Field name={key} validators={validators}>
                {(field) => render(field)}
            </value.Field>),
        validator,
    );
};
