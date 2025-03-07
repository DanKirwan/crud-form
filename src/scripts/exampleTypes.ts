export interface AdditionalDriverJT {
    driver: Customer | null;
    booking: Booking | null;
    driverId: string;
    bookingId: string;
    isDeleted: boolean;
    createdDateTime: Date | null;
    lastUpdatedDateTime: Date | null;
    lastModifiedUser: ApplicationUser | null;
    lastModifiedUserId: string | null;
    createdUserId: string | null;
    createdUser: ApplicationUser | null;
}

/** AdditionalDriverJT without database generated properties */
export interface AdditionalDriverJTInsert {
    driver: CustomerInsert | null;
    booking: BookingInsert | null;
    driverId: string;
    bookingId: string;
}

/** AdditionalDriverJT with all properties optional except PKs */
export interface AdditionalDriverJTUpdate {
    driver?: CustomerUpdateWithoutPKs | null;
    booking?: BookingUpdateWithoutPKs | null;
    driverId: string;
    bookingId: string;
}

/** AdditionalDriverJT without PKs and database generated properties and with all properties optional */
export interface AdditionalDriverJTUpdateWithoutPKs {
    driver?: CustomerUpdateWithoutPKs | null;
    booking?: BookingUpdateWithoutPKs | null;
}

export enum AppClaimsEnum {
    ApplicationUser_Select = 0,
    ApplicationUser_SelectList = 1,
    ApplicationUser_Add = 2,
    ApplicationUser_Update = 3,
    ApplicationUser_Delete = 4,
    ApplicationUser_AddUpdate = 5,
    ApplicationUser_MarkDeleted = 6,
    ApplicationUserApplicationUserGroup_Select = 7,
    ApplicationUserApplicationUserGroup_SelectList = 8,
    ApplicationUserApplicationUserGroup_Add = 9,
    ApplicationUserApplicationUserGroup_Update = 10,
    ApplicationUserApplicationUserGroup_Delete = 11,
    ApplicationUserApplicationUserGroup_AddUpdate = 12,
    ApplicationUserApplicationUserGroup_MarkDeleted = 13,
    ApplicationUserGroup_Select = 14,
    ApplicationUserGroup_SelectList = 15,
    ApplicationUserGroup_Add = 16,
    ApplicationUserGroup_Update = 17,
    ApplicationUserGroup_Delete = 18,
    ApplicationUserGroup_AddUpdate = 19,
    ApplicationUserGroup_MarkDeleted = 20,
    ClaimEnumsInApplicationUser_Select = 21,
    ClaimEnumsInApplicationUser_SelectList = 22,
    ClaimEnumsInApplicationUser_Add = 23,
    ClaimEnumsInApplicationUser_Update = 24,
    ClaimEnumsInApplicationUser_Delete = 25,
    ClaimEnumsInApplicationUser_AddUpdate = 26,
    ClaimEnumsInApplicationUser_MarkDeleted = 27,
    ClaimEnumsInApplicationUserGroup_Select = 28,
    ClaimEnumsInApplicationUserGroup_SelectList = 29,
    ClaimEnumsInApplicationUserGroup_Add = 30,
    ClaimEnumsInApplicationUserGroup_Update = 31,
    ClaimEnumsInApplicationUserGroup_Delete = 32,
    ClaimEnumsInApplicationUserGroup_AddUpdate = 33,
    ClaimEnumsInApplicationUserGroup_MarkDeleted = 34,
    ClaimEnumsInClaimGroup_Select = 35,
    ClaimEnumsInClaimGroup_SelectList = 36,
    ClaimEnumsInClaimGroup_Add = 37,
    ClaimEnumsInClaimGroup_Update = 38,
    ClaimEnumsInClaimGroup_Delete = 39,
    ClaimEnumsInClaimGroup_AddUpdate = 40,
    ClaimEnumsInClaimGroup_MarkDeleted = 41,
    ClaimGroup_Select = 42,
    ClaimGroup_SelectList = 43,
    ClaimGroup_Add = 44,
    ClaimGroup_Update = 45,
    ClaimGroup_Delete = 46,
    ClaimGroup_AddUpdate = 47,
    ClaimGroup_MarkDeleted = 48,
    ClaimGroupsInApplicationUser_Select = 49,
    ClaimGroupsInApplicationUser_SelectList = 50,
    ClaimGroupsInApplicationUser_Add = 51,
    ClaimGroupsInApplicationUser_Update = 52,
    ClaimGroupsInApplicationUser_Delete = 53,
    ClaimGroupsInApplicationUser_AddUpdate = 54,
    ClaimGroupsInApplicationUser_MarkDeleted = 55,
    ClaimGroupsInApplicationUserGroup_Select = 56,
    ClaimGroupsInApplicationUserGroup_SelectList = 57,
    ClaimGroupsInApplicationUserGroup_Add = 58,
    ClaimGroupsInApplicationUserGroup_Update = 59,
    ClaimGroupsInApplicationUserGroup_Delete = 60,
    ClaimGroupsInApplicationUserGroup_AddUpdate = 61,
    ClaimGroupsInApplicationUserGroup_MarkDeleted = 62,
    ClaimGroupsInClaimGroup_Select = 63,
    ClaimGroupsInClaimGroup_SelectList = 64,
    ClaimGroupsInClaimGroup_Add = 65,
    ClaimGroupsInClaimGroup_Update = 66,
    ClaimGroupsInClaimGroup_Delete = 67,
    ClaimGroupsInClaimGroup_AddUpdate = 68,
    ClaimGroupsInClaimGroup_MarkDeleted = 69,
    LoginRequest_Select = 77,
    LoginRequest_SelectList = 78,
    LoginRequest_Add = 79,
    LoginRequest_Update = 80,
    LoginRequest_Delete = 81,
    LoginRequest_AddUpdate = 82,
    LoginRequest_MarkDeleted = 83,
    WelcomeRequest_Select = 84,
    WelcomeRequest_SelectList = 85,
    WelcomeRequest_Add = 86,
    WelcomeRequest_Update = 87,
    WelcomeRequest_Delete = 88,
    WelcomeRequest_AddUpdate = 89,
    WelcomeRequest_MarkDeleted = 90,
    MenuSample_AllowRead = 93,
    SampleServerClaim = 94,
    Payment_Select = 95,
    Payment_SelectList = 96,
    Payment_Add = 97,
    Payment_Update = 98,
    Payment_Delete = 99,
    Payment_AddUpdate = 100,
    Payment_MarkDeleted = 101,
    Charge_Select = 102,
    Charge_SelectList = 103,
    Charge_Add = 104,
    Charge_Update = 105,
    Charge_Delete = 106,
    Charge_AddUpdate = 107,
    Charge_MarkDeleted = 108,
    Booking_Select = 109,
    Booking_SelectList = 110,
    Booking_Add = 111,
    Booking_Update = 112,
    Booking_Delete = 113,
    Booking_AddUpdate = 114,
    Booking_MarkDeleted = 115,
    Customer_Select = 116,
    Customer_SelectList = 117,
    Customer_Add = 118,
    Customer_Update = 119,
    Customer_Delete = 120,
    Customer_AddUpdate = 121,
    Customer_MarkDeleted = 122,
    AdditionalDriverJT_Select = 130,
    AdditionalDriverJT_SelectList = 131,
    AdditionalDriverJT_Add = 132,
    AdditionalDriverJT_Update = 133,
    AdditionalDriverJT_Delete = 134,
    AdditionalDriverJT_AddUpdate = 135,
    AdditionalDriverJT_MarkDeleted = 136,
    Vehicle_Select = 137,
    Vehicle_SelectList = 138,
    Vehicle_Add = 139,
    Vehicle_Update = 140,
    Vehicle_Delete = 141,
    Vehicle_AddUpdate = 142,
    Vehicle_MarkDeleted = 143,
    Region_Select = 144,
    Region_SelectList = 145,
    Region_Add = 146,
    Region_Update = 147,
    Region_Delete = 148,
    Region_AddUpdate = 149,
    Region_MarkDeleted = 150,
}

export interface ApplicationUser {
    id: string;
    oidcId: string;
    name: string;
    userName: string;
    email: string | null;
    phoneNumber: string | null;
    isEnabled: boolean;
    failedLoginAttempts: number;
    applicationUserApplicationUserGroups: ApplicationUserApplicationUserGroup[] | null;
    claimEnumsInApplicationUsers: ClaimEnumsInApplicationUser[] | null;
    claimGroupsInApplicationUsers: ClaimGroupsInApplicationUser[] | null;
    isDeleted: boolean;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
}

export interface ApplicationUserApplicationUserGroup {
    id: string;
    name: string | null;
    isDeleted: boolean;
    applicationUser: ApplicationUser | null;
    applicationUserId: string;
    applicationUserGroup: ApplicationUserGroup | null;
    applicationUserGroupId: string;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
}

/** ApplicationUserApplicationUserGroup without database generated properties */
export interface ApplicationUserApplicationUserGroupInsert {
    name?: string | null;
    applicationUser?: ApplicationUserInsert | null;
    applicationUserId?: string;
    applicationUserGroup?: ApplicationUserGroupInsert | null;
    applicationUserGroupId?: string;
}

/** ApplicationUserApplicationUserGroup with all properties optional except PKs */
export interface ApplicationUserApplicationUserGroupUpdate {
    id: string;
    name?: string | null;
    applicationUser?: ApplicationUserUpdateWithoutPKs | null;
    applicationUserId?: string;
    applicationUserGroup?: ApplicationUserGroupUpdateWithoutPKs | null;
    applicationUserGroupId?: string;
}

/** ApplicationUserApplicationUserGroup without PKs and database generated properties and with all properties optional */
export interface ApplicationUserApplicationUserGroupUpdateWithoutPKs {
    name?: string | null;
    applicationUser?: ApplicationUserUpdateWithoutPKs | null;
    applicationUserId?: string;
    applicationUserGroup?: ApplicationUserGroupUpdateWithoutPKs | null;
    applicationUserGroupId?: string;
}

export interface ApplicationUserDTO {
    id?: string;
    oidcId: string | null;
    userName: string;
    name: string;
    email: string | null;
    phoneNumber?: string | null;
    isEnabled?: boolean;
    isLocked?: boolean;
}

export interface ApplicationUserGroup {
    id: string;
    name: string | null;
    isDeleted: boolean;
    applicationUserApplicationUserGroups: ApplicationUserApplicationUserGroup[] | null;
    claimEnumsInApplicationUserGroups: ClaimEnumsInApplicationUserGroup[] | null;
    claimGroupsInApplicationUserGroups: ClaimGroupsInApplicationUserGroup[] | null;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
}

/** ApplicationUserGroup without database generated properties */
export interface ApplicationUserGroupInsert {
    name?: string | null;
    applicationUserApplicationUserGroups?: ApplicationUserApplicationUserGroupInsert[] | null;
    claimEnumsInApplicationUserGroups?: ClaimEnumsInApplicationUserGroupInsert[] | null;
    claimGroupsInApplicationUserGroups?: ClaimGroupsInApplicationUserGroupInsert[] | null;
}

export interface ApplicationUserGroupPageWithTotalCountDTO {
    list?: ApplicationUserGroup[] | null;
    totalRecCount?: number;
    totalPageCount?: number;
}

/** ApplicationUserGroup with all properties optional except PKs */
export interface ApplicationUserGroupUpdate {
    id: string;
    name?: string | null;
    applicationUserApplicationUserGroups?: ApplicationUserApplicationUserGroupUpdate[] | null;
    claimEnumsInApplicationUserGroups?: ClaimEnumsInApplicationUserGroupUpdate[] | null;
    claimGroupsInApplicationUserGroups?: ClaimGroupsInApplicationUserGroupUpdate[] | null;
}

/** ApplicationUserGroup without PKs and database generated properties and with all properties optional */
export interface ApplicationUserGroupUpdateWithoutPKs {
    name?: string | null;
    applicationUserApplicationUserGroups?: ApplicationUserApplicationUserGroupUpdate[] | null;
    claimEnumsInApplicationUserGroups?: ClaimEnumsInApplicationUserGroupUpdate[] | null;
    claimGroupsInApplicationUserGroups?: ClaimGroupsInApplicationUserGroupUpdate[] | null;
}

/** ApplicationUser without database generated properties */
export interface ApplicationUserInsert {
    oidcId: string;
    name: string;
    userName: string;
    email?: string | null;
    phoneNumber?: string | null;
    isEnabled?: boolean;
    failedLoginAttempts?: number;
    applicationUserApplicationUserGroups?: ApplicationUserApplicationUserGroupInsert[] | null;
    claimEnumsInApplicationUsers?: ClaimEnumsInApplicationUserInsert[] | null;
    claimGroupsInApplicationUsers?: ClaimGroupsInApplicationUserInsert[] | null;
}

export interface ApplicationUserPageWithTotalCountDTO {
    list?: ApplicationUser[] | null;
    totalRecCount?: number;
    totalPageCount?: number;
}

/** ApplicationUser with all properties optional except PKs */
export interface ApplicationUserUpdate {
    id: string;
    oidcId?: string;
    name?: string;
    userName?: string;
    email?: string | null;
    phoneNumber?: string | null;
    isEnabled?: boolean;
    failedLoginAttempts?: number;
    applicationUserApplicationUserGroups?: ApplicationUserApplicationUserGroupUpdate[] | null;
    claimEnumsInApplicationUsers?: ClaimEnumsInApplicationUserUpdate[] | null;
    claimGroupsInApplicationUsers?: ClaimGroupsInApplicationUserUpdate[] | null;
}

/** ApplicationUser without PKs and database generated properties and with all properties optional */
export interface ApplicationUserUpdateWithoutPKs {
    oidcId?: string;
    name?: string;
    userName?: string;
    email?: string | null;
    phoneNumber?: string | null;
    isEnabled?: boolean;
    failedLoginAttempts?: number;
    applicationUserApplicationUserGroups?: ApplicationUserApplicationUserGroupUpdate[] | null;
    claimEnumsInApplicationUsers?: ClaimEnumsInApplicationUserUpdate[] | null;
    claimGroupsInApplicationUsers?: ClaimGroupsInApplicationUserUpdate[] | null;
}

export interface ApplicationUsersToApplicationUserGroupsDTO {
    applicationUsersGroups?: string[];
    applicationUsersToAdd?: string[];
    applicationUsersToRemove?: string[];
    removeExistingUnMentioned?: boolean;
}

export interface AuthDTO {
    token: string;
    expiresIn?: number;
    applicationUser: ApplicationUserDTO;
}

export interface AuthErrorDetails {
    title?: string;
    details?: string;
    context?: string;
}

export interface BaseDataMultiOwner {
    id: string;
    recordId: string;
    appUserOrAppUserGroupId: string;
    permTypes: PermissionTypesOnDataEnum;
    isDeleted: boolean;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
}

/** BaseDataMultiOwner without database generated properties */
export interface BaseDataMultiOwnerInsert {
    recordId?: string;
    appUserOrAppUserGroupId?: string;
    permTypes?: PermissionTypesOnDataEnum;
}

/** BaseDataMultiOwner with all properties optional except PKs */
export interface BaseDataMultiOwnerUpdate {
    id: string;
    recordId?: string;
    appUserOrAppUserGroupId?: string;
    permTypes?: PermissionTypesOnDataEnum;
}

/** BaseDataMultiOwner without PKs and database generated properties and with all properties optional */
export interface BaseDataMultiOwnerUpdateWithoutPKs {
    recordId?: string;
    appUserOrAppUserGroupId?: string;
    permTypes?: PermissionTypesOnDataEnum;
}

export interface Booking {
    startDate: Date;
    endDate: Date;
    status: BookingStatus;
    notes: string | null;
    mileage: number | null;
    price: number | null;
    primaryDriver: Customer | null;
    usageRegion: Region | null;
    charges: Charge[] | null;
    payments: Payment[] | null;
    additionalDrivers: AdditionalDriverJT[] | null;
    id: string;
    primaryDriverId: string;
    usageRegionId: string | null;
    isDeleted: boolean;
    createdDateTime: Date | null;
    lastUpdatedDateTime: Date | null;
    lastModifiedUser: ApplicationUser | null;
    lastModifiedUserId: string | null;
    createdUserId: string | null;
    createdUser: ApplicationUser | null;
}

/** Booking without database generated properties */
export interface BookingInsert {
    startDate: Date;
    endDate: Date;
    status: BookingStatus;
    notes?: string | null;
    mileage?: number | null;
    price?: number | null;
    primaryDriver: CustomerInsert | null;
    usageRegion?: RegionInsert | null;
    charges?: ChargeInsert[] | null;
    payments?: PaymentInsert[] | null;
    additionalDrivers?: AdditionalDriverJTInsert[] | null;
    primaryDriverId: string;
    usageRegionId?: string | null;
}

export enum BookingStatus {
    Pending = 0,
    Ongoing = 1,
    Completed = 2,
}

/** Booking with all properties optional except PKs */
export interface BookingUpdate {
    startDate?: Date;
    endDate?: Date;
    status?: BookingStatus;
    notes?: string | null;
    mileage?: number | null;
    price?: number | null;
    primaryDriver?: CustomerUpdateWithoutPKs | null;
    usageRegion?: RegionUpdateWithoutPKs | null;
    charges?: ChargeUpdate[] | null;
    payments?: PaymentUpdate[] | null;
    additionalDrivers?: AdditionalDriverJTUpdate[] | null;
    id: string;
    primaryDriverId?: string;
    usageRegionId?: string | null;
}

/** Booking without PKs and database generated properties and with all properties optional */
export interface BookingUpdateWithoutPKs {
    startDate?: Date;
    endDate?: Date;
    status?: BookingStatus;
    notes?: string | null;
    mileage?: number | null;
    price?: number | null;
    primaryDriver?: CustomerUpdateWithoutPKs | null;
    usageRegion?: RegionUpdateWithoutPKs | null;
    charges?: ChargeUpdate[] | null;
    payments?: PaymentUpdate[] | null;
    additionalDrivers?: AdditionalDriverJTUpdate[] | null;
    primaryDriverId?: string;
    usageRegionId?: string | null;
}

export interface Charge {
    amount: number;
    description: string;
    group: string;
    timeOfTransaction: Date;
    booking: Booking | null;
    id: string;
    bookingId: string;
    isDeleted: boolean;
    createdDateTime: Date | null;
    lastUpdatedDateTime: Date | null;
    lastModifiedUser: ApplicationUser | null;
    lastModifiedUserId: string | null;
    createdUserId: string | null;
    createdUser: ApplicationUser | null;
}

/** Charge without database generated properties */
export interface ChargeInsert {
    amount: number;
    description: string;
    group: string;
    timeOfTransaction: Date;
    booking: BookingInsert | null;
    bookingId: string;
}

/** Charge with all properties optional except PKs */
export interface ChargeUpdate {
    amount?: number;
    description?: string;
    group?: string;
    timeOfTransaction?: Date;
    booking?: BookingUpdateWithoutPKs | null;
    id: string;
    bookingId?: string;
}

/** Charge without PKs and database generated properties and with all properties optional */
export interface ChargeUpdateWithoutPKs {
    amount?: number;
    description?: string;
    group?: string;
    timeOfTransaction?: Date;
    booking?: BookingUpdateWithoutPKs | null;
    bookingId?: string;
}

export interface ClaimBaseDTO {
    claimType?: CustomClaimsTypesEnum;
    claimValue?: number;
    priorityOfPermission?: number;
    allow?: boolean;
}

export interface ClaimEnumsInApplicationUser {
    id: string;
    claimType: CustomClaimsTypesEnum;
    claimValue: number;
    priorityOfPermission: number;
    allow: boolean;
    recordId: string;
    isDeleted: boolean;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
    record: ApplicationUser;
}

export interface ClaimEnumsInApplicationUserGroup {
    id: string;
    claimType: CustomClaimsTypesEnum;
    claimValue: number;
    priorityOfPermission: number;
    allow: boolean;
    recordId: string;
    isDeleted: boolean;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
    record: ApplicationUserGroup;
}

/** ClaimEnumsInApplicationUserGroup without database generated properties */
export interface ClaimEnumsInApplicationUserGroupInsert {
    claimType?: CustomClaimsTypesEnum;
    claimValue?: number;
    priorityOfPermission?: number;
    allow?: boolean;
    recordId?: string;
    record: ApplicationUserGroupInsert;
}

/** ClaimEnumsInApplicationUserGroup with all properties optional except PKs */
export interface ClaimEnumsInApplicationUserGroupUpdate {
    id: string;
    claimType?: CustomClaimsTypesEnum;
    claimValue?: number;
    priorityOfPermission?: number;
    allow?: boolean;
    recordId?: string;
    record?: ApplicationUserGroupUpdateWithoutPKs;
}

/** ClaimEnumsInApplicationUserGroup without PKs and database generated properties and with all properties optional */
export interface ClaimEnumsInApplicationUserGroupUpdateWithoutPKs {
    claimType?: CustomClaimsTypesEnum;
    claimValue?: number;
    priorityOfPermission?: number;
    allow?: boolean;
    recordId?: string;
    record?: ApplicationUserGroupUpdateWithoutPKs;
}

/** ClaimEnumsInApplicationUser without database generated properties */
export interface ClaimEnumsInApplicationUserInsert {
    claimType?: CustomClaimsTypesEnum;
    claimValue?: number;
    priorityOfPermission?: number;
    allow?: boolean;
    recordId?: string;
    record: ApplicationUserInsert;
}

/** ClaimEnumsInApplicationUser with all properties optional except PKs */
export interface ClaimEnumsInApplicationUserUpdate {
    id: string;
    claimType?: CustomClaimsTypesEnum;
    claimValue?: number;
    priorityOfPermission?: number;
    allow?: boolean;
    recordId?: string;
    record?: ApplicationUserUpdateWithoutPKs;
}

/** ClaimEnumsInApplicationUser without PKs and database generated properties and with all properties optional */
export interface ClaimEnumsInApplicationUserUpdateWithoutPKs {
    claimType?: CustomClaimsTypesEnum;
    claimValue?: number;
    priorityOfPermission?: number;
    allow?: boolean;
    recordId?: string;
    record?: ApplicationUserUpdateWithoutPKs;
}

export interface ClaimEnumsInClaimGroup {
    id: string;
    claimType: CustomClaimsTypesEnum;
    claimValue: number;
    priorityOfPermission: number;
    allow: boolean;
    recordId: string;
    isDeleted: boolean;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
    record: ClaimGroup;
}

/** ClaimEnumsInClaimGroup without database generated properties */
export interface ClaimEnumsInClaimGroupInsert {
    claimType?: CustomClaimsTypesEnum;
    claimValue?: number;
    priorityOfPermission?: number;
    allow?: boolean;
    recordId?: string;
    record: ClaimGroupInsert;
}

/** ClaimEnumsInClaimGroup with all properties optional except PKs */
export interface ClaimEnumsInClaimGroupUpdate {
    id: string;
    claimType?: CustomClaimsTypesEnum;
    claimValue?: number;
    priorityOfPermission?: number;
    allow?: boolean;
    recordId?: string;
    record?: ClaimGroupUpdateWithoutPKs;
}

/** ClaimEnumsInClaimGroup without PKs and database generated properties and with all properties optional */
export interface ClaimEnumsInClaimGroupUpdateWithoutPKs {
    claimType?: CustomClaimsTypesEnum;
    claimValue?: number;
    priorityOfPermission?: number;
    allow?: boolean;
    recordId?: string;
    record?: ClaimGroupUpdateWithoutPKs;
}

export interface ClaimEnumsToAddUpdateDeleteDTO {
    claimSets?: string[];
    claimBaseToAddUpdate?: ClaimBaseDTO[];
    claimEnumsToRemoveValue?: number[];
    removeExistingUnMentionedClaimBase?: boolean;
}

export interface ClaimGroup {
    id: string;
    name: string;
    builtInGroup: boolean;
    claimEnumsInClaimGroups: ClaimEnumsInClaimGroup[] | null;
    claimGroupsInApplicationUserGroups: ClaimGroupsInApplicationUserGroup[] | null;
    claimGroupsInApplicationUsers: ClaimGroupsInApplicationUser[] | null;
    claimGroupsInClaimGroups: ClaimGroupsInClaimGroup[] | null;
    isDeleted: boolean;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
}

export interface ClaimGroupAddUpdateDeleteDTO {
    claimGroupSets?: string[];
    claimGroupsToAddUpdate?: ClaimGroup[];
    claimGroupsToRemove?: string[];
    removeExistingUnMentionedClaimGroups?: boolean;
}

/** ClaimGroup without database generated properties */
export interface ClaimGroupInsert {
    name: string;
    builtInGroup?: boolean;
    claimEnumsInClaimGroups?: ClaimEnumsInClaimGroupInsert[] | null;
    claimGroupsInApplicationUserGroups?: ClaimGroupsInApplicationUserGroupInsert[] | null;
    claimGroupsInApplicationUsers?: ClaimGroupsInApplicationUserInsert[] | null;
    claimGroupsInClaimGroups?: ClaimGroupsInClaimGroupInsert[] | null;
}

export interface ClaimGroupPageWithTotalCountDTO {
    list?: ClaimGroup[] | null;
    totalRecCount?: number;
    totalPageCount?: number;
}

/** ClaimGroup with all properties optional except PKs */
export interface ClaimGroupUpdate {
    id: string;
    name?: string;
    builtInGroup?: boolean;
    claimEnumsInClaimGroups?: ClaimEnumsInClaimGroupUpdate[] | null;
    claimGroupsInApplicationUserGroups?: ClaimGroupsInApplicationUserGroupUpdate[] | null;
    claimGroupsInApplicationUsers?: ClaimGroupsInApplicationUserUpdate[] | null;
    claimGroupsInClaimGroups?: ClaimGroupsInClaimGroupUpdate[] | null;
}

/** ClaimGroup without PKs and database generated properties and with all properties optional */
export interface ClaimGroupUpdateWithoutPKs {
    name?: string;
    builtInGroup?: boolean;
    claimEnumsInClaimGroups?: ClaimEnumsInClaimGroupUpdate[] | null;
    claimGroupsInApplicationUserGroups?: ClaimGroupsInApplicationUserGroupUpdate[] | null;
    claimGroupsInApplicationUsers?: ClaimGroupsInApplicationUserUpdate[] | null;
    claimGroupsInClaimGroups?: ClaimGroupsInClaimGroupUpdate[] | null;
}

export interface ClaimGroupsInApplicationUser {
    id: string;
    claimGroup: ClaimGroup;
    claimGroupId: string;
    record: ApplicationUser;
    recordId: string;
    isDeleted: boolean;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
}

export interface ClaimGroupsInApplicationUserGroup {
    id: string;
    claimGroup: ClaimGroup;
    claimGroupId: string;
    record: ApplicationUserGroup;
    recordId: string;
    isDeleted: boolean;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
}

/** ClaimGroupsInApplicationUserGroup without database generated properties */
export interface ClaimGroupsInApplicationUserGroupInsert {
    claimGroup: ClaimGroupInsert;
    claimGroupId?: string;
    record: ApplicationUserGroupInsert;
    recordId?: string;
}

/** ClaimGroupsInApplicationUserGroup with all properties optional except PKs */
export interface ClaimGroupsInApplicationUserGroupUpdate {
    id: string;
    claimGroup?: ClaimGroupUpdateWithoutPKs;
    claimGroupId?: string;
    record?: ApplicationUserGroupUpdateWithoutPKs;
    recordId?: string;
}

/** ClaimGroupsInApplicationUserGroup without PKs and database generated properties and with all properties optional */
export interface ClaimGroupsInApplicationUserGroupUpdateWithoutPKs {
    claimGroup?: ClaimGroupUpdateWithoutPKs;
    claimGroupId?: string;
    record?: ApplicationUserGroupUpdateWithoutPKs;
    recordId?: string;
}

/** ClaimGroupsInApplicationUser without database generated properties */
export interface ClaimGroupsInApplicationUserInsert {
    claimGroup: ClaimGroupInsert;
    claimGroupId?: string;
    record: ApplicationUserInsert;
    recordId?: string;
}

/** ClaimGroupsInApplicationUser with all properties optional except PKs */
export interface ClaimGroupsInApplicationUserUpdate {
    id: string;
    claimGroup?: ClaimGroupUpdateWithoutPKs;
    claimGroupId?: string;
    record?: ApplicationUserUpdateWithoutPKs;
    recordId?: string;
}

/** ClaimGroupsInApplicationUser without PKs and database generated properties and with all properties optional */
export interface ClaimGroupsInApplicationUserUpdateWithoutPKs {
    claimGroup?: ClaimGroupUpdateWithoutPKs;
    claimGroupId?: string;
    record?: ApplicationUserUpdateWithoutPKs;
    recordId?: string;
}

export interface ClaimGroupsInClaimGroup {
    id: string;
    claimGroup: ClaimGroup;
    claimGroupId: string;
    record: ClaimGroup;
    recordId: string;
    isDeleted: boolean;
    lastUpdatedDateTime: Date | null;
    createdDateTime: Date | null;
}

/** ClaimGroupsInClaimGroup without database generated properties */
export interface ClaimGroupsInClaimGroupInsert {
    claimGroup: ClaimGroupInsert;
    claimGroupId?: string;
    record: ClaimGroupInsert;
    recordId?: string;
}

/** ClaimGroupsInClaimGroup with all properties optional except PKs */
export interface ClaimGroupsInClaimGroupUpdate {
    id: string;
    claimGroup?: ClaimGroupUpdateWithoutPKs;
    claimGroupId?: string;
    record?: ClaimGroupUpdateWithoutPKs;
    recordId?: string;
}

/** ClaimGroupsInClaimGroup without PKs and database generated properties and with all properties optional */
export interface ClaimGroupsInClaimGroupUpdateWithoutPKs {
    claimGroup?: ClaimGroupUpdateWithoutPKs;
    claimGroupId?: string;
    record?: ClaimGroupUpdateWithoutPKs;
    recordId?: string;
}

export enum CustomClaimsTypesEnum {
    ServerClaim = 1,
    UXClaim = 2,
    TableClaim = 4,
}

export interface CustomClaimsTypesEnumStringInt32DictionaryListTuple {
    item1?: CustomClaimsTypesEnum;
    item2?: { [key: string]: number; }[] | null;
}

export interface CustomClaimsTypesEnumStringInt32DictionaryStringTupleListTuple {
    item1?: CustomClaimsTypesEnum;
    item2?: StringInt32DictionaryStringTuple[] | null;
}

export interface Customer {
    name: string;
    address: string;
    dateOfBirth: string;
    licenseDetails: string;
    bookings: Booking[] | null;
    id: string;
    isDeleted: boolean;
    createdDateTime: Date | null;
    lastUpdatedDateTime: Date | null;
    lastModifiedUser: ApplicationUser | null;
    lastModifiedUserId: string | null;
    createdUserId: string | null;
    createdUser: ApplicationUser | null;
}

/** Customer without database generated properties */
export interface CustomerInsert {
    name: string;
    address: string;
    dateOfBirth: string;
    licenseDetails: string;
    bookings?: BookingInsert[] | null;
}

/** Customer with all properties optional except PKs */
export interface CustomerUpdate {
    name?: string;
    address?: string;
    dateOfBirth?: string;
    licenseDetails?: string;
    bookings?: BookingUpdate[] | null;
    id: string;
}

/** Customer without PKs and database generated properties and with all properties optional */
export interface CustomerUpdateWithoutPKs {
    name?: string;
    address?: string;
    dateOfBirth?: string;
    licenseDetails?: string;
    bookings?: BookingUpdate[] | null;
}

export interface DataRecordAddUpdateDeletePermissionTableSubListDTO {
    tableName: string;
    recordIdsInSetToApplyPermissionsTo?: string[];
    recordIdsInSetToRemovePermissionsFrom?: string[];
}

export enum EdmContainerElementKind {
    None = 0,
    EntitySet = 1,
    ActionImport = 2,
    FunctionImport = 3,
    Singleton = 4,
}

export enum EdmExpressionKind {
    None = 0,
    BinaryConstant = 1,
    BooleanConstant = 2,
    DateTimeOffsetConstant = 3,
    DecimalConstant = 4,
    FloatingConstant = 5,
    GuidConstant = 6,
    IntegerConstant = 7,
    StringConstant = 8,
    DurationConstant = 9,
    Null = 10,
    Record = 11,
    Collection = 12,
    Path = 13,
    If = 14,
    Cast = 15,
    IsOf = 16,
    FunctionApplication = 17,
    LabeledExpressionReference = 18,
    Labeled = 19,
    PropertyPath = 20,
    NavigationPropertyPath = 21,
    DateConstant = 22,
    TimeOfDayConstant = 23,
    EnumMember = 24,
    AnnotationPath = 25,
}

export enum EdmSchemaElementKind {
    None = 0,
    TypeDefinition = 1,
    Term = 2,
    Action = 3,
    EntityContainer = 4,
    Function = 5,
}

export enum EdmTypeKind {
    None = 0,
    Primitive = 1,
    Entity = 2,
    Complex = 3,
    Collection = 4,
    EntityReference = 5,
    Enum = 6,
    TypeDefinition = 7,
    Untyped = 8,
    Path = 9,
}

export interface EntityWithPermissionsDTO {
    usersWithPermission?: UserPermissionTypeDTO[];
    userGroupsWithPermission?: UserPermissionTypeDTO[];
    rowId?: string;
    rowDisplayName?: string | null;
}

export interface IEdmDirectValueAnnotationsManager {
}

export interface IEdmEntityContainer {
    readonly name?: string | null;
    readonly schemaElementKind?: EdmSchemaElementKind;
    readonly namespace?: string | null;
    readonly elements?: IEdmEntityContainerElement[] | null;
}

export interface IEdmEntityContainerElement {
    readonly name?: string | null;
    readonly containerElementKind?: EdmContainerElementKind;
    readonly container?: IEdmEntityContainer | null;
}

export interface IEdmExpression {
    readonly expressionKind?: EdmExpressionKind;
}

export interface IEdmModel {
    readonly schemaElements?: IEdmSchemaElement[] | null;
    readonly vocabularyAnnotations?: IEdmVocabularyAnnotation[] | null;
    readonly referencedModels?: IEdmModel[] | null;
    readonly declaredNamespaces?: string[] | null;
    readonly directValueAnnotationsManager?: IEdmDirectValueAnnotationsManager | null;
    readonly entityContainer?: IEdmEntityContainer | null;
}

export interface IEdmSchemaElement {
    readonly name?: string | null;
    readonly schemaElementKind?: EdmSchemaElementKind;
    readonly namespace?: string | null;
}

export interface IEdmTerm {
    readonly name?: string | null;
    readonly schemaElementKind?: EdmSchemaElementKind;
    readonly namespace?: string | null;
    readonly type?: IEdmTypeReference | null;
    readonly appliesTo?: string | null;
    readonly defaultValue?: string | null;
}

export interface IEdmType {
    readonly typeKind?: EdmTypeKind;
}

export interface IEdmTypeReference {
    readonly isNullable?: boolean;
    readonly definition?: IEdmType | null;
}

export interface IEdmVocabularyAnnotatable {
}

export interface IEdmVocabularyAnnotation {
    readonly qualifier?: string | null;
    readonly term?: IEdmTerm | null;
    readonly target?: IEdmVocabularyAnnotatable | null;
    readonly value?: IEdmExpression | null;
    readonly usesDefault?: boolean;
}

export interface ODataEntitySetInfo {
    typeAnnotation?: ODataTypeAnnotation | null;
    url?: string | null;
    name?: string | null;
    title?: string | null;
}

export interface ODataFunctionImportInfo {
    typeAnnotation?: ODataTypeAnnotation | null;
    url?: string | null;
    name?: string | null;
    title?: string | null;
}

export interface ODataServiceDocument {
    typeAnnotation?: ODataTypeAnnotation | null;
    entitySets?: ODataEntitySetInfo[] | null;
    singletons?: ODataSingletonInfo[] | null;
    functionImports?: ODataFunctionImportInfo[] | null;
}

export interface ODataSingletonInfo {
    typeAnnotation?: ODataTypeAnnotation | null;
    url?: string | null;
    name?: string | null;
    title?: string | null;
}

export interface ODataTypeAnnotation {
    readonly typeName?: string | null;
}

export interface Payment {
    amount: number;
    type: PaymentType;
    timeOfTransaction: Date;
    booking: Booking | null;
    id: string;
    bookingId: string;
    isDeleted: boolean;
    createdDateTime: Date | null;
    lastUpdatedDateTime: Date | null;
    lastModifiedUser: ApplicationUser | null;
    lastModifiedUserId: string | null;
    createdUserId: string | null;
    createdUser: ApplicationUser | null;
}

/** Payment without database generated properties */
export interface PaymentInsert {
    amount: number;
    type: PaymentType;
    timeOfTransaction: Date;
    booking: BookingInsert | null;
    bookingId: string;
}

export enum PaymentType {
    Cash = 0,
    Card = 1,
}

/** Payment with all properties optional except PKs */
export interface PaymentUpdate {
    amount?: number;
    type?: PaymentType;
    timeOfTransaction?: Date;
    booking?: BookingUpdateWithoutPKs | null;
    id: string;
    bookingId?: string;
}

/** Payment without PKs and database generated properties and with all properties optional */
export interface PaymentUpdateWithoutPKs {
    amount?: number;
    type?: PaymentType;
    timeOfTransaction?: Date;
    booking?: BookingUpdateWithoutPKs | null;
    bookingId?: string;
}

export enum PermissionTypesOnDataEnum {
    None = 1,
    Read = 2,
    Update = 4,
    Delete = 8,
    All = 14,
}

export interface Region {
    name: string;
    id: string;
    isDeleted: boolean;
    createdDateTime: Date | null;
    lastUpdatedDateTime: Date | null;
    lastModifiedUser: ApplicationUser | null;
    lastModifiedUserId: string | null;
    createdUserId: string | null;
    createdUser: ApplicationUser | null;
}

/** Region without database generated properties */
export interface RegionInsert {
    name: string;
}

/** Region with all properties optional except PKs */
export interface RegionUpdate {
    name?: string;
    id: string;
}

/** Region without PKs and database generated properties and with all properties optional */
export interface RegionUpdateWithoutPKs {
    name?: string;
}

export interface StringBaseDataMultiOwnerListTuple {
    item1?: string | null;
    item2?: BaseDataMultiOwner[] | null;
}

export interface StringInt32DictionaryStringTuple {
    item1?: { [key: string]: number; } | null;
    item2?: string | null;
}

export interface StringStringListTuple {
    item1?: string | null;
    item2?: string[] | null;
}

export interface UserPermissionTypeDTO {
    id?: string;
    permissions?: PermissionTypesOnDataEnum;
}

export interface UserSessionDataDTO {
    claims?: AppClaimsEnum[];
    userId?: string | null;
}

export interface Vehicle {
    fleetEntryDate: string;
    fleetEntryMileage: number;
    status: VehicleStatus;
    expectedExitDate: string | null;
    expectedExitMileage: number | null;
    booking: Booking | null;
    id: string;
    bookingId: string;
    isDeleted: boolean;
    createdDateTime: Date | null;
    lastUpdatedDateTime: Date | null;
    lastModifiedUser: ApplicationUser | null;
    lastModifiedUserId: string | null;
    createdUserId: string | null;
    createdUser: ApplicationUser | null;
}

/** Vehicle without database generated properties */
export interface VehicleInsert {
    fleetEntryDate: string;
    fleetEntryMileage: number;
    status: VehicleStatus;
    expectedExitDate?: string | null;
    expectedExitMileage?: number | null;
    booking: BookingInsert | null;
    bookingId: string;
}

export enum VehicleStatus {
    Available = 0,
    Ready = 1,
    OnHire = 2,
    Returned = 3,
    OffFleet = 4,
}

/** Vehicle with all properties optional except PKs */
export interface VehicleUpdate {
    fleetEntryDate?: string;
    fleetEntryMileage?: number;
    status?: VehicleStatus;
    expectedExitDate?: string | null;
    expectedExitMileage?: number | null;
    booking?: BookingUpdateWithoutPKs | null;
    id: string;
    bookingId?: string;
}

/** Vehicle without PKs and database generated properties and with all properties optional */
export interface VehicleUpdateWithoutPKs {
    fleetEntryDate?: string;
    fleetEntryMileage?: number;
    status?: VehicleStatus;
    expectedExitDate?: string | null;
    expectedExitMileage?: number | null;
    booking?: BookingUpdateWithoutPKs | null;
    bookingId?: string;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}

export class SwaggerException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}