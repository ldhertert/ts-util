// To parse this data:
//
//   import { Convert, Harness } from "./file";
//
//   const harness = Convert.toHarness(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface HarnessObject {
    Mutation?: Mutation;
    Query?:    Query;
}

export interface Mutation {
    addAccountPermission?: AddAccountPermission;
    addAppPermission?:     AddAppPermission;
    addUserToUserGroup?:   AddUserToUserGroup;
    /**
     * Attach a tag to an entity
     */
    attachTag?: AttachTag;
    /**
     * Creates a new Application and returns it
     */
    createApplication?: CreateApplication;
    /**
     * Beta
     */
    createCloudProvider?: CreateCloudProvider;
    /**
     * Creates a new Connector and returns it
     */
    createConnector?: CreateConnector;
    /**
     * Beta: Create a secret.
     */
    createSecret?: CreateSecret;
    /**
     * Create secret manager
     */
    createSecretManager?: CreateSecretManager;
    /**
     * Creates a new Trigger and returns it
     */
    createTrigger?:   CreateTrigger;
    createUser?:      CreateUser;
    createUserGroup?: CreateUserGroup;
    /**
     * Deletes an application.
     */
    deleteApplication?: DeleteApplication;
    /**
     * Beta
     */
    deleteCloudProvider?: DeleteCloudProvider;
    /**
     * Deletes a Connector.
     */
    deleteConnector?: DeleteConnector;
    /**
     * Beta: Delete a secret.
     */
    deleteSecret?: DeleteSecret;
    /**
     * Delete secret manager
     */
    deleteSecretManager?: DeleteSecretManager;
    /**
     * Deletes a Trigger.
     */
    deleteTrigger?:   DeleteTrigger;
    deleteUser?:      DeleteUser;
    deleteUserGroup?: DeleteUserGroup;
    /**
     * Detach a tag from an entity
     */
    detachTag?: DetachTag;
    /**
     * Beta: Start an export of executions/deployments.
     */
    exportExecutions?: ExportExecutions;
    /**
     * Removes Git Sync Configuration associated with an application. Returns updated
     * application.
     */
    removeApplicationGitSyncConfig?: RemoveApplicationGitSyncConfig;
    removeUserFromUserGroup?:        RemoveUserFromUserGroup;
    /**
     * Resume a unsuccessful pipeline. Any stage which was started (both
     * successful/unseccessful) can be given
     * to resume. Pipeline is resumed in block of parallel groups. i.e if given stage has
     * parallel stages all will be
     * restarted.
     */
    resumeExecution?: ResumeExecution;
    /**
     * Beta: Trigger a Workflow/Pipeline Execution.
     */
    startExecution?: StartExecution;
    /**
     * Updates an application and returns it.
     */
    updateApplication?: UpdateApplication;
    /**
     * Updates  Application Git Sync Configuration. Creates the configuration, in case it does
     * not exist. Returns updated git sync configuration.
     */
    updateApplicationGitSyncConfig?: UpdateApplicationGitSyncConfig;
    /**
     * Enable/disable Git Sync for an application. Returns updated application.
     */
    updateApplicationGitSyncConfigStatus?: UpdateApplicationGitSyncConfigStatus;
    /**
     * Beta
     */
    updateCloudProvider?: UpdateCloudProvider;
    /**
     * Updates a Connector and returns it.
     */
    updateConnector?: UpdateConnector;
    /**
     * Beta: Update a secret.
     */
    updateSecret?: UpdateSecret;
    /**
     * Update secret manager
     */
    updateSecretManager?: UpdateSecretManager;
    /**
     * Updates a Trigger and returns it.
     */
    updateTrigger?:              UpdateTrigger;
    updateUser?:                 UpdateUser;
    updateUserGroup?:            UpdateUserGroup;
    updateUserGroupPermissions?: UpdateUserGroupPermissions;
}

export interface AddAccountPermission {
    arguments?: AddAccountPermissionArguments;
    return?:    AddAccountPermissionPayload;
}

export interface AddAccountPermissionArguments {
    input: AddAccountPermissionInput;
}

export interface AddAccountPermissionInput {
    accountPermission?: AccountPermissionType;
    clientMutationId?:  string;
    userGroupId:        string;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 *
 * This corresponds to MANAGE_APPLICATIONS permission on UI
 */
export enum AccountPermissionType {
    AdministerCe = "ADMINISTER_CE",
    AdministerOtherAccountFunctions = "ADMINISTER_OTHER_ACCOUNT_FUNCTIONS",
    CreateAndDeleteApplication = "CREATE_AND_DELETE_APPLICATION",
    CreateCustomDashboards = "CREATE_CUSTOM_DASHBOARDS",
    ManageAPIKeys = "MANAGE_API_KEYS",
    ManageAlertNotificationRules = "MANAGE_ALERT_NOTIFICATION_RULES",
    ManageApplicationStacks = "MANAGE_APPLICATION_STACKS",
    ManageAuthenticationSettings = "MANAGE_AUTHENTICATION_SETTINGS",
    ManageCloudProviders = "MANAGE_CLOUD_PROVIDERS",
    ManageConfigAsCode = "MANAGE_CONFIG_AS_CODE",
    ManageConnectors = "MANAGE_CONNECTORS",
    ManageCustomDashboards = "MANAGE_CUSTOM_DASHBOARDS",
    ManageDelegateProfiles = "MANAGE_DELEGATE_PROFILES",
    ManageDelegates = "MANAGE_DELEGATES",
    ManageDeploymentFreezes = "MANAGE_DEPLOYMENT_FREEZES",
    ManageIPWhitelist = "MANAGE_IP_WHITELIST",
    ManagePipelineGovernanceStandards = "MANAGE_PIPELINE_GOVERNANCE_STANDARDS",
    ManageRestrictedAccess = "MANAGE_RESTRICTED_ACCESS",
    ManageSSHAndWinrm = "MANAGE_SSH_AND_WINRM",
    ManageSecretManagers = "MANAGE_SECRET_MANAGERS",
    ManageSecrets = "MANAGE_SECRETS",
    ManageTags = "MANAGE_TAGS",
    ManageTemplateLibrary = "MANAGE_TEMPLATE_LIBRARY",
    ManageUserAndUserGroupsAndAPIKeys = "MANAGE_USER_AND_USER_GROUPS_AND_API_KEYS",
    ManageUsersAndGroups = "MANAGE_USERS_AND_GROUPS",
    ReadUsersAndGroups = "READ_USERS_AND_GROUPS",
    ViewAudits = "VIEW_AUDITS",
    ViewCe = "VIEW_CE",
    ViewUserAndUserGroupsAndAPIKeys = "VIEW_USER_AND_USER_GROUPS_AND_API_KEYS",
}

export interface AddAccountPermissionPayload {
    clientMutationId?: PurpleClientMutationID;
    userGroup?:        PurpleUserGroup;
}

export interface PurpleClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PurpleUserGroup {
    arguments?: { [key: string]: any };
    return?:    UserGroup;
}

export interface FluffyNodes {
    arguments?: { [key: string]: any };
    return?:    Array<null | UserGroup>;
}

export interface UserGroupConnection {
    nodes?:    FluffyNodes;
    pageInfo?: PurplePageInfo;
}

export interface UserUserGroups {
    arguments?: UserGroupsArguments;
    return?:    UserGroupConnection;
}

export interface User {
    email?:                            Email;
    id?:                               UserID;
    isEmailVerified?:                  IsEmailVerified;
    isImportedFromIdentityProvider?:   IsImportedFromIdentityProvider;
    isPasswordExpired?:                IsPasswordExpired;
    isTwoFactorAuthenticationEnabled?: IsTwoFactorAuthenticationEnabled;
    isUserLocked?:                     IsUserLocked;
    name?:                             UserName;
    userGroups?:                       UserUserGroups;
}

export interface PurpleNodes {
    arguments?: { [key: string]: any };
    return?:    Array<null | User>;
}

export interface UserConnection {
    nodes?:    PurpleNodes;
    pageInfo?: FluffyPageInfo;
}

export interface UserGroupUsers {
    arguments?: UsersArguments;
    return?:    UserConnection;
}

export interface UserGroup {
    description?:          UserGroupDescription;
    id?:                   UserGroupID;
    importedByScim?:       ImportedByScim;
    isSSOLinked?:          IsSSOLinked;
    name?:                 UserGroupName;
    notificationSettings?: NotificationSettings;
    permissions?:          UserGroupPermissions;
    ssoSetting?:           SsoSetting;
    users?:                UserGroupUsers;
}

export interface PurplePageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

export interface PageInfo {
    hasMore?: HasMore;
    limit?:   Limit;
    offset?:  Offset;
    total?:   Total;
}

export interface HasMore {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface Limit {
    arguments?: { [key: string]: any };
    return?:    number;
}

export interface Offset {
    arguments?: { [key: string]: any };
    return?:    number;
}

export interface Total {
    arguments?: { [key: string]: any };
    return?:    number;
}

export interface UserGroupsArguments {
    limit:   number;
    offset?: number;
}

export interface Email {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface UserID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface IsEmailVerified {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface IsImportedFromIdentityProvider {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface IsPasswordExpired {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface IsTwoFactorAuthenticationEnabled {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface IsUserLocked {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface UserName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffyPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

export interface UsersArguments {
    limit:   number;
    offset?: number;
}

export interface UserGroupDescription {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface UserGroupID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ImportedByScim {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface IsSSOLinked {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface UserGroupName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface NotificationSettings {
    arguments?: { [key: string]: any };
    return?:    ReturnObject;
}

export interface ReturnObject {
    groupEmailAddresses?:       GroupEmailAddresses;
    microsoftTeamsWebhookUrl?:  MicrosoftTeamsWebhookURL;
    sendMailToNewMembers?:      SendMailToNewMembers;
    sendNotificationToMembers?: SendNotificationToMembers;
    slackNotificationSetting?:  SlackNotificationSetting;
}

export interface GroupEmailAddresses {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface MicrosoftTeamsWebhookURL {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface SendMailToNewMembers {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface SendNotificationToMembers {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface SlackNotificationSetting {
    arguments?: { [key: string]: any };
    return?:    SlackNotificationSettingReturn;
}

export interface SlackNotificationSettingReturn {
    slackChannelName?: SlackChannelName;
    slackWebhookURL?:  SlackWebhookURL;
}

export interface SlackChannelName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface SlackWebhookURL {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface UserGroupPermissions {
    arguments?: { [key: string]: any };
    return?:    PermissionsReturn;
}

export interface PermissionsReturn {
    accountPermissions?: AccountPermissions;
    appPermissions?:     AppPermissions;
}

export interface AccountPermissions {
    arguments?: { [key: string]: any };
    return?:    AccountPermissionsReturn;
}

export interface AccountPermissionsReturn {
    accountPermissionTypes?: AccountPermissionTypes;
}

export interface AccountPermissionTypes {
    arguments?: { [key: string]: any };
    return?:    Array<AccountPermissionType | null>;
}

export interface AppPermissions {
    arguments?: { [key: string]: any };
    return?:    Array<null | ApplicationPermission>;
}

export interface ApplicationPermission {
    actions?:        ActionsObject;
    applications?:   ApplicationPermissionApplications;
    deployments?:    Deployments;
    environments?:   ApplicationPermissionEnvironments;
    permissionType?: PermissionType;
    pipelines?:      ApplicationPermissionPipelines;
    provisioners?:   Provisioners;
    services?:       ApplicationPermissionServices;
    workflows?:      ApplicationPermissionWorkflows;
}

export interface ActionsObject {
    arguments?: { [key: string]: any };
    return?:    Array<Actions | null>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 *
 * Beta: This action will be used to govern workflow rollback
 */
export enum Actions {
    Create = "CREATE",
    Delete = "DELETE",
    Execute = "EXECUTE",
    ExecutePipeline = "EXECUTE_PIPELINE",
    ExecuteWorkflow = "EXECUTE_WORKFLOW",
    Read = "READ",
    RollbackWorkflow = "ROLLBACK_WORKFLOW",
    Update = "UPDATE",
}

export interface ApplicationPermissionApplications {
    arguments?: { [key: string]: any };
    return?:    AppFilter;
}

export interface AppFilter {
    appIds?:     AppIDS;
    filterType?: PurpleFilterType;
}

export interface AppIDS {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface PurpleFilterType {
    arguments?: { [key: string]: any };
    return?:    FilterTypeEnum;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum FilterTypeEnum {
    All = "ALL",
}

export interface Deployments {
    arguments?: { [key: string]: any };
    return?:    DeploymentPermissionFilter;
}

export interface DeploymentPermissionFilter {
    envIds?:      PurpleEnvIDS;
    filterTypes?: PurpleFilterTypes;
}

export interface PurpleEnvIDS {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface PurpleFilterTypes {
    arguments?: { [key: string]: any };
    return?:    Array<FilterType | null>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum FilterType {
    NonProductionEnvironments = "NON_PRODUCTION_ENVIRONMENTS",
    ProductionEnvironments = "PRODUCTION_ENVIRONMENTS",
}

export interface ApplicationPermissionEnvironments {
    arguments?: { [key: string]: any };
    return?:    EnvPermissionFilter;
}

export interface EnvPermissionFilter {
    envIds?:      FluffyEnvIDS;
    filterTypes?: FluffyFilterTypes;
}

export interface FluffyEnvIDS {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface FluffyFilterTypes {
    arguments?: { [key: string]: any };
    return?:    Array<FilterType | null>;
}

export interface PermissionType {
    arguments?: { [key: string]: any };
    return?:    AppPermissionType;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum AppPermissionType {
    All = "ALL",
    Deployment = "DEPLOYMENT",
    Env = "ENV",
    Pipeline = "PIPELINE",
    Provisioner = "PROVISIONER",
    Service = "SERVICE",
    Workflow = "WORKFLOW",
}

export interface ApplicationPermissionPipelines {
    arguments?: { [key: string]: any };
    return?:    PipelinePermissionFilter;
}

export interface PipelinePermissionFilter {
    envIds?:      TentacledEnvIDS;
    filterTypes?: TentacledFilterTypes;
}

export interface TentacledEnvIDS {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface TentacledFilterTypes {
    arguments?: { [key: string]: any };
    return?:    Array<PipelinePermissionFilterType | null>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum PipelinePermissionFilterType {
    NonProductionPipelines = "NON_PRODUCTION_PIPELINES",
    ProductionPipelines = "PRODUCTION_PIPELINES",
}

export interface Provisioners {
    arguments?: { [key: string]: any };
    return?:    ProvisionerPermissionFilter;
}

export interface ProvisionerPermissionFilter {
    filterType?:     FluffyFilterType;
    provisionerIds?: ProvisionerIDS;
}

export interface FluffyFilterType {
    arguments?: { [key: string]: any };
    return?:    FilterTypeEnum;
}

export interface ProvisionerIDS {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface ApplicationPermissionServices {
    arguments?: { [key: string]: any };
    return?:    ServicePermissionFilter;
}

export interface ServicePermissionFilter {
    filterType?: TentacledFilterType;
    serviceIds?: ServiceIDS;
}

export interface TentacledFilterType {
    arguments?: { [key: string]: any };
    return?:    FilterTypeEnum;
}

export interface ServiceIDS {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface ApplicationPermissionWorkflows {
    arguments?: { [key: string]: any };
    return?:    WorkflowPermissionFilter;
}

export interface WorkflowPermissionFilter {
    envIds?:      StickyEnvIDS;
    filterTypes?: StickyFilterTypes;
}

export interface StickyEnvIDS {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface StickyFilterTypes {
    arguments?: { [key: string]: any };
    return?:    Array<WorkflowPermissionFilterType | null>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum WorkflowPermissionFilterType {
    NonProductionWorkflows = "NON_PRODUCTION_WORKFLOWS",
    ProductionWorkflows = "PRODUCTION_WORKFLOWS",
    WorkflowTemplates = "WORKFLOW_TEMPLATES",
}

export interface SsoSetting {
    arguments?: { [key: string]: any };
    return?:    any;
}

export interface AddAppPermission {
    arguments?: AddAppPermissionArguments;
    return?:    AddAppPermissionPayload;
}

export interface AddAppPermissionArguments {
    input: AddAppPermissionInput;
}

export interface AddAppPermissionInput {
    appPermission?:    ApplicationPermissionInput;
    clientMutationId?: string;
    userGroupId:       string;
}

export interface ApplicationPermissionInput {
    actions:        Array<Actions | null>;
    applications:   AppFilterInput;
    deployments?:   DeploymentPermissionFilterInput;
    environments?:  EnvPermissionFilterInput;
    permissionType: AppPermissionType;
    pipelines?:     PipelinePermissionFilterInput;
    provisioners?:  ProvisionerPermissionFilterInput;
    services?:      ServicePermissionFilterInput;
    workflows?:     WorkflowPermissionFilterInput;
}

export interface AppFilterInput {
    appIds?:     string[];
    filterType?: FilterTypeEnum;
}

export interface DeploymentPermissionFilterInput {
    envIds?:      string[];
    filterTypes?: Array<FilterType | null>;
}

export interface EnvPermissionFilterInput {
    envIds?:      string[];
    filterTypes?: Array<FilterType | null>;
}

export interface PipelinePermissionFilterInput {
    envIds?:      string[];
    filterTypes?: Array<PipelinePermissionFilterType | null>;
}

export interface ProvisionerPermissionFilterInput {
    filterType?:     FilterTypeEnum;
    provisionerIds?: string[];
}

export interface ServicePermissionFilterInput {
    filterType?: FilterTypeEnum;
    serviceIds?: string[];
}

export interface WorkflowPermissionFilterInput {
    envIds?:      string[];
    filterTypes?: Array<WorkflowPermissionFilterType | null>;
}

export interface AddAppPermissionPayload {
    clientMutationId?: FluffyClientMutationID;
    userGroup?:        FluffyUserGroup;
}

export interface FluffyClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffyUserGroup {
    arguments?: { [key: string]: any };
    return?:    UserGroup;
}

export interface AddUserToUserGroup {
    arguments?: AddUserToUserGroupArguments;
    return?:    AddUserToUserGroupPayload;
}

export interface AddUserToUserGroupArguments {
    input: AddUserToUserGroupInput;
}

export interface AddUserToUserGroupInput {
    clientMutationId?: string;
    userGroupId:       string;
    userId:            string;
}

export interface AddUserToUserGroupPayload {
    clientMutationId?: TentacledClientMutationID;
    userGroup?:        TentacledUserGroup;
}

export interface TentacledClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface TentacledUserGroup {
    arguments?: { [key: string]: any };
    return?:    UserGroup;
}

/**
 * Attach a tag to an entity
 */
export interface AttachTag {
    arguments?: AttachTagArguments;
    return?:    AttachTagPayload;
}

export interface AttachTagArguments {
    input: AttachTagInput;
}

export interface AttachTagInput {
    clientMutationId?: string;
    /**
     * Unique ID of the harness entity
     */
    entityId: string;
    /**
     * Type of entity the tag is to be attached to
     */
    entityType: TagEntityType;
    /**
     * Name of the tag
     */
    name: string;
    /**
     * Value of the tag
     */
    value?: string;
}

/**
 * Type of entity the tag is to be attached to
 *
 * Type of entity the tag is to be detached from
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum TagEntityType {
    Application = "APPLICATION",
    Environment = "ENVIRONMENT",
    Pipeline = "PIPELINE",
    Provisioner = "PROVISIONER",
    Service = "SERVICE",
    Workflow = "WORKFLOW",
}

export interface AttachTagPayload {
    clientMutationId?: StickyClientMutationID;
    /**
     * Attached tag details
     */
    tagLink?: TagLinkObject;
}

export interface StickyClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Attached tag details
 */
export interface TagLinkObject {
    arguments?: { [key: string]: any };
    return?:    TagLink;
}

export interface TagLink {
    appId?:      TagLinkAppID;
    entityId?:   EntityID;
    entityType?: EntityTypeObject;
    name?:       TagLinkName;
    value?:      TagLinkValue;
}

export interface TagLinkAppID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface EntityID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface EntityTypeObject {
    arguments?: { [key: string]: any };
    return?:    TagEntityType;
}

export interface TagLinkName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface TagLinkValue {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Creates a new Application and returns it
 */
export interface CreateApplication {
    arguments?: CreateApplicationArguments;
    return?:    CreateApplicationPayload;
}

export interface CreateApplicationArguments {
    input: CreateApplicationInput;
}

export interface CreateApplicationInput {
    clientMutationId?: string;
    description?:      string;
    /**
     * Beta: When this is set to true, all manual triggers will require API Key authorization.
     * Doc link:
     * https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
     */
    isManualTriggerAuthorized?: boolean;
    name:                       string;
}

export interface CreateApplicationPayload {
    application?:      PurpleApplication;
    clientMutationId?: IndigoClientMutationID;
}

export interface PurpleApplication {
    arguments?: { [key: string]: any };
    return?:    Application;
}

export interface InfrastructureDefinitionEnvironment {
    arguments?: { [key: string]: any };
    return?:    Environment;
}

export interface InfrastructureDefinition {
    createdAt?:        InfrastructureDefinitionCreatedAt;
    deploymentType?:   InfrastructureDefinitionDeploymentType;
    environment?:      InfrastructureDefinitionEnvironment;
    id?:               InfrastructureDefinitionID;
    name?:             InfrastructureDefinitionName;
    scopedToServices?: ScopedToServices;
}

export interface StickyNodes {
    arguments?: { [key: string]: any };
    return?:    Array<null | InfrastructureDefinition>;
}

export interface InfrastructureDefinitionConnection {
    nodes?:    StickyNodes;
    pageInfo?: TentacledPageInfo;
}

export interface EnvironmentInfrastructureDefinitions {
    arguments?: InfrastructureDefinitionsArguments;
    return?:    InfrastructureDefinitionConnection;
}

export interface EnvironmentApplication {
    arguments?: { [key: string]: any };
    return?:    Application;
}

export interface Environment {
    application?:               EnvironmentApplication;
    createdAt?:                 EnvironmentCreatedAt;
    createdBy?:                 EnvironmentCreatedBy;
    description?:               EnvironmentDescription;
    id?:                        EnvironmentID;
    infrastructureDefinitions?: EnvironmentInfrastructureDefinitions;
    name?:                      EnvironmentName;
    tags?:                      EnvironmentTags;
    type?:                      EnvironmentTypeObject;
}

export interface TentacledNodes {
    arguments?: { [key: string]: any };
    return?:    Array<null | Environment>;
}

export interface EnvironmentConnection {
    nodes?:    TentacledNodes;
    pageInfo?: StickyPageInfo;
}

export interface ApplicationEnvironments {
    arguments?: EnvironmentsArguments;
    return?:    EnvironmentConnection;
}

export interface Application {
    createdAt?:     ApplicationCreatedAt;
    createdBy?:     ApplicationCreatedBy;
    description?:   ApplicationDescription;
    environments?:  ApplicationEnvironments;
    gitSyncConfig?: ApplicationGitSyncConfig;
    id?:            ApplicationID;
    /**
     * Beta: When this is set to true, all manual triggers will require API Key authorization.
     * Doc link:
     * https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
     */
    isManualTriggerAuthorized?: IsManualTriggerAuthorized;
    name?:                      ApplicationName;
    pipelines?:                 ApplicationPipelines;
    services?:                  ApplicationServices;
    tags?:                      ApplicationTags;
    workflows?:                 ApplicationWorkflows;
}

export interface InfrastructureDefinitionCreatedAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface InfrastructureDefinitionDeploymentType {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface InfrastructureDefinitionID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface InfrastructureDefinitionName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ScopedToServices {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface TentacledPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

export interface InfrastructureDefinitionsArguments {
    filters?: Array<null | InfrastructureDefinitionFilter>;
    limit:    number;
    offset?:  number;
}

export interface InfrastructureDefinitionFilter {
    deploymentType?:           StringFilter;
    environment?:              IDFilter;
    infrastructureDefinition?: IDFilter;
    tag?:                      InfrastructureDefinitionTagFilter;
}

export interface StringFilter {
    operator: Operator;
    values:   Array<null | string>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum Operator {
    Equals = "EQUALS",
    In = "IN",
}

export interface IDFilter {
    operator: IDOperator;
    values:   Array<null | string>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum IDOperator {
    Equals = "EQUALS",
    In = "IN",
    Like = "LIKE",
    NotIn = "NOT_IN",
    NotNull = "NOT_NULL",
}

export interface InfrastructureDefinitionTagFilter {
    entityType?: InfrastructureDefinitionTagType;
    tags?:       Array<null | TagInput>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum InfrastructureDefinitionTagType {
    Environment = "ENVIRONMENT",
}

export interface TagInput {
    name?:  string;
    value?: string;
}

export interface EnvironmentCreatedAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface EnvironmentCreatedBy {
    arguments?: { [key: string]: any };
    return?:    User;
}

export interface EnvironmentDescription {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface EnvironmentID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface EnvironmentName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface EnvironmentTags {
    arguments?: { [key: string]: any };
    return?:    Array<null | Tag>;
}

export interface Tag {
    name?:  TagName;
    value?: TagValue;
}

export interface TagName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface TagValue {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface EnvironmentTypeObject {
    arguments?: { [key: string]: any };
    return?:    EnvironmentType;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum EnvironmentType {
    NonProd = "NON_PROD",
    Prod = "PROD",
}

export interface StickyPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

export interface EnvironmentsArguments {
    limit:   number;
    offset?: number;
}

export interface ApplicationCreatedAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface ApplicationCreatedBy {
    arguments?: { [key: string]: any };
    return?:    User;
}

export interface ApplicationDescription {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ApplicationGitSyncConfig {
    arguments?: { [key: string]: any };
    return?:    GitSyncConfig;
}

export interface GitSyncConfig {
    branch?:         PurpleBranch;
    gitConnector?:   GitConnector;
    repositoryName?: RepositoryName;
    syncEnabled?:    SyncEnabled;
}

export interface PurpleBranch {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface GitConnector {
    arguments?: { [key: string]: any };
    return?:    GitConnectorReturn;
}

export interface GitConnectorReturn {
    branch?:              FluffyBranch;
    createdAt?:           ReturnCreatedAt;
    createdBy?:           ReturnCreatedBy;
    customCommitDetails?: CustomCommitDetails;
    delegateSelectors?:   DelegateSelectors;
    description?:         ReturnDescription;
    generateWebhookUrl?:  GenerateWebhookURL;
    id?:                  ReturnID;
    name?:                ReturnName;
    passwordSecretId?:    PasswordSecretID;
    sshSettingId?:        SSHSettingID;
    URL?:                 URL;
    urlType?:             URLType;
    usageScope?:          ReturnUsageScope;
    userName?:            UserNameObject;
    webhookUrl?:          WebhookURL;
}

export interface URL {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffyBranch {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ReturnCreatedAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface ReturnCreatedBy {
    arguments?: { [key: string]: any };
    return?:    User;
}

export interface CustomCommitDetails {
    arguments?: { [key: string]: any };
    return?:    CustomCommitDetailsReturn;
}

export interface CustomCommitDetailsReturn {
    authorEmailId?: AuthorEmailID;
    authorName?:    AuthorName;
    commitMessage?: CommitMessage;
}

export interface AuthorEmailID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface AuthorName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface CommitMessage {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface DelegateSelectors {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface ReturnDescription {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface GenerateWebhookURL {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface ReturnID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ReturnName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PasswordSecretID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface SSHSettingID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface URLType {
    arguments?: { [key: string]: any };
    return?:    URLTypeEnum;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum URLTypeEnum {
    Account = "ACCOUNT",
    Repo = "REPO",
}

export interface ReturnUsageScope {
    arguments?: { [key: string]: any };
    return?:    UsageScope;
}

export interface UsageScope {
    appEnvScopes?: AppEnvScopes;
}

export interface AppEnvScopes {
    arguments?: { [key: string]: any };
    return?:    Array<null | AppEnvScope>;
}

export interface AppEnvScope {
    application?: AppEnvScopeApplication;
    environment?: AppEnvScopeEnvironment;
}

export interface AppEnvScopeApplication {
    arguments?: { [key: string]: any };
    return?:    AppScopeFilter;
}

export interface AppScopeFilter {
    appId?:      ReturnAppID;
    filterType?: StickyFilterType;
}

export interface ReturnAppID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface StickyFilterType {
    arguments?: { [key: string]: any };
    return?:    FilterTypeEnum;
}

export interface AppEnvScopeEnvironment {
    arguments?: { [key: string]: any };
    return?:    EnvScopeFilter;
}

export interface EnvScopeFilter {
    envId?:      EnvID;
    filterType?: IndigoFilterType;
}

export interface EnvID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface IndigoFilterType {
    arguments?: { [key: string]: any };
    return?:    FilterType;
}

export interface UserNameObject {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface WebhookURL {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface RepositoryName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface SyncEnabled {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface ApplicationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Beta: When this is set to true, all manual triggers will require API Key authorization.
 * Doc link:
 * https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
 */
export interface IsManualTriggerAuthorized {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

export interface ApplicationName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ApplicationPipelines {
    arguments?: PipelinesArguments;
    return?:    PipelineConnection;
}

export interface PipelinesArguments {
    limit:   number;
    offset?: number;
}

export interface PipelineConnection {
    nodes?:    IndigoNodes;
    pageInfo?: IndigoPageInfo;
}

export interface IndigoNodes {
    arguments?: { [key: string]: any };
    return?:    Array<null | Pipeline>;
}

/**
 * Type for pipeline
 */
export interface Pipeline {
    createdAt?: PipelineCreatedAt;
    createdBy?: PipelineCreatedBy;
    /**
     * Description of the Pipeline
     */
    description?: PipelineDescription;
    /**
     * Pipeline identifier
     */
    id?: PipelineID;
    /**
     * Name of the Pipeline
     */
    name?: PipelineName;
    /**
     * Variables in the Pipeline
     */
    pipelineVariables?: PipelineVariables;
    tags?:              PipelineTags;
}

export interface PipelineCreatedAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface PipelineCreatedBy {
    arguments?: { [key: string]: any };
    return?:    User;
}

/**
 * Description of the Pipeline
 */
export interface PipelineDescription {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Pipeline identifier
 */
export interface PipelineID {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Name of the Pipeline
 */
export interface PipelineName {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Variables in the Pipeline
 */
export interface PipelineVariables {
    arguments?: { [key: string]: any };
    return?:    Array<null | Variable>;
}

export interface Variable {
    /**
     * allowed values. Only for text variables.
     */
    allowedValues?: AllowedValues;
    /**
     * True if a variable allows multiple values. You need to provide , separated list of values.
     */
    allowMultipleValues?: AllowMultipleValues;
    /**
     * Default value, Only for text variables
     */
    defaultValue?: DefaultValue;
    /**
     * If a variable id fixed variable.
     */
    fixed?: Fixed;
    /**
     * name of the variable
     */
    name?: VariableName;
    /**
     * If the variable is a required variable
     */
    required?: Required;
    /**
     * Type of the variable
     */
    type?: VariableType;
}

/**
 * True if a variable allows multiple values. You need to provide , separated list of values.
 */
export interface AllowMultipleValues {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

/**
 * allowed values. Only for text variables.
 */
export interface AllowedValues {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

/**
 * Default value, Only for text variables
 */
export interface DefaultValue {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * If a variable id fixed variable.
 */
export interface Fixed {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

/**
 * name of the variable
 */
export interface VariableName {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * If the variable is a required variable
 */
export interface Required {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

/**
 * Type of the variable
 */
export interface VariableType {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PipelineTags {
    arguments?: { [key: string]: any };
    return?:    Array<null | Tag>;
}

export interface IndigoPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

export interface ApplicationServices {
    arguments?: ServicesArguments;
    return?:    ServiceConnection;
}

export interface ServicesArguments {
    limit:   number;
    offset?: number;
}

export interface ServiceConnection {
    nodes?:    IndecentNodes;
    pageInfo?: IndecentPageInfo;
}

export interface IndecentNodes {
    arguments?: { [key: string]: any };
    return?:    Array<null | Service>;
}

/**
 * Service Type
 */
export interface Service {
    artifactSources?: ArtifactSources;
    /**
     * Artifact type deployed by this Service
     */
    artifactType?: ArtifactType;
    createdAt?:    ServiceCreatedAt;
    createdBy?:    ServiceCreatedBy;
    /**
     * Deployment Type: SSH, Helm, or Kubernetes
     */
    deploymentType?: ServiceDeploymentType;
    /**
     * Description of the Service
     */
    description?: ServiceDescription;
    /**
     * Service ID
     */
    id?: ServiceID;
    /**
     * Name of the Service
     */
    name?: ServiceName;
    tags?: ServiceTags;
}

export interface ArtifactSources {
    arguments?: { [key: string]: any };
    return?:    any[];
}

/**
 * Artifact type deployed by this Service
 */
export interface ArtifactType {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ServiceCreatedAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface ServiceCreatedBy {
    arguments?: { [key: string]: any };
    return?:    User;
}

/**
 * Deployment Type: SSH, Helm, or Kubernetes
 */
export interface ServiceDeploymentType {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Description of the Service
 */
export interface ServiceDescription {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Service ID
 */
export interface ServiceID {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Name of the Service
 */
export interface ServiceName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ServiceTags {
    arguments?: { [key: string]: any };
    return?:    Array<null | Tag>;
}

export interface IndecentPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

export interface ApplicationTags {
    arguments?: { [key: string]: any };
    return?:    Array<null | Tag>;
}

export interface ApplicationWorkflows {
    arguments?: WorkflowsArguments;
    return?:    WorkflowConnection;
}

export interface WorkflowsArguments {
    limit:   number;
    offset?: number;
}

export interface WorkflowConnection {
    nodes?:    HilariousNodes;
    pageInfo?: HilariousPageInfo;
}

export interface HilariousNodes {
    arguments?: { [key: string]: any };
    return?:    Array<null | Workflow>;
}

/**
 * Type Workflow
 */
export interface Workflow {
    createdAt?: WorkflowCreatedAt;
    createdBy?: WorkflowCreatedBy;
    /**
     * Description of the Workflow
     */
    description?: WorkflowDescription;
    /**
     * Workflow ID
     */
    id?: WorkflowID;
    /**
     * Name of the Workflow
     */
    name?: WorkflowName;
    tags?: WorkflowTags;
    /**
     * Available variables in the Workflow
     */
    workflowVariables?: WorkflowVariables;
}

export interface WorkflowCreatedAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface WorkflowCreatedBy {
    arguments?: { [key: string]: any };
    return?:    User;
}

/**
 * Description of the Workflow
 */
export interface WorkflowDescription {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Workflow ID
 */
export interface WorkflowID {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Name of the Workflow
 */
export interface WorkflowName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface WorkflowTags {
    arguments?: { [key: string]: any };
    return?:    Array<null | Tag>;
}

/**
 * Available variables in the Workflow
 */
export interface WorkflowVariables {
    arguments?: { [key: string]: any };
    return?:    Array<null | Variable>;
}

export interface HilariousPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

export interface IndigoClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Beta
 */
export interface CreateCloudProvider {
    arguments?: CreateCloudProviderArguments;
    return?:    CreateCloudProviderPayload;
}

export interface CreateCloudProviderArguments {
    input: CreateCloudProviderInput;
}

export interface CreateCloudProviderInput {
    awsCloudProvider?:                AwsCloudProviderInput;
    azureCloudProvider?:              AzureCloudProviderInput;
    clientMutationId?:                string;
    cloudProviderType:                CloudProviderType;
    gcpCloudProvider?:                GcpCloudProviderInput;
    k8sCloudProvider?:                K8SCloudProviderInput;
    pcfCloudProvider?:                PcfCloudProviderInput;
    physicalDataCenterCloudProvider?: PhysicalDataCenterCloudProviderInput;
    spotInstCloudProvider?:           SpotInstCloudProviderInput;
}

export interface AwsCloudProviderInput {
    credentialsType?:        AwsCredentialsType;
    crossAccountAttributes?: AwsCrossAccountAttributes;
    defaultRegion?:          string;
    ec2IamCredentials?:      Ec2IamCredentials;
    manualCredentials?:      AwsManualCredentials;
    name:                    string;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum AwsCredentialsType {
    Ec2Iam = "EC2_IAM",
    Manual = "MANUAL",
}

export interface AwsCrossAccountAttributes {
    assumeCrossAccountRole?: boolean;
    crossAccountRoleArn:     string;
    externalId?:             string;
}

export interface Ec2IamCredentials {
    delegateSelector: string;
    usageScope?:      UsageScopeInput;
}

export interface UsageScopeInput {
    appEnvScopes?: AppEnvScopeInput[];
}

export interface AppEnvScopeInput {
    application: AppScopeFilterInput;
    environment: EnvScopeFilterInput;
}

export interface AppScopeFilterInput {
    appId?:      string;
    filterType?: FilterTypeEnum;
}

export interface EnvScopeFilterInput {
    envId?:      string;
    filterType?: FilterType;
}

export interface AwsManualCredentials {
    accessKey?:         string;
    accessKeySecretId?: string;
    secretKeySecretId:  string;
}

export interface AzureCloudProviderInput {
    clientId:    string;
    keySecretId: string;
    name:        string;
    tenantId:    string;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum CloudProviderType {
    Aws = "AWS",
    Azure = "AZURE",
    Gcp = "GCP",
    KubernetesCluster = "KUBERNETES_CLUSTER",
    Pcf = "PCF",
    PhysicalDataCenter = "PHYSICAL_DATA_CENTER",
    SpotInst = "SPOT_INST",
}

export interface GcpCloudProviderInput {
    delegateSelector?:          string;
    delegateSelectors?:         string[];
    name:                       string;
    serviceAccountKeySecretId?: string;
    skipValidation?:            boolean;
    useDelegate?:               boolean;
    useDelegateSelectors?:      boolean;
}

export interface K8SCloudProviderInput {
    clusterDetailsType:     ClusterDetailsType;
    inheritClusterDetails?: InheritClusterDetails;
    manualClusterDetails?:  ManualClusterDetails;
    name:                   string;
    skipValidation?:        boolean;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum ClusterDetailsType {
    InheritClusterDetails = "INHERIT_CLUSTER_DETAILS",
    ManualClusterDetails = "MANUAL_CLUSTER_DETAILS",
}

export interface InheritClusterDetails {
    delegateName?:      string;
    delegateSelectors?: string[];
    usageScope?:        UsageScopeInput;
}

export interface ManualClusterDetails {
    masterUrl:            string;
    none?:                None;
    oidcToken?:           OIDCToken;
    serviceAccountToken?: ServiceAccountToken;
    type:                 ManualClusterDetailsAuthenticationType;
    usernameAndPassword?: UsernameAndPasswordAuthentication;
}

export interface None {
    caCertificateSecretId:       string;
    clientCertificateSecretId:   string;
    clientKeyAlgorithm:          string;
    clientKeyPassphraseSecretId: string;
    clientKeySecretId:           string;
    passwordSecretId:            string;
    serviceAccountTokenSecretId: string;
    usageScope?:                 UsageScopeInput;
    userName:                    string;
}

export interface OIDCToken {
    clientIdSecretId:     string;
    clientSecretSecretId: string;
    identityProviderUrl:  string;
    passwordSecretId:     string;
    scopes:               string;
    userName:             string;
}

export interface ServiceAccountToken {
    serviceAccountTokenSecretId: string;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum ManualClusterDetailsAuthenticationType {
    ClientKeyAndCertificate = "CLIENT_KEY_AND_CERTIFICATE",
    Custom = "CUSTOM",
    OidcToken = "OIDC_TOKEN",
    ServiceAccountToken = "SERVICE_ACCOUNT_TOKEN",
    UsernameAndPassword = "USERNAME_AND_PASSWORD",
}

export interface UsernameAndPasswordAuthentication {
    passwordSecretId:  string;
    userName?:         string;
    userNameSecretId?: string;
}

export interface PcfCloudProviderInput {
    endpointUrl:       string;
    name:              string;
    passwordSecretId:  string;
    skipValidation?:   boolean;
    userName?:         string;
    userNameSecretId?: string;
}

export interface PhysicalDataCenterCloudProviderInput {
    name:        string;
    usageScope?: UsageScopeInput;
}

export interface SpotInstCloudProviderInput {
    accountId:     string;
    name:          string;
    tokenSecretId: string;
}

export interface CreateCloudProviderPayload {
    clientMutationId?: IndecentClientMutationID;
    cloudProvider?:    PurpleCloudProvider;
}

export interface IndecentClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PurpleCloudProvider {
    arguments?: { [key: string]: any };
    return?:    any;
}

/**
 * Creates a new Connector and returns it
 */
export interface CreateConnector {
    arguments?: CreateConnectorArguments;
    return?:    CreateConnectorPayload;
}

export interface CreateConnectorArguments {
    input: CreateConnectorInput;
}

export interface CreateConnectorInput {
    clientMutationId?: string;
    connectorType:     ConnectorType;
    dockerConnector?:  DockerConnectorInput;
    gitConnector?:     GitConnectorInput;
    helmConnector?:    HelmConnectorInput;
    nexusConnector?:   NexusConnectorInput;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum ConnectorType {
    AmazonS3 = "AMAZON_S3",
    AmazonS3HelmRepo = "AMAZON_S3_HELM_REPO",
    ApmVerification = "APM_VERIFICATION",
    AppDynamics = "APP_DYNAMICS",
    Artifactory = "ARTIFACTORY",
    Bamboo = "BAMBOO",
    BugSnag = "BUG_SNAG",
    DataDog = "DATA_DOG",
    Docker = "DOCKER",
    DynaTrace = "DYNA_TRACE",
    Ecr = "ECR",
    Elb = "ELB",
    Elk = "ELK",
    GCR = "GCR",
    Gcs = "GCS",
    GcsHelmRepo = "GCS_HELM_REPO",
    Git = "GIT",
    HTTPHelmRepo = "HTTP_HELM_REPO",
    Jenkins = "JENKINS",
    Jira = "JIRA",
    Logz = "LOGZ",
    NewRelic = "NEW_RELIC",
    Nexus = "NEXUS",
    Prometheus = "PROMETHEUS",
    SFTP = "SFTP",
    SMB = "SMB",
    SMTP = "SMTP",
    Servicenow = "SERVICENOW",
    Slack = "SLACK",
    Splunk = "SPLUNK",
    Sumo = "SUMO",
}

export interface DockerConnectorInput {
    delegateSelectors?: Array<null | string>;
    name:               string;
    passwordSecretId?:  string;
    URL:                string;
    userName?:          string;
}

export interface GitConnectorInput {
    branch?:              string;
    customCommitDetails?: CustomCommitDetailsInput;
    delegateSelectors?:   string[];
    generateWebhookUrl?:  boolean;
    name:                 string;
    passwordSecretId?:    string;
    sshSettingId?:        string;
    URL:                  string;
    urlType:              URLTypeEnum;
    usageScope?:          UsageScopeInput;
    userName?:            string;
}

export interface CustomCommitDetailsInput {
    authorEmailId?: string;
    authorName?:    string;
    commitMessage?: string;
}

export interface HelmConnectorInput {
    amazonS3PlatformDetails?:   AmazonS3PlatformInput;
    gcsPlatformDetails?:        GCSPlatformInput;
    httpServerPlatformDetails?: HTTPServerPlatformInput;
    name:                       string;
}

export interface AmazonS3PlatformInput {
    awsCloudProvider: string;
    bucketName:       string;
    region:           string;
}

export interface GCSPlatformInput {
    bucketName:          string;
    googleCloudProvider: string;
}

export interface HTTPServerPlatformInput {
    passwordSecretId?: string;
    URL:               string;
    userName?:         string;
}

export interface NexusConnectorInput {
    delegateSelectors?: Array<null | string>;
    name:               string;
    passwordSecretId?:  string;
    URL:                string;
    userName?:          string;
    version:            NexusVersion;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum NexusVersion {
    V2 = "V2",
    V3 = "V3",
}

export interface CreateConnectorPayload {
    clientMutationId?: HilariousClientMutationID;
    connector?:        PurpleConnector;
}

export interface HilariousClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PurpleConnector {
    arguments?: { [key: string]: any };
    return?:    any;
}

/**
 * Beta: Create a secret.
 */
export interface CreateSecret {
    arguments?: CreateSecretArguments;
    return?:    CreateSecretPayload;
}

export interface CreateSecretArguments {
    input: CreateSecretInput;
}

export interface CreateSecretInput {
    clientMutationId?: string;
    encryptedText?:    EncryptedTextInput;
    secretType:        SecretType;
    sshCredential?:    SSHCredentialInput;
    winRMCredential?:  WinRMCredentialInput;
}

export interface EncryptedTextInput {
    inheritScopesFromSM?: boolean;
    name:                 string;
    scopedToAccount?:     boolean;
    secretManagerId?:     string;
    secretReference?:     string;
    usageScope?:          UsageScopeInput;
    value?:               string;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum SecretType {
    EncryptedFile = "ENCRYPTED_FILE",
    EncryptedText = "ENCRYPTED_TEXT",
    SSHCredential = "SSH_CREDENTIAL",
    WinrmCredential = "WINRM_CREDENTIAL",
}

export interface SSHCredentialInput {
    authenticationScheme:    SSHAuthenticationScheme;
    kerberosAuthentication?: KerberosAuthenticationInput;
    name:                    string;
    sshAuthentication?:      SSHAuthenticationInput;
    usageScope?:             UsageScopeInput;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum SSHAuthenticationScheme {
    Kerberos = "KERBEROS",
    SSH = "SSH",
}

export interface KerberosAuthenticationInput {
    port:                 number;
    principal:            string;
    realm:                string;
    tgtGenerationMethod?: TGTGenerationMethod;
}

export interface TGTGenerationMethod {
    kerberosPassword?:  KerberosPassword;
    keyTabFile?:        KeyTabFile;
    tgtGenerationUsing: TGTGenerationUsing;
}

export interface KerberosPassword {
    passwordSecretId: string;
}

export interface KeyTabFile {
    filePath: string;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum TGTGenerationUsing {
    KeyTabFile = "KEY_TAB_FILE",
    Password = "PASSWORD",
}

export interface SSHAuthenticationInput {
    port:                    number;
    sshAuthenticationMethod: SSHAuthenticationMethod;
    userName:                string;
}

export interface SSHAuthenticationMethod {
    inlineSSHKey?:     InlineSSHKey;
    serverPassword?:   SSHPassword;
    sshCredentialType: SSHCredentialType;
    sshKeyFile?:       SSHKeyFile;
}

export interface InlineSSHKey {
    passphraseSecretId?: string;
    sshKeySecretFileId:  string;
}

export interface SSHPassword {
    passwordSecretId: string;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum SSHCredentialType {
    Password = "PASSWORD",
    SSHKey = "SSH_KEY",
    SSHKeyFilePath = "SSH_KEY_FILE_PATH",
}

export interface SSHKeyFile {
    passphraseSecretId?: string;
    path:                string;
}

export interface WinRMCredentialInput {
    authenticationScheme?: WinRMAuthenticationScheme;
    domain?:               string;
    name:                  string;
    passwordSecretId:      string;
    port?:                 number;
    skipCertCheck?:        boolean;
    usageScope?:           UsageScopeInput;
    userName:              string;
    useSSL?:               boolean;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum WinRMAuthenticationScheme {
    NTLM = "NTLM",
}

export interface CreateSecretPayload {
    clientMutationId?: AmbitiousClientMutationID;
    secret?:           PurpleSecret;
}

export interface AmbitiousClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PurpleSecret {
    arguments?: { [key: string]: any };
    return?:    any;
}

/**
 * Create secret manager
 */
export interface CreateSecretManager {
    arguments?: CreateSecretManagerArguments;
    return?:    UpsertSecretManagerPayload;
}

export interface CreateSecretManagerArguments {
    input: CreateSecretManagerInput;
}

export interface CreateSecretManagerInput {
    clientMutationId?:          string;
    hashicorpVaultConfigInput?: HashicorpVaultSecretManagerInput;
    secretManagerType:          SecretManagerType;
}

export interface HashicorpVaultSecretManagerInput {
    authDetails:                 HashicorpVaultAuthDetails;
    basePath?:                   string;
    isDefault?:                  boolean;
    isReadOnly?:                 boolean;
    name:                        string;
    secretEngineName:            string;
    secretEngineRenewalInterval: { [key: string]: any };
    secretEngineVersion:         number;
    usageScope?:                 UsageScopeInput;
    vaultUrl:                    string;
}

export interface HashicorpVaultAuthDetails {
    appRoleId?: string;
    authToken?: string;
    secretId?:  string;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum SecretManagerType {
    AwsKms = "AWS_KMS",
    AwsSecretManager = "AWS_SECRET_MANAGER",
    AzureKeyVault = "AZURE_KEY_VAULT",
    Cyberark = "CYBERARK",
    GoogleKms = "GOOGLE_KMS",
    HashicorpVault = "HASHICORP_VAULT",
}

export interface UpsertSecretManagerPayload {
    clientMutationId?: CunningClientMutationID;
    secretManager?:    ReturnSecretManager;
}

export interface CunningClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ReturnSecretManager {
    arguments?: { [key: string]: any };
    return?:    SecretManager;
}

export interface SecretManager {
    id?:         SecretManagerID;
    name?:       SecretManagerName;
    usageScope?: SecretManagerUsageScope;
}

export interface SecretManagerID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface SecretManagerName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface SecretManagerUsageScope {
    arguments?: { [key: string]: any };
    return?:    UsageScope;
}

/**
 * Creates a new Trigger and returns it
 */
export interface CreateTrigger {
    arguments?: CreateTriggerArguments;
    return?:    TriggerPayload;
}

export interface CreateTriggerArguments {
    input: CreateTriggerInput;
}

export interface CreateTriggerInput {
    /**
     * Action performed on trigger execute: Workflow/Pipeline execution
     */
    action: TriggerActionInput;
    /**
     * Application Id In which Trigger will be created
     */
    applicationId:     string;
    clientMutationId?: string;
    /**
     * Condition of which Trigger will execute
     */
    condition: TriggerConditionInput;
    /**
     * Description of the Trigger
     */
    description?: string;
    /**
     * Name of the Trigger
     */
    name: string;
}

/**
 * Action performed on trigger execute: Workflow/Pipeline execution
 */
export interface TriggerActionInput {
    /**
     * Artifact Selections required for the execution
     */
    artifactSelections?: Array<null | ArtifactSelectionInput>;
    /**
     * Beta: Coninue with default values as defined in pipeline
     */
    continueWithDefaultValues?: boolean;
    /**
     * Entity identifier of the Workflow or Pipeline
     */
    entityId: string;
    /**
     * Skip deployment on the host, if the same artifact is already deployed
     */
    excludeHostsWithSameArtifact?: boolean;
    /**
     * Execution type: Workflow/Pipeline
     */
    executionType: ExecutionType;
    /**
     * Variable inputs required for the execution
     */
    variables?: Array<null | VariableInput>;
}

export interface ArtifactSelectionInput {
    /**
     * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
     */
    artifactFilter?: string;
    /**
     * Artifact Selection type
     */
    artifactSelectionType: ArtifactSelectionType;
    /**
     * Artifact source Id to select artifact from. Required for
     * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
     */
    artifactSourceId?: string;
    /**
     * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
     */
    pipelineId?: string;
    /**
     * If Artifact Build/Tag Filter is regex match or not
     */
    regex?: boolean;
    /**
     * Id of the service providing artifact selection for
     */
    serviceId: string;
    /**
     * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
     */
    workflowId?: string;
}

/**
 * Artifact Selection type
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum ArtifactSelectionType {
    FromPayloadSource = "FROM_PAYLOAD_SOURCE",
    FromTriggeringArtifact = "FROM_TRIGGERING_ARTIFACT",
    FromTriggeringPipeline = "FROM_TRIGGERING_PIPELINE",
    LastCollected = "LAST_COLLECTED",
    LastDeployedPipeline = "LAST_DEPLOYED_PIPELINE",
    LastDeployedWorkflow = "LAST_DEPLOYED_WORKFLOW",
}

/**
 * Execution type: Workflow/Pipeline
 *
 * Workflow or Pipeline
 *
 * Execution type: workflow/ pipeline
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum ExecutionType {
    Pipeline = "PIPELINE",
    Workflow = "WORKFLOW",
}

export interface VariableInput {
    /**
     * name of the variable
     */
    name: string;
    /**
     * value of the variable
     */
    variableValue: VariableValue;
}

/**
 * value of the variable
 */
export interface VariableValue {
    /**
     * type of the value: name or if
     */
    type: VariableValueType;
    /**
     * value
     */
    value: string;
}

/**
 * type of the value: name or if
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum VariableValueType {
    Expression = "EXPRESSION",
    ID = "ID",
    Name = "NAME",
}

/**
 * Condition of which Trigger will execute
 */
export interface TriggerConditionInput {
    /**
     * Should be provided when conditionType is ON_NEW_ARTIFACT.
     */
    artifactConditionInput?: ArtifactConditionInput;
    /**
     * Condition to execute Trigger: ON_NEW_ARTIFACT, ON_PIPELINE_COMPLETION, ON_SCHEDULE,
     * ON_WEBHOOK
     */
    conditionType: ConditionType;
    /**
     * Should be provided when conditionType is ON_PIPELINE_COMPLETION.
     */
    pipelineConditionInput?: PipelineConditionInput;
    /**
     * Should be provided when conditionType is ON_SCHEDULE.
     */
    scheduleConditionInput?: ScheduleConditionInput;
    /**
     * Should be provided when conditionType is ON_WEBHOOK.
     */
    webhookConditionInput?: WebhookConditionInput;
}

/**
 * Should be provided when conditionType is ON_NEW_ARTIFACT.
 */
export interface ArtifactConditionInput {
    /**
     * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
     * Exact match or Regex
     */
    artifactFilter?: string;
    /**
     * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
     * will execute the Trigger.
     */
    artifactSourceId: string;
    /**
     * Regex, True if the Artifact Filter String is provided as regex.
     */
    regex?: boolean;
}

/**
 * Condition to execute Trigger: ON_NEW_ARTIFACT, ON_PIPELINE_COMPLETION, ON_SCHEDULE,
 * ON_WEBHOOK
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum ConditionType {
    OnNewArtifact = "ON_NEW_ARTIFACT",
    OnPipelineCompletion = "ON_PIPELINE_COMPLETION",
    OnSchedule = "ON_SCHEDULE",
    OnWebhook = "ON_WEBHOOK",
}

/**
 * Should be provided when conditionType is ON_PIPELINE_COMPLETION.
 */
export interface PipelineConditionInput {
    /**
     * PipelineId: The trigger will be executed on success of this pipeline.
     */
    pipelineId: string;
}

/**
 * Should be provided when conditionType is ON_SCHEDULE.
 */
export interface ScheduleConditionInput {
    /**
     * Cron Expression: The time format must be a cron quartz expression.
     */
    cronExpression:     string;
    onNewArtifactOnly?: boolean;
}

/**
 * Should be provided when conditionType is ON_WEBHOOK.
 */
export interface WebhookConditionInput {
    /**
     * Bitbucket  event, Required if webhookSourceType = BITBUCKET
     */
    bitbucketEvent?: BitbucketEvent;
    /**
     * Branch in which the filePaths exist.
     */
    branchName?: string;
    /**
     * Branch filter, can be used if using PullRequest or Push events.
     */
    branchRegex?: string;
    /**
     * Only for Native Helm and Helm-based Kubernetes deployments. Event type should be PUSH.
     */
    deployOnlyIfFilesChanged?: boolean;
    /**
     * The file names/paths when changed and Pushed, will execute this Trigger.
     */
    filePaths?: Array<null | string>;
    /**
     * Source Repo Provider setup in Harness
     */
    gitConnectorId?: string;
    /**
     * Github event, Required if webhookSourceType = GITHUB
     */
    githubEvent?: GitHubEvent;
    /**
     * Gitlab  event, Required if webhookSourceType = GITLAB
     */
    gitlabEvent?: GitlabEvent;
    /**
     * Git repository name in case when Account level Git connector is provided
     */
    repoName?: string;
    /**
     * Beta: Webhook secret to authorize Github webhooks
     */
    webhookSecret?: string;
    /**
     * Source of the webhook: GITHUB/GITLAB/BITBUCKET/CUSTOM(curl based)
     */
    webhookSourceType: WebhookSource;
}

/**
 * Bitbucket  event, Required if webhookSourceType = BITBUCKET
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum BitbucketEvent {
    Any = "ANY",
    BuildStatusCreated = "BUILD_STATUS_CREATED",
    BuildStatusUpdated = "BUILD_STATUS_UPDATED",
    CommitCommentCreated = "COMMIT_COMMENT_CREATED",
    DiagnosticsPing = "DIAGNOSTICS_PING",
    Fork = "FORK",
    IssueAny = "ISSUE_ANY",
    IssueCommentCreated = "ISSUE_COMMENT_CREATED",
    IssueCreated = "ISSUE_CREATED",
    IssueUpdated = "ISSUE_UPDATED",
    PullRequestAny = "PULL_REQUEST_ANY",
    PullRequestApprovalRemoved = "PULL_REQUEST_APPROVAL_REMOVED",
    PullRequestApproved = "PULL_REQUEST_APPROVED",
    PullRequestCommentCreated = "PULL_REQUEST_COMMENT_CREATED",
    PullRequestCommentDeleted = "PULL_REQUEST_COMMENT_DELETED",
    PullRequestCommentUpdated = "PULL_REQUEST_COMMENT_UPDATED",
    PullRequestCreated = "PULL_REQUEST_CREATED",
    PullRequestDeclined = "PULL_REQUEST_DECLINED",
    PullRequestMerged = "PULL_REQUEST_MERGED",
    PullRequestUpdated = "PULL_REQUEST_UPDATED",
    Push = "PUSH",
    RefsChanged = "REFS_CHANGED",
    Updated = "UPDATED",
}

/**
 * Github event, Required if webhookSourceType = GITHUB
 */
export interface GitHubEvent {
    /**
     * Github Action for the event type.
     */
    action?: GitHubAction;
    /**
     * Github event type like PUSH, PULL_REQUEST, etc
     */
    event?: GitHubEventType;
}

/**
 * Github Action for the event type.
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum GitHubAction {
    Assigned = "ASSIGNED",
    Closed = "CLOSED",
    Created = "CREATED",
    Deleted = "DELETED",
    Edited = "EDITED",
    Labeled = "LABELED",
    Opened = "OPENED",
    PackagePublished = "PACKAGE_PUBLISHED",
    PreReleased = "PRE_RELEASED",
    Published = "PUBLISHED",
    Released = "RELEASED",
    Reopened = "REOPENED",
    ReviewRequested = "REVIEW_REQUESTED",
    ReviewRequestedRemoved = "REVIEW_REQUESTED_REMOVED",
    Synchronized = "SYNCHRONIZED",
    Unassigned = "UNASSIGNED",
    Unlabeled = "UNLABELED",
    Unpublished = "UNPUBLISHED",
}

/**
 * Github event type like PUSH, PULL_REQUEST, etc
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum GitHubEventType {
    Any = "ANY",
    Delete = "DELETE",
    Package = "PACKAGE",
    PullRequest = "PULL_REQUEST",
    Push = "PUSH",
    Release = "RELEASE",
}

/**
 * Gitlab  event, Required if webhookSourceType = GITLAB
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum GitlabEvent {
    Any = "ANY",
    PullRequest = "PULL_REQUEST",
    Push = "PUSH",
}

/**
 * Source of the webhook: GITHUB/GITLAB/BITBUCKET/CUSTOM(curl based)
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum WebhookSource {
    Bitbucket = "BITBUCKET",
    Custom = "CUSTOM",
    Github = "GITHUB",
    Gitlab = "GITLAB",
}

export interface TriggerPayload {
    clientMutationId?: MagentaClientMutationID;
    trigger?:          PurpleTrigger;
}

export interface MagentaClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PurpleTrigger {
    arguments?: { [key: string]: any };
    return?:    Trigger;
}

export interface Trigger {
    /**
     * Action performed by the trigger: Execute workflow/pipeline
     */
    action?: Action;
    /**
     * The condition that will execute the Trigger: On new artifact, On pipeline completion, On
     * Cron schedule, On webhook
     */
    condition?: Condition;
    createdAt?: TriggerCreatedAt;
    createdBy?: TriggerCreatedBy;
    /**
     * Description of the Trigger
     */
    description?:                  TriggerDescription;
    excludeHostsWithSameArtifact?: ExcludeHostsWithSameArtifact;
    /**
     * Trigger ID
     */
    id?: TriggerID;
    /**
     * Name of the trigger
     */
    name?: TriggerName;
    tags?: TriggerTags;
}

/**
 * Action performed by the trigger: Execute workflow/pipeline
 */
export interface Action {
    arguments?: { [key: string]: any };
    return?:    any;
}

/**
 * The condition that will execute the Trigger: On new artifact, On pipeline completion, On
 * Cron schedule, On webhook
 */
export interface Condition {
    arguments?: { [key: string]: any };
    return?:    any;
}

export interface TriggerCreatedAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface TriggerCreatedBy {
    arguments?: { [key: string]: any };
    return?:    User;
}

/**
 * Description of the Trigger
 */
export interface TriggerDescription {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ExcludeHostsWithSameArtifact {
    arguments?: { [key: string]: any };
    return?:    boolean;
}

/**
 * Trigger ID
 */
export interface TriggerID {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Name of the trigger
 */
export interface TriggerName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface TriggerTags {
    arguments?: { [key: string]: any };
    return?:    Array<null | Tag>;
}

export interface CreateUser {
    arguments?: CreateUserArguments;
    return?:    CreateUserPayload;
}

export interface CreateUserArguments {
    input: CreateUserInput;
}

export interface CreateUserInput {
    clientMutationId?: string;
    email:             string;
    name:              string;
    userGroupIds?:     string[];
}

export interface CreateUserPayload {
    clientMutationId?: FriskyClientMutationID;
    user?:             PurpleUser;
}

export interface FriskyClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PurpleUser {
    arguments?: { [key: string]: any };
    return?:    User;
}

export interface CreateUserGroup {
    arguments?: CreateUserGroupArguments;
    return?:    CreateUserGroupPayload;
}

export interface CreateUserGroupArguments {
    input: CreateUserGroupInput;
}

export interface CreateUserGroupInput {
    clientMutationId?:     string;
    description?:          string;
    name:                  string;
    notificationSettings?: NotificationSettingsInput;
    permissions?:          Permissions;
    ssoSetting?:           SSOSettingInput;
    userIds?:              Array<null | string>;
}

export interface NotificationSettingsInput {
    groupEmailAddresses?:       Array<null | string>;
    microsoftTeamsWebhookUrl?:  string;
    pagerDutyIntegrationKey?:   string;
    sendMailToNewMembers?:      boolean;
    sendNotificationToMembers?: boolean;
    slackNotificationSetting?:  SlackNotificationSettingInput;
}

export interface SlackNotificationSettingInput {
    slackChannelName?: string;
    slackWebhookURL?:  string;
}

export interface Permissions {
    accountPermissions?: AccountPermissionInput;
    appPermissions?:     Array<null | ApplicationPermissionInput>;
}

export interface AccountPermissionInput {
    accountPermissionTypes?: Array<AccountPermissionType | null>;
}

export interface SSOSettingInput {
    ldapSettings?: LDAPSettingsInput;
    samlSettings?: SAMLSettingsInput;
}

export interface LDAPSettingsInput {
    groupDN:       string;
    groupName:     string;
    ssoProviderId: string;
}

export interface SAMLSettingsInput {
    groupName:     string;
    ssoProviderId: string;
}

export interface CreateUserGroupPayload {
    clientMutationId?: MischievousClientMutationID;
    userGroup?:        StickyUserGroup;
}

export interface MischievousClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface StickyUserGroup {
    arguments?: { [key: string]: any };
    return?:    UserGroup;
}

/**
 * Deletes an application.
 */
export interface DeleteApplication {
    arguments?: DeleteApplicationArguments;
    return?:    DeleteApplicationPayload;
}

export interface DeleteApplicationArguments {
    input: DeleteApplicationInput;
}

export interface DeleteApplicationInput {
    applicationId:     string;
    clientMutationId?: string;
}

export interface DeleteApplicationPayload {
    clientMutationId?: BraggadociousClientMutationID;
}

export interface BraggadociousClientMutationID {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Beta
 */
export interface DeleteCloudProvider {
    arguments?: DeleteCloudProviderArguments;
    return?:    DeleteCloudProviderPayload;
}

export interface DeleteCloudProviderArguments {
    input: DeleteCloudProviderInput;
}

export interface DeleteCloudProviderInput {
    clientMutationId?: string;
    cloudProviderId:   string;
}

export interface DeleteCloudProviderPayload {
    clientMutationId?: ClientMutationID1;
}

export interface ClientMutationID1 {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Deletes a Connector.
 */
export interface DeleteConnector {
    arguments?: DeleteConnectorArguments;
    return?:    DeleteConnectorPayload;
}

export interface DeleteConnectorArguments {
    input: DeleteConnectorInput;
}

export interface DeleteConnectorInput {
    clientMutationId?: string;
    connectorId:       string;
}

export interface DeleteConnectorPayload {
    clientMutationId?: ClientMutationID2;
}

export interface ClientMutationID2 {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Beta: Delete a secret.
 */
export interface DeleteSecret {
    arguments?: DeleteSecretArguments;
    return?:    DeleteSecretPayload;
}

export interface DeleteSecretArguments {
    input: DeleteSecretInput;
}

export interface DeleteSecretInput {
    clientMutationId?: string;
    secretId:          string;
    secretType:        SecretType;
}

export interface DeleteSecretPayload {
    clientMutationId?: ClientMutationID3;
}

export interface ClientMutationID3 {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Delete secret manager
 */
export interface DeleteSecretManager {
    arguments?: DeleteSecretManagerArguments;
    return?:    DeleteSecretManagerPayload;
}

export interface DeleteSecretManagerArguments {
    input: DeleteSecretManagerInput;
}

export interface DeleteSecretManagerInput {
    clientMutationId?: string;
    secretManagerId:   string;
}

export interface DeleteSecretManagerPayload {
    clientMutationId?: ClientMutationID4;
}

export interface ClientMutationID4 {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Deletes a Trigger.
 */
export interface DeleteTrigger {
    arguments?: DeleteTriggerArguments;
    return?:    DeleteTriggerPayload;
}

export interface DeleteTriggerArguments {
    input: DeleteTriggerInput;
}

export interface DeleteTriggerInput {
    /**
     * Application Id
     */
    applicationId:     string;
    clientMutationId?: string;
    /**
     * Id of Trigger to be deleted
     */
    triggerId: string;
}

export interface DeleteTriggerPayload {
    clientMutationId?: ClientMutationID5;
}

export interface ClientMutationID5 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface DeleteUser {
    arguments?: DeleteUserArguments;
    return?:    DeleteUserPayload;
}

export interface DeleteUserArguments {
    input: DeleteUserInput;
}

export interface DeleteUserInput {
    clientMutationId?: string;
    id:                string;
}

export interface DeleteUserPayload {
    clientMutationId?: ClientMutationID6;
}

export interface ClientMutationID6 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface DeleteUserGroup {
    arguments?: DeleteUserGroupArguments;
    return?:    DeleteUserGroupPayload;
}

export interface DeleteUserGroupArguments {
    input: DeleteUserGroupInput;
}

export interface DeleteUserGroupInput {
    clientMutationId?: string;
    userGroupId:       string;
}

export interface DeleteUserGroupPayload {
    clientMutationId?: ClientMutationID7;
}

export interface ClientMutationID7 {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Detach a tag from an entity
 */
export interface DetachTag {
    arguments?: DetachTagArguments;
    return?:    DetachTagPayload;
}

export interface DetachTagArguments {
    input: DetachTagInput;
}

export interface DetachTagInput {
    clientMutationId?: string;
    /**
     * Unique ID of the harness entity
     */
    entityId: string;
    /**
     * Type of entity the tag is to be detached from
     */
    entityType: TagEntityType;
    /**
     * Name of the tag
     */
    name: string;
}

export interface DetachTagPayload {
    clientMutationId?: ClientMutationID8;
}

export interface ClientMutationID8 {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Beta: Start an export of executions/deployments.
 */
export interface ExportExecutions {
    arguments?: ExportExecutionsArguments;
    return?:    ExportExecutionsPayload;
}

export interface ExportExecutionsArguments {
    input: ExportExecutionsInput;
}

export interface ExportExecutionsInput {
    clientMutationId?: string;
    /**
     * Execution filters
     */
    filters?: ExportExecutionFilter[];
    /**
     * Notify only the triggering user
     */
    notifyOnlyTriggeringUser?: boolean;
    /**
     * User group ids
     */
    userGroupIds?: string[];
}

export interface ExportExecutionFilter {
    application?:   IDFilter;
    cloudProvider?: IDFilter;
    creationTime?:  TimeFilter;
    duration?:      NumberFilter;
    endTime?:       TimeFilter;
    environment?:   IDFilter;
    execution?:     IDFilter;
    pipeline?:      IDFilter;
    service?:       IDFilter;
    startTime?:     TimeFilter;
    status?:        IDFilter;
    tag?:           DeploymentTagFilter;
    trigger?:       IDFilter;
    triggeredBy?:   IDFilter;
    workflow?:      IDFilter;
}

export interface TimeFilter {
    operator: TimeOperator;
    value:    { [key: string]: any };
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum TimeOperator {
    After = "AFTER",
    Before = "BEFORE",
    Equals = "EQUALS",
}

export interface NumberFilter {
    operator: NumericOperator;
    values:   Array<{ [key: string]: any } | null>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum NumericOperator {
    Equals = "EQUALS",
    GreaterThan = "GREATER_THAN",
    GreaterThanOrEquals = "GREATER_THAN_OR_EQUALS",
    In = "IN",
    LessThan = "LESS_THAN",
    LessThanOrEquals = "LESS_THAN_OR_EQUALS",
    NotEquals = "NOT_EQUALS",
}

export interface DeploymentTagFilter {
    entityType?: DeploymentTagType;
    tags?:       Array<null | TagInput>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum DeploymentTagType {
    Application = "APPLICATION",
    Deployment = "DEPLOYMENT",
    Environment = "ENVIRONMENT",
    Service = "SERVICE",
}

export interface ExportExecutionsPayload {
    clientMutationId?: ClientMutationID9;
    downloadLink?:     DownloadLink;
    errorMessage?:     ErrorMessage;
    expiresAt?:        ExpiresAt;
    requestId?:        RequestID;
    status?:           Status;
    statusLink?:       StatusLink;
    totalExecutions?:  TotalExecutions;
    triggeredAt?:      TriggeredAt;
}

export interface ClientMutationID9 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface DownloadLink {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ErrorMessage {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ExpiresAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface RequestID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface Status {
    arguments?: { [key: string]: any };
    return?:    ExportExecutionsStatus;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum ExportExecutionsStatus {
    Expired = "EXPIRED",
    Failed = "FAILED",
    Queued = "QUEUED",
    Ready = "READY",
}

export interface StatusLink {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface TotalExecutions {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface TriggeredAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

/**
 * Removes Git Sync Configuration associated with an application. Returns updated
 * application.
 */
export interface RemoveApplicationGitSyncConfig {
    arguments?: RemoveApplicationGitSyncConfigArguments;
    return?:    RemoveApplicationGitSyncConfigPayload;
}

export interface RemoveApplicationGitSyncConfigArguments {
    input: RemoveApplicationGitSyncConfigInput;
}

export interface RemoveApplicationGitSyncConfigInput {
    applicationId:     string;
    clientMutationId?: string;
}

export interface RemoveApplicationGitSyncConfigPayload {
    application?:      FluffyApplication;
    clientMutationId?: ClientMutationID10;
}

export interface FluffyApplication {
    arguments?: { [key: string]: any };
    return?:    Application;
}

export interface ClientMutationID10 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface RemoveUserFromUserGroup {
    arguments?: RemoveUserFromUserGroupArguments;
    return?:    RemoveUserFromUserGroupPayload;
}

export interface RemoveUserFromUserGroupArguments {
    input: RemoveUserFromUserGroupInput;
}

export interface RemoveUserFromUserGroupInput {
    clientMutationId?: string;
    userGroupId:       string;
    userId:            string;
}

export interface RemoveUserFromUserGroupPayload {
    clientMutationId?: ClientMutationID11;
    userGroup?:        IndigoUserGroup;
}

export interface ClientMutationID11 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface IndigoUserGroup {
    arguments?: { [key: string]: any };
    return?:    UserGroup;
}

/**
 * Resume a unsuccessful pipeline. Any stage which was started (both
 * successful/unseccessful) can be given
 * to resume. Pipeline is resumed in block of parallel groups. i.e if given stage has
 * parallel stages all will be
 * restarted.
 */
export interface ResumeExecution {
    arguments?: ResumeExecutionArguments;
    return?:    ResumeExecutionPayload;
}

export interface ResumeExecutionArguments {
    input?: ResumeExecutionInput;
}

export interface ResumeExecutionInput {
    applicationId:       string;
    clientMutationId?:   string;
    pipelineExecutionId: string;
    /**
     * Name of the stage to be resumed. i.e "Stage 1"
     */
    pipelineStageName: string;
}

export interface ResumeExecutionPayload {
    clientMutationId?: ClientMutationID12;
    execution?:        PurpleExecution;
}

export interface ClientMutationID12 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PurpleExecution {
    arguments?: { [key: string]: any };
    return?:    any;
}

/**
 * Beta: Trigger a Workflow/Pipeline Execution.
 */
export interface StartExecution {
    arguments?: StartExecutionArguments;
    return?:    StartExecutionPayload;
}

export interface StartExecutionArguments {
    input: StartExecutionInput;
}

export interface StartExecutionInput {
    /**
     * Application identifier of a Workflow or Pipeline
     */
    applicationId:     string;
    clientMutationId?: string;
    /**
     * Beta: Continue with default values in case of pipelines with runtime variables
     */
    continueWithDefaultValues?: boolean;
    /**
     * Entity identifier of a Workflow or Pipeline
     */
    entityId: string;
    /**
     * Skip deployment on the host, if the same artifact is already deployed
     */
    excludeHostsWithSameArtifact?: boolean;
    /**
     * Workflow or Pipeline
     */
    executionType: ExecutionType;
    /**
     * Execution notes
     */
    notes?: string;
    /**
     * Service inputs required for the execution
     */
    serviceInputs?: Array<null | ServiceInput>;
    /**
     * List of hostnames, if targeted to a specific host
     */
    specificHosts?: Array<null | string>;
    /**
     * Set to true if the deployment target is specific hosts. Provide specificHosts field along
     * with this.
     */
    targetToSpecificHosts?: boolean;
    /**
     * Variable inputs required for the executio
     */
    variableInputs?: Array<null | VariableInput>;
}

export interface ServiceInput {
    /**
     * artifact inputs fot the service
     */
    artifactValueInput?: ArtfifactValueInput;
    /**
     * name of the service providing input for
     */
    name: string;
}

/**
 * artifact inputs fot the service
 */
export interface ArtfifactValueInput {
    /**
     * artifact Id input if value type is ARTIFACT_ID
     */
    artifactId?: ArtifactIDInput;
    /**
     * Build number input if value type is BUILD_NUMBER
     */
    buildNumber?: BuildNumberInput;
    /**
     * Parameterized artifact source input if value type is PARAMETERIZED_ARTIFACT_SOURCE
     */
    parameterizedArtifactSource?: ParameterizedArtifactSourceInput;
    /**
     * type of the artifactValue: Build number, artifactId or parameterized artifact source
     */
    valueType: ArtifactInputType;
}

/**
 * artifact Id input if value type is ARTIFACT_ID
 */
export interface ArtifactIDInput {
    /**
     * artifactId
     */
    artifactId: string;
}

/**
 * Build number input if value type is BUILD_NUMBER
 */
export interface BuildNumberInput {
    /**
     * name of the artifact source to which the specified build number comes from
     */
    artifactSourceName: string;
    /**
     * build number to deploy
     */
    buildNumber: string;
}

/**
 * Parameterized artifact source input if value type is PARAMETERIZED_ARTIFACT_SOURCE
 */
export interface ParameterizedArtifactSourceInput {
    /**
     * name of the artifact source to which the specified build number comes from
     */
    artifactSourceName: string;
    /**
     * build number to deploy
     */
    buildNumber: string;
    /**
     * parameters and their runtime values
     */
    parameterValueInputs?: Array<null | ParameterValueInput>;
}

export interface ParameterValueInput {
    /**
     * parameter name
     */
    name: string;
    /**
     * runtime value for parameter
     */
    value: string;
}

/**
 * type of the artifactValue: Build number, artifactId or parameterized artifact source
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum ArtifactInputType {
    ArtifactID = "ARTIFACT_ID",
    BuildNumber = "BUILD_NUMBER",
    ParameterizedArtifactSource = "PARAMETERIZED_ARTIFACT_SOURCE",
}

export interface StartExecutionPayload {
    clientMutationId?: ClientMutationID13;
    execution?:        FluffyExecution;
    /**
     * Get This field to know if there are any Warnings/Messages but the execution can be
     * started successfully. For Example in case of user providing extra inputs.
     */
    warningMessage?: WarningMessage;
}

export interface ClientMutationID13 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffyExecution {
    arguments?: { [key: string]: any };
    return?:    any;
}

/**
 * Get This field to know if there are any Warnings/Messages but the execution can be
 * started successfully. For Example in case of user providing extra inputs.
 */
export interface WarningMessage {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Updates an application and returns it.
 */
export interface UpdateApplication {
    arguments?: UpdateApplicationArguments;
    return?:    UpdateApplicationPayload;
}

export interface UpdateApplicationArguments {
    input: UpdateApplicationInput;
}

export interface UpdateApplicationInput {
    applicationId:     string;
    clientMutationId?: string;
    description?:      string;
    /**
     * Beta: When this is set to true, all manual triggers will require API Key authorization.
     * Doc link:
     * https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
     */
    isManualTriggerAuthorized?: boolean;
    name?:                      string;
}

export interface UpdateApplicationPayload {
    application?:      TentacledApplication;
    clientMutationId?: ClientMutationID14;
}

export interface TentacledApplication {
    arguments?: { [key: string]: any };
    return?:    Application;
}

export interface ClientMutationID14 {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Updates  Application Git Sync Configuration. Creates the configuration, in case it does
 * not exist. Returns updated git sync configuration.
 */
export interface UpdateApplicationGitSyncConfig {
    arguments?: UpdateApplicationGitSyncConfigArguments;
    return?:    UpdateApplicationGitSyncConfigPayload;
}

export interface UpdateApplicationGitSyncConfigArguments {
    input: UpdateApplicationGitSyncConfigInput;
}

export interface UpdateApplicationGitSyncConfigInput {
    applicationId:     string;
    branch:            string;
    clientMutationId?: string;
    gitConnectorId:    string;
    /**
     * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
     * type, provide the Repo Name to use from that account.
     */
    repositoryName?: string;
    syncEnabled:     boolean;
}

export interface UpdateApplicationGitSyncConfigPayload {
    clientMutationId?: ClientMutationID15;
    gitSyncConfig?:    PurpleGitSyncConfig;
}

export interface ClientMutationID15 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PurpleGitSyncConfig {
    arguments?: { [key: string]: any };
    return?:    GitSyncConfig;
}

/**
 * Enable/disable Git Sync for an application. Returns updated application.
 */
export interface UpdateApplicationGitSyncConfigStatus {
    arguments?: UpdateApplicationGitSyncConfigStatusArguments;
    return?:    UpdateApplicationGitSyncConfigStatusPayload;
}

export interface UpdateApplicationGitSyncConfigStatusArguments {
    input: UpdateApplicationGitSyncConfigStatusInput;
}

export interface UpdateApplicationGitSyncConfigStatusInput {
    applicationId:     string;
    clientMutationId?: string;
    syncEnabled:       boolean;
}

export interface UpdateApplicationGitSyncConfigStatusPayload {
    clientMutationId?: ClientMutationID16;
    gitSyncConfig?:    FluffyGitSyncConfig;
}

export interface ClientMutationID16 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffyGitSyncConfig {
    arguments?: { [key: string]: any };
    return?:    GitSyncConfig;
}

/**
 * Beta
 */
export interface UpdateCloudProvider {
    arguments?: UpdateCloudProviderArguments;
    return?:    UpdateCloudProviderPayload;
}

export interface UpdateCloudProviderArguments {
    input: UpdateCloudProviderInput;
}

export interface UpdateCloudProviderInput {
    awsCloudProvider?:                UpdateAwsCloudProviderInput;
    azureCloudProvider?:              UpdateAzureCloudProviderInput;
    clientMutationId?:                string;
    cloudProviderId:                  string;
    cloudProviderType:                CloudProviderType;
    gcpCloudProvider?:                UpdateGcpCloudProviderInput;
    k8sCloudProvider?:                UpdateK8SCloudProviderInput;
    pcfCloudProvider?:                UpdatePcfCloudProviderInput;
    physicalDataCenterCloudProvider?: UpdatePhysicalDataCenterCloudProviderInput;
    spotInstCloudProvider?:           UpdateSpotInstCloudProviderInput;
}

export interface UpdateAwsCloudProviderInput {
    credentialsType?:        AwsCredentialsType;
    crossAccountAttributes?: UpdateAwsCrossAccountAttributes;
    defaultRegion?:          string;
    ec2IamCredentials?:      UpdateEc2IamCredentials;
    manualCredentials?:      UpdateAwsManualCredentials;
    name?:                   string;
}

export interface UpdateAwsCrossAccountAttributes {
    assumeCrossAccountRole?: boolean;
    crossAccountRoleArn?:    string;
    externalId?:             string;
}

export interface UpdateEc2IamCredentials {
    delegateSelector?: string;
    usageScope?:       UsageScopeInput;
}

export interface UpdateAwsManualCredentials {
    accessKey?:         string;
    accessKeySecretId?: string;
    secretKeySecretId?: string;
}

export interface UpdateAzureCloudProviderInput {
    clientId?:    string;
    keySecretId?: string;
    name?:        string;
    tenantId?:    string;
}

export interface UpdateGcpCloudProviderInput {
    delegateSelector?:          string;
    delegateSelectors?:         string[];
    name?:                      string;
    serviceAccountKeySecretId?: string;
    skipValidation?:            boolean;
    useDelegate?:               boolean;
    useDelegateSelectors?:      boolean;
}

export interface UpdateK8SCloudProviderInput {
    clusterDetailsType?:    ClusterDetailsType;
    inheritClusterDetails?: UpdateInheritClusterDetails;
    manualClusterDetails?:  UpdateManualClusterDetails;
    name?:                  string;
    skipValidation?:        boolean;
}

export interface UpdateInheritClusterDetails {
    delegateName?:      string;
    delegateSelectors?: string[];
    usageScope?:        UsageScopeInput;
}

export interface UpdateManualClusterDetails {
    masterUrl?:           string;
    none?:                UpdateNone;
    oidcToken?:           UpdateOIDCToken;
    serviceAccountToken?: UpdateServiceAccountToken;
    type?:                ManualClusterDetailsAuthenticationType;
    usernameAndPassword?: UpdateUsernameAndPasswordAuthentication;
}

export interface UpdateNone {
    caCertificateSecretId?:       string;
    clientCertificateSecretId?:   string;
    clientKeyAlgorithm?:          string;
    clientKeyPassphraseSecretId?: string;
    clientKeySecretId?:           string;
    passwordSecretId?:            string;
    serviceAccountTokenSecretId?: string;
    usageScope?:                  UsageScopeInput;
    userName?:                    string;
}

export interface UpdateOIDCToken {
    clientIdSecretId?:     string;
    clientSecretSecretId?: string;
    identityProviderUrl?:  string;
    passwordSecretId?:     string;
    scopes?:               string;
    userName?:             string;
}

export interface UpdateServiceAccountToken {
    serviceAccountTokenSecretId?: string;
}

export interface UpdateUsernameAndPasswordAuthentication {
    passwordSecretId?: string;
    userName?:         string;
    userNameSecretId?: string;
}

export interface UpdatePcfCloudProviderInput {
    endpointUrl?:      string;
    name?:             string;
    passwordSecretId?: string;
    skipValidation?:   boolean;
    userName?:         string;
    userNameSecretId?: string;
}

export interface UpdatePhysicalDataCenterCloudProviderInput {
    name?:       string;
    usageScope?: UsageScopeInput;
}

export interface UpdateSpotInstCloudProviderInput {
    accountId?:     string;
    name?:          string;
    tokenSecretId?: string;
}

export interface UpdateCloudProviderPayload {
    clientMutationId?: ClientMutationID17;
    cloudProvider?:    FluffyCloudProvider;
}

export interface ClientMutationID17 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffyCloudProvider {
    arguments?: { [key: string]: any };
    return?:    any;
}

/**
 * Updates a Connector and returns it.
 */
export interface UpdateConnector {
    arguments?: UpdateConnectorArguments;
    return?:    UpdateConnectorPayload;
}

export interface UpdateConnectorArguments {
    input: UpdateConnectorInput;
}

export interface UpdateConnectorInput {
    clientMutationId?: string;
    connectorId:       string;
    connectorType:     ConnectorType;
    dockerConnector?:  DockerConnectorInput;
    gitConnector?:     UpdateGitConnectorInput;
    helmConnector?:    HelmConnectorInput;
    nexusConnector?:   NexusConnectorInput;
}

export interface UpdateGitConnectorInput {
    branch?:              string;
    customCommitDetails?: CustomCommitDetailsInput;
    delegateSelectors?:   string[];
    generateWebhookUrl?:  boolean;
    name?:                string;
    passwordSecretId?:    string;
    sshSettingId?:        string;
    URL?:                 string;
    usageScope?:          UsageScopeInput;
    userName?:            string;
}

export interface UpdateConnectorPayload {
    clientMutationId?: ClientMutationID18;
    connector?:        FluffyConnector;
}

export interface ClientMutationID18 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffyConnector {
    arguments?: { [key: string]: any };
    return?:    any;
}

/**
 * Beta: Update a secret.
 */
export interface UpdateSecret {
    arguments?: UpdateSecretArguments;
    return?:    UpdateSecretPayload;
}

export interface UpdateSecretArguments {
    input: UpdateSecretInput;
}

export interface UpdateSecretInput {
    clientMutationId?: string;
    encryptedText?:    UpdateEncryptedText;
    secretId:          string;
    secretType:        SecretType;
    sshCredential?:    UpdateSSHCredential;
    winRMCredential?:  UpdateWinRMCredential;
}

export interface UpdateEncryptedText {
    inheritScopesFromSM?: boolean;
    name?:                string;
    scopedToAccount?:     boolean;
    secretReference?:     string;
    usageScope?:          UsageScopeInput;
    value?:               string;
}

export interface UpdateSSHCredential {
    authenticationScheme?:   SSHAuthenticationScheme;
    kerberosAuthentication?: KerberosAuthenticationInput;
    name?:                   string;
    sshAuthentication?:      SSHAuthenticationInput;
    usageScope?:             UsageScopeInput;
}

export interface UpdateWinRMCredential {
    authenticationScheme?: WinRMAuthenticationScheme;
    domain?:               string;
    name?:                 string;
    passwordSecretId?:     string;
    port?:                 number;
    skipCertCheck?:        boolean;
    usageScope?:           UsageScopeInput;
    userName?:             string;
    useSSL?:               boolean;
}

export interface UpdateSecretPayload {
    clientMutationId?: ClientMutationID19;
    secret?:           FluffySecret;
}

export interface ClientMutationID19 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffySecret {
    arguments?: { [key: string]: any };
    return?:    any;
}

/**
 * Update secret manager
 */
export interface UpdateSecretManager {
    arguments?: UpdateSecretManagerArguments;
    return?:    UpsertSecretManagerPayload;
}

export interface UpdateSecretManagerArguments {
    input: UpdateSecretManagerInput;
}

export interface UpdateSecretManagerInput {
    clientMutationId?:          string;
    hashicorpVaultConfigInput?: UpdateHashicorpVaultInput;
    secretManagerId:            string;
    secretManagerType:          SecretManagerType;
}

export interface UpdateHashicorpVaultInput {
    authDetails?:                 HashicorpVaultAuthDetails;
    isDefault?:                   boolean;
    isReadOnly?:                  boolean;
    name?:                        string;
    secretEngineRenewalInterval?: { [key: string]: any };
    usageScope?:                  UsageScopeInput;
}

/**
 * Updates a Trigger and returns it.
 */
export interface UpdateTrigger {
    arguments?: UpdateTriggerArguments;
    return?:    UpdateTriggerPayload;
}

export interface UpdateTriggerArguments {
    input: UpdateTriggerInput;
}

export interface UpdateTriggerInput {
    /**
     * Action performed on trigger execute: Workflow/Pipeline execution
     */
    action: TriggerActionInput;
    /**
     * Application Id
     */
    applicationId:     string;
    clientMutationId?: string;
    /**
     * Condition of which Trigger will execute
     */
    condition: TriggerConditionInput;
    /**
     * Description of the Trigger
     */
    description?: string;
    /**
     * Name of the Trigger
     */
    name: string;
    /**
     * Id of Trigger to be updated
     */
    triggerId: string;
}

export interface UpdateTriggerPayload {
    clientMutationId?: ClientMutationID20;
    trigger?:          FluffyTrigger;
}

export interface ClientMutationID20 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffyTrigger {
    arguments?: { [key: string]: any };
    return?:    Trigger;
}

export interface UpdateUser {
    arguments?: UpdateUserArguments;
    return?:    UpdateUserPayload;
}

export interface UpdateUserArguments {
    input: UpdateUserInput;
}

export interface UpdateUserInput {
    clientMutationId?: string;
    id:                string;
    name?:             string;
    userGroupIds?:     string[];
}

export interface UpdateUserPayload {
    clientMutationId?: ClientMutationID21;
    user?:             FluffyUser;
}

export interface ClientMutationID21 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffyUser {
    arguments?: { [key: string]: any };
    return?:    User;
}

export interface UpdateUserGroup {
    arguments?: UpdateUserGroupArguments;
    return?:    UpdateUserGroupPayload;
}

export interface UpdateUserGroupArguments {
    input: UpdateUserGroupInput;
}

export interface UpdateUserGroupInput {
    clientMutationId?:     string;
    description?:          string;
    name?:                 string;
    notificationSettings?: NotificationSettingsInput;
    permissions?:          Permissions;
    ssoSetting?:           SSOSettingInput;
    userGroupId:           string;
    userIds?:              Array<null | string>;
}

export interface UpdateUserGroupPayload {
    clientMutationId?: ClientMutationID22;
    userGroup?:        IndecentUserGroup;
}

export interface ClientMutationID22 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface IndecentUserGroup {
    arguments?: { [key: string]: any };
    return?:    UserGroup;
}

export interface UpdateUserGroupPermissions {
    arguments?: UpdateUserGroupPermissionsArguments;
    return?:    UpdateUserGroupPermissionsPayload;
}

export interface UpdateUserGroupPermissionsArguments {
    input?: UpdateUserGroupPermissionsInput;
}

export interface UpdateUserGroupPermissionsInput {
    clientMutationId?: string;
    permissions:       Permissions;
    userGroupId:       string;
}

export interface UpdateUserGroupPermissionsPayload {
    clientMutationId?: ClientMutationID23;
    permissions?:      ReturnPermissions;
}

export interface ClientMutationID23 {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ReturnPermissions {
    arguments?: { [key: string]: any };
    return?:    PermissionsReturn;
}

export interface Query {
    /**
     * Get details about a Harness Application
     */
    application?: QueryApplication;
    /**
     * Fetch details about a Harness Application by it's name
     */
    applicationByName?: ApplicationByName;
    /**
     * Get details about Harness Applications.
     */
    applications?: QueryApplications;
    /**
     * Get details about an artifact.
     */
    artifact?: ArtifactObject;
    /**
     * Get details about one or multiple Artifacts.
     */
    artifacts?: Artifacts;
    /**
     * Get difference in terms of YAML for a changeSet
     * (and a specific resource within the changeSet).This returns paginated data.
     */
    auditChangeContent?: AuditChangeContent;
    /**
     * Get a list of changeSets.This returns paginated data.
     */
    audits?: Audits;
    /**
     * Beta: Cloud Cost Management export data apis
     */
    ceClusterBillingData?: CeClusterBillingDataObject;
    /**
     * Get details about a Cloud Provider.
     */
    cloudProvider?: QueryCloudProvider;
    /**
     * Beta
     */
    cloudProviderByName?: CloudProviderByName;
    /**
     * Get details about Cloud Providers.
     */
    cloudProviders?: CloudProviders;
    /**
     * Get details about a Connector.
     */
    connector?: QueryConnector;
    /**
     * Get details about Connectors.
     */
    connectors?: Connectors;
    /**
     * Get statistics about one or multiple deployments.
     */
    deploymentStats?: DeploymentStats;
    /**
     * Get details about a Harness Environment.
     */
    environment?: QueryEnvironment;
    /**
     * Get details about one or multiple Harness Environments.
     */
    environments?: QueryEnvironments;
    /**
     * Get the execution status of a Workflow.
     */
    execution?: QueryExecution;
    /**
     * Beta: Get required inputs to start an execution of a Workflow or Pipeline
     */
    executionInputs?: ExecutionInputs;
    /**
     * Get a list of executions, with filtering options.
     */
    executions?: Executions;
    /**
     * Get details about an infrastructure using Id
     */
    infrastructureDefinition?: InfrastructureDefinitionObject;
    /**
     * Get details about an infrastructure using name
     */
    infrastructureDefinitionByName?: InfrastructureDefinitionByName;
    /**
     * Get infrastructures using filters
     */
    infrastructureDefinitions?: QueryInfrastructureDefinitions;
    /**
     * Get details about instances.
     */
    instances?: Instances;
    /**
     * Get details about K8s labels.
     */
    k8sLabels?:                  K8SLabels;
    k8sWorkloadRecommendations?: K8SWorkloadRecommendations;
    /**
     * Get a Pipeline object by ID.
     */
    pipeline?: PipelineObject;
    /**
     * Get a Pipeline object by ID.
     */
    pipelineByName?: PipelineByName;
    /**
     * Get details about one or multiple Pipelines.
     */
    pipelines?: QueryPipelines;
    /**
     * Beta: Get details about secret.
     */
    secret?: QuerySecret;
    /**
     * Beta: Get details about secret by name.
     */
    secretByName?: SecretByName;
    /**
     * Beta: Get details about a Secret Manager.
     */
    secretManager?: QuerySecretManager;
    /**
     * Beta: Get Secret Manager by name.
     */
    secretManagerByName?: SecretManagerByName;
    /**
     * Beta: List Secret Manager.
     */
    secretManagers?: SecretManagers;
    /**
     * Get details about a Harness Service.
     */
    service?: QueryService;
    /**
     * Get a list of Harness Services, by applicationId. This returns paginated data.
     */
    services?:     QueryServices;
    ssoProvider?:  SsoProvider;
    ssoProviders?: SsoProviders;
    /**
     * Get tag details using tag uuid
     */
    tag?: TagObject;
    /**
     * Get tag details using tag name
     */
    tagByName?: TagByName;
    /**
     * Get the list of tags. This returns paginated data.
     */
    tags?: QueryTags;
    /**
     * Get details about a Trigger.
     */
    trigger?: QueryTrigger;
    /**
     * Get details about a Trigger  by it's name
     */
    triggerByName?: TriggerByName;
    /**
     * Get a list of Harness Triggers, This returns paginated data.
     */
    triggers?: Triggers;
    /**
     * fetch a user by id
     */
    user?: QueryUser;
    /**
     * fetch a user by email
     */
    userByEmail?: UserByEmail;
    /**
     * fetch a user by name
     */
    userByName?:      UserByName;
    userGroup?:       QueryUserGroup;
    userGroupByName?: UserGroupByName;
    userGroups?:      QueryUserGroups;
    /**
     * fetch a list of users
     */
    users?: QueryUsers;
    /**
     * Get a Workflow object by ID.
     */
    workflow?: WorkflowObject;
    /**
     * Fetch details about a  Workflow by it's name
     */
    workflowByName?: WorkflowByName;
    /**
     * Get a list of Workflows, by applicationId. This returns paginated data.
     */
    workflows?: QueryWorkflows;
}

/**
 * Get details about a Harness Application
 */
export interface QueryApplication {
    input?:  ApplicationInput;
    output?: Application;
}

export interface ApplicationInput {
    applicationId: string;
}

/**
 * Fetch details about a Harness Application by it's name
 */
export interface ApplicationByName {
    input?:  ApplicationByNameInput;
    output?: Application;
}

export interface ApplicationByNameInput {
    name: string;
}

/**
 * Get details about Harness Applications.
 */
export interface QueryApplications {
    input?:  ApplicationsInput;
    output?: ApplicationConnection;
}

export interface ApplicationsInput {
    filters?: Array<null | ApplicationFilter>;
    limit:    number;
    offset?:  number;
}

export interface ApplicationFilter {
    application?: IDFilter;
    tag?:         ApplicationTagFilter;
}

export interface ApplicationTagFilter {
    entityType?: TagType;
    tags?:       Array<null | TagInput>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum TagType {
    Application = "APPLICATION",
}

export interface ApplicationConnection {
    nodes?:    AmbitiousNodes;
    pageInfo?: AmbitiousPageInfo;
}

export interface AmbitiousNodes {
    arguments?: { [key: string]: any };
    return?:    Array<null | Application>;
}

export interface AmbitiousPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get details about an artifact.
 */
export interface ArtifactObject {
    input?:  ArtifactInput;
    output?: Artifact;
}

export interface ArtifactInput {
    artifactId: string;
}

export interface Artifact {
    artifactSource?: ArtifactSource;
    /**
     * Build No
     */
    buildNo?: BuildNo;
    /**
     * Collected At
     */
    collectedAt?: CollectedAt;
    /**
     * Artifact ID
     */
    id?: ArtifactID;
}

export interface ArtifactSource {
    arguments?: { [key: string]: any };
    return?:    any;
}

/**
 * Build No
 */
export interface BuildNo {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Collected At
 */
export interface CollectedAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

/**
 * Artifact ID
 */
export interface ArtifactID {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Get details about one or multiple Artifacts.
 */
export interface Artifacts {
    input?:  ArtifactsInput;
    output?: ArtifactConnection;
}

export interface ArtifactsInput {
    filters?: Array<null | ArtifactFilter>;
    limit:    number;
    offset?:  number;
}

export interface ArtifactFilter {
    artifact?:           IDFilter;
    artifactSource?:     IDFilter;
    artifactStreamType?: IDFilter;
}

export interface ArtifactConnection {
    nodes?:    CunningNodes;
    pageInfo?: CunningPageInfo;
}

export interface CunningNodes {
    arguments?: { [key: string]: any };
    return?:    Array<null | Artifact>;
}

export interface CunningPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get difference in terms of YAML for a changeSet
 * (and a specific resource within the changeSet).This returns paginated data.
 */
export interface AuditChangeContent {
    input?:  AuditChangeContentInput;
    output?: ChangeContentConnection;
}

export interface AuditChangeContentInput {
    filters?: Array<null | ChangeContentFilter>;
    limit:    number;
    offset?:  number;
}

export interface ChangeContentFilter {
    /**
     * Unique ID of a changeSet
     */
    changeSetId: string;
    /**
     * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
     */
    resourceId?: string;
}

export interface ChangeContentConnection {
    nodes?:    MagentaNodes;
    pageInfo?: MagentaPageInfo;
}

export interface MagentaNodes {
    arguments?: { [key: string]: any };
    return?:    Array<null | ChangeContent>;
}

export interface ChangeContent {
    /**
     * Unique ID of a changeSet
     */
    changeSetId?: ChangeSetID;
    /**
     * New YAML content after the changeSet got triggered
     */
    newYaml?: NewYAML;
    /**
     * New YAML path after the changeSet got triggered
     */
    newYamlPath?: NewYAMLPath;
    /**
     * Old YAML content before the changeSet got triggered
     */
    oldYaml?: OldYAML;
    /**
     * Old YAML path before the changeSet got triggered
     */
    oldYamlPath?: OldYAMLPath;
    /**
     * Unique ID of a resource, e.g.Application, Environment
     */
    resourceId?: ResourceID;
}

/**
 * Unique ID of a changeSet
 */
export interface ChangeSetID {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * New YAML content after the changeSet got triggered
 */
export interface NewYAML {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * New YAML path after the changeSet got triggered
 */
export interface NewYAMLPath {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Old YAML content before the changeSet got triggered
 */
export interface OldYAML {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Old YAML path before the changeSet got triggered
 */
export interface OldYAMLPath {
    arguments?: { [key: string]: any };
    return?:    string;
}

/**
 * Unique ID of a resource, e.g.Application, Environment
 */
export interface ResourceID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface MagentaPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get a list of changeSets.This returns paginated data.
 */
export interface Audits {
    input?:  AuditsInput;
    output?: ChangeSetConnection;
}

export interface AuditsInput {
    filters?: Array<null | ChangeSetFilter>;
    limit:    number;
    offset?:  number;
}

export interface ChangeSetFilter {
    time?: TimeRangeFilter;
}

/**
 * Filter by time
 */
export interface TimeRangeFilter {
    /**
     * Filter for a relative time period
     */
    relative?: RelativeTimeRange;
    /**
     * Filter within a specific time range
     */
    specific?: TimeRange;
}

/**
 * Filter for a relative time period
 */
export interface RelativeTimeRange {
    noOfUnits: { [key: string]: any };
    timeUnit:  TimeUnit;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum TimeUnit {
    Days = "DAYS",
    Hours = "HOURS",
    Minutes = "MINUTES",
    Weeks = "WEEKS",
}

/**
 * Filter within a specific time range
 */
export interface TimeRange {
    from: { [key: string]: any };
    to?:  { [key: string]: any };
}

export interface ChangeSetConnection {
    nodes?:    FriskyNodes;
    pageInfo?: FriskyPageInfo;
}

export interface FriskyNodes {
    arguments?: { [key: string]: any };
    return?:    any[];
}

export interface FriskyPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Beta: Cloud Cost Management export data apis
 */
export interface CeClusterBillingDataObject {
    input?:  CeClusterBillingDataInput;
    output?: OutputObject;
}

export interface CeClusterBillingDataInput {
    aggregateFunction?: Array<null | CeAggregation>;
    filters?:           Array<null | CeFilter>;
    groupBy?:           Array<null | CeGroupBy>;
    limit?:             number;
    offset?:            number;
    select?:            Array<null | CeSelect>;
    sortCriteria?:      Array<null | CeSort>;
}

export interface CeAggregation {
    cost?:        CeCost;
    function?:    CeAggregationFunction;
    utilization?: CeUtilization;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum CeCost {
    Idlecost = "IDLECOST",
    Totalcost = "TOTALCOST",
    Unallocatedcost = "UNALLOCATEDCOST",
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum CeAggregationFunction {
    Avg = "AVG",
    Sum = "SUM",
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum CeUtilization {
    CPULimit = "CPU_LIMIT",
    CPURequest = "CPU_REQUEST",
    CPUUtilizationValue = "CPU_UTILIZATION_VALUE",
    MemoryLimit = "MEMORY_LIMIT",
    MemoryRequest = "MEMORY_REQUEST",
    MemoryUtilizationValue = "MEMORY_UTILIZATION_VALUE",
}

export interface CeFilter {
    application?:  IDFilter;
    cluster?:      IDFilter;
    ecsService?:   IDFilter;
    endTime?:      TimeFilter;
    environment?:  IDFilter;
    instanceType?: IDFilter;
    label?:        CeLabelFilter;
    launchType?:   IDFilter;
    namespace?:    IDFilter;
    node?:         IDFilter;
    pod?:          IDFilter;
    service?:      IDFilter;
    startTime?:    TimeFilter;
    tag?:          CeTagFilter;
    task?:         IDFilter;
    workload?:     IDFilter;
}

export interface CeLabelFilter {
    labels?: Array<null | K8SLabelInput>;
}

export interface K8SLabelInput {
    name?:   string;
    values?: Array<null | string>;
}

export interface CeTagFilter {
    entityType?: CeTagType;
    tags?:       Array<null | TagInput>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum CeTagType {
    Application = "APPLICATION",
    Environment = "ENVIRONMENT",
    Service = "SERVICE",
}

export interface CeGroupBy {
    entity?:           CeEntityGroupBy;
    labelAggregation?: CeLabelAggregation;
    tagAggregation?:   CeTagAggregation;
    time?:             CeTimeAggregation;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum CeEntityGroupBy {
    Application = "Application",
    Cluster = "Cluster",
    EcsService = "EcsService",
    Environment = "Environment",
    LaunchType = "LaunchType",
    Namespace = "Namespace",
    Node = "Node",
    Pod = "Pod",
    Region = "Region",
    Service = "Service",
    Task = "Task",
    Workload = "Workload",
    WorkloadType = "WorkloadType",
}

export interface CeLabelAggregation {
    name?: string;
}

export interface CeTagAggregation {
    entityType?: CeTagType;
    tagName?:    string;
}

export interface CeTimeAggregation {
    timePeriod?: TimeType;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum TimeType {
    Day = "DAY",
    Hour = "HOUR",
    Month = "MONTH",
    Week = "WEEK",
}

export interface CeSelect {
    labels?: Array<null | string>;
}

export interface CeSort {
    order?:    SortOrder;
    sortType?: CeSortType;
}

/**
 * This data structure will be useful for bar charts which are aggregated over a period of
 * time
 *
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum SortOrder {
    Ascending = "ASCENDING",
    Descending = "DESCENDING",
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum CeSortType {
    Idlecost = "IDLECOST",
    Time = "TIME",
    Totalcost = "TOTALCOST",
    Unallocatedcost = "UNALLOCATEDCOST",
}

export interface OutputObject {
    data?: Data;
}

export interface Data {
    arguments?: { [key: string]: any };
    return?:    Array<null | BillingDataEntry>;
}

export interface BillingDataEntry {
    avgCpuUtilization?:    AvgCPUUtilization;
    avgMemoryUtilization?: AvgMemoryUtilization;
    cluster?:              Cluster;
    clusterId?:            BillingDataEntryClusterID;
    clusterType?:          ClusterType;
    cpuLimit?:             BillingDataEntryCPULimit;
    cpuRequest?:           BillingDataEntryCPURequest;
    ecs?:                  Ecs;
    harness?:              BillingDataEntryHarness;
    idleCost?:             IdleCost;
    instanceType?:         InstanceType;
    k8s?:                  K8S;
    labelName?:            LabelName;
    labelValue?:           LabelValue;
    memoryLimit?:          BillingDataEntryMemoryLimit;
    memoryRequest?:        BillingDataEntryMemoryRequest;
    region?:               Region;
    startTime?:            StartTime;
    systemCost?:           SystemCost;
    tagName?:              TagNameObject;
    tagValue?:             TagValueObject;
    totalCost?:            TotalCost;
    unallocatedCost?:      UnallocatedCost;
}

export interface AvgCPUUtilization {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface AvgMemoryUtilization {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface Cluster {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface BillingDataEntryClusterID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ClusterType {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface BillingDataEntryCPULimit {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface BillingDataEntryCPURequest {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface Ecs {
    arguments?: { [key: string]: any };
    return?:    CeEcsEntity;
}

export interface CeEcsEntity {
    launchType?: LaunchType;
    service?:    PurpleService;
    taskId?:     TaskID;
}

export interface LaunchType {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PurpleService {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface TaskID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface BillingDataEntryHarness {
    arguments?: { [key: string]: any };
    return?:    CeHarnessEntity;
}

export interface CeHarnessEntity {
    application?: StickyApplication;
    environment?: ReturnEnvironment;
    service?:     FluffyService;
}

export interface StickyApplication {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ReturnEnvironment {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface FluffyService {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface IdleCost {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface InstanceType {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface K8S {
    arguments?: { [key: string]: any };
    return?:    CeK8SEntity;
}

export interface CeK8SEntity {
    namespace?:      ReturnNamespace;
    node?:           Node;
    pod?:            Pod;
    selectedLabels?: SelectedLabels;
    workload?:       Workload;
    workloadType?:   ReturnWorkloadType;
}

export interface ReturnNamespace {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface Node {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface Pod {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface SelectedLabels {
    arguments?: { [key: string]: any };
    return?:    Array<null | CeK8SLabels>;
}

export interface CeK8SLabels {
    name?:  CeK8SLabelsName;
    value?: CeK8SLabelsValue;
}

export interface CeK8SLabelsName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface CeK8SLabelsValue {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface Workload {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ReturnWorkloadType {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface LabelName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface LabelValue {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface BillingDataEntryMemoryLimit {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface BillingDataEntryMemoryRequest {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface Region {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface StartTime {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface SystemCost {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface TagNameObject {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface TagValueObject {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface TotalCost {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface UnallocatedCost {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

/**
 * Get details about a Cloud Provider.
 */
export interface QueryCloudProvider {
    input?:  CloudProviderInput;
    output?: any;
}

export interface CloudProviderInput {
    cloudProviderId: string;
}

/**
 * Beta
 */
export interface CloudProviderByName {
    input?:  CloudProviderByNameInput;
    output?: any;
}

export interface CloudProviderByNameInput {
    name: string;
}

/**
 * Get details about Cloud Providers.
 */
export interface CloudProviders {
    input?:  CloudProvidersInput;
    output?: CloudProviderConnection;
}

export interface CloudProvidersInput {
    filters?: Array<null | CloudProviderFilter>;
    limit:    number;
    offset?:  number;
}

export interface CloudProviderFilter {
    cloudProvider?:     IDFilter;
    cloudProviderType?: CloudProviderTypeFilter;
    createdAt?:         TimeFilter;
    isCEEnabled?:       CEEnabledFilter;
}

export interface CloudProviderTypeFilter {
    operator?: Operator;
    values?:   Array<CloudProviderType | null>;
}

export interface CEEnabledFilter {
    operator?: Operator;
    values?:   Array<boolean | null>;
}

export interface CloudProviderConnection {
    nodes?:    MischievousNodes;
    pageInfo?: MischievousPageInfo;
}

export interface MischievousNodes {
    arguments?: { [key: string]: any };
    return?:    any[];
}

export interface MischievousPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get details about a Connector.
 */
export interface QueryConnector {
    input?:  ConnectorInput;
    output?: any;
}

export interface ConnectorInput {
    connectorId: string;
}

/**
 * Get details about Connectors.
 */
export interface Connectors {
    input?:  ConnectorsInput;
    output?: ConnectorConnection;
}

export interface ConnectorsInput {
    filters?: Array<null | ConnectorFilter>;
    limit:    number;
    offset?:  number;
}

export interface ConnectorFilter {
    connector?:     IDFilter;
    connectorType?: ConnectorTypeFilter;
    createdAt?:     TimeFilter;
}

export interface ConnectorTypeFilter {
    operator?: Operator;
    values?:   Array<ConnectorType | null>;
}

export interface ConnectorConnection {
    nodes?:    BraggadociousNodes;
    pageInfo?: BraggadociousPageInfo;
}

export interface BraggadociousNodes {
    arguments?: { [key: string]: any };
    return?:    any[];
}

export interface BraggadociousPageInfo {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get statistics about one or multiple deployments.
 */
export interface DeploymentStats {
    input?:  DeploymentStatsInput;
    output?: any;
}

export interface DeploymentStatsInput {
    aggregateFunction?:         DeploymentAggregationFunction;
    filters?:                   Array<null | DeploymentFilter>;
    groupBy?:                   Array<null | DeploymentAggregation>;
    includeIndirectExecutions?: boolean;
    sortCriteria?:              Array<null | DeploymentSortCriteria>;
}

export interface DeploymentAggregationFunction {
    count?:             CountAggregateOperation;
    duration?:          DurationAggregateOperation;
    instancesDeployed?: CountAggregateOperation;
    rollbackDuration?:  DurationAggregateOperation;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum CountAggregateOperation {
    Sum = "SUM",
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum DurationAggregateOperation {
    Average = "AVERAGE",
    Max = "MAX",
    Min = "MIN",
}

export interface DeploymentFilter {
    application?:      IDFilter;
    cloudProvider?:    IDFilter;
    duration?:         NumberFilter;
    endTime?:          TimeFilter;
    environment?:      IDFilter;
    environmentType?:  EnvironmentTypeFilter;
    pipeline?:         IDFilter;
    rollbackDuration?: NumberFilter;
    service?:          IDFilter;
    startTime?:        TimeFilter;
    status?:           IDFilter;
    tag?:              DeploymentTagFilter;
    trigger?:          IDFilter;
    triggeredBy?:      IDFilter;
    workflow?:         IDFilter;
}

export interface EnvironmentTypeFilter {
    operator?: Operator;
    values?:   Array<EnvironmentType | null>;
}

export interface DeploymentAggregation {
    entityAggregation?: DeploymentEntityAggregation;
    tagAggregation?:    DeploymentTagAggregation;
    timeAggregation?:   TimeSeriesAggregation;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum DeploymentEntityAggregation {
    Application = "Application",
    CloudProvider = "CloudProvider",
    Environment = "Environment",
    EnvironmentType = "EnvironmentType",
    Pipeline = "Pipeline",
    Service = "Service",
    Status = "Status",
    Trigger = "Trigger",
    TriggeredBy = "TriggeredBy",
    Workflow = "Workflow",
}

export interface DeploymentTagAggregation {
    entityType?: DeploymentTagType;
    tagName?:    string;
}

export interface TimeSeriesAggregation {
    timeAggregationType?:  TimeType;
    timeAggregationValue?: number;
}

export interface DeploymentSortCriteria {
    sortOrder?: SortOrder;
    sortType?:  DeploymentSortType;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum DeploymentSortType {
    Count = "Count",
    Duration = "Duration",
}

/**
 * Get details about a Harness Environment.
 */
export interface QueryEnvironment {
    input?:  EnvironmentInput;
    output?: Environment;
}

export interface EnvironmentInput {
    environmentId: string;
}

/**
 * Get details about one or multiple Harness Environments.
 */
export interface QueryEnvironments {
    input?:  EnvironmentsInput;
    output?: EnvironmentConnection;
}

export interface EnvironmentsInput {
    filters?: Array<null | EnvironmentFilter>;
    limit:    number;
    offset?:  number;
}

export interface EnvironmentFilter {
    application?:     IDFilter;
    environment?:     IDFilter;
    environmentType?: EnvironmentTypeFilter;
    tag?:             EnvironmentTagFilter;
}

export interface EnvironmentTagFilter {
    entityType?: TagType;
    tags?:       Array<null | TagInput>;
}

/**
 * Get the execution status of a Workflow.
 */
export interface QueryExecution {
    input?:  ExecutionInput;
    output?: any;
}

export interface ExecutionInput {
    executionId: string;
}

/**
 * Beta: Get required inputs to start an execution of a Workflow or Pipeline
 */
export interface ExecutionInputs {
    input?:  ExecutionInputsInput;
    output?: ExecutionInputsOutput;
}

export interface ExecutionInputsInput {
    /**
     * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
     * information
     */
    applicationId: string;
    /**
     * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
     */
    entityId: string;
    /**
     * Execution type: workflow/ pipeline
     */
    executionType: ExecutionType;
    /**
     * Variable inputs if the Workflow or Pipeline is templatized. Provide the required variable
     * values to know about the required inputs
     */
    variableInputs?: Array<null | VariableInput>;
}

export interface ExecutionInputsOutput {
    /**
     * List of Services that need artifact input
     */
    serviceInputs?: ServiceInputs;
}

/**
 * List of Services that need artifact input
 */
export interface ServiceInputs {
    arguments?: { [key: string]: any };
    return?:    Array<null | Service>;
}

/**
 * Get a list of executions, with filtering options.
 */
export interface Executions {
    input?:  ExecutionsInput;
    output?: ExecutionConnection;
}

export interface ExecutionsInput {
    filters?: Array<null | ExecutionFilter>;
    /**
     * Set this flag to true to include workflow executions along pipeline
     */
    includeIndirectExecutions?: boolean;
    limit:                      number;
    offset?:                    number;
}

export interface ExecutionFilter {
    application?:         IDFilter;
    cloudProvider?:       IDFilter;
    creationTime?:        TimeFilter;
    duration?:            NumberFilter;
    endTime?:             TimeFilter;
    environment?:         IDFilter;
    environmentType?:     EnvironmentTypeFilter;
    execution?:           IDFilter;
    pipeline?:            IDFilter;
    pipelineExecutionId?: IDFilter;
    service?:             IDFilter;
    startTime?:           TimeFilter;
    status?:              IDFilter;
    tag?:                 DeploymentTagFilter;
    trigger?:             IDFilter;
    triggeredBy?:         IDFilter;
    workflow?:            IDFilter;
}

export interface ExecutionConnection {
    nodes?:    Nodes1;
    pageInfo?: PageInfo1;
}

export interface Nodes1 {
    arguments?: { [key: string]: any };
    return?:    any[];
}

export interface PageInfo1 {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get details about an infrastructure using Id
 */
export interface InfrastructureDefinitionObject {
    input?:  InfrastructureDefinitionInput;
    output?: InfrastructureDefinition;
}

export interface InfrastructureDefinitionInput {
    infrastructureId: string;
}

/**
 * Get details about an infrastructure using name
 */
export interface InfrastructureDefinitionByName {
    input?:  InfrastructureDefinitionByNameInput;
    output?: InfrastructureDefinition;
}

export interface InfrastructureDefinitionByNameInput {
    environmentId:      string;
    infrastructureName: string;
}

/**
 * Get infrastructures using filters
 */
export interface QueryInfrastructureDefinitions {
    input?:  InfrastructureDefinitionsInput;
    output?: InfrastructureDefinitionConnection;
}

export interface InfrastructureDefinitionsInput {
    filters?: Array<null | InfrastructureDefinitionFilter>;
    limit:    number;
    offset?:  number;
}

/**
 * Get details about instances.
 */
export interface Instances {
    input?:  InstancesInput;
    output?: InstanceConnection;
}

export interface InstancesInput {
    filters?: Array<null | InstanceFilter>;
    limit:    number;
    offset?:  number;
}

export interface InstanceFilter {
    application?:   IDFilter;
    cloudProvider?: IDFilter;
    createdAt?:     TimeFilter;
    environment?:   IDFilter;
    instanceType?:  InstanceTypeEnum;
    service?:       IDFilter;
    tag?:           InstanceTagFilter;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum InstanceTypeEnum {
    AutoscalingGroupInstance = "AUTOSCALING_GROUP_INSTANCE",
    CodeDeployInstance = "CODE_DEPLOY_INSTANCE",
    Ec2Instance = "EC2_INSTANCE",
    EcsContainerInstance = "ECS_CONTAINER_INSTANCE",
    KubernetesContainerInstance = "KUBERNETES_CONTAINER_INSTANCE",
    PcfInstance = "PCF_INSTANCE",
    PhysicalHostInstance = "PHYSICAL_HOST_INSTANCE",
}

export interface InstanceTagFilter {
    entityType?: CeTagType;
    tags?:       Array<null | TagInput>;
}

export interface InstanceConnection {
    nodes?:    Nodes2;
    pageInfo?: PageInfo2;
}

export interface Nodes2 {
    arguments?: { [key: string]: any };
    return?:    any[];
}

export interface PageInfo2 {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get details about K8s labels.
 */
export interface K8SLabels {
    input?:  K8SLabelsInput;
    output?: K8SLabelConnection;
}

export interface K8SLabelsInput {
    filters?: Array<null | K8SLabelFilter>;
    limit:    number;
    offset?:  number;
}

export interface K8SLabelFilter {
    cluster?:      IDFilter;
    endTime?:      TimeFilter;
    namespace?:    IDFilter;
    startTime?:    TimeFilter;
    workloadName?: IDFilter;
}

export interface K8SLabelConnection {
    nodes?:    Nodes3;
    pageInfo?: PageInfo3;
}

export interface Nodes3 {
    arguments?: { [key: string]: any };
    return?:    Array<null | K8SLabel>;
}

export interface K8SLabel {
    name?:   K8SLabelName;
    values?: Values;
}

export interface K8SLabelName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface Values {
    arguments?: { [key: string]: any };
    return?:    Array<null | string>;
}

export interface PageInfo3 {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

export interface K8SWorkloadRecommendations {
    input?:  K8SWorkloadRecommendationsInput;
    output?: WorkloadRecommendationConnection;
}

export interface K8SWorkloadRecommendationsInput {
    filters?: Array<null | WorkloadFilter>;
    limit:    number;
    offset?:  number;
}

export interface WorkloadFilter {
    cluster?:      IDFilter;
    namespace?:    IDFilter;
    workloadName?: IDFilter;
    workloadType?: IDFilter;
}

export interface WorkloadRecommendationConnection {
    nodes?:    Nodes4;
    pageInfo?: PageInfo4;
}

export interface Nodes4 {
    arguments?: { [key: string]: any };
    return?:    Array<null | WorkloadRecommendation>;
}

export interface WorkloadRecommendation {
    clusterId?:                WorkloadRecommendationClusterID;
    clusterName?:              ClusterName;
    containerRecommendations?: ContainerRecommendations;
    estimatedSavings?:         EstimatedSavings;
    lastDayCost?:              LastDayCost;
    namespace?:                WorkloadRecommendationNamespace;
    numDays?:                  WorkloadRecommendationNumDays;
    preset?:                   Preset;
    workloadName?:             WorkloadName;
    workloadType?:             WorkloadRecommendationWorkloadType;
}

export interface WorkloadRecommendationClusterID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ClusterName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ContainerRecommendations {
    arguments?: { [key: string]: any };
    return?:    Array<null | ContainerRecommendation>;
}

export interface ContainerRecommendation {
    burstable?:         Burstable;
    containerName?:     ContainerName;
    current?:           Current;
    guaranteed?:        Guaranteed;
    numDays?:           ContainerRecommendationNumDays;
    p50?:               P50;
    p80?:               P80;
    p90?:               P90;
    p95?:               P95;
    p99?:               P99;
    recommended?:       Recommended;
    totalSamplesCount?: TotalSamplesCount;
}

export interface Burstable {
    arguments?: { [key: string]: any };
    return?:    ResourceRequirements;
}

export interface ResourceRequirements {
    limits?:   Limits;
    requests?: Requests;
    yaml?:     YAML;
}

export interface Limits {
    arguments?: { [key: string]: any };
    return?:    Array<null | ResourceEntry>;
}

export interface ResourceEntry {
    name?:     ResourceEntryName;
    quantity?: Quantity;
}

export interface ResourceEntryName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface Quantity {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface Requests {
    arguments?: { [key: string]: any };
    return?:    Array<null | ResourceEntry>;
}

export interface YAML {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface ContainerName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface Current {
    arguments?: { [key: string]: any };
    return?:    ResourceRequirements;
}

export interface Guaranteed {
    arguments?: { [key: string]: any };
    return?:    ResourceRequirements;
}

export interface ContainerRecommendationNumDays {
    arguments?: { [key: string]: any };
    return?:    number;
}

export interface P50 {
    arguments?: { [key: string]: any };
    return?:    ResourceRequirements;
}

export interface P80 {
    arguments?: { [key: string]: any };
    return?:    ResourceRequirements;
}

export interface P90 {
    arguments?: { [key: string]: any };
    return?:    ResourceRequirements;
}

export interface P95 {
    arguments?: { [key: string]: any };
    return?:    ResourceRequirements;
}

export interface P99 {
    arguments?: { [key: string]: any };
    return?:    ResourceRequirements;
}

export interface Recommended {
    arguments?: { [key: string]: any };
    return?:    ResourceRequirements;
}

export interface TotalSamplesCount {
    arguments?: { [key: string]: any };
    return?:    number;
}

export interface EstimatedSavings {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface LastDayCost {
    arguments?: { [key: string]: any };
    return?:    LastDayCostReturn;
}

export interface LastDayCostReturn {
    cpu?:    CPU;
    info?:   Info;
    memory?: Memory;
}

export interface CPU {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface Info {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface Memory {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface WorkloadRecommendationNamespace {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface WorkloadRecommendationNumDays {
    arguments?: { [key: string]: any };
    return?:    number;
}

export interface Preset {
    arguments?: { [key: string]: any };
    return?:    K8SWorkloadRecommendationPreset;
}

export interface K8SWorkloadRecommendationPreset {
    cpuLimit?:         ReturnCPULimit;
    cpuRequest?:       ReturnCPURequest;
    memoryLimit?:      ReturnMemoryLimit;
    memoryRequest?:    ReturnMemoryRequest;
    minCpuMilliCores?: MinCPUMilliCores;
    minMemoryBytes?:   MinMemoryBytes;
    safetyMargin?:     SafetyMargin;
}

export interface ReturnCPULimit {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface ReturnCPURequest {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface ReturnMemoryLimit {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface ReturnMemoryRequest {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface MinCPUMilliCores {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface MinMemoryBytes {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface SafetyMargin {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface WorkloadName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface WorkloadRecommendationWorkloadType {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface PageInfo4 {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get a Pipeline object by ID.
 */
export interface PipelineObject {
    input?:  PipelineInput;
    output?: Pipeline;
}

export interface PipelineInput {
    pipelineId: string;
}

/**
 * Get a Pipeline object by ID.
 */
export interface PipelineByName {
    input?:  PipelineByNameInput;
    output?: Pipeline;
}

export interface PipelineByNameInput {
    applicationId: string;
    pipelineName:  string;
}

/**
 * Get details about one or multiple Pipelines.
 */
export interface QueryPipelines {
    input?:  PipelinesInput;
    output?: PipelineConnection;
}

export interface PipelinesInput {
    filters?: Array<null | PipelineFilter>;
    limit:    number;
    offset?:  number;
}

export interface PipelineFilter {
    application?: IDFilter;
    pipeline?:    IDFilter;
    tag?:         PipelineTagFilter;
}

export interface PipelineTagFilter {
    entityType?: PipelineTagType;
    tags?:       Array<null | TagInput>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum PipelineTagType {
    Application = "APPLICATION",
    Pipeline = "PIPELINE",
}

/**
 * Beta: Get details about secret.
 */
export interface QuerySecret {
    input?:  SecretInput;
    output?: any;
}

export interface SecretInput {
    secretId:   string;
    secretType: SecretType;
}

/**
 * Beta: Get details about secret by name.
 */
export interface SecretByName {
    input?:  SecretByNameInput;
    output?: any;
}

export interface SecretByNameInput {
    name:       string;
    secretType: SecretType;
}

/**
 * Beta: Get details about a Secret Manager.
 */
export interface QuerySecretManager {
    input?:  SecretManagerInput;
    output?: SecretManager;
}

export interface SecretManagerInput {
    secretManagerId: string;
}

/**
 * Beta: Get Secret Manager by name.
 */
export interface SecretManagerByName {
    input?:  SecretManagerByNameInput;
    output?: SecretManager;
}

export interface SecretManagerByNameInput {
    name: string;
}

/**
 * Beta: List Secret Manager.
 */
export interface SecretManagers {
    input?:  SecretManagersInput;
    output?: SecretManagerConnection;
}

export interface SecretManagersInput {
    filters?: Array<null | SecretManagerFilter>;
    limit:    number;
    offset?:  number;
}

export interface SecretManagerFilter {
    secretManager?: IDFilter;
    type?:          SecretManagerTypeFilter;
}

export interface SecretManagerTypeFilter {
    operator?: Operator;
    values?:   Array<SecretManagerType | null>;
}

export interface SecretManagerConnection {
    nodes?:    Nodes5;
    pageInfo?: PageInfo5;
}

export interface Nodes5 {
    arguments?: { [key: string]: any };
    return?:    Array<null | SecretManager>;
}

export interface PageInfo5 {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get details about a Harness Service.
 */
export interface QueryService {
    input?:  ServiceInputObject;
    output?: Service;
}

export interface ServiceInputObject {
    serviceId: string;
}

/**
 * Get a list of Harness Services, by applicationId. This returns paginated data.
 */
export interface QueryServices {
    input?:  ServicesInput;
    output?: ServiceConnection;
}

export interface ServicesInput {
    filters?: Array<null | ServiceFilter>;
    limit:    number;
    offset?:  number;
}

export interface ServiceFilter {
    application?:    IDFilter;
    deploymentType?: DeploymentTypeFilter;
    service?:        IDFilter;
    tag?:            ServiceTagFilter;
}

export interface DeploymentTypeFilter {
    operator?: Operator;
    values?:   Array<DeploymentType | null>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum DeploymentType {
    Ami = "AMI",
    AwsCodedeploy = "AWS_CODEDEPLOY",
    AwsLambda = "AWS_LAMBDA",
    AzureVmss = "AZURE_VMSS",
    AzureWebapp = "AZURE_WEBAPP",
    Custom = "CUSTOM",
    Ecs = "ECS",
    Helm = "HELM",
    Kubernetes = "KUBERNETES",
    Pcf = "PCF",
    SSH = "SSH",
    Spotinst = "SPOTINST",
    Winrm = "WINRM",
}

export interface ServiceTagFilter {
    entityType?: ServiceTagType;
    tags?:       Array<null | TagInput>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum ServiceTagType {
    Application = "APPLICATION",
    Service = "SERVICE",
}

export interface SsoProvider {
    input?:  SsoProviderInput;
    output?: SSOProvider;
}

export interface SsoProviderInput {
    ssoProviderId: string;
}

export interface SSOProvider {
    id?:      SSOProviderID;
    name?:    SSOProviderName;
    ssoType?: SsoType;
}

export interface SSOProviderID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface SSOProviderName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface SsoType {
    arguments?: { [key: string]: any };
    return?:    SSOType;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum SSOType {
    LDAP = "LDAP",
    Saml = "SAML",
}

export interface SsoProviders {
    input?:  SsoProvidersInput;
    output?: SSOProviderConnection;
}

export interface SsoProvidersInput {
    limit:   number;
    offset?: number;
}

export interface SSOProviderConnection {
    nodes?:    Nodes6;
    pageInfo?: PageInfo6;
}

export interface Nodes6 {
    arguments?: { [key: string]: any };
    return?:    Array<null | SSOProvider>;
}

export interface PageInfo6 {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get tag details using tag uuid
 */
export interface TagObject {
    input?:  TagInputObject;
    output?: TagEntity;
}

export interface TagInputObject {
    tagId: string;
}

export interface TagEntity {
    createdAt?: TagEntityCreatedAt;
    createdBy?: TagEntityCreatedBy;
    id?:        TagEntityID;
    name?:      TagEntityName;
    usages?:    Usages;
}

export interface TagEntityCreatedAt {
    arguments?: { [key: string]: any };
    return?:    { [key: string]: any };
}

export interface TagEntityCreatedBy {
    arguments?: { [key: string]: any };
    return?:    User;
}

export interface TagEntityID {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface TagEntityName {
    arguments?: { [key: string]: any };
    return?:    string;
}

export interface Usages {
    arguments?: UsagesArguments;
    return?:    TagUsageConnection;
}

export interface UsagesArguments {
    filters?: Array<null | TagUsageFilter>;
    limit:    number;
    offset?:  number;
}

export interface TagUsageFilter {
    entityType?: EntityTypeFilter;
    tagName?:    IDFilter;
    tagValue?:   IDFilter;
}

export interface EntityTypeFilter {
    operator?: Operator;
    values?:   Array<EntityType | null>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum EntityType {
    Application = "APPLICATION",
    Artifact = "ARTIFACT",
    CloudProvider = "CLOUD_PROVIDER",
    CollaborationProvider = "COLLABORATION_PROVIDER",
    Connector = "CONNECTOR",
    Deployment = "DEPLOYMENT",
    Environment = "ENVIRONMENT",
    Instance = "INSTANCE",
    Pipeline = "PIPELINE",
    Provisioner = "PROVISIONER",
    Service = "SERVICE",
    Trigger = "TRIGGER",
    Workflow = "WORKFLOW",
}

export interface TagUsageConnection {
    nodes?:    Nodes7;
    pageInfo?: PageInfo7;
}

export interface Nodes7 {
    arguments?: { [key: string]: any };
    return?:    Array<null | TagLink>;
}

export interface PageInfo7 {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get tag details using tag name
 */
export interface TagByName {
    input?:  TagByNameInput;
    output?: TagEntity;
}

export interface TagByNameInput {
    name: string;
}

/**
 * Get the list of tags. This returns paginated data.
 */
export interface QueryTags {
    input?:  TagsInput;
    output?: TagConnection;
}

export interface TagsInput {
    filters?: Array<null | TagEntityFilter>;
    limit:    number;
    offset?:  number;
}

export interface TagEntityFilter {
    tagId?:   IDFilter;
    tagName?: IDFilter;
}

export interface TagConnection {
    nodes?:    Nodes8;
    pageInfo?: PageInfo8;
}

export interface Nodes8 {
    arguments?: { [key: string]: any };
    return?:    Array<null | TagEntity>;
}

export interface PageInfo8 {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * Get details about a Trigger.
 */
export interface QueryTrigger {
    input?:  TriggerInput;
    output?: Trigger;
}

export interface TriggerInput {
    triggerId: string;
}

/**
 * Get details about a Trigger  by it's name
 */
export interface TriggerByName {
    input?:  TriggerByNameInput;
    output?: Trigger;
}

export interface TriggerByNameInput {
    applicationId: string;
    triggerName:   string;
}

/**
 * Get a list of Harness Triggers, This returns paginated data.
 */
export interface Triggers {
    input?:  TriggersInput;
    output?: TriggerConnection;
}

export interface TriggersInput {
    filters?: Array<null | TriggerFilter>;
    limit:    number;
    offset?:  number;
}

export interface TriggerFilter {
    application?: IDFilter;
    tag?:         TriggerTagFilter;
    trigger?:     IDFilter;
}

export interface TriggerTagFilter {
    entityType?: TagType;
    tags?:       Array<null | TagInput>;
}

export interface TriggerConnection {
    nodes?:    Nodes9;
    pageInfo?: PageInfo9;
}

export interface Nodes9 {
    arguments?: { [key: string]: any };
    return?:    Array<null | Trigger>;
}

export interface PageInfo9 {
    arguments?: { [key: string]: any };
    return?:    PageInfo;
}

/**
 * fetch a user by id
 */
export interface QueryUser {
    input?:  UserInput;
    output?: User;
}

export interface UserInput {
    id: string;
}

/**
 * fetch a user by email
 */
export interface UserByEmail {
    input?:  UserByEmailInput;
    output?: User;
}

export interface UserByEmailInput {
    email: string;
}

/**
 * fetch a user by name
 */
export interface UserByName {
    input?:  UserByNameInput;
    output?: User;
}

export interface UserByNameInput {
    name: string;
}

export interface QueryUserGroup {
    input?:  UserGroupInput;
    output?: UserGroup;
}

export interface UserGroupInput {
    userGroupId: string;
}

export interface UserGroupByName {
    input?:  UserGroupByNameInput;
    output?: UserGroup;
}

export interface UserGroupByNameInput {
    name: string;
}

export interface QueryUserGroups {
    input?:  UserGroupsInput;
    output?: UserGroupConnection;
}

export interface UserGroupsInput {
    limit:   number;
    offset?: number;
}

/**
 * fetch a list of users
 */
export interface QueryUsers {
    input?:  UsersInput;
    output?: UserConnection;
}

export interface UsersInput {
    limit:   number;
    offset?: number;
}

/**
 * Get a Workflow object by ID.
 */
export interface WorkflowObject {
    input?:  WorkflowInput;
    output?: Workflow;
}

export interface WorkflowInput {
    workflowId: string;
}

/**
 * Fetch details about a  Workflow by it's name
 */
export interface WorkflowByName {
    input?:  WorkflowByNameInput;
    output?: Workflow;
}

export interface WorkflowByNameInput {
    applicationId: string;
    workflowName:  string;
}

/**
 * Get a list of Workflows, by applicationId. This returns paginated data.
 */
export interface QueryWorkflows {
    input?:  WorkflowsInput;
    output?: WorkflowConnection;
}

export interface WorkflowsInput {
    filters?: Array<null | WorkflowFilter>;
    limit:    number;
    offset?:  number;
}

export interface WorkflowFilter {
    application?:               IDFilter;
    orchestrationWorkflowType?: OrchestrationWorkflowTypeFilter;
    tag?:                       WorkflowTagFilter;
    workflow?:                  IDFilter;
}

export interface OrchestrationWorkflowTypeFilter {
    operator?: Operator;
    values?:   Array<OrchestrationWorkflowType | null>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum OrchestrationWorkflowType {
    Basic = "BASIC",
    BlueGreen = "BLUE_GREEN",
    Build = "BUILD",
    Canary = "CANARY",
    Custom = "CUSTOM",
    MultiService = "MULTI_SERVICE",
    Rolling = "ROLLING",
}

export interface WorkflowTagFilter {
    entityType?: WorkflowTagType;
    tags?:       Array<null | TagInput>;
}

/**
 * Built-in String
 *
 * Unique ID of the harness entity
 *
 * Name of the tag
 *
 * Value of the tag
 *
 * Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
 *
 * Artifact source Id to select artifact from. Required for
 * LAST_COLLECTED,FROM_PAYLOAD_SOURCE
 *
 * Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
 *
 * Id of the service providing artifact selection for
 *
 * Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
 *
 * Entity identifier of the Workflow or Pipeline
 *
 * name of the variable
 *
 * value
 *
 * Application Id In which Trigger will be created
 *
 * Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
 * Exact match or Regex
 *
 * Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
 * will execute the Trigger.
 *
 * PipelineId: The trigger will be executed on success of this pipeline.
 *
 * Cron Expression: The time format must be a cron quartz expression.
 *
 * Branch in which the filePaths exist.
 *
 * Branch filter, can be used if using PullRequest or Push events.
 *
 * Source Repo Provider setup in Harness
 *
 * Git repository name in case when Account level Git connector is provided
 *
 * Beta: Webhook secret to authorize Github webhooks
 *
 * Description of the Trigger
 *
 * Name of the Trigger
 *
 * Application Id
 *
 * Id of Trigger to be deleted
 *
 * Name of the stage to be resumed. i.e "Stage 1"
 *
 * Application identifier of a Workflow or Pipeline
 *
 * Entity identifier of a Workflow or Pipeline
 *
 * Execution notes
 *
 * artifactId
 *
 * name of the artifact source to which the specified build number comes from
 *
 * build number to deploy
 *
 * parameter name
 *
 * runtime value for parameter
 *
 * name of the service providing input for
 *
 * Specify the repository name. If your Harness Source Repo Provider uses the Git Account
 * type, provide the Repo Name to use from that account.
 *
 * Id of Trigger to be updated
 *
 * Unique ID of a changeSet
 *
 * Unique ID of dependent or child resource, e.g.Environment, Services, etc.
 *
 * Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
 * information
 *
 * Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
 */
export enum WorkflowTagType {
    Application = "APPLICATION",
    Workflow = "WORKFLOW",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toHarness(json: string): any[] | boolean | number | number | null | HarnessObject | string {
        return cast(JSON.parse(json), u(a("any"), true, 3.14, 0, null, r("HarnessObject"), ""));
    }

    public static harnessToJson(value: any[] | boolean | number | number | null | HarnessObject | string): string {
        return JSON.stringify(uncast(value, u(a("any"), true, 3.14, 0, null, r("HarnessObject"), "")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "HarnessObject": o([
        { json: "Mutation", js: "Mutation", typ: u(undefined, r("Mutation")) },
        { json: "Query", js: "Query", typ: u(undefined, r("Query")) },
    ], "any"),
    "Mutation": o([
        { json: "addAccountPermission", js: "addAccountPermission", typ: u(undefined, r("AddAccountPermission")) },
        { json: "addAppPermission", js: "addAppPermission", typ: u(undefined, r("AddAppPermission")) },
        { json: "addUserToUserGroup", js: "addUserToUserGroup", typ: u(undefined, r("AddUserToUserGroup")) },
        { json: "attachTag", js: "attachTag", typ: u(undefined, r("AttachTag")) },
        { json: "createApplication", js: "createApplication", typ: u(undefined, r("CreateApplication")) },
        { json: "createCloudProvider", js: "createCloudProvider", typ: u(undefined, r("CreateCloudProvider")) },
        { json: "createConnector", js: "createConnector", typ: u(undefined, r("CreateConnector")) },
        { json: "createSecret", js: "createSecret", typ: u(undefined, r("CreateSecret")) },
        { json: "createSecretManager", js: "createSecretManager", typ: u(undefined, r("CreateSecretManager")) },
        { json: "createTrigger", js: "createTrigger", typ: u(undefined, r("CreateTrigger")) },
        { json: "createUser", js: "createUser", typ: u(undefined, r("CreateUser")) },
        { json: "createUserGroup", js: "createUserGroup", typ: u(undefined, r("CreateUserGroup")) },
        { json: "deleteApplication", js: "deleteApplication", typ: u(undefined, r("DeleteApplication")) },
        { json: "deleteCloudProvider", js: "deleteCloudProvider", typ: u(undefined, r("DeleteCloudProvider")) },
        { json: "deleteConnector", js: "deleteConnector", typ: u(undefined, r("DeleteConnector")) },
        { json: "deleteSecret", js: "deleteSecret", typ: u(undefined, r("DeleteSecret")) },
        { json: "deleteSecretManager", js: "deleteSecretManager", typ: u(undefined, r("DeleteSecretManager")) },
        { json: "deleteTrigger", js: "deleteTrigger", typ: u(undefined, r("DeleteTrigger")) },
        { json: "deleteUser", js: "deleteUser", typ: u(undefined, r("DeleteUser")) },
        { json: "deleteUserGroup", js: "deleteUserGroup", typ: u(undefined, r("DeleteUserGroup")) },
        { json: "detachTag", js: "detachTag", typ: u(undefined, r("DetachTag")) },
        { json: "exportExecutions", js: "exportExecutions", typ: u(undefined, r("ExportExecutions")) },
        { json: "removeApplicationGitSyncConfig", js: "removeApplicationGitSyncConfig", typ: u(undefined, r("RemoveApplicationGitSyncConfig")) },
        { json: "removeUserFromUserGroup", js: "removeUserFromUserGroup", typ: u(undefined, r("RemoveUserFromUserGroup")) },
        { json: "resumeExecution", js: "resumeExecution", typ: u(undefined, r("ResumeExecution")) },
        { json: "startExecution", js: "startExecution", typ: u(undefined, r("StartExecution")) },
        { json: "updateApplication", js: "updateApplication", typ: u(undefined, r("UpdateApplication")) },
        { json: "updateApplicationGitSyncConfig", js: "updateApplicationGitSyncConfig", typ: u(undefined, r("UpdateApplicationGitSyncConfig")) },
        { json: "updateApplicationGitSyncConfigStatus", js: "updateApplicationGitSyncConfigStatus", typ: u(undefined, r("UpdateApplicationGitSyncConfigStatus")) },
        { json: "updateCloudProvider", js: "updateCloudProvider", typ: u(undefined, r("UpdateCloudProvider")) },
        { json: "updateConnector", js: "updateConnector", typ: u(undefined, r("UpdateConnector")) },
        { json: "updateSecret", js: "updateSecret", typ: u(undefined, r("UpdateSecret")) },
        { json: "updateSecretManager", js: "updateSecretManager", typ: u(undefined, r("UpdateSecretManager")) },
        { json: "updateTrigger", js: "updateTrigger", typ: u(undefined, r("UpdateTrigger")) },
        { json: "updateUser", js: "updateUser", typ: u(undefined, r("UpdateUser")) },
        { json: "updateUserGroup", js: "updateUserGroup", typ: u(undefined, r("UpdateUserGroup")) },
        { json: "updateUserGroupPermissions", js: "updateUserGroupPermissions", typ: u(undefined, r("UpdateUserGroupPermissions")) },
    ], "any"),
    "AddAccountPermission": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("AddAccountPermissionArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("AddAccountPermissionPayload")) },
    ], "any"),
    "AddAccountPermissionArguments": o([
        { json: "input", js: "input", typ: r("AddAccountPermissionInput") },
    ], "any"),
    "AddAccountPermissionInput": o([
        { json: "accountPermission", js: "accountPermission", typ: u(undefined, r("AccountPermissionType")) },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "userGroupId", js: "userGroupId", typ: "" },
    ], "any"),
    "AddAccountPermissionPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("PurpleClientMutationID")) },
        { json: "userGroup", js: "userGroup", typ: u(undefined, r("PurpleUserGroup")) },
    ], "any"),
    "PurpleClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PurpleUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("UserGroup")) },
    ], "any"),
    "FluffyNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("UserGroup")))) },
    ], "any"),
    "UserGroupConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("FluffyNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("PurplePageInfo")) },
    ], "any"),
    "UserUserGroups": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UserGroupsArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UserGroupConnection")) },
    ], "any"),
    "User": o([
        { json: "email", js: "email", typ: u(undefined, r("Email")) },
        { json: "id", js: "id", typ: u(undefined, r("UserID")) },
        { json: "isEmailVerified", js: "isEmailVerified", typ: u(undefined, r("IsEmailVerified")) },
        { json: "isImportedFromIdentityProvider", js: "isImportedFromIdentityProvider", typ: u(undefined, r("IsImportedFromIdentityProvider")) },
        { json: "isPasswordExpired", js: "isPasswordExpired", typ: u(undefined, r("IsPasswordExpired")) },
        { json: "isTwoFactorAuthenticationEnabled", js: "isTwoFactorAuthenticationEnabled", typ: u(undefined, r("IsTwoFactorAuthenticationEnabled")) },
        { json: "isUserLocked", js: "isUserLocked", typ: u(undefined, r("IsUserLocked")) },
        { json: "name", js: "name", typ: u(undefined, r("UserName")) },
        { json: "userGroups", js: "userGroups", typ: u(undefined, r("UserUserGroups")) },
    ], "any"),
    "PurpleNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("User")))) },
    ], "any"),
    "UserConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("PurpleNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("FluffyPageInfo")) },
    ], "any"),
    "UserGroupUsers": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UsersArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UserConnection")) },
    ], "any"),
    "UserGroup": o([
        { json: "description", js: "description", typ: u(undefined, r("UserGroupDescription")) },
        { json: "id", js: "id", typ: u(undefined, r("UserGroupID")) },
        { json: "importedByScim", js: "importedByScim", typ: u(undefined, r("ImportedByScim")) },
        { json: "isSSOLinked", js: "isSSOLinked", typ: u(undefined, r("IsSSOLinked")) },
        { json: "name", js: "name", typ: u(undefined, r("UserGroupName")) },
        { json: "notificationSettings", js: "notificationSettings", typ: u(undefined, r("NotificationSettings")) },
        { json: "permissions", js: "permissions", typ: u(undefined, r("UserGroupPermissions")) },
        { json: "ssoSetting", js: "ssoSetting", typ: u(undefined, r("SsoSetting")) },
        { json: "users", js: "users", typ: u(undefined, r("UserGroupUsers")) },
    ], "any"),
    "PurplePageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "PageInfo": o([
        { json: "hasMore", js: "hasMore", typ: u(undefined, r("HasMore")) },
        { json: "limit", js: "limit", typ: u(undefined, r("Limit")) },
        { json: "offset", js: "offset", typ: u(undefined, r("Offset")) },
        { json: "total", js: "total", typ: u(undefined, r("Total")) },
    ], "any"),
    "HasMore": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "Limit": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, 3.14) },
    ], "any"),
    "Offset": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, 3.14) },
    ], "any"),
    "Total": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, 3.14) },
    ], "any"),
    "UserGroupsArguments": o([
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "Email": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "UserID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "IsEmailVerified": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "IsImportedFromIdentityProvider": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "IsPasswordExpired": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "IsTwoFactorAuthenticationEnabled": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "IsUserLocked": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "UserName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffyPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "UsersArguments": o([
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "UserGroupDescription": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "UserGroupID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ImportedByScim": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "IsSSOLinked": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "UserGroupName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "NotificationSettings": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ReturnObject")) },
    ], "any"),
    "ReturnObject": o([
        { json: "groupEmailAddresses", js: "groupEmailAddresses", typ: u(undefined, r("GroupEmailAddresses")) },
        { json: "microsoftTeamsWebhookUrl", js: "microsoftTeamsWebhookUrl", typ: u(undefined, r("MicrosoftTeamsWebhookURL")) },
        { json: "sendMailToNewMembers", js: "sendMailToNewMembers", typ: u(undefined, r("SendMailToNewMembers")) },
        { json: "sendNotificationToMembers", js: "sendNotificationToMembers", typ: u(undefined, r("SendNotificationToMembers")) },
        { json: "slackNotificationSetting", js: "slackNotificationSetting", typ: u(undefined, r("SlackNotificationSetting")) },
    ], "any"),
    "GroupEmailAddresses": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "MicrosoftTeamsWebhookURL": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "SendMailToNewMembers": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "SendNotificationToMembers": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "SlackNotificationSetting": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("SlackNotificationSettingReturn")) },
    ], "any"),
    "SlackNotificationSettingReturn": o([
        { json: "slackChannelName", js: "slackChannelName", typ: u(undefined, r("SlackChannelName")) },
        { json: "slackWebhookURL", js: "slackWebhookURL", typ: u(undefined, r("SlackWebhookURL")) },
    ], "any"),
    "SlackChannelName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "SlackWebhookURL": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "UserGroupPermissions": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PermissionsReturn")) },
    ], "any"),
    "PermissionsReturn": o([
        { json: "accountPermissions", js: "accountPermissions", typ: u(undefined, r("AccountPermissions")) },
        { json: "appPermissions", js: "appPermissions", typ: u(undefined, r("AppPermissions")) },
    ], "any"),
    "AccountPermissions": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("AccountPermissionsReturn")) },
    ], "any"),
    "AccountPermissionsReturn": o([
        { json: "accountPermissionTypes", js: "accountPermissionTypes", typ: u(undefined, r("AccountPermissionTypes")) },
    ], "any"),
    "AccountPermissionTypes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(r("AccountPermissionType"), null))) },
    ], "any"),
    "AppPermissions": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("ApplicationPermission")))) },
    ], "any"),
    "ApplicationPermission": o([
        { json: "actions", js: "actions", typ: u(undefined, r("ActionsObject")) },
        { json: "applications", js: "applications", typ: u(undefined, r("ApplicationPermissionApplications")) },
        { json: "deployments", js: "deployments", typ: u(undefined, r("Deployments")) },
        { json: "environments", js: "environments", typ: u(undefined, r("ApplicationPermissionEnvironments")) },
        { json: "permissionType", js: "permissionType", typ: u(undefined, r("PermissionType")) },
        { json: "pipelines", js: "pipelines", typ: u(undefined, r("ApplicationPermissionPipelines")) },
        { json: "provisioners", js: "provisioners", typ: u(undefined, r("Provisioners")) },
        { json: "services", js: "services", typ: u(undefined, r("ApplicationPermissionServices")) },
        { json: "workflows", js: "workflows", typ: u(undefined, r("ApplicationPermissionWorkflows")) },
    ], "any"),
    "ActionsObject": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(r("Actions"), null))) },
    ], "any"),
    "ApplicationPermissionApplications": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("AppFilter")) },
    ], "any"),
    "AppFilter": o([
        { json: "appIds", js: "appIds", typ: u(undefined, r("AppIDS")) },
        { json: "filterType", js: "filterType", typ: u(undefined, r("PurpleFilterType")) },
    ], "any"),
    "AppIDS": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "PurpleFilterType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("FilterTypeEnum")) },
    ], "any"),
    "Deployments": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("DeploymentPermissionFilter")) },
    ], "any"),
    "DeploymentPermissionFilter": o([
        { json: "envIds", js: "envIds", typ: u(undefined, r("PurpleEnvIDS")) },
        { json: "filterTypes", js: "filterTypes", typ: u(undefined, r("PurpleFilterTypes")) },
    ], "any"),
    "PurpleEnvIDS": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "PurpleFilterTypes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(r("FilterType"), null))) },
    ], "any"),
    "ApplicationPermissionEnvironments": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("EnvPermissionFilter")) },
    ], "any"),
    "EnvPermissionFilter": o([
        { json: "envIds", js: "envIds", typ: u(undefined, r("FluffyEnvIDS")) },
        { json: "filterTypes", js: "filterTypes", typ: u(undefined, r("FluffyFilterTypes")) },
    ], "any"),
    "FluffyEnvIDS": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "FluffyFilterTypes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(r("FilterType"), null))) },
    ], "any"),
    "PermissionType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("AppPermissionType")) },
    ], "any"),
    "ApplicationPermissionPipelines": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PipelinePermissionFilter")) },
    ], "any"),
    "PipelinePermissionFilter": o([
        { json: "envIds", js: "envIds", typ: u(undefined, r("TentacledEnvIDS")) },
        { json: "filterTypes", js: "filterTypes", typ: u(undefined, r("TentacledFilterTypes")) },
    ], "any"),
    "TentacledEnvIDS": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "TentacledFilterTypes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(r("PipelinePermissionFilterType"), null))) },
    ], "any"),
    "Provisioners": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ProvisionerPermissionFilter")) },
    ], "any"),
    "ProvisionerPermissionFilter": o([
        { json: "filterType", js: "filterType", typ: u(undefined, r("FluffyFilterType")) },
        { json: "provisionerIds", js: "provisionerIds", typ: u(undefined, r("ProvisionerIDS")) },
    ], "any"),
    "FluffyFilterType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("FilterTypeEnum")) },
    ], "any"),
    "ProvisionerIDS": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "ApplicationPermissionServices": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ServicePermissionFilter")) },
    ], "any"),
    "ServicePermissionFilter": o([
        { json: "filterType", js: "filterType", typ: u(undefined, r("TentacledFilterType")) },
        { json: "serviceIds", js: "serviceIds", typ: u(undefined, r("ServiceIDS")) },
    ], "any"),
    "TentacledFilterType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("FilterTypeEnum")) },
    ], "any"),
    "ServiceIDS": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "ApplicationPermissionWorkflows": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("WorkflowPermissionFilter")) },
    ], "any"),
    "WorkflowPermissionFilter": o([
        { json: "envIds", js: "envIds", typ: u(undefined, r("StickyEnvIDS")) },
        { json: "filterTypes", js: "filterTypes", typ: u(undefined, r("StickyFilterTypes")) },
    ], "any"),
    "StickyEnvIDS": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "StickyFilterTypes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(r("WorkflowPermissionFilterType"), null))) },
    ], "any"),
    "SsoSetting": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "AddAppPermission": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("AddAppPermissionArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("AddAppPermissionPayload")) },
    ], "any"),
    "AddAppPermissionArguments": o([
        { json: "input", js: "input", typ: r("AddAppPermissionInput") },
    ], "any"),
    "AddAppPermissionInput": o([
        { json: "appPermission", js: "appPermission", typ: u(undefined, r("ApplicationPermissionInput")) },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "userGroupId", js: "userGroupId", typ: "" },
    ], "any"),
    "ApplicationPermissionInput": o([
        { json: "actions", js: "actions", typ: a(u(r("Actions"), null)) },
        { json: "applications", js: "applications", typ: r("AppFilterInput") },
        { json: "deployments", js: "deployments", typ: u(undefined, r("DeploymentPermissionFilterInput")) },
        { json: "environments", js: "environments", typ: u(undefined, r("EnvPermissionFilterInput")) },
        { json: "permissionType", js: "permissionType", typ: r("AppPermissionType") },
        { json: "pipelines", js: "pipelines", typ: u(undefined, r("PipelinePermissionFilterInput")) },
        { json: "provisioners", js: "provisioners", typ: u(undefined, r("ProvisionerPermissionFilterInput")) },
        { json: "services", js: "services", typ: u(undefined, r("ServicePermissionFilterInput")) },
        { json: "workflows", js: "workflows", typ: u(undefined, r("WorkflowPermissionFilterInput")) },
    ], "any"),
    "AppFilterInput": o([
        { json: "appIds", js: "appIds", typ: u(undefined, a("")) },
        { json: "filterType", js: "filterType", typ: u(undefined, r("FilterTypeEnum")) },
    ], "any"),
    "DeploymentPermissionFilterInput": o([
        { json: "envIds", js: "envIds", typ: u(undefined, a("")) },
        { json: "filterTypes", js: "filterTypes", typ: u(undefined, a(u(r("FilterType"), null))) },
    ], "any"),
    "EnvPermissionFilterInput": o([
        { json: "envIds", js: "envIds", typ: u(undefined, a("")) },
        { json: "filterTypes", js: "filterTypes", typ: u(undefined, a(u(r("FilterType"), null))) },
    ], "any"),
    "PipelinePermissionFilterInput": o([
        { json: "envIds", js: "envIds", typ: u(undefined, a("")) },
        { json: "filterTypes", js: "filterTypes", typ: u(undefined, a(u(r("PipelinePermissionFilterType"), null))) },
    ], "any"),
    "ProvisionerPermissionFilterInput": o([
        { json: "filterType", js: "filterType", typ: u(undefined, r("FilterTypeEnum")) },
        { json: "provisionerIds", js: "provisionerIds", typ: u(undefined, a("")) },
    ], "any"),
    "ServicePermissionFilterInput": o([
        { json: "filterType", js: "filterType", typ: u(undefined, r("FilterTypeEnum")) },
        { json: "serviceIds", js: "serviceIds", typ: u(undefined, a("")) },
    ], "any"),
    "WorkflowPermissionFilterInput": o([
        { json: "envIds", js: "envIds", typ: u(undefined, a("")) },
        { json: "filterTypes", js: "filterTypes", typ: u(undefined, a(u(r("WorkflowPermissionFilterType"), null))) },
    ], "any"),
    "AddAppPermissionPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("FluffyClientMutationID")) },
        { json: "userGroup", js: "userGroup", typ: u(undefined, r("FluffyUserGroup")) },
    ], "any"),
    "FluffyClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffyUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("UserGroup")) },
    ], "any"),
    "AddUserToUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("AddUserToUserGroupArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("AddUserToUserGroupPayload")) },
    ], "any"),
    "AddUserToUserGroupArguments": o([
        { json: "input", js: "input", typ: r("AddUserToUserGroupInput") },
    ], "any"),
    "AddUserToUserGroupInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "userGroupId", js: "userGroupId", typ: "" },
        { json: "userId", js: "userId", typ: "" },
    ], "any"),
    "AddUserToUserGroupPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("TentacledClientMutationID")) },
        { json: "userGroup", js: "userGroup", typ: u(undefined, r("TentacledUserGroup")) },
    ], "any"),
    "TentacledClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TentacledUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("UserGroup")) },
    ], "any"),
    "AttachTag": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("AttachTagArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("AttachTagPayload")) },
    ], "any"),
    "AttachTagArguments": o([
        { json: "input", js: "input", typ: r("AttachTagInput") },
    ], "any"),
    "AttachTagInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "entityId", js: "entityId", typ: "" },
        { json: "entityType", js: "entityType", typ: r("TagEntityType") },
        { json: "name", js: "name", typ: "" },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], "any"),
    "AttachTagPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("StickyClientMutationID")) },
        { json: "tagLink", js: "tagLink", typ: u(undefined, r("TagLinkObject")) },
    ], "any"),
    "StickyClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TagLinkObject": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("TagLink")) },
    ], "any"),
    "TagLink": o([
        { json: "appId", js: "appId", typ: u(undefined, r("TagLinkAppID")) },
        { json: "entityId", js: "entityId", typ: u(undefined, r("EntityID")) },
        { json: "entityType", js: "entityType", typ: u(undefined, r("EntityTypeObject")) },
        { json: "name", js: "name", typ: u(undefined, r("TagLinkName")) },
        { json: "value", js: "value", typ: u(undefined, r("TagLinkValue")) },
    ], "any"),
    "TagLinkAppID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "EntityID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "EntityTypeObject": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("TagEntityType")) },
    ], "any"),
    "TagLinkName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TagLinkValue": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "CreateApplication": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("CreateApplicationArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("CreateApplicationPayload")) },
    ], "any"),
    "CreateApplicationArguments": o([
        { json: "input", js: "input", typ: r("CreateApplicationInput") },
    ], "any"),
    "CreateApplicationInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "isManualTriggerAuthorized", js: "isManualTriggerAuthorized", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "CreateApplicationPayload": o([
        { json: "application", js: "application", typ: u(undefined, r("PurpleApplication")) },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("IndigoClientMutationID")) },
    ], "any"),
    "PurpleApplication": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("Application")) },
    ], "any"),
    "InfrastructureDefinitionEnvironment": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("Environment")) },
    ], "any"),
    "InfrastructureDefinition": o([
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("InfrastructureDefinitionCreatedAt")) },
        { json: "deploymentType", js: "deploymentType", typ: u(undefined, r("InfrastructureDefinitionDeploymentType")) },
        { json: "environment", js: "environment", typ: u(undefined, r("InfrastructureDefinitionEnvironment")) },
        { json: "id", js: "id", typ: u(undefined, r("InfrastructureDefinitionID")) },
        { json: "name", js: "name", typ: u(undefined, r("InfrastructureDefinitionName")) },
        { json: "scopedToServices", js: "scopedToServices", typ: u(undefined, r("ScopedToServices")) },
    ], "any"),
    "StickyNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("InfrastructureDefinition")))) },
    ], "any"),
    "InfrastructureDefinitionConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("StickyNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("TentacledPageInfo")) },
    ], "any"),
    "EnvironmentInfrastructureDefinitions": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("InfrastructureDefinitionsArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("InfrastructureDefinitionConnection")) },
    ], "any"),
    "EnvironmentApplication": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("Application")) },
    ], "any"),
    "Environment": o([
        { json: "application", js: "application", typ: u(undefined, r("EnvironmentApplication")) },
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("EnvironmentCreatedAt")) },
        { json: "createdBy", js: "createdBy", typ: u(undefined, r("EnvironmentCreatedBy")) },
        { json: "description", js: "description", typ: u(undefined, r("EnvironmentDescription")) },
        { json: "id", js: "id", typ: u(undefined, r("EnvironmentID")) },
        { json: "infrastructureDefinitions", js: "infrastructureDefinitions", typ: u(undefined, r("EnvironmentInfrastructureDefinitions")) },
        { json: "name", js: "name", typ: u(undefined, r("EnvironmentName")) },
        { json: "tags", js: "tags", typ: u(undefined, r("EnvironmentTags")) },
        { json: "type", js: "type", typ: u(undefined, r("EnvironmentTypeObject")) },
    ], "any"),
    "TentacledNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Environment")))) },
    ], "any"),
    "EnvironmentConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("TentacledNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("StickyPageInfo")) },
    ], "any"),
    "ApplicationEnvironments": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("EnvironmentsArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("EnvironmentConnection")) },
    ], "any"),
    "Application": o([
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("ApplicationCreatedAt")) },
        { json: "createdBy", js: "createdBy", typ: u(undefined, r("ApplicationCreatedBy")) },
        { json: "description", js: "description", typ: u(undefined, r("ApplicationDescription")) },
        { json: "environments", js: "environments", typ: u(undefined, r("ApplicationEnvironments")) },
        { json: "gitSyncConfig", js: "gitSyncConfig", typ: u(undefined, r("ApplicationGitSyncConfig")) },
        { json: "id", js: "id", typ: u(undefined, r("ApplicationID")) },
        { json: "isManualTriggerAuthorized", js: "isManualTriggerAuthorized", typ: u(undefined, r("IsManualTriggerAuthorized")) },
        { json: "name", js: "name", typ: u(undefined, r("ApplicationName")) },
        { json: "pipelines", js: "pipelines", typ: u(undefined, r("ApplicationPipelines")) },
        { json: "services", js: "services", typ: u(undefined, r("ApplicationServices")) },
        { json: "tags", js: "tags", typ: u(undefined, r("ApplicationTags")) },
        { json: "workflows", js: "workflows", typ: u(undefined, r("ApplicationWorkflows")) },
    ], "any"),
    "InfrastructureDefinitionCreatedAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "InfrastructureDefinitionDeploymentType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "InfrastructureDefinitionID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "InfrastructureDefinitionName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ScopedToServices": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "TentacledPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "InfrastructureDefinitionsArguments": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("InfrastructureDefinitionFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "InfrastructureDefinitionFilter": o([
        { json: "deploymentType", js: "deploymentType", typ: u(undefined, r("StringFilter")) },
        { json: "environment", js: "environment", typ: u(undefined, r("IDFilter")) },
        { json: "infrastructureDefinition", js: "infrastructureDefinition", typ: u(undefined, r("IDFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("InfrastructureDefinitionTagFilter")) },
    ], "any"),
    "StringFilter": o([
        { json: "operator", js: "operator", typ: r("Operator") },
        { json: "values", js: "values", typ: a(u(null, "")) },
    ], "any"),
    "IDFilter": o([
        { json: "operator", js: "operator", typ: r("IDOperator") },
        { json: "values", js: "values", typ: a(u(null, "")) },
    ], "any"),
    "InfrastructureDefinitionTagFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("InfrastructureDefinitionTagType")) },
        { json: "tags", js: "tags", typ: u(undefined, a(u(null, r("TagInput")))) },
    ], "any"),
    "TagInput": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], "any"),
    "EnvironmentCreatedAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "EnvironmentCreatedBy": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("User")) },
    ], "any"),
    "EnvironmentDescription": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "EnvironmentID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "EnvironmentName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "EnvironmentTags": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Tag")))) },
    ], "any"),
    "Tag": o([
        { json: "name", js: "name", typ: u(undefined, r("TagName")) },
        { json: "value", js: "value", typ: u(undefined, r("TagValue")) },
    ], "any"),
    "TagName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TagValue": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "EnvironmentTypeObject": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("EnvironmentType")) },
    ], "any"),
    "StickyPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "EnvironmentsArguments": o([
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "ApplicationCreatedAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "ApplicationCreatedBy": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("User")) },
    ], "any"),
    "ApplicationDescription": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ApplicationGitSyncConfig": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("GitSyncConfig")) },
    ], "any"),
    "GitSyncConfig": o([
        { json: "branch", js: "branch", typ: u(undefined, r("PurpleBranch")) },
        { json: "gitConnector", js: "gitConnector", typ: u(undefined, r("GitConnector")) },
        { json: "repositoryName", js: "repositoryName", typ: u(undefined, r("RepositoryName")) },
        { json: "syncEnabled", js: "syncEnabled", typ: u(undefined, r("SyncEnabled")) },
    ], "any"),
    "PurpleBranch": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "GitConnector": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("GitConnectorReturn")) },
    ], "any"),
    "GitConnectorReturn": o([
        { json: "branch", js: "branch", typ: u(undefined, r("FluffyBranch")) },
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("ReturnCreatedAt")) },
        { json: "createdBy", js: "createdBy", typ: u(undefined, r("ReturnCreatedBy")) },
        { json: "customCommitDetails", js: "customCommitDetails", typ: u(undefined, r("CustomCommitDetails")) },
        { json: "delegateSelectors", js: "delegateSelectors", typ: u(undefined, r("DelegateSelectors")) },
        { json: "description", js: "description", typ: u(undefined, r("ReturnDescription")) },
        { json: "generateWebhookUrl", js: "generateWebhookUrl", typ: u(undefined, r("GenerateWebhookURL")) },
        { json: "id", js: "id", typ: u(undefined, r("ReturnID")) },
        { json: "name", js: "name", typ: u(undefined, r("ReturnName")) },
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, r("PasswordSecretID")) },
        { json: "sshSettingId", js: "sshSettingId", typ: u(undefined, r("SSHSettingID")) },
        { json: "URL", js: "URL", typ: u(undefined, r("URL")) },
        { json: "urlType", js: "urlType", typ: u(undefined, r("URLType")) },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("ReturnUsageScope")) },
        { json: "userName", js: "userName", typ: u(undefined, r("UserNameObject")) },
        { json: "webhookUrl", js: "webhookUrl", typ: u(undefined, r("WebhookURL")) },
    ], "any"),
    "URL": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffyBranch": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ReturnCreatedAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "ReturnCreatedBy": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("User")) },
    ], "any"),
    "CustomCommitDetails": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("CustomCommitDetailsReturn")) },
    ], "any"),
    "CustomCommitDetailsReturn": o([
        { json: "authorEmailId", js: "authorEmailId", typ: u(undefined, r("AuthorEmailID")) },
        { json: "authorName", js: "authorName", typ: u(undefined, r("AuthorName")) },
        { json: "commitMessage", js: "commitMessage", typ: u(undefined, r("CommitMessage")) },
    ], "any"),
    "AuthorEmailID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "AuthorName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "CommitMessage": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "DelegateSelectors": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "ReturnDescription": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "GenerateWebhookURL": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "ReturnID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ReturnName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PasswordSecretID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "SSHSettingID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "URLType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("URLTypeEnum")) },
    ], "any"),
    "ReturnUsageScope": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("UsageScope")) },
    ], "any"),
    "UsageScope": o([
        { json: "appEnvScopes", js: "appEnvScopes", typ: u(undefined, r("AppEnvScopes")) },
    ], "any"),
    "AppEnvScopes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("AppEnvScope")))) },
    ], "any"),
    "AppEnvScope": o([
        { json: "application", js: "application", typ: u(undefined, r("AppEnvScopeApplication")) },
        { json: "environment", js: "environment", typ: u(undefined, r("AppEnvScopeEnvironment")) },
    ], "any"),
    "AppEnvScopeApplication": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("AppScopeFilter")) },
    ], "any"),
    "AppScopeFilter": o([
        { json: "appId", js: "appId", typ: u(undefined, r("ReturnAppID")) },
        { json: "filterType", js: "filterType", typ: u(undefined, r("StickyFilterType")) },
    ], "any"),
    "ReturnAppID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "StickyFilterType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("FilterTypeEnum")) },
    ], "any"),
    "AppEnvScopeEnvironment": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("EnvScopeFilter")) },
    ], "any"),
    "EnvScopeFilter": o([
        { json: "envId", js: "envId", typ: u(undefined, r("EnvID")) },
        { json: "filterType", js: "filterType", typ: u(undefined, r("IndigoFilterType")) },
    ], "any"),
    "EnvID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "IndigoFilterType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("FilterType")) },
    ], "any"),
    "UserNameObject": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "WebhookURL": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "RepositoryName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "SyncEnabled": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "ApplicationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "IsManualTriggerAuthorized": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "ApplicationName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ApplicationPipelines": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("PipelinesArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("PipelineConnection")) },
    ], "any"),
    "PipelinesArguments": o([
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "PipelineConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("IndigoNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("IndigoPageInfo")) },
    ], "any"),
    "IndigoNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Pipeline")))) },
    ], "any"),
    "Pipeline": o([
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("PipelineCreatedAt")) },
        { json: "createdBy", js: "createdBy", typ: u(undefined, r("PipelineCreatedBy")) },
        { json: "description", js: "description", typ: u(undefined, r("PipelineDescription")) },
        { json: "id", js: "id", typ: u(undefined, r("PipelineID")) },
        { json: "name", js: "name", typ: u(undefined, r("PipelineName")) },
        { json: "pipelineVariables", js: "pipelineVariables", typ: u(undefined, r("PipelineVariables")) },
        { json: "tags", js: "tags", typ: u(undefined, r("PipelineTags")) },
    ], "any"),
    "PipelineCreatedAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "PipelineCreatedBy": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("User")) },
    ], "any"),
    "PipelineDescription": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PipelineID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PipelineName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PipelineVariables": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Variable")))) },
    ], "any"),
    "Variable": o([
        { json: "allowedValues", js: "allowedValues", typ: u(undefined, r("AllowedValues")) },
        { json: "allowMultipleValues", js: "allowMultipleValues", typ: u(undefined, r("AllowMultipleValues")) },
        { json: "defaultValue", js: "defaultValue", typ: u(undefined, r("DefaultValue")) },
        { json: "fixed", js: "fixed", typ: u(undefined, r("Fixed")) },
        { json: "name", js: "name", typ: u(undefined, r("VariableName")) },
        { json: "required", js: "required", typ: u(undefined, r("Required")) },
        { json: "type", js: "type", typ: u(undefined, r("VariableType")) },
    ], "any"),
    "AllowMultipleValues": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "AllowedValues": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "DefaultValue": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Fixed": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "VariableName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Required": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "VariableType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PipelineTags": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Tag")))) },
    ], "any"),
    "IndigoPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "ApplicationServices": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("ServicesArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("ServiceConnection")) },
    ], "any"),
    "ServicesArguments": o([
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "ServiceConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("IndecentNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("IndecentPageInfo")) },
    ], "any"),
    "IndecentNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Service")))) },
    ], "any"),
    "Service": o([
        { json: "artifactSources", js: "artifactSources", typ: u(undefined, r("ArtifactSources")) },
        { json: "artifactType", js: "artifactType", typ: u(undefined, r("ArtifactType")) },
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("ServiceCreatedAt")) },
        { json: "createdBy", js: "createdBy", typ: u(undefined, r("ServiceCreatedBy")) },
        { json: "deploymentType", js: "deploymentType", typ: u(undefined, r("ServiceDeploymentType")) },
        { json: "description", js: "description", typ: u(undefined, r("ServiceDescription")) },
        { json: "id", js: "id", typ: u(undefined, r("ServiceID")) },
        { json: "name", js: "name", typ: u(undefined, r("ServiceName")) },
        { json: "tags", js: "tags", typ: u(undefined, r("ServiceTags")) },
    ], "any"),
    "ArtifactSources": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a("any")) },
    ], "any"),
    "ArtifactType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ServiceCreatedAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "ServiceCreatedBy": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("User")) },
    ], "any"),
    "ServiceDeploymentType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ServiceDescription": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ServiceID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ServiceName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ServiceTags": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Tag")))) },
    ], "any"),
    "IndecentPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "ApplicationTags": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Tag")))) },
    ], "any"),
    "ApplicationWorkflows": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("WorkflowsArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("WorkflowConnection")) },
    ], "any"),
    "WorkflowsArguments": o([
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "WorkflowConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("HilariousNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("HilariousPageInfo")) },
    ], "any"),
    "HilariousNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Workflow")))) },
    ], "any"),
    "Workflow": o([
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("WorkflowCreatedAt")) },
        { json: "createdBy", js: "createdBy", typ: u(undefined, r("WorkflowCreatedBy")) },
        { json: "description", js: "description", typ: u(undefined, r("WorkflowDescription")) },
        { json: "id", js: "id", typ: u(undefined, r("WorkflowID")) },
        { json: "name", js: "name", typ: u(undefined, r("WorkflowName")) },
        { json: "tags", js: "tags", typ: u(undefined, r("WorkflowTags")) },
        { json: "workflowVariables", js: "workflowVariables", typ: u(undefined, r("WorkflowVariables")) },
    ], "any"),
    "WorkflowCreatedAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "WorkflowCreatedBy": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("User")) },
    ], "any"),
    "WorkflowDescription": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "WorkflowID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "WorkflowName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "WorkflowTags": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Tag")))) },
    ], "any"),
    "WorkflowVariables": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Variable")))) },
    ], "any"),
    "HilariousPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "IndigoClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "CreateCloudProvider": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("CreateCloudProviderArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("CreateCloudProviderPayload")) },
    ], "any"),
    "CreateCloudProviderArguments": o([
        { json: "input", js: "input", typ: r("CreateCloudProviderInput") },
    ], "any"),
    "CreateCloudProviderInput": o([
        { json: "awsCloudProvider", js: "awsCloudProvider", typ: u(undefined, r("AwsCloudProviderInput")) },
        { json: "azureCloudProvider", js: "azureCloudProvider", typ: u(undefined, r("AzureCloudProviderInput")) },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "cloudProviderType", js: "cloudProviderType", typ: r("CloudProviderType") },
        { json: "gcpCloudProvider", js: "gcpCloudProvider", typ: u(undefined, r("GcpCloudProviderInput")) },
        { json: "k8sCloudProvider", js: "k8sCloudProvider", typ: u(undefined, r("K8SCloudProviderInput")) },
        { json: "pcfCloudProvider", js: "pcfCloudProvider", typ: u(undefined, r("PcfCloudProviderInput")) },
        { json: "physicalDataCenterCloudProvider", js: "physicalDataCenterCloudProvider", typ: u(undefined, r("PhysicalDataCenterCloudProviderInput")) },
        { json: "spotInstCloudProvider", js: "spotInstCloudProvider", typ: u(undefined, r("SpotInstCloudProviderInput")) },
    ], "any"),
    "AwsCloudProviderInput": o([
        { json: "credentialsType", js: "credentialsType", typ: u(undefined, r("AwsCredentialsType")) },
        { json: "crossAccountAttributes", js: "crossAccountAttributes", typ: u(undefined, r("AwsCrossAccountAttributes")) },
        { json: "defaultRegion", js: "defaultRegion", typ: u(undefined, "") },
        { json: "ec2IamCredentials", js: "ec2IamCredentials", typ: u(undefined, r("Ec2IamCredentials")) },
        { json: "manualCredentials", js: "manualCredentials", typ: u(undefined, r("AwsManualCredentials")) },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "AwsCrossAccountAttributes": o([
        { json: "assumeCrossAccountRole", js: "assumeCrossAccountRole", typ: u(undefined, true) },
        { json: "crossAccountRoleArn", js: "crossAccountRoleArn", typ: "" },
        { json: "externalId", js: "externalId", typ: u(undefined, "") },
    ], "any"),
    "Ec2IamCredentials": o([
        { json: "delegateSelector", js: "delegateSelector", typ: "" },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
    ], "any"),
    "UsageScopeInput": o([
        { json: "appEnvScopes", js: "appEnvScopes", typ: u(undefined, a(r("AppEnvScopeInput"))) },
    ], "any"),
    "AppEnvScopeInput": o([
        { json: "application", js: "application", typ: r("AppScopeFilterInput") },
        { json: "environment", js: "environment", typ: r("EnvScopeFilterInput") },
    ], "any"),
    "AppScopeFilterInput": o([
        { json: "appId", js: "appId", typ: u(undefined, "") },
        { json: "filterType", js: "filterType", typ: u(undefined, r("FilterTypeEnum")) },
    ], "any"),
    "EnvScopeFilterInput": o([
        { json: "envId", js: "envId", typ: u(undefined, "") },
        { json: "filterType", js: "filterType", typ: u(undefined, r("FilterType")) },
    ], "any"),
    "AwsManualCredentials": o([
        { json: "accessKey", js: "accessKey", typ: u(undefined, "") },
        { json: "accessKeySecretId", js: "accessKeySecretId", typ: u(undefined, "") },
        { json: "secretKeySecretId", js: "secretKeySecretId", typ: "" },
    ], "any"),
    "AzureCloudProviderInput": o([
        { json: "clientId", js: "clientId", typ: "" },
        { json: "keySecretId", js: "keySecretId", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "tenantId", js: "tenantId", typ: "" },
    ], "any"),
    "GcpCloudProviderInput": o([
        { json: "delegateSelector", js: "delegateSelector", typ: u(undefined, "") },
        { json: "delegateSelectors", js: "delegateSelectors", typ: u(undefined, a("")) },
        { json: "name", js: "name", typ: "" },
        { json: "serviceAccountKeySecretId", js: "serviceAccountKeySecretId", typ: u(undefined, "") },
        { json: "skipValidation", js: "skipValidation", typ: u(undefined, true) },
        { json: "useDelegate", js: "useDelegate", typ: u(undefined, true) },
        { json: "useDelegateSelectors", js: "useDelegateSelectors", typ: u(undefined, true) },
    ], "any"),
    "K8SCloudProviderInput": o([
        { json: "clusterDetailsType", js: "clusterDetailsType", typ: r("ClusterDetailsType") },
        { json: "inheritClusterDetails", js: "inheritClusterDetails", typ: u(undefined, r("InheritClusterDetails")) },
        { json: "manualClusterDetails", js: "manualClusterDetails", typ: u(undefined, r("ManualClusterDetails")) },
        { json: "name", js: "name", typ: "" },
        { json: "skipValidation", js: "skipValidation", typ: u(undefined, true) },
    ], "any"),
    "InheritClusterDetails": o([
        { json: "delegateName", js: "delegateName", typ: u(undefined, "") },
        { json: "delegateSelectors", js: "delegateSelectors", typ: u(undefined, a("")) },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
    ], "any"),
    "ManualClusterDetails": o([
        { json: "masterUrl", js: "masterUrl", typ: "" },
        { json: "none", js: "none", typ: u(undefined, r("None")) },
        { json: "oidcToken", js: "oidcToken", typ: u(undefined, r("OIDCToken")) },
        { json: "serviceAccountToken", js: "serviceAccountToken", typ: u(undefined, r("ServiceAccountToken")) },
        { json: "type", js: "type", typ: r("ManualClusterDetailsAuthenticationType") },
        { json: "usernameAndPassword", js: "usernameAndPassword", typ: u(undefined, r("UsernameAndPasswordAuthentication")) },
    ], "any"),
    "None": o([
        { json: "caCertificateSecretId", js: "caCertificateSecretId", typ: "" },
        { json: "clientCertificateSecretId", js: "clientCertificateSecretId", typ: "" },
        { json: "clientKeyAlgorithm", js: "clientKeyAlgorithm", typ: "" },
        { json: "clientKeyPassphraseSecretId", js: "clientKeyPassphraseSecretId", typ: "" },
        { json: "clientKeySecretId", js: "clientKeySecretId", typ: "" },
        { json: "passwordSecretId", js: "passwordSecretId", typ: "" },
        { json: "serviceAccountTokenSecretId", js: "serviceAccountTokenSecretId", typ: "" },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
        { json: "userName", js: "userName", typ: "" },
    ], "any"),
    "OIDCToken": o([
        { json: "clientIdSecretId", js: "clientIdSecretId", typ: "" },
        { json: "clientSecretSecretId", js: "clientSecretSecretId", typ: "" },
        { json: "identityProviderUrl", js: "identityProviderUrl", typ: "" },
        { json: "passwordSecretId", js: "passwordSecretId", typ: "" },
        { json: "scopes", js: "scopes", typ: "" },
        { json: "userName", js: "userName", typ: "" },
    ], "any"),
    "ServiceAccountToken": o([
        { json: "serviceAccountTokenSecretId", js: "serviceAccountTokenSecretId", typ: "" },
    ], "any"),
    "UsernameAndPasswordAuthentication": o([
        { json: "passwordSecretId", js: "passwordSecretId", typ: "" },
        { json: "userName", js: "userName", typ: u(undefined, "") },
        { json: "userNameSecretId", js: "userNameSecretId", typ: u(undefined, "") },
    ], "any"),
    "PcfCloudProviderInput": o([
        { json: "endpointUrl", js: "endpointUrl", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "passwordSecretId", js: "passwordSecretId", typ: "" },
        { json: "skipValidation", js: "skipValidation", typ: u(undefined, true) },
        { json: "userName", js: "userName", typ: u(undefined, "") },
        { json: "userNameSecretId", js: "userNameSecretId", typ: u(undefined, "") },
    ], "any"),
    "PhysicalDataCenterCloudProviderInput": o([
        { json: "name", js: "name", typ: "" },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
    ], "any"),
    "SpotInstCloudProviderInput": o([
        { json: "accountId", js: "accountId", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "tokenSecretId", js: "tokenSecretId", typ: "" },
    ], "any"),
    "CreateCloudProviderPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("IndecentClientMutationID")) },
        { json: "cloudProvider", js: "cloudProvider", typ: u(undefined, r("PurpleCloudProvider")) },
    ], "any"),
    "IndecentClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PurpleCloudProvider": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "CreateConnector": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("CreateConnectorArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("CreateConnectorPayload")) },
    ], "any"),
    "CreateConnectorArguments": o([
        { json: "input", js: "input", typ: r("CreateConnectorInput") },
    ], "any"),
    "CreateConnectorInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "connectorType", js: "connectorType", typ: r("ConnectorType") },
        { json: "dockerConnector", js: "dockerConnector", typ: u(undefined, r("DockerConnectorInput")) },
        { json: "gitConnector", js: "gitConnector", typ: u(undefined, r("GitConnectorInput")) },
        { json: "helmConnector", js: "helmConnector", typ: u(undefined, r("HelmConnectorInput")) },
        { json: "nexusConnector", js: "nexusConnector", typ: u(undefined, r("NexusConnectorInput")) },
    ], "any"),
    "DockerConnectorInput": o([
        { json: "delegateSelectors", js: "delegateSelectors", typ: u(undefined, a(u(null, ""))) },
        { json: "name", js: "name", typ: "" },
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, "") },
        { json: "URL", js: "URL", typ: "" },
        { json: "userName", js: "userName", typ: u(undefined, "") },
    ], "any"),
    "GitConnectorInput": o([
        { json: "branch", js: "branch", typ: u(undefined, "") },
        { json: "customCommitDetails", js: "customCommitDetails", typ: u(undefined, r("CustomCommitDetailsInput")) },
        { json: "delegateSelectors", js: "delegateSelectors", typ: u(undefined, a("")) },
        { json: "generateWebhookUrl", js: "generateWebhookUrl", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, "") },
        { json: "sshSettingId", js: "sshSettingId", typ: u(undefined, "") },
        { json: "URL", js: "URL", typ: "" },
        { json: "urlType", js: "urlType", typ: r("URLTypeEnum") },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
        { json: "userName", js: "userName", typ: u(undefined, "") },
    ], "any"),
    "CustomCommitDetailsInput": o([
        { json: "authorEmailId", js: "authorEmailId", typ: u(undefined, "") },
        { json: "authorName", js: "authorName", typ: u(undefined, "") },
        { json: "commitMessage", js: "commitMessage", typ: u(undefined, "") },
    ], "any"),
    "HelmConnectorInput": o([
        { json: "amazonS3PlatformDetails", js: "amazonS3PlatformDetails", typ: u(undefined, r("AmazonS3PlatformInput")) },
        { json: "gcsPlatformDetails", js: "gcsPlatformDetails", typ: u(undefined, r("GCSPlatformInput")) },
        { json: "httpServerPlatformDetails", js: "httpServerPlatformDetails", typ: u(undefined, r("HTTPServerPlatformInput")) },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "AmazonS3PlatformInput": o([
        { json: "awsCloudProvider", js: "awsCloudProvider", typ: "" },
        { json: "bucketName", js: "bucketName", typ: "" },
        { json: "region", js: "region", typ: "" },
    ], "any"),
    "GCSPlatformInput": o([
        { json: "bucketName", js: "bucketName", typ: "" },
        { json: "googleCloudProvider", js: "googleCloudProvider", typ: "" },
    ], "any"),
    "HTTPServerPlatformInput": o([
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, "") },
        { json: "URL", js: "URL", typ: "" },
        { json: "userName", js: "userName", typ: u(undefined, "") },
    ], "any"),
    "NexusConnectorInput": o([
        { json: "delegateSelectors", js: "delegateSelectors", typ: u(undefined, a(u(null, ""))) },
        { json: "name", js: "name", typ: "" },
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, "") },
        { json: "URL", js: "URL", typ: "" },
        { json: "userName", js: "userName", typ: u(undefined, "") },
        { json: "version", js: "version", typ: r("NexusVersion") },
    ], "any"),
    "CreateConnectorPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("HilariousClientMutationID")) },
        { json: "connector", js: "connector", typ: u(undefined, r("PurpleConnector")) },
    ], "any"),
    "HilariousClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PurpleConnector": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "CreateSecret": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("CreateSecretArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("CreateSecretPayload")) },
    ], "any"),
    "CreateSecretArguments": o([
        { json: "input", js: "input", typ: r("CreateSecretInput") },
    ], "any"),
    "CreateSecretInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "encryptedText", js: "encryptedText", typ: u(undefined, r("EncryptedTextInput")) },
        { json: "secretType", js: "secretType", typ: r("SecretType") },
        { json: "sshCredential", js: "sshCredential", typ: u(undefined, r("SSHCredentialInput")) },
        { json: "winRMCredential", js: "winRMCredential", typ: u(undefined, r("WinRMCredentialInput")) },
    ], "any"),
    "EncryptedTextInput": o([
        { json: "inheritScopesFromSM", js: "inheritScopesFromSM", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "scopedToAccount", js: "scopedToAccount", typ: u(undefined, true) },
        { json: "secretManagerId", js: "secretManagerId", typ: u(undefined, "") },
        { json: "secretReference", js: "secretReference", typ: u(undefined, "") },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], "any"),
    "SSHCredentialInput": o([
        { json: "authenticationScheme", js: "authenticationScheme", typ: r("SSHAuthenticationScheme") },
        { json: "kerberosAuthentication", js: "kerberosAuthentication", typ: u(undefined, r("KerberosAuthenticationInput")) },
        { json: "name", js: "name", typ: "" },
        { json: "sshAuthentication", js: "sshAuthentication", typ: u(undefined, r("SSHAuthenticationInput")) },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
    ], "any"),
    "KerberosAuthenticationInput": o([
        { json: "port", js: "port", typ: 3.14 },
        { json: "principal", js: "principal", typ: "" },
        { json: "realm", js: "realm", typ: "" },
        { json: "tgtGenerationMethod", js: "tgtGenerationMethod", typ: u(undefined, r("TGTGenerationMethod")) },
    ], "any"),
    "TGTGenerationMethod": o([
        { json: "kerberosPassword", js: "kerberosPassword", typ: u(undefined, r("KerberosPassword")) },
        { json: "keyTabFile", js: "keyTabFile", typ: u(undefined, r("KeyTabFile")) },
        { json: "tgtGenerationUsing", js: "tgtGenerationUsing", typ: r("TGTGenerationUsing") },
    ], "any"),
    "KerberosPassword": o([
        { json: "passwordSecretId", js: "passwordSecretId", typ: "" },
    ], "any"),
    "KeyTabFile": o([
        { json: "filePath", js: "filePath", typ: "" },
    ], "any"),
    "SSHAuthenticationInput": o([
        { json: "port", js: "port", typ: 3.14 },
        { json: "sshAuthenticationMethod", js: "sshAuthenticationMethod", typ: r("SSHAuthenticationMethod") },
        { json: "userName", js: "userName", typ: "" },
    ], "any"),
    "SSHAuthenticationMethod": o([
        { json: "inlineSSHKey", js: "inlineSSHKey", typ: u(undefined, r("InlineSSHKey")) },
        { json: "serverPassword", js: "serverPassword", typ: u(undefined, r("SSHPassword")) },
        { json: "sshCredentialType", js: "sshCredentialType", typ: r("SSHCredentialType") },
        { json: "sshKeyFile", js: "sshKeyFile", typ: u(undefined, r("SSHKeyFile")) },
    ], "any"),
    "InlineSSHKey": o([
        { json: "passphraseSecretId", js: "passphraseSecretId", typ: u(undefined, "") },
        { json: "sshKeySecretFileId", js: "sshKeySecretFileId", typ: "" },
    ], "any"),
    "SSHPassword": o([
        { json: "passwordSecretId", js: "passwordSecretId", typ: "" },
    ], "any"),
    "SSHKeyFile": o([
        { json: "passphraseSecretId", js: "passphraseSecretId", typ: u(undefined, "") },
        { json: "path", js: "path", typ: "" },
    ], "any"),
    "WinRMCredentialInput": o([
        { json: "authenticationScheme", js: "authenticationScheme", typ: u(undefined, r("WinRMAuthenticationScheme")) },
        { json: "domain", js: "domain", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "passwordSecretId", js: "passwordSecretId", typ: "" },
        { json: "port", js: "port", typ: u(undefined, 3.14) },
        { json: "skipCertCheck", js: "skipCertCheck", typ: u(undefined, true) },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
        { json: "userName", js: "userName", typ: "" },
        { json: "useSSL", js: "useSSL", typ: u(undefined, true) },
    ], "any"),
    "CreateSecretPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("AmbitiousClientMutationID")) },
        { json: "secret", js: "secret", typ: u(undefined, r("PurpleSecret")) },
    ], "any"),
    "AmbitiousClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PurpleSecret": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "CreateSecretManager": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("CreateSecretManagerArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpsertSecretManagerPayload")) },
    ], "any"),
    "CreateSecretManagerArguments": o([
        { json: "input", js: "input", typ: r("CreateSecretManagerInput") },
    ], "any"),
    "CreateSecretManagerInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "hashicorpVaultConfigInput", js: "hashicorpVaultConfigInput", typ: u(undefined, r("HashicorpVaultSecretManagerInput")) },
        { json: "secretManagerType", js: "secretManagerType", typ: r("SecretManagerType") },
    ], "any"),
    "HashicorpVaultSecretManagerInput": o([
        { json: "authDetails", js: "authDetails", typ: r("HashicorpVaultAuthDetails") },
        { json: "basePath", js: "basePath", typ: u(undefined, "") },
        { json: "isDefault", js: "isDefault", typ: u(undefined, true) },
        { json: "isReadOnly", js: "isReadOnly", typ: u(undefined, true) },
        { json: "name", js: "name", typ: "" },
        { json: "secretEngineName", js: "secretEngineName", typ: "" },
        { json: "secretEngineRenewalInterval", js: "secretEngineRenewalInterval", typ: m("any") },
        { json: "secretEngineVersion", js: "secretEngineVersion", typ: 3.14 },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
        { json: "vaultUrl", js: "vaultUrl", typ: "" },
    ], "any"),
    "HashicorpVaultAuthDetails": o([
        { json: "appRoleId", js: "appRoleId", typ: u(undefined, "") },
        { json: "authToken", js: "authToken", typ: u(undefined, "") },
        { json: "secretId", js: "secretId", typ: u(undefined, "") },
    ], "any"),
    "UpsertSecretManagerPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("CunningClientMutationID")) },
        { json: "secretManager", js: "secretManager", typ: u(undefined, r("ReturnSecretManager")) },
    ], "any"),
    "CunningClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ReturnSecretManager": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("SecretManager")) },
    ], "any"),
    "SecretManager": o([
        { json: "id", js: "id", typ: u(undefined, r("SecretManagerID")) },
        { json: "name", js: "name", typ: u(undefined, r("SecretManagerName")) },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("SecretManagerUsageScope")) },
    ], "any"),
    "SecretManagerID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "SecretManagerName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "SecretManagerUsageScope": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("UsageScope")) },
    ], "any"),
    "CreateTrigger": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("CreateTriggerArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("TriggerPayload")) },
    ], "any"),
    "CreateTriggerArguments": o([
        { json: "input", js: "input", typ: r("CreateTriggerInput") },
    ], "any"),
    "CreateTriggerInput": o([
        { json: "action", js: "action", typ: r("TriggerActionInput") },
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "condition", js: "condition", typ: r("TriggerConditionInput") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "TriggerActionInput": o([
        { json: "artifactSelections", js: "artifactSelections", typ: u(undefined, a(u(null, r("ArtifactSelectionInput")))) },
        { json: "continueWithDefaultValues", js: "continueWithDefaultValues", typ: u(undefined, true) },
        { json: "entityId", js: "entityId", typ: "" },
        { json: "excludeHostsWithSameArtifact", js: "excludeHostsWithSameArtifact", typ: u(undefined, true) },
        { json: "executionType", js: "executionType", typ: r("ExecutionType") },
        { json: "variables", js: "variables", typ: u(undefined, a(u(null, r("VariableInput")))) },
    ], "any"),
    "ArtifactSelectionInput": o([
        { json: "artifactFilter", js: "artifactFilter", typ: u(undefined, "") },
        { json: "artifactSelectionType", js: "artifactSelectionType", typ: r("ArtifactSelectionType") },
        { json: "artifactSourceId", js: "artifactSourceId", typ: u(undefined, "") },
        { json: "pipelineId", js: "pipelineId", typ: u(undefined, "") },
        { json: "regex", js: "regex", typ: u(undefined, true) },
        { json: "serviceId", js: "serviceId", typ: "" },
        { json: "workflowId", js: "workflowId", typ: u(undefined, "") },
    ], "any"),
    "VariableInput": o([
        { json: "name", js: "name", typ: "" },
        { json: "variableValue", js: "variableValue", typ: r("VariableValue") },
    ], "any"),
    "VariableValue": o([
        { json: "type", js: "type", typ: r("VariableValueType") },
        { json: "value", js: "value", typ: "" },
    ], "any"),
    "TriggerConditionInput": o([
        { json: "artifactConditionInput", js: "artifactConditionInput", typ: u(undefined, r("ArtifactConditionInput")) },
        { json: "conditionType", js: "conditionType", typ: r("ConditionType") },
        { json: "pipelineConditionInput", js: "pipelineConditionInput", typ: u(undefined, r("PipelineConditionInput")) },
        { json: "scheduleConditionInput", js: "scheduleConditionInput", typ: u(undefined, r("ScheduleConditionInput")) },
        { json: "webhookConditionInput", js: "webhookConditionInput", typ: u(undefined, r("WebhookConditionInput")) },
    ], "any"),
    "ArtifactConditionInput": o([
        { json: "artifactFilter", js: "artifactFilter", typ: u(undefined, "") },
        { json: "artifactSourceId", js: "artifactSourceId", typ: "" },
        { json: "regex", js: "regex", typ: u(undefined, true) },
    ], "any"),
    "PipelineConditionInput": o([
        { json: "pipelineId", js: "pipelineId", typ: "" },
    ], "any"),
    "ScheduleConditionInput": o([
        { json: "cronExpression", js: "cronExpression", typ: "" },
        { json: "onNewArtifactOnly", js: "onNewArtifactOnly", typ: u(undefined, true) },
    ], "any"),
    "WebhookConditionInput": o([
        { json: "bitbucketEvent", js: "bitbucketEvent", typ: u(undefined, r("BitbucketEvent")) },
        { json: "branchName", js: "branchName", typ: u(undefined, "") },
        { json: "branchRegex", js: "branchRegex", typ: u(undefined, "") },
        { json: "deployOnlyIfFilesChanged", js: "deployOnlyIfFilesChanged", typ: u(undefined, true) },
        { json: "filePaths", js: "filePaths", typ: u(undefined, a(u(null, ""))) },
        { json: "gitConnectorId", js: "gitConnectorId", typ: u(undefined, "") },
        { json: "githubEvent", js: "githubEvent", typ: u(undefined, r("GitHubEvent")) },
        { json: "gitlabEvent", js: "gitlabEvent", typ: u(undefined, r("GitlabEvent")) },
        { json: "repoName", js: "repoName", typ: u(undefined, "") },
        { json: "webhookSecret", js: "webhookSecret", typ: u(undefined, "") },
        { json: "webhookSourceType", js: "webhookSourceType", typ: r("WebhookSource") },
    ], "any"),
    "GitHubEvent": o([
        { json: "action", js: "action", typ: u(undefined, r("GitHubAction")) },
        { json: "event", js: "event", typ: u(undefined, r("GitHubEventType")) },
    ], "any"),
    "TriggerPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("MagentaClientMutationID")) },
        { json: "trigger", js: "trigger", typ: u(undefined, r("PurpleTrigger")) },
    ], "any"),
    "MagentaClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PurpleTrigger": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("Trigger")) },
    ], "any"),
    "Trigger": o([
        { json: "action", js: "action", typ: u(undefined, r("Action")) },
        { json: "condition", js: "condition", typ: u(undefined, r("Condition")) },
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("TriggerCreatedAt")) },
        { json: "createdBy", js: "createdBy", typ: u(undefined, r("TriggerCreatedBy")) },
        { json: "description", js: "description", typ: u(undefined, r("TriggerDescription")) },
        { json: "excludeHostsWithSameArtifact", js: "excludeHostsWithSameArtifact", typ: u(undefined, r("ExcludeHostsWithSameArtifact")) },
        { json: "id", js: "id", typ: u(undefined, r("TriggerID")) },
        { json: "name", js: "name", typ: u(undefined, r("TriggerName")) },
        { json: "tags", js: "tags", typ: u(undefined, r("TriggerTags")) },
    ], "any"),
    "Action": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "Condition": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "TriggerCreatedAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "TriggerCreatedBy": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("User")) },
    ], "any"),
    "TriggerDescription": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ExcludeHostsWithSameArtifact": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, true) },
    ], "any"),
    "TriggerID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TriggerName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TriggerTags": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Tag")))) },
    ], "any"),
    "CreateUser": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("CreateUserArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("CreateUserPayload")) },
    ], "any"),
    "CreateUserArguments": o([
        { json: "input", js: "input", typ: r("CreateUserInput") },
    ], "any"),
    "CreateUserInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "email", js: "email", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "userGroupIds", js: "userGroupIds", typ: u(undefined, a("")) },
    ], "any"),
    "CreateUserPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("FriskyClientMutationID")) },
        { json: "user", js: "user", typ: u(undefined, r("PurpleUser")) },
    ], "any"),
    "FriskyClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PurpleUser": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("User")) },
    ], "any"),
    "CreateUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("CreateUserGroupArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("CreateUserGroupPayload")) },
    ], "any"),
    "CreateUserGroupArguments": o([
        { json: "input", js: "input", typ: r("CreateUserGroupInput") },
    ], "any"),
    "CreateUserGroupInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "notificationSettings", js: "notificationSettings", typ: u(undefined, r("NotificationSettingsInput")) },
        { json: "permissions", js: "permissions", typ: u(undefined, r("Permissions")) },
        { json: "ssoSetting", js: "ssoSetting", typ: u(undefined, r("SSOSettingInput")) },
        { json: "userIds", js: "userIds", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "NotificationSettingsInput": o([
        { json: "groupEmailAddresses", js: "groupEmailAddresses", typ: u(undefined, a(u(null, ""))) },
        { json: "microsoftTeamsWebhookUrl", js: "microsoftTeamsWebhookUrl", typ: u(undefined, "") },
        { json: "pagerDutyIntegrationKey", js: "pagerDutyIntegrationKey", typ: u(undefined, "") },
        { json: "sendMailToNewMembers", js: "sendMailToNewMembers", typ: u(undefined, true) },
        { json: "sendNotificationToMembers", js: "sendNotificationToMembers", typ: u(undefined, true) },
        { json: "slackNotificationSetting", js: "slackNotificationSetting", typ: u(undefined, r("SlackNotificationSettingInput")) },
    ], "any"),
    "SlackNotificationSettingInput": o([
        { json: "slackChannelName", js: "slackChannelName", typ: u(undefined, "") },
        { json: "slackWebhookURL", js: "slackWebhookURL", typ: u(undefined, "") },
    ], "any"),
    "Permissions": o([
        { json: "accountPermissions", js: "accountPermissions", typ: u(undefined, r("AccountPermissionInput")) },
        { json: "appPermissions", js: "appPermissions", typ: u(undefined, a(u(null, r("ApplicationPermissionInput")))) },
    ], "any"),
    "AccountPermissionInput": o([
        { json: "accountPermissionTypes", js: "accountPermissionTypes", typ: u(undefined, a(u(r("AccountPermissionType"), null))) },
    ], "any"),
    "SSOSettingInput": o([
        { json: "ldapSettings", js: "ldapSettings", typ: u(undefined, r("LDAPSettingsInput")) },
        { json: "samlSettings", js: "samlSettings", typ: u(undefined, r("SAMLSettingsInput")) },
    ], "any"),
    "LDAPSettingsInput": o([
        { json: "groupDN", js: "groupDN", typ: "" },
        { json: "groupName", js: "groupName", typ: "" },
        { json: "ssoProviderId", js: "ssoProviderId", typ: "" },
    ], "any"),
    "SAMLSettingsInput": o([
        { json: "groupName", js: "groupName", typ: "" },
        { json: "ssoProviderId", js: "ssoProviderId", typ: "" },
    ], "any"),
    "CreateUserGroupPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("MischievousClientMutationID")) },
        { json: "userGroup", js: "userGroup", typ: u(undefined, r("StickyUserGroup")) },
    ], "any"),
    "MischievousClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "StickyUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("UserGroup")) },
    ], "any"),
    "DeleteApplication": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("DeleteApplicationArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("DeleteApplicationPayload")) },
    ], "any"),
    "DeleteApplicationArguments": o([
        { json: "input", js: "input", typ: r("DeleteApplicationInput") },
    ], "any"),
    "DeleteApplicationInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
    ], "any"),
    "DeleteApplicationPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("BraggadociousClientMutationID")) },
    ], "any"),
    "BraggadociousClientMutationID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "DeleteCloudProvider": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("DeleteCloudProviderArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("DeleteCloudProviderPayload")) },
    ], "any"),
    "DeleteCloudProviderArguments": o([
        { json: "input", js: "input", typ: r("DeleteCloudProviderInput") },
    ], "any"),
    "DeleteCloudProviderInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "cloudProviderId", js: "cloudProviderId", typ: "" },
    ], "any"),
    "DeleteCloudProviderPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID1")) },
    ], "any"),
    "ClientMutationID1": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "DeleteConnector": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("DeleteConnectorArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("DeleteConnectorPayload")) },
    ], "any"),
    "DeleteConnectorArguments": o([
        { json: "input", js: "input", typ: r("DeleteConnectorInput") },
    ], "any"),
    "DeleteConnectorInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "connectorId", js: "connectorId", typ: "" },
    ], "any"),
    "DeleteConnectorPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID2")) },
    ], "any"),
    "ClientMutationID2": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "DeleteSecret": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("DeleteSecretArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("DeleteSecretPayload")) },
    ], "any"),
    "DeleteSecretArguments": o([
        { json: "input", js: "input", typ: r("DeleteSecretInput") },
    ], "any"),
    "DeleteSecretInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "secretId", js: "secretId", typ: "" },
        { json: "secretType", js: "secretType", typ: r("SecretType") },
    ], "any"),
    "DeleteSecretPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID3")) },
    ], "any"),
    "ClientMutationID3": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "DeleteSecretManager": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("DeleteSecretManagerArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("DeleteSecretManagerPayload")) },
    ], "any"),
    "DeleteSecretManagerArguments": o([
        { json: "input", js: "input", typ: r("DeleteSecretManagerInput") },
    ], "any"),
    "DeleteSecretManagerInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "secretManagerId", js: "secretManagerId", typ: "" },
    ], "any"),
    "DeleteSecretManagerPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID4")) },
    ], "any"),
    "ClientMutationID4": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "DeleteTrigger": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("DeleteTriggerArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("DeleteTriggerPayload")) },
    ], "any"),
    "DeleteTriggerArguments": o([
        { json: "input", js: "input", typ: r("DeleteTriggerInput") },
    ], "any"),
    "DeleteTriggerInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "triggerId", js: "triggerId", typ: "" },
    ], "any"),
    "DeleteTriggerPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID5")) },
    ], "any"),
    "ClientMutationID5": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "DeleteUser": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("DeleteUserArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("DeleteUserPayload")) },
    ], "any"),
    "DeleteUserArguments": o([
        { json: "input", js: "input", typ: r("DeleteUserInput") },
    ], "any"),
    "DeleteUserInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "DeleteUserPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID6")) },
    ], "any"),
    "ClientMutationID6": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "DeleteUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("DeleteUserGroupArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("DeleteUserGroupPayload")) },
    ], "any"),
    "DeleteUserGroupArguments": o([
        { json: "input", js: "input", typ: r("DeleteUserGroupInput") },
    ], "any"),
    "DeleteUserGroupInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "userGroupId", js: "userGroupId", typ: "" },
    ], "any"),
    "DeleteUserGroupPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID7")) },
    ], "any"),
    "ClientMutationID7": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "DetachTag": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("DetachTagArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("DetachTagPayload")) },
    ], "any"),
    "DetachTagArguments": o([
        { json: "input", js: "input", typ: r("DetachTagInput") },
    ], "any"),
    "DetachTagInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "entityId", js: "entityId", typ: "" },
        { json: "entityType", js: "entityType", typ: r("TagEntityType") },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "DetachTagPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID8")) },
    ], "any"),
    "ClientMutationID8": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ExportExecutions": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("ExportExecutionsArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("ExportExecutionsPayload")) },
    ], "any"),
    "ExportExecutionsArguments": o([
        { json: "input", js: "input", typ: r("ExportExecutionsInput") },
    ], "any"),
    "ExportExecutionsInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "filters", js: "filters", typ: u(undefined, a(r("ExportExecutionFilter"))) },
        { json: "notifyOnlyTriggeringUser", js: "notifyOnlyTriggeringUser", typ: u(undefined, true) },
        { json: "userGroupIds", js: "userGroupIds", typ: u(undefined, a("")) },
    ], "any"),
    "ExportExecutionFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "cloudProvider", js: "cloudProvider", typ: u(undefined, r("IDFilter")) },
        { json: "creationTime", js: "creationTime", typ: u(undefined, r("TimeFilter")) },
        { json: "duration", js: "duration", typ: u(undefined, r("NumberFilter")) },
        { json: "endTime", js: "endTime", typ: u(undefined, r("TimeFilter")) },
        { json: "environment", js: "environment", typ: u(undefined, r("IDFilter")) },
        { json: "execution", js: "execution", typ: u(undefined, r("IDFilter")) },
        { json: "pipeline", js: "pipeline", typ: u(undefined, r("IDFilter")) },
        { json: "service", js: "service", typ: u(undefined, r("IDFilter")) },
        { json: "startTime", js: "startTime", typ: u(undefined, r("TimeFilter")) },
        { json: "status", js: "status", typ: u(undefined, r("IDFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("DeploymentTagFilter")) },
        { json: "trigger", js: "trigger", typ: u(undefined, r("IDFilter")) },
        { json: "triggeredBy", js: "triggeredBy", typ: u(undefined, r("IDFilter")) },
        { json: "workflow", js: "workflow", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "TimeFilter": o([
        { json: "operator", js: "operator", typ: r("TimeOperator") },
        { json: "value", js: "value", typ: m("any") },
    ], "any"),
    "NumberFilter": o([
        { json: "operator", js: "operator", typ: r("NumericOperator") },
        { json: "values", js: "values", typ: a(u(m("any"), null)) },
    ], "any"),
    "DeploymentTagFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("DeploymentTagType")) },
        { json: "tags", js: "tags", typ: u(undefined, a(u(null, r("TagInput")))) },
    ], "any"),
    "ExportExecutionsPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID9")) },
        { json: "downloadLink", js: "downloadLink", typ: u(undefined, r("DownloadLink")) },
        { json: "errorMessage", js: "errorMessage", typ: u(undefined, r("ErrorMessage")) },
        { json: "expiresAt", js: "expiresAt", typ: u(undefined, r("ExpiresAt")) },
        { json: "requestId", js: "requestId", typ: u(undefined, r("RequestID")) },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "statusLink", js: "statusLink", typ: u(undefined, r("StatusLink")) },
        { json: "totalExecutions", js: "totalExecutions", typ: u(undefined, r("TotalExecutions")) },
        { json: "triggeredAt", js: "triggeredAt", typ: u(undefined, r("TriggeredAt")) },
    ], "any"),
    "ClientMutationID9": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "DownloadLink": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ErrorMessage": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ExpiresAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "RequestID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Status": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ExportExecutionsStatus")) },
    ], "any"),
    "StatusLink": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TotalExecutions": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "TriggeredAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "RemoveApplicationGitSyncConfig": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("RemoveApplicationGitSyncConfigArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("RemoveApplicationGitSyncConfigPayload")) },
    ], "any"),
    "RemoveApplicationGitSyncConfigArguments": o([
        { json: "input", js: "input", typ: r("RemoveApplicationGitSyncConfigInput") },
    ], "any"),
    "RemoveApplicationGitSyncConfigInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
    ], "any"),
    "RemoveApplicationGitSyncConfigPayload": o([
        { json: "application", js: "application", typ: u(undefined, r("FluffyApplication")) },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID10")) },
    ], "any"),
    "FluffyApplication": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("Application")) },
    ], "any"),
    "ClientMutationID10": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "RemoveUserFromUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("RemoveUserFromUserGroupArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("RemoveUserFromUserGroupPayload")) },
    ], "any"),
    "RemoveUserFromUserGroupArguments": o([
        { json: "input", js: "input", typ: r("RemoveUserFromUserGroupInput") },
    ], "any"),
    "RemoveUserFromUserGroupInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "userGroupId", js: "userGroupId", typ: "" },
        { json: "userId", js: "userId", typ: "" },
    ], "any"),
    "RemoveUserFromUserGroupPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID11")) },
        { json: "userGroup", js: "userGroup", typ: u(undefined, r("IndigoUserGroup")) },
    ], "any"),
    "ClientMutationID11": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "IndigoUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("UserGroup")) },
    ], "any"),
    "ResumeExecution": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("ResumeExecutionArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("ResumeExecutionPayload")) },
    ], "any"),
    "ResumeExecutionArguments": o([
        { json: "input", js: "input", typ: u(undefined, r("ResumeExecutionInput")) },
    ], "any"),
    "ResumeExecutionInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "pipelineExecutionId", js: "pipelineExecutionId", typ: "" },
        { json: "pipelineStageName", js: "pipelineStageName", typ: "" },
    ], "any"),
    "ResumeExecutionPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID12")) },
        { json: "execution", js: "execution", typ: u(undefined, r("PurpleExecution")) },
    ], "any"),
    "ClientMutationID12": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PurpleExecution": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "StartExecution": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("StartExecutionArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("StartExecutionPayload")) },
    ], "any"),
    "StartExecutionArguments": o([
        { json: "input", js: "input", typ: r("StartExecutionInput") },
    ], "any"),
    "StartExecutionInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "continueWithDefaultValues", js: "continueWithDefaultValues", typ: u(undefined, true) },
        { json: "entityId", js: "entityId", typ: "" },
        { json: "excludeHostsWithSameArtifact", js: "excludeHostsWithSameArtifact", typ: u(undefined, true) },
        { json: "executionType", js: "executionType", typ: r("ExecutionType") },
        { json: "notes", js: "notes", typ: u(undefined, "") },
        { json: "serviceInputs", js: "serviceInputs", typ: u(undefined, a(u(null, r("ServiceInput")))) },
        { json: "specificHosts", js: "specificHosts", typ: u(undefined, a(u(null, ""))) },
        { json: "targetToSpecificHosts", js: "targetToSpecificHosts", typ: u(undefined, true) },
        { json: "variableInputs", js: "variableInputs", typ: u(undefined, a(u(null, r("VariableInput")))) },
    ], "any"),
    "ServiceInput": o([
        { json: "artifactValueInput", js: "artifactValueInput", typ: u(undefined, r("ArtfifactValueInput")) },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "ArtfifactValueInput": o([
        { json: "artifactId", js: "artifactId", typ: u(undefined, r("ArtifactIDInput")) },
        { json: "buildNumber", js: "buildNumber", typ: u(undefined, r("BuildNumberInput")) },
        { json: "parameterizedArtifactSource", js: "parameterizedArtifactSource", typ: u(undefined, r("ParameterizedArtifactSourceInput")) },
        { json: "valueType", js: "valueType", typ: r("ArtifactInputType") },
    ], "any"),
    "ArtifactIDInput": o([
        { json: "artifactId", js: "artifactId", typ: "" },
    ], "any"),
    "BuildNumberInput": o([
        { json: "artifactSourceName", js: "artifactSourceName", typ: "" },
        { json: "buildNumber", js: "buildNumber", typ: "" },
    ], "any"),
    "ParameterizedArtifactSourceInput": o([
        { json: "artifactSourceName", js: "artifactSourceName", typ: "" },
        { json: "buildNumber", js: "buildNumber", typ: "" },
        { json: "parameterValueInputs", js: "parameterValueInputs", typ: u(undefined, a(u(null, r("ParameterValueInput")))) },
    ], "any"),
    "ParameterValueInput": o([
        { json: "name", js: "name", typ: "" },
        { json: "value", js: "value", typ: "" },
    ], "any"),
    "StartExecutionPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID13")) },
        { json: "execution", js: "execution", typ: u(undefined, r("FluffyExecution")) },
        { json: "warningMessage", js: "warningMessage", typ: u(undefined, r("WarningMessage")) },
    ], "any"),
    "ClientMutationID13": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffyExecution": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "WarningMessage": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "UpdateApplication": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateApplicationArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpdateApplicationPayload")) },
    ], "any"),
    "UpdateApplicationArguments": o([
        { json: "input", js: "input", typ: r("UpdateApplicationInput") },
    ], "any"),
    "UpdateApplicationInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "isManualTriggerAuthorized", js: "isManualTriggerAuthorized", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "UpdateApplicationPayload": o([
        { json: "application", js: "application", typ: u(undefined, r("TentacledApplication")) },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID14")) },
    ], "any"),
    "TentacledApplication": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("Application")) },
    ], "any"),
    "ClientMutationID14": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "UpdateApplicationGitSyncConfig": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateApplicationGitSyncConfigArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpdateApplicationGitSyncConfigPayload")) },
    ], "any"),
    "UpdateApplicationGitSyncConfigArguments": o([
        { json: "input", js: "input", typ: r("UpdateApplicationGitSyncConfigInput") },
    ], "any"),
    "UpdateApplicationGitSyncConfigInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "branch", js: "branch", typ: "" },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "gitConnectorId", js: "gitConnectorId", typ: "" },
        { json: "repositoryName", js: "repositoryName", typ: u(undefined, "") },
        { json: "syncEnabled", js: "syncEnabled", typ: true },
    ], "any"),
    "UpdateApplicationGitSyncConfigPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID15")) },
        { json: "gitSyncConfig", js: "gitSyncConfig", typ: u(undefined, r("PurpleGitSyncConfig")) },
    ], "any"),
    "ClientMutationID15": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PurpleGitSyncConfig": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("GitSyncConfig")) },
    ], "any"),
    "UpdateApplicationGitSyncConfigStatus": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateApplicationGitSyncConfigStatusArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpdateApplicationGitSyncConfigStatusPayload")) },
    ], "any"),
    "UpdateApplicationGitSyncConfigStatusArguments": o([
        { json: "input", js: "input", typ: r("UpdateApplicationGitSyncConfigStatusInput") },
    ], "any"),
    "UpdateApplicationGitSyncConfigStatusInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "syncEnabled", js: "syncEnabled", typ: true },
    ], "any"),
    "UpdateApplicationGitSyncConfigStatusPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID16")) },
        { json: "gitSyncConfig", js: "gitSyncConfig", typ: u(undefined, r("FluffyGitSyncConfig")) },
    ], "any"),
    "ClientMutationID16": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffyGitSyncConfig": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("GitSyncConfig")) },
    ], "any"),
    "UpdateCloudProvider": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateCloudProviderArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpdateCloudProviderPayload")) },
    ], "any"),
    "UpdateCloudProviderArguments": o([
        { json: "input", js: "input", typ: r("UpdateCloudProviderInput") },
    ], "any"),
    "UpdateCloudProviderInput": o([
        { json: "awsCloudProvider", js: "awsCloudProvider", typ: u(undefined, r("UpdateAwsCloudProviderInput")) },
        { json: "azureCloudProvider", js: "azureCloudProvider", typ: u(undefined, r("UpdateAzureCloudProviderInput")) },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "cloudProviderId", js: "cloudProviderId", typ: "" },
        { json: "cloudProviderType", js: "cloudProviderType", typ: r("CloudProviderType") },
        { json: "gcpCloudProvider", js: "gcpCloudProvider", typ: u(undefined, r("UpdateGcpCloudProviderInput")) },
        { json: "k8sCloudProvider", js: "k8sCloudProvider", typ: u(undefined, r("UpdateK8SCloudProviderInput")) },
        { json: "pcfCloudProvider", js: "pcfCloudProvider", typ: u(undefined, r("UpdatePcfCloudProviderInput")) },
        { json: "physicalDataCenterCloudProvider", js: "physicalDataCenterCloudProvider", typ: u(undefined, r("UpdatePhysicalDataCenterCloudProviderInput")) },
        { json: "spotInstCloudProvider", js: "spotInstCloudProvider", typ: u(undefined, r("UpdateSpotInstCloudProviderInput")) },
    ], "any"),
    "UpdateAwsCloudProviderInput": o([
        { json: "credentialsType", js: "credentialsType", typ: u(undefined, r("AwsCredentialsType")) },
        { json: "crossAccountAttributes", js: "crossAccountAttributes", typ: u(undefined, r("UpdateAwsCrossAccountAttributes")) },
        { json: "defaultRegion", js: "defaultRegion", typ: u(undefined, "") },
        { json: "ec2IamCredentials", js: "ec2IamCredentials", typ: u(undefined, r("UpdateEc2IamCredentials")) },
        { json: "manualCredentials", js: "manualCredentials", typ: u(undefined, r("UpdateAwsManualCredentials")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "UpdateAwsCrossAccountAttributes": o([
        { json: "assumeCrossAccountRole", js: "assumeCrossAccountRole", typ: u(undefined, true) },
        { json: "crossAccountRoleArn", js: "crossAccountRoleArn", typ: u(undefined, "") },
        { json: "externalId", js: "externalId", typ: u(undefined, "") },
    ], "any"),
    "UpdateEc2IamCredentials": o([
        { json: "delegateSelector", js: "delegateSelector", typ: u(undefined, "") },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
    ], "any"),
    "UpdateAwsManualCredentials": o([
        { json: "accessKey", js: "accessKey", typ: u(undefined, "") },
        { json: "accessKeySecretId", js: "accessKeySecretId", typ: u(undefined, "") },
        { json: "secretKeySecretId", js: "secretKeySecretId", typ: u(undefined, "") },
    ], "any"),
    "UpdateAzureCloudProviderInput": o([
        { json: "clientId", js: "clientId", typ: u(undefined, "") },
        { json: "keySecretId", js: "keySecretId", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "tenantId", js: "tenantId", typ: u(undefined, "") },
    ], "any"),
    "UpdateGcpCloudProviderInput": o([
        { json: "delegateSelector", js: "delegateSelector", typ: u(undefined, "") },
        { json: "delegateSelectors", js: "delegateSelectors", typ: u(undefined, a("")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "serviceAccountKeySecretId", js: "serviceAccountKeySecretId", typ: u(undefined, "") },
        { json: "skipValidation", js: "skipValidation", typ: u(undefined, true) },
        { json: "useDelegate", js: "useDelegate", typ: u(undefined, true) },
        { json: "useDelegateSelectors", js: "useDelegateSelectors", typ: u(undefined, true) },
    ], "any"),
    "UpdateK8SCloudProviderInput": o([
        { json: "clusterDetailsType", js: "clusterDetailsType", typ: u(undefined, r("ClusterDetailsType")) },
        { json: "inheritClusterDetails", js: "inheritClusterDetails", typ: u(undefined, r("UpdateInheritClusterDetails")) },
        { json: "manualClusterDetails", js: "manualClusterDetails", typ: u(undefined, r("UpdateManualClusterDetails")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "skipValidation", js: "skipValidation", typ: u(undefined, true) },
    ], "any"),
    "UpdateInheritClusterDetails": o([
        { json: "delegateName", js: "delegateName", typ: u(undefined, "") },
        { json: "delegateSelectors", js: "delegateSelectors", typ: u(undefined, a("")) },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
    ], "any"),
    "UpdateManualClusterDetails": o([
        { json: "masterUrl", js: "masterUrl", typ: u(undefined, "") },
        { json: "none", js: "none", typ: u(undefined, r("UpdateNone")) },
        { json: "oidcToken", js: "oidcToken", typ: u(undefined, r("UpdateOIDCToken")) },
        { json: "serviceAccountToken", js: "serviceAccountToken", typ: u(undefined, r("UpdateServiceAccountToken")) },
        { json: "type", js: "type", typ: u(undefined, r("ManualClusterDetailsAuthenticationType")) },
        { json: "usernameAndPassword", js: "usernameAndPassword", typ: u(undefined, r("UpdateUsernameAndPasswordAuthentication")) },
    ], "any"),
    "UpdateNone": o([
        { json: "caCertificateSecretId", js: "caCertificateSecretId", typ: u(undefined, "") },
        { json: "clientCertificateSecretId", js: "clientCertificateSecretId", typ: u(undefined, "") },
        { json: "clientKeyAlgorithm", js: "clientKeyAlgorithm", typ: u(undefined, "") },
        { json: "clientKeyPassphraseSecretId", js: "clientKeyPassphraseSecretId", typ: u(undefined, "") },
        { json: "clientKeySecretId", js: "clientKeySecretId", typ: u(undefined, "") },
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, "") },
        { json: "serviceAccountTokenSecretId", js: "serviceAccountTokenSecretId", typ: u(undefined, "") },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
        { json: "userName", js: "userName", typ: u(undefined, "") },
    ], "any"),
    "UpdateOIDCToken": o([
        { json: "clientIdSecretId", js: "clientIdSecretId", typ: u(undefined, "") },
        { json: "clientSecretSecretId", js: "clientSecretSecretId", typ: u(undefined, "") },
        { json: "identityProviderUrl", js: "identityProviderUrl", typ: u(undefined, "") },
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, "") },
        { json: "scopes", js: "scopes", typ: u(undefined, "") },
        { json: "userName", js: "userName", typ: u(undefined, "") },
    ], "any"),
    "UpdateServiceAccountToken": o([
        { json: "serviceAccountTokenSecretId", js: "serviceAccountTokenSecretId", typ: u(undefined, "") },
    ], "any"),
    "UpdateUsernameAndPasswordAuthentication": o([
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, "") },
        { json: "userName", js: "userName", typ: u(undefined, "") },
        { json: "userNameSecretId", js: "userNameSecretId", typ: u(undefined, "") },
    ], "any"),
    "UpdatePcfCloudProviderInput": o([
        { json: "endpointUrl", js: "endpointUrl", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, "") },
        { json: "skipValidation", js: "skipValidation", typ: u(undefined, true) },
        { json: "userName", js: "userName", typ: u(undefined, "") },
        { json: "userNameSecretId", js: "userNameSecretId", typ: u(undefined, "") },
    ], "any"),
    "UpdatePhysicalDataCenterCloudProviderInput": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
    ], "any"),
    "UpdateSpotInstCloudProviderInput": o([
        { json: "accountId", js: "accountId", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "tokenSecretId", js: "tokenSecretId", typ: u(undefined, "") },
    ], "any"),
    "UpdateCloudProviderPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID17")) },
        { json: "cloudProvider", js: "cloudProvider", typ: u(undefined, r("FluffyCloudProvider")) },
    ], "any"),
    "ClientMutationID17": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffyCloudProvider": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "UpdateConnector": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateConnectorArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpdateConnectorPayload")) },
    ], "any"),
    "UpdateConnectorArguments": o([
        { json: "input", js: "input", typ: r("UpdateConnectorInput") },
    ], "any"),
    "UpdateConnectorInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "connectorId", js: "connectorId", typ: "" },
        { json: "connectorType", js: "connectorType", typ: r("ConnectorType") },
        { json: "dockerConnector", js: "dockerConnector", typ: u(undefined, r("DockerConnectorInput")) },
        { json: "gitConnector", js: "gitConnector", typ: u(undefined, r("UpdateGitConnectorInput")) },
        { json: "helmConnector", js: "helmConnector", typ: u(undefined, r("HelmConnectorInput")) },
        { json: "nexusConnector", js: "nexusConnector", typ: u(undefined, r("NexusConnectorInput")) },
    ], "any"),
    "UpdateGitConnectorInput": o([
        { json: "branch", js: "branch", typ: u(undefined, "") },
        { json: "customCommitDetails", js: "customCommitDetails", typ: u(undefined, r("CustomCommitDetailsInput")) },
        { json: "delegateSelectors", js: "delegateSelectors", typ: u(undefined, a("")) },
        { json: "generateWebhookUrl", js: "generateWebhookUrl", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, "") },
        { json: "sshSettingId", js: "sshSettingId", typ: u(undefined, "") },
        { json: "URL", js: "URL", typ: u(undefined, "") },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
        { json: "userName", js: "userName", typ: u(undefined, "") },
    ], "any"),
    "UpdateConnectorPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID18")) },
        { json: "connector", js: "connector", typ: u(undefined, r("FluffyConnector")) },
    ], "any"),
    "ClientMutationID18": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffyConnector": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "UpdateSecret": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateSecretArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpdateSecretPayload")) },
    ], "any"),
    "UpdateSecretArguments": o([
        { json: "input", js: "input", typ: r("UpdateSecretInput") },
    ], "any"),
    "UpdateSecretInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "encryptedText", js: "encryptedText", typ: u(undefined, r("UpdateEncryptedText")) },
        { json: "secretId", js: "secretId", typ: "" },
        { json: "secretType", js: "secretType", typ: r("SecretType") },
        { json: "sshCredential", js: "sshCredential", typ: u(undefined, r("UpdateSSHCredential")) },
        { json: "winRMCredential", js: "winRMCredential", typ: u(undefined, r("UpdateWinRMCredential")) },
    ], "any"),
    "UpdateEncryptedText": o([
        { json: "inheritScopesFromSM", js: "inheritScopesFromSM", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "scopedToAccount", js: "scopedToAccount", typ: u(undefined, true) },
        { json: "secretReference", js: "secretReference", typ: u(undefined, "") },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], "any"),
    "UpdateSSHCredential": o([
        { json: "authenticationScheme", js: "authenticationScheme", typ: u(undefined, r("SSHAuthenticationScheme")) },
        { json: "kerberosAuthentication", js: "kerberosAuthentication", typ: u(undefined, r("KerberosAuthenticationInput")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "sshAuthentication", js: "sshAuthentication", typ: u(undefined, r("SSHAuthenticationInput")) },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
    ], "any"),
    "UpdateWinRMCredential": o([
        { json: "authenticationScheme", js: "authenticationScheme", typ: u(undefined, r("WinRMAuthenticationScheme")) },
        { json: "domain", js: "domain", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "passwordSecretId", js: "passwordSecretId", typ: u(undefined, "") },
        { json: "port", js: "port", typ: u(undefined, 3.14) },
        { json: "skipCertCheck", js: "skipCertCheck", typ: u(undefined, true) },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
        { json: "userName", js: "userName", typ: u(undefined, "") },
        { json: "useSSL", js: "useSSL", typ: u(undefined, true) },
    ], "any"),
    "UpdateSecretPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID19")) },
        { json: "secret", js: "secret", typ: u(undefined, r("FluffySecret")) },
    ], "any"),
    "ClientMutationID19": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffySecret": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "UpdateSecretManager": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateSecretManagerArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpsertSecretManagerPayload")) },
    ], "any"),
    "UpdateSecretManagerArguments": o([
        { json: "input", js: "input", typ: r("UpdateSecretManagerInput") },
    ], "any"),
    "UpdateSecretManagerInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "hashicorpVaultConfigInput", js: "hashicorpVaultConfigInput", typ: u(undefined, r("UpdateHashicorpVaultInput")) },
        { json: "secretManagerId", js: "secretManagerId", typ: "" },
        { json: "secretManagerType", js: "secretManagerType", typ: r("SecretManagerType") },
    ], "any"),
    "UpdateHashicorpVaultInput": o([
        { json: "authDetails", js: "authDetails", typ: u(undefined, r("HashicorpVaultAuthDetails")) },
        { json: "isDefault", js: "isDefault", typ: u(undefined, true) },
        { json: "isReadOnly", js: "isReadOnly", typ: u(undefined, true) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "secretEngineRenewalInterval", js: "secretEngineRenewalInterval", typ: u(undefined, m("any")) },
        { json: "usageScope", js: "usageScope", typ: u(undefined, r("UsageScopeInput")) },
    ], "any"),
    "UpdateTrigger": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateTriggerArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpdateTriggerPayload")) },
    ], "any"),
    "UpdateTriggerArguments": o([
        { json: "input", js: "input", typ: r("UpdateTriggerInput") },
    ], "any"),
    "UpdateTriggerInput": o([
        { json: "action", js: "action", typ: r("TriggerActionInput") },
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "condition", js: "condition", typ: r("TriggerConditionInput") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "triggerId", js: "triggerId", typ: "" },
    ], "any"),
    "UpdateTriggerPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID20")) },
        { json: "trigger", js: "trigger", typ: u(undefined, r("FluffyTrigger")) },
    ], "any"),
    "ClientMutationID20": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffyTrigger": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("Trigger")) },
    ], "any"),
    "UpdateUser": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateUserArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpdateUserPayload")) },
    ], "any"),
    "UpdateUserArguments": o([
        { json: "input", js: "input", typ: r("UpdateUserInput") },
    ], "any"),
    "UpdateUserInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "userGroupIds", js: "userGroupIds", typ: u(undefined, a("")) },
    ], "any"),
    "UpdateUserPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID21")) },
        { json: "user", js: "user", typ: u(undefined, r("FluffyUser")) },
    ], "any"),
    "ClientMutationID21": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffyUser": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("User")) },
    ], "any"),
    "UpdateUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateUserGroupArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpdateUserGroupPayload")) },
    ], "any"),
    "UpdateUserGroupArguments": o([
        { json: "input", js: "input", typ: r("UpdateUserGroupInput") },
    ], "any"),
    "UpdateUserGroupInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "notificationSettings", js: "notificationSettings", typ: u(undefined, r("NotificationSettingsInput")) },
        { json: "permissions", js: "permissions", typ: u(undefined, r("Permissions")) },
        { json: "ssoSetting", js: "ssoSetting", typ: u(undefined, r("SSOSettingInput")) },
        { json: "userGroupId", js: "userGroupId", typ: "" },
        { json: "userIds", js: "userIds", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "UpdateUserGroupPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID22")) },
        { json: "userGroup", js: "userGroup", typ: u(undefined, r("IndecentUserGroup")) },
    ], "any"),
    "ClientMutationID22": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "IndecentUserGroup": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("UserGroup")) },
    ], "any"),
    "UpdateUserGroupPermissions": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UpdateUserGroupPermissionsArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("UpdateUserGroupPermissionsPayload")) },
    ], "any"),
    "UpdateUserGroupPermissionsArguments": o([
        { json: "input", js: "input", typ: u(undefined, r("UpdateUserGroupPermissionsInput")) },
    ], "any"),
    "UpdateUserGroupPermissionsInput": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, "") },
        { json: "permissions", js: "permissions", typ: r("Permissions") },
        { json: "userGroupId", js: "userGroupId", typ: "" },
    ], "any"),
    "UpdateUserGroupPermissionsPayload": o([
        { json: "clientMutationId", js: "clientMutationId", typ: u(undefined, r("ClientMutationID23")) },
        { json: "permissions", js: "permissions", typ: u(undefined, r("ReturnPermissions")) },
    ], "any"),
    "ClientMutationID23": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ReturnPermissions": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PermissionsReturn")) },
    ], "any"),
    "Query": o([
        { json: "application", js: "application", typ: u(undefined, r("QueryApplication")) },
        { json: "applicationByName", js: "applicationByName", typ: u(undefined, r("ApplicationByName")) },
        { json: "applications", js: "applications", typ: u(undefined, r("QueryApplications")) },
        { json: "artifact", js: "artifact", typ: u(undefined, r("ArtifactObject")) },
        { json: "artifacts", js: "artifacts", typ: u(undefined, r("Artifacts")) },
        { json: "auditChangeContent", js: "auditChangeContent", typ: u(undefined, r("AuditChangeContent")) },
        { json: "audits", js: "audits", typ: u(undefined, r("Audits")) },
        { json: "ceClusterBillingData", js: "ceClusterBillingData", typ: u(undefined, r("CeClusterBillingDataObject")) },
        { json: "cloudProvider", js: "cloudProvider", typ: u(undefined, r("QueryCloudProvider")) },
        { json: "cloudProviderByName", js: "cloudProviderByName", typ: u(undefined, r("CloudProviderByName")) },
        { json: "cloudProviders", js: "cloudProviders", typ: u(undefined, r("CloudProviders")) },
        { json: "connector", js: "connector", typ: u(undefined, r("QueryConnector")) },
        { json: "connectors", js: "connectors", typ: u(undefined, r("Connectors")) },
        { json: "deploymentStats", js: "deploymentStats", typ: u(undefined, r("DeploymentStats")) },
        { json: "environment", js: "environment", typ: u(undefined, r("QueryEnvironment")) },
        { json: "environments", js: "environments", typ: u(undefined, r("QueryEnvironments")) },
        { json: "execution", js: "execution", typ: u(undefined, r("QueryExecution")) },
        { json: "executionInputs", js: "executionInputs", typ: u(undefined, r("ExecutionInputs")) },
        { json: "executions", js: "executions", typ: u(undefined, r("Executions")) },
        { json: "infrastructureDefinition", js: "infrastructureDefinition", typ: u(undefined, r("InfrastructureDefinitionObject")) },
        { json: "infrastructureDefinitionByName", js: "infrastructureDefinitionByName", typ: u(undefined, r("InfrastructureDefinitionByName")) },
        { json: "infrastructureDefinitions", js: "infrastructureDefinitions", typ: u(undefined, r("QueryInfrastructureDefinitions")) },
        { json: "instances", js: "instances", typ: u(undefined, r("Instances")) },
        { json: "k8sLabels", js: "k8sLabels", typ: u(undefined, r("K8SLabels")) },
        { json: "k8sWorkloadRecommendations", js: "k8sWorkloadRecommendations", typ: u(undefined, r("K8SWorkloadRecommendations")) },
        { json: "pipeline", js: "pipeline", typ: u(undefined, r("PipelineObject")) },
        { json: "pipelineByName", js: "pipelineByName", typ: u(undefined, r("PipelineByName")) },
        { json: "pipelines", js: "pipelines", typ: u(undefined, r("QueryPipelines")) },
        { json: "secret", js: "secret", typ: u(undefined, r("QuerySecret")) },
        { json: "secretByName", js: "secretByName", typ: u(undefined, r("SecretByName")) },
        { json: "secretManager", js: "secretManager", typ: u(undefined, r("QuerySecretManager")) },
        { json: "secretManagerByName", js: "secretManagerByName", typ: u(undefined, r("SecretManagerByName")) },
        { json: "secretManagers", js: "secretManagers", typ: u(undefined, r("SecretManagers")) },
        { json: "service", js: "service", typ: u(undefined, r("QueryService")) },
        { json: "services", js: "services", typ: u(undefined, r("QueryServices")) },
        { json: "ssoProvider", js: "ssoProvider", typ: u(undefined, r("SsoProvider")) },
        { json: "ssoProviders", js: "ssoProviders", typ: u(undefined, r("SsoProviders")) },
        { json: "tag", js: "tag", typ: u(undefined, r("TagObject")) },
        { json: "tagByName", js: "tagByName", typ: u(undefined, r("TagByName")) },
        { json: "tags", js: "tags", typ: u(undefined, r("QueryTags")) },
        { json: "trigger", js: "trigger", typ: u(undefined, r("QueryTrigger")) },
        { json: "triggerByName", js: "triggerByName", typ: u(undefined, r("TriggerByName")) },
        { json: "triggers", js: "triggers", typ: u(undefined, r("Triggers")) },
        { json: "user", js: "user", typ: u(undefined, r("QueryUser")) },
        { json: "userByEmail", js: "userByEmail", typ: u(undefined, r("UserByEmail")) },
        { json: "userByName", js: "userByName", typ: u(undefined, r("UserByName")) },
        { json: "userGroup", js: "userGroup", typ: u(undefined, r("QueryUserGroup")) },
        { json: "userGroupByName", js: "userGroupByName", typ: u(undefined, r("UserGroupByName")) },
        { json: "userGroups", js: "userGroups", typ: u(undefined, r("QueryUserGroups")) },
        { json: "users", js: "users", typ: u(undefined, r("QueryUsers")) },
        { json: "workflow", js: "workflow", typ: u(undefined, r("WorkflowObject")) },
        { json: "workflowByName", js: "workflowByName", typ: u(undefined, r("WorkflowByName")) },
        { json: "workflows", js: "workflows", typ: u(undefined, r("QueryWorkflows")) },
    ], "any"),
    "QueryApplication": o([
        { json: "input", js: "input", typ: u(undefined, r("ApplicationInput")) },
        { json: "output", js: "output", typ: u(undefined, r("Application")) },
    ], "any"),
    "ApplicationInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
    ], "any"),
    "ApplicationByName": o([
        { json: "input", js: "input", typ: u(undefined, r("ApplicationByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, r("Application")) },
    ], "any"),
    "ApplicationByNameInput": o([
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "QueryApplications": o([
        { json: "input", js: "input", typ: u(undefined, r("ApplicationsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("ApplicationConnection")) },
    ], "any"),
    "ApplicationsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("ApplicationFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "ApplicationFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("ApplicationTagFilter")) },
    ], "any"),
    "ApplicationTagFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("TagType")) },
        { json: "tags", js: "tags", typ: u(undefined, a(u(null, r("TagInput")))) },
    ], "any"),
    "ApplicationConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("AmbitiousNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("AmbitiousPageInfo")) },
    ], "any"),
    "AmbitiousNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Application")))) },
    ], "any"),
    "AmbitiousPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "ArtifactObject": o([
        { json: "input", js: "input", typ: u(undefined, r("ArtifactInput")) },
        { json: "output", js: "output", typ: u(undefined, r("Artifact")) },
    ], "any"),
    "ArtifactInput": o([
        { json: "artifactId", js: "artifactId", typ: "" },
    ], "any"),
    "Artifact": o([
        { json: "artifactSource", js: "artifactSource", typ: u(undefined, r("ArtifactSource")) },
        { json: "buildNo", js: "buildNo", typ: u(undefined, r("BuildNo")) },
        { json: "collectedAt", js: "collectedAt", typ: u(undefined, r("CollectedAt")) },
        { json: "id", js: "id", typ: u(undefined, r("ArtifactID")) },
    ], "any"),
    "ArtifactSource": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "any") },
    ], "any"),
    "BuildNo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "CollectedAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "ArtifactID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Artifacts": o([
        { json: "input", js: "input", typ: u(undefined, r("ArtifactsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("ArtifactConnection")) },
    ], "any"),
    "ArtifactsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("ArtifactFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "ArtifactFilter": o([
        { json: "artifact", js: "artifact", typ: u(undefined, r("IDFilter")) },
        { json: "artifactSource", js: "artifactSource", typ: u(undefined, r("IDFilter")) },
        { json: "artifactStreamType", js: "artifactStreamType", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "ArtifactConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("CunningNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("CunningPageInfo")) },
    ], "any"),
    "CunningNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Artifact")))) },
    ], "any"),
    "CunningPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "AuditChangeContent": o([
        { json: "input", js: "input", typ: u(undefined, r("AuditChangeContentInput")) },
        { json: "output", js: "output", typ: u(undefined, r("ChangeContentConnection")) },
    ], "any"),
    "AuditChangeContentInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("ChangeContentFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "ChangeContentFilter": o([
        { json: "changeSetId", js: "changeSetId", typ: "" },
        { json: "resourceId", js: "resourceId", typ: u(undefined, "") },
    ], "any"),
    "ChangeContentConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("MagentaNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("MagentaPageInfo")) },
    ], "any"),
    "MagentaNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("ChangeContent")))) },
    ], "any"),
    "ChangeContent": o([
        { json: "changeSetId", js: "changeSetId", typ: u(undefined, r("ChangeSetID")) },
        { json: "newYaml", js: "newYaml", typ: u(undefined, r("NewYAML")) },
        { json: "newYamlPath", js: "newYamlPath", typ: u(undefined, r("NewYAMLPath")) },
        { json: "oldYaml", js: "oldYaml", typ: u(undefined, r("OldYAML")) },
        { json: "oldYamlPath", js: "oldYamlPath", typ: u(undefined, r("OldYAMLPath")) },
        { json: "resourceId", js: "resourceId", typ: u(undefined, r("ResourceID")) },
    ], "any"),
    "ChangeSetID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "NewYAML": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "NewYAMLPath": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "OldYAML": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "OldYAMLPath": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ResourceID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "MagentaPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "Audits": o([
        { json: "input", js: "input", typ: u(undefined, r("AuditsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("ChangeSetConnection")) },
    ], "any"),
    "AuditsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("ChangeSetFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "ChangeSetFilter": o([
        { json: "time", js: "time", typ: u(undefined, r("TimeRangeFilter")) },
    ], "any"),
    "TimeRangeFilter": o([
        { json: "relative", js: "relative", typ: u(undefined, r("RelativeTimeRange")) },
        { json: "specific", js: "specific", typ: u(undefined, r("TimeRange")) },
    ], "any"),
    "RelativeTimeRange": o([
        { json: "noOfUnits", js: "noOfUnits", typ: m("any") },
        { json: "timeUnit", js: "timeUnit", typ: r("TimeUnit") },
    ], "any"),
    "TimeRange": o([
        { json: "from", js: "from", typ: m("any") },
        { json: "to", js: "to", typ: u(undefined, m("any")) },
    ], "any"),
    "ChangeSetConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("FriskyNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("FriskyPageInfo")) },
    ], "any"),
    "FriskyNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a("any")) },
    ], "any"),
    "FriskyPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "CeClusterBillingDataObject": o([
        { json: "input", js: "input", typ: u(undefined, r("CeClusterBillingDataInput")) },
        { json: "output", js: "output", typ: u(undefined, r("OutputObject")) },
    ], "any"),
    "CeClusterBillingDataInput": o([
        { json: "aggregateFunction", js: "aggregateFunction", typ: u(undefined, a(u(null, r("CeAggregation")))) },
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("CeFilter")))) },
        { json: "groupBy", js: "groupBy", typ: u(undefined, a(u(null, r("CeGroupBy")))) },
        { json: "limit", js: "limit", typ: u(undefined, 3.14) },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
        { json: "select", js: "select", typ: u(undefined, a(u(null, r("CeSelect")))) },
        { json: "sortCriteria", js: "sortCriteria", typ: u(undefined, a(u(null, r("CeSort")))) },
    ], "any"),
    "CeAggregation": o([
        { json: "cost", js: "cost", typ: u(undefined, r("CeCost")) },
        { json: "function", js: "function", typ: u(undefined, r("CeAggregationFunction")) },
        { json: "utilization", js: "utilization", typ: u(undefined, r("CeUtilization")) },
    ], "any"),
    "CeFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "cluster", js: "cluster", typ: u(undefined, r("IDFilter")) },
        { json: "ecsService", js: "ecsService", typ: u(undefined, r("IDFilter")) },
        { json: "endTime", js: "endTime", typ: u(undefined, r("TimeFilter")) },
        { json: "environment", js: "environment", typ: u(undefined, r("IDFilter")) },
        { json: "instanceType", js: "instanceType", typ: u(undefined, r("IDFilter")) },
        { json: "label", js: "label", typ: u(undefined, r("CeLabelFilter")) },
        { json: "launchType", js: "launchType", typ: u(undefined, r("IDFilter")) },
        { json: "namespace", js: "namespace", typ: u(undefined, r("IDFilter")) },
        { json: "node", js: "node", typ: u(undefined, r("IDFilter")) },
        { json: "pod", js: "pod", typ: u(undefined, r("IDFilter")) },
        { json: "service", js: "service", typ: u(undefined, r("IDFilter")) },
        { json: "startTime", js: "startTime", typ: u(undefined, r("TimeFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("CeTagFilter")) },
        { json: "task", js: "task", typ: u(undefined, r("IDFilter")) },
        { json: "workload", js: "workload", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "CeLabelFilter": o([
        { json: "labels", js: "labels", typ: u(undefined, a(u(null, r("K8SLabelInput")))) },
    ], "any"),
    "K8SLabelInput": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "values", js: "values", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "CeTagFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("CeTagType")) },
        { json: "tags", js: "tags", typ: u(undefined, a(u(null, r("TagInput")))) },
    ], "any"),
    "CeGroupBy": o([
        { json: "entity", js: "entity", typ: u(undefined, r("CeEntityGroupBy")) },
        { json: "labelAggregation", js: "labelAggregation", typ: u(undefined, r("CeLabelAggregation")) },
        { json: "tagAggregation", js: "tagAggregation", typ: u(undefined, r("CeTagAggregation")) },
        { json: "time", js: "time", typ: u(undefined, r("CeTimeAggregation")) },
    ], "any"),
    "CeLabelAggregation": o([
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "CeTagAggregation": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("CeTagType")) },
        { json: "tagName", js: "tagName", typ: u(undefined, "") },
    ], "any"),
    "CeTimeAggregation": o([
        { json: "timePeriod", js: "timePeriod", typ: u(undefined, r("TimeType")) },
    ], "any"),
    "CeSelect": o([
        { json: "labels", js: "labels", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "CeSort": o([
        { json: "order", js: "order", typ: u(undefined, r("SortOrder")) },
        { json: "sortType", js: "sortType", typ: u(undefined, r("CeSortType")) },
    ], "any"),
    "OutputObject": o([
        { json: "data", js: "data", typ: u(undefined, r("Data")) },
    ], "any"),
    "Data": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("BillingDataEntry")))) },
    ], "any"),
    "BillingDataEntry": o([
        { json: "avgCpuUtilization", js: "avgCpuUtilization", typ: u(undefined, r("AvgCPUUtilization")) },
        { json: "avgMemoryUtilization", js: "avgMemoryUtilization", typ: u(undefined, r("AvgMemoryUtilization")) },
        { json: "cluster", js: "cluster", typ: u(undefined, r("Cluster")) },
        { json: "clusterId", js: "clusterId", typ: u(undefined, r("BillingDataEntryClusterID")) },
        { json: "clusterType", js: "clusterType", typ: u(undefined, r("ClusterType")) },
        { json: "cpuLimit", js: "cpuLimit", typ: u(undefined, r("BillingDataEntryCPULimit")) },
        { json: "cpuRequest", js: "cpuRequest", typ: u(undefined, r("BillingDataEntryCPURequest")) },
        { json: "ecs", js: "ecs", typ: u(undefined, r("Ecs")) },
        { json: "harness", js: "harness", typ: u(undefined, r("BillingDataEntryHarness")) },
        { json: "idleCost", js: "idleCost", typ: u(undefined, r("IdleCost")) },
        { json: "instanceType", js: "instanceType", typ: u(undefined, r("InstanceType")) },
        { json: "k8s", js: "k8s", typ: u(undefined, r("K8S")) },
        { json: "labelName", js: "labelName", typ: u(undefined, r("LabelName")) },
        { json: "labelValue", js: "labelValue", typ: u(undefined, r("LabelValue")) },
        { json: "memoryLimit", js: "memoryLimit", typ: u(undefined, r("BillingDataEntryMemoryLimit")) },
        { json: "memoryRequest", js: "memoryRequest", typ: u(undefined, r("BillingDataEntryMemoryRequest")) },
        { json: "region", js: "region", typ: u(undefined, r("Region")) },
        { json: "startTime", js: "startTime", typ: u(undefined, r("StartTime")) },
        { json: "systemCost", js: "systemCost", typ: u(undefined, r("SystemCost")) },
        { json: "tagName", js: "tagName", typ: u(undefined, r("TagNameObject")) },
        { json: "tagValue", js: "tagValue", typ: u(undefined, r("TagValueObject")) },
        { json: "totalCost", js: "totalCost", typ: u(undefined, r("TotalCost")) },
        { json: "unallocatedCost", js: "unallocatedCost", typ: u(undefined, r("UnallocatedCost")) },
    ], "any"),
    "AvgCPUUtilization": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "AvgMemoryUtilization": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "Cluster": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "BillingDataEntryClusterID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ClusterType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "BillingDataEntryCPULimit": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "BillingDataEntryCPURequest": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "Ecs": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("CeEcsEntity")) },
    ], "any"),
    "CeEcsEntity": o([
        { json: "launchType", js: "launchType", typ: u(undefined, r("LaunchType")) },
        { json: "service", js: "service", typ: u(undefined, r("PurpleService")) },
        { json: "taskId", js: "taskId", typ: u(undefined, r("TaskID")) },
    ], "any"),
    "LaunchType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PurpleService": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TaskID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "BillingDataEntryHarness": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("CeHarnessEntity")) },
    ], "any"),
    "CeHarnessEntity": o([
        { json: "application", js: "application", typ: u(undefined, r("StickyApplication")) },
        { json: "environment", js: "environment", typ: u(undefined, r("ReturnEnvironment")) },
        { json: "service", js: "service", typ: u(undefined, r("FluffyService")) },
    ], "any"),
    "StickyApplication": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ReturnEnvironment": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "FluffyService": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "IdleCost": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "InstanceType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "K8S": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("CeK8SEntity")) },
    ], "any"),
    "CeK8SEntity": o([
        { json: "namespace", js: "namespace", typ: u(undefined, r("ReturnNamespace")) },
        { json: "node", js: "node", typ: u(undefined, r("Node")) },
        { json: "pod", js: "pod", typ: u(undefined, r("Pod")) },
        { json: "selectedLabels", js: "selectedLabels", typ: u(undefined, r("SelectedLabels")) },
        { json: "workload", js: "workload", typ: u(undefined, r("Workload")) },
        { json: "workloadType", js: "workloadType", typ: u(undefined, r("ReturnWorkloadType")) },
    ], "any"),
    "ReturnNamespace": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Node": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Pod": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "SelectedLabels": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("CeK8SLabels")))) },
    ], "any"),
    "CeK8SLabels": o([
        { json: "name", js: "name", typ: u(undefined, r("CeK8SLabelsName")) },
        { json: "value", js: "value", typ: u(undefined, r("CeK8SLabelsValue")) },
    ], "any"),
    "CeK8SLabelsName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "CeK8SLabelsValue": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Workload": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ReturnWorkloadType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "LabelName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "LabelValue": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "BillingDataEntryMemoryLimit": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "BillingDataEntryMemoryRequest": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "Region": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "StartTime": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "SystemCost": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "TagNameObject": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TagValueObject": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TotalCost": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "UnallocatedCost": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "QueryCloudProvider": o([
        { json: "input", js: "input", typ: u(undefined, r("CloudProviderInput")) },
        { json: "output", js: "output", typ: u(undefined, "any") },
    ], "any"),
    "CloudProviderInput": o([
        { json: "cloudProviderId", js: "cloudProviderId", typ: "" },
    ], "any"),
    "CloudProviderByName": o([
        { json: "input", js: "input", typ: u(undefined, r("CloudProviderByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, "any") },
    ], "any"),
    "CloudProviderByNameInput": o([
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "CloudProviders": o([
        { json: "input", js: "input", typ: u(undefined, r("CloudProvidersInput")) },
        { json: "output", js: "output", typ: u(undefined, r("CloudProviderConnection")) },
    ], "any"),
    "CloudProvidersInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("CloudProviderFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "CloudProviderFilter": o([
        { json: "cloudProvider", js: "cloudProvider", typ: u(undefined, r("IDFilter")) },
        { json: "cloudProviderType", js: "cloudProviderType", typ: u(undefined, r("CloudProviderTypeFilter")) },
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("TimeFilter")) },
        { json: "isCEEnabled", js: "isCEEnabled", typ: u(undefined, r("CEEnabledFilter")) },
    ], "any"),
    "CloudProviderTypeFilter": o([
        { json: "operator", js: "operator", typ: u(undefined, r("Operator")) },
        { json: "values", js: "values", typ: u(undefined, a(u(r("CloudProviderType"), null))) },
    ], "any"),
    "CEEnabledFilter": o([
        { json: "operator", js: "operator", typ: u(undefined, r("Operator")) },
        { json: "values", js: "values", typ: u(undefined, a(u(true, null))) },
    ], "any"),
    "CloudProviderConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("MischievousNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("MischievousPageInfo")) },
    ], "any"),
    "MischievousNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a("any")) },
    ], "any"),
    "MischievousPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "QueryConnector": o([
        { json: "input", js: "input", typ: u(undefined, r("ConnectorInput")) },
        { json: "output", js: "output", typ: u(undefined, "any") },
    ], "any"),
    "ConnectorInput": o([
        { json: "connectorId", js: "connectorId", typ: "" },
    ], "any"),
    "Connectors": o([
        { json: "input", js: "input", typ: u(undefined, r("ConnectorsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("ConnectorConnection")) },
    ], "any"),
    "ConnectorsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("ConnectorFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "ConnectorFilter": o([
        { json: "connector", js: "connector", typ: u(undefined, r("IDFilter")) },
        { json: "connectorType", js: "connectorType", typ: u(undefined, r("ConnectorTypeFilter")) },
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("TimeFilter")) },
    ], "any"),
    "ConnectorTypeFilter": o([
        { json: "operator", js: "operator", typ: u(undefined, r("Operator")) },
        { json: "values", js: "values", typ: u(undefined, a(u(r("ConnectorType"), null))) },
    ], "any"),
    "ConnectorConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("BraggadociousNodes")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("BraggadociousPageInfo")) },
    ], "any"),
    "BraggadociousNodes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a("any")) },
    ], "any"),
    "BraggadociousPageInfo": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "DeploymentStats": o([
        { json: "input", js: "input", typ: u(undefined, r("DeploymentStatsInput")) },
        { json: "output", js: "output", typ: u(undefined, "any") },
    ], "any"),
    "DeploymentStatsInput": o([
        { json: "aggregateFunction", js: "aggregateFunction", typ: u(undefined, r("DeploymentAggregationFunction")) },
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("DeploymentFilter")))) },
        { json: "groupBy", js: "groupBy", typ: u(undefined, a(u(null, r("DeploymentAggregation")))) },
        { json: "includeIndirectExecutions", js: "includeIndirectExecutions", typ: u(undefined, true) },
        { json: "sortCriteria", js: "sortCriteria", typ: u(undefined, a(u(null, r("DeploymentSortCriteria")))) },
    ], "any"),
    "DeploymentAggregationFunction": o([
        { json: "count", js: "count", typ: u(undefined, r("CountAggregateOperation")) },
        { json: "duration", js: "duration", typ: u(undefined, r("DurationAggregateOperation")) },
        { json: "instancesDeployed", js: "instancesDeployed", typ: u(undefined, r("CountAggregateOperation")) },
        { json: "rollbackDuration", js: "rollbackDuration", typ: u(undefined, r("DurationAggregateOperation")) },
    ], "any"),
    "DeploymentFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "cloudProvider", js: "cloudProvider", typ: u(undefined, r("IDFilter")) },
        { json: "duration", js: "duration", typ: u(undefined, r("NumberFilter")) },
        { json: "endTime", js: "endTime", typ: u(undefined, r("TimeFilter")) },
        { json: "environment", js: "environment", typ: u(undefined, r("IDFilter")) },
        { json: "environmentType", js: "environmentType", typ: u(undefined, r("EnvironmentTypeFilter")) },
        { json: "pipeline", js: "pipeline", typ: u(undefined, r("IDFilter")) },
        { json: "rollbackDuration", js: "rollbackDuration", typ: u(undefined, r("NumberFilter")) },
        { json: "service", js: "service", typ: u(undefined, r("IDFilter")) },
        { json: "startTime", js: "startTime", typ: u(undefined, r("TimeFilter")) },
        { json: "status", js: "status", typ: u(undefined, r("IDFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("DeploymentTagFilter")) },
        { json: "trigger", js: "trigger", typ: u(undefined, r("IDFilter")) },
        { json: "triggeredBy", js: "triggeredBy", typ: u(undefined, r("IDFilter")) },
        { json: "workflow", js: "workflow", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "EnvironmentTypeFilter": o([
        { json: "operator", js: "operator", typ: u(undefined, r("Operator")) },
        { json: "values", js: "values", typ: u(undefined, a(u(r("EnvironmentType"), null))) },
    ], "any"),
    "DeploymentAggregation": o([
        { json: "entityAggregation", js: "entityAggregation", typ: u(undefined, r("DeploymentEntityAggregation")) },
        { json: "tagAggregation", js: "tagAggregation", typ: u(undefined, r("DeploymentTagAggregation")) },
        { json: "timeAggregation", js: "timeAggregation", typ: u(undefined, r("TimeSeriesAggregation")) },
    ], "any"),
    "DeploymentTagAggregation": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("DeploymentTagType")) },
        { json: "tagName", js: "tagName", typ: u(undefined, "") },
    ], "any"),
    "TimeSeriesAggregation": o([
        { json: "timeAggregationType", js: "timeAggregationType", typ: u(undefined, r("TimeType")) },
        { json: "timeAggregationValue", js: "timeAggregationValue", typ: u(undefined, 3.14) },
    ], "any"),
    "DeploymentSortCriteria": o([
        { json: "sortOrder", js: "sortOrder", typ: u(undefined, r("SortOrder")) },
        { json: "sortType", js: "sortType", typ: u(undefined, r("DeploymentSortType")) },
    ], "any"),
    "QueryEnvironment": o([
        { json: "input", js: "input", typ: u(undefined, r("EnvironmentInput")) },
        { json: "output", js: "output", typ: u(undefined, r("Environment")) },
    ], "any"),
    "EnvironmentInput": o([
        { json: "environmentId", js: "environmentId", typ: "" },
    ], "any"),
    "QueryEnvironments": o([
        { json: "input", js: "input", typ: u(undefined, r("EnvironmentsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("EnvironmentConnection")) },
    ], "any"),
    "EnvironmentsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("EnvironmentFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "EnvironmentFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "environment", js: "environment", typ: u(undefined, r("IDFilter")) },
        { json: "environmentType", js: "environmentType", typ: u(undefined, r("EnvironmentTypeFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("EnvironmentTagFilter")) },
    ], "any"),
    "EnvironmentTagFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("TagType")) },
        { json: "tags", js: "tags", typ: u(undefined, a(u(null, r("TagInput")))) },
    ], "any"),
    "QueryExecution": o([
        { json: "input", js: "input", typ: u(undefined, r("ExecutionInput")) },
        { json: "output", js: "output", typ: u(undefined, "any") },
    ], "any"),
    "ExecutionInput": o([
        { json: "executionId", js: "executionId", typ: "" },
    ], "any"),
    "ExecutionInputs": o([
        { json: "input", js: "input", typ: u(undefined, r("ExecutionInputsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("ExecutionInputsOutput")) },
    ], "any"),
    "ExecutionInputsInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "entityId", js: "entityId", typ: "" },
        { json: "executionType", js: "executionType", typ: r("ExecutionType") },
        { json: "variableInputs", js: "variableInputs", typ: u(undefined, a(u(null, r("VariableInput")))) },
    ], "any"),
    "ExecutionInputsOutput": o([
        { json: "serviceInputs", js: "serviceInputs", typ: u(undefined, r("ServiceInputs")) },
    ], "any"),
    "ServiceInputs": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Service")))) },
    ], "any"),
    "Executions": o([
        { json: "input", js: "input", typ: u(undefined, r("ExecutionsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("ExecutionConnection")) },
    ], "any"),
    "ExecutionsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("ExecutionFilter")))) },
        { json: "includeIndirectExecutions", js: "includeIndirectExecutions", typ: u(undefined, true) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "ExecutionFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "cloudProvider", js: "cloudProvider", typ: u(undefined, r("IDFilter")) },
        { json: "creationTime", js: "creationTime", typ: u(undefined, r("TimeFilter")) },
        { json: "duration", js: "duration", typ: u(undefined, r("NumberFilter")) },
        { json: "endTime", js: "endTime", typ: u(undefined, r("TimeFilter")) },
        { json: "environment", js: "environment", typ: u(undefined, r("IDFilter")) },
        { json: "environmentType", js: "environmentType", typ: u(undefined, r("EnvironmentTypeFilter")) },
        { json: "execution", js: "execution", typ: u(undefined, r("IDFilter")) },
        { json: "pipeline", js: "pipeline", typ: u(undefined, r("IDFilter")) },
        { json: "pipelineExecutionId", js: "pipelineExecutionId", typ: u(undefined, r("IDFilter")) },
        { json: "service", js: "service", typ: u(undefined, r("IDFilter")) },
        { json: "startTime", js: "startTime", typ: u(undefined, r("TimeFilter")) },
        { json: "status", js: "status", typ: u(undefined, r("IDFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("DeploymentTagFilter")) },
        { json: "trigger", js: "trigger", typ: u(undefined, r("IDFilter")) },
        { json: "triggeredBy", js: "triggeredBy", typ: u(undefined, r("IDFilter")) },
        { json: "workflow", js: "workflow", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "ExecutionConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("Nodes1")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("PageInfo1")) },
    ], "any"),
    "Nodes1": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a("any")) },
    ], "any"),
    "PageInfo1": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "InfrastructureDefinitionObject": o([
        { json: "input", js: "input", typ: u(undefined, r("InfrastructureDefinitionInput")) },
        { json: "output", js: "output", typ: u(undefined, r("InfrastructureDefinition")) },
    ], "any"),
    "InfrastructureDefinitionInput": o([
        { json: "infrastructureId", js: "infrastructureId", typ: "" },
    ], "any"),
    "InfrastructureDefinitionByName": o([
        { json: "input", js: "input", typ: u(undefined, r("InfrastructureDefinitionByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, r("InfrastructureDefinition")) },
    ], "any"),
    "InfrastructureDefinitionByNameInput": o([
        { json: "environmentId", js: "environmentId", typ: "" },
        { json: "infrastructureName", js: "infrastructureName", typ: "" },
    ], "any"),
    "QueryInfrastructureDefinitions": o([
        { json: "input", js: "input", typ: u(undefined, r("InfrastructureDefinitionsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("InfrastructureDefinitionConnection")) },
    ], "any"),
    "InfrastructureDefinitionsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("InfrastructureDefinitionFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "Instances": o([
        { json: "input", js: "input", typ: u(undefined, r("InstancesInput")) },
        { json: "output", js: "output", typ: u(undefined, r("InstanceConnection")) },
    ], "any"),
    "InstancesInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("InstanceFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "InstanceFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "cloudProvider", js: "cloudProvider", typ: u(undefined, r("IDFilter")) },
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("TimeFilter")) },
        { json: "environment", js: "environment", typ: u(undefined, r("IDFilter")) },
        { json: "instanceType", js: "instanceType", typ: u(undefined, r("InstanceTypeEnum")) },
        { json: "service", js: "service", typ: u(undefined, r("IDFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("InstanceTagFilter")) },
    ], "any"),
    "InstanceTagFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("CeTagType")) },
        { json: "tags", js: "tags", typ: u(undefined, a(u(null, r("TagInput")))) },
    ], "any"),
    "InstanceConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("Nodes2")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("PageInfo2")) },
    ], "any"),
    "Nodes2": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a("any")) },
    ], "any"),
    "PageInfo2": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "K8SLabels": o([
        { json: "input", js: "input", typ: u(undefined, r("K8SLabelsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("K8SLabelConnection")) },
    ], "any"),
    "K8SLabelsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("K8SLabelFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "K8SLabelFilter": o([
        { json: "cluster", js: "cluster", typ: u(undefined, r("IDFilter")) },
        { json: "endTime", js: "endTime", typ: u(undefined, r("TimeFilter")) },
        { json: "namespace", js: "namespace", typ: u(undefined, r("IDFilter")) },
        { json: "startTime", js: "startTime", typ: u(undefined, r("TimeFilter")) },
        { json: "workloadName", js: "workloadName", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "K8SLabelConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("Nodes3")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("PageInfo3")) },
    ], "any"),
    "Nodes3": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("K8SLabel")))) },
    ], "any"),
    "K8SLabel": o([
        { json: "name", js: "name", typ: u(undefined, r("K8SLabelName")) },
        { json: "values", js: "values", typ: u(undefined, r("Values")) },
    ], "any"),
    "K8SLabelName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Values": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, ""))) },
    ], "any"),
    "PageInfo3": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "K8SWorkloadRecommendations": o([
        { json: "input", js: "input", typ: u(undefined, r("K8SWorkloadRecommendationsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("WorkloadRecommendationConnection")) },
    ], "any"),
    "K8SWorkloadRecommendationsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("WorkloadFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "WorkloadFilter": o([
        { json: "cluster", js: "cluster", typ: u(undefined, r("IDFilter")) },
        { json: "namespace", js: "namespace", typ: u(undefined, r("IDFilter")) },
        { json: "workloadName", js: "workloadName", typ: u(undefined, r("IDFilter")) },
        { json: "workloadType", js: "workloadType", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "WorkloadRecommendationConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("Nodes4")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("PageInfo4")) },
    ], "any"),
    "Nodes4": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("WorkloadRecommendation")))) },
    ], "any"),
    "WorkloadRecommendation": o([
        { json: "clusterId", js: "clusterId", typ: u(undefined, r("WorkloadRecommendationClusterID")) },
        { json: "clusterName", js: "clusterName", typ: u(undefined, r("ClusterName")) },
        { json: "containerRecommendations", js: "containerRecommendations", typ: u(undefined, r("ContainerRecommendations")) },
        { json: "estimatedSavings", js: "estimatedSavings", typ: u(undefined, r("EstimatedSavings")) },
        { json: "lastDayCost", js: "lastDayCost", typ: u(undefined, r("LastDayCost")) },
        { json: "namespace", js: "namespace", typ: u(undefined, r("WorkloadRecommendationNamespace")) },
        { json: "numDays", js: "numDays", typ: u(undefined, r("WorkloadRecommendationNumDays")) },
        { json: "preset", js: "preset", typ: u(undefined, r("Preset")) },
        { json: "workloadName", js: "workloadName", typ: u(undefined, r("WorkloadName")) },
        { json: "workloadType", js: "workloadType", typ: u(undefined, r("WorkloadRecommendationWorkloadType")) },
    ], "any"),
    "WorkloadRecommendationClusterID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ClusterName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ContainerRecommendations": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("ContainerRecommendation")))) },
    ], "any"),
    "ContainerRecommendation": o([
        { json: "burstable", js: "burstable", typ: u(undefined, r("Burstable")) },
        { json: "containerName", js: "containerName", typ: u(undefined, r("ContainerName")) },
        { json: "current", js: "current", typ: u(undefined, r("Current")) },
        { json: "guaranteed", js: "guaranteed", typ: u(undefined, r("Guaranteed")) },
        { json: "numDays", js: "numDays", typ: u(undefined, r("ContainerRecommendationNumDays")) },
        { json: "p50", js: "p50", typ: u(undefined, r("P50")) },
        { json: "p80", js: "p80", typ: u(undefined, r("P80")) },
        { json: "p90", js: "p90", typ: u(undefined, r("P90")) },
        { json: "p95", js: "p95", typ: u(undefined, r("P95")) },
        { json: "p99", js: "p99", typ: u(undefined, r("P99")) },
        { json: "recommended", js: "recommended", typ: u(undefined, r("Recommended")) },
        { json: "totalSamplesCount", js: "totalSamplesCount", typ: u(undefined, r("TotalSamplesCount")) },
    ], "any"),
    "Burstable": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ResourceRequirements")) },
    ], "any"),
    "ResourceRequirements": o([
        { json: "limits", js: "limits", typ: u(undefined, r("Limits")) },
        { json: "requests", js: "requests", typ: u(undefined, r("Requests")) },
        { json: "yaml", js: "yaml", typ: u(undefined, r("YAML")) },
    ], "any"),
    "Limits": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("ResourceEntry")))) },
    ], "any"),
    "ResourceEntry": o([
        { json: "name", js: "name", typ: u(undefined, r("ResourceEntryName")) },
        { json: "quantity", js: "quantity", typ: u(undefined, r("Quantity")) },
    ], "any"),
    "ResourceEntryName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Quantity": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Requests": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("ResourceEntry")))) },
    ], "any"),
    "YAML": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "ContainerName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Current": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ResourceRequirements")) },
    ], "any"),
    "Guaranteed": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ResourceRequirements")) },
    ], "any"),
    "ContainerRecommendationNumDays": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, 3.14) },
    ], "any"),
    "P50": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ResourceRequirements")) },
    ], "any"),
    "P80": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ResourceRequirements")) },
    ], "any"),
    "P90": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ResourceRequirements")) },
    ], "any"),
    "P95": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ResourceRequirements")) },
    ], "any"),
    "P99": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ResourceRequirements")) },
    ], "any"),
    "Recommended": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("ResourceRequirements")) },
    ], "any"),
    "TotalSamplesCount": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, 3.14) },
    ], "any"),
    "EstimatedSavings": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "LastDayCost": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("LastDayCostReturn")) },
    ], "any"),
    "LastDayCostReturn": o([
        { json: "cpu", js: "cpu", typ: u(undefined, r("CPU")) },
        { json: "info", js: "info", typ: u(undefined, r("Info")) },
        { json: "memory", js: "memory", typ: u(undefined, r("Memory")) },
    ], "any"),
    "CPU": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "Info": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Memory": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "WorkloadRecommendationNamespace": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "WorkloadRecommendationNumDays": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, 3.14) },
    ], "any"),
    "Preset": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("K8SWorkloadRecommendationPreset")) },
    ], "any"),
    "K8SWorkloadRecommendationPreset": o([
        { json: "cpuLimit", js: "cpuLimit", typ: u(undefined, r("ReturnCPULimit")) },
        { json: "cpuRequest", js: "cpuRequest", typ: u(undefined, r("ReturnCPURequest")) },
        { json: "memoryLimit", js: "memoryLimit", typ: u(undefined, r("ReturnMemoryLimit")) },
        { json: "memoryRequest", js: "memoryRequest", typ: u(undefined, r("ReturnMemoryRequest")) },
        { json: "minCpuMilliCores", js: "minCpuMilliCores", typ: u(undefined, r("MinCPUMilliCores")) },
        { json: "minMemoryBytes", js: "minMemoryBytes", typ: u(undefined, r("MinMemoryBytes")) },
        { json: "safetyMargin", js: "safetyMargin", typ: u(undefined, r("SafetyMargin")) },
    ], "any"),
    "ReturnCPULimit": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "ReturnCPURequest": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "ReturnMemoryLimit": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "ReturnMemoryRequest": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "MinCPUMilliCores": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "MinMemoryBytes": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "SafetyMargin": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "WorkloadName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "WorkloadRecommendationWorkloadType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "PageInfo4": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "PipelineObject": o([
        { json: "input", js: "input", typ: u(undefined, r("PipelineInput")) },
        { json: "output", js: "output", typ: u(undefined, r("Pipeline")) },
    ], "any"),
    "PipelineInput": o([
        { json: "pipelineId", js: "pipelineId", typ: "" },
    ], "any"),
    "PipelineByName": o([
        { json: "input", js: "input", typ: u(undefined, r("PipelineByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, r("Pipeline")) },
    ], "any"),
    "PipelineByNameInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "pipelineName", js: "pipelineName", typ: "" },
    ], "any"),
    "QueryPipelines": o([
        { json: "input", js: "input", typ: u(undefined, r("PipelinesInput")) },
        { json: "output", js: "output", typ: u(undefined, r("PipelineConnection")) },
    ], "any"),
    "PipelinesInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("PipelineFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "PipelineFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "pipeline", js: "pipeline", typ: u(undefined, r("IDFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("PipelineTagFilter")) },
    ], "any"),
    "PipelineTagFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("PipelineTagType")) },
        { json: "tags", js: "tags", typ: u(undefined, a(u(null, r("TagInput")))) },
    ], "any"),
    "QuerySecret": o([
        { json: "input", js: "input", typ: u(undefined, r("SecretInput")) },
        { json: "output", js: "output", typ: u(undefined, "any") },
    ], "any"),
    "SecretInput": o([
        { json: "secretId", js: "secretId", typ: "" },
        { json: "secretType", js: "secretType", typ: r("SecretType") },
    ], "any"),
    "SecretByName": o([
        { json: "input", js: "input", typ: u(undefined, r("SecretByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, "any") },
    ], "any"),
    "SecretByNameInput": o([
        { json: "name", js: "name", typ: "" },
        { json: "secretType", js: "secretType", typ: r("SecretType") },
    ], "any"),
    "QuerySecretManager": o([
        { json: "input", js: "input", typ: u(undefined, r("SecretManagerInput")) },
        { json: "output", js: "output", typ: u(undefined, r("SecretManager")) },
    ], "any"),
    "SecretManagerInput": o([
        { json: "secretManagerId", js: "secretManagerId", typ: "" },
    ], "any"),
    "SecretManagerByName": o([
        { json: "input", js: "input", typ: u(undefined, r("SecretManagerByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, r("SecretManager")) },
    ], "any"),
    "SecretManagerByNameInput": o([
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "SecretManagers": o([
        { json: "input", js: "input", typ: u(undefined, r("SecretManagersInput")) },
        { json: "output", js: "output", typ: u(undefined, r("SecretManagerConnection")) },
    ], "any"),
    "SecretManagersInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("SecretManagerFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "SecretManagerFilter": o([
        { json: "secretManager", js: "secretManager", typ: u(undefined, r("IDFilter")) },
        { json: "type", js: "type", typ: u(undefined, r("SecretManagerTypeFilter")) },
    ], "any"),
    "SecretManagerTypeFilter": o([
        { json: "operator", js: "operator", typ: u(undefined, r("Operator")) },
        { json: "values", js: "values", typ: u(undefined, a(u(r("SecretManagerType"), null))) },
    ], "any"),
    "SecretManagerConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("Nodes5")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("PageInfo5")) },
    ], "any"),
    "Nodes5": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("SecretManager")))) },
    ], "any"),
    "PageInfo5": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "QueryService": o([
        { json: "input", js: "input", typ: u(undefined, r("ServiceInputObject")) },
        { json: "output", js: "output", typ: u(undefined, r("Service")) },
    ], "any"),
    "ServiceInputObject": o([
        { json: "serviceId", js: "serviceId", typ: "" },
    ], "any"),
    "QueryServices": o([
        { json: "input", js: "input", typ: u(undefined, r("ServicesInput")) },
        { json: "output", js: "output", typ: u(undefined, r("ServiceConnection")) },
    ], "any"),
    "ServicesInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("ServiceFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "ServiceFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "deploymentType", js: "deploymentType", typ: u(undefined, r("DeploymentTypeFilter")) },
        { json: "service", js: "service", typ: u(undefined, r("IDFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("ServiceTagFilter")) },
    ], "any"),
    "DeploymentTypeFilter": o([
        { json: "operator", js: "operator", typ: u(undefined, r("Operator")) },
        { json: "values", js: "values", typ: u(undefined, a(u(r("DeploymentType"), null))) },
    ], "any"),
    "ServiceTagFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("ServiceTagType")) },
        { json: "tags", js: "tags", typ: u(undefined, a(u(null, r("TagInput")))) },
    ], "any"),
    "SsoProvider": o([
        { json: "input", js: "input", typ: u(undefined, r("SsoProviderInput")) },
        { json: "output", js: "output", typ: u(undefined, r("SSOProvider")) },
    ], "any"),
    "SsoProviderInput": o([
        { json: "ssoProviderId", js: "ssoProviderId", typ: "" },
    ], "any"),
    "SSOProvider": o([
        { json: "id", js: "id", typ: u(undefined, r("SSOProviderID")) },
        { json: "name", js: "name", typ: u(undefined, r("SSOProviderName")) },
        { json: "ssoType", js: "ssoType", typ: u(undefined, r("SsoType")) },
    ], "any"),
    "SSOProviderID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "SSOProviderName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "SsoType": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("SSOType")) },
    ], "any"),
    "SsoProviders": o([
        { json: "input", js: "input", typ: u(undefined, r("SsoProvidersInput")) },
        { json: "output", js: "output", typ: u(undefined, r("SSOProviderConnection")) },
    ], "any"),
    "SsoProvidersInput": o([
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "SSOProviderConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("Nodes6")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("PageInfo6")) },
    ], "any"),
    "Nodes6": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("SSOProvider")))) },
    ], "any"),
    "PageInfo6": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "TagObject": o([
        { json: "input", js: "input", typ: u(undefined, r("TagInputObject")) },
        { json: "output", js: "output", typ: u(undefined, r("TagEntity")) },
    ], "any"),
    "TagInputObject": o([
        { json: "tagId", js: "tagId", typ: "" },
    ], "any"),
    "TagEntity": o([
        { json: "createdAt", js: "createdAt", typ: u(undefined, r("TagEntityCreatedAt")) },
        { json: "createdBy", js: "createdBy", typ: u(undefined, r("TagEntityCreatedBy")) },
        { json: "id", js: "id", typ: u(undefined, r("TagEntityID")) },
        { json: "name", js: "name", typ: u(undefined, r("TagEntityName")) },
        { json: "usages", js: "usages", typ: u(undefined, r("Usages")) },
    ], "any"),
    "TagEntityCreatedAt": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, m("any")) },
    ], "any"),
    "TagEntityCreatedBy": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("User")) },
    ], "any"),
    "TagEntityID": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "TagEntityName": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, "") },
    ], "any"),
    "Usages": o([
        { json: "arguments", js: "arguments", typ: u(undefined, r("UsagesArguments")) },
        { json: "return", js: "return", typ: u(undefined, r("TagUsageConnection")) },
    ], "any"),
    "UsagesArguments": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("TagUsageFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "TagUsageFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("EntityTypeFilter")) },
        { json: "tagName", js: "tagName", typ: u(undefined, r("IDFilter")) },
        { json: "tagValue", js: "tagValue", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "EntityTypeFilter": o([
        { json: "operator", js: "operator", typ: u(undefined, r("Operator")) },
        { json: "values", js: "values", typ: u(undefined, a(u(r("EntityType"), null))) },
    ], "any"),
    "TagUsageConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("Nodes7")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("PageInfo7")) },
    ], "any"),
    "Nodes7": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("TagLink")))) },
    ], "any"),
    "PageInfo7": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "TagByName": o([
        { json: "input", js: "input", typ: u(undefined, r("TagByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, r("TagEntity")) },
    ], "any"),
    "TagByNameInput": o([
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "QueryTags": o([
        { json: "input", js: "input", typ: u(undefined, r("TagsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("TagConnection")) },
    ], "any"),
    "TagsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("TagEntityFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "TagEntityFilter": o([
        { json: "tagId", js: "tagId", typ: u(undefined, r("IDFilter")) },
        { json: "tagName", js: "tagName", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "TagConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("Nodes8")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("PageInfo8")) },
    ], "any"),
    "Nodes8": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("TagEntity")))) },
    ], "any"),
    "PageInfo8": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "QueryTrigger": o([
        { json: "input", js: "input", typ: u(undefined, r("TriggerInput")) },
        { json: "output", js: "output", typ: u(undefined, r("Trigger")) },
    ], "any"),
    "TriggerInput": o([
        { json: "triggerId", js: "triggerId", typ: "" },
    ], "any"),
    "TriggerByName": o([
        { json: "input", js: "input", typ: u(undefined, r("TriggerByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, r("Trigger")) },
    ], "any"),
    "TriggerByNameInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "triggerName", js: "triggerName", typ: "" },
    ], "any"),
    "Triggers": o([
        { json: "input", js: "input", typ: u(undefined, r("TriggersInput")) },
        { json: "output", js: "output", typ: u(undefined, r("TriggerConnection")) },
    ], "any"),
    "TriggersInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("TriggerFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "TriggerFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("TriggerTagFilter")) },
        { json: "trigger", js: "trigger", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "TriggerTagFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("TagType")) },
        { json: "tags", js: "tags", typ: u(undefined, a(u(null, r("TagInput")))) },
    ], "any"),
    "TriggerConnection": o([
        { json: "nodes", js: "nodes", typ: u(undefined, r("Nodes9")) },
        { json: "pageInfo", js: "pageInfo", typ: u(undefined, r("PageInfo9")) },
    ], "any"),
    "Nodes9": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, a(u(null, r("Trigger")))) },
    ], "any"),
    "PageInfo9": o([
        { json: "arguments", js: "arguments", typ: u(undefined, m("any")) },
        { json: "return", js: "return", typ: u(undefined, r("PageInfo")) },
    ], "any"),
    "QueryUser": o([
        { json: "input", js: "input", typ: u(undefined, r("UserInput")) },
        { json: "output", js: "output", typ: u(undefined, r("User")) },
    ], "any"),
    "UserInput": o([
        { json: "id", js: "id", typ: "" },
    ], "any"),
    "UserByEmail": o([
        { json: "input", js: "input", typ: u(undefined, r("UserByEmailInput")) },
        { json: "output", js: "output", typ: u(undefined, r("User")) },
    ], "any"),
    "UserByEmailInput": o([
        { json: "email", js: "email", typ: "" },
    ], "any"),
    "UserByName": o([
        { json: "input", js: "input", typ: u(undefined, r("UserByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, r("User")) },
    ], "any"),
    "UserByNameInput": o([
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "QueryUserGroup": o([
        { json: "input", js: "input", typ: u(undefined, r("UserGroupInput")) },
        { json: "output", js: "output", typ: u(undefined, r("UserGroup")) },
    ], "any"),
    "UserGroupInput": o([
        { json: "userGroupId", js: "userGroupId", typ: "" },
    ], "any"),
    "UserGroupByName": o([
        { json: "input", js: "input", typ: u(undefined, r("UserGroupByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, r("UserGroup")) },
    ], "any"),
    "UserGroupByNameInput": o([
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "QueryUserGroups": o([
        { json: "input", js: "input", typ: u(undefined, r("UserGroupsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("UserGroupConnection")) },
    ], "any"),
    "UserGroupsInput": o([
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "QueryUsers": o([
        { json: "input", js: "input", typ: u(undefined, r("UsersInput")) },
        { json: "output", js: "output", typ: u(undefined, r("UserConnection")) },
    ], "any"),
    "UsersInput": o([
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "WorkflowObject": o([
        { json: "input", js: "input", typ: u(undefined, r("WorkflowInput")) },
        { json: "output", js: "output", typ: u(undefined, r("Workflow")) },
    ], "any"),
    "WorkflowInput": o([
        { json: "workflowId", js: "workflowId", typ: "" },
    ], "any"),
    "WorkflowByName": o([
        { json: "input", js: "input", typ: u(undefined, r("WorkflowByNameInput")) },
        { json: "output", js: "output", typ: u(undefined, r("Workflow")) },
    ], "any"),
    "WorkflowByNameInput": o([
        { json: "applicationId", js: "applicationId", typ: "" },
        { json: "workflowName", js: "workflowName", typ: "" },
    ], "any"),
    "QueryWorkflows": o([
        { json: "input", js: "input", typ: u(undefined, r("WorkflowsInput")) },
        { json: "output", js: "output", typ: u(undefined, r("WorkflowConnection")) },
    ], "any"),
    "WorkflowsInput": o([
        { json: "filters", js: "filters", typ: u(undefined, a(u(null, r("WorkflowFilter")))) },
        { json: "limit", js: "limit", typ: 3.14 },
        { json: "offset", js: "offset", typ: u(undefined, 3.14) },
    ], "any"),
    "WorkflowFilter": o([
        { json: "application", js: "application", typ: u(undefined, r("IDFilter")) },
        { json: "orchestrationWorkflowType", js: "orchestrationWorkflowType", typ: u(undefined, r("OrchestrationWorkflowTypeFilter")) },
        { json: "tag", js: "tag", typ: u(undefined, r("WorkflowTagFilter")) },
        { json: "workflow", js: "workflow", typ: u(undefined, r("IDFilter")) },
    ], "any"),
    "OrchestrationWorkflowTypeFilter": o([
        { json: "operator", js: "operator", typ: u(undefined, r("Operator")) },
        { json: "values", js: "values", typ: u(undefined, a(u(r("OrchestrationWorkflowType"), null))) },
    ], "any"),
    "WorkflowTagFilter": o([
        { json: "entityType", js: "entityType", typ: u(undefined, r("WorkflowTagType")) },
        { json: "tags", js: "tags", typ: u(undefined, a(u(null, r("TagInput")))) },
    ], "any"),
    "AccountPermissionType": [
        "ADMINISTER_CE",
        "ADMINISTER_OTHER_ACCOUNT_FUNCTIONS",
        "CREATE_AND_DELETE_APPLICATION",
        "CREATE_CUSTOM_DASHBOARDS",
        "MANAGE_API_KEYS",
        "MANAGE_ALERT_NOTIFICATION_RULES",
        "MANAGE_APPLICATION_STACKS",
        "MANAGE_AUTHENTICATION_SETTINGS",
        "MANAGE_CLOUD_PROVIDERS",
        "MANAGE_CONFIG_AS_CODE",
        "MANAGE_CONNECTORS",
        "MANAGE_CUSTOM_DASHBOARDS",
        "MANAGE_DELEGATE_PROFILES",
        "MANAGE_DELEGATES",
        "MANAGE_DEPLOYMENT_FREEZES",
        "MANAGE_IP_WHITELIST",
        "MANAGE_PIPELINE_GOVERNANCE_STANDARDS",
        "MANAGE_RESTRICTED_ACCESS",
        "MANAGE_SSH_AND_WINRM",
        "MANAGE_SECRET_MANAGERS",
        "MANAGE_SECRETS",
        "MANAGE_TAGS",
        "MANAGE_TEMPLATE_LIBRARY",
        "MANAGE_USER_AND_USER_GROUPS_AND_API_KEYS",
        "MANAGE_USERS_AND_GROUPS",
        "READ_USERS_AND_GROUPS",
        "VIEW_AUDITS",
        "VIEW_CE",
        "VIEW_USER_AND_USER_GROUPS_AND_API_KEYS",
    ],
    "Actions": [
        "CREATE",
        "DELETE",
        "EXECUTE",
        "EXECUTE_PIPELINE",
        "EXECUTE_WORKFLOW",
        "READ",
        "ROLLBACK_WORKFLOW",
        "UPDATE",
    ],
    "FilterTypeEnum": [
        "ALL",
    ],
    "FilterType": [
        "NON_PRODUCTION_ENVIRONMENTS",
        "PRODUCTION_ENVIRONMENTS",
    ],
    "AppPermissionType": [
        "ALL",
        "DEPLOYMENT",
        "ENV",
        "PIPELINE",
        "PROVISIONER",
        "SERVICE",
        "WORKFLOW",
    ],
    "PipelinePermissionFilterType": [
        "NON_PRODUCTION_PIPELINES",
        "PRODUCTION_PIPELINES",
    ],
    "WorkflowPermissionFilterType": [
        "NON_PRODUCTION_WORKFLOWS",
        "PRODUCTION_WORKFLOWS",
        "WORKFLOW_TEMPLATES",
    ],
    "TagEntityType": [
        "APPLICATION",
        "ENVIRONMENT",
        "PIPELINE",
        "PROVISIONER",
        "SERVICE",
        "WORKFLOW",
    ],
    "Operator": [
        "EQUALS",
        "IN",
    ],
    "IDOperator": [
        "EQUALS",
        "IN",
        "LIKE",
        "NOT_IN",
        "NOT_NULL",
    ],
    "InfrastructureDefinitionTagType": [
        "ENVIRONMENT",
    ],
    "EnvironmentType": [
        "NON_PROD",
        "PROD",
    ],
    "URLTypeEnum": [
        "ACCOUNT",
        "REPO",
    ],
    "AwsCredentialsType": [
        "EC2_IAM",
        "MANUAL",
    ],
    "CloudProviderType": [
        "AWS",
        "AZURE",
        "GCP",
        "KUBERNETES_CLUSTER",
        "PCF",
        "PHYSICAL_DATA_CENTER",
        "SPOT_INST",
    ],
    "ClusterDetailsType": [
        "INHERIT_CLUSTER_DETAILS",
        "MANUAL_CLUSTER_DETAILS",
    ],
    "ManualClusterDetailsAuthenticationType": [
        "CLIENT_KEY_AND_CERTIFICATE",
        "CUSTOM",
        "OIDC_TOKEN",
        "SERVICE_ACCOUNT_TOKEN",
        "USERNAME_AND_PASSWORD",
    ],
    "ConnectorType": [
        "AMAZON_S3",
        "AMAZON_S3_HELM_REPO",
        "APM_VERIFICATION",
        "APP_DYNAMICS",
        "ARTIFACTORY",
        "BAMBOO",
        "BUG_SNAG",
        "DATA_DOG",
        "DOCKER",
        "DYNA_TRACE",
        "ECR",
        "ELB",
        "ELK",
        "GCR",
        "GCS",
        "GCS_HELM_REPO",
        "GIT",
        "HTTP_HELM_REPO",
        "JENKINS",
        "JIRA",
        "LOGZ",
        "NEW_RELIC",
        "NEXUS",
        "PROMETHEUS",
        "SFTP",
        "SMB",
        "SMTP",
        "SERVICENOW",
        "SLACK",
        "SPLUNK",
        "SUMO",
    ],
    "NexusVersion": [
        "V2",
        "V3",
    ],
    "SecretType": [
        "ENCRYPTED_FILE",
        "ENCRYPTED_TEXT",
        "SSH_CREDENTIAL",
        "WINRM_CREDENTIAL",
    ],
    "SSHAuthenticationScheme": [
        "KERBEROS",
        "SSH",
    ],
    "TGTGenerationUsing": [
        "KEY_TAB_FILE",
        "PASSWORD",
    ],
    "SSHCredentialType": [
        "PASSWORD",
        "SSH_KEY",
        "SSH_KEY_FILE_PATH",
    ],
    "WinRMAuthenticationScheme": [
        "NTLM",
    ],
    "SecretManagerType": [
        "AWS_KMS",
        "AWS_SECRET_MANAGER",
        "AZURE_KEY_VAULT",
        "CYBERARK",
        "GOOGLE_KMS",
        "HASHICORP_VAULT",
    ],
    "ArtifactSelectionType": [
        "FROM_PAYLOAD_SOURCE",
        "FROM_TRIGGERING_ARTIFACT",
        "FROM_TRIGGERING_PIPELINE",
        "LAST_COLLECTED",
        "LAST_DEPLOYED_PIPELINE",
        "LAST_DEPLOYED_WORKFLOW",
    ],
    "ExecutionType": [
        "PIPELINE",
        "WORKFLOW",
    ],
    "VariableValueType": [
        "EXPRESSION",
        "ID",
        "NAME",
    ],
    "ConditionType": [
        "ON_NEW_ARTIFACT",
        "ON_PIPELINE_COMPLETION",
        "ON_SCHEDULE",
        "ON_WEBHOOK",
    ],
    "BitbucketEvent": [
        "ANY",
        "BUILD_STATUS_CREATED",
        "BUILD_STATUS_UPDATED",
        "COMMIT_COMMENT_CREATED",
        "DIAGNOSTICS_PING",
        "FORK",
        "ISSUE_ANY",
        "ISSUE_COMMENT_CREATED",
        "ISSUE_CREATED",
        "ISSUE_UPDATED",
        "PULL_REQUEST_ANY",
        "PULL_REQUEST_APPROVAL_REMOVED",
        "PULL_REQUEST_APPROVED",
        "PULL_REQUEST_COMMENT_CREATED",
        "PULL_REQUEST_COMMENT_DELETED",
        "PULL_REQUEST_COMMENT_UPDATED",
        "PULL_REQUEST_CREATED",
        "PULL_REQUEST_DECLINED",
        "PULL_REQUEST_MERGED",
        "PULL_REQUEST_UPDATED",
        "PUSH",
        "REFS_CHANGED",
        "UPDATED",
    ],
    "GitHubAction": [
        "ASSIGNED",
        "CLOSED",
        "CREATED",
        "DELETED",
        "EDITED",
        "LABELED",
        "OPENED",
        "PACKAGE_PUBLISHED",
        "PRE_RELEASED",
        "PUBLISHED",
        "RELEASED",
        "REOPENED",
        "REVIEW_REQUESTED",
        "REVIEW_REQUESTED_REMOVED",
        "SYNCHRONIZED",
        "UNASSIGNED",
        "UNLABELED",
        "UNPUBLISHED",
    ],
    "GitHubEventType": [
        "ANY",
        "DELETE",
        "PACKAGE",
        "PULL_REQUEST",
        "PUSH",
        "RELEASE",
    ],
    "GitlabEvent": [
        "ANY",
        "PULL_REQUEST",
        "PUSH",
    ],
    "WebhookSource": [
        "BITBUCKET",
        "CUSTOM",
        "GITHUB",
        "GITLAB",
    ],
    "TimeOperator": [
        "AFTER",
        "BEFORE",
        "EQUALS",
    ],
    "NumericOperator": [
        "EQUALS",
        "GREATER_THAN",
        "GREATER_THAN_OR_EQUALS",
        "IN",
        "LESS_THAN",
        "LESS_THAN_OR_EQUALS",
        "NOT_EQUALS",
    ],
    "DeploymentTagType": [
        "APPLICATION",
        "DEPLOYMENT",
        "ENVIRONMENT",
        "SERVICE",
    ],
    "ExportExecutionsStatus": [
        "EXPIRED",
        "FAILED",
        "QUEUED",
        "READY",
    ],
    "ArtifactInputType": [
        "ARTIFACT_ID",
        "BUILD_NUMBER",
        "PARAMETERIZED_ARTIFACT_SOURCE",
    ],
    "TagType": [
        "APPLICATION",
    ],
    "TimeUnit": [
        "DAYS",
        "HOURS",
        "MINUTES",
        "WEEKS",
    ],
    "CeCost": [
        "IDLECOST",
        "TOTALCOST",
        "UNALLOCATEDCOST",
    ],
    "CeAggregationFunction": [
        "AVG",
        "SUM",
    ],
    "CeUtilization": [
        "CPU_LIMIT",
        "CPU_REQUEST",
        "CPU_UTILIZATION_VALUE",
        "MEMORY_LIMIT",
        "MEMORY_REQUEST",
        "MEMORY_UTILIZATION_VALUE",
    ],
    "CeTagType": [
        "APPLICATION",
        "ENVIRONMENT",
        "SERVICE",
    ],
    "CeEntityGroupBy": [
        "Application",
        "Cluster",
        "EcsService",
        "Environment",
        "LaunchType",
        "Namespace",
        "Node",
        "Pod",
        "Region",
        "Service",
        "Task",
        "Workload",
        "WorkloadType",
    ],
    "TimeType": [
        "DAY",
        "HOUR",
        "MONTH",
        "WEEK",
    ],
    "SortOrder": [
        "ASCENDING",
        "DESCENDING",
    ],
    "CeSortType": [
        "IDLECOST",
        "TIME",
        "TOTALCOST",
        "UNALLOCATEDCOST",
    ],
    "CountAggregateOperation": [
        "SUM",
    ],
    "DurationAggregateOperation": [
        "AVERAGE",
        "MAX",
        "MIN",
    ],
    "DeploymentEntityAggregation": [
        "Application",
        "CloudProvider",
        "Environment",
        "EnvironmentType",
        "Pipeline",
        "Service",
        "Status",
        "Trigger",
        "TriggeredBy",
        "Workflow",
    ],
    "DeploymentSortType": [
        "Count",
        "Duration",
    ],
    "InstanceTypeEnum": [
        "AUTOSCALING_GROUP_INSTANCE",
        "CODE_DEPLOY_INSTANCE",
        "EC2_INSTANCE",
        "ECS_CONTAINER_INSTANCE",
        "KUBERNETES_CONTAINER_INSTANCE",
        "PCF_INSTANCE",
        "PHYSICAL_HOST_INSTANCE",
    ],
    "PipelineTagType": [
        "APPLICATION",
        "PIPELINE",
    ],
    "DeploymentType": [
        "AMI",
        "AWS_CODEDEPLOY",
        "AWS_LAMBDA",
        "AZURE_VMSS",
        "AZURE_WEBAPP",
        "CUSTOM",
        "ECS",
        "HELM",
        "KUBERNETES",
        "PCF",
        "SSH",
        "SPOTINST",
        "WINRM",
    ],
    "ServiceTagType": [
        "APPLICATION",
        "SERVICE",
    ],
    "SSOType": [
        "LDAP",
        "SAML",
    ],
    "EntityType": [
        "APPLICATION",
        "ARTIFACT",
        "CLOUD_PROVIDER",
        "COLLABORATION_PROVIDER",
        "CONNECTOR",
        "DEPLOYMENT",
        "ENVIRONMENT",
        "INSTANCE",
        "PIPELINE",
        "PROVISIONER",
        "SERVICE",
        "TRIGGER",
        "WORKFLOW",
    ],
    "OrchestrationWorkflowType": [
        "BASIC",
        "BLUE_GREEN",
        "BUILD",
        "CANARY",
        "CUSTOM",
        "MULTI_SERVICE",
        "ROLLING",
    ],
    "WorkflowTagType": [
        "APPLICATION",
        "WORKFLOW",
    ],
};
