import { useForm } from '@tanstack/react-form';
import { userProfileConfig, userProfileExample, userProfileForm } from '../lib/example';
import { EditForm } from '../react/EditForm';
import { REACT_RENDER_CONFIG } from '../react/config';

function UserProfileForm() {

    const form = useForm({
        defaultValues: userProfileExample,
    });

    // const handleFormSubmit = (value: UserProfile) => {
    //     // Handle form submission logic (e.g., send data to an API)
    //     console.log('Form submitted:', value);
    // };

    return (
        <EditForm
            value={form}
            renderConfig={REACT_RENDER_CONFIG}
            config={userProfileConfig}
            form={userProfileForm}
        />
    );
}

export default UserProfileForm;
