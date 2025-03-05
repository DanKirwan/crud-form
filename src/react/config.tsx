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
    'Boolean': {'switch' : SwitchField, 'checkbox': CheckboxField},
    'String': {'single-line-text-field': StringField, 'multi-line-text-field': MultilineStringField, 'select': StringSelectField},
    'Int32': {'int-text-box': Int32Field, 'int-select': IntSelectField},
    'Double': { 'double-text-box': DoubleField},
    'Decimal': {'decimal-text-box': DecimalField},
    'Guid': {'guid': GuidField},
    'DateTimeOffset': {'datetime': DateTimeOffsetField},
    // Reusing components for similar types
    'Single': {'float-text-box': FloatField},
    'Byte': {'byte-text-box': ByteField},

} as const satisfies RenderComponentMap<ReactNode>;


export const REACT_RENDER_CONFIG = {
    containers: REACT_CONTAINER_WRAPPER_CONFIG,
    layouts: REACT_LAYOUT_CONFIG,
    fieldComponents: REACT_COMPONENT_MAP,
} satisfies RenderConfig<ReactNode>;

export type ReactRenderComponentMap = typeof REACT_COMPONENT_MAP;

export type ReactRenderConfig = typeof REACT_RENDER_CONFIG;