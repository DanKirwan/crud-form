import { ContainerWrapperMeta } from '@lib/containers';
import { Paper, Typography, Box } from '@mui/material';
import {FC, ReactNode} from 'react';

type Props = {
    contents: ReactNode;
    meta: ContainerWrapperMeta;
}

export const PaperWrapper : FC<Props> = ({contents, meta }) => {
    return (
        <Paper elevation={3} style={{ padding: 16, margin: 8 }}>
            <Typography variant="h6">{meta.label}</Typography>
            <Typography variant="body2" color={meta.hasErrors ? 'error' : 'textSecondary'}>
                {meta.hasErrors ? 'Error' : meta.isCompleted ? 'Completed' : 'In Progress'}
            </Typography>
            <Box mt={2}>{contents}</Box>
        </Paper>
    )
}
