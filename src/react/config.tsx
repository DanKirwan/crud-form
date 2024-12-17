import { ReactNode } from 'react';

import { ComponentMap as RenderComponentMap, RenderConfig } from '../lib/domain';
import { CheckboxField } from './components/CheckboxField';
import { DateTimeOffsetField } from './components/DateTimeOffsetField';
import { DecimalField, DoubleField, FloatField } from './components/FloatField';
import { GuidField } from './components/GuidField';
import { ByteField, Int32Field } from './components/IntegerField';
import { MultilineStringField, StringField } from './components/StringField';
import { SwitchField } from './components/SwitchField';
import { REACT_CONTAINER_WRAPPER_CONFIG } from './containers/wrappers/wrapperConfig';
import { REACT_LAYOUT_CONFIG } from './containers/layouts/layoutConfig';
import { IntSelectField, StringSelectField } from './components/SelectField';



export const REACT_COMPONENT_MAP = {
    'Edm.Boolean': {'switch' : SwitchField, 'checkbox': CheckboxField},
    'Edm.String': {'single-line-text-field': StringField, 'multi-line-text-field': MultilineStringField, 'select': StringSelectField},
    'Edm.Int32': {'int-text-box': Int32Field, 'int-select': IntSelectField},
    'Edm.Double': { 'double-text-box': DoubleField},
    'Edm.Decimal': {'decimal-text-box': DecimalField},
    'Edm.Guid': {'guid': GuidField},
    'Edm.DateTimeOffset': {'datetime': DateTimeOffsetField},
    // Reusing components for similar types
    'Edm.Single': {'float-text-box': FloatField},
    'Edm.Byte': {'byte-text-box': ByteField},

} as const satisfies RenderComponentMap<ReactNode>;


export const REACT_RENDER_CONFIG = {
    containers: REACT_CONTAINER_WRAPPER_CONFIG,
    layouts: REACT_LAYOUT_CONFIG,
    fieldComponents: REACT_COMPONENT_MAP,
} satisfies RenderConfig<ReactNode>;

export type ReactRenderComponentMap = typeof REACT_COMPONENT_MAP;

export type ReactRenderConfig = typeof REACT_RENDER_CONFIG;