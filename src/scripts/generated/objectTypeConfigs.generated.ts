// AUTO-GENERATED FILE - DO NOT EDIT
// Generated from smallerTest.json

import * as typeAlias from '../../data/exampleTypes.ts';
import { EnumTypeConfig, ShallowObjectTypeConfig } from '@src/lib/form';

export const appClaimsEnumTypeConfig = {
    'ApplicationUser_Select': 0,
    'ApplicationUser_SelectList': 1,
    'ApplicationUser_Add': 2,
    'ApplicationUser_Update': 3,
    'ApplicationUser_Delete': 4,
    'ApplicationUser_AddUpdate': 5,
    'ApplicationUser_MarkDeleted': 6,
    'ApplicationUserApplicationUserGroup_Select': 7,
    'ApplicationUserApplicationUserGroup_SelectList': 8,
    'ApplicationUserApplicationUserGroup_Add': 9,
    'ApplicationUserApplicationUserGroup_Update': 10,
    'ApplicationUserApplicationUserGroup_Delete': 11,
    'ApplicationUserApplicationUserGroup_AddUpdate': 12,
    'ApplicationUserApplicationUserGroup_MarkDeleted': 13,
    'ApplicationUserGroup_Select': 14,
    'ApplicationUserGroup_SelectList': 15,
    'ApplicationUserGroup_Add': 16,
    'ApplicationUserGroup_Update': 17,
    'ApplicationUserGroup_Delete': 18,
    'ApplicationUserGroup_AddUpdate': 19,
    'ApplicationUserGroup_MarkDeleted': 20,
    'ClaimEnumsInApplicationUser_Select': 21,
    'ClaimEnumsInApplicationUser_SelectList': 22,
    'ClaimEnumsInApplicationUser_Add': 23,
    'ClaimEnumsInApplicationUser_Update': 24,
    'ClaimEnumsInApplicationUser_Delete': 25,
    'ClaimEnumsInApplicationUser_AddUpdate': 26,
    'ClaimEnumsInApplicationUser_MarkDeleted': 27,
    'ClaimEnumsInApplicationUserGroup_Select': 28,
    'ClaimEnumsInApplicationUserGroup_SelectList': 29,
    'ClaimEnumsInApplicationUserGroup_Add': 30,
    'ClaimEnumsInApplicationUserGroup_Update': 31,
    'ClaimEnumsInApplicationUserGroup_Delete': 32,
    'ClaimEnumsInApplicationUserGroup_AddUpdate': 33,
    'ClaimEnumsInApplicationUserGroup_MarkDeleted': 34,
    'ClaimEnumsInClaimGroup_Select': 35,
    'ClaimEnumsInClaimGroup_SelectList': 36,
    'ClaimEnumsInClaimGroup_Add': 37,
    'ClaimEnumsInClaimGroup_Update': 38,
    'ClaimEnumsInClaimGroup_Delete': 39,
    'ClaimEnumsInClaimGroup_AddUpdate': 40,
    'ClaimEnumsInClaimGroup_MarkDeleted': 41,
    'ClaimGroup_Select': 42,
    'ClaimGroup_SelectList': 43,
    'ClaimGroup_Add': 44,
    'ClaimGroup_Update': 45,
    'ClaimGroup_Delete': 46,
    'ClaimGroup_AddUpdate': 47,
    'ClaimGroup_MarkDeleted': 48,
    'ClaimGroupsInApplicationUser_Select': 49,
    'ClaimGroupsInApplicationUser_SelectList': 50,
    'ClaimGroupsInApplicationUser_Add': 51,
    'ClaimGroupsInApplicationUser_Update': 52,
    'ClaimGroupsInApplicationUser_Delete': 53,
    'ClaimGroupsInApplicationUser_AddUpdate': 54,
    'ClaimGroupsInApplicationUser_MarkDeleted': 55,
    'ClaimGroupsInApplicationUserGroup_Select': 56,
    'ClaimGroupsInApplicationUserGroup_SelectList': 57,
    'ClaimGroupsInApplicationUserGroup_Add': 58,
    'ClaimGroupsInApplicationUserGroup_Update': 59,
    'ClaimGroupsInApplicationUserGroup_Delete': 60,
    'ClaimGroupsInApplicationUserGroup_AddUpdate': 61,
    'ClaimGroupsInApplicationUserGroup_MarkDeleted': 62,
    'ClaimGroupsInClaimGroup_Select': 63,
    'ClaimGroupsInClaimGroup_SelectList': 64,
    'ClaimGroupsInClaimGroup_Add': 65,
    'ClaimGroupsInClaimGroup_Update': 66,
    'ClaimGroupsInClaimGroup_Delete': 67,
    'ClaimGroupsInClaimGroup_AddUpdate': 68,
    'ClaimGroupsInClaimGroup_MarkDeleted': 69,
    'LoginRequest_Select': 77,
    'LoginRequest_SelectList': 78,
    'LoginRequest_Add': 79,
    'LoginRequest_Update': 80,
    'LoginRequest_Delete': 81,
    'LoginRequest_AddUpdate': 82,
    'LoginRequest_MarkDeleted': 83,
    'WelcomeRequest_Select': 84,
    'WelcomeRequest_SelectList': 85,
    'WelcomeRequest_Add': 86,
    'WelcomeRequest_Update': 87,
    'WelcomeRequest_Delete': 88,
    'WelcomeRequest_AddUpdate': 89,
    'WelcomeRequest_MarkDeleted': 90,
    'MenuSample_AllowRead': 93,
    'SampleServerClaim': 94,
    'Payment_Select': 95,
    'Payment_SelectList': 96,
    'Payment_Add': 97,
    'Payment_Update': 98,
    'Payment_Delete': 99,
    'Payment_AddUpdate': 100,
    'Payment_MarkDeleted': 101,
    'Charge_Select': 102,
    'Charge_SelectList': 103,
    'Charge_Add': 104,
    'Charge_Update': 105,
    'Charge_Delete': 106,
    'Charge_AddUpdate': 107,
    'Charge_MarkDeleted': 108,
    'Booking_Select': 109,
    'Booking_SelectList': 110,
    'Booking_Add': 111,
    'Booking_Update': 112,
    'Booking_Delete': 113,
    'Booking_AddUpdate': 114,
    'Booking_MarkDeleted': 115,
    'Customer_Select': 116,
    'Customer_SelectList': 117,
    'Customer_Add': 118,
    'Customer_Update': 119,
    'Customer_Delete': 120,
    'Customer_AddUpdate': 121,
    'Customer_MarkDeleted': 122,
    'AdditionalDriverJT_Select': 130,
    'AdditionalDriverJT_SelectList': 131,
    'AdditionalDriverJT_Add': 132,
    'AdditionalDriverJT_Update': 133,
    'AdditionalDriverJT_Delete': 134,
    'AdditionalDriverJT_AddUpdate': 135,
    'AdditionalDriverJT_MarkDeleted': 136,
    'Vehicle_Select': 137,
    'Vehicle_SelectList': 138,
    'Vehicle_Add': 139,
    'Vehicle_Update': 140,
    'Vehicle_Delete': 141,
    'Vehicle_AddUpdate': 142,
    'Vehicle_MarkDeleted': 143,
    'Region_Select': 144,
    'Region_SelectList': 145,
    'Region_Add': 146,
    'Region_Update': 147,
    'Region_Delete': 148,
    'Region_AddUpdate': 149,
    'Region_MarkDeleted': 150,
} as const satisfies EnumTypeConfig<types.AppClaimsEnum>;

export const bookingStatusTypeConfig = {
    'Pending': 0,
    'Ongoing': 1,
    'Completed': 2,
} as const satisfies EnumTypeConfig<types.BookingStatus>;

export const customClaimsTypesEnumTypeConfig = {
    'ServerClaim': 1,
    'UXClaim': 2,
    'TableClaim': 4,
} as const satisfies EnumTypeConfig<types.CustomClaimsTypesEnum>;

export const edmContainerElementKindTypeConfig = {
    'None': 0,
    'EntitySet': 1,
    'ActionImport': 2,
    'FunctionImport': 3,
    'Singleton': 4,
} as const satisfies EnumTypeConfig<types.EdmContainerElementKind>;

export const edmExpressionKindTypeConfig = {
    'None': 0,
    'BinaryConstant': 1,
    'BooleanConstant': 2,
    'DateTimeOffsetConstant': 3,
    'DecimalConstant': 4,
    'FloatingConstant': 5,
    'GuidConstant': 6,
    'IntegerConstant': 7,
    'StringConstant': 8,
    'DurationConstant': 9,
    'Null': 10,
    'Record': 11,
    'Collection': 12,
    'Path': 13,
    'If': 14,
    'Cast': 15,
    'IsOf': 16,
    'FunctionApplication': 17,
    'LabeledExpressionReference': 18,
    'Labeled': 19,
    'PropertyPath': 20,
    'NavigationPropertyPath': 21,
    'DateConstant': 22,
    'TimeOfDayConstant': 23,
    'EnumMember': 24,
    'AnnotationPath': 25,
} as const satisfies EnumTypeConfig<types.EdmExpressionKind>;

export const edmSchemaElementKindTypeConfig = {
    'None': 0,
    'TypeDefinition': 1,
    'Term': 2,
    'Action': 3,
    'EntityContainer': 4,
    'Function': 5,
} as const satisfies EnumTypeConfig<types.EdmSchemaElementKind>;

export const edmTypeKindTypeConfig = {
    'None': 0,
    'Primitive': 1,
    'Entity': 2,
    'Complex': 3,
    'Collection': 4,
    'EntityReference': 5,
    'Enum': 6,
    'TypeDefinition': 7,
    'Untyped': 8,
    'Path': 9,
} as const satisfies EnumTypeConfig<types.EdmTypeKind>;

export const paymentTypeTypeConfig = {
    'Cash': 0,
    'Card': 1,
} as const satisfies EnumTypeConfig<types.PaymentType>;

export const permissionTypesOnDataEnumTypeConfig = {
    'None': 1,
    'Read': 2,
    'Update': 4,
    'Delete': 8,
    'All': 14,
} as const satisfies EnumTypeConfig<types.PermissionTypesOnDataEnum>;

export const vehicleStatusTypeConfig = {
    'Available': 0,
    'Ready': 1,
    'OnHire': 2,
    'Returned': 3,
    'OffFleet': 4,
} as const satisfies EnumTypeConfig<types.VehicleStatus>;

export const additionalDriverJtTypeConfig = {
    driverId: { type: 'Guid', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastModifiedUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
    createdUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.AdditionalDriverJT>;

export const additionalDriverJtInsertTypeConfig = {
    driverId: { type: 'Guid', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.AdditionalDriverJTInsert>;

export const additionalDriverJtUpdateTypeConfig = {
    driverId: { type: 'Guid', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.AdditionalDriverJTUpdate>;

export const additionalDriverJtUpdateWithoutPKsTypeConfig = {

} as const satisfies ObjectTypeConfig<types.AdditionalDriverJTUpdateWithoutPKs>;

export const applicationUserTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    oidcId: { type: 'String', isNullable: false, isUndefinable: false },
    name: { type: 'String', isNullable: false, isUndefinable: false },
    userName: { type: 'String', isNullable: false, isUndefinable: false },
    email: { type: 'String', isNullable: true, isUndefinable: false },
    phoneNumber: { type: 'String', isNullable: true, isUndefinable: false },
    isEnabled: { type: 'Boolean', isNullable: false, isUndefinable: false },
    failedLoginAttempts: { type: 'Int32', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ApplicationUser>;

export const applicationUserApplicationUserGroupTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    name: { type: 'String', isNullable: true, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    applicationUserId: { type: 'Guid', isNullable: false, isUndefinable: false },
    applicationUserGroupId: { type: 'Guid', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ApplicationUserApplicationUserGroup>;

export const applicationUserApplicationUserGroupInsertTypeConfig = {
    name: { type: 'String', isNullable: true, isUndefinable: true },
    applicationUserId: { type: 'Guid', isNullable: false, isUndefinable: true },
    applicationUserGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserApplicationUserGroupInsert>;

export const applicationUserApplicationUserGroupUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    name: { type: 'String', isNullable: true, isUndefinable: true },
    applicationUserId: { type: 'Guid', isNullable: false, isUndefinable: true },
    applicationUserGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserApplicationUserGroupUpdate>;

export const applicationUserApplicationUserGroupUpdateWithoutPKsTypeConfig = {
    name: { type: 'String', isNullable: true, isUndefinable: true },
    applicationUserId: { type: 'Guid', isNullable: false, isUndefinable: true },
    applicationUserGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserApplicationUserGroupUpdateWithoutPKs>;

export const applicationUserDtoTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: true },
    oidcId: { type: 'String', isNullable: true, isUndefinable: false },
    userName: { type: 'String', isNullable: false, isUndefinable: false },
    name: { type: 'String', isNullable: false, isUndefinable: false },
    email: { type: 'String', isNullable: true, isUndefinable: false },
    phoneNumber: { type: 'String', isNullable: true, isUndefinable: true },
    isEnabled: { type: 'Boolean', isNullable: false, isUndefinable: true },
    isLocked: { type: 'Boolean', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserDTO>;

export const applicationUserGroupTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    name: { type: 'String', isNullable: true, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ApplicationUserGroup>;

export const applicationUserGroupInsertTypeConfig = {
    name: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserGroupInsert>;

export const applicationUserGroupPageWithTotalCountDtoTypeConfig = {
    totalRecCount: { type: 'Int32', isNullable: false, isUndefinable: true },
    totalPageCount: { type: 'Int32', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserGroupPageWithTotalCountDTO>;

export const applicationUserGroupUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    name: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserGroupUpdate>;

export const applicationUserGroupUpdateWithoutPKsTypeConfig = {
    name: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserGroupUpdateWithoutPKs>;

export const applicationUserInsertTypeConfig = {
    oidcId: { type: 'String', isNullable: false, isUndefinable: false },
    name: { type: 'String', isNullable: false, isUndefinable: false },
    userName: { type: 'String', isNullable: false, isUndefinable: false },
    email: { type: 'String', isNullable: true, isUndefinable: true },
    phoneNumber: { type: 'String', isNullable: true, isUndefinable: true },
    isEnabled: { type: 'Boolean', isNullable: false, isUndefinable: true },
    failedLoginAttempts: { type: 'Int32', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserInsert>;

export const applicationUserPageWithTotalCountDtoTypeConfig = {
    totalRecCount: { type: 'Int32', isNullable: false, isUndefinable: true },
    totalPageCount: { type: 'Int32', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserPageWithTotalCountDTO>;

export const applicationUserUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    oidcId: { type: 'String', isNullable: false, isUndefinable: true },
    name: { type: 'String', isNullable: false, isUndefinable: true },
    userName: { type: 'String', isNullable: false, isUndefinable: true },
    email: { type: 'String', isNullable: true, isUndefinable: true },
    phoneNumber: { type: 'String', isNullable: true, isUndefinable: true },
    isEnabled: { type: 'Boolean', isNullable: false, isUndefinable: true },
    failedLoginAttempts: { type: 'Int32', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserUpdate>;

export const applicationUserUpdateWithoutPKsTypeConfig = {
    oidcId: { type: 'String', isNullable: false, isUndefinable: true },
    name: { type: 'String', isNullable: false, isUndefinable: true },
    userName: { type: 'String', isNullable: false, isUndefinable: true },
    email: { type: 'String', isNullable: true, isUndefinable: true },
    phoneNumber: { type: 'String', isNullable: true, isUndefinable: true },
    isEnabled: { type: 'Boolean', isNullable: false, isUndefinable: true },
    failedLoginAttempts: { type: 'Int32', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUserUpdateWithoutPKs>;

export const applicationUsersToApplicationUserGroupsDtoTypeConfig = {
    removeExistingUnMentioned: { type: 'Boolean', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ApplicationUsersToApplicationUserGroupsDTO>;

export const authDtoTypeConfig = {
    token: { type: 'String', isNullable: false, isUndefinable: false },
    expiresIn: { type: 'Int32', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.AuthDTO>;

export const authErrorDetailsTypeConfig = {
    title: { type: 'String', isNullable: false, isUndefinable: true },
    details: { type: 'String', isNullable: false, isUndefinable: true },
    context: { type: 'String', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.AuthErrorDetails>;

export const baseDataMultiOwnerTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: false },
    appUserOrAppUserGroupId: { type: 'Guid', isNullable: false, isUndefinable: false },
    permTypes: { type: permissionTypesOnDataEnumTypeConfig, isNullable: false, isUndefinable: false},
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.BaseDataMultiOwner>;

export const baseDataMultiOwnerInsertTypeConfig = {
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
    appUserOrAppUserGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    permTypes: { type: permissionTypesOnDataEnumTypeConfig, isNullable: false, isUndefinable: true},
} as const satisfies ObjectTypeConfig<types.BaseDataMultiOwnerInsert>;

export const baseDataMultiOwnerUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
    appUserOrAppUserGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    permTypes: { type: permissionTypesOnDataEnumTypeConfig, isNullable: false, isUndefinable: true},
} as const satisfies ObjectTypeConfig<types.BaseDataMultiOwnerUpdate>;

export const baseDataMultiOwnerUpdateWithoutPKsTypeConfig = {
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
    appUserOrAppUserGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    permTypes: { type: permissionTypesOnDataEnumTypeConfig, isNullable: false, isUndefinable: true},
} as const satisfies ObjectTypeConfig<types.BaseDataMultiOwnerUpdateWithoutPKs>;

export const bookingTypeConfig = {
    startDate: { type: 'DateTimeOffset', isNullable: false, isUndefinable: false },
    endDate: { type: 'DateTimeOffset', isNullable: false, isUndefinable: false },
    status: { type: bookingStatusTypeConfig, isNullable: false, isUndefinable: false},
    notes: { type: 'String', isNullable: true, isUndefinable: false },
    mileage: { type: 'Double', isNullable: true, isUndefinable: false },
    price: { type: 'Double', isNullable: true, isUndefinable: false },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    primaryDriverId: { type: 'Guid', isNullable: false, isUndefinable: false },
    usageRegionId: { type: 'Guid', isNullable: true, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastModifiedUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
    createdUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.Booking>;

export const bookingInsertTypeConfig = {
    startDate: { type: 'DateTimeOffset', isNullable: false, isUndefinable: false },
    endDate: { type: 'DateTimeOffset', isNullable: false, isUndefinable: false },
    status: { type: bookingStatusTypeConfig, isNullable: false, isUndefinable: false},
    notes: { type: 'String', isNullable: true, isUndefinable: true },
    mileage: { type: 'Double', isNullable: true, isUndefinable: true },
    price: { type: 'Double', isNullable: true, isUndefinable: true },
    primaryDriverId: { type: 'Guid', isNullable: false, isUndefinable: false },
    usageRegionId: { type: 'Guid', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.BookingInsert>;

export const bookingUpdateTypeConfig = {
    startDate: { type: 'DateTimeOffset', isNullable: false, isUndefinable: true },
    endDate: { type: 'DateTimeOffset', isNullable: false, isUndefinable: true },
    status: { type: bookingStatusTypeConfig, isNullable: false, isUndefinable: true},
    notes: { type: 'String', isNullable: true, isUndefinable: true },
    mileage: { type: 'Double', isNullable: true, isUndefinable: true },
    price: { type: 'Double', isNullable: true, isUndefinable: true },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    primaryDriverId: { type: 'Guid', isNullable: false, isUndefinable: true },
    usageRegionId: { type: 'Guid', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.BookingUpdate>;

export const bookingUpdateWithoutPKsTypeConfig = {
    startDate: { type: 'DateTimeOffset', isNullable: false, isUndefinable: true },
    endDate: { type: 'DateTimeOffset', isNullable: false, isUndefinable: true },
    status: { type: bookingStatusTypeConfig, isNullable: false, isUndefinable: true},
    notes: { type: 'String', isNullable: true, isUndefinable: true },
    mileage: { type: 'Double', isNullable: true, isUndefinable: true },
    price: { type: 'Double', isNullable: true, isUndefinable: true },
    primaryDriverId: { type: 'Guid', isNullable: false, isUndefinable: true },
    usageRegionId: { type: 'Guid', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.BookingUpdateWithoutPKs>;

export const chargeTypeConfig = {
    amount: { type: 'Double', isNullable: false, isUndefinable: false },
    description: { type: 'String', isNullable: false, isUndefinable: false },
    group: { type: 'String', isNullable: false, isUndefinable: false },
    timeOfTransaction: { type: 'DateTimeOffset', isNullable: false, isUndefinable: false },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastModifiedUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
    createdUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.Charge>;

export const chargeInsertTypeConfig = {
    amount: { type: 'Double', isNullable: false, isUndefinable: false },
    description: { type: 'String', isNullable: false, isUndefinable: false },
    group: { type: 'String', isNullable: false, isUndefinable: false },
    timeOfTransaction: { type: 'DateTimeOffset', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ChargeInsert>;

export const chargeUpdateTypeConfig = {
    amount: { type: 'Double', isNullable: false, isUndefinable: true },
    description: { type: 'String', isNullable: false, isUndefinable: true },
    group: { type: 'String', isNullable: false, isUndefinable: true },
    timeOfTransaction: { type: 'DateTimeOffset', isNullable: false, isUndefinable: true },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ChargeUpdate>;

export const chargeUpdateWithoutPKsTypeConfig = {
    amount: { type: 'Double', isNullable: false, isUndefinable: true },
    description: { type: 'String', isNullable: false, isUndefinable: true },
    group: { type: 'String', isNullable: false, isUndefinable: true },
    timeOfTransaction: { type: 'DateTimeOffset', isNullable: false, isUndefinable: true },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ChargeUpdateWithoutPKs>;

export const claimBaseDtoTypeConfig = {
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: true },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: true },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimBaseDTO>;

export const claimEnumsInApplicationUserTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: false},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: false },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: false },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: false },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInApplicationUser>;

export const claimEnumsInApplicationUserGroupTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: false},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: false },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: false },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: false },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInApplicationUserGroup>;

export const claimEnumsInApplicationUserGroupInsertTypeConfig = {
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: true },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: true },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInApplicationUserGroupInsert>;

export const claimEnumsInApplicationUserGroupUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: true },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: true },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInApplicationUserGroupUpdate>;

export const claimEnumsInApplicationUserGroupUpdateWithoutPKsTypeConfig = {
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: true },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: true },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInApplicationUserGroupUpdateWithoutPKs>;

export const claimEnumsInApplicationUserInsertTypeConfig = {
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: true },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: true },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInApplicationUserInsert>;

export const claimEnumsInApplicationUserUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: true },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: true },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInApplicationUserUpdate>;

export const claimEnumsInApplicationUserUpdateWithoutPKsTypeConfig = {
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: true },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: true },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInApplicationUserUpdateWithoutPKs>;

export const claimEnumsInClaimGroupTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: false},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: false },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: false },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: false },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInClaimGroup>;

export const claimEnumsInClaimGroupInsertTypeConfig = {
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: true },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: true },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInClaimGroupInsert>;

export const claimEnumsInClaimGroupUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: true },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: true },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInClaimGroupUpdate>;

export const claimEnumsInClaimGroupUpdateWithoutPKsTypeConfig = {
    claimType: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
    claimValue: { type: 'Int32', isNullable: false, isUndefinable: true },
    priorityOfPermission: { type: 'Int32', isNullable: false, isUndefinable: true },
    allow: { type: 'Boolean', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsInClaimGroupUpdateWithoutPKs>;

export const claimEnumsToAddUpdateDeleteDtoTypeConfig = {
    removeExistingUnMentionedClaimBase: { type: 'Boolean', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimEnumsToAddUpdateDeleteDTO>;

export const claimGroupTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    name: { type: 'String', isNullable: false, isUndefinable: false },
    builtInGroup: { type: 'Boolean', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ClaimGroup>;

export const claimGroupAddUpdateDeleteDtoTypeConfig = {
    removeExistingUnMentionedClaimGroups: { type: 'Boolean', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupAddUpdateDeleteDTO>;

export const claimGroupInsertTypeConfig = {
    name: { type: 'String', isNullable: false, isUndefinable: false },
    builtInGroup: { type: 'Boolean', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupInsert>;

export const claimGroupPageWithTotalCountDtoTypeConfig = {
    totalRecCount: { type: 'Int32', isNullable: false, isUndefinable: true },
    totalPageCount: { type: 'Int32', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupPageWithTotalCountDTO>;

export const claimGroupUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    name: { type: 'String', isNullable: false, isUndefinable: true },
    builtInGroup: { type: 'Boolean', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupUpdate>;

export const claimGroupUpdateWithoutPKsTypeConfig = {
    name: { type: 'String', isNullable: false, isUndefinable: true },
    builtInGroup: { type: 'Boolean', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupUpdateWithoutPKs>;

export const claimGroupsInApplicationUserTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: false },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInApplicationUser>;

export const claimGroupsInApplicationUserGroupTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: false },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInApplicationUserGroup>;

export const claimGroupsInApplicationUserGroupInsertTypeConfig = {
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInApplicationUserGroupInsert>;

export const claimGroupsInApplicationUserGroupUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInApplicationUserGroupUpdate>;

export const claimGroupsInApplicationUserGroupUpdateWithoutPKsTypeConfig = {
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInApplicationUserGroupUpdateWithoutPKs>;

export const claimGroupsInApplicationUserInsertTypeConfig = {
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInApplicationUserInsert>;

export const claimGroupsInApplicationUserUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInApplicationUserUpdate>;

export const claimGroupsInApplicationUserUpdateWithoutPKsTypeConfig = {
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInApplicationUserUpdateWithoutPKs>;

export const claimGroupsInClaimGroupTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: false },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInClaimGroup>;

export const claimGroupsInClaimGroupInsertTypeConfig = {
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInClaimGroupInsert>;

export const claimGroupsInClaimGroupUpdateTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInClaimGroupUpdate>;

export const claimGroupsInClaimGroupUpdateWithoutPKsTypeConfig = {
    claimGroupId: { type: 'Guid', isNullable: false, isUndefinable: true },
    recordId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ClaimGroupsInClaimGroupUpdateWithoutPKs>;

export const customClaimsTypesEnumStringInt32DictionaryListTupleTypeConfig = {
    item1: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
} as const satisfies ObjectTypeConfig<types.CustomClaimsTypesEnumStringInt32DictionaryListTuple>;

export const customClaimsTypesEnumStringInt32DictionaryStringTupleListTupleTypeConfig = {
    item1: { type: customClaimsTypesEnumTypeConfig, isNullable: false, isUndefinable: true},
} as const satisfies ObjectTypeConfig<types.CustomClaimsTypesEnumStringInt32DictionaryStringTupleListTuple>;

export const customerTypeConfig = {
    name: { type: 'String', isNullable: false, isUndefinable: false },
    address: { type: 'String', isNullable: false, isUndefinable: false },
    dateOfBirth: { type: 'String', isNullable: false, isUndefinable: false },
    licenseDetails: { type: 'String', isNullable: false, isUndefinable: false },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastModifiedUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
    createdUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.Customer>;

export const customerInsertTypeConfig = {
    name: { type: 'String', isNullable: false, isUndefinable: false },
    address: { type: 'String', isNullable: false, isUndefinable: false },
    dateOfBirth: { type: 'String', isNullable: false, isUndefinable: false },
    licenseDetails: { type: 'String', isNullable: false, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.CustomerInsert>;

export const customerUpdateTypeConfig = {
    name: { type: 'String', isNullable: false, isUndefinable: true },
    address: { type: 'String', isNullable: false, isUndefinable: true },
    dateOfBirth: { type: 'String', isNullable: false, isUndefinable: true },
    licenseDetails: { type: 'String', isNullable: false, isUndefinable: true },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.CustomerUpdate>;

export const customerUpdateWithoutPKsTypeConfig = {
    name: { type: 'String', isNullable: false, isUndefinable: true },
    address: { type: 'String', isNullable: false, isUndefinable: true },
    dateOfBirth: { type: 'String', isNullable: false, isUndefinable: true },
    licenseDetails: { type: 'String', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.CustomerUpdateWithoutPKs>;

export const dataRecordAddUpdateDeletePermissionTableSubListDtoTypeConfig = {
    tableName: { type: 'String', isNullable: false, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.DataRecordAddUpdateDeletePermissionTableSubListDTO>;

export const entityWithPermissionsDtoTypeConfig = {
    rowId: { type: 'Guid', isNullable: false, isUndefinable: true },
    rowDisplayName: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.EntityWithPermissionsDTO>;


export const iEdmEntityContainerTypeConfig = {
    name: { type: 'String', isNullable: true, isUndefinable: true },
    schemaElementKind: { type: edmSchemaElementKindTypeConfig, isNullable: false, isUndefinable: true},
    namespace: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.IEdmEntityContainer>;

export const iEdmEntityContainerElementTypeConfig = {
    name: { type: 'String', isNullable: true, isUndefinable: true },
    containerElementKind: { type: edmContainerElementKindTypeConfig, isNullable: false, isUndefinable: true},
} as const satisfies ObjectTypeConfig<types.IEdmEntityContainerElement>;

export const iEdmExpressionTypeConfig = {
    expressionKind: { type: edmExpressionKindTypeConfig, isNullable: false, isUndefinable: true},
} as const satisfies ObjectTypeConfig<types.IEdmExpression>;

export const iEdmModelTypeConfig = {

} as const satisfies ObjectTypeConfig<types.IEdmModel>;

export const iEdmSchemaElementTypeConfig = {
    name: { type: 'String', isNullable: true, isUndefinable: true },
    schemaElementKind: { type: edmSchemaElementKindTypeConfig, isNullable: false, isUndefinable: true},
    namespace: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.IEdmSchemaElement>;

export const iEdmTermTypeConfig = {
    name: { type: 'String', isNullable: true, isUndefinable: true },
    schemaElementKind: { type: edmSchemaElementKindTypeConfig, isNullable: false, isUndefinable: true},
    namespace: { type: 'String', isNullable: true, isUndefinable: true },
    appliesTo: { type: 'String', isNullable: true, isUndefinable: true },
    defaultValue: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.IEdmTerm>;

export const iEdmTypeTypeConfig = {
    typeKind: { type: edmTypeKindTypeConfig, isNullable: false, isUndefinable: true},
} as const satisfies ObjectTypeConfig<types.IEdmType>;

export const iEdmTypeReferenceTypeConfig = {
    isNullable: { type: 'Boolean', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.IEdmTypeReference>;


export const iEdmVocabularyAnnotationTypeConfig = {
    qualifier: { type: 'String', isNullable: true, isUndefinable: true },
    usesDefault: { type: 'Boolean', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.IEdmVocabularyAnnotation>;

export const oDataEntitySetInfoTypeConfig = {
    url: { type: 'String', isNullable: true, isUndefinable: true },
    name: { type: 'String', isNullable: true, isUndefinable: true },
    title: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ODataEntitySetInfo>;

export const oDataFunctionImportInfoTypeConfig = {
    url: { type: 'String', isNullable: true, isUndefinable: true },
    name: { type: 'String', isNullable: true, isUndefinable: true },
    title: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ODataFunctionImportInfo>;

export const oDataServiceDocumentTypeConfig = {

} as const satisfies ObjectTypeConfig<types.ODataServiceDocument>;

export const oDataSingletonInfoTypeConfig = {
    url: { type: 'String', isNullable: true, isUndefinable: true },
    name: { type: 'String', isNullable: true, isUndefinable: true },
    title: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ODataSingletonInfo>;

export const oDataTypeAnnotationTypeConfig = {
    typeName: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.ODataTypeAnnotation>;

export const paymentTypeConfig = {
    amount: { type: 'Double', isNullable: false, isUndefinable: false },
    type: { type: paymentTypeTypeConfig, isNullable: false, isUndefinable: false},
    timeOfTransaction: { type: 'DateTimeOffset', isNullable: false, isUndefinable: false },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastModifiedUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
    createdUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.Payment>;

export const paymentInsertTypeConfig = {
    amount: { type: 'Double', isNullable: false, isUndefinable: false },
    type: { type: paymentTypeTypeConfig, isNullable: false, isUndefinable: false},
    timeOfTransaction: { type: 'DateTimeOffset', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.PaymentInsert>;

export const paymentUpdateTypeConfig = {
    amount: { type: 'Double', isNullable: false, isUndefinable: true },
    type: { type: paymentTypeTypeConfig, isNullable: false, isUndefinable: true},
    timeOfTransaction: { type: 'DateTimeOffset', isNullable: false, isUndefinable: true },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.PaymentUpdate>;

export const paymentUpdateWithoutPKsTypeConfig = {
    amount: { type: 'Double', isNullable: false, isUndefinable: true },
    type: { type: paymentTypeTypeConfig, isNullable: false, isUndefinable: true},
    timeOfTransaction: { type: 'DateTimeOffset', isNullable: false, isUndefinable: true },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.PaymentUpdateWithoutPKs>;

export const regionTypeConfig = {
    name: { type: 'String', isNullable: false, isUndefinable: false },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastModifiedUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
    createdUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.Region>;

export const regionInsertTypeConfig = {
    name: { type: 'String', isNullable: false, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.RegionInsert>;

export const regionUpdateTypeConfig = {
    name: { type: 'String', isNullable: false, isUndefinable: true },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.RegionUpdate>;

export const regionUpdateWithoutPKsTypeConfig = {
    name: { type: 'String', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.RegionUpdateWithoutPKs>;

export const stringBaseDataMultiOwnerListTupleTypeConfig = {
    item1: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.StringBaseDataMultiOwnerListTuple>;

export const stringInt32DictionaryStringTupleTypeConfig = {
    item2: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.StringInt32DictionaryStringTuple>;

export const stringStringListTupleTypeConfig = {
    item1: { type: 'String', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.StringStringListTuple>;

export const userPermissionTypeDtoTypeConfig = {
    id: { type: 'Guid', isNullable: false, isUndefinable: true },
    permissions: { type: permissionTypesOnDataEnumTypeConfig, isNullable: false, isUndefinable: true},
} as const satisfies ObjectTypeConfig<types.UserPermissionTypeDTO>;

export const userSessionDataDtoTypeConfig = {
    userId: { type: 'Guid', isNullable: true, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.UserSessionDataDTO>;

export const vehicleTypeConfig = {
    fleetEntryDate: { type: 'String', isNullable: false, isUndefinable: false },
    fleetEntryMileage: { type: 'Double', isNullable: false, isUndefinable: false },
    status: { type: vehicleStatusTypeConfig, isNullable: false, isUndefinable: false},
    expectedExitDate: { type: 'String', isNullable: true, isUndefinable: false },
    expectedExitMileage: { type: 'Double', isNullable: true, isUndefinable: false },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: false },
    isDeleted: { type: 'Boolean', isNullable: false, isUndefinable: false },
    createdDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true, isUndefinable: false },
    lastModifiedUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
    createdUserId: { type: 'Guid', isNullable: true, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.Vehicle>;

export const vehicleInsertTypeConfig = {
    fleetEntryDate: { type: 'String', isNullable: false, isUndefinable: false },
    fleetEntryMileage: { type: 'Double', isNullable: false, isUndefinable: false },
    status: { type: vehicleStatusTypeConfig, isNullable: false, isUndefinable: false},
    expectedExitDate: { type: 'String', isNullable: true, isUndefinable: true },
    expectedExitMileage: { type: 'Double', isNullable: true, isUndefinable: true },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: false },
} as const satisfies ObjectTypeConfig<types.VehicleInsert>;

export const vehicleUpdateTypeConfig = {
    fleetEntryDate: { type: 'String', isNullable: false, isUndefinable: true },
    fleetEntryMileage: { type: 'Double', isNullable: false, isUndefinable: true },
    status: { type: vehicleStatusTypeConfig, isNullable: false, isUndefinable: true},
    expectedExitDate: { type: 'String', isNullable: true, isUndefinable: true },
    expectedExitMileage: { type: 'Double', isNullable: true, isUndefinable: true },
    id: { type: 'Guid', isNullable: false, isUndefinable: false },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.VehicleUpdate>;

export const vehicleUpdateWithoutPKsTypeConfig = {
    fleetEntryDate: { type: 'String', isNullable: false, isUndefinable: true },
    fleetEntryMileage: { type: 'Double', isNullable: false, isUndefinable: true },
    status: { type: vehicleStatusTypeConfig, isNullable: false, isUndefinable: true},
    expectedExitDate: { type: 'String', isNullable: true, isUndefinable: true },
    expectedExitMileage: { type: 'Double', isNullable: true, isUndefinable: true },
    bookingId: { type: 'Guid', isNullable: false, isUndefinable: true },
} as const satisfies ObjectTypeConfig<types.VehicleUpdateWithoutPKs>;

