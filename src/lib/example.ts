import { ReactNode } from 'react';
import { ReactRenderConfig } from '../react/config';
import { FormItems, ObjectTypeConfig } from './form';



// Define the UserProfile type
export type UserProfile = {
    firstName: string;  
    lastName: string;
    age: number;
    email: string;
    bio: string;
    birthDate: Date;
    isActive: boolean;
    rating: number;
    registeredAt: Date;
    lastLogin: Date;
    newsletter: boolean;
    notifications: boolean;
    location: {
        lat: number;
        long: number;
    };
    acceptedTOS: boolean;
};



export const userProfileExample: UserProfile = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 28,
    email: 'jane.doe@example.com',
    bio: 'Passionate traveler and food lover.',
    birthDate: new Date('1993-05-15'),
    isActive: true,
    rating: 0,
    registeredAt: new Date('2020-01-10'),
    lastLogin: new Date(),
    newsletter: true,
    notifications: false,
    location: {
        lat: 40.7128,
        long: -74.0060,
    },
    acceptedTOS: true,
};


export const emptyUserProfileExample: UserProfile = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    bio: '',
    birthDate: new Date('0000-00-00'),
    isActive: false,
    rating: 0,
    registeredAt: new Date('0000-00-00'),
    lastLogin: new Date(),
    newsletter: true,
    notifications: false,
    location: {
        lat: 0,
        long: 0,
    },
    acceptedTOS: false,
};



export const userProfileTypeConfig = {
    firstName: 'Edm.String',
    lastName: 'Edm.String',
    age: 'Edm.Int32',
    email: 'Edm.String',
    bio: 'Edm.String',
    birthDate: 'Edm.DateTimeOffset',
    isActive: 'Edm.Boolean',
    rating: 'Edm.Decimal',
    registeredAt: 'Edm.DateTimeOffset',
    lastLogin: 'Edm.DateTimeOffset',
    newsletter: 'Edm.Boolean',
    notifications: 'Edm.Boolean',
    location: {
        lat: 'Edm.Double',
        long: 'Edm.Double',
    },
    acceptedTOS: 'Edm.Boolean',
} as const satisfies ObjectTypeConfig<UserProfile>;


export type UserProfileConfig = typeof userProfileTypeConfig;

// Define the form items for the UserProfile
export const userProfileForm: FormItems<
    UserProfile,
    ReactNode,
    UserProfileConfig,
    ReactRenderConfig
> = {
    layout: 'col',
    label: 'User Profile',
    showStatus: true,
    items: [
        {
            layout: 'col',
            container: 'accordion',
            showStatus: true,
            label: 'Personal Info',
            items: [

                {
                    layout: 'row',
                    container: 'identity',
                    items: ['firstName', 'lastName'],
                },
                'email',
                {
                    layout: 'row',
                    container: 'identity',
                    label: '',
                    items: [
                        {
                            key: 'age',
                            component: 'int-text-box',
                            label: 'Age',
                       
                        },
                        'birthDate',
                    ],
                },
                {
                    key: 'bio',
                    component: 'multi-line-text-field',
                    label: 'Biography',
                },
            ],
        },
        {
            layout: 'row',
            label: 'Account Status',
            items: [
                {
                    key: 'isActive',
                    component: 'switch',
                    label: 'Active',
                },
                {
                    key: 'rating',
                    component: 'decimal-text-box',
                    label: 'User Rating',
                },
            ],
        },
        {
            layout: 'row',
            container: 'modal',
            label: 'Preferences',
            items: [
                {
                    key: 'newsletter',
                    component: 'checkbox',
                    label: 'Subscribe to Newsletter',
                },
                {
                    key: 'notifications',
                    component: 'checkbox',
                    label: 'Enable Notifications',
                },
            ],
        },
        {
            layout:'row',
            label: 'Registration Info',
            items: ['registeredAt', 'lastLogin'],
        },
        {
            key: 'acceptedTOS',
            component: 'checkbox',
            label: 'Accept Terms Of Service',
        },
    ],
};

