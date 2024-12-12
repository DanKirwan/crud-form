import { Int32Field } from '@src/react/components/IntegerField';
import type { Meta } from '@storybook/react';
import { baseArgs, buildStory } from './StoryUtils';

const meta: Meta = {
    title: 'Fields/IntegerField',
    argTypes: { ...baseArgs, value: { control: 'number' } },
};

export default meta;

const stories = buildStory(Int32Field, 10);

export const Display = stories.display;
export const Edit = stories.edit;