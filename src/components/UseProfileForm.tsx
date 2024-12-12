import { useForm } from '@tanstack/react-form';
import { userProfileConfig, userProfileExample, userProfileForm } from '../lib/example';
import { EditForm } from '../react/EditForm';
import { REACT_COMPONENT_MAP } from '../react/config';

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
            // onSubmit={handleFormSubmit}
            config={userProfileConfig}
            form={userProfileForm}
            componentMap={REACT_COMPONENT_MAP}
        />
    );
}

export default UserProfileForm;
