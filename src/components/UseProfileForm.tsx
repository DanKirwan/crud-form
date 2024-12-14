import { buildZodValidator, PartialZodFormValidator, ZodFormValidator } from '@src/lib/zodAdapter/zodAdapter';
import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { z } from 'zod';
import { emptyUserProfileExample, UserProfile, userProfileForm, userProfileTypeConfig } from '../lib/example';
import { EditForm } from '../react/EditForm';
import { REACT_RENDER_CONFIG } from '../react/config';

function UserProfileForm() {


    // you can define things as optional for it to not be needed
    const schema: PartialZodFormValidator<UserProfile> = z.strictObject({
        age: z.number({ invalid_type_error: 'age is required' }).min(1, 'Age should be greater than 0'),
        lastName: z.string({invalid_type_error: 'last name required'}).nonempty({message: 'Name Required'}),
        firstName: z.string({invalid_type_error: 'last name required'}).nonempty({message: 'Name Required'}),//.optional(),//.nonempty({message: 'First Name Required'}),
        acceptedTOS: z.boolean().refine(v => v === true, {message: 'Please accept Terms of Service'}),
    });

    const zodSchema = buildZodValidator<UserProfile>(schema);

    const form = useForm({
        defaultValues: emptyUserProfileExample,
        defaultState: {
            canSubmit: false,
        },
        validatorAdapter: zodValidator(),
        validators: {
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
