import { useForm } from '@tanstack/react-form';
import { UserProfile, userProfileConfig, userProfileExample, userProfileForm, } from '../lib/example';
import { EditForm } from '../react/EditForm';

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
        />
    );
}

export default UserProfileForm;
