/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";
import { FormItems, FormPrimitive, ObjectConfig } from "./form";
import { ReactComponentMap } from "../react/config";
import { ComponentMap } from "./domain";

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
    location: 'Edm.GeographyPoint',
} as const satisfies ObjectConfig<UserProfile>;

export type UserProfileConfig = typeof userProfileConfig;


// Define the form items for the UserProfile
export const userProfileForm: FormItems<
    UserProfile,
    ReactNode,
    UserProfileConfig,
    ReactComponentMap
> = {
    direction: 'column',
    label: 'User Profile',
    items: [
        {

            direction: 'column',
            label: 'Personal Info',
            items: [

                {
                    direction: 'row',
                    label: '',
                    items: [
                        {
                            key: 'firstName',
                            component: 'single-line-text-field',
                            label: 'First Name',
                        },
                        {
                            key: 'lastName',
                            component: 'single-line-text-field',
                            label: 'Last Name',
                        },
                    ],
                },
                {
                    key: 'email',
                    component: 'single-line-text-field',
                    label: 'Email Address',
                },
                {
                    direction: 'row',
                    label: '',
                    items: [
                        {
                            key: 'age',
                            component: 'int-number-field',
                            label: 'Age',
                        },
                        {
                            key: 'birthDate',
                            component: 'date-picker',
                            label: 'Birth Date',
                        },
                    ],
                },
                {
                    key: 'bio',
                    component: 'multi-line-text-field',
                    label: 'Biography',
                },
            ]
        },

        {
            direction: 'row',
            label: 'Account Status',
            items: [
                {
                    key: 'isActive',
                    component: 'switch',
                    label: 'Active',
                },
                {
                    key: 'rating',
                    component: 'decimal-slider',
                    label: 'User Rating',
                },
            ],
        },
        {
            direction: 'row',
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
            key: 'location',
            component: 'geography-point-input',
            label: 'Location',
        },
        {
            direction: 'row',
            label: 'Registration Info',
            items: [
                {
                    key: 'registeredAt',
                    component: 'date-time-picker',
                    label: 'Registered At',
                },
                {
                    key: 'lastLogin',
                    component: 'date-time-picker',
                    label: 'Last Login',
                },
            ],
        },
    ],
};

