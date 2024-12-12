import {
    Box,
    Button,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import { ReactFormExtendedApi } from '@tanstack/react-form';
import { ReactNode } from 'react';
import { renderForm } from '../lib/display';
import { ComponentMap, RenderConfig } from '../lib/domain';
import { FormItems, ObjectConfig } from '../lib/form';

type Props<T, TObjectConfig extends ObjectConfig<T>, TRenderConfig extends RenderConfig<ReactNode>,> = {
    value: ReactFormExtendedApi<T>;
    config: TObjectConfig;
    form: FormItems<T, ReactNode, TObjectConfig, TRenderConfig>;
    renderConfig: TRenderConfig
};

export const EditForm = <T, TObjectConfig extends ObjectConfig<T>, TRenderConfig extends RenderConfig<ReactNode>,>({
    config,
    value,
    form,
    renderConfig,
}: Props<T, TObjectConfig, TRenderConfig>) => {


    return renderForm<T, ReactNode, TObjectConfig, TRenderConfig >(
        form,
        value,
        renderConfig,
        config,
        // Function to render the entire form
        (label, content) => (
            <Paper elevation={3}>
                <Box p={2} width='80vw' height='100vh' overflow='auto'>
                    <Stack height='100%' justifyContent='space-between'>

                        {content}
                        <Box mt={3} mb={1} textAlign="right">
                            <Button
                                variant="contained"
                                color="primary"
                            // onClick={() => onSubmit && onSubmit(value)}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Paper>
        ),

        (key, validators, render) => <value.Field name={key} validators={validators}>
            {(field) => render(field)}
        </value.Field>,
    );
};
