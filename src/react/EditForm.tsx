import {
    Box,
    Button,
    Paper,
    Stack,
    Typography
} from '@mui/material';
import { ReactFormExtendedApi } from '@tanstack/react-form';
import { ReactNode } from 'react';
import { renderForm } from '../lib/display';
import { ComponentMap } from '../lib/domain';
import { FormItems, ObjectConfig } from '../lib/form';

type Props<T, TObjectConfig extends ObjectConfig<T>, TComponentMap extends ComponentMap<ReactNode>,> = {
    value: ReactFormExtendedApi<T>;
    config: TObjectConfig;
    form: FormItems<T, ReactNode, TObjectConfig, TComponentMap>;
    componentMap: TComponentMap
};

export const EditForm = <T, TObjectConfig extends ObjectConfig<T>, TComponentMap extends ComponentMap<ReactNode>,>({
    config,
    value,
    form,
    componentMap
}: Props<T, TObjectConfig, TComponentMap>) => {


    return renderForm<T, ReactNode, TObjectConfig, TComponentMap>(
        form,
        value,
        componentMap,
        config,
        // Function to render the entire form
        (label, contents) => (
            <Box p={2}>
                <Paper elevation={3}>
                    <Box p={3}>
                        {label && (
                            <Typography variant="h5" gutterBottom>
                                {label}
                            </Typography>
                        )}
                        <Stack spacing={3}>
                            {contents.map((content, index) => (
                                <Box key={index} width="100%">
                                    {content}
                                </Box>
                            ))}
                        </Stack>
                        <Box mt={3} textAlign="right">
                            <Button
                                variant="contained"
                                color="primary"
                            // onClick={() => onSubmit && onSubmit(value)}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        ),
        // Function to render a container or group
        (label, contents, direction) => !label ? (
            <Stack
                direction={direction}
                spacing={2}
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                {contents.map((content, index) => (
                    <Box key={index} width="100%">
                        {content}
                    </Box>
                ))}
            </Stack>
        ) : (

            <Box p={2}>
                <Paper elevation={2}>
                    <Box p={2}>
                        {label && (
                            <Typography variant="h6" gutterBottom>
                                {label}
                            </Typography>
                        )}
                        <Stack
                            direction={direction}
                            spacing={2}
                            alignItems="flex-start"
                            justifyContent="flex-start"
                        >
                            {contents.map((content, index) => (
                                <Box key={index} width="100%">
                                    {content}
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        ),

        (key, validators, render) => <value.Field name={key} validators={validators}>
            {(field) => render(field)}
        </value.Field>
    );
};
