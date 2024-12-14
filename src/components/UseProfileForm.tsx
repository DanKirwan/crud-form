import { useForm } from '@tanstack/react-form';
import { userProfileTypeConfig, userProfileExample, userProfileForm, UserProfile, emptyUserProfileExample } from '../lib/example';
import { EditForm } from '../react/EditForm';
import { REACT_RENDER_CONFIG } from '../react/config';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { buildZodValidator, ZodFormValidator } from '@src/lib/zodAdapter/zodAdapter';
import { z } from 'zod';

function UserProfileForm() {


    // TODO add ability to make fields optional but start with all required
    // TODO fix all field components to use the extractError method
    // TODO better type safety on ZodFormValidator
    const schema: ZodFormValidator<UserProfile> = z.object({
        age: z.number({ invalid_type_error: 'age is required' }).min(1, 'Age should be greater than 0'),
        lastName: z.string({invalid_type_error: 'last name required'}).nonempty({message: 'Name Required'}),
        acceptedTOS: z.boolean().refine(v => v === true, {message: 'Please accept Terms of Service'}),
    })

    const zodSchema = buildZodValidator<UserProfile>(schema);

    const form = useForm({
        defaultValues: emptyUserProfileExample,
        defaultState: {
            canSubmit: false,
        },
        validatorAdapter: zodValidator(),
        validators: {
            // onBlur: zodSchema.formValidator,
            onSubmit: zodSchema.formValidator,
    
        },
    });


    return (
        <EditForm
            value={form}
            renderConfig={REACT_RENDER_CONFIG}
            config={userProfileTypeConfig}
            form={userProfileForm}
            validator={zodSchema}
            
        />
    );
}

export default UserProfileForm;
