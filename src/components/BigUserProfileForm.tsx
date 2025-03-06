import { BigUserProfile, bigUserProfileExample, bigUserProfileForm, bigUserProfileSchema, bigUserProfileTypeConfig } from '@src/lib/bigExample';
import { buildZodValidator } from '@src/lib/zodAdapter/zodAdapter';
import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { EditForm } from '../react/EditForm';
import { REACT_RENDER_CONFIG } from '../react/config';

function UserProfileForm() {


    const zodSchema = buildZodValidator<BigUserProfile>(bigUserProfileTypeConfig, bigUserProfileSchema);

    const form = useForm({
        defaultValues: bigUserProfileExample, 
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
            config={bigUserProfileTypeConfig}
            form={bigUserProfileForm}
            validator={zodSchema} 
        />
    );
}

export default UserProfileForm;
