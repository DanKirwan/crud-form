import { SelectComponentMap } from '@src/lib/domain';
import { BasicSelect } from './BasicSelect';
import { ReactNode } from 'react';

export const REACT_SELECT_CONFIG = {
    'basic-select': BasicSelect,
} satisfies SelectComponentMap<ReactNode>;

