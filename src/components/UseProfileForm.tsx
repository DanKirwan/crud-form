import { useForm } from '@tanstack/react-form';
import { userProfileTypeConfig, userProfileExample, userProfileForm, UserProfile } from '../lib/example';
import { EditForm } from '../react/EditForm';
import { REACT_RENDER_CONFIG } from '../react/config';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { ZodFormValidator } from '@src/lib/zodAdapter/zodAdapter';
import { z } from 'zod';

function UserProfileForm() {


    const schema: ZodFormValidator<UserProfile> = z.object({
        age: z.number({ invalid_type_error: 'age is required' }).min(1, 'Age should be greater than 0'),
    })

    const form = useForm({
        defaultValues: userProfileExample,
        defaultState: {
            canSubmit: false,
        },
        validatorAdapter: zodValidator(),
        validators: {
            onChange: schema,
        },
    });


    return (
        <EditForm
            value={form}
            renderConfig={REACT_RENDER_CONFIG}
            config={userProfileTypeConfig}
            form={userProfileForm}
        />
    );
}

export default UserProfileForm;
