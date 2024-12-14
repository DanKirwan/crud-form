import type { Meta } from '@storybook/react';
import { baseArgs, buildStory } from './storyUtils';
import { MultilineStringField, StringField } from '@src/react/components/StringField';

const meta: Meta = {
    title: 'Fields/TextField',
    argTypes: { ...baseArgs, value: { control: 'text' } },
};

export default meta;

const stories = buildStory(StringField, '');

export const DisplaySingleLine = stories.display;
export const EditSingleLine = stories.edit;



const multiLineStories = buildStory(MultilineStringField, '');

export const DisplayMultiLine = multiLineStories.display;
export const EditMultiLine = multiLineStories.edit;

