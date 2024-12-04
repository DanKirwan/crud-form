import { ReactNode } from 'react';

import { ComponentMap } from '../lib/domain';
import { DateTimeOffsetField } from './components/DateTimeOffsetField';
import { DecimalField, DoubleField, FloatField } from './components/FloatField';
import { GeographyPointField } from './components/GeographyPointField';
import { GuidField } from './components/GuidField';
import { ByteField, Int32Field } from './components/IntegerField';
import { StringField } from './components/StringField';
import { SwitchField } from './components/SwitchField';


// TODO - add checkboxes to booleans, sliders to float and other number types and multiline text boxes

export const REACT_COMPONENT_MAP = {
    'Edm.Boolean': [SwitchField],
    'Edm.String': [StringField],
    'Edm.Int32': [Int32Field],
    'Edm.Double': [DoubleField],
    'Edm.Decimal': [DecimalField],
    'Edm.Guid': [GuidField],
    'Edm.DateTimeOffset': [DateTimeOffsetField],
    'Edm.GeographyPoint': [GeographyPointField],
    // Reusing components for similar types
    'Edm.Single': [FloatField],
    'Edm.Byte': [ByteField],

} as const satisfies ComponentMap<ReactNode>;

// TODO call this render component map

export type ReactComponentMap = typeof REACT_COMPONENT_MAP;
