import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import { PagesLayout } from './PageLayout';
import { ContainerLayoutConfig } from '@src/lib/containers';

export const REACT_LAYOUT_CONFIG = {
    'row': (items) => <Stack direction='row'>{items}</Stack>,
    'col': (items) => <Stack direction='column'>{items}</Stack>,
    'pages': (items) => <PagesLayout pages={items}/>,

} satisfies ContainerLayoutConfig<ReactNode>;

export type ReactLayoutConfig = typeof REACT_LAYOUT_CONFIG;