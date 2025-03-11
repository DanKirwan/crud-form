import { BigUserProfile, bigUserProfileExample, bigUserProfileForm, bigUserProfileSchema, BigUserProfileTypeConfig, bigUserProfileTypeConfig } from '@src/lib/bigExample';
import { buildZodValidator } from '@src/lib/zodAdapter/zodAdapter';
import { FormValidator, ReactFormExtendedApi, useForm, Validator } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { EditForm } from '../react/EditForm';
import { REACT_RENDER_CONFIG, ReactRenderConfig } from '../react/config';
import { RenderConfig } from '@src/lib/domain';
import { ObjectTypeConfig, FormItems } from '@src/lib/form';
import { ReactNode } from 'react';
import { T } from 'vitest/dist/chunks/environment.LoooBwUu.js';

type Extracted<TFormValidator extends Validator<T, unknown> | undefined = undefined> = Omit<ReactFormExtendedApi<T, TFormValidator>, ''>

// type CrudFormProps<T, TObjectConfig extends ObjectTypeConfig<T>, TRenderConfig extends RenderConfig<ReactNode>, TFormValidator extends Validator<T, unknown> | undefined = undefined> =   {
//     config: TObjectConfig;
//     form: FormItems<T, ReactNode, TObjectConfig, TRenderConfig>;
//     renderConfig: TRenderConfig,
//     validator?: FormValidator<T, TFormValidator> 
// }



export type ObjectTypeFromConfig<T extends ObjectTypeConfig<any>> = 
  T extends ObjectTypeConfig<infer U> ? U : never;


// type CrudFormProps<
//   TObjectConfig extends ObjectTypeConfig<unknown>,
//   TRenderConfig extends RenderConfig<ReactNode>,
//   TFormValidator extends Validator<ObjectTypeFromConfig<TObjectConfig>, unknown> | undefined = undefined
// > = {
//   config: TObjectConfig;
//   renderConfig: TRenderConfig;
//   display: FormItems<ObjectTypeFromConfig<TObjectConfig>, ReactNode, TObjectConfig, TRenderConfig>[];
//   validator?: FormValidator<ObjectTypeFromConfig<TObjectConfig>, TFormValidator>;
// };

type CrudFormProps<T, TObjectConfig extends ObjectTypeConfig<T>, TRenderConfig extends RenderConfig<ReactNode>, TFormValidator extends Validator<T, unknown> | undefined = undefined> =  {
    config: TObjectConfig;
    display: FormItems<T, ReactNode, TObjectConfig, TRenderConfig>[];
    renderConfig: TRenderConfig,
    validator?: FormValidator<T, TFormValidator> 
}

const useCrudForm = <T, TObjectConfig extends ObjectTypeConfig<T>, TRenderConfig extends RenderConfig<ReactNode>, TFormValidator extends Validator<unknown, unknown> | undefined = undefined>({}:CrudFormProps<T, TObjectConfig, TRenderConfig, TFormValidator>) => {
};





function UserProfileForm() {


    const zodSchema = buildZodValidator<BigUserProfile>(bigUserProfileTypeConfig, bigUserProfileSchema);

    const form = useForm({
        // defaultValues: bigUserProfileExample, 
        defaultState: {
            canSubmit: false,
        },
        validatorAdapter: zodValidator(),
        validators: {
            onSubmit: zodSchema.formValidator,    
        },
    });


    const x = useCrudForm<BigUserProfile, BigUserProfileTypeConfig, ReactRenderConfig>({
        config: bigUserProfileTypeConfig,
        renderConfig: REACT_RENDER_CONFIG,
        display:[{
            items: ['acceptedTOS', 'age'],
        }],
    })



    return (
        <EditForm
            value={form}
            renderConfig={REACT_RENDER_CONFIG}
            config={bigUserProfileTypeConfig}
            form={bigUserProfileForm}
            validator={zodSchema} 
        />
    );
}

export default UserProfileForm;
