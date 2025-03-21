import { ReactRenderConfig } from '@src/react/config';
import { ReactNode } from 'react';
import { z } from 'zod';
import { FormItems, ObjectTypeConfig } from './form';
import { UndefinedDeepPrimitives } from './typeUtils';
import { PartialZodFormValidator } from './zodAdapter/zodAdapter';

// ---------------------------------------
// EXTENDED USER PROFILE INTERFACE
// ---------------------------------------
// Extend the UserProfile interface with more fields and complexity.
// This is an example interface that you would have defined somewhere in your codebase.
// The following is purely demonstrative:
export type BigUserProfile = {
    // Basic Information
    firstName: string | null;
    lastName: string;
    age: number | null;
    email: string;
    bio: string | null;
    birthDate: Date;
    maritalStatus: string, // // TODO can't do union types atm 'single' | 'married' | 'divorced' | 'widowed';
    
    // Account Status & Rating
    isActive?: boolean;
    rating: number;
    registeredAt: Date;
    lastLogin: Date;

    // Preferences
    newsletter: boolean;
    notifications: boolean;
    // preferredContactMethods: string[]; // e.g. ["email", "phone", "sms"]

    // Location
    location: {
        lat: number;
        long: number;
    };

    // // Work History
    // previousEmployers: Array<{
    //     companyName: string;
    //     startDate: Date;
    //     endDate?: Date;
    //     reasonForLeaving?: string;
    // }>;

    // // Addresses
    addresses: {
        line1: string;
        line2: string | null;
        city: string;
        state: string;
        zip: string;
    }[];

    // // Skills
    // skills: string[];

    // Terms & Conditions
    acceptedTOS: boolean;
    jobStatus: JobStatus | null;
}


enum JobStatus {
    Employed = 0,
    Unemployed = 1,
    SelfEmployed = 4
};

// Create a refined date schema for certain validations
const dateInPast = z.date().refine(d =>  d.getTime() < Date.now(), 'Date must be in the past.' );
// const nonEmptyString = (message: string) => z.string({invalid_type_error: message, message}).min(1, message);

const bigUserProfileSchema = z.object({
    // Basic Information
    // firstName: nonEmptyString('First name is required'),
    // lastName: nonEmptyString('Last name is required'),
    age: z.number({ message: 'Age is required' }).min(1, 'Age should be greater than 0'),
    email: z.string({ invalid_type_error: 'Email is required' })
        .email('Must be a valid email'),
    // bio: z.string(), // bio can be empty
    birthDate: dateInPast,
    maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed']),

    // Account Status & Rating
    isActive: z.boolean(),
    rating: z.number().min(2).max(10),
    registeredAt: z.date().refine(d => d <= new Date(), { message: 'Registered date cannot be in the future.' }),
    lastLogin: z.date().refine(d => d <= new Date(), { message: 'Last login cannot be in the future.' }),

    // Preferences
    newsletter: z.boolean(),
    notifications: z.boolean(),
    // preferredContactMethods: z.array(z.enum(['email', 'phone', 'sms'])).min(1, 'At least one contact method is required'),

    // Location
    location: z.strictObject({
        lat: z.number().min(-90).max(90),
        long: z.number().min(-180).max(180),
    }),

    // // Work History
    // previousEmployers: z.array(z.strictObject({
    //     companyName: nonEmptyString('Company name is required'),
    //     startDate: dateInPast,
    //     endDate: z.date().optional(),
    //     reasonForLeaving: z.string().optional(),
    // })).max(5, 'You can list at most 5 previous employers'),

    // Addresses
    addresses: z.array(z.strictObject({
        line1: z.string(),//nonEmptyString('Address line 1 is required'),
        line2: z.string().nullable(),
        city: z.string(), //nonEmptyString('City is required'),
        state: z.string().length(2, 'State must be 2 letters'),
        zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format'),
    }))
        .min(1, 'At least one address is required')
        .max(3, 'No more than 3 addresses allowed'),

    // Skills
    // skills: z.array(z.string().nonempty()).min(1, 'Please list at least one skill'),

    // Terms & Conditions
    acceptedTOS: z.boolean().refine(v => v === true, { message: 'Please accept the Terms of Service' }),
}) satisfies  PartialZodFormValidator<BigUserProfile>;

// ---------------------------------------
// TYPE CONFIG (MAPPING TO EDM TYPES)
// ---------------------------------------
export const bigUserProfileTypeConfig = {
    firstName: {type: 'String', isNullable: true, isOptional: false},
    lastName: {type: 'String', isNullable: false, isOptional: false},
    age: {type: 'Int32', isNullable: true, isOptional: false},
    email: {type: 'String', isNullable: false, isOptional: false},
    bio: {type: 'String', isNullable: true, isOptional: false},
    birthDate: {type: 'DateTimeOffset', isNullable: false, isOptional: false},
    maritalStatus: {type: 'String', isNullable: false, isOptional: false},
    isActive: {type: 'Boolean', isNullable: false, isOptional: true},
    rating: {type: 'Int32', isNullable: false, isOptional: false},
    registeredAt: {type: 'DateTimeOffset', isNullable: false, isOptional: false},
    lastLogin: {type: 'DateTimeOffset', isNullable: false, isOptional: false},
    newsletter: {type: 'Boolean', isNullable: false, isOptional: false},
    notifications: {type: 'Boolean', isNullable: false, isOptional: false},
    acceptedTOS: {type: 'Boolean', isNullable: false, isOptional: false},
    jobStatus: {options: {'Employed': JobStatus.Employed, 'Test': JobStatus.SelfEmployed}, isNullable: true, isOptional: false},
} as const satisfies ObjectTypeConfig<BigUserProfile>;




export type BigUserProfileTypeConfig = typeof bigUserProfileTypeConfig
// TODO skills needs to handle lists better


// ---------------------------------------
// FORM CONFIGURATION (4 PAGES)
// ---------------------------------------
// This configuration shows a multi-page (wizard-like) form. Each top-level object in `items` can be considered a page.
// TODO - can't see 
export const bigUserProfileForm: FormItems<
    BigUserProfile,
    ReactNode,
    BigUserProfileTypeConfig,
    ReactRenderConfig
> = {
    layout: 'col',
    container: 'paper',
    label: 'User Profile Wizard',
    // We define 4 main pages (accordions, tabs, or steps), each can be navigated sequentially.
    items: [
        // Page 1: Personal Info & Basic Details
        {
            layout: 'col',
            showStatus: true,
            container: 'accordion',
            label: 'Personal Information',
            items: [
                {
                    layout: 'row',
                    container: 'identity',
                    label: 'Name',
                    items: ['acceptedTOS', 'lastName'],
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
                {
                    key: 'jobStatus',
                    selectComponent: 'basic-select',
                },
                'email',
                {
                    key: 'bio',
                    component: 'multi-line-text-field',
                    label: 'Biography',
                },
                {
                    //TODO consider making these keys part of the type config in future?
                    key: 'maritalStatus',
                    component: 'select',
                    label: 'Marital Status',
                    options: { 
                        placeholder: 'Status', 
                        options: 
                        [
                            {key: 'single', label: 'Single'},
                            {key: 'married', label: 'Married'},
                            {key: 'divorced', label: 'Divorced'},
                            {key: 'widowed', label: 'Widowed'},                            
                        ],
                    },
                },
            ],
        },
        // Page 3: Preferences & Status
        {
            showStatus: true,
            layout: 'col',
            container: 'accordion',
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
                            component: 'int-select',
                            options: {
                                options: [
                                    {key: 1, label: 'One'},
                                    {key: 2, label: 'Two'},
                                    {key: 3, label: 'Three'},
                                    {key: 4, label: 'Four'},
                                    {key: 5, label: 'Five'},
                                ],
                                placeholder: 'Rating',
                            },
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
// If you want a value to be optional - you need to set it as null not undefined
export const emptyBigUserProfileExample: UndefinedDeepPrimitives<BigUserProfile> = {
    firstName: null,
    lastName: undefined,
    age: undefined,
    email: undefined,
    bio: null,
    birthDate: undefined, 
    maritalStatus: undefined,

    isActive: false,
    rating: 0,
    registeredAt: undefined,
    lastLogin: new Date('2020-01-02'),

    jobStatus: undefined,
    // undefined doesn't make much sense in the case of booleans - needs to be true if required
    newsletter: undefined,
    notifications: false,
    // preferredContactMethods: ['email'],

    location: {
        lat: 0,
        long: 0,
    },

    // // previousEmployers: [],
    addresses: [
        {
            line1: undefined,
            line2: null,
            city: '',
            state: '',
            zip: '',
        },
        {
            line1: '',
            line2: null,
            city: '',
            state: '',
            zip: '',
        },
    ],

    // skills: [],

    acceptedTOS: false,
};

// Example usage (uncomment if needed):
// try {
//     const validated = userProfileSchema.parse(emptyUserProfileExample);
//     console.log('Validated user profile:', validated);
// } catch (err) {
//     console.error('Validation errors:', err);
// }



// ---------------------------------------
// DEFAULT VALUES
// ---------------------------------------
// If you want a value to be optional - you need to set it as null not undefined
export const bigUserProfileExample: BigUserProfile = {
    firstName: null,
    lastName: '',
    age: 25,
    email: '',
    bio: null,
    birthDate: new Date('2000-01-01'), 
    maritalStatus: '',
    jobStatus: null,

    isActive: false,
    rating: 0,
    registeredAt: new Date('2020-01-02'),
    lastLogin: new Date('2020-01-02'),

    // undefined doesn't make much sense in the case of booleans - needs to be true if required
    newsletter: false,
    notifications: false,
    // preferredContactMethods: ['email'],

    location: {
        lat: 0,
        long: 0,
    },

    // // previousEmployers: [],
    addresses: [
        {
            line1: '',
            line2: null,
            city: '',
            state: '',
            zip: '',
        },
        {
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip: '',
        },
    ],

    // skills: [],

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
