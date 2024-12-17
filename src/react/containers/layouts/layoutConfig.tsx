import { Stack } from '@mui/material';
import { Fragment, ReactNode } from 'react';
import { PagesLayout } from './PageLayout';
import { ContainerLayoutConfig } from '@src/lib/containers';

export const REACT_LAYOUT_CONFIG = {
    'row': (items) => <Stack direction='row' alignItems='center' spacing={1.5} width='100%' height='100%'>
        {items.map((item, i) => (<Fragment key={i}>
            {item}
        </Fragment>))}
    </Stack>,
    'col': (items) => <Stack direction='column' spacing={1.5}>
        {items.map((item, i) => (<Fragment key={i}>
            {item}
        </Fragment>))}
    </Stack>,
    'pages': (items) => <PagesLayout pages={items}/>,

} satisfies ContainerLayoutConfig<ReactNode>;

export type ReactLayoutConfig = typeof REACT_LAYOUT_CONFIG;