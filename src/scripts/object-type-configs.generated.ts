// AUTO-GENERATED FILE - DO NOT EDIT
// Generated from example-schema copy.json

import { ObjectTypeConfig } from '@src/lib/domain';

export const annotationHotKeysTypeConfig = {
mouse: { type: 'String', isNullable: true },
draw: { type: 'String', isNullable: true },
straightLine: { type: 'String', isNullable: true },
verticalLine: { type: 'String', isNullable: true },
horizontalLine: { type: 'String', isNullable: true },
paintedPath: { type: 'String', isNullable: true },
rectangle: { type: 'String', isNullable: true },
text: { type: 'String', isNullable: true },
openColorchart: { type: 'String', isNullable: true },
increaseWeight: { type: 'String', isNullable: true },
decreaseWeight: { type: 'String', isNullable: true },
undo: { type: 'String', isNullable: true },
redo: { type: 'String', isNullable: true },
split: { type: 'String', isNullable: true },
erase: { type: 'String', isNullable: true },
remove: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<AnnotationHotKeys>;

export const annotationUpdateDtoTypeConfig = {
description: { type: 'String', isNullable: true },
annotations: { isRelation: true, config: gprLocationBaseAnnotationTypeConfig }
  } as const satisfies ObjectTypeConfig<AnnotationUpdateDTO>;


export const applicationUserTypeConfig = {
id: { type: 'Guid', isNullable: false },
oidcId: { type: 'String', isNullable: false },
name: { type: 'String', isNullable: false },
userName: { type: 'String', isNullable: false },
email: { type: 'String', isNullable: true },
applicationUserApplicationUserGroups: { isRelation: true, config: applicationUserApplicationUserGroupTypeConfig },
claimEnumsInApplicationUsers: { isRelation: true, config: claimEnumsInApplicationUserTypeConfig },
claimGroupsInApplicationUsers: { isRelation: true, config: claimGroupsInApplicationUserTypeConfig },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ApplicationUser>;

export const applicationUserApplicationUserGroupTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
applicationUser: applicationUserTypeConfig,
applicationUserId: { type: 'Guid', isNullable: false },
applicationUserGroup: applicationUserGroupTypeConfig,
applicationUserGroupId: { type: 'Guid', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ApplicationUserApplicationUserGroup>;

export const applicationUserApplicationUserGroupPartialTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
applicationUser: applicationUserPartialTypeConfig,
applicationUserId: { type: 'Guid', isNullable: false },
applicationUserGroup: applicationUserGroupPartialTypeConfig,
applicationUserGroupId: { type: 'Guid', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ApplicationUserApplicationUserGroupPartial>;

export const applicationUserApplicationUserGroupPartialExceptIdTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
applicationUser: applicationUserPartialTypeConfig,
applicationUserId: { type: 'Guid', isNullable: false },
applicationUserGroup: applicationUserGroupPartialTypeConfig,
applicationUserGroupId: { type: 'Guid', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ApplicationUserApplicationUserGroupPartialExceptId>;

export const applicationUserGroupTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
applicationUserApplicationUserGroups: { isRelation: true, config: applicationUserApplicationUserGroupTypeConfig },
claimEnumsInApplicationUserGroups: { isRelation: true, config: claimEnumsInApplicationUserGroupTypeConfig },
claimGroupsInApplicationUserGroups: { isRelation: true, config: claimGroupsInApplicationUserGroupTypeConfig },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ApplicationUserGroup>;

export const applicationUserGroupPageWithTotalCountDtoTypeConfig = {
list: { isRelation: true, config: applicationUserGroupTypeConfig },
totalRecCount: { type: 'Int32', isNullable: false },
totalPageCount: { type: 'Int32', isNullable: false }
  } as const satisfies ObjectTypeConfig<ApplicationUserGroupPageWithTotalCountDTO>;

export const applicationUserGroupPartialTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
applicationUserApplicationUserGroups: { isRelation: true, config: applicationUserApplicationUserGroupPartialExceptIdTypeConfig },
claimEnumsInApplicationUserGroups: { isRelation: true, config: claimEnumsInApplicationUserGroupPartialExceptIdTypeConfig },
claimGroupsInApplicationUserGroups: { isRelation: true, config: claimGroupsInApplicationUserGroupPartialExceptIdTypeConfig },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ApplicationUserGroupPartial>;

export const applicationUserGroupPartialExceptIdTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
applicationUserApplicationUserGroups: { isRelation: true, config: applicationUserApplicationUserGroupPartialExceptIdTypeConfig },
claimEnumsInApplicationUserGroups: { isRelation: true, config: claimEnumsInApplicationUserGroupPartialExceptIdTypeConfig },
claimGroupsInApplicationUserGroups: { isRelation: true, config: claimGroupsInApplicationUserGroupPartialExceptIdTypeConfig },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ApplicationUserGroupPartialExceptId>;

export const applicationUserPageWithTotalCountDtoTypeConfig = {
list: { isRelation: true, config: applicationUserTypeConfig },
totalRecCount: { type: 'Int32', isNullable: false },
totalPageCount: { type: 'Int32', isNullable: false }
  } as const satisfies ObjectTypeConfig<ApplicationUserPageWithTotalCountDTO>;

export const applicationUserPartialTypeConfig = {
id: { type: 'Guid', isNullable: false },
oidcId: { type: 'String', isNullable: false },
name: { type: 'String', isNullable: false },
userName: { type: 'String', isNullable: false },
email: { type: 'String', isNullable: true },
applicationUserApplicationUserGroups: { isRelation: true, config: applicationUserApplicationUserGroupPartialExceptIdTypeConfig },
claimEnumsInApplicationUsers: { isRelation: true, config: claimEnumsInApplicationUserPartialExceptIdTypeConfig },
claimGroupsInApplicationUsers: { isRelation: true, config: claimGroupsInApplicationUserPartialExceptIdTypeConfig },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ApplicationUserPartial>;

export const applicationUserPartialExceptIdTypeConfig = {
id: { type: 'Guid', isNullable: false },
oidcId: { type: 'String', isNullable: false },
name: { type: 'String', isNullable: false },
userName: { type: 'String', isNullable: false },
email: { type: 'String', isNullable: true },
applicationUserApplicationUserGroups: { isRelation: true, config: applicationUserApplicationUserGroupPartialExceptIdTypeConfig },
claimEnumsInApplicationUsers: { isRelation: true, config: claimEnumsInApplicationUserPartialExceptIdTypeConfig },
claimGroupsInApplicationUsers: { isRelation: true, config: claimGroupsInApplicationUserPartialExceptIdTypeConfig },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ApplicationUserPartialExceptId>;

export const applicationUsersToApplicationUserGroupsDtoTypeConfig = {
applicationUsersGroups: { isRelation: true, config: { type: 'Guid', isNullable: false } },
applicationUsersToAdd: { isRelation: true, config: { type: 'Guid', isNullable: false } },
applicationUsersToRemove: { isRelation: true, config: { type: 'Guid', isNullable: false } },
removeExistingUnMentioned: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<ApplicationUsersToApplicationUserGroupsDTO>;

export const assetLocationTypeConfig = {
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: true },
networkLocation: networkLocationTypeConfig,
majorUnit: { type: 'Double', isNullable: false },
assetType: assetTypeEnumTypeConfig,
searchRadius: { type: 'Double', isNullable: true },
dateTimeCapturedUTC: { type: 'DateTimeOffset', isNullable: true },
coordinates: doubleDoubleValueTupleTypeConfig,
id: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<AssetLocation>;

export const assetLocationODataPostTypeConfig = {
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: true },
networkLocation: networkLocationTypeConfig,
majorUnit: { type: 'Double', isNullable: false },
assetType: assetTypeEnumTypeConfig,
searchRadius: { type: 'Double', isNullable: true },
dateTimeCapturedUTC: { type: 'DateTimeOffset', isNullable: true },
coordinates: doubleDoubleValueTupleTypeConfig,
id: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<AssetLocationODataPost>;

export const assetLocationPartialTypeConfig = {
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: true },
networkLocation: networkLocationPartialTypeConfig,
majorUnit: { type: 'Double', isNullable: false },
assetType: assetTypeEnumTypeConfig,
searchRadius: { type: 'Double', isNullable: true },
dateTimeCapturedUTC: { type: 'DateTimeOffset', isNullable: true },
coordinates: doubleDoubleValueTupleTypeConfig,
id: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<AssetLocationPartial>;

export const assetLocationPartialExceptIdTypeConfig = {
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: true },
networkLocation: networkLocationPartialTypeConfig,
majorUnit: { type: 'Double', isNullable: false },
assetType: assetTypeEnumTypeConfig,
searchRadius: { type: 'Double', isNullable: true },
dateTimeCapturedUTC: { type: 'DateTimeOffset', isNullable: true },
coordinates: doubleDoubleValueTupleTypeConfig,
id: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<AssetLocationPartialExceptId>;

export const assetLocationSingleResultTypeConfig = {
queryable: { isRelation: true, config: assetLocationTypeConfig }
  } as const satisfies ObjectTypeConfig<AssetLocationSingleResult>;


export const assignFlowToDataDtoTypeConfig = {
pluginProcessVersionId: { type: 'Guid', isNullable: false },
selectedRuns: { isRelation: true, config: { type: 'Guid', isNullable: false } },
selectedNetworkLocations: { isRelation: true, config: { type: 'Guid', isNullable: false } },
selectedProjects: { isRelation: true, config: { type: 'Guid', isNullable: false } },
startProcessing: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<AssignFlowToDataDTO>;

export const baseDataMultiOwnerTypeConfig = {
id: { type: 'Guid', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
appUserOrAppUserGroupId: { type: 'Guid', isNullable: false },
permTypes: permissionTypesOnDataEnumTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<BaseDataMultiOwner>;

export const baseDataMultiOwnerPartialTypeConfig = {
id: { type: 'Guid', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
appUserOrAppUserGroupId: { type: 'Guid', isNullable: false },
permTypes: permissionTypesOnDataEnumTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<BaseDataMultiOwnerPartial>;

export const baseDataMultiOwnerPartialExceptIdTypeConfig = {
id: { type: 'Guid', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
appUserOrAppUserGroupId: { type: 'Guid', isNullable: false },
permTypes: permissionTypesOnDataEnumTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<BaseDataMultiOwnerPartialExceptId>;

export const baseFlowVersionSummaryDtoTypeConfig = {
description: { type: 'String', isNullable: false },
createdAt: { type: 'DateTimeOffset', isNullable: false },
versionId: { type: 'Guid', isNullable: false },
published: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<BaseFlowVersionSummaryDTO>;

export const basketTypeConfig = {
basketOwner: applicationUserTypeConfig,
activeRun: runTypeConfig,
activeNetworkLocation: networkLocationTypeConfig,
basketRuns: { isRelation: true, config: basketRunTypeConfig },
id: { type: 'Guid', isNullable: false },
basketOwnerId: { type: 'Guid', isNullable: false },
activeRunId: { type: 'Guid', isNullable: true },
activeNetworkLocationId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
name: { type: 'String', isNullable: false },
networkLocations: { isRelation: true, config: basketNetworkLocationTypeConfig }
  } as const satisfies ObjectTypeConfig<Basket>;

export const basketInfoDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
activeRunId: { type: 'Guid', isNullable: true },
activeNetworkLocationId: { type: 'Guid', isNullable: true },
runs: { isRelation: true, config: basketRunDtoTypeConfig },
networkLocations: { isRelation: true, config: basketNetworkLocationDtoTypeConfig }
  } as const satisfies ObjectTypeConfig<BasketInfoDTO>;

export const basketNetworkLocationTypeConfig = {
basket: basketTypeConfig,
networkLocation: networkLocationTypeConfig,
surveyMileageRanges: { isRelation: true, config: surveyMileageDtoWithIdTypeConfig },
basketId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<BasketNetworkLocation>;

export const basketNetworkLocationDtoTypeConfig = {
networkLocation: networkLocationTypeConfig,
surveyIds: { isRelation: true, config: { type: 'Guid', isNullable: false } }
  } as const satisfies ObjectTypeConfig<BasketNetworkLocationDTO>;

export const basketNetworkLocationPartialTypeConfig = {
basket: basketPartialTypeConfig,
networkLocation: networkLocationPartialTypeConfig,
surveyMileageRanges: { isRelation: true, config: surveyMileageDtoWithIdTypeConfig },
basketId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<BasketNetworkLocationPartial>;

export const basketNetworkLocationPartialExceptIdTypeConfig = {
basket: basketPartialTypeConfig,
networkLocation: networkLocationPartialTypeConfig,
surveyMileageRanges: { isRelation: true, config: surveyMileageDtoWithIdTypeConfig },
basketId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<BasketNetworkLocationPartialExceptId>;

export const basketNetworkLocationResponseDtoTypeConfig = {
activeNetworkLocation: networkLocationSummaryDtoTypeConfig,
activeSurveys: { isRelation: true, config: surveyMileageDtoWithIdTypeConfig },
message: { type: 'String', isNullable: false }
  } as const satisfies ObjectTypeConfig<BasketNetworkLocationResponseDTO>;

export const basketODataPostTypeConfig = {
basketOwner: applicationUserTypeConfig,
activeRun: runTypeConfig,
activeNetworkLocation: networkLocationTypeConfig,
basketRuns: { isRelation: true, config: basketRunTypeConfig },
id: { type: 'Guid', isNullable: false },
basketOwnerId: { type: 'Guid', isNullable: false },
activeRunId: { type: 'Guid', isNullable: true },
activeNetworkLocationId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
name: { type: 'String', isNullable: false },
networkLocations: { isRelation: true, config: basketNetworkLocationTypeConfig }
  } as const satisfies ObjectTypeConfig<BasketODataPost>;

export const basketPartialTypeConfig = {
basketOwner: applicationUserPartialTypeConfig,
activeRun: runPartialTypeConfig,
activeNetworkLocation: networkLocationPartialTypeConfig,
basketRuns: { isRelation: true, config: basketRunPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
basketOwnerId: { type: 'Guid', isNullable: false },
activeRunId: { type: 'Guid', isNullable: true },
activeNetworkLocationId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
name: { type: 'String', isNullable: false },
networkLocations: { isRelation: true, config: basketNetworkLocationPartialExceptIdTypeConfig }
  } as const satisfies ObjectTypeConfig<BasketPartial>;

export const basketPartialExceptIdTypeConfig = {
basketOwner: applicationUserPartialTypeConfig,
activeRun: runPartialTypeConfig,
activeNetworkLocation: networkLocationPartialTypeConfig,
basketRuns: { isRelation: true, config: basketRunPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
basketOwnerId: { type: 'Guid', isNullable: false },
activeRunId: { type: 'Guid', isNullable: true },
activeNetworkLocationId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
name: { type: 'String', isNullable: false },
networkLocations: { isRelation: true, config: basketNetworkLocationPartialExceptIdTypeConfig }
  } as const satisfies ObjectTypeConfig<BasketPartialExceptId>;

export const basketRunTypeConfig = {
basketId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
basket: basketTypeConfig,
run: runTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<BasketRun>;

export const basketRunDtoTypeConfig = {
run: runTypeConfig
  } as const satisfies ObjectTypeConfig<BasketRunDTO>;

export const basketRunODataPostTypeConfig = {
basketId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
basket: basketTypeConfig,
run: runTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<BasketRunODataPost>;

export const basketRunPartialTypeConfig = {
basketId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
basket: basketPartialTypeConfig,
run: runPartialTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<BasketRunPartial>;

export const basketRunPartialExceptIdTypeConfig = {
basketId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
basket: basketPartialTypeConfig,
run: runPartialTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<BasketRunPartialExceptId>;

export const basketRunResponseTypeConfig = {
activeRun: runTypeConfig,
message: { type: 'String', isNullable: false }
  } as const satisfies ObjectTypeConfig<BasketRunResponse>;

export const basketRunSingleResultTypeConfig = {
queryable: { isRelation: true, config: basketRunTypeConfig }
  } as const satisfies ObjectTypeConfig<BasketRunSingleResult>;

export const basketSingleResultTypeConfig = {
queryable: { isRelation: true, config: basketTypeConfig }
  } as const satisfies ObjectTypeConfig<BasketSingleResult>;

export const captureInstanceTypeConfig = {
captureTicksSinceStart: { type: 'Int32', isNullable: false },
speedInMetersPerSec: { type: 'Double', isNullable: false },
pitchInRadians: { type: 'Double', isNullable: false },
rollInRadians: { type: 'Double', isNullable: false },
headingInRadians: { type: 'Double', isNullable: false },
forwardDirection: { type: 'Boolean', isNullable: false },
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: true },
metersToNextCaptureInstance: { type: 'Double', isNullable: false },
run: runTypeConfig,
networkLocationSurvey: networkLocationSurveyTypeConfig,
edge: graphEdgeTypeConfig,
cumulativeDistance: { type: 'Double', isNullable: false },
majorUnit: { type: 'Double', isNullable: false },
minorUnit: { type: 'Double', isNullable: false },
minorUnitScaled: { type: 'Double', isNullable: false },
projectedMajorUnit: { type: 'Double', isNullable: false },
projectedMinorUnit: { type: 'Double', isNullable: false },
projectedMinorUnitScaled: { type: 'Double', isNullable: false },
coordinates: doubleDoubleValueTupleTypeConfig,
captureTime: { type: 'DateTimeOffset', isNullable: false },
measuredElapsedDistance: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
networkLocationSurveyId: { type: 'Guid', isNullable: true },
edgeId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<CaptureInstance>;

export const captureInstanceODataPostTypeConfig = {
captureTicksSinceStart: { type: 'Int32', isNullable: false },
speedInMetersPerSec: { type: 'Double', isNullable: false },
pitchInRadians: { type: 'Double', isNullable: false },
rollInRadians: { type: 'Double', isNullable: false },
headingInRadians: { type: 'Double', isNullable: false },
forwardDirection: { type: 'Boolean', isNullable: false },
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: true },
metersToNextCaptureInstance: { type: 'Double', isNullable: false },
run: runTypeConfig,
networkLocationSurvey: networkLocationSurveyTypeConfig,
edge: graphEdgeTypeConfig,
cumulativeDistance: { type: 'Double', isNullable: false },
majorUnit: { type: 'Double', isNullable: false },
minorUnit: { type: 'Double', isNullable: false },
minorUnitScaled: { type: 'Double', isNullable: false },
projectedMajorUnit: { type: 'Double', isNullable: false },
projectedMinorUnit: { type: 'Double', isNullable: false },
projectedMinorUnitScaled: { type: 'Double', isNullable: false },
coordinates: doubleDoubleValueTupleTypeConfig,
captureTime: { type: 'DateTimeOffset', isNullable: false },
measuredElapsedDistance: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
networkLocationSurveyId: { type: 'Guid', isNullable: true },
edgeId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<CaptureInstanceODataPost>;

export const captureInstancePartialTypeConfig = {
captureTicksSinceStart: { type: 'Int32', isNullable: false },
speedInMetersPerSec: { type: 'Double', isNullable: false },
pitchInRadians: { type: 'Double', isNullable: false },
rollInRadians: { type: 'Double', isNullable: false },
headingInRadians: { type: 'Double', isNullable: false },
forwardDirection: { type: 'Boolean', isNullable: false },
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: true },
metersToNextCaptureInstance: { type: 'Double', isNullable: false },
run: runPartialTypeConfig,
networkLocationSurvey: networkLocationSurveyPartialTypeConfig,
edge: graphEdgePartialTypeConfig,
cumulativeDistance: { type: 'Double', isNullable: false },
majorUnit: { type: 'Double', isNullable: false },
minorUnit: { type: 'Double', isNullable: false },
minorUnitScaled: { type: 'Double', isNullable: false },
projectedMajorUnit: { type: 'Double', isNullable: false },
projectedMinorUnit: { type: 'Double', isNullable: false },
projectedMinorUnitScaled: { type: 'Double', isNullable: false },
coordinates: doubleDoubleValueTupleTypeConfig,
captureTime: { type: 'DateTimeOffset', isNullable: false },
measuredElapsedDistance: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
networkLocationSurveyId: { type: 'Guid', isNullable: true },
edgeId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<CaptureInstancePartial>;

export const captureInstancePartialExceptIdTypeConfig = {
captureTicksSinceStart: { type: 'Int32', isNullable: false },
speedInMetersPerSec: { type: 'Double', isNullable: false },
pitchInRadians: { type: 'Double', isNullable: false },
rollInRadians: { type: 'Double', isNullable: false },
headingInRadians: { type: 'Double', isNullable: false },
forwardDirection: { type: 'Boolean', isNullable: false },
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: true },
metersToNextCaptureInstance: { type: 'Double', isNullable: false },
run: runPartialTypeConfig,
networkLocationSurvey: networkLocationSurveyPartialTypeConfig,
edge: graphEdgePartialTypeConfig,
cumulativeDistance: { type: 'Double', isNullable: false },
majorUnit: { type: 'Double', isNullable: false },
minorUnit: { type: 'Double', isNullable: false },
minorUnitScaled: { type: 'Double', isNullable: false },
projectedMajorUnit: { type: 'Double', isNullable: false },
projectedMinorUnit: { type: 'Double', isNullable: false },
projectedMinorUnitScaled: { type: 'Double', isNullable: false },
coordinates: doubleDoubleValueTupleTypeConfig,
captureTime: { type: 'DateTimeOffset', isNullable: false },
measuredElapsedDistance: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
networkLocationSurveyId: { type: 'Guid', isNullable: true },
edgeId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<CaptureInstancePartialExceptId>;

export const captureInstanceResultTypeConfig = {
captureInstances: { isRelation: true, config: captureInstanceTypeConfig },
warning: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<CaptureInstanceResult>;

export const captureInstanceSingleResultTypeConfig = {
queryable: { isRelation: true, config: captureInstanceTypeConfig }
  } as const satisfies ObjectTypeConfig<CaptureInstanceSingleResult>;

export const centrelineFileSummaryDtoTypeConfig = {
type: centrelineUploadTypeTypeConfig,
requireMilepostFile: { type: 'Boolean', isNullable: false },
networkName: { type: 'String', isNullable: false },
levelCount: { type: 'Int32', isNullable: false },
levels: { isRelation: true, config: { type: 'String', isNullable: false } },
unit: unitEnumTypeConfig,
startDate: { type: 'String', isNullable: false },
endDate: { type: 'String', isNullable: true },
retainNewerModel: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<CentrelineFileSummaryDTO>;

export const centrelineNodeTypeConfig = {
networkModelVersion: networkModelVersionTypeConfig,
networkLocation: networkLocationTypeConfig,
edge: graphEdgeTypeConfig,
polylineIndex: { type: 'Int32', isNullable: false },
coordinates: doubleDoubleValueTupleTypeConfig,
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: false },
majorUnit: { type: 'Double', isNullable: false },
minorUnit: { type: 'Double', isNullable: false },
cumulativeDistance: { type: 'Double', isNullable: false },
minorUnitScaled: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
edgeId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<CentrelineNode>;

export const centrelineNodeODataPostTypeConfig = {
networkModelVersion: networkModelVersionTypeConfig,
networkLocation: networkLocationTypeConfig,
edge: graphEdgeTypeConfig,
polylineIndex: { type: 'Int32', isNullable: false },
coordinates: doubleDoubleValueTupleTypeConfig,
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: false },
majorUnit: { type: 'Double', isNullable: false },
minorUnit: { type: 'Double', isNullable: false },
cumulativeDistance: { type: 'Double', isNullable: false },
minorUnitScaled: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
edgeId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<CentrelineNodeODataPost>;

export const centrelineNodePartialTypeConfig = {
networkModelVersion: networkModelVersionPartialTypeConfig,
networkLocation: networkLocationPartialTypeConfig,
edge: graphEdgePartialTypeConfig,
polylineIndex: { type: 'Int32', isNullable: false },
coordinates: doubleDoubleValueTupleTypeConfig,
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: false },
majorUnit: { type: 'Double', isNullable: false },
minorUnit: { type: 'Double', isNullable: false },
cumulativeDistance: { type: 'Double', isNullable: false },
minorUnitScaled: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
edgeId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<CentrelineNodePartial>;

export const centrelineNodePartialExceptIdTypeConfig = {
networkModelVersion: networkModelVersionPartialTypeConfig,
networkLocation: networkLocationPartialTypeConfig,
edge: graphEdgePartialTypeConfig,
polylineIndex: { type: 'Int32', isNullable: false },
coordinates: doubleDoubleValueTupleTypeConfig,
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: false },
majorUnit: { type: 'Double', isNullable: false },
minorUnit: { type: 'Double', isNullable: false },
cumulativeDistance: { type: 'Double', isNullable: false },
minorUnitScaled: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
edgeId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<CentrelineNodePartialExceptId>;

export const centrelineNodeSingleResultTypeConfig = {
queryable: { isRelation: true, config: centrelineNodeTypeConfig }
  } as const satisfies ObjectTypeConfig<CentrelineNodeSingleResult>;


export const ciToNetworkProcessingInfoDtoTypeConfig = {
status: registrationProcessingStatusEnumTypeConfig,
taskInfo: { isRelation: true, config: doubleDateTimeValueTupleTypeConfig }
  } as const satisfies ObjectTypeConfig<CiToNetworkProcessingInfoDTO>;

export const claimBaseDtoTypeConfig = {
claimType: customClaimsTypesEnumTypeConfig,
claimValue: { type: 'Int32', isNullable: false },
priorityOfPermission: { type: 'Int32', isNullable: false },
allow: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<ClaimBaseDTO>;

export const claimEnumsInApplicationUserTypeConfig = {
record: applicationUserTypeConfig,
id: { type: 'Guid', isNullable: false },
claimType: customClaimsTypesEnumTypeConfig,
claimValue: { type: 'Int32', isNullable: false },
priorityOfPermission: { type: 'Int32', isNullable: false },
allow: { type: 'Boolean', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimEnumsInApplicationUser>;

export const claimEnumsInApplicationUserGroupTypeConfig = {
record: applicationUserGroupTypeConfig,
id: { type: 'Guid', isNullable: false },
claimType: customClaimsTypesEnumTypeConfig,
claimValue: { type: 'Int32', isNullable: false },
priorityOfPermission: { type: 'Int32', isNullable: false },
allow: { type: 'Boolean', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimEnumsInApplicationUserGroup>;

export const claimEnumsInApplicationUserGroupPartialTypeConfig = {
record: applicationUserGroupPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
claimType: customClaimsTypesEnumTypeConfig,
claimValue: { type: 'Int32', isNullable: false },
priorityOfPermission: { type: 'Int32', isNullable: false },
allow: { type: 'Boolean', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimEnumsInApplicationUserGroupPartial>;

export const claimEnumsInApplicationUserGroupPartialExceptIdTypeConfig = {
record: applicationUserGroupPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
claimType: customClaimsTypesEnumTypeConfig,
claimValue: { type: 'Int32', isNullable: false },
priorityOfPermission: { type: 'Int32', isNullable: false },
allow: { type: 'Boolean', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimEnumsInApplicationUserGroupPartialExceptId>;

export const claimEnumsInApplicationUserPartialTypeConfig = {
record: applicationUserPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
claimType: customClaimsTypesEnumTypeConfig,
claimValue: { type: 'Int32', isNullable: false },
priorityOfPermission: { type: 'Int32', isNullable: false },
allow: { type: 'Boolean', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimEnumsInApplicationUserPartial>;

export const claimEnumsInApplicationUserPartialExceptIdTypeConfig = {
record: applicationUserPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
claimType: customClaimsTypesEnumTypeConfig,
claimValue: { type: 'Int32', isNullable: false },
priorityOfPermission: { type: 'Int32', isNullable: false },
allow: { type: 'Boolean', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimEnumsInApplicationUserPartialExceptId>;

export const claimEnumsInClaimGroupTypeConfig = {
record: claimGroupTypeConfig,
id: { type: 'Guid', isNullable: false },
claimType: customClaimsTypesEnumTypeConfig,
claimValue: { type: 'Int32', isNullable: false },
priorityOfPermission: { type: 'Int32', isNullable: false },
allow: { type: 'Boolean', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimEnumsInClaimGroup>;

export const claimEnumsInClaimGroupPartialTypeConfig = {
record: claimGroupPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
claimType: customClaimsTypesEnumTypeConfig,
claimValue: { type: 'Int32', isNullable: false },
priorityOfPermission: { type: 'Int32', isNullable: false },
allow: { type: 'Boolean', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimEnumsInClaimGroupPartial>;

export const claimEnumsInClaimGroupPartialExceptIdTypeConfig = {
record: claimGroupPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
claimType: customClaimsTypesEnumTypeConfig,
claimValue: { type: 'Int32', isNullable: false },
priorityOfPermission: { type: 'Int32', isNullable: false },
allow: { type: 'Boolean', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimEnumsInClaimGroupPartialExceptId>;

export const claimEnumsToAddUpdateDeleteDtoTypeConfig = {
claimSets: { isRelation: true, config: { type: 'Guid', isNullable: false } },
claimBaseToAddUpdate: { isRelation: true, config: claimBaseDtoTypeConfig },
claimEnumsToRemoveValue: { isRelation: true, config: { type: 'Int32', isNullable: false } },
removeExistingUnMentionedClaimBase: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<ClaimEnumsToAddUpdateDeleteDTO>;

export const claimGroupTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: false },
builtInGroup: { type: 'Boolean', isNullable: false },
claimEnumsInClaimGroups: { isRelation: true, config: claimEnumsInClaimGroupTypeConfig },
claimGroupsInApplicationUserGroups: { isRelation: true, config: claimGroupsInApplicationUserGroupTypeConfig },
claimGroupsInApplicationUsers: { isRelation: true, config: claimGroupsInApplicationUserTypeConfig },
claimGroupsInClaimGroups: { isRelation: true, config: claimGroupsInClaimGroupTypeConfig },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroup>;

export const claimGroupAddUpdateDeleteDtoTypeConfig = {
claimGroupSets: { isRelation: true, config: { type: 'Guid', isNullable: false } },
claimGroupsToAddUpdate: { isRelation: true, config: claimGroupTypeConfig },
claimGroupsToRemove: { isRelation: true, config: { type: 'Guid', isNullable: false } },
removeExistingUnMentionedClaimGroups: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<ClaimGroupAddUpdateDeleteDTO>;

export const claimGroupPageWithTotalCountDtoTypeConfig = {
list: { isRelation: true, config: claimGroupTypeConfig },
totalRecCount: { type: 'Int32', isNullable: false },
totalPageCount: { type: 'Int32', isNullable: false }
  } as const satisfies ObjectTypeConfig<ClaimGroupPageWithTotalCountDTO>;

export const claimGroupPartialTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: false },
builtInGroup: { type: 'Boolean', isNullable: false },
claimEnumsInClaimGroups: { isRelation: true, config: claimEnumsInClaimGroupPartialExceptIdTypeConfig },
claimGroupsInApplicationUserGroups: { isRelation: true, config: claimGroupsInApplicationUserGroupPartialExceptIdTypeConfig },
claimGroupsInApplicationUsers: { isRelation: true, config: claimGroupsInApplicationUserPartialExceptIdTypeConfig },
claimGroupsInClaimGroups: { isRelation: true, config: claimGroupsInClaimGroupPartialExceptIdTypeConfig },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupPartial>;

export const claimGroupPartialExceptIdTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: false },
builtInGroup: { type: 'Boolean', isNullable: false },
claimEnumsInClaimGroups: { isRelation: true, config: claimEnumsInClaimGroupPartialExceptIdTypeConfig },
claimGroupsInApplicationUserGroups: { isRelation: true, config: claimGroupsInApplicationUserGroupPartialExceptIdTypeConfig },
claimGroupsInApplicationUsers: { isRelation: true, config: claimGroupsInApplicationUserPartialExceptIdTypeConfig },
claimGroupsInClaimGroups: { isRelation: true, config: claimGroupsInClaimGroupPartialExceptIdTypeConfig },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupPartialExceptId>;

export const claimGroupsInApplicationUserTypeConfig = {
id: { type: 'Guid', isNullable: false },
claimGroup: claimGroupTypeConfig,
claimGroupId: { type: 'Guid', isNullable: false },
record: applicationUserTypeConfig,
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupsInApplicationUser>;

export const claimGroupsInApplicationUserGroupTypeConfig = {
id: { type: 'Guid', isNullable: false },
claimGroup: claimGroupTypeConfig,
claimGroupId: { type: 'Guid', isNullable: false },
record: applicationUserGroupTypeConfig,
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupsInApplicationUserGroup>;

export const claimGroupsInApplicationUserGroupPartialTypeConfig = {
id: { type: 'Guid', isNullable: false },
claimGroup: claimGroupPartialTypeConfig,
claimGroupId: { type: 'Guid', isNullable: false },
record: applicationUserGroupPartialTypeConfig,
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupsInApplicationUserGroupPartial>;

export const claimGroupsInApplicationUserGroupPartialExceptIdTypeConfig = {
id: { type: 'Guid', isNullable: false },
claimGroup: claimGroupPartialTypeConfig,
claimGroupId: { type: 'Guid', isNullable: false },
record: applicationUserGroupPartialTypeConfig,
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupsInApplicationUserGroupPartialExceptId>;

export const claimGroupsInApplicationUserPartialTypeConfig = {
id: { type: 'Guid', isNullable: false },
claimGroup: claimGroupPartialTypeConfig,
claimGroupId: { type: 'Guid', isNullable: false },
record: applicationUserPartialTypeConfig,
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupsInApplicationUserPartial>;

export const claimGroupsInApplicationUserPartialExceptIdTypeConfig = {
id: { type: 'Guid', isNullable: false },
claimGroup: claimGroupPartialTypeConfig,
claimGroupId: { type: 'Guid', isNullable: false },
record: applicationUserPartialTypeConfig,
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupsInApplicationUserPartialExceptId>;

export const claimGroupsInClaimGroupTypeConfig = {
id: { type: 'Guid', isNullable: false },
claimGroup: claimGroupTypeConfig,
claimGroupId: { type: 'Guid', isNullable: false },
record: claimGroupTypeConfig,
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupsInClaimGroup>;

export const claimGroupsInClaimGroupPartialTypeConfig = {
id: { type: 'Guid', isNullable: false },
claimGroup: claimGroupPartialTypeConfig,
claimGroupId: { type: 'Guid', isNullable: false },
record: claimGroupPartialTypeConfig,
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupsInClaimGroupPartial>;

export const claimGroupsInClaimGroupPartialExceptIdTypeConfig = {
id: { type: 'Guid', isNullable: false },
claimGroup: claimGroupPartialTypeConfig,
claimGroupId: { type: 'Guid', isNullable: false },
record: claimGroupPartialTypeConfig,
recordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<ClaimGroupsInClaimGroupPartialExceptId>;

export const clientTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<Client>;

export const clientODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ClientODataPost>;

export const clientPartialTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ClientPartial>;

export const clientPartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ClientPartialExceptId>;

export const clientSingleResultTypeConfig = {
queryable: { isRelation: true, config: clientTypeConfig }
  } as const satisfies ObjectTypeConfig<ClientSingleResult>;

export const colorbarTypeConfig = {
name: { type: 'String', isNullable: false },
colorstops: { isRelation: true, config: colorstopTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<Colorbar>;

export const colorbarODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
colorstops: { isRelation: true, config: colorstopTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ColorbarODataPost>;

export const colorbarPartialTypeConfig = {
name: { type: 'String', isNullable: false },
colorstops: { isRelation: true, config: colorstopPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ColorbarPartial>;

export const colorbarPartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
colorstops: { isRelation: true, config: colorstopPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ColorbarPartialExceptId>;

export const colorbarSingleResultTypeConfig = {
queryable: { isRelation: true, config: colorbarTypeConfig }
  } as const satisfies ObjectTypeConfig<ColorbarSingleResult>;

export const colorstopTypeConfig = {
offset: { type: 'Double', isNullable: false },
color: { type: 'String', isNullable: false },
colorbar: colorbarTypeConfig,
id: { type: 'Guid', isNullable: false },
colorbarId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<Colorstop>;

export const colorstopODataPostTypeConfig = {
offset: { type: 'Double', isNullable: false },
color: { type: 'String', isNullable: false },
colorbar: colorbarTypeConfig,
id: { type: 'Guid', isNullable: false },
colorbarId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ColorstopODataPost>;

export const colorstopPartialTypeConfig = {
offset: { type: 'Double', isNullable: false },
color: { type: 'String', isNullable: false },
colorbar: colorbarPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
colorbarId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ColorstopPartial>;

export const colorstopPartialExceptIdTypeConfig = {
offset: { type: 'Double', isNullable: false },
color: { type: 'String', isNullable: false },
colorbar: colorbarPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
colorbarId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ColorstopPartialExceptId>;

export const colorstopSingleResultTypeConfig = {
queryable: { isRelation: true, config: colorstopTypeConfig }
  } as const satisfies ObjectTypeConfig<ColorstopSingleResult>;


export const customClaimsTypesEnumStringInt32DictionaryListTupleTypeConfig = {
item1: customClaimsTypesEnumTypeConfig,
item2: { isRelation: true, config: {

  } }
  } as const satisfies ObjectTypeConfig<CustomClaimsTypesEnumStringInt32DictionaryListTuple>;

export const customClaimsTypesEnumStringInt32DictionaryStringTupleListTupleTypeConfig = {
item1: customClaimsTypesEnumTypeConfig,
item2: { isRelation: true, config: stringInt32DictionaryStringTupleTypeConfig }
  } as const satisfies ObjectTypeConfig<CustomClaimsTypesEnumStringInt32DictionaryStringTupleListTuple>;

export const customerTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<Customer>;

export const customerODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<CustomerODataPost>;

export const customerPartialTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<CustomerPartial>;

export const customerPartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<CustomerPartialExceptId>;

export const customerSingleResultTypeConfig = {
queryable: { isRelation: true, config: customerTypeConfig }
  } as const satisfies ObjectTypeConfig<CustomerSingleResult>;

export const dztLocationPointerTypeConfig = {
filePointer: { type: 'String', isNullable: false },
fileChannel: { type: 'Int32', isNullable: false }
  } as const satisfies ObjectTypeConfig<DZTLocationPointer>;

export const dataFromBasketResponseTypeConfig = {
message: { type: 'String', isNullable: true },
runName: { type: 'String', isNullable: true },
dataPath: { type: 'String', isNullable: true },
runMeta: runMetaTypeConfig
  } as const satisfies ObjectTypeConfig<DataFromBasketResponse>;

export const dataMultiOwnerApplicationUserGroupSessionTypeConfig = {
record: sessionTypeConfig,
appUserOrAppUserGroup: applicationUserGroupTypeConfig,
id: { type: 'Guid', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
appUserOrAppUserGroupId: { type: 'Guid', isNullable: false },
permTypes: permissionTypesOnDataEnumTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<DataMultiOwner_ApplicationUserGroup_Session>;

export const dataMultiOwnerApplicationUserGroupSessionPartialTypeConfig = {
record: sessionPartialTypeConfig,
appUserOrAppUserGroup: applicationUserGroupPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
appUserOrAppUserGroupId: { type: 'Guid', isNullable: false },
permTypes: permissionTypesOnDataEnumTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<DataMultiOwner_ApplicationUserGroup_SessionPartial>;

export const dataMultiOwnerApplicationUserGroupSessionPartialExceptIdTypeConfig = {
record: sessionPartialTypeConfig,
appUserOrAppUserGroup: applicationUserGroupPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
appUserOrAppUserGroupId: { type: 'Guid', isNullable: false },
permTypes: permissionTypesOnDataEnumTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<DataMultiOwner_ApplicationUserGroup_SessionPartialExceptId>;

export const dataMultiOwnerApplicationUserSessionTypeConfig = {
record: sessionTypeConfig,
appUserOrAppUserGroup: applicationUserTypeConfig,
id: { type: 'Guid', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
appUserOrAppUserGroupId: { type: 'Guid', isNullable: false },
permTypes: permissionTypesOnDataEnumTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<DataMultiOwner_ApplicationUser_Session>;

export const dataMultiOwnerApplicationUserSessionPartialTypeConfig = {
record: sessionPartialTypeConfig,
appUserOrAppUserGroup: applicationUserPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
appUserOrAppUserGroupId: { type: 'Guid', isNullable: false },
permTypes: permissionTypesOnDataEnumTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<DataMultiOwner_ApplicationUser_SessionPartial>;

export const dataMultiOwnerApplicationUserSessionPartialExceptIdTypeConfig = {
record: sessionPartialTypeConfig,
appUserOrAppUserGroup: applicationUserPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
recordId: { type: 'Guid', isNullable: false },
appUserOrAppUserGroupId: { type: 'Guid', isNullable: false },
permTypes: permissionTypesOnDataEnumTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
createdDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<DataMultiOwner_ApplicationUser_SessionPartialExceptId>;

export const dataRecordAddUpdateDeletePermissionTableSubListDtoTypeConfig = {
tableName: { type: 'String', isNullable: false },
recordIdsInSetToApplyPermissionsTo: { isRelation: true, config: { type: 'Guid', isNullable: false } },
recordIdsInSetToRemovePermissionsFrom: { isRelation: true, config: { type: 'Guid', isNullable: false } }
  } as const satisfies ObjectTypeConfig<DataRecordAddUpdateDeletePermissionTableSubListDTO>;

export const dataRegistrationMsgTypeConfig = {
filePath: { type: 'String', isNullable: true },
msg: { type: 'String', isNullable: false },
level: dataRegistrationMsgLevelTypeConfig,
ruleProcessType: ruleProcessTypeEnumTypeConfig,
runId: { type: 'Guid', isNullable: true },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<DataRegistrationMsg>;


export const dataRegistrationMsgODataPostTypeConfig = {
filePath: { type: 'String', isNullable: true },
msg: { type: 'String', isNullable: false },
level: dataRegistrationMsgLevelTypeConfig,
ruleProcessType: ruleProcessTypeEnumTypeConfig,
runId: { type: 'Guid', isNullable: true },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<DataRegistrationMsgODataPost>;

export const dataRegistrationMsgPartialTypeConfig = {
filePath: { type: 'String', isNullable: true },
msg: { type: 'String', isNullable: false },
level: dataRegistrationMsgLevelTypeConfig,
ruleProcessType: ruleProcessTypeEnumTypeConfig,
runId: { type: 'Guid', isNullable: true },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<DataRegistrationMsgPartial>;

export const dataRegistrationMsgPartialExceptIdTypeConfig = {
filePath: { type: 'String', isNullable: true },
msg: { type: 'String', isNullable: false },
level: dataRegistrationMsgLevelTypeConfig,
ruleProcessType: ruleProcessTypeEnumTypeConfig,
runId: { type: 'Guid', isNullable: true },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<DataRegistrationMsgPartialExceptId>;

export const dataRegistrationMsgSingleResultTypeConfig = {
queryable: { isRelation: true, config: dataRegistrationMsgTypeConfig }
  } as const satisfies ObjectTypeConfig<DataRegistrationMsgSingleResult>;

export const dataSourceTypeConfig = {
dataContext: processingContextTypeTypeConfig,
run: runTypeConfig,
rawDataFromSensor: sensorTypeConfig,
createdByProcessBlock: processingBlockRecordTypeConfig,
createdByPluginIndex: { type: 'Int32', isNullable: true },
populatedAt: { type: 'DateTimeOffset', isNullable: true },
isPopulated: { type: 'Boolean', isNullable: false },
description: { type: 'String', isNullable: false },
createdByVirtualPlugin: { type: 'Boolean', isNullable: false },
dataLocationPointer: { type: 'String', isNullable: false },
type: zarpDataTypeTypeConfig,
pointers: { isRelation: true, config: dataSourcePointerTypeConfig },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: true },
rawDataFromSensorId: { type: 'Guid', isNullable: true },
createdByProcessBlockId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<DataSource>;

export const dataSourceInputTypeConfig = {
dataSource: dataSourceTypeConfig,
pluginIndex: { type: 'Int32', isNullable: false },
id: { type: 'Guid', isNullable: false },
dataSourceId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<DataSourceInput>;

export const dataSourceInputODataPostTypeConfig = {
dataSource: dataSourceTypeConfig,
pluginIndex: { type: 'Int32', isNullable: false },
id: { type: 'Guid', isNullable: false },
dataSourceId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<DataSourceInputODataPost>;

export const dataSourceInputPartialTypeConfig = {
dataSource: dataSourcePartialTypeConfig,
pluginIndex: { type: 'Int32', isNullable: false },
id: { type: 'Guid', isNullable: false },
dataSourceId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<DataSourceInputPartial>;

export const dataSourceInputPartialExceptIdTypeConfig = {
dataSource: dataSourcePartialTypeConfig,
pluginIndex: { type: 'Int32', isNullable: false },
id: { type: 'Guid', isNullable: false },
dataSourceId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<DataSourceInputPartialExceptId>;

export const dataSourceInputSingleResultTypeConfig = {
queryable: { isRelation: true, config: dataSourceInputTypeConfig }
  } as const satisfies ObjectTypeConfig<DataSourceInputSingleResult>;

export const dataSourceODataPostTypeConfig = {
dataContext: processingContextTypeTypeConfig,
run: runTypeConfig,
rawDataFromSensor: sensorTypeConfig,
createdByProcessBlock: processingBlockRecordTypeConfig,
createdByPluginIndex: { type: 'Int32', isNullable: true },
populatedAt: { type: 'DateTimeOffset', isNullable: true },
isPopulated: { type: 'Boolean', isNullable: false },
description: { type: 'String', isNullable: false },
createdByVirtualPlugin: { type: 'Boolean', isNullable: false },
dataLocationPointer: { type: 'String', isNullable: false },
type: zarpDataTypeTypeConfig,
pointers: { isRelation: true, config: dataSourcePointerTypeConfig },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: true },
rawDataFromSensorId: { type: 'Guid', isNullable: true },
createdByProcessBlockId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<DataSourceODataPost>;

export const dataSourcePartialTypeConfig = {
dataContext: processingContextTypeTypeConfig,
run: runPartialTypeConfig,
rawDataFromSensor: sensorPartialTypeConfig,
createdByProcessBlock: processingBlockRecordPartialTypeConfig,
createdByPluginIndex: { type: 'Int32', isNullable: true },
populatedAt: { type: 'DateTimeOffset', isNullable: true },
isPopulated: { type: 'Boolean', isNullable: false },
description: { type: 'String', isNullable: false },
createdByVirtualPlugin: { type: 'Boolean', isNullable: false },
dataLocationPointer: { type: 'String', isNullable: false },
type: zarpDataTypeTypeConfig,
pointers: { isRelation: true, config: dataSourcePointerPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: true },
rawDataFromSensorId: { type: 'Guid', isNullable: true },
createdByProcessBlockId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<DataSourcePartial>;

export const dataSourcePartialExceptIdTypeConfig = {
dataContext: processingContextTypeTypeConfig,
run: runPartialTypeConfig,
rawDataFromSensor: sensorPartialTypeConfig,
createdByProcessBlock: processingBlockRecordPartialTypeConfig,
createdByPluginIndex: { type: 'Int32', isNullable: true },
populatedAt: { type: 'DateTimeOffset', isNullable: true },
isPopulated: { type: 'Boolean', isNullable: false },
description: { type: 'String', isNullable: false },
createdByVirtualPlugin: { type: 'Boolean', isNullable: false },
dataLocationPointer: { type: 'String', isNullable: false },
type: zarpDataTypeTypeConfig,
pointers: { isRelation: true, config: dataSourcePointerPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: true },
rawDataFromSensorId: { type: 'Guid', isNullable: true },
createdByProcessBlockId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<DataSourcePartialExceptId>;

export const dataSourcePointerTypeConfig = {
source: dataSourceTypeConfig,
nodeNumber: { type: 'Int32', isNullable: false },
startTick: { type: 'Int32', isNullable: false },
endTick: { type: 'Int32', isNullable: true },
id: { type: 'Guid', isNullable: false },
sourceId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<DataSourcePointer>;

export const dataSourcePointerODataPostTypeConfig = {
source: dataSourceTypeConfig,
nodeNumber: { type: 'Int32', isNullable: false },
startTick: { type: 'Int32', isNullable: false },
endTick: { type: 'Int32', isNullable: true },
id: { type: 'Guid', isNullable: false },
sourceId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<DataSourcePointerODataPost>;

export const dataSourcePointerPartialTypeConfig = {
source: dataSourcePartialTypeConfig,
nodeNumber: { type: 'Int32', isNullable: false },
startTick: { type: 'Int32', isNullable: false },
endTick: { type: 'Int32', isNullable: true },
id: { type: 'Guid', isNullable: false },
sourceId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<DataSourcePointerPartial>;

export const dataSourcePointerPartialExceptIdTypeConfig = {
source: dataSourcePartialTypeConfig,
nodeNumber: { type: 'Int32', isNullable: false },
startTick: { type: 'Int32', isNullable: false },
endTick: { type: 'Int32', isNullable: true },
id: { type: 'Guid', isNullable: false },
sourceId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<DataSourcePointerPartialExceptId>;

export const dataSourcePointerSingleResultTypeConfig = {
queryable: { isRelation: true, config: dataSourcePointerTypeConfig }
  } as const satisfies ObjectTypeConfig<DataSourcePointerSingleResult>;

export const dataSourceSingleResultTypeConfig = {
queryable: { isRelation: true, config: dataSourceTypeConfig }
  } as const satisfies ObjectTypeConfig<DataSourceSingleResult>;

export const dataSourceSummaryDtoTypeConfig = {
id: { type: 'Guid', isNullable: true },
populatedAt: { type: 'DateTimeOffset', isNullable: true },
createdByPluginIndex: { type: 'Int32', isNullable: true },
dataContext: processingContextTypeTypeConfig,
dataLocationPointer: { type: 'String', isNullable: false },
type: zarpDataTypeTypeConfig,
description: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<DataSourceSummaryDTO>;

export const dataSourceWithGprSensorInfoMetaDtoTypeConfig = {
dataSource: dataSourceSummaryDtoTypeConfig,
metaData: gprSensorInfoTypeConfig
  } as const satisfies ObjectTypeConfig<DataSourceWithGPRSensorInfoMetaDTO>;

export const dataSourceWithGprSensorInfoMetaDtoDataSourceSearchResultDtoTypeConfig = {
rawDataSources: { isRelation: true, config: dataSourceWithGprSensorInfoMetaDtoTypeConfig },
processedDataSources: { isRelation: true, config: parentDataSourceDtoTypeConfig },
error: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<DataSourceWithGPRSensorInfoMetaDTODataSourceSearchResultDTO>;

export const dataSourceWithNullableGprSensorInfoMetaDtoTypeConfig = {
dataSource: dataSourceSummaryDtoTypeConfig,
metaData: gprSensorInfoTypeConfig
  } as const satisfies ObjectTypeConfig<DataSourceWithNullableGPRSensorInfoMetaDTO>;

export const dataSourceWithNullableGprSensorInfoMetaDtoDataSourceSearchResultDtoTypeConfig = {
rawDataSources: { isRelation: true, config: dataSourceWithNullableGprSensorInfoMetaDtoTypeConfig },
processedDataSources: { isRelation: true, config: parentDataSourceDtoTypeConfig },
error: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<DataSourceWithNullableGPRSensorInfoMetaDTODataSourceSearchResultDTO>;

export const dataSourceWithNullableGprSensorInfoMetaDtoNetworkSurveyDataSourceResultDtoTypeConfig = {
results: dataSourceWithNullableGprSensorInfoMetaDtoDataSourceSearchResultDtoTypeConfig,
survey: networkLocationSurveySummaryDtoTypeConfig
  } as const satisfies ObjectTypeConfig<DataSourceWithNullableGPRSensorInfoMetaDTONetworkSurveyDataSourceResultDTO>;

export const dataSourceWithStringMetaDtoTypeConfig = {
dataSource: dataSourceSummaryDtoTypeConfig,
metaData: { type: 'String', isNullable: false }
  } as const satisfies ObjectTypeConfig<DataSourceWithStringMetaDTO>;

export const dataSourceWithStringMetaDtoDataSourceSearchResultDtoTypeConfig = {
rawDataSources: { isRelation: true, config: dataSourceWithStringMetaDtoTypeConfig },
processedDataSources: { isRelation: true, config: parentDataSourceDtoTypeConfig },
error: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<DataSourceWithStringMetaDTODataSourceSearchResultDTO>;

export const doubleDateTimeValueTupleTypeConfig = {
item1: { type: 'Double', isNullable: false },
item2: { type: 'DateTimeOffset', isNullable: false }
  } as const satisfies ObjectTypeConfig<DoubleDateTimeValueTuple>;

export const doubleDoubleValueTupleTypeConfig = {
item1: { type: 'Double', isNullable: false },
item2: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<DoubleDoubleValueTuple>;

export const edgeNodesDtoTypeConfig = {
startNode: graphNodeDtoTypeConfig,
endNode: graphNodeDtoTypeConfig
  } as const satisfies ObjectTypeConfig<EdgeNodesDTO>;





export const entityWithPermissionsDtoTypeConfig = {
usersWithPermission: { isRelation: true, config: userPermissionTypeDtoTypeConfig },
userGroupsWithPermission: { isRelation: true, config: userPermissionTypeDtoTypeConfig },
rowId: { type: 'Guid', isNullable: false },
rowDisplayName: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<EntityWithPermissionsDTO>;

export const flowMatchRequestDtoTypeConfig = {
plugins: { isRelation: true, config: pluginDtoTypeConfig },
subFlows: { isRelation: true, config: pluginSubFlowSummaryDtoTypeConfig }
  } as const satisfies ObjectTypeConfig<FlowMatchRequestDTO>;

export const flowVersionDtoTypeConfig = {
versionId: { type: 'Guid', isNullable: false },
flowId: { type: 'Guid', isNullable: false }
  } as const satisfies ObjectTypeConfig<FlowVersionDTO>;

export const gprLocationBaseAnnotationTypeConfig = {
type: { type: 'String', isNullable: false },
colour: { type: 'String', isNullable: false },
weight: { type: 'Int32', isNullable: false },
name: { type: 'String', isNullable: false },
visible: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<GPRLocationBaseAnnotation>;

export const gprRenderInfoTypeConfig = {
scanCount: { type: 'Int32', isNullable: false },
samplesPerScan: { type: 'Int32', isNullable: false },
frequency: { type: 'String', isNullable: false },
channelCount: { type: 'Int32', isNullable: false },
depth: { type: 'Double', isNullable: false },
range: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<GPRRenderInfo>;

export const gprSensorInfoTypeConfig = {
serialNumber: { type: 'Int32', isNullable: false },
maxOptimal: { type: 'Double', isNullable: false },
minOptimal: { type: 'Double', isNullable: false },
position: { type: 'String', isNullable: true },
frequency: { type: 'Double', isNullable: true },
channel: { type: 'Int32', isNullable: true },
fileChannel: { type: 'Int32', isNullable: false },
range: { type: 'Double', isNullable: true },
depth: { type: 'Double', isNullable: true }
  } as const satisfies ObjectTypeConfig<GPRSensorInfo>;

export const graphEdgeTypeConfig = {
endNode: graphNodeTypeConfig,
startNode: graphNodeTypeConfig,
networkLocation: networkLocationTypeConfig,
reversed: graphEdgeTypeConfig,
id: { type: 'Guid', isNullable: false },
endNodeId: { type: 'Guid', isNullable: false },
startNodeId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
reversedId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<GraphEdge>;

export const graphEdgeDtoTypeConfig = {
startNodeId: { type: 'Guid', isNullable: false },
endNodeId: { type: 'Guid', isNullable: false },
id: { type: 'Guid', isNullable: false }
  } as const satisfies ObjectTypeConfig<GraphEdgeDTO>;

export const graphEdgeInfoDtoTypeConfig = {
networkLocationId: { type: 'Guid', isNullable: false },
unit: unitEnumTypeConfig,
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
locationName: networkLocationNameTypeConfig,
startNodeId: { type: 'Guid', isNullable: false },
endNodeId: { type: 'Guid', isNullable: false },
startRange: { type: 'Double', isNullable: false },
endRange: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<GraphEdgeInfoDTO>;

export const graphEdgeODataPostTypeConfig = {
endNode: graphNodeTypeConfig,
startNode: graphNodeTypeConfig,
networkLocation: networkLocationTypeConfig,
reversed: graphEdgeTypeConfig,
id: { type: 'Guid', isNullable: false },
endNodeId: { type: 'Guid', isNullable: false },
startNodeId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
reversedId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<GraphEdgeODataPost>;

export const graphEdgePartialTypeConfig = {
endNode: graphNodePartialTypeConfig,
startNode: graphNodePartialTypeConfig,
networkLocation: networkLocationPartialTypeConfig,
reversed: graphEdgePartialTypeConfig,
id: { type: 'Guid', isNullable: false },
endNodeId: { type: 'Guid', isNullable: false },
startNodeId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
reversedId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<GraphEdgePartial>;

export const graphEdgePartialExceptIdTypeConfig = {
endNode: graphNodePartialTypeConfig,
startNode: graphNodePartialTypeConfig,
networkLocation: networkLocationPartialTypeConfig,
reversed: graphEdgePartialTypeConfig,
id: { type: 'Guid', isNullable: false },
endNodeId: { type: 'Guid', isNullable: false },
startNodeId: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
reversedId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<GraphEdgePartialExceptId>;

export const graphEdgeSingleResultTypeConfig = {
queryable: { isRelation: true, config: graphEdgeTypeConfig }
  } as const satisfies ObjectTypeConfig<GraphEdgeSingleResult>;

export const graphNodeTypeConfig = {
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: false },
networkModelVersion: networkModelVersionTypeConfig,
type: junctionTypeEnumTypeConfig,
child1Edge: graphEdgeTypeConfig,
child2Edge: graphEdgeTypeConfig,
parentEdge: graphEdgeTypeConfig,
childEdgeIds: { isRelation: true, config: { type: 'Guid', isNullable: false } },
allEdgeIds: { isRelation: true, config: { type: 'Guid', isNullable: false } },
allEdges: { isRelation: true, config: graphEdgeTypeConfig },
coordinates: doubleDoubleValueTupleTypeConfig,
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
child1EdgeId: { type: 'Guid', isNullable: true },
child2EdgeId: { type: 'Guid', isNullable: true },
parentEdgeId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<GraphNode>;

export const graphNodeDtoTypeConfig = {
latitude: { type: 'Double', isNullable: false },
longitude: { type: 'Double', isNullable: false },
altitude: { type: 'Single', isNullable: false },
id: { type: 'Guid', isNullable: false },
edges: { isRelation: true, config: graphEdgeDtoTypeConfig },
coordinates: doubleDoubleValueTupleTypeConfig
  } as const satisfies ObjectTypeConfig<GraphNodeDTO>;

export const graphNodeInfoDtoTypeConfig = {
latitude: { type: 'Double', isNullable: false },
longitude: { type: 'Double', isNullable: false },
altitude: { type: 'Single', isNullable: false },
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
parentEdge: graphEdgeInfoDtoTypeConfig,
child1Edge: graphEdgeInfoDtoTypeConfig,
child2Edge: graphEdgeInfoDtoTypeConfig
  } as const satisfies ObjectTypeConfig<GraphNodeInfoDTO>;

export const graphNodeODataPostTypeConfig = {
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: false },
networkModelVersion: networkModelVersionTypeConfig,
type: junctionTypeEnumTypeConfig,
child1Edge: graphEdgeTypeConfig,
child2Edge: graphEdgeTypeConfig,
parentEdge: graphEdgeTypeConfig,
childEdgeIds: { isRelation: true, config: { type: 'Guid', isNullable: false } },
allEdgeIds: { isRelation: true, config: { type: 'Guid', isNullable: false } },
allEdges: { isRelation: true, config: graphEdgeTypeConfig },
coordinates: doubleDoubleValueTupleTypeConfig,
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
child1EdgeId: { type: 'Guid', isNullable: true },
child2EdgeId: { type: 'Guid', isNullable: true },
parentEdgeId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<GraphNodeODataPost>;

export const graphNodePartialTypeConfig = {
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: false },
networkModelVersion: networkModelVersionPartialTypeConfig,
type: junctionTypeEnumTypeConfig,
child1Edge: graphEdgePartialTypeConfig,
child2Edge: graphEdgePartialTypeConfig,
parentEdge: graphEdgePartialTypeConfig,
childEdgeIds: { isRelation: true, config: { type: 'Guid', isNullable: false } },
allEdgeIds: { isRelation: true, config: { type: 'Guid', isNullable: false } },
allEdges: { isRelation: true, config: graphEdgeTypeConfig },
coordinates: doubleDoubleValueTupleTypeConfig,
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
child1EdgeId: { type: 'Guid', isNullable: true },
child2EdgeId: { type: 'Guid', isNullable: true },
parentEdgeId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<GraphNodePartial>;

export const graphNodePartialExceptIdTypeConfig = {
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: false },
networkModelVersion: networkModelVersionPartialTypeConfig,
type: junctionTypeEnumTypeConfig,
child1Edge: graphEdgePartialTypeConfig,
child2Edge: graphEdgePartialTypeConfig,
parentEdge: graphEdgePartialTypeConfig,
childEdgeIds: { isRelation: true, config: { type: 'Guid', isNullable: false } },
allEdgeIds: { isRelation: true, config: { type: 'Guid', isNullable: false } },
allEdges: { isRelation: true, config: graphEdgeTypeConfig },
coordinates: doubleDoubleValueTupleTypeConfig,
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
child1EdgeId: { type: 'Guid', isNullable: true },
child2EdgeId: { type: 'Guid', isNullable: true },
parentEdgeId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<GraphNodePartialExceptId>;

export const graphNodeSingleResultTypeConfig = {
queryable: { isRelation: true, config: graphNodeTypeConfig }
  } as const satisfies ObjectTypeConfig<GraphNodeSingleResult>;

export const graphSolveIndicatorTypeConfig = {
tick: { type: 'Int32', isNullable: false },
run: runTypeConfig,
tickRange: { type: 'Int32', isNullable: false },
junctionId: { type: 'Guid', isNullable: false },
edgeId: { type: 'Guid', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<GraphSolveIndicator>;

export const graphSolveIndicatorODataPostTypeConfig = {
tick: { type: 'Int32', isNullable: false },
run: runTypeConfig,
tickRange: { type: 'Int32', isNullable: false },
junctionId: { type: 'Guid', isNullable: false },
edgeId: { type: 'Guid', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<GraphSolveIndicatorODataPost>;

export const graphSolveIndicatorPartialTypeConfig = {
tick: { type: 'Int32', isNullable: false },
run: runPartialTypeConfig,
tickRange: { type: 'Int32', isNullable: false },
junctionId: { type: 'Guid', isNullable: false },
edgeId: { type: 'Guid', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<GraphSolveIndicatorPartial>;

export const graphSolveIndicatorPartialExceptIdTypeConfig = {
tick: { type: 'Int32', isNullable: false },
run: runPartialTypeConfig,
tickRange: { type: 'Int32', isNullable: false },
junctionId: { type: 'Guid', isNullable: false },
edgeId: { type: 'Guid', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<GraphSolveIndicatorPartialExceptId>;

export const graphSolveIndicatorSingleResultTypeConfig = {
queryable: { isRelation: true, config: graphSolveIndicatorTypeConfig }
  } as const satisfies ObjectTypeConfig<GraphSolveIndicatorSingleResult>;

export const hotKeySettingTypeConfig = {
user: applicationUserTypeConfig,
hotKeySettings: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
userId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<HotKeySetting>;

export const hotKeySettingODataPostTypeConfig = {
user: applicationUserTypeConfig,
hotKeySettings: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
userId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<HotKeySettingODataPost>;

export const hotKeySettingPartialTypeConfig = {
user: applicationUserPartialTypeConfig,
hotKeySettings: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
userId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<HotKeySettingPartial>;

export const hotKeySettingPartialExceptIdTypeConfig = {
user: applicationUserPartialTypeConfig,
hotKeySettings: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
userId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<HotKeySettingPartialExceptId>;

export const hotKeySettingSingleResultTypeConfig = {
queryable: { isRelation: true, config: hotKeySettingTypeConfig }
  } as const satisfies ObjectTypeConfig<HotKeySettingSingleResult>;

export const hotkeysTypeConfig = {
annotationHotKeys: annotationHotKeysTypeConfig,
navigationHotKeys: navigationHotKeysTypeConfig
  } as const satisfies ObjectTypeConfig<Hotkeys>;

export const iColorTypeConfig = {
red: { type: 'Int32', isNullable: false },
green: { type: 'Int32', isNullable: false },
blue: { type: 'Int32', isNullable: false }
  } as const satisfies ObjectTypeConfig<IColor>;


export const iEdmEntityContainerTypeConfig = {
elements: { isRelation: true, config: iEdmEntityContainerElementTypeConfig },
schemaElementKind: edmSchemaElementKindTypeConfig,
namespace: { type: 'String', isNullable: true },
name: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<IEdmEntityContainer>;

export const iEdmEntityContainerElementTypeConfig = {
containerElementKind: edmContainerElementKindTypeConfig,
container: iEdmEntityContainerTypeConfig,
name: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<IEdmEntityContainerElement>;

export const iEdmExpressionTypeConfig = {
expressionKind: edmExpressionKindTypeConfig
  } as const satisfies ObjectTypeConfig<IEdmExpression>;

export const iEdmModelTypeConfig = {
schemaElements: { isRelation: true, config: iEdmSchemaElementTypeConfig },
vocabularyAnnotations: { isRelation: true, config: iEdmVocabularyAnnotationTypeConfig },
referencedModels: { isRelation: true, config: iEdmModelTypeConfig },
declaredNamespaces: { isRelation: true, config: { type: 'String', isNullable: false } },
directValueAnnotationsManager: iEdmDirectValueAnnotationsManagerTypeConfig,
entityContainer: iEdmEntityContainerTypeConfig
  } as const satisfies ObjectTypeConfig<IEdmModel>;

export const iEdmSchemaElementTypeConfig = {
schemaElementKind: edmSchemaElementKindTypeConfig,
namespace: { type: 'String', isNullable: true },
name: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<IEdmSchemaElement>;

export const iEdmTermTypeConfig = {
type: iEdmTypeReferenceTypeConfig,
appliesTo: { type: 'String', isNullable: true },
defaultValue: { type: 'String', isNullable: true },
schemaElementKind: edmSchemaElementKindTypeConfig,
namespace: { type: 'String', isNullable: true },
name: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<IEdmTerm>;

export const iEdmTypeTypeConfig = {
typeKind: edmTypeKindTypeConfig
  } as const satisfies ObjectTypeConfig<IEdmType>;

export const iEdmTypeReferenceTypeConfig = {
isNullable: { type: 'Boolean', isNullable: false },
definition: iEdmTypeTypeConfig
  } as const satisfies ObjectTypeConfig<IEdmTypeReference>;


export const iEdmVocabularyAnnotationTypeConfig = {
qualifier: { type: 'String', isNullable: true },
term: iEdmTermTypeConfig,
target: iEdmVocabularyAnnotatableTypeConfig,
value: iEdmExpressionTypeConfig,
usesDefault: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<IEdmVocabularyAnnotation>;

export const ilazChunkInfoTypeConfig = {
startByte: { type: 'Int32', isNullable: false },
endByte: { type: 'Int32', isNullable: false },
scanCount: { type: 'Int32', isNullable: false }
  } as const satisfies ObjectTypeConfig<ILAZChunkInfo>;

export const ilazClassificationRecordTypeConfig = {
classificationNumber: { type: 'Int32', isNullable: false },
description: { type: 'String', isNullable: false }
  } as const satisfies ObjectTypeConfig<ILAZClassificationRecord>;

export const ilazInfoTypeConfig = {
pointDataFormat: { type: 'Int32', isNullable: false },
pointDataLength: { type: 'Int32', isNullable: false },
pointRecordCount: { type: 'Int32', isNullable: false },
chunkSize: { type: 'Int32', isNullable: false },
majorVersion: { type: 'Int32', isNullable: false },
minorVersion: { type: 'Int32', isNullable: false },
classificationRecords: { isRelation: true, config: ilazClassificationRecordTypeConfig },
chunks: { isRelation: true, config: ilazChunkInfoTypeConfig },
xScale: { type: 'Double', isNullable: false },
yScale: { type: 'Double', isNullable: false },
zScale: { type: 'Double', isNullable: false },
xOffset: { type: 'Double', isNullable: false },
yOffset: { type: 'Double', isNullable: false },
zOffset: { type: 'Double', isNullable: false },
maxX: { type: 'Double', isNullable: false },
minX: { type: 'Double', isNullable: false },
maxY: { type: 'Double', isNullable: false },
minY: { type: 'Double', isNullable: false },
maxZ: { type: 'Double', isNullable: false },
minZ: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<ILAZInfo>;


export const locationTypeConfig = {
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
altitudeInMeters: { type: 'Single', isNullable: false },
coordinates: doubleDoubleValueTupleTypeConfig
  } as const satisfies ObjectTypeConfig<Location>;

export const locationPointerTypeConfig = {
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
startCIId: { type: 'Guid', isNullable: false },
endCIId: { type: 'Guid', isNullable: true },
captureTicksSinceStart: { type: 'Int32', isNullable: false },
endTicks: { type: 'Int32', isNullable: true },
cumulativeDistance: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<LocationPointer>;

export const metricTypeConfig = {
groupId: { type: 'Guid', isNullable: false },
networkLocationSurveyId: { type: 'Guid', isNullable: false },
networkModelId: { type: 'Guid', isNullable: false },
processingRecordAssignmentId: { type: 'Guid', isNullable: false },
processVersionId: { type: 'Guid', isNullable: false },
projectCode: { type: 'String', isNullable: true },
startTime: { type: 'DateTimeOffset', isNullable: false },
endTime: { type: 'DateTimeOffset', isNullable: false },
startMajorUnit: { type: 'Double', isNullable: false },
startMinorUnit: { type: 'Double', isNullable: false },
endMajorUnit: { type: 'Double', isNullable: false },
endMinorUnit: { type: 'Double', isNullable: false },
startReportedMileage: { type: 'Double', isNullable: false },
startLongitudeInDegrees: { type: 'Double', isNullable: false },
startLatitudeInDegrees: { type: 'Double', isNullable: false },
endLongitudeInDegrees: { type: 'Double', isNullable: false },
endLatitudeInDegrees: { type: 'Double', isNullable: false },
endReportedMileage: { type: 'Double', isNullable: false },
forwardDirection: { type: 'Boolean', isNullable: false },
increasingMileage: { type: 'Boolean', isNullable: false },
type: metricTypeTypeConfig,
name: { type: 'String', isNullable: false },
position: { type: 'String', isNullable: false },
value: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true }
  } as const satisfies ObjectTypeConfig<Metric>;

export const metricSingleResultTypeConfig = {
queryable: { isRelation: true, config: metricTypeConfig }
  } as const satisfies ObjectTypeConfig<MetricSingleResult>;


export const modelUploadConflictsDtoTypeConfig = {
hierarchicalLevels: dataRegistrationMsgLevelTypeConfig,
level1: dataRegistrationMsgLevelTypeConfig,
level2: dataRegistrationMsgLevelTypeConfig,
level3: dataRegistrationMsgLevelTypeConfig,
level4: dataRegistrationMsgLevelTypeConfig,
level5: dataRegistrationMsgLevelTypeConfig,
unit: dataRegistrationMsgLevelTypeConfig,
startDate: dataRegistrationMsgLevelTypeConfig,
endDate: dataRegistrationMsgLevelTypeConfig
  } as const satisfies ObjectTypeConfig<ModelUploadConflictsDTO>;

export const namedEntityDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: false }
  } as const satisfies ObjectTypeConfig<NamedEntityDTO>;

export const navigationHotKeysTypeConfig = {
quarterSkipForward: { type: 'String', isNullable: true },
fullSkipForward: { type: 'String', isNullable: true },
quarterSkipBack: { type: 'String', isNullable: true },
fullSkipBack: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<NavigationHotKeys>;

export const networkCreationSettingsDtoTypeConfig = {
maxCentrelineNodeDistance: { type: 'Double', isNullable: false },
junctionClusteringDistance: { type: 'Double', isNullable: false },
preProcess: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<NetworkCreationSettingsDTO>;

export const networkCreationSummaryDtoTypeConfig = {
settingsUsed: networkCreationSettingsDtoTypeConfig,
uniqueNetworkLocationCount: { type: 'Int32', isNullable: false },
edgeCount: { type: 'Int32', isNullable: false },
nodeCount: { type: 'Int32', isNullable: false },
centrelineNodeCount: { type: 'Int32', isNullable: false },
totalModelDistance: { type: 'Double', isNullable: false },
averageNodeSpacing: { type: 'Double', isNullable: false },
medianMajorUnitSpacingInMeters: { type: 'Double', isNullable: true },
medianMinorUnitDiscrepancy: { type: 'Double', isNullable: true },
locationsWithMinorUnitDiscrepancyOver10Percent: { isRelation: true, config: { type: 'String', isNullable: false } }
  } as const satisfies ObjectTypeConfig<NetworkCreationSummaryDTO>;

export const networkLevelsDtoTypeConfig = {
level1: { isRelation: true, config: { type: 'String', isNullable: false } },
level2: { isRelation: true, config: { type: 'String', isNullable: false } },
level3: { isRelation: true, config: { type: 'String', isNullable: false } },
level4: { isRelation: true, config: { type: 'String', isNullable: false } },
level5: { isRelation: true, config: { type: 'String', isNullable: false } }
  } as const satisfies ObjectTypeConfig<NetworkLevelsDTO>;

export const networkLocationTypeConfig = {
networkModelVersion: networkModelVersionTypeConfig,
level1: { type: 'String', isNullable: true },
level2: { type: 'String', isNullable: true },
level3: { type: 'String', isNullable: true },
level4: { type: 'String', isNullable: true },
level5: { type: 'String', isNullable: true },
centrelines: { isRelation: true, config: centrelineNodeTypeConfig },
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocation>;

export const networkLocationFilterDtoTypeConfig = {
networkLocationIds: { isRelation: true, config: { type: 'Guid', isNullable: false } },
runIds: { isRelation: true, config: { type: 'Guid', isNullable: false } },
latitude: { type: 'Double', isNullable: true },
longitude: { type: 'Double', isNullable: true },
radius: { type: 'Double', isNullable: true },
startKM: { type: 'Double', isNullable: true },
endKM: { type: 'Double', isNullable: true }
  } as const satisfies ObjectTypeConfig<NetworkLocationFilterDTO>;

export const networkLocationFilterResultsTypeConfig = {
filteredNetworkSegmentsAndTypes: { isRelation: true, config: networkSegmentAndTypesDtoTypeConfig },
filteredRunsAndTypes: { isRelation: true, config: runAndTypesDtoTypeConfig }
  } as const satisfies ObjectTypeConfig<NetworkLocationFilterResults>;

export const networkLocationInfoDtoTypeConfig = {
displayName: { type: 'String', isNullable: false },
edgePointers: { isRelation: true, config: { isRelation: true, config: orderedLocationDtoTypeConfig } },
networkUnit: unitEnumTypeConfig,
minimumMileageMeters: { type: 'Double', isNullable: false },
maximumMileageMeters: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<NetworkLocationInfoDTO>;

export const networkLocationNameTypeConfig = {
level1: { type: 'String', isNullable: true },
level2: { type: 'String', isNullable: true },
level3: { type: 'String', isNullable: true },
level4: { type: 'String', isNullable: true },
level5: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<NetworkLocationName>;

export const networkLocationODataPostTypeConfig = {
networkModelVersion: networkModelVersionTypeConfig,
level1: { type: 'String', isNullable: true },
level2: { type: 'String', isNullable: true },
level3: { type: 'String', isNullable: true },
level4: { type: 'String', isNullable: true },
level5: { type: 'String', isNullable: true },
centrelines: { isRelation: true, config: centrelineNodeTypeConfig },
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationODataPost>;

export const networkLocationPartialTypeConfig = {
networkModelVersion: networkModelVersionPartialTypeConfig,
level1: { type: 'String', isNullable: true },
level2: { type: 'String', isNullable: true },
level3: { type: 'String', isNullable: true },
level4: { type: 'String', isNullable: true },
level5: { type: 'String', isNullable: true },
centrelines: { isRelation: true, config: centrelineNodePartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationPartial>;

export const networkLocationPartialExceptIdTypeConfig = {
networkModelVersion: networkModelVersionPartialTypeConfig,
level1: { type: 'String', isNullable: true },
level2: { type: 'String', isNullable: true },
level3: { type: 'String', isNullable: true },
level4: { type: 'String', isNullable: true },
level5: { type: 'String', isNullable: true },
centrelines: { isRelation: true, config: centrelineNodePartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationPartialExceptId>;

export const networkLocationProcessingAssignmentTypeConfig = {
assignedProcess: pluginProcessVersionTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentTypeConfig },
container: networkLocationTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationProcessingAssignment>;

export const networkLocationProcessingAssignmentODataPostTypeConfig = {
assignedProcess: pluginProcessVersionTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentTypeConfig },
container: networkLocationTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationProcessingAssignmentODataPost>;

export const networkLocationProcessingAssignmentPartialTypeConfig = {
assignedProcess: pluginProcessVersionPartialTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentPartialExceptIdTypeConfig },
container: networkLocationPartialTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationProcessingAssignmentPartial>;

export const networkLocationProcessingAssignmentPartialExceptIdTypeConfig = {
assignedProcess: pluginProcessVersionPartialTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentPartialExceptIdTypeConfig },
container: networkLocationPartialTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationProcessingAssignmentPartialExceptId>;

export const networkLocationProcessingAssignmentSingleResultTypeConfig = {
queryable: { isRelation: true, config: networkLocationProcessingAssignmentTypeConfig }
  } as const satisfies ObjectTypeConfig<NetworkLocationProcessingAssignmentSingleResult>;

export const networkLocationSingleResultTypeConfig = {
queryable: { isRelation: true, config: networkLocationTypeConfig }
  } as const satisfies ObjectTypeConfig<NetworkLocationSingleResult>;

export const networkLocationSummaryDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
displayName: { type: 'String', isNullable: false }
  } as const satisfies ObjectTypeConfig<NetworkLocationSummaryDTO>;

export const networkLocationSurveyTypeConfig = {
startTime: { type: 'Int32', isNullable: false },
endTime: { type: 'Int32', isNullable: false },
networkLocation: networkLocationTypeConfig,
run: runTypeConfig,
captureInstances: { isRelation: true, config: captureInstanceTypeConfig },
id: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationSurvey>;

export const networkLocationSurveyODataPostTypeConfig = {
startTime: { type: 'Int32', isNullable: false },
endTime: { type: 'Int32', isNullable: false },
networkLocation: networkLocationTypeConfig,
run: runTypeConfig,
captureInstances: { isRelation: true, config: captureInstanceTypeConfig },
id: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationSurveyODataPost>;

export const networkLocationSurveyPartialTypeConfig = {
startTime: { type: 'Int32', isNullable: false },
endTime: { type: 'Int32', isNullable: false },
networkLocation: networkLocationPartialTypeConfig,
run: runPartialTypeConfig,
captureInstances: { isRelation: true, config: captureInstancePartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationSurveyPartial>;

export const networkLocationSurveyPartialExceptIdTypeConfig = {
startTime: { type: 'Int32', isNullable: false },
endTime: { type: 'Int32', isNullable: false },
networkLocation: networkLocationPartialTypeConfig,
run: runPartialTypeConfig,
captureInstances: { isRelation: true, config: captureInstancePartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationSurveyPartialExceptId>;

export const networkLocationSurveyRequestDtoTypeConfig = {
networkLocationId: { type: 'Guid', isNullable: false },
unit: unitEnumTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkLocationSurveyRequestDTO>;

export const networkLocationSurveySingleResultTypeConfig = {
queryable: { isRelation: true, config: networkLocationSurveyTypeConfig }
  } as const satisfies ObjectTypeConfig<NetworkLocationSurveySingleResult>;

export const networkLocationSurveySummaryDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
runName: { type: 'String', isNullable: false },
startTime: { type: 'Int32', isNullable: false },
endTime: { type: 'Int32', isNullable: false }
  } as const satisfies ObjectTypeConfig<NetworkLocationSurveySummaryDTO>;

export const networkModelTypeConfig = {
name: { type: 'String', isNullable: false },
hierarchyLevels: { type: 'Int32', isNullable: false },
level1Name: { type: 'String', isNullable: true },
level2Name: { type: 'String', isNullable: true },
level3Name: { type: 'String', isNullable: true },
level4Name: { type: 'String', isNullable: true },
level5Name: { type: 'String', isNullable: true },
unit: unitEnumTypeConfig,
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkModel>;

export const networkModelLevelsRangeDtoTypeConfig = {
networkLocationId: { type: 'Guid', isNullable: true },
level1: { type: 'String', isNullable: true },
level2: { type: 'String', isNullable: true },
level3: { type: 'String', isNullable: true },
level4: { type: 'String', isNullable: true },
level5: { type: 'String', isNullable: true },
startMileage: { type: 'Double', isNullable: false },
endMileage: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<NetworkModelLevelsRangeDTO>;

export const networkModelODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
hierarchyLevels: { type: 'Int32', isNullable: false },
level1Name: { type: 'String', isNullable: true },
level2Name: { type: 'String', isNullable: true },
level3Name: { type: 'String', isNullable: true },
level4Name: { type: 'String', isNullable: true },
level5Name: { type: 'String', isNullable: true },
unit: unitEnumTypeConfig,
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkModelODataPost>;

export const networkModelPartialTypeConfig = {
name: { type: 'String', isNullable: false },
hierarchyLevels: { type: 'Int32', isNullable: false },
level1Name: { type: 'String', isNullable: true },
level2Name: { type: 'String', isNullable: true },
level3Name: { type: 'String', isNullable: true },
level4Name: { type: 'String', isNullable: true },
level5Name: { type: 'String', isNullable: true },
unit: unitEnumTypeConfig,
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkModelPartial>;

export const networkModelPartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
hierarchyLevels: { type: 'Int32', isNullable: false },
level1Name: { type: 'String', isNullable: true },
level2Name: { type: 'String', isNullable: true },
level3Name: { type: 'String', isNullable: true },
level4Name: { type: 'String', isNullable: true },
level5Name: { type: 'String', isNullable: true },
unit: unitEnumTypeConfig,
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkModelPartialExceptId>;

export const networkModelSingleResultTypeConfig = {
queryable: { isRelation: true, config: networkModelTypeConfig }
  } as const satisfies ObjectTypeConfig<NetworkModelSingleResult>;

export const networkModelVersionTypeConfig = {
registrationBeganAt: { type: 'DateTimeOffset', isNullable: true },
registrationCompletedAt: { type: 'DateTimeOffset', isNullable: true },
networkModel: networkModelTypeConfig,
startDate: { type: 'String', isNullable: false },
endDate: { type: 'String', isNullable: true },
centrelineFileLocation: { type: 'String', isNullable: false },
milePostFileLocation: { type: 'String', isNullable: true },
networkCreationSummary: networkCreationSummaryDtoTypeConfig,
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
networkModelId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkModelVersion>;

export const networkModelVersionODataPostTypeConfig = {
registrationBeganAt: { type: 'DateTimeOffset', isNullable: true },
registrationCompletedAt: { type: 'DateTimeOffset', isNullable: true },
networkModel: networkModelTypeConfig,
startDate: { type: 'String', isNullable: false },
endDate: { type: 'String', isNullable: true },
centrelineFileLocation: { type: 'String', isNullable: false },
milePostFileLocation: { type: 'String', isNullable: true },
networkCreationSummary: networkCreationSummaryDtoTypeConfig,
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
networkModelId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkModelVersionODataPost>;

export const networkModelVersionPartialTypeConfig = {
registrationBeganAt: { type: 'DateTimeOffset', isNullable: true },
registrationCompletedAt: { type: 'DateTimeOffset', isNullable: true },
networkModel: networkModelPartialTypeConfig,
startDate: { type: 'String', isNullable: false },
endDate: { type: 'String', isNullable: true },
centrelineFileLocation: { type: 'String', isNullable: false },
milePostFileLocation: { type: 'String', isNullable: true },
networkCreationSummary: networkCreationSummaryDtoTypeConfig,
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
networkModelId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkModelVersionPartial>;

export const networkModelVersionPartialExceptIdTypeConfig = {
registrationBeganAt: { type: 'DateTimeOffset', isNullable: true },
registrationCompletedAt: { type: 'DateTimeOffset', isNullable: true },
networkModel: networkModelPartialTypeConfig,
startDate: { type: 'String', isNullable: false },
endDate: { type: 'String', isNullable: true },
centrelineFileLocation: { type: 'String', isNullable: false },
milePostFileLocation: { type: 'String', isNullable: true },
networkCreationSummary: networkCreationSummaryDtoTypeConfig,
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
networkModelId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkModelVersionPartialExceptId>;

export const networkModelVersionSingleResultTypeConfig = {
queryable: { isRelation: true, config: networkModelVersionTypeConfig }
  } as const satisfies ObjectTypeConfig<NetworkModelVersionSingleResult>;

export const networkModelVersionSummaryDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
networkModel: namedEntityDtoTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkModelVersionSummaryDTO>;

export const networkSegmentAndTypesDtoTypeConfig = {
dataTypesForSurveySegment: { isRelation: true, config: zarpDataTypeTypeConfig },
survey: networkLocationSurveyTypeConfig
  } as const satisfies ObjectTypeConfig<NetworkSegmentAndTypesDTO>;

export const networkSurveyLocationPointerTypeConfig = {
mileageMeters: { type: 'Double', isNullable: false },
unit: unitEnumTypeConfig,
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false },
startCIId: { type: 'Guid', isNullable: false },
endCIId: { type: 'Guid', isNullable: true },
captureTicksSinceStart: { type: 'Int32', isNullable: false },
endTicks: { type: 'Int32', isNullable: true },
cumulativeDistance: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<NetworkSurveyLocationPointer>;

export const networkVersionAffectedRunsDtoTypeConfig = {
runNames: { isRelation: true, config: { type: 'String', isNullable: false } },
originalVersionNumber: { type: 'Guid', isNullable: true },
newVersionNumber: { type: 'Guid', isNullable: true }
  } as const satisfies ObjectTypeConfig<NetworkVersionAffectedRunsDTO>;

export const networkVersionUpdateSideEffectsDtoTypeConfig = {
runWithNewVersion: { isRelation: true, config: networkVersionAffectedRunsDtoTypeConfig },
runWithNoVersion: { isRelation: true, config: networkVersionAffectedRunsDtoTypeConfig },
runToBeReregistered: { isRelation: true, config: networkVersionAffectedRunsDtoTypeConfig }
  } as const satisfies ObjectTypeConfig<NetworkVersionUpdateSideEffectsDTO>;

export const oDataEntitySetInfoTypeConfig = {
url: { type: 'String', isNullable: true },
name: { type: 'String', isNullable: true },
title: { type: 'String', isNullable: true },
typeAnnotation: oDataTypeAnnotationTypeConfig
  } as const satisfies ObjectTypeConfig<ODataEntitySetInfo>;

export const oDataFunctionImportInfoTypeConfig = {
url: { type: 'String', isNullable: true },
name: { type: 'String', isNullable: true },
title: { type: 'String', isNullable: true },
typeAnnotation: oDataTypeAnnotationTypeConfig
  } as const satisfies ObjectTypeConfig<ODataFunctionImportInfo>;

export const oDataServiceDocumentTypeConfig = {
entitySets: { isRelation: true, config: oDataEntitySetInfoTypeConfig },
singletons: { isRelation: true, config: oDataSingletonInfoTypeConfig },
functionImports: { isRelation: true, config: oDataFunctionImportInfoTypeConfig },
typeAnnotation: oDataTypeAnnotationTypeConfig
  } as const satisfies ObjectTypeConfig<ODataServiceDocument>;

export const oDataSingletonInfoTypeConfig = {
url: { type: 'String', isNullable: true },
name: { type: 'String', isNullable: true },
title: { type: 'String', isNullable: true },
typeAnnotation: oDataTypeAnnotationTypeConfig
  } as const satisfies ObjectTypeConfig<ODataSingletonInfo>;

export const oDataTypeAnnotationTypeConfig = {
typeName: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<ODataTypeAnnotation>;

export const objectPrimitiveTypeConfig = {
toSubFlow: { type: 'Boolean', isNullable: false },
value: { type: 'String', isNullable: false },
toName: { type: 'String', isNullable: false },
toIndex: { type: 'Int32', isNullable: false },
isOutput: { type: 'Boolean', isNullable: false },
isSetting: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<ObjectPrimitive>;

export const objectPrimitiveLiteralTypeConfig = {
value: { type: 'String', isNullable: false },
toName: { type: 'String', isNullable: false },
toIndex: { type: 'Int32', isNullable: false },
isOutput: { type: 'Boolean', isNullable: false },
isSetting: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<ObjectPrimitiveLiteral>;

export const oidcConfigDtoTypeConfig = {
authority: { type: 'String', isNullable: false },
clientId: { type: 'String', isNullable: false },
clientSecret: { type: 'String', isNullable: true },
scopes: { isRelation: true, config: { type: 'String', isNullable: false } }
  } as const satisfies ObjectTypeConfig<OidcConfigDTO>;

export const orderedLocationDtoTypeConfig = {
idx: { type: 'Int32', isNullable: false },
latitudeInDegrees: { type: 'Double', isNullable: false },
longitudeInDegrees: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<OrderedLocationDTO>;

export const overlappingNetworksResultDtoTypeConfig = {
projectCode: { type: 'String', isNullable: true },
runName: { type: 'String', isNullable: true },
networkLocationDisplayName: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<OverlappingNetworksResultDTO>;

export const parentDataSourceDtoTypeConfig = {
dataSource: dataSourceSummaryDtoTypeConfig,
parents: { isRelation: true, config: dataSourceSummaryDtoTypeConfig },
processingBlockRecordId: { type: 'Guid', isNullable: false }
  } as const satisfies ObjectTypeConfig<ParentDataSourceDTO>;


export const pluginAssemblyTypeConfig = {
fileName: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
version: { type: 'String', isNullable: false },
active: { type: 'Boolean', isNullable: false },
hasPlugins: { type: 'Boolean', isNullable: false },
parent: pluginAssemblyTypeConfig,
folder: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginAssembly>;

export const pluginAssemblyODataPostTypeConfig = {
fileName: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
version: { type: 'String', isNullable: false },
active: { type: 'Boolean', isNullable: false },
hasPlugins: { type: 'Boolean', isNullable: false },
parent: pluginAssemblyTypeConfig,
folder: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginAssemblyODataPost>;

export const pluginAssemblyPartialTypeConfig = {
fileName: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
version: { type: 'String', isNullable: false },
active: { type: 'Boolean', isNullable: false },
hasPlugins: { type: 'Boolean', isNullable: false },
parent: pluginAssemblyPartialTypeConfig,
folder: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginAssemblyPartial>;

export const pluginAssemblyPartialExceptIdTypeConfig = {
fileName: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
version: { type: 'String', isNullable: false },
active: { type: 'Boolean', isNullable: false },
hasPlugins: { type: 'Boolean', isNullable: false },
parent: pluginAssemblyPartialTypeConfig,
folder: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginAssemblyPartialExceptId>;

export const pluginAssemblySingleResultTypeConfig = {
queryable: { isRelation: true, config: pluginAssemblyTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginAssemblySingleResult>;

export const pluginDtoTypeConfig = {
displayName: { type: 'String', isNullable: true },
fullName: { type: 'String', isNullable: false },
inputs: { isRelation: true, config: propertyDtoTypeConfig },
outputs: { isRelation: true, config: propertyDtoTypeConfig },
inputDataType: zarpDataTypeTypeConfig,
outputDataType: zarpDataTypeTypeConfig,
pluginType: pluginVariantsTypeConfig,
isReader: { type: 'Boolean', isNullable: false },
isWriter: { type: 'Boolean', isNullable: false },
position: positionDtoTypeConfig
  } as const satisfies ObjectTypeConfig<PluginDTO>;

export const pluginFlowDtoTypeConfig = {
subFlows: { isRelation: true, config: pluginSubFlowSummaryDtoTypeConfig },
plugins: { isRelation: true, config: pluginDtoTypeConfig },
edges: { isRelation: true, config: pluginFlowEdgeDtoTypeConfig },
primitives: { isRelation: true, config: objectPrimitiveTypeConfig },
inputs: { isRelation: true, config: pluginFlowExternalConnectionDtoTypeConfig },
outputs: { isRelation: true, config: pluginFlowExternalConnectionDtoTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginFlowDTO>;

export const pluginFlowEdgeDtoTypeConfig = {
fromSubFlow: { type: 'Boolean', isNullable: false },
toSubFlow: { type: 'Boolean', isNullable: false },
fromName: { type: 'String', isNullable: false },
fromType: { type: 'String', isNullable: false },
fromIndex: { type: 'Int32', isNullable: false },
toName: { type: 'String', isNullable: false },
toType: { type: 'String', isNullable: false },
toIndex: { type: 'Int32', isNullable: false },
isProcessingInput: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginFlowEdgeDTO>;

export const pluginFlowExternalConnectionDtoTypeConfig = {
options: { isRelation: true, config: { type: 'String', isNullable: false } },
internalName: { type: 'String', isNullable: false },
connectionIndex: { type: 'Int32', isNullable: false },
connectedToSubFlow: { type: 'Boolean', isNullable: false },
name: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: true },
type: { type: 'String', isNullable: false },
isPrimitive: { type: 'Boolean', isNullable: false },
isInitializationVariable: { type: 'Boolean', isNullable: false },
isInput: { type: 'Boolean', isNullable: false },
isRequired: { type: 'Boolean', isNullable: false },
isSetting: { type: 'Boolean', isNullable: false },
defaultValue: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<PluginFlowExternalConnectionDTO>;

export const pluginFlowLiteralTypeConfig = {
plugins: { isRelation: true, config: pluginDtoTypeConfig },
edges: { isRelation: true, config: pluginFlowLiteralEdgeDtoTypeConfig },
primitives: { isRelation: true, config: objectPrimitiveLiteralTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginFlowLiteral>;

export const pluginFlowLiteralEdgeDtoTypeConfig = {
fromName: { type: 'String', isNullable: false },
fromType: { type: 'String', isNullable: false },
fromIndex: { type: 'Int32', isNullable: false },
toName: { type: 'String', isNullable: false },
toType: { type: 'String', isNullable: false },
toIndex: { type: 'Int32', isNullable: false },
isProcessingInput: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginFlowLiteralEdgeDTO>;

export const pluginProcessTypeConfig = {
name: { type: 'String', isNullable: false },
versions: { isRelation: true, config: pluginProcessVersionTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginProcess>;

export const pluginProcessBlockDtoTypeConfig = {
pluginFlow: pluginFlowDtoTypeConfig,
position: positionDtoTypeConfig,
width: { type: 'Double', isNullable: false },
height: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginProcessBlockDTO>;

export const pluginProcessBlockEdgeDtoTypeConfig = {
fromIndex: { type: 'Int32', isNullable: false },
fromBlock: { type: 'Int32', isNullable: false },
toIndex: { type: 'Int32', isNullable: false },
toBlock: { type: 'Int32', isNullable: false },
dataType: zarpDataTypeTypeConfig
  } as const satisfies ObjectTypeConfig<PluginProcessBlockEdgeDTO>;

export const pluginProcessDtoTypeConfig = {
blocks: { isRelation: true, config: pluginProcessBlockDtoTypeConfig },
dependencies: { isRelation: true, config: pluginProcessBlockEdgeDtoTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginProcessDTO>;

export const pluginProcessODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
versions: { isRelation: true, config: pluginProcessVersionTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginProcessODataPost>;

export const pluginProcessPartialTypeConfig = {
name: { type: 'String', isNullable: false },
versions: { isRelation: true, config: pluginProcessVersionPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginProcessPartial>;

export const pluginProcessPartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
versions: { isRelation: true, config: pluginProcessVersionPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginProcessPartialExceptId>;

export const pluginProcessSingleResultTypeConfig = {
queryable: { isRelation: true, config: pluginProcessTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginProcessSingleResult>;

export const pluginProcessToSubFlowLinkTypeConfig = {
subFlowIndex: { type: 'Int32', isNullable: false },
blockIndex: { type: 'Int32', isNullable: false },
parent: pluginProcessVersionTypeConfig,
child: pluginSubFlowVersionTypeConfig,
xPosition: { type: 'Double', isNullable: false },
yPosition: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: false },
childId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginProcessToSubFlowLink>;

export const pluginProcessToSubFlowLinkODataPostTypeConfig = {
subFlowIndex: { type: 'Int32', isNullable: false },
blockIndex: { type: 'Int32', isNullable: false },
parent: pluginProcessVersionTypeConfig,
child: pluginSubFlowVersionTypeConfig,
xPosition: { type: 'Double', isNullable: false },
yPosition: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: false },
childId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginProcessToSubFlowLinkODataPost>;

export const pluginProcessToSubFlowLinkPartialTypeConfig = {
subFlowIndex: { type: 'Int32', isNullable: false },
blockIndex: { type: 'Int32', isNullable: false },
parent: pluginProcessVersionPartialTypeConfig,
child: pluginSubFlowVersionPartialTypeConfig,
xPosition: { type: 'Double', isNullable: false },
yPosition: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: false },
childId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginProcessToSubFlowLinkPartial>;

export const pluginProcessToSubFlowLinkPartialExceptIdTypeConfig = {
subFlowIndex: { type: 'Int32', isNullable: false },
blockIndex: { type: 'Int32', isNullable: false },
parent: pluginProcessVersionPartialTypeConfig,
child: pluginSubFlowVersionPartialTypeConfig,
xPosition: { type: 'Double', isNullable: false },
yPosition: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: false },
childId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginProcessToSubFlowLinkPartialExceptId>;

export const pluginProcessToSubFlowLinkSingleResultTypeConfig = {
queryable: { isRelation: true, config: pluginProcessToSubFlowLinkTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginProcessToSubFlowLinkSingleResult>;

export const pluginProcessVersionTypeConfig = {
flow: pluginProcessTypeConfig,
flowData: { type: 'String', isNullable: false },
unversionedFlowData: unversionedPluginProcessDataTypeConfig,
subFlows: { isRelation: true, config: pluginProcessToSubFlowLinkTypeConfig },
runsAssignedTo: { isRelation: true, config: runProcessingAssignmentTypeConfig },
networkLocationsAssignedTo: { isRelation: true, config: networkLocationProcessingAssignmentTypeConfig },
id: { type: 'Guid', isNullable: false },
flowId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
description: { type: 'String', isNullable: false },
createdAt: { type: 'DateTimeOffset', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginProcessVersion>;

export const pluginProcessVersionODataPostTypeConfig = {
flow: pluginProcessTypeConfig,
flowData: { type: 'String', isNullable: false },
unversionedFlowData: unversionedPluginProcessDataTypeConfig,
subFlows: { isRelation: true, config: pluginProcessToSubFlowLinkTypeConfig },
runsAssignedTo: { isRelation: true, config: runProcessingAssignmentTypeConfig },
networkLocationsAssignedTo: { isRelation: true, config: networkLocationProcessingAssignmentTypeConfig },
id: { type: 'Guid', isNullable: false },
flowId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
description: { type: 'String', isNullable: false },
createdAt: { type: 'DateTimeOffset', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginProcessVersionODataPost>;

export const pluginProcessVersionPartialTypeConfig = {
flow: pluginProcessPartialTypeConfig,
flowData: { type: 'String', isNullable: false },
unversionedFlowData: unversionedPluginProcessDataTypeConfig,
subFlows: { isRelation: true, config: pluginProcessToSubFlowLinkPartialExceptIdTypeConfig },
runsAssignedTo: { isRelation: true, config: runProcessingAssignmentPartialExceptIdTypeConfig },
networkLocationsAssignedTo: { isRelation: true, config: networkLocationProcessingAssignmentPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
flowId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
description: { type: 'String', isNullable: false },
createdAt: { type: 'DateTimeOffset', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginProcessVersionPartial>;

export const pluginProcessVersionPartialExceptIdTypeConfig = {
flow: pluginProcessPartialTypeConfig,
flowData: { type: 'String', isNullable: false },
unversionedFlowData: unversionedPluginProcessDataTypeConfig,
subFlows: { isRelation: true, config: pluginProcessToSubFlowLinkPartialExceptIdTypeConfig },
runsAssignedTo: { isRelation: true, config: runProcessingAssignmentPartialExceptIdTypeConfig },
networkLocationsAssignedTo: { isRelation: true, config: networkLocationProcessingAssignmentPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
flowId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
description: { type: 'String', isNullable: false },
createdAt: { type: 'DateTimeOffset', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginProcessVersionPartialExceptId>;

export const pluginProcessVersionSingleResultTypeConfig = {
queryable: { isRelation: true, config: pluginProcessVersionTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginProcessVersionSingleResult>;

export const pluginProcessVersionSummaryDtoTypeConfig = {
networkLocationsAssignedTo: { isRelation: true, config: networkLocationSummaryDtoTypeConfig },
runsAssignedTo: { isRelation: true, config: namedEntityDtoTypeConfig },
description: { type: 'String', isNullable: false },
createdAt: { type: 'DateTimeOffset', isNullable: false },
versionId: { type: 'Guid', isNullable: false },
published: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginProcessVersionSummaryDTO>;

export const pluginProcessVersionsSummaryDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: false },
versions: { isRelation: true, config: pluginProcessVersionSummaryDtoTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginProcessVersionsSummaryDTO>;

export const pluginPropertyMatchDtoTypeConfig = {
fromSubFlow: { type: 'Boolean', isNullable: false },
toSubFlow: { type: 'Boolean', isNullable: false },
fromName: { type: 'String', isNullable: false },
toName: { type: 'String', isNullable: false },
fromPropertyName: { type: 'String', isNullable: false },
toPropertyName: { type: 'String', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginPropertyMatchDTO>;

export const pluginSettingTypeConfig = {
name: { type: 'String', isNullable: false },
type: { type: 'String', isNullable: false },
pluginFullName: { type: 'String', isNullable: false },
assemblyNameContainingType: { type: 'String', isNullable: false },
associatedSettingValues: { isRelation: true, config: pluginSettingValueTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSetting>;

export const pluginSettingODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
type: { type: 'String', isNullable: false },
pluginFullName: { type: 'String', isNullable: false },
assemblyNameContainingType: { type: 'String', isNullable: false },
associatedSettingValues: { isRelation: true, config: pluginSettingValueTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSettingODataPost>;

export const pluginSettingPartialTypeConfig = {
name: { type: 'String', isNullable: false },
type: { type: 'String', isNullable: false },
pluginFullName: { type: 'String', isNullable: false },
assemblyNameContainingType: { type: 'String', isNullable: false },
associatedSettingValues: { isRelation: true, config: pluginSettingValuePartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSettingPartial>;

export const pluginSettingPartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
type: { type: 'String', isNullable: false },
pluginFullName: { type: 'String', isNullable: false },
assemblyNameContainingType: { type: 'String', isNullable: false },
associatedSettingValues: { isRelation: true, config: pluginSettingValuePartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSettingPartialExceptId>;

export const pluginSettingSingleResultTypeConfig = {
queryable: { isRelation: true, config: pluginSettingTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginSettingSingleResult>;

export const pluginSettingValueTypeConfig = {
value: { type: 'String', isNullable: false },
propertyLevel: propertyLevelEnumTypeConfig,
session: sessionTypeConfig,
surveyVehicle: surveyVehicleTypeConfig,
setting: pluginSettingTypeConfig,
id: { type: 'Guid', isNullable: false },
sessionId: { type: 'Guid', isNullable: true },
surveyVehicleId: { type: 'Guid', isNullable: true },
settingId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSettingValue>;

export const pluginSettingValueODataPostTypeConfig = {
value: { type: 'String', isNullable: false },
propertyLevel: propertyLevelEnumTypeConfig,
session: sessionTypeConfig,
surveyVehicle: surveyVehicleTypeConfig,
setting: pluginSettingTypeConfig,
id: { type: 'Guid', isNullable: false },
sessionId: { type: 'Guid', isNullable: true },
surveyVehicleId: { type: 'Guid', isNullable: true },
settingId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSettingValueODataPost>;

export const pluginSettingValuePartialTypeConfig = {
value: { type: 'String', isNullable: false },
propertyLevel: propertyLevelEnumTypeConfig,
session: sessionPartialTypeConfig,
surveyVehicle: surveyVehiclePartialTypeConfig,
setting: pluginSettingPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
sessionId: { type: 'Guid', isNullable: true },
surveyVehicleId: { type: 'Guid', isNullable: true },
settingId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSettingValuePartial>;

export const pluginSettingValuePartialExceptIdTypeConfig = {
value: { type: 'String', isNullable: false },
propertyLevel: propertyLevelEnumTypeConfig,
session: sessionPartialTypeConfig,
surveyVehicle: surveyVehiclePartialTypeConfig,
setting: pluginSettingPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
sessionId: { type: 'Guid', isNullable: true },
surveyVehicleId: { type: 'Guid', isNullable: true },
settingId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSettingValuePartialExceptId>;

export const pluginSettingValueSingleResultTypeConfig = {
queryable: { isRelation: true, config: pluginSettingValueTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginSettingValueSingleResult>;

export const pluginSubFlowTypeConfig = {
name: { type: 'String', isNullable: false },
versions: { isRelation: true, config: pluginSubFlowVersionTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSubFlow>;

export const pluginSubFlowODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
versions: { isRelation: true, config: pluginSubFlowVersionTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSubFlowODataPost>;

export const pluginSubFlowPartialTypeConfig = {
name: { type: 'String', isNullable: false },
versions: { isRelation: true, config: pluginSubFlowVersionPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSubFlowPartial>;

export const pluginSubFlowPartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
versions: { isRelation: true, config: pluginSubFlowVersionPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSubFlowPartialExceptId>;

export const pluginSubFlowSingleResultTypeConfig = {
queryable: { isRelation: true, config: pluginSubFlowTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginSubFlowSingleResult>;

export const pluginSubFlowSummaryDtoTypeConfig = {
createdAt: { type: 'DateTimeOffset', isNullable: false },
name: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
flowId: { type: 'Guid', isNullable: false },
inputs: { isRelation: true, config: pluginFlowExternalConnectionDtoTypeConfig },
outputs: { isRelation: true, config: pluginFlowExternalConnectionDtoTypeConfig },
position: positionDtoTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSubFlowSummaryDTO>;

export const pluginSubFlowToSubFlowLinkTypeConfig = {
subFlowIndex: { type: 'Int32', isNullable: false },
parent: pluginSubFlowVersionTypeConfig,
child: pluginSubFlowVersionTypeConfig,
xPosition: { type: 'Double', isNullable: false },
yPosition: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: false },
childId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSubFlowToSubFlowLink>;

export const pluginSubFlowToSubFlowLinkODataPostTypeConfig = {
subFlowIndex: { type: 'Int32', isNullable: false },
parent: pluginSubFlowVersionTypeConfig,
child: pluginSubFlowVersionTypeConfig,
xPosition: { type: 'Double', isNullable: false },
yPosition: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: false },
childId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSubFlowToSubFlowLinkODataPost>;

export const pluginSubFlowToSubFlowLinkPartialTypeConfig = {
subFlowIndex: { type: 'Int32', isNullable: false },
parent: pluginSubFlowVersionPartialTypeConfig,
child: pluginSubFlowVersionPartialTypeConfig,
xPosition: { type: 'Double', isNullable: false },
yPosition: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: false },
childId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSubFlowToSubFlowLinkPartial>;

export const pluginSubFlowToSubFlowLinkPartialExceptIdTypeConfig = {
subFlowIndex: { type: 'Int32', isNullable: false },
parent: pluginSubFlowVersionPartialTypeConfig,
child: pluginSubFlowVersionPartialTypeConfig,
xPosition: { type: 'Double', isNullable: false },
yPosition: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
parentId: { type: 'Guid', isNullable: false },
childId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<PluginSubFlowToSubFlowLinkPartialExceptId>;

export const pluginSubFlowToSubFlowLinkSingleResultTypeConfig = {
queryable: { isRelation: true, config: pluginSubFlowToSubFlowLinkTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginSubFlowToSubFlowLinkSingleResult>;

export const pluginSubFlowVersionTypeConfig = {
flow: pluginSubFlowTypeConfig,
publishedVersion: { type: 'Boolean', isNullable: false },
flowData: { type: 'String', isNullable: false },
unversionedFlowData: unversionedPluginSubFlowDataTypeConfig,
subFlows: { isRelation: true, config: pluginSubFlowToSubFlowLinkTypeConfig },
id: { type: 'Guid', isNullable: false },
flowId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
description: { type: 'String', isNullable: false },
createdAt: { type: 'DateTimeOffset', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginSubFlowVersion>;

export const pluginSubFlowVersionODataPostTypeConfig = {
flow: pluginSubFlowTypeConfig,
publishedVersion: { type: 'Boolean', isNullable: false },
flowData: { type: 'String', isNullable: false },
unversionedFlowData: unversionedPluginSubFlowDataTypeConfig,
subFlows: { isRelation: true, config: pluginSubFlowToSubFlowLinkTypeConfig },
id: { type: 'Guid', isNullable: false },
flowId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
description: { type: 'String', isNullable: false },
createdAt: { type: 'DateTimeOffset', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginSubFlowVersionODataPost>;

export const pluginSubFlowVersionPartialTypeConfig = {
flow: pluginSubFlowPartialTypeConfig,
publishedVersion: { type: 'Boolean', isNullable: false },
flowData: { type: 'String', isNullable: false },
unversionedFlowData: unversionedPluginSubFlowDataTypeConfig,
subFlows: { isRelation: true, config: pluginSubFlowToSubFlowLinkPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
flowId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
description: { type: 'String', isNullable: false },
createdAt: { type: 'DateTimeOffset', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginSubFlowVersionPartial>;

export const pluginSubFlowVersionPartialExceptIdTypeConfig = {
flow: pluginSubFlowPartialTypeConfig,
publishedVersion: { type: 'Boolean', isNullable: false },
flowData: { type: 'String', isNullable: false },
unversionedFlowData: unversionedPluginSubFlowDataTypeConfig,
subFlows: { isRelation: true, config: pluginSubFlowToSubFlowLinkPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
flowId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
description: { type: 'String', isNullable: false },
createdAt: { type: 'DateTimeOffset', isNullable: false }
  } as const satisfies ObjectTypeConfig<PluginSubFlowVersionPartialExceptId>;

export const pluginSubFlowVersionSingleResultTypeConfig = {
queryable: { isRelation: true, config: pluginSubFlowVersionTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginSubFlowVersionSingleResult>;

export const pluginSubFlowVersionsSummaryDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: false },
versions: { isRelation: true, config: baseFlowVersionSummaryDtoTypeConfig }
  } as const satisfies ObjectTypeConfig<PluginSubFlowVersionsSummaryDTO>;

export const pluginUploadResultTypeConfig = {
successful: { isRelation: true, config: { type: 'String', isNullable: false } },
failed: { isRelation: true, config: { type: 'String', isNullable: false } },
warning: { isRelation: true, config: { type: 'String', isNullable: false } }
  } as const satisfies ObjectTypeConfig<PluginUploadResult>;


export const positionDtoTypeConfig = {
x: { type: 'Double', isNullable: false },
y: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<PositionDTO>;

export const processingBlockExecutionRecordTypeConfig = {
recordAssignment: processingRecordAssignmentTypeConfig,
block: processingBlockRecordTypeConfig,
executionTime: { type: 'DateTimeOffset', isNullable: false },
id: { type: 'Guid', isNullable: false },
recordAssignmentId: { type: 'Guid', isNullable: false },
blockId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingBlockExecutionRecord>;

export const processingBlockExecutionRecordPartialTypeConfig = {
recordAssignment: processingRecordAssignmentPartialTypeConfig,
block: processingBlockRecordPartialTypeConfig,
executionTime: { type: 'DateTimeOffset', isNullable: false },
id: { type: 'Guid', isNullable: false },
recordAssignmentId: { type: 'Guid', isNullable: false },
blockId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingBlockExecutionRecordPartial>;

export const processingBlockExecutionRecordPartialExceptIdTypeConfig = {
recordAssignment: processingRecordAssignmentPartialTypeConfig,
block: processingBlockRecordPartialTypeConfig,
executionTime: { type: 'DateTimeOffset', isNullable: false },
id: { type: 'Guid', isNullable: false },
recordAssignmentId: { type: 'Guid', isNullable: false },
blockId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingBlockExecutionRecordPartialExceptId>;

export const processingBlockRecordTypeConfig = {
processingRecord: processingRecordTypeConfig,
fullProcessBlockJson: { type: 'String', isNullable: false },
fullProcessBlock: pluginFlowLiteralTypeConfig,
pluginProcessBlockIndex: { type: 'Int32', isNullable: false },
outputs: { isRelation: true, config: dataSourceTypeConfig },
inputs: { isRelation: true, config: dataSourceInputTypeConfig },
id: { type: 'Guid', isNullable: false },
processingRecordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingBlockRecord>;

export const processingBlockRecordODataPostTypeConfig = {
processingRecord: processingRecordTypeConfig,
fullProcessBlockJson: { type: 'String', isNullable: false },
fullProcessBlock: pluginFlowLiteralTypeConfig,
pluginProcessBlockIndex: { type: 'Int32', isNullable: false },
outputs: { isRelation: true, config: dataSourceTypeConfig },
inputs: { isRelation: true, config: dataSourceInputTypeConfig },
id: { type: 'Guid', isNullable: false },
processingRecordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingBlockRecordODataPost>;

export const processingBlockRecordPartialTypeConfig = {
processingRecord: processingRecordPartialTypeConfig,
fullProcessBlockJson: { type: 'String', isNullable: false },
fullProcessBlock: pluginFlowLiteralTypeConfig,
pluginProcessBlockIndex: { type: 'Int32', isNullable: false },
outputs: { isRelation: true, config: dataSourcePartialExceptIdTypeConfig },
inputs: { isRelation: true, config: dataSourceInputPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
processingRecordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingBlockRecordPartial>;

export const processingBlockRecordPartialExceptIdTypeConfig = {
processingRecord: processingRecordPartialTypeConfig,
fullProcessBlockJson: { type: 'String', isNullable: false },
fullProcessBlock: pluginFlowLiteralTypeConfig,
pluginProcessBlockIndex: { type: 'Int32', isNullable: false },
outputs: { isRelation: true, config: dataSourcePartialExceptIdTypeConfig },
inputs: { isRelation: true, config: dataSourceInputPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
processingRecordId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingBlockRecordPartialExceptId>;

export const processingBlockRecordSingleResultTypeConfig = {
queryable: { isRelation: true, config: processingBlockRecordTypeConfig }
  } as const satisfies ObjectTypeConfig<ProcessingBlockRecordSingleResult>;


export const processingRecordTypeConfig = {
description: { type: 'String', isNullable: false },
blocks: { isRelation: true, config: processingBlockRecordTypeConfig },
logPath: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRecord>;

export const processingRecordAssignmentTypeConfig = {
assignedProcess: pluginProcessVersionTypeConfig,
runRecord: processingRunRecordTypeConfig,
run: runTypeConfig,
project: projectTypeConfig,
networkLocation: networkLocationTypeConfig,
runStartTime: { type: 'Int32', isNullable: false },
runEndTime: { type: 'Int32', isNullable: false },
blockExecutionRecords: { isRelation: true, config: processingBlockExecutionRecordTypeConfig },
id: { type: 'Guid', isNullable: false },
assignedProcessId: { type: 'Guid', isNullable: false },
runRecordId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
projectId: { type: 'Guid', isNullable: true },
networkLocationId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRecordAssignment>;

export const processingRecordAssignmentODataPostTypeConfig = {
assignedProcess: pluginProcessVersionTypeConfig,
runRecord: processingRunRecordTypeConfig,
run: runTypeConfig,
project: projectTypeConfig,
networkLocation: networkLocationTypeConfig,
runStartTime: { type: 'Int32', isNullable: false },
runEndTime: { type: 'Int32', isNullable: false },
blockExecutionRecords: { isRelation: true, config: processingBlockExecutionRecordTypeConfig },
id: { type: 'Guid', isNullable: false },
assignedProcessId: { type: 'Guid', isNullable: false },
runRecordId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
projectId: { type: 'Guid', isNullable: true },
networkLocationId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRecordAssignmentODataPost>;

export const processingRecordAssignmentPartialTypeConfig = {
assignedProcess: pluginProcessVersionPartialTypeConfig,
runRecord: processingRunRecordPartialTypeConfig,
run: runPartialTypeConfig,
project: projectPartialTypeConfig,
networkLocation: networkLocationPartialTypeConfig,
runStartTime: { type: 'Int32', isNullable: false },
runEndTime: { type: 'Int32', isNullable: false },
blockExecutionRecords: { isRelation: true, config: processingBlockExecutionRecordPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
assignedProcessId: { type: 'Guid', isNullable: false },
runRecordId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
projectId: { type: 'Guid', isNullable: true },
networkLocationId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRecordAssignmentPartial>;

export const processingRecordAssignmentPartialExceptIdTypeConfig = {
assignedProcess: pluginProcessVersionPartialTypeConfig,
runRecord: processingRunRecordPartialTypeConfig,
run: runPartialTypeConfig,
project: projectPartialTypeConfig,
networkLocation: networkLocationPartialTypeConfig,
runStartTime: { type: 'Int32', isNullable: false },
runEndTime: { type: 'Int32', isNullable: false },
blockExecutionRecords: { isRelation: true, config: processingBlockExecutionRecordPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
assignedProcessId: { type: 'Guid', isNullable: false },
runRecordId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
projectId: { type: 'Guid', isNullable: true },
networkLocationId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRecordAssignmentPartialExceptId>;

export const processingRecordAssignmentSingleResultTypeConfig = {
queryable: { isRelation: true, config: processingRecordAssignmentTypeConfig }
  } as const satisfies ObjectTypeConfig<ProcessingRecordAssignmentSingleResult>;

export const processingRecordODataPostTypeConfig = {
description: { type: 'String', isNullable: false },
blocks: { isRelation: true, config: processingBlockRecordTypeConfig },
logPath: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRecordODataPost>;

export const processingRecordPartialTypeConfig = {
description: { type: 'String', isNullable: false },
blocks: { isRelation: true, config: processingBlockRecordPartialExceptIdTypeConfig },
logPath: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRecordPartial>;

export const processingRecordPartialExceptIdTypeConfig = {
description: { type: 'String', isNullable: false },
blocks: { isRelation: true, config: processingBlockRecordPartialExceptIdTypeConfig },
logPath: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRecordPartialExceptId>;

export const processingRecordSingleResultTypeConfig = {
queryable: { isRelation: true, config: processingRecordTypeConfig }
  } as const satisfies ObjectTypeConfig<ProcessingRecordSingleResult>;

export const processingRunRecordTypeConfig = {
run: runTypeConfig,
project: projectTypeConfig,
flowUsed: pluginProcessVersionTypeConfig,
records: { isRelation: true, config: processingRecordTypeConfig },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
projectId: { type: 'Guid', isNullable: true },
flowUsedId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRunRecord>;

export const processingRunRecordODataPostTypeConfig = {
run: runTypeConfig,
project: projectTypeConfig,
flowUsed: pluginProcessVersionTypeConfig,
records: { isRelation: true, config: processingRecordTypeConfig },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
projectId: { type: 'Guid', isNullable: true },
flowUsedId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRunRecordODataPost>;

export const processingRunRecordPartialTypeConfig = {
run: runPartialTypeConfig,
project: projectPartialTypeConfig,
flowUsed: pluginProcessVersionPartialTypeConfig,
records: { isRelation: true, config: processingRecordPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
projectId: { type: 'Guid', isNullable: true },
flowUsedId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRunRecordPartial>;

export const processingRunRecordPartialExceptIdTypeConfig = {
run: runPartialTypeConfig,
project: projectPartialTypeConfig,
flowUsed: pluginProcessVersionPartialTypeConfig,
records: { isRelation: true, config: processingRecordPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
projectId: { type: 'Guid', isNullable: true },
flowUsedId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProcessingRunRecordPartialExceptId>;

export const processingRunRecordSingleResultTypeConfig = {
queryable: { isRelation: true, config: processingRunRecordTypeConfig }
  } as const satisfies ObjectTypeConfig<ProcessingRunRecordSingleResult>;

export const projectTypeConfig = {
code: { type: 'String', isNullable: false },
customer: customerTypeConfig,
client: clientTypeConfig,
networkModelVersion: networkModelVersionTypeConfig,
id: { type: 'Guid', isNullable: false },
customerId: { type: 'Guid', isNullable: true },
clientId: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
name: { type: 'String', isNullable: false },
networkLocations: { isRelation: true, config: projectNetworkLocationTypeConfig }
  } as const satisfies ObjectTypeConfig<Project>;

export const projectNetworkLocationTypeConfig = {
project: projectTypeConfig,
networkLocation: networkLocationTypeConfig,
startMileage: { type: 'Double', isNullable: true },
endMileage: { type: 'Double', isNullable: true },
surveyMileageRanges: { isRelation: true, config: surveyMileageDtoWithIdTypeConfig },
projectId: { type: 'Guid', isNullable: true },
networkLocationId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProjectNetworkLocation>;

export const projectNetworkLocationPartialTypeConfig = {
project: projectPartialTypeConfig,
networkLocation: networkLocationPartialTypeConfig,
startMileage: { type: 'Double', isNullable: true },
endMileage: { type: 'Double', isNullable: true },
surveyMileageRanges: { isRelation: true, config: surveyMileageDtoWithIdTypeConfig },
projectId: { type: 'Guid', isNullable: true },
networkLocationId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProjectNetworkLocationPartial>;

export const projectNetworkLocationPartialExceptIdTypeConfig = {
project: projectPartialTypeConfig,
networkLocation: networkLocationPartialTypeConfig,
startMileage: { type: 'Double', isNullable: true },
endMileage: { type: 'Double', isNullable: true },
surveyMileageRanges: { isRelation: true, config: surveyMileageDtoWithIdTypeConfig },
projectId: { type: 'Guid', isNullable: true },
networkLocationId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProjectNetworkLocationPartialExceptId>;

export const projectODataPostTypeConfig = {
code: { type: 'String', isNullable: false },
customer: customerTypeConfig,
client: clientTypeConfig,
networkModelVersion: networkModelVersionTypeConfig,
id: { type: 'Guid', isNullable: false },
customerId: { type: 'Guid', isNullable: true },
clientId: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
name: { type: 'String', isNullable: false },
networkLocations: { isRelation: true, config: projectNetworkLocationTypeConfig }
  } as const satisfies ObjectTypeConfig<ProjectODataPost>;

export const projectPartialTypeConfig = {
code: { type: 'String', isNullable: false },
customer: customerPartialTypeConfig,
client: clientPartialTypeConfig,
networkModelVersion: networkModelVersionPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
customerId: { type: 'Guid', isNullable: true },
clientId: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
name: { type: 'String', isNullable: false },
networkLocations: { isRelation: true, config: projectNetworkLocationPartialExceptIdTypeConfig }
  } as const satisfies ObjectTypeConfig<ProjectPartial>;

export const projectPartialExceptIdTypeConfig = {
code: { type: 'String', isNullable: false },
customer: customerPartialTypeConfig,
client: clientPartialTypeConfig,
networkModelVersion: networkModelVersionPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
customerId: { type: 'Guid', isNullable: true },
clientId: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
name: { type: 'String', isNullable: false },
networkLocations: { isRelation: true, config: projectNetworkLocationPartialExceptIdTypeConfig }
  } as const satisfies ObjectTypeConfig<ProjectPartialExceptId>;

export const projectProcessingAssignmentTypeConfig = {
assignedProcess: pluginProcessVersionTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentTypeConfig },
container: projectTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProjectProcessingAssignment>;

export const projectProcessingAssignmentODataPostTypeConfig = {
assignedProcess: pluginProcessVersionTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentTypeConfig },
container: projectTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<ProjectProcessingAssignmentODataPost>;

export const projectProcessingAssignmentPartialTypeConfig = {
assignedProcess: pluginProcessVersionPartialTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentPartialExceptIdTypeConfig },
container: projectPartialTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProjectProcessingAssignmentPartial>;

export const projectProcessingAssignmentPartialExceptIdTypeConfig = {
assignedProcess: pluginProcessVersionPartialTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentPartialExceptIdTypeConfig },
container: projectPartialTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<ProjectProcessingAssignmentPartialExceptId>;

export const projectProcessingAssignmentSingleResultTypeConfig = {
queryable: { isRelation: true, config: projectProcessingAssignmentTypeConfig }
  } as const satisfies ObjectTypeConfig<ProjectProcessingAssignmentSingleResult>;

export const projectRunPartsDtoTypeConfig = {
projectCode: { type: 'String', isNullable: false },
networkLocationId: { type: 'Guid', isNullable: false },
runParts: { isRelation: true, config: surveyMileageDtoWithIdTypeConfig }
  } as const satisfies ObjectTypeConfig<ProjectRunPartsDTO>;

export const projectScopeDtoTypeConfig = {
projectCode: { type: 'String', isNullable: false },
modelVersionId: { type: 'Guid', isNullable: false },
locationsAndRange: { isRelation: true, config: projectNetworkLocationTypeConfig }
  } as const satisfies ObjectTypeConfig<ProjectScopeDTO>;

export const projectSingleResultTypeConfig = {
queryable: { isRelation: true, config: projectTypeConfig }
  } as const satisfies ObjectTypeConfig<ProjectSingleResult>;

export const propertyDtoTypeConfig = {
options: { isRelation: true, config: { type: 'String', isNullable: false } },
name: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: true },
type: { type: 'String', isNullable: false },
isPrimitive: { type: 'Boolean', isNullable: false },
isInitializationVariable: { type: 'Boolean', isNullable: false },
isInput: { type: 'Boolean', isNullable: false },
isRequired: { type: 'Boolean', isNullable: false },
isSetting: { type: 'Boolean', isNullable: false },
defaultValue: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<PropertyDTO>;




export const runTypeConfig = {
surveyVehicle: surveyVehicleTypeConfig,
networkModelVersion: networkModelVersionTypeConfig,
sessionRuns: { isRelation: true, config: sessionRunTypeConfig },
basketRuns: { isRelation: true, config: basketRunTypeConfig },
captureInstances: { isRelation: true, config: captureInstanceTypeConfig },
id: { type: 'Guid', isNullable: false },
surveyVehicleId: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
name: { type: 'String', isNullable: false },
nameUsedInLXML: { type: 'String', isNullable: false },
locationAndNameInFS: { type: 'String', isNullable: false },
lengthInMeters: { type: 'Double', isNullable: true },
startCaptureTicks: { type: 'Int32', isNullable: true },
endCaptureTicks: { type: 'Int32', isNullable: true },
status: registrationProcessingStatusEnumTypeConfig
  } as const satisfies ObjectTypeConfig<Run>;

export const runAndTypesDtoTypeConfig = {
dataTypesForRun: { isRelation: true, config: zarpDataTypeTypeConfig },
run: runTypeConfig
  } as const satisfies ObjectTypeConfig<RunAndTypesDTO>;

export const runDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: false },
surveyVehicle: surveyVehicleTypeConfig,
networkModel: networkModelVersionTypeConfig,
sessionRuns: { isRelation: true, config: sessionRunWithSessionDtoTypeConfig },
name: { type: 'String', isNullable: false },
nameUsedInLXML: { type: 'String', isNullable: false },
locationAndNameInFS: { type: 'String', isNullable: false },
lengthInMeters: { type: 'Double', isNullable: true },
startCaptureTicks: { type: 'Int32', isNullable: true },
endCaptureTicks: { type: 'Int32', isNullable: true },
status: registrationProcessingStatusEnumTypeConfig
  } as const satisfies ObjectTypeConfig<RunDTO>;

export const runInfoDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: true },
networkModelVersion: networkModelVersionSummaryDtoTypeConfig,
surveyVehicle: namedEntityDtoTypeConfig,
runRegistrationInfo: runRegistrationDtoTypeConfig,
activeRunTasks: { isRelation: true, config: runTaskTypeConfig }
  } as const satisfies ObjectTypeConfig<RunInfoDTO>;

export const runMetaTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: false },
locationAndNameInFS: { type: 'String', isNullable: false },
nameUsedInLXML: { type: 'String', isNullable: false }
  } as const satisfies ObjectTypeConfig<RunMeta>;

export const runODataPostTypeConfig = {
surveyVehicle: surveyVehicleTypeConfig,
networkModelVersion: networkModelVersionTypeConfig,
sessionRuns: { isRelation: true, config: sessionRunTypeConfig },
basketRuns: { isRelation: true, config: basketRunTypeConfig },
captureInstances: { isRelation: true, config: captureInstanceTypeConfig },
id: { type: 'Guid', isNullable: false },
surveyVehicleId: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
name: { type: 'String', isNullable: false },
nameUsedInLXML: { type: 'String', isNullable: false },
locationAndNameInFS: { type: 'String', isNullable: false },
lengthInMeters: { type: 'Double', isNullable: true },
startCaptureTicks: { type: 'Int32', isNullable: true },
endCaptureTicks: { type: 'Int32', isNullable: true },
status: registrationProcessingStatusEnumTypeConfig
  } as const satisfies ObjectTypeConfig<RunODataPost>;

export const runPartialTypeConfig = {
surveyVehicle: surveyVehiclePartialTypeConfig,
networkModelVersion: networkModelVersionPartialTypeConfig,
sessionRuns: { isRelation: true, config: sessionRunPartialExceptIdTypeConfig },
basketRuns: { isRelation: true, config: basketRunPartialExceptIdTypeConfig },
captureInstances: { isRelation: true, config: captureInstancePartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
surveyVehicleId: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
name: { type: 'String', isNullable: false },
nameUsedInLXML: { type: 'String', isNullable: false },
locationAndNameInFS: { type: 'String', isNullable: false },
lengthInMeters: { type: 'Double', isNullable: true },
startCaptureTicks: { type: 'Int32', isNullable: true },
endCaptureTicks: { type: 'Int32', isNullable: true },
status: registrationProcessingStatusEnumTypeConfig
  } as const satisfies ObjectTypeConfig<RunPartial>;

export const runPartialExceptIdTypeConfig = {
surveyVehicle: surveyVehiclePartialTypeConfig,
networkModelVersion: networkModelVersionPartialTypeConfig,
sessionRuns: { isRelation: true, config: sessionRunPartialExceptIdTypeConfig },
basketRuns: { isRelation: true, config: basketRunPartialExceptIdTypeConfig },
captureInstances: { isRelation: true, config: captureInstancePartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
surveyVehicleId: { type: 'Guid', isNullable: false },
networkModelVersionId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
name: { type: 'String', isNullable: false },
nameUsedInLXML: { type: 'String', isNullable: false },
locationAndNameInFS: { type: 'String', isNullable: false },
lengthInMeters: { type: 'Double', isNullable: true },
startCaptureTicks: { type: 'Int32', isNullable: true },
endCaptureTicks: { type: 'Int32', isNullable: true },
status: registrationProcessingStatusEnumTypeConfig
  } as const satisfies ObjectTypeConfig<RunPartialExceptId>;

export const runProcessingAssignmentTypeConfig = {
assignedProcess: pluginProcessVersionTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentTypeConfig },
container: runTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<RunProcessingAssignment>;

export const runProcessingAssignmentODataPostTypeConfig = {
assignedProcess: pluginProcessVersionTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentTypeConfig },
container: runTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<RunProcessingAssignmentODataPost>;

export const runProcessingAssignmentPartialTypeConfig = {
assignedProcess: pluginProcessVersionPartialTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentPartialExceptIdTypeConfig },
container: runPartialTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<RunProcessingAssignmentPartial>;

export const runProcessingAssignmentPartialExceptIdTypeConfig = {
assignedProcess: pluginProcessVersionPartialTypeConfig,
processingRecords: { isRelation: true, config: processingRecordAssignmentPartialExceptIdTypeConfig },
container: runPartialTypeConfig,
assignedProcessId: { type: 'Guid', isNullable: false },
containerId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<RunProcessingAssignmentPartialExceptId>;

export const runProcessingAssignmentSingleResultTypeConfig = {
queryable: { isRelation: true, config: runProcessingAssignmentTypeConfig }
  } as const satisfies ObjectTypeConfig<RunProcessingAssignmentSingleResult>;

export const runRegistrationDtoTypeConfig = {
hasINS: { type: 'Boolean', isNullable: false },
hasGPS: { type: 'Boolean', isNullable: false },
hasGPR: { type: 'Boolean', isNullable: false },
insRegistered: { type: 'Boolean', isNullable: false },
gprRegistered: { type: 'Boolean', isNullable: false },
hasLSC: { type: 'Boolean', isNullable: false },
lscRegistered: { type: 'Boolean', isNullable: false },
hasLaser: { type: 'Boolean', isNullable: false },
laserRegistered: { type: 'Boolean', isNullable: false },
hasCamera: { type: 'Boolean', isNullable: false },
cameraRegistered: { type: 'Boolean', isNullable: false },
networkRegistered: { type: 'Boolean', isNullable: false },
hasStagedINS: { type: 'Boolean', isNullable: false },
hasStagedGPS: { type: 'Boolean', isNullable: false },
hasStagedGPR: { type: 'Boolean', isNullable: false },
hasStagedLSC: { type: 'Boolean', isNullable: false },
hasStagedLaser: { type: 'Boolean', isNullable: false },
hasStagedCamera: { type: 'Boolean', isNullable: false },
hasINSError: { type: 'Boolean', isNullable: false },
hasGPSError: { type: 'Boolean', isNullable: false },
hasGPRError: { type: 'Boolean', isNullable: false },
hasCameraError: { type: 'Boolean', isNullable: false },
hasLSCError: { type: 'Boolean', isNullable: false },
hasLaserError: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<RunRegistrationDTO>;

export const runSingleResultTypeConfig = {
queryable: { isRelation: true, config: runTypeConfig }
  } as const satisfies ObjectTypeConfig<RunSingleResult>;

export const runTaskTypeConfig = {
run: runTypeConfig,
type: runTaskTypeTypeConfig,
taskId: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
progress: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<RunTask>;

export const runTaskODataPostTypeConfig = {
run: runTypeConfig,
type: runTaskTypeTypeConfig,
taskId: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
progress: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<RunTaskODataPost>;

export const runTaskPartialTypeConfig = {
run: runPartialTypeConfig,
type: runTaskTypeTypeConfig,
taskId: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
progress: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<RunTaskPartial>;

export const runTaskPartialExceptIdTypeConfig = {
run: runPartialTypeConfig,
type: runTaskTypeTypeConfig,
taskId: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
progress: { type: 'Double', isNullable: false },
id: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<RunTaskPartialExceptId>;

export const runTaskSingleResultTypeConfig = {
queryable: { isRelation: true, config: runTaskTypeConfig }
  } as const satisfies ObjectTypeConfig<RunTaskSingleResult>;


export const sensorTypeConfig = {
sensorSystem: sensorSystemTypeConfig,
serialNumber: { type: 'Int32', isNullable: false },
positionRightOfGPS: { type: 'Double', isNullable: false },
positionAheadOfGPS: { type: 'Double', isNullable: false },
heightAboveDatum: { type: 'Double', isNullable: false },
position: { type: 'String', isNullable: true },
datum: { type: 'String', isNullable: true },
id: { type: 'Guid', isNullable: false },
sensorSystemId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<Sensor>;

export const sensorODataPostTypeConfig = {
sensorSystem: sensorSystemTypeConfig,
serialNumber: { type: 'Int32', isNullable: false },
positionRightOfGPS: { type: 'Double', isNullable: false },
positionAheadOfGPS: { type: 'Double', isNullable: false },
heightAboveDatum: { type: 'Double', isNullable: false },
position: { type: 'String', isNullable: true },
datum: { type: 'String', isNullable: true },
id: { type: 'Guid', isNullable: false },
sensorSystemId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SensorODataPost>;

export const sensorPartialTypeConfig = {
sensorSystem: sensorSystemPartialTypeConfig,
serialNumber: { type: 'Int32', isNullable: false },
positionRightOfGPS: { type: 'Double', isNullable: false },
positionAheadOfGPS: { type: 'Double', isNullable: false },
heightAboveDatum: { type: 'Double', isNullable: false },
position: { type: 'String', isNullable: true },
datum: { type: 'String', isNullable: true },
id: { type: 'Guid', isNullable: false },
sensorSystemId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SensorPartial>;

export const sensorPartialExceptIdTypeConfig = {
sensorSystem: sensorSystemPartialTypeConfig,
serialNumber: { type: 'Int32', isNullable: false },
positionRightOfGPS: { type: 'Double', isNullable: false },
positionAheadOfGPS: { type: 'Double', isNullable: false },
heightAboveDatum: { type: 'Double', isNullable: false },
position: { type: 'String', isNullable: true },
datum: { type: 'String', isNullable: true },
id: { type: 'Guid', isNullable: false },
sensorSystemId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SensorPartialExceptId>;

export const sensorSingleResultTypeConfig = {
queryable: { isRelation: true, config: sensorTypeConfig }
  } as const satisfies ObjectTypeConfig<SensorSingleResult>;

export const sensorSystemTypeConfig = {
name: { type: 'String', isNullable: false },
serialNumber: { type: 'Int32', isNullable: false },
number: { type: 'Int32', isNullable: false },
type: zarpDataTypeTypeConfig,
surveyVehicle: surveyVehicleTypeConfig,
sensors: { isRelation: true, config: sensorTypeConfig },
id: { type: 'Guid', isNullable: false },
surveyVehicleId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SensorSystem>;

export const sensorSystemODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
serialNumber: { type: 'Int32', isNullable: false },
number: { type: 'Int32', isNullable: false },
type: zarpDataTypeTypeConfig,
surveyVehicle: surveyVehicleTypeConfig,
sensors: { isRelation: true, config: sensorTypeConfig },
id: { type: 'Guid', isNullable: false },
surveyVehicleId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SensorSystemODataPost>;

export const sensorSystemPartialTypeConfig = {
name: { type: 'String', isNullable: false },
serialNumber: { type: 'Int32', isNullable: false },
number: { type: 'Int32', isNullable: false },
type: zarpDataTypeTypeConfig,
surveyVehicle: surveyVehiclePartialTypeConfig,
sensors: { isRelation: true, config: sensorPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
surveyVehicleId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SensorSystemPartial>;

export const sensorSystemPartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
serialNumber: { type: 'Int32', isNullable: false },
number: { type: 'Int32', isNullable: false },
type: zarpDataTypeTypeConfig,
surveyVehicle: surveyVehiclePartialTypeConfig,
sensors: { isRelation: true, config: sensorPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
surveyVehicleId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SensorSystemPartialExceptId>;

export const sensorSystemSingleResultTypeConfig = {
queryable: { isRelation: true, config: sensorSystemTypeConfig }
  } as const satisfies ObjectTypeConfig<SensorSystemSingleResult>;

export const sessionTypeConfig = {
name: { type: 'String', isNullable: false },
displayName: { type: 'String', isNullable: false },
locationAndNameInFS: { type: 'String', isNullable: false },
client: clientTypeConfig,
sessionRuns: { isRelation: true, config: sessionRunTypeConfig },
id: { type: 'Guid', isNullable: false },
clientId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
ownersApplicationUsers: { isRelation: true, config: dataMultiOwnerApplicationUserSessionTypeConfig },
ownersApplicationUserGroups: { isRelation: true, config: dataMultiOwnerApplicationUserGroupSessionTypeConfig }
  } as const satisfies ObjectTypeConfig<Session>;

export const sessionInfoDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
name: { type: 'String', isNullable: true },
date: { type: 'DateTimeOffset', isNullable: true },
client: { type: 'String', isNullable: true },
vehicleName: { type: 'String', isNullable: true },
vehicleId: { type: 'Guid', isNullable: true },
networkUnit: unitEnumTypeConfig,
networkModelName: { type: 'String', isNullable: true },
networkModelId: { type: 'Guid', isNullable: true },
registeredDistance: { type: 'Double', isNullable: false },
runs: { isRelation: true, config: runInfoDtoTypeConfig },
registeringRuns: { isRelation: true, config: runInfoDtoTypeConfig },
unregisteredRuns: { isRelation: true, config: { type: 'String', isNullable: false } }
  } as const satisfies ObjectTypeConfig<SessionInfoDTO>;

export const sessionODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
displayName: { type: 'String', isNullable: false },
locationAndNameInFS: { type: 'String', isNullable: false },
client: clientTypeConfig,
sessionRuns: { isRelation: true, config: sessionRunTypeConfig },
id: { type: 'Guid', isNullable: false },
clientId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig,
ownersApplicationUsers: { isRelation: true, config: dataMultiOwnerApplicationUserSessionTypeConfig },
ownersApplicationUserGroups: { isRelation: true, config: dataMultiOwnerApplicationUserGroupSessionTypeConfig }
  } as const satisfies ObjectTypeConfig<SessionODataPost>;

export const sessionPartialTypeConfig = {
name: { type: 'String', isNullable: false },
displayName: { type: 'String', isNullable: false },
locationAndNameInFS: { type: 'String', isNullable: false },
client: clientPartialTypeConfig,
sessionRuns: { isRelation: true, config: sessionRunPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
clientId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
ownersApplicationUsers: { isRelation: true, config: dataMultiOwnerApplicationUserSessionPartialExceptIdTypeConfig },
ownersApplicationUserGroups: { isRelation: true, config: dataMultiOwnerApplicationUserGroupSessionPartialExceptIdTypeConfig }
  } as const satisfies ObjectTypeConfig<SessionPartial>;

export const sessionPartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
displayName: { type: 'String', isNullable: false },
locationAndNameInFS: { type: 'String', isNullable: false },
client: clientPartialTypeConfig,
sessionRuns: { isRelation: true, config: sessionRunPartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
clientId: { type: 'Guid', isNullable: true },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig,
ownersApplicationUsers: { isRelation: true, config: dataMultiOwnerApplicationUserSessionPartialExceptIdTypeConfig },
ownersApplicationUserGroups: { isRelation: true, config: dataMultiOwnerApplicationUserGroupSessionPartialExceptIdTypeConfig }
  } as const satisfies ObjectTypeConfig<SessionPartialExceptId>;

export const sessionPropertyTypeConfig = {
name: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
type: { type: 'String', isNullable: false },
propertyGroup: { type: 'String', isNullable: false },
associatedSessionValues: { isRelation: true, config: sessionPropertyValueTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SessionProperty>;

export const sessionPropertyODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
type: { type: 'String', isNullable: false },
propertyGroup: { type: 'String', isNullable: false },
associatedSessionValues: { isRelation: true, config: sessionPropertyValueTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SessionPropertyODataPost>;

export const sessionPropertyPartialTypeConfig = {
name: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
type: { type: 'String', isNullable: false },
propertyGroup: { type: 'String', isNullable: false },
associatedSessionValues: { isRelation: true, config: sessionPropertyValuePartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SessionPropertyPartial>;

export const sessionPropertyPartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
description: { type: 'String', isNullable: false },
type: { type: 'String', isNullable: false },
propertyGroup: { type: 'String', isNullable: false },
associatedSessionValues: { isRelation: true, config: sessionPropertyValuePartialExceptIdTypeConfig },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SessionPropertyPartialExceptId>;

export const sessionPropertySingleResultTypeConfig = {
queryable: { isRelation: true, config: sessionPropertyTypeConfig }
  } as const satisfies ObjectTypeConfig<SessionPropertySingleResult>;

export const sessionPropertyValueTypeConfig = {
value: { type: 'String', isNullable: false },
property: sessionPropertyTypeConfig,
session: sessionTypeConfig,
id: { type: 'Guid', isNullable: false },
propertyId: { type: 'Guid', isNullable: false },
sessionId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SessionPropertyValue>;

export const sessionPropertyValueODataPostTypeConfig = {
value: { type: 'String', isNullable: false },
property: sessionPropertyTypeConfig,
session: sessionTypeConfig,
id: { type: 'Guid', isNullable: false },
propertyId: { type: 'Guid', isNullable: false },
sessionId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SessionPropertyValueODataPost>;

export const sessionPropertyValuePartialTypeConfig = {
value: { type: 'String', isNullable: false },
property: sessionPropertyPartialTypeConfig,
session: sessionPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
propertyId: { type: 'Guid', isNullable: false },
sessionId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SessionPropertyValuePartial>;

export const sessionPropertyValuePartialExceptIdTypeConfig = {
value: { type: 'String', isNullable: false },
property: sessionPropertyPartialTypeConfig,
session: sessionPartialTypeConfig,
id: { type: 'Guid', isNullable: false },
propertyId: { type: 'Guid', isNullable: false },
sessionId: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SessionPropertyValuePartialExceptId>;

export const sessionPropertyValueSingleResultTypeConfig = {
queryable: { isRelation: true, config: sessionPropertyValueTypeConfig }
  } as const satisfies ObjectTypeConfig<SessionPropertyValueSingleResult>;

export const sessionRunTypeConfig = {
sessionId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
session: sessionTypeConfig,
run: runTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SessionRun>;

export const sessionRunODataPostTypeConfig = {
sessionId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
session: sessionTypeConfig,
run: runTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SessionRunODataPost>;

export const sessionRunPartialTypeConfig = {
sessionId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
session: sessionPartialTypeConfig,
run: runPartialTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SessionRunPartial>;

export const sessionRunPartialExceptIdTypeConfig = {
sessionId: { type: 'Guid', isNullable: false },
runId: { type: 'Guid', isNullable: false },
session: sessionPartialTypeConfig,
run: runPartialTypeConfig,
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SessionRunPartialExceptId>;

export const sessionRunSingleResultTypeConfig = {
queryable: { isRelation: true, config: sessionRunTypeConfig }
  } as const satisfies ObjectTypeConfig<SessionRunSingleResult>;

export const sessionRunWithSessionDtoTypeConfig = {
session: sessionTypeConfig
  } as const satisfies ObjectTypeConfig<SessionRunWithSessionDTO>;

export const sessionSingleResultTypeConfig = {
queryable: { isRelation: true, config: sessionTypeConfig }
  } as const satisfies ObjectTypeConfig<SessionSingleResult>;

export const stringBaseDataMultiOwnerListTupleTypeConfig = {
item1: { type: 'String', isNullable: true },
item2: { isRelation: true, config: baseDataMultiOwnerTypeConfig }
  } as const satisfies ObjectTypeConfig<StringBaseDataMultiOwnerListTuple>;

export const stringInt32DictionaryStringTupleTypeConfig = {
item1: {

  },
item2: { type: 'String', isNullable: true }
  } as const satisfies ObjectTypeConfig<StringInt32DictionaryStringTuple>;

export const stringStringListTupleTypeConfig = {
item1: { type: 'String', isNullable: true },
item2: { isRelation: true, config: { type: 'String', isNullable: false } }
  } as const satisfies ObjectTypeConfig<StringStringListTuple>;

export const surveyAndRangeDtoTypeConfig = {
survey: networkLocationSurveyTypeConfig,
surveyStartRange: { type: 'Double', isNullable: false },
surveyEndRange: { type: 'Double', isNullable: false },
runStartRange: { type: 'Double', isNullable: false },
runEndRange: { type: 'Double', isNullable: false },
unit: unitEnumTypeConfig
  } as const satisfies ObjectTypeConfig<SurveyAndRangeDTO>;

export const surveyMileageDtoTypeConfig = {
survey: networkLocationSurveyTypeConfig,
startMileage: { type: 'Double', isNullable: false },
endMileage: { type: 'Double', isNullable: false },
increasing: { type: 'Boolean', isNullable: false }
  } as const satisfies ObjectTypeConfig<SurveyMileageDTO>;

export const surveyMileageDtoWithIdTypeConfig = {
surveyId: { type: 'Guid', isNullable: false },
startMileage: { type: 'Double', isNullable: false },
endMileage: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<SurveyMileageDTOWithId>;

export const surveyRangesRunDtoTypeConfig = {
surveyId: { type: 'Guid', isNullable: false },
networkLocation: networkLocationTypeConfig,
runName: { type: 'String', isNullable: false },
startRange: { type: 'Double', isNullable: false },
endRange: { type: 'Double', isNullable: false }
  } as const satisfies ObjectTypeConfig<SurveyRangesRunDTO>;

export const surveyVehicleTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SurveyVehicle>;

export const surveyVehicleODataPostTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserTypeConfig
  } as const satisfies ObjectTypeConfig<SurveyVehicleODataPost>;

export const surveyVehiclePartialTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SurveyVehiclePartial>;

export const surveyVehiclePartialExceptIdTypeConfig = {
name: { type: 'String', isNullable: false },
id: { type: 'Guid', isNullable: false },
isDeleted: { type: 'Boolean', isNullable: false },
createdDateTime: { type: 'DateTimeOffset', isNullable: true },
lastUpdatedDateTime: { type: 'DateTimeOffset', isNullable: true },
lastModifiedUser: applicationUserPartialTypeConfig,
lastModifiedUserId: { type: 'Guid', isNullable: true },
createdUserId: { type: 'Guid', isNullable: true },
createdUser: applicationUserPartialTypeConfig
  } as const satisfies ObjectTypeConfig<SurveyVehiclePartialExceptId>;

export const surveyVehicleSingleResultTypeConfig = {
queryable: { isRelation: true, config: surveyVehicleTypeConfig }
  } as const satisfies ObjectTypeConfig<SurveyVehicleSingleResult>;

export const undeletableFileInfoTypeConfig = {
fileName: { type: 'String', isNullable: false },
reason: { type: 'String', isNullable: false }
  } as const satisfies ObjectTypeConfig<UndeletableFileInfo>;


export const unversionedPluginFlowDataTypeConfig = {
position: positionDtoTypeConfig,
width: { type: 'Double', isNullable: false },
height: { type: 'Double', isNullable: false },
plugins: { isRelation: true, config: pluginDtoTypeConfig },
edges: { isRelation: true, config: pluginFlowEdgeDtoTypeConfig },
primitives: { isRelation: true, config: objectPrimitiveTypeConfig }
  } as const satisfies ObjectTypeConfig<UnversionedPluginFlowData>;

export const unversionedPluginProcessDataTypeConfig = {
blocks: { isRelation: true, config: unversionedPluginFlowDataTypeConfig },
blockEdges: { isRelation: true, config: pluginProcessBlockEdgeDtoTypeConfig }
  } as const satisfies ObjectTypeConfig<UnversionedPluginProcessData>;

export const unversionedPluginSubFlowDataTypeConfig = {
plugins: { isRelation: true, config: pluginDtoTypeConfig },
edges: { isRelation: true, config: pluginFlowEdgeDtoTypeConfig },
primitives: { isRelation: true, config: objectPrimitiveTypeConfig },
inputs: { isRelation: true, config: pluginFlowExternalConnectionDtoTypeConfig },
outputs: { isRelation: true, config: pluginFlowExternalConnectionDtoTypeConfig }
  } as const satisfies ObjectTypeConfig<UnversionedPluginSubFlowData>;

export const userPermissionTypeDtoTypeConfig = {
id: { type: 'Guid', isNullable: false },
permissions: permissionTypesOnDataEnumTypeConfig
  } as const satisfies ObjectTypeConfig<UserPermissionTypeDTO>;


