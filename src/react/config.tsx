import { ReactNode } from 'react';

import { ComponentMap as RenderComponentMap } from '../lib/domain';
import { CheckboxField } from './components/CheckboxField';
import { DateTimeOffsetField } from './components/DateTimeOffsetField';
import { DecimalField, DoubleField, FloatField } from './components/FloatField';
import { GuidField } from './components/GuidField';
import { ByteField, Int32Field } from './components/IntegerField';
import { StringField } from './components/StringField';
import { SwitchField } from './components/SwitchField';



export const REACT_COMPONENT_MAP = {
    'Edm.Boolean': [SwitchField, CheckboxField],
    'Edm.String': [StringField],
    'Edm.Int32': [Int32Field],
    'Edm.Double': [DoubleField],
    'Edm.Decimal': [DecimalField],
    'Edm.Guid': [GuidField],
    'Edm.DateTimeOffset': [DateTimeOffsetField],
    // Reusing components for similar types
    'Edm.Single': [FloatField],
    'Edm.Byte': [ByteField],

} as const satisfies RenderComponentMap<ReactNode>;


export type ReactRenderComponentMap = typeof REACT_COMPONENT_MAP;
