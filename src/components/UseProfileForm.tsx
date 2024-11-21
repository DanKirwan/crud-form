import React, { useState } from 'react';
import { UserProfile, userProfileExample, userProfileConfig, userProfileForm } from '../lib/example';
import { EditForm } from '../react/EditForm';

function UserProfileForm() {
    const [formData, setFormData] = useState<UserProfile>(userProfileExample);

    const handleFormChange = (newValue: UserProfile) => {
        setFormData(newValue);
    };

    const handleFormSubmit = (value: UserProfile) => {
        // Handle form submission logic (e.g., send data to an API)
        console.log('Form submitted:', value);
    };

    return (
        <EditForm
            value={formData}
            onChange={handleFormChange}
            onSubmit={handleFormSubmit}
            config={userProfileConfig}
            form={userProfileForm}
        />
    );
}

export default UserProfileForm;
