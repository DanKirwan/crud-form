import { ContainerMeta } from '@src/lib/containers';
import {FC} from 'react';

import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Props = {
    meta: Omit<ContainerMeta, 'label'>
}

export const ContainerStateIcon : FC<Props> = ({meta: {hasErrors, isCompleted, showStatus}}) => {
    if(!showStatus) return null;
    return (
        isCompleted ? 
            <CheckCircleIcon color='success'/> : 
            hasErrors ? <ErrorIcon color='error'/> : ''
    );
}
