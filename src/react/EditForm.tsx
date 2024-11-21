import { Box, Paper, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { renderForm } from '../lib/display';
import { ComponentMap } from '../lib/domain';
import { FormItems, ObjectConfig } from '../lib/form';
import { REACT_COMPONENT_MAP } from './config';

type Props<T> = {
    value: T,
    onChange: (value: T) => void;
    config: ObjectConfig<T>,
    form: FormItems<T, ReactNode, ObjectConfig<T>, ComponentMap<ReactNode>>,
}

export const EditForm = <T,>({ config, onChange, value, form }: Props<T>) => {


    return renderForm(
        form, value, REACT_COMPONENT_MAP, config,
        (label, contents, direction) => (
            <Box p={2}>
                <Paper>

                    Container: {label}
                    <Stack direction={direction}>
                        {contents.map((c, i) => <div key={i}>{c}</div>)}
                    </Stack>
                </Paper>
            </Box>),
        (label, contents) => (
            <Box p={2}>
                <Paper>

                    FORM: {label}
                    {contents.map((c, i) => <div key={i}>{c}</div>)}
                </Paper>
            </Box>
        ), onChange)
}
