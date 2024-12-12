import { ContainerWrapperMeta } from '@src/lib/containers';
import {FC} from 'react';

import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Props = {
    meta: Omit<ContainerWrapperMeta, 'label'>
}

export const ContainerStateIcon : FC<Props> = ({meta: {hasErrors, isCompleted}}) => {
    return (
        isCompleted ? 
            <CheckCircleIcon color='success'/> : 
            hasErrors ? <ErrorIcon color='error'/> : ''
    );
}
