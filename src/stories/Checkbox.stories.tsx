import { CheckboxField } from '@src/react/components/CheckboxField';
import type { Meta } from '@storybook/react';
import { baseArgs, buildStory } from './storyUtils';

const meta: Meta = {
    title: 'Fields/SwitchField',
    argTypes: { ...baseArgs, value: { control: 'boolean' } },
};

export default meta;

const stories = buildStory(CheckboxField, true);

export const Display = stories.display;
export const Edit = stories.edit;