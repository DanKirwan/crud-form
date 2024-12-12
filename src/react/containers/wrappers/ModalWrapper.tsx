import { ContainerWrapperMeta } from '@lib/containers';
import {  Dialog, DialogContent, DialogTitle, Paper, Stack, Typography } from '@mui/material';
import { FC, ReactNode, useState } from 'react';
import { ContainerStateIcon } from './ContainerStateIcon';

type Props = {
    contents: ReactNode;
    meta: ContainerWrapperMeta;
}

export const ModalWrapper : FC<Props> = ({contents, meta }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Paper elevation={2} sx={{p: 2}}>
                <Stack direction='row' alignItems='center' spacing={1}>
            
                    <Typography
                        variant="h6"
                        onClick={() => setOpen(true)}
                        style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        {meta.label}
                    </Typography>
                    <ContainerStateIcon meta={meta}/>

                </Stack>
            </Paper>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>
                    <Stack direction='row' justifyContent='space-between'>
                        {meta.label}
                        <ContainerStateIcon meta={meta}/>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    {contents}
                </DialogContent>
            </Dialog>
        </>
    );
}
