import { useForm } from '@tanstack/react-form';
import { userProfileTypeConfig, userProfileExample, userProfileForm } from '../lib/example';
import { EditForm } from '../react/EditForm';
import { REACT_RENDER_CONFIG } from '../react/config';

function UserProfileForm() {

    const form = useForm({
        defaultValues: userProfileExample,
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
