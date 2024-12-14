import { ContainerMeta } from '@lib/containers';
import { Paper, Typography, Box, Stack } from '@mui/material';
import {FC, ReactNode} from 'react';
import { ContainerStateIcon } from './ContainerStateIcon';

type Props = {
    contents: ReactNode;
    meta: ContainerMeta;
}

export const PaperWrapper : FC<Props> = ({contents, meta }) => {
    return (
        <Paper elevation={2} sx={{p: 2}} >
            <Stack height='100%'>
                

                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                
                    <Typography variant="h6">{meta.label}</Typography>
                    <ContainerStateIcon meta={meta}/>

                </Stack>
                <Box mt={2}>{contents}</Box>
            </Stack>
        </Paper>
    )
}
