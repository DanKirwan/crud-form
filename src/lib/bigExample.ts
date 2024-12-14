import { z } from 'zod';
import { ReactNode } from 'react';
import { PartialZodFormValidator } from './zodAdapter/zodAdapter';
import { FormItems, ObjectTypeConfig } from './form';
import { ReactRenderComponentMap, ReactRenderConfig } from '@src/react/config';

// ---------------------------------------
// EXTENDED USER PROFILE INTERFACE
// ---------------------------------------
// Extend the UserProfile interface with more fields and complexity.
// This is an example interface that you would have defined somewhere in your codebase.
// The following is purely demonstrative:
export type BigUserProfile = {
    // Basic Information
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    bio: string;
    birthDate: Date;
    maritalStatus: string, // // TODO can't do union types atm 'single' | 'married' | 'divorced' | 'widowed';
    
    // Account Status & Rating
    isActive: boolean;
    rating: number;
    registeredAt: Date;
    lastLogin: Date;

    // Preferences
    newsletter: boolean;
    notifications: boolean;
    preferredContactMethods: string[]; // e.g. ["email", "phone", "sms"]

    // Location
    location: {
        lat: number;
        long: number;
    };

    // Work History
    previousEmployers: Array<{
        companyName: string;
        startDate: Date;
        endDate?: Date;
        reasonForLeaving?: string;
    }>;

    // Addresses
    addresses: Array<{
        line1: string;
        line2?: string;
        city: string;
        state: string;
        zip: string;
    }>;

    // Skills
    skills: string[];

    // Terms & Conditions
    acceptedTOS: boolean;
}


// Create a refined date schema for certain validations
const dateInPast = z.date().refine(d => d < new Date(), { message: 'Date must be in the past.' });
const nonEmptyString = (message: string) => z.string().nonempty({ message });

const bigUserProfileSchema: PartialZodFormValidator<BigUserProfile> = z.strictObject({
    // Basic Information
    firstName: nonEmptyString('First name is required'),
    lastName: nonEmptyString('Last name is required'),
    age: z.number({ invalid_type_error: 'Age is required' }).min(1, 'Age should be greater than 0'),
    email: z.string({ invalid_type_error: 'Email is required' })
        .email('Must be a valid email'),
    bio: z.string().optional().default(''), // bio can be empty
    birthDate: dateInPast,
    maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed']).optional(),

    // Account Status & Rating
    isActive: z.boolean(),
    rating: z.number().min(0).max(10),
    registeredAt: z.date().refine(d => d <= new Date(), { message: 'Registered date cannot be in the future.' }),
    lastLogin: z.date().refine(d => d <= new Date(), { message: 'Last login cannot be in the future.' }),

    // Preferences
    newsletter: z.boolean(),
    notifications: z.boolean(),
    preferredContactMethods: z.array(z.enum(['email', 'phone', 'sms'])).min(1, 'At least one contact method is required'),

    // Location
    location: z.strictObject({
        lat: z.number().min(-90).max(90),
        long: z.number().min(-180).max(180),
    }),

    // Work History
    previousEmployers: z.array(z.strictObject({
        companyName: nonEmptyString('Company name is required'),
        startDate: dateInPast,
        endDate: z.date().optional(),
        reasonForLeaving: z.string().optional(),
    })).max(5, 'You can list at most 5 previous employers'),

    // Addresses
    addresses: z.array(z.strictObject({
        line1: nonEmptyString('Address line 1 is required'),
        line2: z.string().optional(),
        city: nonEmptyString('City is required'),
        state: z.string().length(2, 'State must be 2 letters'),
        zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format'),
    })).min(1, 'At least one address is required').max(3, 'No more than 3 addresses allowed'),

    // Skills
    skills: z.array(z.string().nonempty()).min(1, 'Please list at least one skill'),

    // Terms & Conditions
    acceptedTOS: z.boolean().refine(v => v === true, { message: 'Please accept the Terms of Service' }),
});

// ---------------------------------------
// TYPE CONFIG (MAPPING TO EDM TYPES)
// ---------------------------------------
export const bigUserProfileTypeConfig = {
    firstName: 'Edm.String',
    lastName: 'Edm.String',
    age: 'Edm.Int32',
    email: 'Edm.String',
    bio: 'Edm.String',
    birthDate: 'Edm.DateTimeOffset',
    maritalStatus: 'Edm.String',
    isActive: 'Edm.Boolean',
    rating: 'Edm.Decimal',
    registeredAt: 'Edm.DateTimeOffset',
    lastLogin: 'Edm.DateTimeOffset',
    newsletter: 'Edm.Boolean',
    notifications: 'Edm.Boolean',
    preferredContactMethods: ['Edm.String'],
    location: {
        lat: 'Edm.Double',
        long: 'Edm.Double',
    },
    previousEmployers: [{
        companyName: 'Edm.String',
        startDate: 'Edm.DateTimeOffset',
        endDate: 'Edm.DateTimeOffset',
        reasonForLeaving: 'Edm.String',
    }],
    addresses: [{
        line1: 'Edm.String',
        line2: 'Edm.String',
        city: 'Edm.String',
        state: 'Edm.String',
        zip: 'Edm.String',
    }],
    skills: ['Edm.String'],
    acceptedTOS: 'Edm.Boolean',
} as const satisfies ObjectTypeConfig<BigUserProfile>;


export type BigUserProfileTypeConfig = typeof bigUserProfileTypeConfig
// TODO skills needs to handle lists better


// ---------------------------------------
// FORM CONFIGURATION (4 PAGES)
// ---------------------------------------
// This configuration shows a multi-page (wizard-like) form. Each top-level object in `items` can be considered a page.
export const bigUserProfileForm: FormItems<
    BigUserProfile,
    ReactNode,
    BigUserProfileTypeConfig,
    ReactRenderConfig
> = {
    layout: 'pages',
    label: 'User Profile Wizard',
    showStatus: true,
    // We define 4 main pages (accordions, tabs, or steps), each can be navigated sequentially.
    items: [
        // Page 1: Personal Info & Basic Details
        {
            layout: 'col',
            showStatus: true,
            container: 'paper',
            label: 'Personal Information',
            items: [
                {
                    layout: 'row',
                    container: 'identity',
                    label: 'Name',
                    items: ['firstName', 'lastName'],
                },
                {
                    layout: 'row',
                    items: [
                        {
                            key: 'age',
                            component: 'int-text-box',
                            label: 'Age',
                        },
                        {
                            key: 'birthDate',
                            component: 'datetime',
                            label: 'Birth Date',
                        },
                    ],
                },
                'email',
                {
                    key: 'bio',
                    component: 'multi-line-text-field',
                    label: 'Biography',
                },
                {
                    // TODO make this work by allowing specific fields to be exposed to components
                    // key: 'maritalStatus',
                    // component: 'select',
                    // label: 'Marital Status',
                    // options: ['single', 'married', 'divorced', 'widowed'],
                    key: 'maritalStatus',
                    component: 'single-line-text-field',
                },
            ],
        },

        // Page 2: Employment History & Addresses
        {
            showStatus: true,
            layout: 'col',
            container: 'paper',
            label: 'Employment & Address',
            items: [
                {
                    layout: 'col',
                    label: 'Previous Employers',
                    items: [
                        // {
                        //     key: 'previousEmployers',
                        //     component: 'dynamic-array',
                        //     label: 'Previous Employers',
                        //     itemFields: [
                        //         { key: 'companyName', component: 'text-box', label: 'Company Name' },
                        //         { key: 'startDate', component: 'date-picker', label: 'Start Date' },
                        //         { key: 'endDate', component: 'date-picker', label: 'End Date' },
                        //         { key: 'reasonForLeaving', component: 'text-box', label: 'Reason for Leaving' },
                        //     ],
                        // },
                    ],
                },
                {
                    layout: 'col',
                    label: 'Addresses',
                    items: [
                        // {
                        //     key: 'addresses',
                        //     component: 'dynamic-array',
                        //     label: 'Addresses',
                        //     itemFields: [
                        //         { key: 'line1', component: 'text-box', label: 'Line 1' },
                        //         { key: 'line2', component: 'text-box', label: 'Line 2' },
                        //         { key: 'city', component: 'text-box', label: 'City' },
                        //         { key: 'state', component: 'text-box', label: 'State (2-letter)' },
                        //         { key: 'zip', component: 'text-box', label: 'ZIP Code' },
                        //     ],
                        // },
                    ],
                },
            ],
        },

        // Page 3: Preferences & Status
        {
            showStatus: true,
            layout: 'col',
            container: 'paper',
            label: 'Preferences & Status',
            items: [
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
                            label: 'User Rating (0-10)',
                        },
                    ],
                },
                {
                    layout: 'row',
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
                // {
                //     key: 'preferredContactMethods',
                //     component: 'multi-select',
                //     label: 'Preferred Contact Methods',
                //     options: ['email', 'phone', 'sms'],
                // },
                {
                    layout: 'row',
                    label: 'Location',
                    items: [
                        { key: 'location.lat', component: 'double-text-box', label: 'Latitude' },
                        { key: 'location.long', component: 'double-text-box', label: 'Longitude' },
                    ],
                },
                // {
                //     key: 'skills',
                //     component: 'dynamic-array',
                //     label: 'Skills',
                //     itemFields: [
                //         { component: 'text-box', label: 'Skill' },
                //     ],
                // },
                {
                    layout: 'row',
                    label: 'Registration & Login Dates',
                    items: [
                        {
                            key: 'registeredAt',
                            component: 'datetime',
                            label: 'Registered At',
                        },
                        {
                            key: 'lastLogin',
                            component: 'datetime',
                            label: 'Last Login',
                        },
                    ],
                },
            ],
        },

        // Page 4: Review & Terms
        {
            layout: 'col',
            container: 'paper',
            label: 'Review & Acceptance',
            items: [
                // Here you might show a summary or read-only review of all data if your system supports it.
                // For simplicity, just show the TOS acceptance:
                {
                    key: 'acceptedTOS',
                    component: 'checkbox',
                    label: 'I Accept the Terms of Service',
                },
            ],
        },
    ],
};

// ---------------------------------------
// DEFAULT VALUES
// ---------------------------------------
export const emptyBigUserProfileExample: BigUserProfile = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    bio: '',
    birthDate: new Date('1900-01-01'),
    maritalStatus: 'single',

    isActive: false,
    rating: 0,
    registeredAt: new Date('2020-01-01'),
    lastLogin: new Date('2020-01-02'),

    newsletter: false,
    notifications: false,
    preferredContactMethods: ['email'],

    location: {
        lat: 0,
        long: 0,
    },

    previousEmployers: [],
    addresses: [
        {
            line1: '',
            city: '',
            state: '',
            zip: '',
        },
    ],

    skills: [],

    acceptedTOS: false,
};

// Example usage (uncomment if needed):
// try {
//     const validated = userProfileSchema.parse(emptyUserProfileExample);
//     console.log('Validated user profile:', validated);
// } catch (err) {
//     console.error('Validation errors:', err);
// }

export { bigUserProfileSchema };
