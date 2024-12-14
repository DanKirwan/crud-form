import { ObjectMappings, OdataTypeToValue, SingleComponentType } from '@src/lib/domain';
import { StoryObj } from '@storybook/react';
import { useForm } from '@tanstack/react-form';
import { ReactNode } from 'react';

export type FieldStory<T> = StoryObj<{
    value: T;
    label: string;
    error: string;
    isValidating: boolean;
    required: boolean;
}>;

export const baseArgs = {
    label: { control: 'text' },
    error: { control: 'text'},
    isValidating: { control: 'boolean' },
    required: {control: 'boolean'},
} as const;

type StoryItem<T> = {
    edit: FieldStory<T>,
    display: FieldStory<T>,
}

export const buildStory = <K extends ObjectMappings['key'], T extends OdataTypeToValue<K> = OdataTypeToValue<K>>(component: SingleComponentType<ReactNode, K>, defaultVal: T): StoryItem<T> => ({
    edit: {
        args: {
            value: defaultVal,
            label: 'Test',
            error: 'Example Error',
            isValidating: false,
            required: false,
        },
        render: (args) => {
            // Wrap your hook usage inside a component
            const Example = () => {
                const form = useForm({ defaultValues: { value: args.value } });

                return (
                    <form.Field name="value">
                        {(field) => component.edit({
                            label: args.label,
                            required: args.required,
                            state: {
                                value: field.state.value as unknown as any,
                                meta: {
                                    errors: [args.error],
                                    isValidating: args.isValidating,
                                    isTouched: false,
                                    isBlurred: false,
                                    errorMap: {onBlur: args.error, onChange: args.error},
                                    isDirty: false,
                                    isPristine: false,
                                },
                            },
                            name: 'value',
                            handleBlur: field.handleBlur,
                            handleChange: field.handleChange as unknown as any,
                        })}
                    </form.Field>
                );
            };

            return <Example />;
        },
    },


    display: {
        args: {
            value: defaultVal,
            label: 'Test',
            error: 'Example Errror',
            isValidating: false,
            required: false,
        },
        render: (args) => {
            // Wrap your hook usage inside a component
            const Example = () => {
                const form = useForm({ defaultValues: { value: args.value } });

                return (
                    <form.Field name="value">
                        {(field) => component.display({
                            label: args.label,
                            required: args.required,
                            state: {
                                value: field.state.value as unknown as any,
                                meta: {
                                    errors: [args.error],
                                    isValidating: args.isValidating,
                                    isTouched: false,
                                    isBlurred: false,
                                    errorMap: {onBlur: args.error},
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
    },
});

