import { ContainerWrapperMeta } from '@lib/containers';
import {  Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { FC, ReactNode, useState } from 'react';

type Props = {
    contents: ReactNode;
    meta: ContainerWrapperMeta;
}

export const ModalWrapper : FC<Props> = ({contents, meta }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Typography
                variant="h6"
                onClick={() => setOpen(true)}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
                {meta.label}
            </Typography>
            <Typography variant="body2" color={meta.hasErrors ? 'error' : 'textSecondary'}>
                {meta.hasErrors ? 'Error' : meta.isCompleted ? 'Completed' : 'In Progress'}
            </Typography>
            <Dialog open={open} onClose={() => setOpen(false)}>
                 
                <DialogTitle>{meta.label}</DialogTitle>
                <DialogContent>
                    {contents}
                </DialogContent>
            </Dialog>
        </>
    );
}
