import { CheckboxField } from '@src/react/components/CheckboxField';
import type { Meta } from '@storybook/react';
import { useForm } from '@tanstack/react-form';
import { baseArgs, FieldStory } from './storyUtils';

const meta: Meta = {
    title: 'Fields/CheckboxField',
    argTypes: { ...baseArgs, value: { control: 'boolean' } },
};

export default meta;


export const Display: FieldStory<boolean> = {
    args: {
        value: true,
        label: 'Test',
        error: '',
        isValidating: false,
    },
    render: (args) => {
        // Wrap your hook usage inside a component
        const Example = () => {
            const form = useForm({ defaultValues: { value: args.value } });
            return (
                <form.Field name="value">
                    {(field) => CheckboxField.display({
                        label: args.label,
                        required: false,
                        state: {
                            value: field.state.value,
                            meta: {
                                errors: [args.error],
                                isValidating: args.isValidating,
                                isTouched: false,
                                isBlurred: false,
                                errorMap: {onChange: args.error},
                                isDirty: false,
                                isPristine: false,
                            },
                        },
                        name: 'value',
                    })}
                </form.Field>
            );
        };

        return <Example />;
    },
};

export const Edit: FieldStory<boolean> = {
    args: {
        value: true,
        label: 'Test',
        error: 'This field is required',
        isValidating: false,
    },
    render: (args) => {
        // Wrap your hook usage inside a component
        const Example = () => {
            const form = useForm({ defaultValues: { value: args.value } });

            return (
                <form.Field name="value">
                    {(field) => CheckboxField.edit({
                        label: args.label,
                        required: false,
                        state: {
                            value: field.state.value,
                            meta: {
                                errors: [args.error],
                                isValidating: args.isValidating,
                                isTouched: false,
                                isBlurred: false,
                                errorMap: {onChange: args.error},
                                isDirty: false,
                                isPristine: false,
                            },
                        },
                        name: 'value',
                        handleBlur: field.handleBlur,
                        handleChange: field.handleChange,
                    })}
                </form.Field>
            );
        };

        return <Example />;
    },
};
