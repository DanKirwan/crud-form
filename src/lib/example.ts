import { ReactNode } from 'react';
import { ReactRenderComponentMap, ReactRenderConfig } from '../react/config';
import { FormItems, ObjectConfig } from './form';

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
    rating: 4.8,
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


// Define the ObjectConfig for UserProfile
export const userProfileConfig = {
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
    'location.lat': 'Edm.Double',
    'location.long': 'Edm.Double',
    acceptedTOS: 'Edm.Boolean',
} as const satisfies ObjectConfig<UserProfile>;

export const userProfileFilter = {
    rating: { readonly: true },
};

export type UserProfileConfig = typeof userProfileConfig;

// Define the form items for the UserProfile
export const userProfileForm: FormItems<
    UserProfile,
    ReactNode,
    UserProfileConfig,
    ReactRenderConfig
> = {
    layout: 'row',
    label: 'User Profile',
    items: [
        {
            layout: 'col',
            container: 'accordion',
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
                            validators: {
                                onChange: ({ value }) => value < 0 ? 'Cannot be negative age' : undefined,
                            },
                        },
                        'birthDate',
                    ],
                },
                {
                    key: 'bio',
                    component: 'single-line-text-field',
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
            validators: {
                onChange: ({value})=> !value ? 'Must Accept Terms of Service' : void 0,
            },
        },
    ],
};

