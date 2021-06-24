// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    harness, err := UnmarshalHarness(bytes)
//    bytes, err = harness.Marshal()

package main

import "bytes"
import "errors"
import "encoding/json"

func UnmarshalHarness(data []byte) (Harness, error) {
	var r Harness
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Harness) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type HarnessClass struct {
	Mutation *Mutation `json:"Mutation,omitempty"`
	Query    *Query    `json:"Query,omitempty"`   
}

type Mutation struct {
	AddAccountPermission                 *AddAccountPermission                 `json:"addAccountPermission,omitempty"`                
	AddAppPermission                     *AddAppPermission                     `json:"addAppPermission,omitempty"`                    
	AddUserToUserGroup                   *AddUserToUserGroup                   `json:"addUserToUserGroup,omitempty"`                  
	AttachTag                            *AttachTag                            `json:"attachTag,omitempty"`                           // Attach a tag to an entity
	CreateApplication                    *CreateApplication                    `json:"createApplication,omitempty"`                   // Creates a new Application and returns it
	CreateCloudProvider                  *CreateCloudProvider                  `json:"createCloudProvider,omitempty"`                 // Beta
	CreateConnector                      *CreateConnector                      `json:"createConnector,omitempty"`                     // Creates a new Connector and returns it
	CreateSecret                         *CreateSecret                         `json:"createSecret,omitempty"`                        // Beta: Create a secret.
	CreateSecretManager                  *CreateSecretManager                  `json:"createSecretManager,omitempty"`                 // Create secret manager
	CreateTrigger                        *CreateTrigger                        `json:"createTrigger,omitempty"`                       // Creates a new Trigger and returns it
	CreateUser                           *CreateUser                           `json:"createUser,omitempty"`                          
	CreateUserGroup                      *CreateUserGroup                      `json:"createUserGroup,omitempty"`                     
	DeleteApplication                    *DeleteApplication                    `json:"deleteApplication,omitempty"`                   // Deletes an application.
	DeleteCloudProvider                  *DeleteCloudProvider                  `json:"deleteCloudProvider,omitempty"`                 // Beta
	DeleteConnector                      *DeleteConnector                      `json:"deleteConnector,omitempty"`                     // Deletes a Connector.
	DeleteSecret                         *DeleteSecret                         `json:"deleteSecret,omitempty"`                        // Beta: Delete a secret.
	DeleteSecretManager                  *DeleteSecretManager                  `json:"deleteSecretManager,omitempty"`                 // Delete secret manager
	DeleteTrigger                        *DeleteTrigger                        `json:"deleteTrigger,omitempty"`                       // Deletes a Trigger.
	DeleteUser                           *DeleteUser                           `json:"deleteUser,omitempty"`                          
	DeleteUserGroup                      *DeleteUserGroup                      `json:"deleteUserGroup,omitempty"`                     
	DetachTag                            *DetachTag                            `json:"detachTag,omitempty"`                           // Detach a tag from an entity
	ExportExecutions                     *ExportExecutions                     `json:"exportExecutions,omitempty"`                    // Beta: Start an export of executions/deployments.
	RemoveApplicationGitSyncConfig       *RemoveApplicationGitSyncConfig       `json:"removeApplicationGitSyncConfig,omitempty"`      // Removes Git Sync Configuration associated with an application. Returns updated; application.
	RemoveUserFromUserGroup              *RemoveUserFromUserGroup              `json:"removeUserFromUserGroup,omitempty"`             
	ResumeExecution                      *ResumeExecution                      `json:"resumeExecution,omitempty"`                     // Resume a unsuccessful pipeline. Any stage which was started (both; successful/unseccessful) can be given; to resume. Pipeline is resumed in block of parallel groups. i.e if given stage has; parallel stages all will be; restarted.
	StartExecution                       *StartExecution                       `json:"startExecution,omitempty"`                      // Beta: Trigger a Workflow/Pipeline Execution.
	UpdateApplication                    *UpdateApplication                    `json:"updateApplication,omitempty"`                   // Updates an application and returns it.
	UpdateApplicationGitSyncConfig       *UpdateApplicationGitSyncConfig       `json:"updateApplicationGitSyncConfig,omitempty"`      // Updates  Application Git Sync Configuration. Creates the configuration, in case it does; not exist. Returns updated git sync configuration.
	UpdateApplicationGitSyncConfigStatus *UpdateApplicationGitSyncConfigStatus `json:"updateApplicationGitSyncConfigStatus,omitempty"`// Enable/disable Git Sync for an application. Returns updated application.
	UpdateCloudProvider                  *UpdateCloudProvider                  `json:"updateCloudProvider,omitempty"`                 // Beta
	UpdateConnector                      *UpdateConnector                      `json:"updateConnector,omitempty"`                     // Updates a Connector and returns it.
	UpdateSecret                         *UpdateSecret                         `json:"updateSecret,omitempty"`                        // Beta: Update a secret.
	UpdateSecretManager                  *UpdateSecretManager                  `json:"updateSecretManager,omitempty"`                 // Update secret manager
	UpdateTrigger                        *UpdateTrigger                        `json:"updateTrigger,omitempty"`                       // Updates a Trigger and returns it.
	UpdateUser                           *UpdateUser                           `json:"updateUser,omitempty"`                          
	UpdateUserGroup                      *UpdateUserGroup                      `json:"updateUserGroup,omitempty"`                     
	UpdateUserGroupPermissions           *UpdateUserGroupPermissions           `json:"updateUserGroupPermissions,omitempty"`          
}

type AddAccountPermission struct {
	Arguments *AddAccountPermissionArguments `json:"arguments,omitempty"`
	Return    *AddAccountPermissionPayload   `json:"return,omitempty"`   
}

type AddAccountPermissionArguments struct {
	Input AddAccountPermissionInput `json:"input"`
}

type AddAccountPermissionInput struct {
	AccountPermission *AccountPermissionType `json:"accountPermission,omitempty"`
	ClientMutationID  *string                `json:"clientMutationId,omitempty"` 
	UserGroupID       string                 `json:"userGroupId"`                
}

type AddAccountPermissionPayload struct {
	ClientMutationID *PurpleClientMutationID `json:"clientMutationId,omitempty"`
	UserGroup        *PurpleUserGroup        `json:"userGroup,omitempty"`       
}

type PurpleClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PurpleUserGroup struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *UserGroup             `json:"return,omitempty"`   
}

type FluffyNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*UserGroup           `json:"return,omitempty"`   
}

type UserGroupConnection struct {
	Nodes    *FluffyNodes    `json:"nodes,omitempty"`   
	PageInfo *PurplePageInfo `json:"pageInfo,omitempty"`
}

type UserUserGroups struct {
	Arguments *UserGroupsArguments `json:"arguments,omitempty"`
	Return    *UserGroupConnection `json:"return,omitempty"`   
}

type User struct {
	Email                            *Email                            `json:"email,omitempty"`                           
	ID                               *UserID                           `json:"id,omitempty"`                              
	IsEmailVerified                  *IsEmailVerified                  `json:"isEmailVerified,omitempty"`                 
	IsImportedFromIdentityProvider   *IsImportedFromIdentityProvider   `json:"isImportedFromIdentityProvider,omitempty"`  
	IsPasswordExpired                *IsPasswordExpired                `json:"isPasswordExpired,omitempty"`               
	IsTwoFactorAuthenticationEnabled *IsTwoFactorAuthenticationEnabled `json:"isTwoFactorAuthenticationEnabled,omitempty"`
	IsUserLocked                     *IsUserLocked                     `json:"isUserLocked,omitempty"`                    
	Name                             *UserName                         `json:"name,omitempty"`                            
	UserGroups                       *UserUserGroups                   `json:"userGroups,omitempty"`                      
}

type PurpleNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*User                `json:"return,omitempty"`   
}

type UserConnection struct {
	Nodes    *PurpleNodes    `json:"nodes,omitempty"`   
	PageInfo *FluffyPageInfo `json:"pageInfo,omitempty"`
}

type UserGroupUsers struct {
	Arguments *UsersArguments `json:"arguments,omitempty"`
	Return    *UserConnection `json:"return,omitempty"`   
}

type UserGroup struct {
	Description          *UserGroupDescription `json:"description,omitempty"`         
	ID                   *UserGroupID          `json:"id,omitempty"`                  
	ImportedByScim       *ImportedByScim       `json:"importedByScim,omitempty"`      
	IsSSOLinked          *IsSSOLinked          `json:"isSSOLinked,omitempty"`         
	Name                 *UserGroupName        `json:"name,omitempty"`                
	NotificationSettings *NotificationSettings `json:"notificationSettings,omitempty"`
	Permissions          *UserGroupPermissions `json:"permissions,omitempty"`         
	SsoSetting           *SsoSetting           `json:"ssoSetting,omitempty"`          
	Users                *UserGroupUsers       `json:"users,omitempty"`               
}

type PurplePageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

type PageInfo struct {
	HasMore *HasMore `json:"hasMore,omitempty"`
	Limit   *Limit   `json:"limit,omitempty"`  
	Offset  *Offset  `json:"offset,omitempty"` 
	Total   *Total   `json:"total,omitempty"`  
}

type HasMore struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type Limit struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *float64               `json:"return,omitempty"`   
}

type Offset struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *float64               `json:"return,omitempty"`   
}

type Total struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *float64               `json:"return,omitempty"`   
}

type UserGroupsArguments struct {
	Limit  float64  `json:"limit"`           
	Offset *float64 `json:"offset,omitempty"`
}

type Email struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type UserID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type IsEmailVerified struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type IsImportedFromIdentityProvider struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type IsPasswordExpired struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type IsTwoFactorAuthenticationEnabled struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type IsUserLocked struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type UserName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type FluffyPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

type UsersArguments struct {
	Limit  float64  `json:"limit"`           
	Offset *float64 `json:"offset,omitempty"`
}

type UserGroupDescription struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type UserGroupID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ImportedByScim struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type IsSSOLinked struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type UserGroupName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type NotificationSettings struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *ReturnClass           `json:"return,omitempty"`   
}

type ReturnClass struct {
	GroupEmailAddresses       *GroupEmailAddresses       `json:"groupEmailAddresses,omitempty"`      
	MicrosoftTeamsWebhookURL  *MicrosoftTeamsWebhookURL  `json:"microsoftTeamsWebhookUrl,omitempty"` 
	SendMailToNewMembers      *SendMailToNewMembers      `json:"sendMailToNewMembers,omitempty"`     
	SendNotificationToMembers *SendNotificationToMembers `json:"sendNotificationToMembers,omitempty"`
	SlackNotificationSetting  *SlackNotificationSetting  `json:"slackNotificationSetting,omitempty"` 
}

type GroupEmailAddresses struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type MicrosoftTeamsWebhookURL struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type SendMailToNewMembers struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type SendNotificationToMembers struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type SlackNotificationSetting struct {
	Arguments map[string]interface{}          `json:"arguments,omitempty"`
	Return    *SlackNotificationSettingReturn `json:"return,omitempty"`   
}

type SlackNotificationSettingReturn struct {
	SlackChannelName *SlackChannelName `json:"slackChannelName,omitempty"`
	SlackWebhookURL  *SlackWebhookURL  `json:"slackWebhookURL,omitempty"` 
}

type SlackChannelName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type SlackWebhookURL struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type UserGroupPermissions struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PermissionsReturn     `json:"return,omitempty"`   
}

type PermissionsReturn struct {
	AccountPermissions *AccountPermissions `json:"accountPermissions,omitempty"`
	AppPermissions     *AppPermissions     `json:"appPermissions,omitempty"`    
}

type AccountPermissions struct {
	Arguments map[string]interface{}    `json:"arguments,omitempty"`
	Return    *AccountPermissionsReturn `json:"return,omitempty"`   
}

type AccountPermissionsReturn struct {
	AccountPermissionTypes *AccountPermissionTypes `json:"accountPermissionTypes,omitempty"`
}

type AccountPermissionTypes struct {
	Arguments map[string]interface{}   `json:"arguments,omitempty"`
	Return    []*AccountPermissionType `json:"return,omitempty"`   
}

type AppPermissions struct {
	Arguments map[string]interface{}   `json:"arguments,omitempty"`
	Return    []*ApplicationPermission `json:"return,omitempty"`   
}

type ApplicationPermission struct {
	Actions        *ActionsClass                      `json:"actions,omitempty"`       
	Applications   *ApplicationPermissionApplications `json:"applications,omitempty"`  
	Deployments    *Deployments                       `json:"deployments,omitempty"`   
	Environments   *ApplicationPermissionEnvironments `json:"environments,omitempty"`  
	PermissionType *PermissionType                    `json:"permissionType,omitempty"`
	Pipelines      *ApplicationPermissionPipelines    `json:"pipelines,omitempty"`     
	Provisioners   *Provisioners                      `json:"provisioners,omitempty"`  
	Services       *ApplicationPermissionServices     `json:"services,omitempty"`      
	Workflows      *ApplicationPermissionWorkflows    `json:"workflows,omitempty"`     
}

type ActionsClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Actions             `json:"return,omitempty"`   
}

type ApplicationPermissionApplications struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *AppFilter             `json:"return,omitempty"`   
}

type AppFilter struct {
	AppIDS     *AppIDS           `json:"appIds,omitempty"`    
	FilterType *PurpleFilterType `json:"filterType,omitempty"`
}

type AppIDS struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type PurpleFilterType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *FilterTypeEnum        `json:"return,omitempty"`   
}

type Deployments struct {
	Arguments map[string]interface{}      `json:"arguments,omitempty"`
	Return    *DeploymentPermissionFilter `json:"return,omitempty"`   
}

type DeploymentPermissionFilter struct {
	EnvIDS      *PurpleEnvIDS      `json:"envIds,omitempty"`     
	FilterTypes *PurpleFilterTypes `json:"filterTypes,omitempty"`
}

type PurpleEnvIDS struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type PurpleFilterTypes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*FilterType          `json:"return,omitempty"`   
}

type ApplicationPermissionEnvironments struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *EnvPermissionFilter   `json:"return,omitempty"`   
}

type EnvPermissionFilter struct {
	EnvIDS      *FluffyEnvIDS      `json:"envIds,omitempty"`     
	FilterTypes *FluffyFilterTypes `json:"filterTypes,omitempty"`
}

type FluffyEnvIDS struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type FluffyFilterTypes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*FilterType          `json:"return,omitempty"`   
}

type PermissionType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *AppPermissionType     `json:"return,omitempty"`   
}

type ApplicationPermissionPipelines struct {
	Arguments map[string]interface{}    `json:"arguments,omitempty"`
	Return    *PipelinePermissionFilter `json:"return,omitempty"`   
}

type PipelinePermissionFilter struct {
	EnvIDS      *TentacledEnvIDS      `json:"envIds,omitempty"`     
	FilterTypes *TentacledFilterTypes `json:"filterTypes,omitempty"`
}

type TentacledEnvIDS struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type TentacledFilterTypes struct {
	Arguments map[string]interface{}          `json:"arguments,omitempty"`
	Return    []*PipelinePermissionFilterType `json:"return,omitempty"`   
}

type Provisioners struct {
	Arguments map[string]interface{}       `json:"arguments,omitempty"`
	Return    *ProvisionerPermissionFilter `json:"return,omitempty"`   
}

type ProvisionerPermissionFilter struct {
	FilterType     *FluffyFilterType `json:"filterType,omitempty"`    
	ProvisionerIDS *ProvisionerIDS   `json:"provisionerIds,omitempty"`
}

type FluffyFilterType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *FilterTypeEnum        `json:"return,omitempty"`   
}

type ProvisionerIDS struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type ApplicationPermissionServices struct {
	Arguments map[string]interface{}   `json:"arguments,omitempty"`
	Return    *ServicePermissionFilter `json:"return,omitempty"`   
}

type ServicePermissionFilter struct {
	FilterType *TentacledFilterType `json:"filterType,omitempty"`
	ServiceIDS *ServiceIDS          `json:"serviceIds,omitempty"`
}

type TentacledFilterType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *FilterTypeEnum        `json:"return,omitempty"`   
}

type ServiceIDS struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type ApplicationPermissionWorkflows struct {
	Arguments map[string]interface{}    `json:"arguments,omitempty"`
	Return    *WorkflowPermissionFilter `json:"return,omitempty"`   
}

type WorkflowPermissionFilter struct {
	EnvIDS      *StickyEnvIDS      `json:"envIds,omitempty"`     
	FilterTypes *StickyFilterTypes `json:"filterTypes,omitempty"`
}

type StickyEnvIDS struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type StickyFilterTypes struct {
	Arguments map[string]interface{}          `json:"arguments,omitempty"`
	Return    []*WorkflowPermissionFilterType `json:"return,omitempty"`   
}

type SsoSetting struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

type AddAppPermission struct {
	Arguments *AddAppPermissionArguments `json:"arguments,omitempty"`
	Return    *AddAppPermissionPayload   `json:"return,omitempty"`   
}

type AddAppPermissionArguments struct {
	Input AddAppPermissionInput `json:"input"`
}

type AddAppPermissionInput struct {
	AppPermission    *ApplicationPermissionInput `json:"appPermission,omitempty"`   
	ClientMutationID *string                     `json:"clientMutationId,omitempty"`
	UserGroupID      string                      `json:"userGroupId"`               
}

type ApplicationPermissionInput struct {
	Actions        []*Actions                        `json:"actions"`               
	Applications   AppFilterInput                    `json:"applications"`          
	Deployments    *DeploymentPermissionFilterInput  `json:"deployments,omitempty"` 
	Environments   *EnvPermissionFilterInput         `json:"environments,omitempty"`
	PermissionType AppPermissionType                 `json:"permissionType"`        
	Pipelines      *PipelinePermissionFilterInput    `json:"pipelines,omitempty"`   
	Provisioners   *ProvisionerPermissionFilterInput `json:"provisioners,omitempty"`
	Services       *ServicePermissionFilterInput     `json:"services,omitempty"`    
	Workflows      *WorkflowPermissionFilterInput    `json:"workflows,omitempty"`   
}

type AppFilterInput struct {
	AppIDS     []string        `json:"appIds,omitempty"`    
	FilterType *FilterTypeEnum `json:"filterType,omitempty"`
}

type DeploymentPermissionFilterInput struct {
	EnvIDS      []string      `json:"envIds,omitempty"`     
	FilterTypes []*FilterType `json:"filterTypes,omitempty"`
}

type EnvPermissionFilterInput struct {
	EnvIDS      []string      `json:"envIds,omitempty"`     
	FilterTypes []*FilterType `json:"filterTypes,omitempty"`
}

type PipelinePermissionFilterInput struct {
	EnvIDS      []string                        `json:"envIds,omitempty"`     
	FilterTypes []*PipelinePermissionFilterType `json:"filterTypes,omitempty"`
}

type ProvisionerPermissionFilterInput struct {
	FilterType     *FilterTypeEnum `json:"filterType,omitempty"`    
	ProvisionerIDS []string        `json:"provisionerIds,omitempty"`
}

type ServicePermissionFilterInput struct {
	FilterType *FilterTypeEnum `json:"filterType,omitempty"`
	ServiceIDS []string        `json:"serviceIds,omitempty"`
}

type WorkflowPermissionFilterInput struct {
	EnvIDS      []string                        `json:"envIds,omitempty"`     
	FilterTypes []*WorkflowPermissionFilterType `json:"filterTypes,omitempty"`
}

type AddAppPermissionPayload struct {
	ClientMutationID *FluffyClientMutationID `json:"clientMutationId,omitempty"`
	UserGroup        *FluffyUserGroup        `json:"userGroup,omitempty"`       
}

type FluffyClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type FluffyUserGroup struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *UserGroup             `json:"return,omitempty"`   
}

type AddUserToUserGroup struct {
	Arguments *AddUserToUserGroupArguments `json:"arguments,omitempty"`
	Return    *AddUserToUserGroupPayload   `json:"return,omitempty"`   
}

type AddUserToUserGroupArguments struct {
	Input AddUserToUserGroupInput `json:"input"`
}

type AddUserToUserGroupInput struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	UserGroupID      string  `json:"userGroupId"`               
	UserID           string  `json:"userId"`                    
}

type AddUserToUserGroupPayload struct {
	ClientMutationID *TentacledClientMutationID `json:"clientMutationId,omitempty"`
	UserGroup        *TentacledUserGroup        `json:"userGroup,omitempty"`       
}

type TentacledClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type TentacledUserGroup struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *UserGroup             `json:"return,omitempty"`   
}

// Attach a tag to an entity
type AttachTag struct {
	Arguments *AttachTagArguments `json:"arguments,omitempty"`
	Return    *AttachTagPayload   `json:"return,omitempty"`   
}

type AttachTagArguments struct {
	Input AttachTagInput `json:"input"`
}

type AttachTagInput struct {
	ClientMutationID *string       `json:"clientMutationId,omitempty"`
	EntityID         string        `json:"entityId"`                  // Unique ID of the harness entity
	EntityType       TagEntityType `json:"entityType"`                // Type of entity the tag is to be attached to
	Name             string        `json:"name"`                      // Name of the tag
	Value            *string       `json:"value,omitempty"`           // Value of the tag
}

type AttachTagPayload struct {
	ClientMutationID *StickyClientMutationID `json:"clientMutationId,omitempty"`
	TagLink          *TagLinkClass           `json:"tagLink,omitempty"`         // Attached tag details
}

type StickyClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Attached tag details
type TagLinkClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *TagLink               `json:"return,omitempty"`   
}

type TagLink struct {
	AppID      *TagLinkAppID    `json:"appId,omitempty"`     
	EntityID   *EntityID        `json:"entityId,omitempty"`  
	EntityType *EntityTypeClass `json:"entityType,omitempty"`
	Name       *TagLinkName     `json:"name,omitempty"`      
	Value      *TagLinkValue    `json:"value,omitempty"`     
}

type TagLinkAppID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type EntityID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type EntityTypeClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *TagEntityType         `json:"return,omitempty"`   
}

type TagLinkName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type TagLinkValue struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Creates a new Application and returns it
type CreateApplication struct {
	Arguments *CreateApplicationArguments `json:"arguments,omitempty"`
	Return    *CreateApplicationPayload   `json:"return,omitempty"`   
}

type CreateApplicationArguments struct {
	Input CreateApplicationInput `json:"input"`
}

type CreateApplicationInput struct {
	ClientMutationID          *string `json:"clientMutationId,omitempty"`         
	Description               *string `json:"description,omitempty"`              
	IsManualTriggerAuthorized *bool   `json:"isManualTriggerAuthorized,omitempty"`// Beta: When this is set to true, all manual triggers will require API Key authorization.; Doc link:; https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
	Name                      string  `json:"name"`                               
}

type CreateApplicationPayload struct {
	Application      *PurpleApplication      `json:"application,omitempty"`     
	ClientMutationID *IndigoClientMutationID `json:"clientMutationId,omitempty"`
}

type PurpleApplication struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *Application           `json:"return,omitempty"`   
}

type InfrastructureDefinitionEnvironment struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *Environment           `json:"return,omitempty"`   
}

type InfrastructureDefinition struct {
	CreatedAt        *InfrastructureDefinitionCreatedAt      `json:"createdAt,omitempty"`       
	DeploymentType   *InfrastructureDefinitionDeploymentType `json:"deploymentType,omitempty"`  
	Environment      *InfrastructureDefinitionEnvironment    `json:"environment,omitempty"`     
	ID               *InfrastructureDefinitionID             `json:"id,omitempty"`              
	Name             *InfrastructureDefinitionName           `json:"name,omitempty"`            
	ScopedToServices *ScopedToServices                       `json:"scopedToServices,omitempty"`
}

type StickyNodes struct {
	Arguments map[string]interface{}      `json:"arguments,omitempty"`
	Return    []*InfrastructureDefinition `json:"return,omitempty"`   
}

type InfrastructureDefinitionConnection struct {
	Nodes    *StickyNodes       `json:"nodes,omitempty"`   
	PageInfo *TentacledPageInfo `json:"pageInfo,omitempty"`
}

type EnvironmentInfrastructureDefinitions struct {
	Arguments *InfrastructureDefinitionsArguments `json:"arguments,omitempty"`
	Return    *InfrastructureDefinitionConnection `json:"return,omitempty"`   
}

type EnvironmentApplication struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *Application           `json:"return,omitempty"`   
}

type Environment struct {
	Application               *EnvironmentApplication               `json:"application,omitempty"`              
	CreatedAt                 *EnvironmentCreatedAt                 `json:"createdAt,omitempty"`                
	CreatedBy                 *EnvironmentCreatedBy                 `json:"createdBy,omitempty"`                
	Description               *EnvironmentDescription               `json:"description,omitempty"`              
	ID                        *EnvironmentID                        `json:"id,omitempty"`                       
	InfrastructureDefinitions *EnvironmentInfrastructureDefinitions `json:"infrastructureDefinitions,omitempty"`
	Name                      *EnvironmentName                      `json:"name,omitempty"`                     
	Tags                      *EnvironmentTags                      `json:"tags,omitempty"`                     
	Type                      *EnvironmentTypeClass                 `json:"type,omitempty"`                     
}

type TentacledNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Environment         `json:"return,omitempty"`   
}

type EnvironmentConnection struct {
	Nodes    *TentacledNodes `json:"nodes,omitempty"`   
	PageInfo *StickyPageInfo `json:"pageInfo,omitempty"`
}

type ApplicationEnvironments struct {
	Arguments *EnvironmentsArguments `json:"arguments,omitempty"`
	Return    *EnvironmentConnection `json:"return,omitempty"`   
}

type Application struct {
	CreatedAt                 *ApplicationCreatedAt      `json:"createdAt,omitempty"`                
	CreatedBy                 *ApplicationCreatedBy      `json:"createdBy,omitempty"`                
	Description               *ApplicationDescription    `json:"description,omitempty"`              
	Environments              *ApplicationEnvironments   `json:"environments,omitempty"`             
	GitSyncConfig             *ApplicationGitSyncConfig  `json:"gitSyncConfig,omitempty"`            
	ID                        *ApplicationID             `json:"id,omitempty"`                       
	IsManualTriggerAuthorized *IsManualTriggerAuthorized `json:"isManualTriggerAuthorized,omitempty"`// Beta: When this is set to true, all manual triggers will require API Key authorization.; Doc link:; https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
	Name                      *ApplicationName           `json:"name,omitempty"`                     
	Pipelines                 *ApplicationPipelines      `json:"pipelines,omitempty"`                
	Services                  *ApplicationServices       `json:"services,omitempty"`                 
	Tags                      *ApplicationTags           `json:"tags,omitempty"`                     
	Workflows                 *ApplicationWorkflows      `json:"workflows,omitempty"`                
}

type InfrastructureDefinitionCreatedAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type InfrastructureDefinitionDeploymentType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type InfrastructureDefinitionID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type InfrastructureDefinitionName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ScopedToServices struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type TentacledPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

type InfrastructureDefinitionsArguments struct {
	Filters []*InfrastructureDefinitionFilter `json:"filters,omitempty"`
	Limit   float64                           `json:"limit"`            
	Offset  *float64                          `json:"offset,omitempty"` 
}

type InfrastructureDefinitionFilter struct {
	DeploymentType           *StringFilter                      `json:"deploymentType,omitempty"`          
	Environment              *IDFilter                          `json:"environment,omitempty"`             
	InfrastructureDefinition *IDFilter                          `json:"infrastructureDefinition,omitempty"`
	Tag                      *InfrastructureDefinitionTagFilter `json:"tag,omitempty"`                     
}

type StringFilter struct {
	Operator Operator  `json:"operator"`
	Values   []*string `json:"values"`  
}

type IDFilter struct {
	Operator IDOperator `json:"operator"`
	Values   []*string  `json:"values"`  
}

type InfrastructureDefinitionTagFilter struct {
	EntityType *InfrastructureDefinitionTagType `json:"entityType,omitempty"`
	Tags       []*TagInput                      `json:"tags,omitempty"`      
}

type TagInput struct {
	Name  *string `json:"name,omitempty"` 
	Value *string `json:"value,omitempty"`
}

type EnvironmentCreatedAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type EnvironmentCreatedBy struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *User                  `json:"return,omitempty"`   
}

type EnvironmentDescription struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type EnvironmentID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type EnvironmentName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type EnvironmentTags struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Tag                 `json:"return,omitempty"`   
}

type Tag struct {
	Name  *TagName  `json:"name,omitempty"` 
	Value *TagValue `json:"value,omitempty"`
}

type TagName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type TagValue struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type EnvironmentTypeClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *EnvironmentType       `json:"return,omitempty"`   
}

type StickyPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

type EnvironmentsArguments struct {
	Limit  float64  `json:"limit"`           
	Offset *float64 `json:"offset,omitempty"`
}

type ApplicationCreatedAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type ApplicationCreatedBy struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *User                  `json:"return,omitempty"`   
}

type ApplicationDescription struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ApplicationGitSyncConfig struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *GitSyncConfig         `json:"return,omitempty"`   
}

type GitSyncConfig struct {
	Branch         *PurpleBranch   `json:"branch,omitempty"`        
	GitConnector   *GitConnector   `json:"gitConnector,omitempty"`  
	RepositoryName *RepositoryName `json:"repositoryName,omitempty"`
	SyncEnabled    *SyncEnabled    `json:"syncEnabled,omitempty"`   
}

type PurpleBranch struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type GitConnector struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *GitConnectorReturn    `json:"return,omitempty"`   
}

type GitConnectorReturn struct {
	Branch              *FluffyBranch        `json:"branch,omitempty"`             
	CreatedAt           *ReturnCreatedAt     `json:"createdAt,omitempty"`          
	CreatedBy           *ReturnCreatedBy     `json:"createdBy,omitempty"`          
	CustomCommitDetails *CustomCommitDetails `json:"customCommitDetails,omitempty"`
	DelegateSelectors   *DelegateSelectors   `json:"delegateSelectors,omitempty"`  
	Description         *ReturnDescription   `json:"description,omitempty"`        
	GenerateWebhookURL  *GenerateWebhookURL  `json:"generateWebhookUrl,omitempty"` 
	ID                  *ReturnID            `json:"id,omitempty"`                 
	Name                *ReturnName          `json:"name,omitempty"`               
	PasswordSecretID    *PasswordSecretID    `json:"passwordSecretId,omitempty"`   
	SSHSettingID        *SSHSettingID        `json:"sshSettingId,omitempty"`       
	URL                 *URL                 `json:"URL,omitempty"`                
	URLType             *URLType             `json:"urlType,omitempty"`            
	UsageScope          *ReturnUsageScope    `json:"usageScope,omitempty"`         
	UserName            *UserNameClass       `json:"userName,omitempty"`           
	WebhookURL          *WebhookURL          `json:"webhookUrl,omitempty"`         
}

type FluffyBranch struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ReturnCreatedAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type ReturnCreatedBy struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *User                  `json:"return,omitempty"`   
}

type CustomCommitDetails struct {
	Arguments map[string]interface{}     `json:"arguments,omitempty"`
	Return    *CustomCommitDetailsReturn `json:"return,omitempty"`   
}

type CustomCommitDetailsReturn struct {
	AuthorEmailID *AuthorEmailID `json:"authorEmailId,omitempty"`
	AuthorName    *AuthorName    `json:"authorName,omitempty"`   
	CommitMessage *CommitMessage `json:"commitMessage,omitempty"`
}

type AuthorEmailID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type AuthorName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type CommitMessage struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type DelegateSelectors struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type ReturnDescription struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type GenerateWebhookURL struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type ReturnID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ReturnName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PasswordSecretID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type SSHSettingID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type URL struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type URLType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *URLTypeEnum           `json:"return,omitempty"`   
}

type ReturnUsageScope struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *UsageScope            `json:"return,omitempty"`   
}

type UsageScope struct {
	AppEnvScopes *AppEnvScopes `json:"appEnvScopes,omitempty"`
}

type AppEnvScopes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*AppEnvScope         `json:"return,omitempty"`   
}

type AppEnvScope struct {
	Application *AppEnvScopeApplication `json:"application,omitempty"`
	Environment *AppEnvScopeEnvironment `json:"environment,omitempty"`
}

type AppEnvScopeApplication struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *AppScopeFilter        `json:"return,omitempty"`   
}

type AppScopeFilter struct {
	AppID      *ReturnAppID      `json:"appId,omitempty"`     
	FilterType *StickyFilterType `json:"filterType,omitempty"`
}

type ReturnAppID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type StickyFilterType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *FilterTypeEnum        `json:"return,omitempty"`   
}

type AppEnvScopeEnvironment struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *EnvScopeFilter        `json:"return,omitempty"`   
}

type EnvScopeFilter struct {
	EnvID      *EnvID            `json:"envId,omitempty"`     
	FilterType *IndigoFilterType `json:"filterType,omitempty"`
}

type EnvID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type IndigoFilterType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *FilterType            `json:"return,omitempty"`   
}

type UserNameClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type WebhookURL struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type RepositoryName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type SyncEnabled struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type ApplicationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Beta: When this is set to true, all manual triggers will require API Key authorization.
// Doc link:
// https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
type IsManualTriggerAuthorized struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

type ApplicationName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ApplicationPipelines struct {
	Arguments *PipelinesArguments `json:"arguments,omitempty"`
	Return    *PipelineConnection `json:"return,omitempty"`   
}

type PipelinesArguments struct {
	Limit  float64  `json:"limit"`           
	Offset *float64 `json:"offset,omitempty"`
}

type PipelineConnection struct {
	Nodes    *IndigoNodes    `json:"nodes,omitempty"`   
	PageInfo *IndigoPageInfo `json:"pageInfo,omitempty"`
}

type IndigoNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Pipeline            `json:"return,omitempty"`   
}

// Type for pipeline
type Pipeline struct {
	CreatedAt         *PipelineCreatedAt   `json:"createdAt,omitempty"`        
	CreatedBy         *PipelineCreatedBy   `json:"createdBy,omitempty"`        
	Description       *PipelineDescription `json:"description,omitempty"`      // Description of the Pipeline
	ID                *PipelineID          `json:"id,omitempty"`               // Pipeline identifier
	Name              *PipelineName        `json:"name,omitempty"`             // Name of the Pipeline
	PipelineVariables *PipelineVariables   `json:"pipelineVariables,omitempty"`// Variables in the Pipeline
	Tags              *PipelineTags        `json:"tags,omitempty"`             
}

type PipelineCreatedAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type PipelineCreatedBy struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *User                  `json:"return,omitempty"`   
}

// Description of the Pipeline
type PipelineDescription struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Pipeline identifier
type PipelineID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Name of the Pipeline
type PipelineName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Variables in the Pipeline
type PipelineVariables struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Variable            `json:"return,omitempty"`   
}

type Variable struct {
	AllowedValues       *AllowedValues       `json:"allowedValues,omitempty"`      // allowed values. Only for text variables.
	AllowMultipleValues *AllowMultipleValues `json:"allowMultipleValues,omitempty"`// True if a variable allows multiple values. You need to provide , separated list of values.
	DefaultValue        *DefaultValue        `json:"defaultValue,omitempty"`       // Default value, Only for text variables
	Fixed               *Fixed               `json:"fixed,omitempty"`              // If a variable id fixed variable.
	Name                *VariableName        `json:"name,omitempty"`               // name of the variable
	Required            *Required            `json:"required,omitempty"`           // If the variable is a required variable
	Type                *VariableType        `json:"type,omitempty"`               // Type of the variable
}

// True if a variable allows multiple values. You need to provide , separated list of values.
type AllowMultipleValues struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

// allowed values. Only for text variables.
type AllowedValues struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

// Default value, Only for text variables
type DefaultValue struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// If a variable id fixed variable.
type Fixed struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

// name of the variable
type VariableName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// If the variable is a required variable
type Required struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

// Type of the variable
type VariableType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PipelineTags struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Tag                 `json:"return,omitempty"`   
}

type IndigoPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

type ApplicationServices struct {
	Arguments *ServicesArguments `json:"arguments,omitempty"`
	Return    *ServiceConnection `json:"return,omitempty"`   
}

type ServicesArguments struct {
	Limit  float64  `json:"limit"`           
	Offset *float64 `json:"offset,omitempty"`
}

type ServiceConnection struct {
	Nodes    *IndecentNodes    `json:"nodes,omitempty"`   
	PageInfo *IndecentPageInfo `json:"pageInfo,omitempty"`
}

type IndecentNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Service             `json:"return,omitempty"`   
}

// Service Type
type Service struct {
	ArtifactSources *ArtifactSources       `json:"artifactSources,omitempty"`
	ArtifactType    *ArtifactType          `json:"artifactType,omitempty"`   // Artifact type deployed by this Service
	CreatedAt       *ServiceCreatedAt      `json:"createdAt,omitempty"`      
	CreatedBy       *ServiceCreatedBy      `json:"createdBy,omitempty"`      
	DeploymentType  *ServiceDeploymentType `json:"deploymentType,omitempty"` // Deployment Type: SSH, Helm, or Kubernetes
	Description     *ServiceDescription    `json:"description,omitempty"`    // Description of the Service
	ID              *ServiceID             `json:"id,omitempty"`             // Service ID
	Name            *ServiceName           `json:"name,omitempty"`           // Name of the Service
	Tags            *ServiceTags           `json:"tags,omitempty"`           
}

type ArtifactSources struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []interface{}          `json:"return,omitempty"`   
}

// Artifact type deployed by this Service
type ArtifactType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ServiceCreatedAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type ServiceCreatedBy struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *User                  `json:"return,omitempty"`   
}

// Deployment Type: SSH, Helm, or Kubernetes
type ServiceDeploymentType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Description of the Service
type ServiceDescription struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Service ID
type ServiceID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Name of the Service
type ServiceName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ServiceTags struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Tag                 `json:"return,omitempty"`   
}

type IndecentPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

type ApplicationTags struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Tag                 `json:"return,omitempty"`   
}

type ApplicationWorkflows struct {
	Arguments *WorkflowsArguments `json:"arguments,omitempty"`
	Return    *WorkflowConnection `json:"return,omitempty"`   
}

type WorkflowsArguments struct {
	Limit  float64  `json:"limit"`           
	Offset *float64 `json:"offset,omitempty"`
}

type WorkflowConnection struct {
	Nodes    *HilariousNodes    `json:"nodes,omitempty"`   
	PageInfo *HilariousPageInfo `json:"pageInfo,omitempty"`
}

type HilariousNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Workflow            `json:"return,omitempty"`   
}

// Type Workflow
type Workflow struct {
	CreatedAt         *WorkflowCreatedAt   `json:"createdAt,omitempty"`        
	CreatedBy         *WorkflowCreatedBy   `json:"createdBy,omitempty"`        
	Description       *WorkflowDescription `json:"description,omitempty"`      // Description of the Workflow
	ID                *WorkflowID          `json:"id,omitempty"`               // Workflow ID
	Name              *WorkflowName        `json:"name,omitempty"`             // Name of the Workflow
	Tags              *WorkflowTags        `json:"tags,omitempty"`             
	WorkflowVariables *WorkflowVariables   `json:"workflowVariables,omitempty"`// Available variables in the Workflow
}

type WorkflowCreatedAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type WorkflowCreatedBy struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *User                  `json:"return,omitempty"`   
}

// Description of the Workflow
type WorkflowDescription struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Workflow ID
type WorkflowID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Name of the Workflow
type WorkflowName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type WorkflowTags struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Tag                 `json:"return,omitempty"`   
}

// Available variables in the Workflow
type WorkflowVariables struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Variable            `json:"return,omitempty"`   
}

type HilariousPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

type IndigoClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Beta
type CreateCloudProvider struct {
	Arguments *CreateCloudProviderArguments `json:"arguments,omitempty"`
	Return    *CreateCloudProviderPayload   `json:"return,omitempty"`   
}

type CreateCloudProviderArguments struct {
	Input CreateCloudProviderInput `json:"input"`
}

type CreateCloudProviderInput struct {
	AwsCloudProvider                *AwsCloudProviderInput                `json:"awsCloudProvider,omitempty"`               
	AzureCloudProvider              *AzureCloudProviderInput              `json:"azureCloudProvider,omitempty"`             
	ClientMutationID                *string                               `json:"clientMutationId,omitempty"`               
	CloudProviderType               CloudProviderType                     `json:"cloudProviderType"`                        
	GcpCloudProvider                *GcpCloudProviderInput                `json:"gcpCloudProvider,omitempty"`               
	K8SCloudProvider                *K8SCloudProviderInput                `json:"k8sCloudProvider,omitempty"`               
	PcfCloudProvider                *PcfCloudProviderInput                `json:"pcfCloudProvider,omitempty"`               
	PhysicalDataCenterCloudProvider *PhysicalDataCenterCloudProviderInput `json:"physicalDataCenterCloudProvider,omitempty"`
	SpotInstCloudProvider           *SpotInstCloudProviderInput           `json:"spotInstCloudProvider,omitempty"`          
}

type AwsCloudProviderInput struct {
	CredentialsType        *AwsCredentialsType        `json:"credentialsType,omitempty"`       
	CrossAccountAttributes *AwsCrossAccountAttributes `json:"crossAccountAttributes,omitempty"`
	DefaultRegion          *string                    `json:"defaultRegion,omitempty"`         
	Ec2IamCredentials      *Ec2IamCredentials         `json:"ec2IamCredentials,omitempty"`     
	ManualCredentials      *AwsManualCredentials      `json:"manualCredentials,omitempty"`     
	Name                   string                     `json:"name"`                            
}

type AwsCrossAccountAttributes struct {
	AssumeCrossAccountRole *bool   `json:"assumeCrossAccountRole,omitempty"`
	CrossAccountRoleArn    string  `json:"crossAccountRoleArn"`             
	ExternalID             *string `json:"externalId,omitempty"`            
}

type Ec2IamCredentials struct {
	DelegateSelector string           `json:"delegateSelector"`    
	UsageScope       *UsageScopeInput `json:"usageScope,omitempty"`
}

type UsageScopeInput struct {
	AppEnvScopes []AppEnvScopeInput `json:"appEnvScopes,omitempty"`
}

type AppEnvScopeInput struct {
	Application AppScopeFilterInput `json:"application"`
	Environment EnvScopeFilterInput `json:"environment"`
}

type AppScopeFilterInput struct {
	AppID      *string         `json:"appId,omitempty"`     
	FilterType *FilterTypeEnum `json:"filterType,omitempty"`
}

type EnvScopeFilterInput struct {
	EnvID      *string     `json:"envId,omitempty"`     
	FilterType *FilterType `json:"filterType,omitempty"`
}

type AwsManualCredentials struct {
	AccessKey         *string `json:"accessKey,omitempty"`        
	AccessKeySecretID *string `json:"accessKeySecretId,omitempty"`
	SecretKeySecretID string  `json:"secretKeySecretId"`          
}

type AzureCloudProviderInput struct {
	ClientID    string `json:"clientId"`   
	KeySecretID string `json:"keySecretId"`
	Name        string `json:"name"`       
	TenantID    string `json:"tenantId"`   
}

type GcpCloudProviderInput struct {
	DelegateSelector          *string  `json:"delegateSelector,omitempty"`         
	DelegateSelectors         []string `json:"delegateSelectors,omitempty"`        
	Name                      string   `json:"name"`                               
	ServiceAccountKeySecretID *string  `json:"serviceAccountKeySecretId,omitempty"`
	SkipValidation            *bool    `json:"skipValidation,omitempty"`           
	UseDelegate               *bool    `json:"useDelegate,omitempty"`              
	UseDelegateSelectors      *bool    `json:"useDelegateSelectors,omitempty"`     
}

type K8SCloudProviderInput struct {
	ClusterDetailsType    ClusterDetailsType          `json:"clusterDetailsType"`             
	InheritClusterDetails *InheritClusterDetailsClass `json:"inheritClusterDetails,omitempty"`
	ManualClusterDetails  *ManualClusterDetailsClass  `json:"manualClusterDetails,omitempty"` 
	Name                  string                      `json:"name"`                           
	SkipValidation        *bool                       `json:"skipValidation,omitempty"`       
}

type InheritClusterDetailsClass struct {
	DelegateName      *string          `json:"delegateName,omitempty"`     
	DelegateSelectors []string         `json:"delegateSelectors,omitempty"`
	UsageScope        *UsageScopeInput `json:"usageScope,omitempty"`       
}

type ManualClusterDetailsClass struct {
	MasterURL           string                                 `json:"masterUrl"`                    
	None                *None                                  `json:"none,omitempty"`               
	OidcToken           *OIDCToken                             `json:"oidcToken,omitempty"`          
	ServiceAccountToken *ServiceAccountTokenClass              `json:"serviceAccountToken,omitempty"`
	Type                ManualClusterDetailsAuthenticationType `json:"type"`                         
	UsernameAndPassword *UsernameAndPasswordAuthentication     `json:"usernameAndPassword,omitempty"`
}

type None struct {
	CACertificateSecretID       string           `json:"caCertificateSecretId"`      
	ClientCertificateSecretID   string           `json:"clientCertificateSecretId"`  
	ClientKeyAlgorithm          string           `json:"clientKeyAlgorithm"`         
	ClientKeyPassphraseSecretID string           `json:"clientKeyPassphraseSecretId"`
	ClientKeySecretID           string           `json:"clientKeySecretId"`          
	PasswordSecretID            string           `json:"passwordSecretId"`           
	ServiceAccountTokenSecretID string           `json:"serviceAccountTokenSecretId"`
	UsageScope                  *UsageScopeInput `json:"usageScope,omitempty"`       
	UserName                    string           `json:"userName"`                   
}

type OIDCToken struct {
	ClientIDSecretID     string `json:"clientIdSecretId"`    
	ClientSecretSecretID string `json:"clientSecretSecretId"`
	IdentityProviderURL  string `json:"identityProviderUrl"` 
	PasswordSecretID     string `json:"passwordSecretId"`    
	Scopes               string `json:"scopes"`              
	UserName             string `json:"userName"`            
}

type ServiceAccountTokenClass struct {
	ServiceAccountTokenSecretID string `json:"serviceAccountTokenSecretId"`
}

type UsernameAndPasswordAuthentication struct {
	PasswordSecretID string  `json:"passwordSecretId"`          
	UserName         *string `json:"userName,omitempty"`        
	UserNameSecretID *string `json:"userNameSecretId,omitempty"`
}

type PcfCloudProviderInput struct {
	EndpointURL      string  `json:"endpointUrl"`               
	Name             string  `json:"name"`                      
	PasswordSecretID string  `json:"passwordSecretId"`          
	SkipValidation   *bool   `json:"skipValidation,omitempty"`  
	UserName         *string `json:"userName,omitempty"`        
	UserNameSecretID *string `json:"userNameSecretId,omitempty"`
}

type PhysicalDataCenterCloudProviderInput struct {
	Name       string           `json:"name"`                
	UsageScope *UsageScopeInput `json:"usageScope,omitempty"`
}

type SpotInstCloudProviderInput struct {
	AccountID     string `json:"accountId"`    
	Name          string `json:"name"`         
	TokenSecretID string `json:"tokenSecretId"`
}

type CreateCloudProviderPayload struct {
	ClientMutationID *IndecentClientMutationID `json:"clientMutationId,omitempty"`
	CloudProvider    *PurpleCloudProvider      `json:"cloudProvider,omitempty"`   
}

type IndecentClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PurpleCloudProvider struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

// Creates a new Connector and returns it
type CreateConnector struct {
	Arguments *CreateConnectorArguments `json:"arguments,omitempty"`
	Return    *CreateConnectorPayload   `json:"return,omitempty"`   
}

type CreateConnectorArguments struct {
	Input CreateConnectorInput `json:"input"`
}

type CreateConnectorInput struct {
	ClientMutationID *string               `json:"clientMutationId,omitempty"`
	ConnectorType    ConnectorType         `json:"connectorType"`             
	DockerConnector  *DockerConnectorInput `json:"dockerConnector,omitempty"` 
	GitConnector     *GitConnectorInput    `json:"gitConnector,omitempty"`    
	HelmConnector    *HelmConnectorInput   `json:"helmConnector,omitempty"`   
	NexusConnector   *NexusConnectorInput  `json:"nexusConnector,omitempty"`  
}

type DockerConnectorInput struct {
	DelegateSelectors []*string `json:"delegateSelectors,omitempty"`
	Name              string    `json:"name"`                       
	PasswordSecretID  *string   `json:"passwordSecretId,omitempty"` 
	URL               string    `json:"URL"`                        
	UserName          *string   `json:"userName,omitempty"`         
}

type GitConnectorInput struct {
	Branch              *string                   `json:"branch,omitempty"`             
	CustomCommitDetails *CustomCommitDetailsInput `json:"customCommitDetails,omitempty"`
	DelegateSelectors   []string                  `json:"delegateSelectors,omitempty"`  
	GenerateWebhookURL  *bool                     `json:"generateWebhookUrl,omitempty"` 
	Name                string                    `json:"name"`                         
	PasswordSecretID    *string                   `json:"passwordSecretId,omitempty"`   
	SSHSettingID        *string                   `json:"sshSettingId,omitempty"`       
	URL                 string                    `json:"URL"`                          
	URLType             URLTypeEnum               `json:"urlType"`                      
	UsageScope          *UsageScopeInput          `json:"usageScope,omitempty"`         
	UserName            *string                   `json:"userName,omitempty"`           
}

type CustomCommitDetailsInput struct {
	AuthorEmailID *string `json:"authorEmailId,omitempty"`
	AuthorName    *string `json:"authorName,omitempty"`   
	CommitMessage *string `json:"commitMessage,omitempty"`
}

type HelmConnectorInput struct {
	AmazonS3PlatformDetails   *AmazonS3PlatformInput   `json:"amazonS3PlatformDetails,omitempty"`  
	GcsPlatformDetails        *GCSPlatformInput        `json:"gcsPlatformDetails,omitempty"`       
	HTTPServerPlatformDetails *HTTPServerPlatformInput `json:"httpServerPlatformDetails,omitempty"`
	Name                      string                   `json:"name"`                               
}

type AmazonS3PlatformInput struct {
	AwsCloudProvider string `json:"awsCloudProvider"`
	BucketName       string `json:"bucketName"`      
	Region           string `json:"region"`          
}

type GCSPlatformInput struct {
	BucketName          string `json:"bucketName"`         
	GoogleCloudProvider string `json:"googleCloudProvider"`
}

type HTTPServerPlatformInput struct {
	PasswordSecretID *string `json:"passwordSecretId,omitempty"`
	URL              string  `json:"URL"`                       
	UserName         *string `json:"userName,omitempty"`        
}

type NexusConnectorInput struct {
	DelegateSelectors []*string    `json:"delegateSelectors,omitempty"`
	Name              string       `json:"name"`                       
	PasswordSecretID  *string      `json:"passwordSecretId,omitempty"` 
	URL               string       `json:"URL"`                        
	UserName          *string      `json:"userName,omitempty"`         
	Version           NexusVersion `json:"version"`                    
}

type CreateConnectorPayload struct {
	ClientMutationID *HilariousClientMutationID `json:"clientMutationId,omitempty"`
	Connector        *PurpleConnector           `json:"connector,omitempty"`       
}

type HilariousClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PurpleConnector struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

// Beta: Create a secret.
type CreateSecret struct {
	Arguments *CreateSecretArguments `json:"arguments,omitempty"`
	Return    *CreateSecretPayload   `json:"return,omitempty"`   
}

type CreateSecretArguments struct {
	Input CreateSecretInput `json:"input"`
}

type CreateSecretInput struct {
	ClientMutationID *string               `json:"clientMutationId,omitempty"`
	EncryptedText    *EncryptedTextInput   `json:"encryptedText,omitempty"`   
	SecretType       SecretType            `json:"secretType"`                
	SSHCredential    *SSHCredentialInput   `json:"sshCredential,omitempty"`   
	WinRMCredential  *WinRMCredentialInput `json:"winRMCredential,omitempty"` 
}

type EncryptedTextInput struct {
	InheritScopesFromSM *bool            `json:"inheritScopesFromSM,omitempty"`
	Name                string           `json:"name"`                         
	ScopedToAccount     *bool            `json:"scopedToAccount,omitempty"`    
	SecretManagerID     *string          `json:"secretManagerId,omitempty"`    
	SecretReference     *string          `json:"secretReference,omitempty"`    
	UsageScope          *UsageScopeInput `json:"usageScope,omitempty"`         
	Value               *string          `json:"value,omitempty"`              
}

type SSHCredentialInput struct {
	AuthenticationScheme   SSHAuthenticationScheme      `json:"authenticationScheme"`            
	KerberosAuthentication *KerberosAuthenticationInput `json:"kerberosAuthentication,omitempty"`
	Name                   string                       `json:"name"`                            
	SSHAuthentication      *SSHAuthenticationInput      `json:"sshAuthentication,omitempty"`     
	UsageScope             *UsageScopeInput             `json:"usageScope,omitempty"`            
}

type KerberosAuthenticationInput struct {
	Port                float64              `json:"port"`                         
	Principal           string               `json:"principal"`                    
	Realm               string               `json:"realm"`                        
	TgtGenerationMethod *TGTGenerationMethod `json:"tgtGenerationMethod,omitempty"`
}

type TGTGenerationMethod struct {
	KerberosPassword   *KerberosPassword  `json:"kerberosPassword,omitempty"`
	KeyTabFile         *KeyTabFileClass   `json:"keyTabFile,omitempty"`      
	TgtGenerationUsing TGTGenerationUsing `json:"tgtGenerationUsing"`        
}

type KerberosPassword struct {
	PasswordSecretID string `json:"passwordSecretId"`
}

type KeyTabFileClass struct {
	FilePath string `json:"filePath"`
}

type SSHAuthenticationInput struct {
	Port                    float64                 `json:"port"`                   
	SSHAuthenticationMethod SSHAuthenticationMethod `json:"sshAuthenticationMethod"`
	UserName                string                  `json:"userName"`               
}

type SSHAuthenticationMethod struct {
	InlineSSHKey      *InlineSSHKey     `json:"inlineSSHKey,omitempty"`  
	ServerPassword    *SSHPassword      `json:"serverPassword,omitempty"`
	SSHCredentialType SSHCredentialType `json:"sshCredentialType"`       
	SSHKeyFile        *SSHKeyFile       `json:"sshKeyFile,omitempty"`    
}

type InlineSSHKey struct {
	PassphraseSecretID *string `json:"passphraseSecretId,omitempty"`
	SSHKeySecretFileID string  `json:"sshKeySecretFileId"`          
}

type SSHKeyFile struct {
	PassphraseSecretID *string `json:"passphraseSecretId,omitempty"`
	Path               string  `json:"path"`                        
}

type SSHPassword struct {
	PasswordSecretID string `json:"passwordSecretId"`
}

type WinRMCredentialInput struct {
	AuthenticationScheme *WinRMAuthenticationScheme `json:"authenticationScheme,omitempty"`
	Domain               *string                    `json:"domain,omitempty"`              
	Name                 string                     `json:"name"`                          
	PasswordSecretID     string                     `json:"passwordSecretId"`              
	Port                 *float64                   `json:"port,omitempty"`                
	SkipCERTCheck        *bool                      `json:"skipCertCheck,omitempty"`       
	UsageScope           *UsageScopeInput           `json:"usageScope,omitempty"`          
	UserName             string                     `json:"userName"`                      
	UseSSL               *bool                      `json:"useSSL,omitempty"`              
}

type CreateSecretPayload struct {
	ClientMutationID *AmbitiousClientMutationID `json:"clientMutationId,omitempty"`
	Secret           *PurpleSecret              `json:"secret,omitempty"`          
}

type AmbitiousClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PurpleSecret struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

// Create secret manager
type CreateSecretManager struct {
	Arguments *CreateSecretManagerArguments `json:"arguments,omitempty"`
	Return    *UpsertSecretManagerPayload   `json:"return,omitempty"`   
}

type CreateSecretManagerArguments struct {
	Input CreateSecretManagerInput `json:"input"`
}

type CreateSecretManagerInput struct {
	ClientMutationID          *string                           `json:"clientMutationId,omitempty"`         
	HashicorpVaultConfigInput *HashicorpVaultSecretManagerInput `json:"hashicorpVaultConfigInput,omitempty"`
	SecretManagerType         SecretManagerType                 `json:"secretManagerType"`                  
}

type HashicorpVaultSecretManagerInput struct {
	AuthDetails                 HashicorpVaultAuthDetails `json:"authDetails"`                
	BasePath                    *string                   `json:"basePath,omitempty"`         
	IsDefault                   *bool                     `json:"isDefault,omitempty"`        
	IsReadOnly                  *bool                     `json:"isReadOnly,omitempty"`       
	Name                        string                    `json:"name"`                       
	SecretEngineName            string                    `json:"secretEngineName"`           
	SecretEngineRenewalInterval map[string]interface{}    `json:"secretEngineRenewalInterval"`
	SecretEngineVersion         float64                   `json:"secretEngineVersion"`        
	UsageScope                  *UsageScopeInput          `json:"usageScope,omitempty"`       
	VaultURL                    string                    `json:"vaultUrl"`                   
}

type HashicorpVaultAuthDetails struct {
	AppRoleID *string `json:"appRoleId,omitempty"`
	AuthToken *string `json:"authToken,omitempty"`
	SecretID  *string `json:"secretId,omitempty"` 
}

type UpsertSecretManagerPayload struct {
	ClientMutationID *CunningClientMutationID `json:"clientMutationId,omitempty"`
	SecretManager    *ReturnSecretManager     `json:"secretManager,omitempty"`   
}

type CunningClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ReturnSecretManager struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *SecretManager         `json:"return,omitempty"`   
}

type SecretManager struct {
	ID         *SecretManagerID         `json:"id,omitempty"`        
	Name       *SecretManagerName       `json:"name,omitempty"`      
	UsageScope *SecretManagerUsageScope `json:"usageScope,omitempty"`
}

type SecretManagerID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type SecretManagerName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type SecretManagerUsageScope struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *UsageScope            `json:"return,omitempty"`   
}

// Creates a new Trigger and returns it
type CreateTrigger struct {
	Arguments *CreateTriggerArguments `json:"arguments,omitempty"`
	Return    *TriggerPayload         `json:"return,omitempty"`   
}

type CreateTriggerArguments struct {
	Input CreateTriggerInput `json:"input"`
}

type CreateTriggerInput struct {
	Action           TriggerActionInput    `json:"action"`                    // Action performed on trigger execute: Workflow/Pipeline execution
	ApplicationID    string                `json:"applicationId"`             // Application Id In which Trigger will be created
	ClientMutationID *string               `json:"clientMutationId,omitempty"`
	Condition        TriggerConditionInput `json:"condition"`                 // Condition of which Trigger will execute
	Description      *string               `json:"description,omitempty"`     // Description of the Trigger
	Name             string                `json:"name"`                      // Name of the Trigger
}

// Action performed on trigger execute: Workflow/Pipeline execution
type TriggerActionInput struct {
	ArtifactSelections           []*ArtifactSelectionInput `json:"artifactSelections,omitempty"`          // Artifact Selections required for the execution
	ContinueWithDefaultValues    *bool                     `json:"continueWithDefaultValues,omitempty"`   // Beta: Coninue with default values as defined in pipeline
	EntityID                     string                    `json:"entityId"`                              // Entity identifier of the Workflow or Pipeline
	ExcludeHostsWithSameArtifact *bool                     `json:"excludeHostsWithSameArtifact,omitempty"`// Skip deployment on the host, if the same artifact is already deployed
	ExecutionType                ExecutionType             `json:"executionType"`                         // Execution type: Workflow/Pipeline
	Variables                    []*VariableInput          `json:"variables,omitempty"`                   // Variable inputs required for the execution
}

type ArtifactSelectionInput struct {
	ArtifactFilter        *string               `json:"artifactFilter,omitempty"`  // Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
	ArtifactSelectionType ArtifactSelectionType `json:"artifactSelectionType"`     // Artifact Selection type
	ArtifactSourceID      *string               `json:"artifactSourceId,omitempty"`// Artifact source Id to select artifact from. Required for; LAST_COLLECTED,FROM_PAYLOAD_SOURCE
	PipelineID            *string               `json:"pipelineId,omitempty"`      // Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
	Regex                 *bool                 `json:"regex,omitempty"`           // If Artifact Build/Tag Filter is regex match or not
	ServiceID             string                `json:"serviceId"`                 // Id of the service providing artifact selection for
	WorkflowID            *string               `json:"workflowId,omitempty"`      // Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
}

type VariableInput struct {
	Name          string        `json:"name"`         // name of the variable
	VariableValue VariableValue `json:"variableValue"`// value of the variable
}

// value of the variable
type VariableValue struct {
	Type  VariableValueType `json:"type"` // type of the value: name or if
	Value string            `json:"value"`// value
}

// Condition of which Trigger will execute
type TriggerConditionInput struct {
	ArtifactConditionInput *ArtifactConditionInput `json:"artifactConditionInput,omitempty"`// Should be provided when conditionType is ON_NEW_ARTIFACT.
	ConditionType          ConditionType           `json:"conditionType"`                   // Condition to execute Trigger: ON_NEW_ARTIFACT, ON_PIPELINE_COMPLETION, ON_SCHEDULE,; ON_WEBHOOK
	PipelineConditionInput *PipelineConditionInput `json:"pipelineConditionInput,omitempty"`// Should be provided when conditionType is ON_PIPELINE_COMPLETION.
	ScheduleConditionInput *ScheduleConditionInput `json:"scheduleConditionInput,omitempty"`// Should be provided when conditionType is ON_SCHEDULE.
	WebhookConditionInput  *WebhookConditionInput  `json:"webhookConditionInput,omitempty"` // Should be provided when conditionType is ON_WEBHOOK.
}

// Should be provided when conditionType is ON_NEW_ARTIFACT.
type ArtifactConditionInput struct {
	ArtifactFilter   *string `json:"artifactFilter,omitempty"`// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be; Exact match or Regex
	ArtifactSourceID string  `json:"artifactSourceId"`        // Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter; will execute the Trigger.
	Regex            *bool   `json:"regex,omitempty"`         // Regex, True if the Artifact Filter String is provided as regex.
}

// Should be provided when conditionType is ON_PIPELINE_COMPLETION.
type PipelineConditionInput struct {
	PipelineID string `json:"pipelineId"`// PipelineId: The trigger will be executed on success of this pipeline.
}

// Should be provided when conditionType is ON_SCHEDULE.
type ScheduleConditionInput struct {
	CronExpression    string `json:"cronExpression"`             // Cron Expression: The time format must be a cron quartz expression.
	OnNewArtifactOnly *bool  `json:"onNewArtifactOnly,omitempty"`
}

// Should be provided when conditionType is ON_WEBHOOK.
type WebhookConditionInput struct {
	BitbucketEvent           *BitbucketEvent `json:"bitbucketEvent,omitempty"`          // Bitbucket  event, Required if webhookSourceType = BITBUCKET
	BranchName               *string         `json:"branchName,omitempty"`              // Branch in which the filePaths exist.
	BranchRegex              *string         `json:"branchRegex,omitempty"`             // Branch filter, can be used if using PullRequest or Push events.
	DeployOnlyIfFilesChanged *bool           `json:"deployOnlyIfFilesChanged,omitempty"`// Only for Native Helm and Helm-based Kubernetes deployments. Event type should be PUSH.
	FilePaths                []*string       `json:"filePaths,omitempty"`               // The file names/paths when changed and Pushed, will execute this Trigger.
	GitConnectorID           *string         `json:"gitConnectorId,omitempty"`          // Source Repo Provider setup in Harness
	GithubEvent              *GitHubEvent    `json:"githubEvent,omitempty"`             // Github event, Required if webhookSourceType = GITHUB
	GitlabEvent              *GitlabEvent    `json:"gitlabEvent,omitempty"`             // Gitlab  event, Required if webhookSourceType = GITLAB
	RepoName                 *string         `json:"repoName,omitempty"`                // Git repository name in case when Account level Git connector is provided
	WebhookSecret            *string         `json:"webhookSecret,omitempty"`           // Beta: Webhook secret to authorize Github webhooks
	WebhookSourceType        WebhookSource   `json:"webhookSourceType"`                 // Source of the webhook: GITHUB/GITLAB/BITBUCKET/CUSTOM(curl based)
}

// Github event, Required if webhookSourceType = GITHUB
type GitHubEvent struct {
	Action *GitHubAction    `json:"action,omitempty"`// Github Action for the event type.
	Event  *GitHubEventType `json:"event,omitempty"` // Github event type like PUSH, PULL_REQUEST, etc
}

type TriggerPayload struct {
	ClientMutationID *MagentaClientMutationID `json:"clientMutationId,omitempty"`
	Trigger          *PurpleTrigger           `json:"trigger,omitempty"`         
}

type MagentaClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PurpleTrigger struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *Trigger               `json:"return,omitempty"`   
}

type Trigger struct {
	Action                       *Action                       `json:"action,omitempty"`                      // Action performed by the trigger: Execute workflow/pipeline
	Condition                    *Condition                    `json:"condition,omitempty"`                   // The condition that will execute the Trigger: On new artifact, On pipeline completion, On; Cron schedule, On webhook
	CreatedAt                    *TriggerCreatedAt             `json:"createdAt,omitempty"`                   
	CreatedBy                    *TriggerCreatedBy             `json:"createdBy,omitempty"`                   
	Description                  *TriggerDescription           `json:"description,omitempty"`                 // Description of the Trigger
	ExcludeHostsWithSameArtifact *ExcludeHostsWithSameArtifact `json:"excludeHostsWithSameArtifact,omitempty"`
	ID                           *TriggerID                    `json:"id,omitempty"`                          // Trigger ID
	Name                         *TriggerName                  `json:"name,omitempty"`                        // Name of the trigger
	Tags                         *TriggerTags                  `json:"tags,omitempty"`                        
}

// Action performed by the trigger: Execute workflow/pipeline
type Action struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

// The condition that will execute the Trigger: On new artifact, On pipeline completion, On
// Cron schedule, On webhook
type Condition struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

type TriggerCreatedAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type TriggerCreatedBy struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *User                  `json:"return,omitempty"`   
}

// Description of the Trigger
type TriggerDescription struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ExcludeHostsWithSameArtifact struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *bool                  `json:"return,omitempty"`   
}

// Trigger ID
type TriggerID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Name of the trigger
type TriggerName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type TriggerTags struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Tag                 `json:"return,omitempty"`   
}

type CreateUser struct {
	Arguments *CreateUserArguments `json:"arguments,omitempty"`
	Return    *CreateUserPayload   `json:"return,omitempty"`   
}

type CreateUserArguments struct {
	Input CreateUserInput `json:"input"`
}

type CreateUserInput struct {
	ClientMutationID *string  `json:"clientMutationId,omitempty"`
	Email            string   `json:"email"`                     
	Name             string   `json:"name"`                      
	UserGroupIDS     []string `json:"userGroupIds,omitempty"`    
}

type CreateUserPayload struct {
	ClientMutationID *FriskyClientMutationID `json:"clientMutationId,omitempty"`
	User             *PurpleUser             `json:"user,omitempty"`            
}

type FriskyClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PurpleUser struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *User                  `json:"return,omitempty"`   
}

type CreateUserGroup struct {
	Arguments *CreateUserGroupArguments `json:"arguments,omitempty"`
	Return    *CreateUserGroupPayload   `json:"return,omitempty"`   
}

type CreateUserGroupArguments struct {
	Input CreateUserGroupInput `json:"input"`
}

type CreateUserGroupInput struct {
	ClientMutationID     *string                    `json:"clientMutationId,omitempty"`    
	Description          *string                    `json:"description,omitempty"`         
	Name                 string                     `json:"name"`                          
	NotificationSettings *NotificationSettingsInput `json:"notificationSettings,omitempty"`
	Permissions          *Permissions               `json:"permissions,omitempty"`         
	SsoSetting           *SSOSettingInput           `json:"ssoSetting,omitempty"`          
	UserIDS              []*string                  `json:"userIds,omitempty"`             
}

type NotificationSettingsInput struct {
	GroupEmailAddresses       []*string                      `json:"groupEmailAddresses,omitempty"`      
	MicrosoftTeamsWebhookURL  *string                        `json:"microsoftTeamsWebhookUrl,omitempty"` 
	PagerDutyIntegrationKey   *string                        `json:"pagerDutyIntegrationKey,omitempty"`  
	SendMailToNewMembers      *bool                          `json:"sendMailToNewMembers,omitempty"`     
	SendNotificationToMembers *bool                          `json:"sendNotificationToMembers,omitempty"`
	SlackNotificationSetting  *SlackNotificationSettingInput `json:"slackNotificationSetting,omitempty"` 
}

type SlackNotificationSettingInput struct {
	SlackChannelName *string `json:"slackChannelName,omitempty"`
	SlackWebhookURL  *string `json:"slackWebhookURL,omitempty"` 
}

type Permissions struct {
	AccountPermissions *AccountPermissionInput       `json:"accountPermissions,omitempty"`
	AppPermissions     []*ApplicationPermissionInput `json:"appPermissions,omitempty"`    
}

type AccountPermissionInput struct {
	AccountPermissionTypes []*AccountPermissionType `json:"accountPermissionTypes,omitempty"`
}

type SSOSettingInput struct {
	LDAPSettings *LDAPSettingsInput `json:"ldapSettings,omitempty"`
	SamlSettings *SAMLSettingsInput `json:"samlSettings,omitempty"`
}

type LDAPSettingsInput struct {
	GroupDN       string `json:"groupDN"`      
	GroupName     string `json:"groupName"`    
	SsoProviderID string `json:"ssoProviderId"`
}

type SAMLSettingsInput struct {
	GroupName     string `json:"groupName"`    
	SsoProviderID string `json:"ssoProviderId"`
}

type CreateUserGroupPayload struct {
	ClientMutationID *MischievousClientMutationID `json:"clientMutationId,omitempty"`
	UserGroup        *StickyUserGroup             `json:"userGroup,omitempty"`       
}

type MischievousClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type StickyUserGroup struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *UserGroup             `json:"return,omitempty"`   
}

// Deletes an application.
type DeleteApplication struct {
	Arguments *DeleteApplicationArguments `json:"arguments,omitempty"`
	Return    *DeleteApplicationPayload   `json:"return,omitempty"`   
}

type DeleteApplicationArguments struct {
	Input DeleteApplicationInput `json:"input"`
}

type DeleteApplicationInput struct {
	ApplicationID    string  `json:"applicationId"`             
	ClientMutationID *string `json:"clientMutationId,omitempty"`
}

type DeleteApplicationPayload struct {
	ClientMutationID *BraggadociousClientMutationID `json:"clientMutationId,omitempty"`
}

type BraggadociousClientMutationID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Beta
type DeleteCloudProvider struct {
	Arguments *DeleteCloudProviderArguments `json:"arguments,omitempty"`
	Return    *DeleteCloudProviderPayload   `json:"return,omitempty"`   
}

type DeleteCloudProviderArguments struct {
	Input DeleteCloudProviderInput `json:"input"`
}

type DeleteCloudProviderInput struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	CloudProviderID  string  `json:"cloudProviderId"`           
}

type DeleteCloudProviderPayload struct {
	ClientMutationID *ClientMutationID1 `json:"clientMutationId,omitempty"`
}

type ClientMutationID1 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Deletes a Connector.
type DeleteConnector struct {
	Arguments *DeleteConnectorArguments `json:"arguments,omitempty"`
	Return    *DeleteConnectorPayload   `json:"return,omitempty"`   
}

type DeleteConnectorArguments struct {
	Input DeleteConnectorInput `json:"input"`
}

type DeleteConnectorInput struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	ConnectorID      string  `json:"connectorId"`               
}

type DeleteConnectorPayload struct {
	ClientMutationID *ClientMutationID2 `json:"clientMutationId,omitempty"`
}

type ClientMutationID2 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Beta: Delete a secret.
type DeleteSecret struct {
	Arguments *DeleteSecretArguments `json:"arguments,omitempty"`
	Return    *DeleteSecretPayload   `json:"return,omitempty"`   
}

type DeleteSecretArguments struct {
	Input DeleteSecretInput `json:"input"`
}

type DeleteSecretInput struct {
	ClientMutationID *string    `json:"clientMutationId,omitempty"`
	SecretID         string     `json:"secretId"`                  
	SecretType       SecretType `json:"secretType"`                
}

type DeleteSecretPayload struct {
	ClientMutationID *ClientMutationID3 `json:"clientMutationId,omitempty"`
}

type ClientMutationID3 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Delete secret manager
type DeleteSecretManager struct {
	Arguments *DeleteSecretManagerArguments `json:"arguments,omitempty"`
	Return    *DeleteSecretManagerPayload   `json:"return,omitempty"`   
}

type DeleteSecretManagerArguments struct {
	Input DeleteSecretManagerInput `json:"input"`
}

type DeleteSecretManagerInput struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	SecretManagerID  string  `json:"secretManagerId"`           
}

type DeleteSecretManagerPayload struct {
	ClientMutationID *ClientMutationID4 `json:"clientMutationId,omitempty"`
}

type ClientMutationID4 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Deletes a Trigger.
type DeleteTrigger struct {
	Arguments *DeleteTriggerArguments `json:"arguments,omitempty"`
	Return    *DeleteTriggerPayload   `json:"return,omitempty"`   
}

type DeleteTriggerArguments struct {
	Input DeleteTriggerInput `json:"input"`
}

type DeleteTriggerInput struct {
	ApplicationID    string  `json:"applicationId"`             // Application Id
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	TriggerID        string  `json:"triggerId"`                 // Id of Trigger to be deleted
}

type DeleteTriggerPayload struct {
	ClientMutationID *ClientMutationID5 `json:"clientMutationId,omitempty"`
}

type ClientMutationID5 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type DeleteUser struct {
	Arguments *DeleteUserArguments `json:"arguments,omitempty"`
	Return    *DeleteUserPayload   `json:"return,omitempty"`   
}

type DeleteUserArguments struct {
	Input DeleteUserInput `json:"input"`
}

type DeleteUserInput struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	ID               string  `json:"id"`                        
}

type DeleteUserPayload struct {
	ClientMutationID *ClientMutationID6 `json:"clientMutationId,omitempty"`
}

type ClientMutationID6 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type DeleteUserGroup struct {
	Arguments *DeleteUserGroupArguments `json:"arguments,omitempty"`
	Return    *DeleteUserGroupPayload   `json:"return,omitempty"`   
}

type DeleteUserGroupArguments struct {
	Input DeleteUserGroupInput `json:"input"`
}

type DeleteUserGroupInput struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	UserGroupID      string  `json:"userGroupId"`               
}

type DeleteUserGroupPayload struct {
	ClientMutationID *ClientMutationID7 `json:"clientMutationId,omitempty"`
}

type ClientMutationID7 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Detach a tag from an entity
type DetachTag struct {
	Arguments *DetachTagArguments `json:"arguments,omitempty"`
	Return    *DetachTagPayload   `json:"return,omitempty"`   
}

type DetachTagArguments struct {
	Input DetachTagInput `json:"input"`
}

type DetachTagInput struct {
	ClientMutationID *string       `json:"clientMutationId,omitempty"`
	EntityID         string        `json:"entityId"`                  // Unique ID of the harness entity
	EntityType       TagEntityType `json:"entityType"`                // Type of entity the tag is to be detached from
	Name             string        `json:"name"`                      // Name of the tag
}

type DetachTagPayload struct {
	ClientMutationID *ClientMutationID8 `json:"clientMutationId,omitempty"`
}

type ClientMutationID8 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Beta: Start an export of executions/deployments.
type ExportExecutions struct {
	Arguments *ExportExecutionsArguments `json:"arguments,omitempty"`
	Return    *ExportExecutionsPayload   `json:"return,omitempty"`   
}

type ExportExecutionsArguments struct {
	Input ExportExecutionsInput `json:"input"`
}

type ExportExecutionsInput struct {
	ClientMutationID         *string                 `json:"clientMutationId,omitempty"`        
	Filters                  []ExportExecutionFilter `json:"filters,omitempty"`                 // Execution filters
	NotifyOnlyTriggeringUser *bool                   `json:"notifyOnlyTriggeringUser,omitempty"`// Notify only the triggering user
	UserGroupIDS             []string                `json:"userGroupIds,omitempty"`            // User group ids
}

type ExportExecutionFilter struct {
	Application   *IDFilter            `json:"application,omitempty"`  
	CloudProvider *IDFilter            `json:"cloudProvider,omitempty"`
	CreationTime  *TimeFilter          `json:"creationTime,omitempty"` 
	Duration      *NumberFilter        `json:"duration,omitempty"`     
	EndTime       *TimeFilter          `json:"endTime,omitempty"`      
	Environment   *IDFilter            `json:"environment,omitempty"`  
	Execution     *IDFilter            `json:"execution,omitempty"`    
	Pipeline      *IDFilter            `json:"pipeline,omitempty"`     
	Service       *IDFilter            `json:"service,omitempty"`      
	StartTime     *TimeFilter          `json:"startTime,omitempty"`    
	Status        *IDFilter            `json:"status,omitempty"`       
	Tag           *DeploymentTagFilter `json:"tag,omitempty"`          
	Trigger       *IDFilter            `json:"trigger,omitempty"`      
	TriggeredBy   *IDFilter            `json:"triggeredBy,omitempty"`  
	Workflow      *IDFilter            `json:"workflow,omitempty"`     
}

type TimeFilter struct {
	Operator TimeOperator           `json:"operator"`
	Value    map[string]interface{} `json:"value"`   
}

type NumberFilter struct {
	Operator NumericOperator          `json:"operator"`
	Values   []map[string]interface{} `json:"values"`  
}

type DeploymentTagFilter struct {
	EntityType *DeploymentTagType `json:"entityType,omitempty"`
	Tags       []*TagInput        `json:"tags,omitempty"`      
}

type ExportExecutionsPayload struct {
	ClientMutationID *ClientMutationID9 `json:"clientMutationId,omitempty"`
	DownloadLink     *DownloadLink      `json:"downloadLink,omitempty"`    
	ErrorMessage     *ErrorMessage      `json:"errorMessage,omitempty"`    
	ExpiresAt        *ExpiresAt         `json:"expiresAt,omitempty"`       
	RequestID        *RequestID         `json:"requestId,omitempty"`       
	Status           *StatusClass       `json:"status,omitempty"`          
	StatusLink       *StatusLink        `json:"statusLink,omitempty"`      
	TotalExecutions  *TotalExecutions   `json:"totalExecutions,omitempty"` 
	TriggeredAt      *TriggeredAt       `json:"triggeredAt,omitempty"`     
}

type ClientMutationID9 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type DownloadLink struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ErrorMessage struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ExpiresAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type RequestID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type StatusClass struct {
	Arguments map[string]interface{}  `json:"arguments,omitempty"`
	Return    *ExportExecutionsStatus `json:"return,omitempty"`   
}

type StatusLink struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type TotalExecutions struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type TriggeredAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

// Removes Git Sync Configuration associated with an application. Returns updated
// application.
type RemoveApplicationGitSyncConfig struct {
	Arguments *RemoveApplicationGitSyncConfigArguments `json:"arguments,omitempty"`
	Return    *RemoveApplicationGitSyncConfigPayload   `json:"return,omitempty"`   
}

type RemoveApplicationGitSyncConfigArguments struct {
	Input RemoveApplicationGitSyncConfigInput `json:"input"`
}

type RemoveApplicationGitSyncConfigInput struct {
	ApplicationID    string  `json:"applicationId"`             
	ClientMutationID *string `json:"clientMutationId,omitempty"`
}

type RemoveApplicationGitSyncConfigPayload struct {
	Application      *FluffyApplication  `json:"application,omitempty"`     
	ClientMutationID *ClientMutationID10 `json:"clientMutationId,omitempty"`
}

type FluffyApplication struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *Application           `json:"return,omitempty"`   
}

type ClientMutationID10 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type RemoveUserFromUserGroup struct {
	Arguments *RemoveUserFromUserGroupArguments `json:"arguments,omitempty"`
	Return    *RemoveUserFromUserGroupPayload   `json:"return,omitempty"`   
}

type RemoveUserFromUserGroupArguments struct {
	Input RemoveUserFromUserGroupInput `json:"input"`
}

type RemoveUserFromUserGroupInput struct {
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	UserGroupID      string  `json:"userGroupId"`               
	UserID           string  `json:"userId"`                    
}

type RemoveUserFromUserGroupPayload struct {
	ClientMutationID *ClientMutationID11 `json:"clientMutationId,omitempty"`
	UserGroup        *IndigoUserGroup    `json:"userGroup,omitempty"`       
}

type ClientMutationID11 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type IndigoUserGroup struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *UserGroup             `json:"return,omitempty"`   
}

// Resume a unsuccessful pipeline. Any stage which was started (both
// successful/unseccessful) can be given
// to resume. Pipeline is resumed in block of parallel groups. i.e if given stage has
// parallel stages all will be
// restarted.
type ResumeExecution struct {
	Arguments *ResumeExecutionArguments `json:"arguments,omitempty"`
	Return    *ResumeExecutionPayload   `json:"return,omitempty"`   
}

type ResumeExecutionArguments struct {
	Input *ResumeExecutionInput `json:"input,omitempty"`
}

type ResumeExecutionInput struct {
	ApplicationID       string  `json:"applicationId"`             
	ClientMutationID    *string `json:"clientMutationId,omitempty"`
	PipelineExecutionID string  `json:"pipelineExecutionId"`       
	PipelineStageName   string  `json:"pipelineStageName"`         // Name of the stage to be resumed. i.e "Stage 1"
}

type ResumeExecutionPayload struct {
	ClientMutationID *ClientMutationID12 `json:"clientMutationId,omitempty"`
	Execution        *PurpleExecution    `json:"execution,omitempty"`       
}

type ClientMutationID12 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PurpleExecution struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

// Beta: Trigger a Workflow/Pipeline Execution.
type StartExecution struct {
	Arguments *StartExecutionArguments `json:"arguments,omitempty"`
	Return    *StartExecutionPayload   `json:"return,omitempty"`   
}

type StartExecutionArguments struct {
	Input StartExecutionInput `json:"input"`
}

type StartExecutionInput struct {
	ApplicationID                string           `json:"applicationId"`                         // Application identifier of a Workflow or Pipeline
	ClientMutationID             *string          `json:"clientMutationId,omitempty"`            
	ContinueWithDefaultValues    *bool            `json:"continueWithDefaultValues,omitempty"`   // Beta: Continue with default values in case of pipelines with runtime variables
	EntityID                     string           `json:"entityId"`                              // Entity identifier of a Workflow or Pipeline
	ExcludeHostsWithSameArtifact *bool            `json:"excludeHostsWithSameArtifact,omitempty"`// Skip deployment on the host, if the same artifact is already deployed
	ExecutionType                ExecutionType    `json:"executionType"`                         // Workflow or Pipeline
	Notes                        *string          `json:"notes,omitempty"`                       // Execution notes
	ServiceInputs                []*ServiceInput  `json:"serviceInputs,omitempty"`               // Service inputs required for the execution
	SpecificHosts                []*string        `json:"specificHosts,omitempty"`               // List of hostnames, if targeted to a specific host
	TargetToSpecificHosts        *bool            `json:"targetToSpecificHosts,omitempty"`       // Set to true if the deployment target is specific hosts. Provide specificHosts field along; with this.
	VariableInputs               []*VariableInput `json:"variableInputs,omitempty"`              // Variable inputs required for the executio
}

type ServiceInput struct {
	ArtifactValueInput *ArtfifactValueInput `json:"artifactValueInput,omitempty"`// artifact inputs fot the service
	Name               string               `json:"name"`                        // name of the service providing input for
}

// artifact inputs fot the service
type ArtfifactValueInput struct {
	ArtifactID                  *ArtifactIDInput                  `json:"artifactId,omitempty"`                 // artifact Id input if value type is ARTIFACT_ID
	BuildNumber                 *BuildNumberInput                 `json:"buildNumber,omitempty"`                // Build number input if value type is BUILD_NUMBER
	ParameterizedArtifactSource *ParameterizedArtifactSourceInput `json:"parameterizedArtifactSource,omitempty"`// Parameterized artifact source input if value type is PARAMETERIZED_ARTIFACT_SOURCE
	ValueType                   ArtifactInputType                 `json:"valueType"`                            // type of the artifactValue: Build number, artifactId or parameterized artifact source
}

// artifact Id input if value type is ARTIFACT_ID
type ArtifactIDInput struct {
	ArtifactID string `json:"artifactId"`// artifactId
}

// Build number input if value type is BUILD_NUMBER
type BuildNumberInput struct {
	ArtifactSourceName string `json:"artifactSourceName"`// name of the artifact source to which the specified build number comes from
	BuildNumber        string `json:"buildNumber"`       // build number to deploy
}

// Parameterized artifact source input if value type is PARAMETERIZED_ARTIFACT_SOURCE
type ParameterizedArtifactSourceInput struct {
	ArtifactSourceName   string                 `json:"artifactSourceName"`            // name of the artifact source to which the specified build number comes from
	BuildNumber          string                 `json:"buildNumber"`                   // build number to deploy
	ParameterValueInputs []*ParameterValueInput `json:"parameterValueInputs,omitempty"`// parameters and their runtime values
}

type ParameterValueInput struct {
	Name  string `json:"name"` // parameter name
	Value string `json:"value"`// runtime value for parameter
}

type StartExecutionPayload struct {
	ClientMutationID *ClientMutationID13 `json:"clientMutationId,omitempty"`
	Execution        *FluffyExecution    `json:"execution,omitempty"`       
	WarningMessage   *WarningMessage     `json:"warningMessage,omitempty"`  // Get This field to know if there are any Warnings/Messages but the execution can be; started successfully. For Example in case of user providing extra inputs.
}

type ClientMutationID13 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type FluffyExecution struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

// Get This field to know if there are any Warnings/Messages but the execution can be
// started successfully. For Example in case of user providing extra inputs.
type WarningMessage struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Updates an application and returns it.
type UpdateApplication struct {
	Arguments *UpdateApplicationArguments `json:"arguments,omitempty"`
	Return    *UpdateApplicationPayload   `json:"return,omitempty"`   
}

type UpdateApplicationArguments struct {
	Input UpdateApplicationInput `json:"input"`
}

type UpdateApplicationInput struct {
	ApplicationID             string  `json:"applicationId"`                      
	ClientMutationID          *string `json:"clientMutationId,omitempty"`         
	Description               *string `json:"description,omitempty"`              
	IsManualTriggerAuthorized *bool   `json:"isManualTriggerAuthorized,omitempty"`// Beta: When this is set to true, all manual triggers will require API Key authorization.; Doc link:; https://docs.harness.io/article/mc2lxsas4c-trigger-a-deployment-using-c-url#option_enforce_api_keys_for_manual_triggers
	Name                      *string `json:"name,omitempty"`                     
}

type UpdateApplicationPayload struct {
	Application      *TentacledApplication `json:"application,omitempty"`     
	ClientMutationID *ClientMutationID14   `json:"clientMutationId,omitempty"`
}

type TentacledApplication struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *Application           `json:"return,omitempty"`   
}

type ClientMutationID14 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Updates  Application Git Sync Configuration. Creates the configuration, in case it does
// not exist. Returns updated git sync configuration.
type UpdateApplicationGitSyncConfig struct {
	Arguments *UpdateApplicationGitSyncConfigArguments `json:"arguments,omitempty"`
	Return    *UpdateApplicationGitSyncConfigPayload   `json:"return,omitempty"`   
}

type UpdateApplicationGitSyncConfigArguments struct {
	Input UpdateApplicationGitSyncConfigInput `json:"input"`
}

type UpdateApplicationGitSyncConfigInput struct {
	ApplicationID    string  `json:"applicationId"`             
	Branch           string  `json:"branch"`                    
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	GitConnectorID   string  `json:"gitConnectorId"`            
	RepositoryName   *string `json:"repositoryName,omitempty"`  // Specify the repository name. If your Harness Source Repo Provider uses the Git Account; type, provide the Repo Name to use from that account.
	SyncEnabled      bool    `json:"syncEnabled"`               
}

type UpdateApplicationGitSyncConfigPayload struct {
	ClientMutationID *ClientMutationID15  `json:"clientMutationId,omitempty"`
	GitSyncConfig    *PurpleGitSyncConfig `json:"gitSyncConfig,omitempty"`   
}

type ClientMutationID15 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PurpleGitSyncConfig struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *GitSyncConfig         `json:"return,omitempty"`   
}

// Enable/disable Git Sync for an application. Returns updated application.
type UpdateApplicationGitSyncConfigStatus struct {
	Arguments *UpdateApplicationGitSyncConfigStatusArguments `json:"arguments,omitempty"`
	Return    *UpdateApplicationGitSyncConfigStatusPayload   `json:"return,omitempty"`   
}

type UpdateApplicationGitSyncConfigStatusArguments struct {
	Input UpdateApplicationGitSyncConfigStatusInput `json:"input"`
}

type UpdateApplicationGitSyncConfigStatusInput struct {
	ApplicationID    string  `json:"applicationId"`             
	ClientMutationID *string `json:"clientMutationId,omitempty"`
	SyncEnabled      bool    `json:"syncEnabled"`               
}

type UpdateApplicationGitSyncConfigStatusPayload struct {
	ClientMutationID *ClientMutationID16  `json:"clientMutationId,omitempty"`
	GitSyncConfig    *FluffyGitSyncConfig `json:"gitSyncConfig,omitempty"`   
}

type ClientMutationID16 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type FluffyGitSyncConfig struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *GitSyncConfig         `json:"return,omitempty"`   
}

// Beta
type UpdateCloudProvider struct {
	Arguments *UpdateCloudProviderArguments `json:"arguments,omitempty"`
	Return    *UpdateCloudProviderPayload   `json:"return,omitempty"`   
}

type UpdateCloudProviderArguments struct {
	Input UpdateCloudProviderInput `json:"input"`
}

type UpdateCloudProviderInput struct {
	AwsCloudProvider                *UpdateAwsCloudProviderInput                `json:"awsCloudProvider,omitempty"`               
	AzureCloudProvider              *UpdateAzureCloudProviderInput              `json:"azureCloudProvider,omitempty"`             
	ClientMutationID                *string                                     `json:"clientMutationId,omitempty"`               
	CloudProviderID                 string                                      `json:"cloudProviderId"`                          
	CloudProviderType               CloudProviderType                           `json:"cloudProviderType"`                        
	GcpCloudProvider                *UpdateGcpCloudProviderInput                `json:"gcpCloudProvider,omitempty"`               
	K8SCloudProvider                *UpdateK8SCloudProviderInput                `json:"k8sCloudProvider,omitempty"`               
	PcfCloudProvider                *UpdatePcfCloudProviderInput                `json:"pcfCloudProvider,omitempty"`               
	PhysicalDataCenterCloudProvider *UpdatePhysicalDataCenterCloudProviderInput `json:"physicalDataCenterCloudProvider,omitempty"`
	SpotInstCloudProvider           *UpdateSpotInstCloudProviderInput           `json:"spotInstCloudProvider,omitempty"`          
}

type UpdateAwsCloudProviderInput struct {
	CredentialsType        *AwsCredentialsType              `json:"credentialsType,omitempty"`       
	CrossAccountAttributes *UpdateAwsCrossAccountAttributes `json:"crossAccountAttributes,omitempty"`
	DefaultRegion          *string                          `json:"defaultRegion,omitempty"`         
	Ec2IamCredentials      *UpdateEc2IamCredentials         `json:"ec2IamCredentials,omitempty"`     
	ManualCredentials      *UpdateAwsManualCredentials      `json:"manualCredentials,omitempty"`     
	Name                   *string                          `json:"name,omitempty"`                  
}

type UpdateAwsCrossAccountAttributes struct {
	AssumeCrossAccountRole *bool   `json:"assumeCrossAccountRole,omitempty"`
	CrossAccountRoleArn    *string `json:"crossAccountRoleArn,omitempty"`   
	ExternalID             *string `json:"externalId,omitempty"`            
}

type UpdateEc2IamCredentials struct {
	DelegateSelector *string          `json:"delegateSelector,omitempty"`
	UsageScope       *UsageScopeInput `json:"usageScope,omitempty"`      
}

type UpdateAwsManualCredentials struct {
	AccessKey         *string `json:"accessKey,omitempty"`        
	AccessKeySecretID *string `json:"accessKeySecretId,omitempty"`
	SecretKeySecretID *string `json:"secretKeySecretId,omitempty"`
}

type UpdateAzureCloudProviderInput struct {
	ClientID    *string `json:"clientId,omitempty"`   
	KeySecretID *string `json:"keySecretId,omitempty"`
	Name        *string `json:"name,omitempty"`       
	TenantID    *string `json:"tenantId,omitempty"`   
}

type UpdateGcpCloudProviderInput struct {
	DelegateSelector          *string  `json:"delegateSelector,omitempty"`         
	DelegateSelectors         []string `json:"delegateSelectors,omitempty"`        
	Name                      *string  `json:"name,omitempty"`                     
	ServiceAccountKeySecretID *string  `json:"serviceAccountKeySecretId,omitempty"`
	SkipValidation            *bool    `json:"skipValidation,omitempty"`           
	UseDelegate               *bool    `json:"useDelegate,omitempty"`              
	UseDelegateSelectors      *bool    `json:"useDelegateSelectors,omitempty"`     
}

type UpdateK8SCloudProviderInput struct {
	ClusterDetailsType    *ClusterDetailsType          `json:"clusterDetailsType,omitempty"`   
	InheritClusterDetails *UpdateInheritClusterDetails `json:"inheritClusterDetails,omitempty"`
	ManualClusterDetails  *UpdateManualClusterDetails  `json:"manualClusterDetails,omitempty"` 
	Name                  *string                      `json:"name,omitempty"`                 
	SkipValidation        *bool                        `json:"skipValidation,omitempty"`       
}

type UpdateInheritClusterDetails struct {
	DelegateName      *string          `json:"delegateName,omitempty"`     
	DelegateSelectors []string         `json:"delegateSelectors,omitempty"`
	UsageScope        *UsageScopeInput `json:"usageScope,omitempty"`       
}

type UpdateManualClusterDetails struct {
	MasterURL           *string                                  `json:"masterUrl,omitempty"`          
	None                *UpdateNone                              `json:"none,omitempty"`               
	OidcToken           *UpdateOIDCToken                         `json:"oidcToken,omitempty"`          
	ServiceAccountToken *UpdateServiceAccountToken               `json:"serviceAccountToken,omitempty"`
	Type                *ManualClusterDetailsAuthenticationType  `json:"type,omitempty"`               
	UsernameAndPassword *UpdateUsernameAndPasswordAuthentication `json:"usernameAndPassword,omitempty"`
}

type UpdateNone struct {
	CACertificateSecretID       *string          `json:"caCertificateSecretId,omitempty"`      
	ClientCertificateSecretID   *string          `json:"clientCertificateSecretId,omitempty"`  
	ClientKeyAlgorithm          *string          `json:"clientKeyAlgorithm,omitempty"`         
	ClientKeyPassphraseSecretID *string          `json:"clientKeyPassphraseSecretId,omitempty"`
	ClientKeySecretID           *string          `json:"clientKeySecretId,omitempty"`          
	PasswordSecretID            *string          `json:"passwordSecretId,omitempty"`           
	ServiceAccountTokenSecretID *string          `json:"serviceAccountTokenSecretId,omitempty"`
	UsageScope                  *UsageScopeInput `json:"usageScope,omitempty"`                 
	UserName                    *string          `json:"userName,omitempty"`                   
}

type UpdateOIDCToken struct {
	ClientIDSecretID     *string `json:"clientIdSecretId,omitempty"`    
	ClientSecretSecretID *string `json:"clientSecretSecretId,omitempty"`
	IdentityProviderURL  *string `json:"identityProviderUrl,omitempty"` 
	PasswordSecretID     *string `json:"passwordSecretId,omitempty"`    
	Scopes               *string `json:"scopes,omitempty"`              
	UserName             *string `json:"userName,omitempty"`            
}

type UpdateServiceAccountToken struct {
	ServiceAccountTokenSecretID *string `json:"serviceAccountTokenSecretId,omitempty"`
}

type UpdateUsernameAndPasswordAuthentication struct {
	PasswordSecretID *string `json:"passwordSecretId,omitempty"`
	UserName         *string `json:"userName,omitempty"`        
	UserNameSecretID *string `json:"userNameSecretId,omitempty"`
}

type UpdatePcfCloudProviderInput struct {
	EndpointURL      *string `json:"endpointUrl,omitempty"`     
	Name             *string `json:"name,omitempty"`            
	PasswordSecretID *string `json:"passwordSecretId,omitempty"`
	SkipValidation   *bool   `json:"skipValidation,omitempty"`  
	UserName         *string `json:"userName,omitempty"`        
	UserNameSecretID *string `json:"userNameSecretId,omitempty"`
}

type UpdatePhysicalDataCenterCloudProviderInput struct {
	Name       *string          `json:"name,omitempty"`      
	UsageScope *UsageScopeInput `json:"usageScope,omitempty"`
}

type UpdateSpotInstCloudProviderInput struct {
	AccountID     *string `json:"accountId,omitempty"`    
	Name          *string `json:"name,omitempty"`         
	TokenSecretID *string `json:"tokenSecretId,omitempty"`
}

type UpdateCloudProviderPayload struct {
	ClientMutationID *ClientMutationID17  `json:"clientMutationId,omitempty"`
	CloudProvider    *FluffyCloudProvider `json:"cloudProvider,omitempty"`   
}

type ClientMutationID17 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type FluffyCloudProvider struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

// Updates a Connector and returns it.
type UpdateConnector struct {
	Arguments *UpdateConnectorArguments `json:"arguments,omitempty"`
	Return    *UpdateConnectorPayload   `json:"return,omitempty"`   
}

type UpdateConnectorArguments struct {
	Input UpdateConnectorInput `json:"input"`
}

type UpdateConnectorInput struct {
	ClientMutationID *string                  `json:"clientMutationId,omitempty"`
	ConnectorID      string                   `json:"connectorId"`               
	ConnectorType    ConnectorType            `json:"connectorType"`             
	DockerConnector  *DockerConnectorInput    `json:"dockerConnector,omitempty"` 
	GitConnector     *UpdateGitConnectorInput `json:"gitConnector,omitempty"`    
	HelmConnector    *HelmConnectorInput      `json:"helmConnector,omitempty"`   
	NexusConnector   *NexusConnectorInput     `json:"nexusConnector,omitempty"`  
}

type UpdateGitConnectorInput struct {
	Branch              *string                   `json:"branch,omitempty"`             
	CustomCommitDetails *CustomCommitDetailsInput `json:"customCommitDetails,omitempty"`
	DelegateSelectors   []string                  `json:"delegateSelectors,omitempty"`  
	GenerateWebhookURL  *bool                     `json:"generateWebhookUrl,omitempty"` 
	Name                *string                   `json:"name,omitempty"`               
	PasswordSecretID    *string                   `json:"passwordSecretId,omitempty"`   
	SSHSettingID        *string                   `json:"sshSettingId,omitempty"`       
	URL                 *string                   `json:"URL,omitempty"`                
	UsageScope          *UsageScopeInput          `json:"usageScope,omitempty"`         
	UserName            *string                   `json:"userName,omitempty"`           
}

type UpdateConnectorPayload struct {
	ClientMutationID *ClientMutationID18 `json:"clientMutationId,omitempty"`
	Connector        *FluffyConnector    `json:"connector,omitempty"`       
}

type ClientMutationID18 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type FluffyConnector struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

// Beta: Update a secret.
type UpdateSecret struct {
	Arguments *UpdateSecretArguments `json:"arguments,omitempty"`
	Return    *UpdateSecretPayload   `json:"return,omitempty"`   
}

type UpdateSecretArguments struct {
	Input UpdateSecretInput `json:"input"`
}

type UpdateSecretInput struct {
	ClientMutationID *string                `json:"clientMutationId,omitempty"`
	EncryptedText    *UpdateEncryptedText   `json:"encryptedText,omitempty"`   
	SecretID         string                 `json:"secretId"`                  
	SecretType       SecretType             `json:"secretType"`                
	SSHCredential    *UpdateSSHCredential   `json:"sshCredential,omitempty"`   
	WinRMCredential  *UpdateWinRMCredential `json:"winRMCredential,omitempty"` 
}

type UpdateEncryptedText struct {
	InheritScopesFromSM *bool            `json:"inheritScopesFromSM,omitempty"`
	Name                *string          `json:"name,omitempty"`               
	ScopedToAccount     *bool            `json:"scopedToAccount,omitempty"`    
	SecretReference     *string          `json:"secretReference,omitempty"`    
	UsageScope          *UsageScopeInput `json:"usageScope,omitempty"`         
	Value               *string          `json:"value,omitempty"`              
}

type UpdateSSHCredential struct {
	AuthenticationScheme   *SSHAuthenticationScheme     `json:"authenticationScheme,omitempty"`  
	KerberosAuthentication *KerberosAuthenticationInput `json:"kerberosAuthentication,omitempty"`
	Name                   *string                      `json:"name,omitempty"`                  
	SSHAuthentication      *SSHAuthenticationInput      `json:"sshAuthentication,omitempty"`     
	UsageScope             *UsageScopeInput             `json:"usageScope,omitempty"`            
}

type UpdateWinRMCredential struct {
	AuthenticationScheme *WinRMAuthenticationScheme `json:"authenticationScheme,omitempty"`
	Domain               *string                    `json:"domain,omitempty"`              
	Name                 *string                    `json:"name,omitempty"`                
	PasswordSecretID     *string                    `json:"passwordSecretId,omitempty"`    
	Port                 *float64                   `json:"port,omitempty"`                
	SkipCERTCheck        *bool                      `json:"skipCertCheck,omitempty"`       
	UsageScope           *UsageScopeInput           `json:"usageScope,omitempty"`          
	UserName             *string                    `json:"userName,omitempty"`            
	UseSSL               *bool                      `json:"useSSL,omitempty"`              
}

type UpdateSecretPayload struct {
	ClientMutationID *ClientMutationID19 `json:"clientMutationId,omitempty"`
	Secret           *FluffySecret       `json:"secret,omitempty"`          
}

type ClientMutationID19 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type FluffySecret struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

// Update secret manager
type UpdateSecretManager struct {
	Arguments *UpdateSecretManagerArguments `json:"arguments,omitempty"`
	Return    *UpsertSecretManagerPayload   `json:"return,omitempty"`   
}

type UpdateSecretManagerArguments struct {
	Input UpdateSecretManagerInput `json:"input"`
}

type UpdateSecretManagerInput struct {
	ClientMutationID          *string                    `json:"clientMutationId,omitempty"`         
	HashicorpVaultConfigInput *UpdateHashicorpVaultInput `json:"hashicorpVaultConfigInput,omitempty"`
	SecretManagerID           string                     `json:"secretManagerId"`                    
	SecretManagerType         SecretManagerType          `json:"secretManagerType"`                  
}

type UpdateHashicorpVaultInput struct {
	AuthDetails                 *HashicorpVaultAuthDetails `json:"authDetails,omitempty"`                
	IsDefault                   *bool                      `json:"isDefault,omitempty"`                  
	IsReadOnly                  *bool                      `json:"isReadOnly,omitempty"`                 
	Name                        *string                    `json:"name,omitempty"`                       
	SecretEngineRenewalInterval map[string]interface{}     `json:"secretEngineRenewalInterval,omitempty"`
	UsageScope                  *UsageScopeInput           `json:"usageScope,omitempty"`                 
}

// Updates a Trigger and returns it.
type UpdateTrigger struct {
	Arguments *UpdateTriggerArguments `json:"arguments,omitempty"`
	Return    *UpdateTriggerPayload   `json:"return,omitempty"`   
}

type UpdateTriggerArguments struct {
	Input UpdateTriggerInput `json:"input"`
}

type UpdateTriggerInput struct {
	Action           TriggerActionInput    `json:"action"`                    // Action performed on trigger execute: Workflow/Pipeline execution
	ApplicationID    string                `json:"applicationId"`             // Application Id
	ClientMutationID *string               `json:"clientMutationId,omitempty"`
	Condition        TriggerConditionInput `json:"condition"`                 // Condition of which Trigger will execute
	Description      *string               `json:"description,omitempty"`     // Description of the Trigger
	Name             string                `json:"name"`                      // Name of the Trigger
	TriggerID        string                `json:"triggerId"`                 // Id of Trigger to be updated
}

type UpdateTriggerPayload struct {
	ClientMutationID *ClientMutationID20 `json:"clientMutationId,omitempty"`
	Trigger          *FluffyTrigger      `json:"trigger,omitempty"`         
}

type ClientMutationID20 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type FluffyTrigger struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *Trigger               `json:"return,omitempty"`   
}

type UpdateUser struct {
	Arguments *UpdateUserArguments `json:"arguments,omitempty"`
	Return    *UpdateUserPayload   `json:"return,omitempty"`   
}

type UpdateUserArguments struct {
	Input UpdateUserInput `json:"input"`
}

type UpdateUserInput struct {
	ClientMutationID *string  `json:"clientMutationId,omitempty"`
	ID               string   `json:"id"`                        
	Name             *string  `json:"name,omitempty"`            
	UserGroupIDS     []string `json:"userGroupIds,omitempty"`    
}

type UpdateUserPayload struct {
	ClientMutationID *ClientMutationID21 `json:"clientMutationId,omitempty"`
	User             *FluffyUser         `json:"user,omitempty"`            
}

type ClientMutationID21 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type FluffyUser struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *User                  `json:"return,omitempty"`   
}

type UpdateUserGroup struct {
	Arguments *UpdateUserGroupArguments `json:"arguments,omitempty"`
	Return    *UpdateUserGroupPayload   `json:"return,omitempty"`   
}

type UpdateUserGroupArguments struct {
	Input UpdateUserGroupInput `json:"input"`
}

type UpdateUserGroupInput struct {
	ClientMutationID     *string                    `json:"clientMutationId,omitempty"`    
	Description          *string                    `json:"description,omitempty"`         
	Name                 *string                    `json:"name,omitempty"`                
	NotificationSettings *NotificationSettingsInput `json:"notificationSettings,omitempty"`
	Permissions          *Permissions               `json:"permissions,omitempty"`         
	SsoSetting           *SSOSettingInput           `json:"ssoSetting,omitempty"`          
	UserGroupID          string                     `json:"userGroupId"`                   
	UserIDS              []*string                  `json:"userIds,omitempty"`             
}

type UpdateUserGroupPayload struct {
	ClientMutationID *ClientMutationID22 `json:"clientMutationId,omitempty"`
	UserGroup        *IndecentUserGroup  `json:"userGroup,omitempty"`       
}

type ClientMutationID22 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type IndecentUserGroup struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *UserGroup             `json:"return,omitempty"`   
}

type UpdateUserGroupPermissions struct {
	Arguments *UpdateUserGroupPermissionsArguments `json:"arguments,omitempty"`
	Return    *UpdateUserGroupPermissionsPayload   `json:"return,omitempty"`   
}

type UpdateUserGroupPermissionsArguments struct {
	Input *UpdateUserGroupPermissionsInput `json:"input,omitempty"`
}

type UpdateUserGroupPermissionsInput struct {
	ClientMutationID *string     `json:"clientMutationId,omitempty"`
	Permissions      Permissions `json:"permissions"`               
	UserGroupID      string      `json:"userGroupId"`               
}

type UpdateUserGroupPermissionsPayload struct {
	ClientMutationID *ClientMutationID23 `json:"clientMutationId,omitempty"`
	Permissions      *ReturnPermissions  `json:"permissions,omitempty"`     
}

type ClientMutationID23 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ReturnPermissions struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PermissionsReturn     `json:"return,omitempty"`   
}

type Query struct {
	Application                    *QueryApplication               `json:"application,omitempty"`                   // Get details about a Harness Application
	ApplicationByName              *ApplicationByName              `json:"applicationByName,omitempty"`             // Fetch details about a Harness Application by it's name
	Applications                   *QueryApplications              `json:"applications,omitempty"`                  // Get details about Harness Applications.
	Artifact                       *ArtifactClass                  `json:"artifact,omitempty"`                      // Get details about an artifact.
	Artifacts                      *Artifacts                      `json:"artifacts,omitempty"`                     // Get details about one or multiple Artifacts.
	AuditChangeContent             *AuditChangeContent             `json:"auditChangeContent,omitempty"`            // Get difference in terms of YAML for a changeSet; (and a specific resource within the changeSet).This returns paginated data.
	Audits                         *Audits                         `json:"audits,omitempty"`                        // Get a list of changeSets.This returns paginated data.
	CeClusterBillingData           *CeClusterBillingDataClass      `json:"ceClusterBillingData,omitempty"`          // Beta: Cloud Cost Management export data apis
	CloudProvider                  *QueryCloudProvider             `json:"cloudProvider,omitempty"`                 // Get details about a Cloud Provider.
	CloudProviderByName            *CloudProviderByName            `json:"cloudProviderByName,omitempty"`           // Beta
	CloudProviders                 *CloudProviders                 `json:"cloudProviders,omitempty"`                // Get details about Cloud Providers.
	Connector                      *QueryConnector                 `json:"connector,omitempty"`                     // Get details about a Connector.
	Connectors                     *Connectors                     `json:"connectors,omitempty"`                    // Get details about Connectors.
	DeploymentStats                *DeploymentStats                `json:"deploymentStats,omitempty"`               // Get statistics about one or multiple deployments.
	Environment                    *QueryEnvironment               `json:"environment,omitempty"`                   // Get details about a Harness Environment.
	Environments                   *QueryEnvironments              `json:"environments,omitempty"`                  // Get details about one or multiple Harness Environments.
	Execution                      *QueryExecution                 `json:"execution,omitempty"`                     // Get the execution status of a Workflow.
	ExecutionInputs                *ExecutionInputs                `json:"executionInputs,omitempty"`               // Beta: Get required inputs to start an execution of a Workflow or Pipeline
	Executions                     *Executions                     `json:"executions,omitempty"`                    // Get a list of executions, with filtering options.
	InfrastructureDefinition       *InfrastructureDefinitionClass  `json:"infrastructureDefinition,omitempty"`      // Get details about an infrastructure using Id
	InfrastructureDefinitionByName *InfrastructureDefinitionByName `json:"infrastructureDefinitionByName,omitempty"`// Get details about an infrastructure using name
	InfrastructureDefinitions      *QueryInfrastructureDefinitions `json:"infrastructureDefinitions,omitempty"`     // Get infrastructures using filters
	Instances                      *Instances                      `json:"instances,omitempty"`                     // Get details about instances.
	K8SLabels                      *K8SLabels                      `json:"k8sLabels,omitempty"`                     // Get details about K8s labels.
	K8SWorkloadRecommendations     *K8SWorkloadRecommendations     `json:"k8sWorkloadRecommendations,omitempty"`    
	Pipeline                       *PipelineClass                  `json:"pipeline,omitempty"`                      // Get a Pipeline object by ID.
	PipelineByName                 *PipelineByName                 `json:"pipelineByName,omitempty"`                // Get a Pipeline object by ID.
	Pipelines                      *QueryPipelines                 `json:"pipelines,omitempty"`                     // Get details about one or multiple Pipelines.
	Secret                         *QuerySecret                    `json:"secret,omitempty"`                        // Beta: Get details about secret.
	SecretByName                   *SecretByName                   `json:"secretByName,omitempty"`                  // Beta: Get details about secret by name.
	SecretManager                  *QuerySecretManager             `json:"secretManager,omitempty"`                 // Beta: Get details about a Secret Manager.
	SecretManagerByName            *SecretManagerByName            `json:"secretManagerByName,omitempty"`           // Beta: Get Secret Manager by name.
	SecretManagers                 *SecretManagers                 `json:"secretManagers,omitempty"`                // Beta: List Secret Manager.
	Service                        *QueryService                   `json:"service,omitempty"`                       // Get details about a Harness Service.
	Services                       *QueryServices                  `json:"services,omitempty"`                      // Get a list of Harness Services, by applicationId. This returns paginated data.
	SsoProvider                    *SsoProvider                    `json:"ssoProvider,omitempty"`                   
	SsoProviders                   *SsoProviders                   `json:"ssoProviders,omitempty"`                  
	Tag                            *TagClass                       `json:"tag,omitempty"`                           // Get tag details using tag uuid
	TagByName                      *TagByName                      `json:"tagByName,omitempty"`                     // Get tag details using tag name
	Tags                           *QueryTags                      `json:"tags,omitempty"`                          // Get the list of tags. This returns paginated data.
	Trigger                        *QueryTrigger                   `json:"trigger,omitempty"`                       // Get details about a Trigger.
	TriggerByName                  *TriggerByName                  `json:"triggerByName,omitempty"`                 // Get details about a Trigger  by it's name
	Triggers                       *Triggers                       `json:"triggers,omitempty"`                      // Get a list of Harness Triggers, This returns paginated data.
	User                           *QueryUser                      `json:"user,omitempty"`                          // fetch a user by id
	UserByEmail                    *UserByEmail                    `json:"userByEmail,omitempty"`                   // fetch a user by email
	UserByName                     *UserByName                     `json:"userByName,omitempty"`                    // fetch a user by name
	UserGroup                      *QueryUserGroup                 `json:"userGroup,omitempty"`                     
	UserGroupByName                *UserGroupByName                `json:"userGroupByName,omitempty"`               
	UserGroups                     *QueryUserGroups                `json:"userGroups,omitempty"`                    
	Users                          *QueryUsers                     `json:"users,omitempty"`                         // fetch a list of users
	Workflow                       *WorkflowClass                  `json:"workflow,omitempty"`                      // Get a Workflow object by ID.
	WorkflowByName                 *WorkflowByName                 `json:"workflowByName,omitempty"`                // Fetch details about a  Workflow by it's name
	Workflows                      *QueryWorkflows                 `json:"workflows,omitempty"`                     // Get a list of Workflows, by applicationId. This returns paginated data.
}

// Get details about a Harness Application
type QueryApplication struct {
	Input  *ApplicationInput `json:"input,omitempty"` 
	Output *Application      `json:"output,omitempty"`
}

type ApplicationInput struct {
	ApplicationID string `json:"applicationId"`
}

// Fetch details about a Harness Application by it's name
type ApplicationByName struct {
	Input  *ApplicationByNameInput `json:"input,omitempty"` 
	Output *Application            `json:"output,omitempty"`
}

type ApplicationByNameInput struct {
	Name string `json:"name"`
}

// Get details about Harness Applications.
type QueryApplications struct {
	Input  *ApplicationsInput     `json:"input,omitempty"` 
	Output *ApplicationConnection `json:"output,omitempty"`
}

type ApplicationsInput struct {
	Filters []*ApplicationFilter `json:"filters,omitempty"`
	Limit   float64              `json:"limit"`            
	Offset  *float64             `json:"offset,omitempty"` 
}

type ApplicationFilter struct {
	Application *IDFilter             `json:"application,omitempty"`
	Tag         *ApplicationTagFilter `json:"tag,omitempty"`        
}

type ApplicationTagFilter struct {
	EntityType *TagType    `json:"entityType,omitempty"`
	Tags       []*TagInput `json:"tags,omitempty"`      
}

type ApplicationConnection struct {
	Nodes    *AmbitiousNodes    `json:"nodes,omitempty"`   
	PageInfo *AmbitiousPageInfo `json:"pageInfo,omitempty"`
}

type AmbitiousNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Application         `json:"return,omitempty"`   
}

type AmbitiousPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get details about an artifact.
type ArtifactClass struct {
	Input  *ArtifactInput `json:"input,omitempty"` 
	Output *Artifact      `json:"output,omitempty"`
}

type ArtifactInput struct {
	ArtifactID string `json:"artifactId"`
}

type Artifact struct {
	ArtifactSource *ArtifactSource  `json:"artifactSource,omitempty"`
	BuildNo        *BuildNo         `json:"buildNo,omitempty"`       // Build No
	CollectedAt    *CollectedAt     `json:"collectedAt,omitempty"`   // Collected At
	ID             *ArtifactIDClass `json:"id,omitempty"`            // Artifact ID
}

type ArtifactSource struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    interface{}            `json:"return"`             
}

// Build No
type BuildNo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Collected At
type CollectedAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

// Artifact ID
type ArtifactIDClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Get details about one or multiple Artifacts.
type Artifacts struct {
	Input  *ArtifactsInput     `json:"input,omitempty"` 
	Output *ArtifactConnection `json:"output,omitempty"`
}

type ArtifactsInput struct {
	Filters []*ArtifactFilter `json:"filters,omitempty"`
	Limit   float64           `json:"limit"`            
	Offset  *float64          `json:"offset,omitempty"` 
}

type ArtifactFilter struct {
	Artifact           *IDFilter `json:"artifact,omitempty"`          
	ArtifactSource     *IDFilter `json:"artifactSource,omitempty"`    
	ArtifactStreamType *IDFilter `json:"artifactStreamType,omitempty"`
}

type ArtifactConnection struct {
	Nodes    *CunningNodes    `json:"nodes,omitempty"`   
	PageInfo *CunningPageInfo `json:"pageInfo,omitempty"`
}

type CunningNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Artifact            `json:"return,omitempty"`   
}

type CunningPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get difference in terms of YAML for a changeSet
// (and a specific resource within the changeSet).This returns paginated data.
type AuditChangeContent struct {
	Input  *AuditChangeContentInput `json:"input,omitempty"` 
	Output *ChangeContentConnection `json:"output,omitempty"`
}

type AuditChangeContentInput struct {
	Filters []*ChangeContentFilter `json:"filters,omitempty"`
	Limit   float64                `json:"limit"`            
	Offset  *float64               `json:"offset,omitempty"` 
}

type ChangeContentFilter struct {
	ChangeSetID string  `json:"changeSetId"`         // Unique ID of a changeSet
	ResourceID  *string `json:"resourceId,omitempty"`// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
}

type ChangeContentConnection struct {
	Nodes    *MagentaNodes    `json:"nodes,omitempty"`   
	PageInfo *MagentaPageInfo `json:"pageInfo,omitempty"`
}

type MagentaNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*ChangeContent       `json:"return,omitempty"`   
}

type ChangeContent struct {
	ChangeSetID *ChangeSetID `json:"changeSetId,omitempty"`// Unique ID of a changeSet
	NewYAML     *NewYAML     `json:"newYaml,omitempty"`    // New YAML content after the changeSet got triggered
	NewYAMLPath *NewYAMLPath `json:"newYamlPath,omitempty"`// New YAML path after the changeSet got triggered
	OldYAML     *OldYAML     `json:"oldYaml,omitempty"`    // Old YAML content before the changeSet got triggered
	OldYAMLPath *OldYAMLPath `json:"oldYamlPath,omitempty"`// Old YAML path before the changeSet got triggered
	ResourceID  *ResourceID  `json:"resourceId,omitempty"` // Unique ID of a resource, e.g.Application, Environment
}

// Unique ID of a changeSet
type ChangeSetID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// New YAML content after the changeSet got triggered
type NewYAML struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// New YAML path after the changeSet got triggered
type NewYAMLPath struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Old YAML content before the changeSet got triggered
type OldYAML struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Old YAML path before the changeSet got triggered
type OldYAMLPath struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

// Unique ID of a resource, e.g.Application, Environment
type ResourceID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type MagentaPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get a list of changeSets.This returns paginated data.
type Audits struct {
	Input  *AuditsInput         `json:"input,omitempty"` 
	Output *ChangeSetConnection `json:"output,omitempty"`
}

type AuditsInput struct {
	Filters []*ChangeSetFilter `json:"filters,omitempty"`
	Limit   float64            `json:"limit"`            
	Offset  *float64           `json:"offset,omitempty"` 
}

type ChangeSetFilter struct {
	Time *TimeRangeFilter `json:"time,omitempty"`
}

// Filter by time
type TimeRangeFilter struct {
	Relative *RelativeTimeRange `json:"relative,omitempty"`// Filter for a relative time period
	Specific *TimeRange         `json:"specific,omitempty"`// Filter within a specific time range
}

// Filter for a relative time period
type RelativeTimeRange struct {
	NoOfUnits map[string]interface{} `json:"noOfUnits"`
	TimeUnit  TimeUnit               `json:"timeUnit"` 
}

// Filter within a specific time range
type TimeRange struct {
	From map[string]interface{} `json:"from"`        
	To   map[string]interface{} `json:"to,omitempty"`
}

type ChangeSetConnection struct {
	Nodes    *FriskyNodes    `json:"nodes,omitempty"`   
	PageInfo *FriskyPageInfo `json:"pageInfo,omitempty"`
}

type FriskyNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []interface{}          `json:"return,omitempty"`   
}

type FriskyPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Beta: Cloud Cost Management export data apis
type CeClusterBillingDataClass struct {
	Input  *CeClusterBillingDataInput `json:"input,omitempty"` 
	Output *OutputClass               `json:"output,omitempty"`
}

type CeClusterBillingDataInput struct {
	AggregateFunction []*CeAggregation `json:"aggregateFunction,omitempty"`
	Filters           []*CeFilter      `json:"filters,omitempty"`          
	GroupBy           []*CeGroupBy     `json:"groupBy,omitempty"`          
	Limit             *float64         `json:"limit,omitempty"`            
	Offset            *float64         `json:"offset,omitempty"`           
	Select            []*CeSelect      `json:"select,omitempty"`           
	SortCriteria      []*CeSort        `json:"sortCriteria,omitempty"`     
}

type CeAggregation struct {
	Cost        *CeCost                `json:"cost,omitempty"`       
	Function    *CeAggregationFunction `json:"function,omitempty"`   
	Utilization *CeUtilization         `json:"utilization,omitempty"`
}

type CeFilter struct {
	Application  *IDFilter      `json:"application,omitempty"` 
	Cluster      *IDFilter      `json:"cluster,omitempty"`     
	EcsService   *IDFilter      `json:"ecsService,omitempty"`  
	EndTime      *TimeFilter    `json:"endTime,omitempty"`     
	Environment  *IDFilter      `json:"environment,omitempty"` 
	InstanceType *IDFilter      `json:"instanceType,omitempty"`
	Label        *CeLabelFilter `json:"label,omitempty"`       
	LaunchType   *IDFilter      `json:"launchType,omitempty"`  
	Namespace    *IDFilter      `json:"namespace,omitempty"`   
	Node         *IDFilter      `json:"node,omitempty"`        
	Pod          *IDFilter      `json:"pod,omitempty"`         
	Service      *IDFilter      `json:"service,omitempty"`     
	StartTime    *TimeFilter    `json:"startTime,omitempty"`   
	Tag          *CeTagFilter   `json:"tag,omitempty"`         
	Task         *IDFilter      `json:"task,omitempty"`        
	Workload     *IDFilter      `json:"workload,omitempty"`    
}

type CeLabelFilter struct {
	Labels []*K8SLabelInput `json:"labels,omitempty"`
}

type K8SLabelInput struct {
	Name   *string   `json:"name,omitempty"`  
	Values []*string `json:"values,omitempty"`
}

type CeTagFilter struct {
	EntityType *CeTagType  `json:"entityType,omitempty"`
	Tags       []*TagInput `json:"tags,omitempty"`      
}

type CeGroupBy struct {
	Entity           *CeEntityGroupBy    `json:"entity,omitempty"`          
	LabelAggregation *CeLabelAggregation `json:"labelAggregation,omitempty"`
	TagAggregation   *CeTagAggregation   `json:"tagAggregation,omitempty"`  
	Time             *CeTimeAggregation  `json:"time,omitempty"`            
}

type CeLabelAggregation struct {
	Name *string `json:"name,omitempty"`
}

type CeTagAggregation struct {
	EntityType *CeTagType `json:"entityType,omitempty"`
	TagName    *string    `json:"tagName,omitempty"`   
}

type CeTimeAggregation struct {
	TimePeriod *TimeType `json:"timePeriod,omitempty"`
}

type CeSelect struct {
	Labels []*string `json:"labels,omitempty"`
}

type CeSort struct {
	Order    *SortOrder  `json:"order,omitempty"`   
	SortType *CeSortType `json:"sortType,omitempty"`
}

type OutputClass struct {
	Data *Data `json:"data,omitempty"`
}

type Data struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*BillingDataEntry    `json:"return,omitempty"`   
}

type BillingDataEntry struct {
	AvgCPUUtilization    *AvgCPUUtilization             `json:"avgCpuUtilization,omitempty"`   
	AvgMemoryUtilization *AvgMemoryUtilization          `json:"avgMemoryUtilization,omitempty"`
	Cluster              *ClusterClass                  `json:"cluster,omitempty"`             
	ClusterID            *BillingDataEntryClusterID     `json:"clusterId,omitempty"`           
	ClusterType          *ClusterType                   `json:"clusterType,omitempty"`         
	CPULimit             *BillingDataEntryCPULimit      `json:"cpuLimit,omitempty"`            
	CPURequest           *BillingDataEntryCPURequest    `json:"cpuRequest,omitempty"`          
	Ecs                  *EcsClass                      `json:"ecs,omitempty"`                 
	Harness              *BillingDataEntryHarness       `json:"harness,omitempty"`             
	IdleCost             *IdleCost                      `json:"idleCost,omitempty"`            
	InstanceType         *InstanceType                  `json:"instanceType,omitempty"`        
	K8S                  *K8S                           `json:"k8s,omitempty"`                 
	LabelName            *LabelName                     `json:"labelName,omitempty"`           
	LabelValue           *LabelValue                    `json:"labelValue,omitempty"`          
	MemoryLimit          *BillingDataEntryMemoryLimit   `json:"memoryLimit,omitempty"`         
	MemoryRequest        *BillingDataEntryMemoryRequest `json:"memoryRequest,omitempty"`       
	Region               *RegionClass                   `json:"region,omitempty"`              
	StartTime            *StartTime                     `json:"startTime,omitempty"`           
	SystemCost           *SystemCost                    `json:"systemCost,omitempty"`          
	TagName              *TagNameClass                  `json:"tagName,omitempty"`             
	TagValue             *TagValueClass                 `json:"tagValue,omitempty"`            
	TotalCost            *TotalCost                     `json:"totalCost,omitempty"`           
	UnallocatedCost      *UnallocatedCost               `json:"unallocatedCost,omitempty"`     
}

type AvgCPUUtilization struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type AvgMemoryUtilization struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type BillingDataEntryCPULimit struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type BillingDataEntryCPURequest struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type ClusterClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type BillingDataEntryClusterID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ClusterType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type EcsClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *CeEcsEntity           `json:"return,omitempty"`   
}

type CeEcsEntity struct {
	LaunchType *LaunchTypeClass `json:"launchType,omitempty"`
	Service    *PurpleService   `json:"service,omitempty"`   
	TaskID     *TaskID          `json:"taskId,omitempty"`    
}

type LaunchTypeClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PurpleService struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type TaskID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type BillingDataEntryHarness struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *CeHarnessEntity       `json:"return,omitempty"`   
}

type CeHarnessEntity struct {
	Application *StickyApplication `json:"application,omitempty"`
	Environment *ReturnEnvironment `json:"environment,omitempty"`
	Service     *FluffyService     `json:"service,omitempty"`    
}

type StickyApplication struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ReturnEnvironment struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type FluffyService struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type IdleCost struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type InstanceType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type K8S struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *CeK8SEntity           `json:"return,omitempty"`   
}

type CeK8SEntity struct {
	Namespace      *ReturnNamespace    `json:"namespace,omitempty"`     
	Node           *NodeClass          `json:"node,omitempty"`          
	Pod            *PodClass           `json:"pod,omitempty"`           
	SelectedLabels *SelectedLabels     `json:"selectedLabels,omitempty"`
	Workload       *WorkloadClass      `json:"workload,omitempty"`      
	WorkloadType   *ReturnWorkloadType `json:"workloadType,omitempty"`  
}

type ReturnNamespace struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type NodeClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PodClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type SelectedLabels struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*CeK8SLabels         `json:"return,omitempty"`   
}

type CeK8SLabels struct {
	Name  *CeK8SLabelsName  `json:"name,omitempty"` 
	Value *CeK8SLabelsValue `json:"value,omitempty"`
}

type CeK8SLabelsName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type CeK8SLabelsValue struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type WorkloadClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ReturnWorkloadType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type LabelName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type LabelValue struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type BillingDataEntryMemoryLimit struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type BillingDataEntryMemoryRequest struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type RegionClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type StartTime struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type SystemCost struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type TagNameClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type TagValueClass struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type TotalCost struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type UnallocatedCost struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

// Get details about a Cloud Provider.
type QueryCloudProvider struct {
	Input  *CloudProviderInput `json:"input,omitempty"`
	Output interface{}         `json:"output"`         
}

type CloudProviderInput struct {
	CloudProviderID string `json:"cloudProviderId"`
}

// Beta
type CloudProviderByName struct {
	Input  *CloudProviderByNameInput `json:"input,omitempty"`
	Output interface{}               `json:"output"`         
}

type CloudProviderByNameInput struct {
	Name string `json:"name"`
}

// Get details about Cloud Providers.
type CloudProviders struct {
	Input  *CloudProvidersInput     `json:"input,omitempty"` 
	Output *CloudProviderConnection `json:"output,omitempty"`
}

type CloudProvidersInput struct {
	Filters []*CloudProviderFilter `json:"filters,omitempty"`
	Limit   float64                `json:"limit"`            
	Offset  *float64               `json:"offset,omitempty"` 
}

type CloudProviderFilter struct {
	CloudProvider     *IDFilter                `json:"cloudProvider,omitempty"`    
	CloudProviderType *CloudProviderTypeFilter `json:"cloudProviderType,omitempty"`
	CreatedAt         *TimeFilter              `json:"createdAt,omitempty"`        
	IsCEEnabled       *CEEnabledFilter         `json:"isCEEnabled,omitempty"`      
}

type CloudProviderTypeFilter struct {
	Operator *Operator            `json:"operator,omitempty"`
	Values   []*CloudProviderType `json:"values,omitempty"`  
}

type CEEnabledFilter struct {
	Operator *Operator `json:"operator,omitempty"`
	Values   []*bool   `json:"values,omitempty"`  
}

type CloudProviderConnection struct {
	Nodes    *MischievousNodes    `json:"nodes,omitempty"`   
	PageInfo *MischievousPageInfo `json:"pageInfo,omitempty"`
}

type MischievousNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []interface{}          `json:"return,omitempty"`   
}

type MischievousPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get details about a Connector.
type QueryConnector struct {
	Input  *ConnectorInput `json:"input,omitempty"`
	Output interface{}     `json:"output"`         
}

type ConnectorInput struct {
	ConnectorID string `json:"connectorId"`
}

// Get details about Connectors.
type Connectors struct {
	Input  *ConnectorsInput     `json:"input,omitempty"` 
	Output *ConnectorConnection `json:"output,omitempty"`
}

type ConnectorsInput struct {
	Filters []*ConnectorFilter `json:"filters,omitempty"`
	Limit   float64            `json:"limit"`            
	Offset  *float64           `json:"offset,omitempty"` 
}

type ConnectorFilter struct {
	Connector     *IDFilter            `json:"connector,omitempty"`    
	ConnectorType *ConnectorTypeFilter `json:"connectorType,omitempty"`
	CreatedAt     *TimeFilter          `json:"createdAt,omitempty"`    
}

type ConnectorTypeFilter struct {
	Operator *Operator        `json:"operator,omitempty"`
	Values   []*ConnectorType `json:"values,omitempty"`  
}

type ConnectorConnection struct {
	Nodes    *BraggadociousNodes    `json:"nodes,omitempty"`   
	PageInfo *BraggadociousPageInfo `json:"pageInfo,omitempty"`
}

type BraggadociousNodes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []interface{}          `json:"return,omitempty"`   
}

type BraggadociousPageInfo struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get statistics about one or multiple deployments.
type DeploymentStats struct {
	Input  *DeploymentStatsInput `json:"input,omitempty"`
	Output interface{}           `json:"output"`         
}

type DeploymentStatsInput struct {
	AggregateFunction         *DeploymentAggregationFunction `json:"aggregateFunction,omitempty"`        
	Filters                   []*DeploymentFilter            `json:"filters,omitempty"`                  
	GroupBy                   []*DeploymentAggregation       `json:"groupBy,omitempty"`                  
	IncludeIndirectExecutions *bool                          `json:"includeIndirectExecutions,omitempty"`
	SortCriteria              []*DeploymentSortCriteria      `json:"sortCriteria,omitempty"`             
}

type DeploymentAggregationFunction struct {
	Count             *CountAggregateOperation    `json:"count,omitempty"`            
	Duration          *DurationAggregateOperation `json:"duration,omitempty"`         
	InstancesDeployed *CountAggregateOperation    `json:"instancesDeployed,omitempty"`
	RollbackDuration  *DurationAggregateOperation `json:"rollbackDuration,omitempty"` 
}

type DeploymentFilter struct {
	Application      *IDFilter              `json:"application,omitempty"`     
	CloudProvider    *IDFilter              `json:"cloudProvider,omitempty"`   
	Duration         *NumberFilter          `json:"duration,omitempty"`        
	EndTime          *TimeFilter            `json:"endTime,omitempty"`         
	Environment      *IDFilter              `json:"environment,omitempty"`     
	EnvironmentType  *EnvironmentTypeFilter `json:"environmentType,omitempty"` 
	Pipeline         *IDFilter              `json:"pipeline,omitempty"`        
	RollbackDuration *NumberFilter          `json:"rollbackDuration,omitempty"`
	Service          *IDFilter              `json:"service,omitempty"`         
	StartTime        *TimeFilter            `json:"startTime,omitempty"`       
	Status           *IDFilter              `json:"status,omitempty"`          
	Tag              *DeploymentTagFilter   `json:"tag,omitempty"`             
	Trigger          *IDFilter              `json:"trigger,omitempty"`         
	TriggeredBy      *IDFilter              `json:"triggeredBy,omitempty"`     
	Workflow         *IDFilter              `json:"workflow,omitempty"`        
}

type EnvironmentTypeFilter struct {
	Operator *Operator          `json:"operator,omitempty"`
	Values   []*EnvironmentType `json:"values,omitempty"`  
}

type DeploymentAggregation struct {
	EntityAggregation *DeploymentEntityAggregation `json:"entityAggregation,omitempty"`
	TagAggregation    *DeploymentTagAggregation    `json:"tagAggregation,omitempty"`   
	TimeAggregation   *TimeSeriesAggregation       `json:"timeAggregation,omitempty"`  
}

type DeploymentTagAggregation struct {
	EntityType *DeploymentTagType `json:"entityType,omitempty"`
	TagName    *string            `json:"tagName,omitempty"`   
}

type TimeSeriesAggregation struct {
	TimeAggregationType  *TimeType `json:"timeAggregationType,omitempty"` 
	TimeAggregationValue *float64  `json:"timeAggregationValue,omitempty"`
}

type DeploymentSortCriteria struct {
	SortOrder *SortOrder          `json:"sortOrder,omitempty"`
	SortType  *DeploymentSortType `json:"sortType,omitempty"` 
}

// Get details about a Harness Environment.
type QueryEnvironment struct {
	Input  *EnvironmentInput `json:"input,omitempty"` 
	Output *Environment      `json:"output,omitempty"`
}

type EnvironmentInput struct {
	EnvironmentID string `json:"environmentId"`
}

// Get details about one or multiple Harness Environments.
type QueryEnvironments struct {
	Input  *EnvironmentsInput     `json:"input,omitempty"` 
	Output *EnvironmentConnection `json:"output,omitempty"`
}

type EnvironmentsInput struct {
	Filters []*EnvironmentFilter `json:"filters,omitempty"`
	Limit   float64              `json:"limit"`            
	Offset  *float64             `json:"offset,omitempty"` 
}

type EnvironmentFilter struct {
	Application     *IDFilter              `json:"application,omitempty"`    
	Environment     *IDFilter              `json:"environment,omitempty"`    
	EnvironmentType *EnvironmentTypeFilter `json:"environmentType,omitempty"`
	Tag             *EnvironmentTagFilter  `json:"tag,omitempty"`            
}

type EnvironmentTagFilter struct {
	EntityType *TagType    `json:"entityType,omitempty"`
	Tags       []*TagInput `json:"tags,omitempty"`      
}

// Get the execution status of a Workflow.
type QueryExecution struct {
	Input  *ExecutionInput `json:"input,omitempty"`
	Output interface{}     `json:"output"`         
}

type ExecutionInput struct {
	ExecutionID string `json:"executionId"`
}

// Beta: Get required inputs to start an execution of a Workflow or Pipeline
type ExecutionInputs struct {
	Input  *ExecutionInputsInput  `json:"input,omitempty"` 
	Output *ExecutionInputsOutput `json:"output,omitempty"`
}

type ExecutionInputsInput struct {
	ApplicationID  string           `json:"applicationId"`           // Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this; information
	EntityID       string           `json:"entityId"`                // Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
	ExecutionType  ExecutionType    `json:"executionType"`           // Execution type: workflow/ pipeline
	VariableInputs []*VariableInput `json:"variableInputs,omitempty"`// Variable inputs if the Workflow or Pipeline is templatized. Provide the required variable; values to know about the required inputs
}

type ExecutionInputsOutput struct {
	ServiceInputs *ServiceInputs `json:"serviceInputs,omitempty"`// List of Services that need artifact input
}

// List of Services that need artifact input
type ServiceInputs struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Service             `json:"return,omitempty"`   
}

// Get a list of executions, with filtering options.
type Executions struct {
	Input  *ExecutionsInput     `json:"input,omitempty"` 
	Output *ExecutionConnection `json:"output,omitempty"`
}

type ExecutionsInput struct {
	Filters                   []*ExecutionFilter `json:"filters,omitempty"`                  
	IncludeIndirectExecutions *bool              `json:"includeIndirectExecutions,omitempty"`// Set this flag to true to include workflow executions along pipeline
	Limit                     float64            `json:"limit"`                              
	Offset                    *float64           `json:"offset,omitempty"`                   
}

type ExecutionFilter struct {
	Application         *IDFilter              `json:"application,omitempty"`        
	CloudProvider       *IDFilter              `json:"cloudProvider,omitempty"`      
	CreationTime        *TimeFilter            `json:"creationTime,omitempty"`       
	Duration            *NumberFilter          `json:"duration,omitempty"`           
	EndTime             *TimeFilter            `json:"endTime,omitempty"`            
	Environment         *IDFilter              `json:"environment,omitempty"`        
	EnvironmentType     *EnvironmentTypeFilter `json:"environmentType,omitempty"`    
	Execution           *IDFilter              `json:"execution,omitempty"`          
	Pipeline            *IDFilter              `json:"pipeline,omitempty"`           
	PipelineExecutionID *IDFilter              `json:"pipelineExecutionId,omitempty"`
	Service             *IDFilter              `json:"service,omitempty"`            
	StartTime           *TimeFilter            `json:"startTime,omitempty"`          
	Status              *IDFilter              `json:"status,omitempty"`             
	Tag                 *DeploymentTagFilter   `json:"tag,omitempty"`                
	Trigger             *IDFilter              `json:"trigger,omitempty"`            
	TriggeredBy         *IDFilter              `json:"triggeredBy,omitempty"`        
	Workflow            *IDFilter              `json:"workflow,omitempty"`           
}

type ExecutionConnection struct {
	Nodes    *Nodes1    `json:"nodes,omitempty"`   
	PageInfo *PageInfo1 `json:"pageInfo,omitempty"`
}

type Nodes1 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []interface{}          `json:"return,omitempty"`   
}

type PageInfo1 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get details about an infrastructure using Id
type InfrastructureDefinitionClass struct {
	Input  *InfrastructureDefinitionInput `json:"input,omitempty"` 
	Output *InfrastructureDefinition      `json:"output,omitempty"`
}

type InfrastructureDefinitionInput struct {
	InfrastructureID string `json:"infrastructureId"`
}

// Get details about an infrastructure using name
type InfrastructureDefinitionByName struct {
	Input  *InfrastructureDefinitionByNameInput `json:"input,omitempty"` 
	Output *InfrastructureDefinition            `json:"output,omitempty"`
}

type InfrastructureDefinitionByNameInput struct {
	EnvironmentID      string `json:"environmentId"`     
	InfrastructureName string `json:"infrastructureName"`
}

// Get infrastructures using filters
type QueryInfrastructureDefinitions struct {
	Input  *InfrastructureDefinitionsInput     `json:"input,omitempty"` 
	Output *InfrastructureDefinitionConnection `json:"output,omitempty"`
}

type InfrastructureDefinitionsInput struct {
	Filters []*InfrastructureDefinitionFilter `json:"filters,omitempty"`
	Limit   float64                           `json:"limit"`            
	Offset  *float64                          `json:"offset,omitempty"` 
}

// Get details about instances.
type Instances struct {
	Input  *InstancesInput     `json:"input,omitempty"` 
	Output *InstanceConnection `json:"output,omitempty"`
}

type InstancesInput struct {
	Filters []*InstanceFilter `json:"filters,omitempty"`
	Limit   float64           `json:"limit"`            
	Offset  *float64          `json:"offset,omitempty"` 
}

type InstanceFilter struct {
	Application   *IDFilter          `json:"application,omitempty"`  
	CloudProvider *IDFilter          `json:"cloudProvider,omitempty"`
	CreatedAt     *TimeFilter        `json:"createdAt,omitempty"`    
	Environment   *IDFilter          `json:"environment,omitempty"`  
	InstanceType  *InstanceTypeEnum  `json:"instanceType,omitempty"` 
	Service       *IDFilter          `json:"service,omitempty"`      
	Tag           *InstanceTagFilter `json:"tag,omitempty"`          
}

type InstanceTagFilter struct {
	EntityType *CeTagType  `json:"entityType,omitempty"`
	Tags       []*TagInput `json:"tags,omitempty"`      
}

type InstanceConnection struct {
	Nodes    *Nodes2    `json:"nodes,omitempty"`   
	PageInfo *PageInfo2 `json:"pageInfo,omitempty"`
}

type Nodes2 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []interface{}          `json:"return,omitempty"`   
}

type PageInfo2 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get details about K8s labels.
type K8SLabels struct {
	Input  *K8SLabelsInput     `json:"input,omitempty"` 
	Output *K8SLabelConnection `json:"output,omitempty"`
}

type K8SLabelsInput struct {
	Filters []*K8SLabelFilter `json:"filters,omitempty"`
	Limit   float64           `json:"limit"`            
	Offset  *float64          `json:"offset,omitempty"` 
}

type K8SLabelFilter struct {
	Cluster      *IDFilter   `json:"cluster,omitempty"`     
	EndTime      *TimeFilter `json:"endTime,omitempty"`     
	Namespace    *IDFilter   `json:"namespace,omitempty"`   
	StartTime    *TimeFilter `json:"startTime,omitempty"`   
	WorkloadName *IDFilter   `json:"workloadName,omitempty"`
}

type K8SLabelConnection struct {
	Nodes    *Nodes3    `json:"nodes,omitempty"`   
	PageInfo *PageInfo3 `json:"pageInfo,omitempty"`
}

type Nodes3 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*K8SLabel            `json:"return,omitempty"`   
}

type K8SLabel struct {
	Name   *K8SLabelName `json:"name,omitempty"`  
	Values *Values       `json:"values,omitempty"`
}

type K8SLabelName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type Values struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*string              `json:"return,omitempty"`   
}

type PageInfo3 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

type K8SWorkloadRecommendations struct {
	Input  *K8SWorkloadRecommendationsInput  `json:"input,omitempty"` 
	Output *WorkloadRecommendationConnection `json:"output,omitempty"`
}

type K8SWorkloadRecommendationsInput struct {
	Filters []*WorkloadFilter `json:"filters,omitempty"`
	Limit   float64           `json:"limit"`            
	Offset  *float64          `json:"offset,omitempty"` 
}

type WorkloadFilter struct {
	Cluster      *IDFilter `json:"cluster,omitempty"`     
	Namespace    *IDFilter `json:"namespace,omitempty"`   
	WorkloadName *IDFilter `json:"workloadName,omitempty"`
	WorkloadType *IDFilter `json:"workloadType,omitempty"`
}

type WorkloadRecommendationConnection struct {
	Nodes    *Nodes4    `json:"nodes,omitempty"`   
	PageInfo *PageInfo4 `json:"pageInfo,omitempty"`
}

type Nodes4 struct {
	Arguments map[string]interface{}    `json:"arguments,omitempty"`
	Return    []*WorkloadRecommendation `json:"return,omitempty"`   
}

type WorkloadRecommendation struct {
	ClusterID                *WorkloadRecommendationClusterID    `json:"clusterId,omitempty"`               
	ClusterName              *ClusterName                        `json:"clusterName,omitempty"`             
	ContainerRecommendations *ContainerRecommendations           `json:"containerRecommendations,omitempty"`
	EstimatedSavings         *EstimatedSavings                   `json:"estimatedSavings,omitempty"`        
	LastDayCost              *LastDayCost                        `json:"lastDayCost,omitempty"`             
	Namespace                *WorkloadRecommendationNamespace    `json:"namespace,omitempty"`               
	NumDays                  *WorkloadRecommendationNumDays      `json:"numDays,omitempty"`                 
	Preset                   *Preset                             `json:"preset,omitempty"`                  
	WorkloadName             *WorkloadName                       `json:"workloadName,omitempty"`            
	WorkloadType             *WorkloadRecommendationWorkloadType `json:"workloadType,omitempty"`            
}

type WorkloadRecommendationClusterID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ClusterName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ContainerRecommendations struct {
	Arguments map[string]interface{}     `json:"arguments,omitempty"`
	Return    []*ContainerRecommendation `json:"return,omitempty"`   
}

type ContainerRecommendation struct {
	Burstable         *Burstable                      `json:"burstable,omitempty"`        
	ContainerName     *ContainerName                  `json:"containerName,omitempty"`    
	Current           *Current                        `json:"current,omitempty"`          
	Guaranteed        *Guaranteed                     `json:"guaranteed,omitempty"`       
	NumDays           *ContainerRecommendationNumDays `json:"numDays,omitempty"`          
	P50               *P50                            `json:"p50,omitempty"`              
	P80               *P80                            `json:"p80,omitempty"`              
	P90               *P90                            `json:"p90,omitempty"`              
	P95               *P95                            `json:"p95,omitempty"`              
	P99               *P99                            `json:"p99,omitempty"`              
	Recommended       *Recommended                    `json:"recommended,omitempty"`      
	TotalSamplesCount *TotalSamplesCount              `json:"totalSamplesCount,omitempty"`
}

type Burstable struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *ResourceRequirements  `json:"return,omitempty"`   
}

type ResourceRequirements struct {
	Limits   *Limits   `json:"limits,omitempty"`  
	Requests *Requests `json:"requests,omitempty"`
	YAML     *YAML     `json:"yaml,omitempty"`    
}

type Limits struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*ResourceEntry       `json:"return,omitempty"`   
}

type ResourceEntry struct {
	Name     *ResourceEntryName `json:"name,omitempty"`    
	Quantity *Quantity          `json:"quantity,omitempty"`
}

type ResourceEntryName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type Quantity struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type Requests struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*ResourceEntry       `json:"return,omitempty"`   
}

type YAML struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type ContainerName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type Current struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *ResourceRequirements  `json:"return,omitempty"`   
}

type Guaranteed struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *ResourceRequirements  `json:"return,omitempty"`   
}

type ContainerRecommendationNumDays struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *float64               `json:"return,omitempty"`   
}

type P50 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *ResourceRequirements  `json:"return,omitempty"`   
}

type P80 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *ResourceRequirements  `json:"return,omitempty"`   
}

type P90 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *ResourceRequirements  `json:"return,omitempty"`   
}

type P95 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *ResourceRequirements  `json:"return,omitempty"`   
}

type P99 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *ResourceRequirements  `json:"return,omitempty"`   
}

type Recommended struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *ResourceRequirements  `json:"return,omitempty"`   
}

type TotalSamplesCount struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *float64               `json:"return,omitempty"`   
}

type EstimatedSavings struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type LastDayCost struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *LastDayCostReturn     `json:"return,omitempty"`   
}

type LastDayCostReturn struct {
	CPU    *CPU    `json:"cpu,omitempty"`   
	Info   *Info   `json:"info,omitempty"`  
	Memory *Memory `json:"memory,omitempty"`
}

type CPU struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type Info struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type Memory struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type WorkloadRecommendationNamespace struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type WorkloadRecommendationNumDays struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *float64               `json:"return,omitempty"`   
}

type Preset struct {
	Arguments map[string]interface{}           `json:"arguments,omitempty"`
	Return    *K8SWorkloadRecommendationPreset `json:"return,omitempty"`   
}

type K8SWorkloadRecommendationPreset struct {
	CPULimit         *ReturnCPULimit      `json:"cpuLimit,omitempty"`        
	CPURequest       *ReturnCPURequest    `json:"cpuRequest,omitempty"`      
	MemoryLimit      *ReturnMemoryLimit   `json:"memoryLimit,omitempty"`     
	MemoryRequest    *ReturnMemoryRequest `json:"memoryRequest,omitempty"`   
	MinCPUMilliCores *MinCPUMilliCores    `json:"minCpuMilliCores,omitempty"`
	MinMemoryBytes   *MinMemoryBytes      `json:"minMemoryBytes,omitempty"`  
	SafetyMargin     *SafetyMargin        `json:"safetyMargin,omitempty"`    
}

type ReturnCPULimit struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type ReturnCPURequest struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type ReturnMemoryLimit struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type ReturnMemoryRequest struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type MinCPUMilliCores struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type MinMemoryBytes struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type SafetyMargin struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type WorkloadName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type WorkloadRecommendationWorkloadType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type PageInfo4 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get a Pipeline object by ID.
type PipelineClass struct {
	Input  *PipelineInput `json:"input,omitempty"` 
	Output *Pipeline      `json:"output,omitempty"`
}

type PipelineInput struct {
	PipelineID string `json:"pipelineId"`
}

// Get a Pipeline object by ID.
type PipelineByName struct {
	Input  *PipelineByNameInput `json:"input,omitempty"` 
	Output *Pipeline            `json:"output,omitempty"`
}

type PipelineByNameInput struct {
	ApplicationID string `json:"applicationId"`
	PipelineName  string `json:"pipelineName"` 
}

// Get details about one or multiple Pipelines.
type QueryPipelines struct {
	Input  *PipelinesInput     `json:"input,omitempty"` 
	Output *PipelineConnection `json:"output,omitempty"`
}

type PipelinesInput struct {
	Filters []*PipelineFilter `json:"filters,omitempty"`
	Limit   float64           `json:"limit"`            
	Offset  *float64          `json:"offset,omitempty"` 
}

type PipelineFilter struct {
	Application *IDFilter          `json:"application,omitempty"`
	Pipeline    *IDFilter          `json:"pipeline,omitempty"`   
	Tag         *PipelineTagFilter `json:"tag,omitempty"`        
}

type PipelineTagFilter struct {
	EntityType *PipelineTagType `json:"entityType,omitempty"`
	Tags       []*TagInput      `json:"tags,omitempty"`      
}

// Beta: Get details about secret.
type QuerySecret struct {
	Input  *SecretInput `json:"input,omitempty"`
	Output interface{}  `json:"output"`         
}

type SecretInput struct {
	SecretID   string     `json:"secretId"`  
	SecretType SecretType `json:"secretType"`
}

// Beta: Get details about secret by name.
type SecretByName struct {
	Input  *SecretByNameInput `json:"input,omitempty"`
	Output interface{}        `json:"output"`         
}

type SecretByNameInput struct {
	Name       string     `json:"name"`      
	SecretType SecretType `json:"secretType"`
}

// Beta: Get details about a Secret Manager.
type QuerySecretManager struct {
	Input  *SecretManagerInput `json:"input,omitempty"` 
	Output *SecretManager      `json:"output,omitempty"`
}

type SecretManagerInput struct {
	SecretManagerID string `json:"secretManagerId"`
}

// Beta: Get Secret Manager by name.
type SecretManagerByName struct {
	Input  *SecretManagerByNameInput `json:"input,omitempty"` 
	Output *SecretManager            `json:"output,omitempty"`
}

type SecretManagerByNameInput struct {
	Name string `json:"name"`
}

// Beta: List Secret Manager.
type SecretManagers struct {
	Input  *SecretManagersInput     `json:"input,omitempty"` 
	Output *SecretManagerConnection `json:"output,omitempty"`
}

type SecretManagersInput struct {
	Filters []*SecretManagerFilter `json:"filters,omitempty"`
	Limit   float64                `json:"limit"`            
	Offset  *float64               `json:"offset,omitempty"` 
}

type SecretManagerFilter struct {
	SecretManager *IDFilter                `json:"secretManager,omitempty"`
	Type          *SecretManagerTypeFilter `json:"type,omitempty"`         
}

type SecretManagerTypeFilter struct {
	Operator *Operator            `json:"operator,omitempty"`
	Values   []*SecretManagerType `json:"values,omitempty"`  
}

type SecretManagerConnection struct {
	Nodes    *Nodes5    `json:"nodes,omitempty"`   
	PageInfo *PageInfo5 `json:"pageInfo,omitempty"`
}

type Nodes5 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*SecretManager       `json:"return,omitempty"`   
}

type PageInfo5 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get details about a Harness Service.
type QueryService struct {
	Input  *ServiceInputClass `json:"input,omitempty"` 
	Output *Service           `json:"output,omitempty"`
}

type ServiceInputClass struct {
	ServiceID string `json:"serviceId"`
}

// Get a list of Harness Services, by applicationId. This returns paginated data.
type QueryServices struct {
	Input  *ServicesInput     `json:"input,omitempty"` 
	Output *ServiceConnection `json:"output,omitempty"`
}

type ServicesInput struct {
	Filters []*ServiceFilter `json:"filters,omitempty"`
	Limit   float64          `json:"limit"`            
	Offset  *float64         `json:"offset,omitempty"` 
}

type ServiceFilter struct {
	Application    *IDFilter             `json:"application,omitempty"`   
	DeploymentType *DeploymentTypeFilter `json:"deploymentType,omitempty"`
	Service        *IDFilter             `json:"service,omitempty"`       
	Tag            *ServiceTagFilter     `json:"tag,omitempty"`           
}

type DeploymentTypeFilter struct {
	Operator *Operator         `json:"operator,omitempty"`
	Values   []*DeploymentType `json:"values,omitempty"`  
}

type ServiceTagFilter struct {
	EntityType *ServiceTagType `json:"entityType,omitempty"`
	Tags       []*TagInput     `json:"tags,omitempty"`      
}

type SsoProvider struct {
	Input  *SsoProviderInput `json:"input,omitempty"` 
	Output *SSOProvider      `json:"output,omitempty"`
}

type SsoProviderInput struct {
	SsoProviderID string `json:"ssoProviderId"`
}

type SSOProvider struct {
	ID      *SSOProviderID   `json:"id,omitempty"`     
	Name    *SSOProviderName `json:"name,omitempty"`   
	SsoType *SsoType         `json:"ssoType,omitempty"`
}

type SSOProviderID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type SSOProviderName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type SsoType struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *SSOType               `json:"return,omitempty"`   
}

type SsoProviders struct {
	Input  *SsoProvidersInput     `json:"input,omitempty"` 
	Output *SSOProviderConnection `json:"output,omitempty"`
}

type SsoProvidersInput struct {
	Limit  float64  `json:"limit"`           
	Offset *float64 `json:"offset,omitempty"`
}

type SSOProviderConnection struct {
	Nodes    *Nodes6    `json:"nodes,omitempty"`   
	PageInfo *PageInfo6 `json:"pageInfo,omitempty"`
}

type Nodes6 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*SSOProvider         `json:"return,omitempty"`   
}

type PageInfo6 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get tag details using tag uuid
type TagClass struct {
	Input  *TagInputClass `json:"input,omitempty"` 
	Output *TagEntity     `json:"output,omitempty"`
}

type TagInputClass struct {
	TagID string `json:"tagId"`
}

type TagEntity struct {
	CreatedAt *TagEntityCreatedAt `json:"createdAt,omitempty"`
	CreatedBy *TagEntityCreatedBy `json:"createdBy,omitempty"`
	ID        *TagEntityID        `json:"id,omitempty"`       
	Name      *TagEntityName      `json:"name,omitempty"`     
	Usages    *Usages             `json:"usages,omitempty"`   
}

type TagEntityCreatedAt struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    map[string]interface{} `json:"return,omitempty"`   
}

type TagEntityCreatedBy struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *User                  `json:"return,omitempty"`   
}

type TagEntityID struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type TagEntityName struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *string                `json:"return,omitempty"`   
}

type Usages struct {
	Arguments *UsagesArguments    `json:"arguments,omitempty"`
	Return    *TagUsageConnection `json:"return,omitempty"`   
}

type UsagesArguments struct {
	Filters []*TagUsageFilter `json:"filters,omitempty"`
	Limit   float64           `json:"limit"`            
	Offset  *float64          `json:"offset,omitempty"` 
}

type TagUsageFilter struct {
	EntityType *EntityTypeFilter `json:"entityType,omitempty"`
	TagName    *IDFilter         `json:"tagName,omitempty"`   
	TagValue   *IDFilter         `json:"tagValue,omitempty"`  
}

type EntityTypeFilter struct {
	Operator *Operator     `json:"operator,omitempty"`
	Values   []*EntityType `json:"values,omitempty"`  
}

type TagUsageConnection struct {
	Nodes    *Nodes7    `json:"nodes,omitempty"`   
	PageInfo *PageInfo7 `json:"pageInfo,omitempty"`
}

type Nodes7 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*TagLink             `json:"return,omitempty"`   
}

type PageInfo7 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get tag details using tag name
type TagByName struct {
	Input  *TagByNameInput `json:"input,omitempty"` 
	Output *TagEntity      `json:"output,omitempty"`
}

type TagByNameInput struct {
	Name string `json:"name"`
}

// Get the list of tags. This returns paginated data.
type QueryTags struct {
	Input  *TagsInput     `json:"input,omitempty"` 
	Output *TagConnection `json:"output,omitempty"`
}

type TagsInput struct {
	Filters []*TagEntityFilter `json:"filters,omitempty"`
	Limit   float64            `json:"limit"`            
	Offset  *float64           `json:"offset,omitempty"` 
}

type TagEntityFilter struct {
	TagID   *IDFilter `json:"tagId,omitempty"`  
	TagName *IDFilter `json:"tagName,omitempty"`
}

type TagConnection struct {
	Nodes    *Nodes8    `json:"nodes,omitempty"`   
	PageInfo *PageInfo8 `json:"pageInfo,omitempty"`
}

type Nodes8 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*TagEntity           `json:"return,omitempty"`   
}

type PageInfo8 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// Get details about a Trigger.
type QueryTrigger struct {
	Input  *TriggerInput `json:"input,omitempty"` 
	Output *Trigger      `json:"output,omitempty"`
}

type TriggerInput struct {
	TriggerID string `json:"triggerId"`
}

// Get details about a Trigger  by it's name
type TriggerByName struct {
	Input  *TriggerByNameInput `json:"input,omitempty"` 
	Output *Trigger            `json:"output,omitempty"`
}

type TriggerByNameInput struct {
	ApplicationID string `json:"applicationId"`
	TriggerName   string `json:"triggerName"`  
}

// Get a list of Harness Triggers, This returns paginated data.
type Triggers struct {
	Input  *TriggersInput     `json:"input,omitempty"` 
	Output *TriggerConnection `json:"output,omitempty"`
}

type TriggersInput struct {
	Filters []*TriggerFilter `json:"filters,omitempty"`
	Limit   float64          `json:"limit"`            
	Offset  *float64         `json:"offset,omitempty"` 
}

type TriggerFilter struct {
	Application *IDFilter         `json:"application,omitempty"`
	Tag         *TriggerTagFilter `json:"tag,omitempty"`        
	Trigger     *IDFilter         `json:"trigger,omitempty"`    
}

type TriggerTagFilter struct {
	EntityType *TagType    `json:"entityType,omitempty"`
	Tags       []*TagInput `json:"tags,omitempty"`      
}

type TriggerConnection struct {
	Nodes    *Nodes9    `json:"nodes,omitempty"`   
	PageInfo *PageInfo9 `json:"pageInfo,omitempty"`
}

type Nodes9 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    []*Trigger             `json:"return,omitempty"`   
}

type PageInfo9 struct {
	Arguments map[string]interface{} `json:"arguments,omitempty"`
	Return    *PageInfo              `json:"return,omitempty"`   
}

// fetch a user by id
type QueryUser struct {
	Input  *UserInput `json:"input,omitempty"` 
	Output *User      `json:"output,omitempty"`
}

type UserInput struct {
	ID string `json:"id"`
}

// fetch a user by email
type UserByEmail struct {
	Input  *UserByEmailInput `json:"input,omitempty"` 
	Output *User             `json:"output,omitempty"`
}

type UserByEmailInput struct {
	Email string `json:"email"`
}

// fetch a user by name
type UserByName struct {
	Input  *UserByNameInput `json:"input,omitempty"` 
	Output *User            `json:"output,omitempty"`
}

type UserByNameInput struct {
	Name string `json:"name"`
}

type QueryUserGroup struct {
	Input  *UserGroupInput `json:"input,omitempty"` 
	Output *UserGroup      `json:"output,omitempty"`
}

type UserGroupInput struct {
	UserGroupID string `json:"userGroupId"`
}

type UserGroupByName struct {
	Input  *UserGroupByNameInput `json:"input,omitempty"` 
	Output *UserGroup            `json:"output,omitempty"`
}

type UserGroupByNameInput struct {
	Name string `json:"name"`
}

type QueryUserGroups struct {
	Input  *UserGroupsInput     `json:"input,omitempty"` 
	Output *UserGroupConnection `json:"output,omitempty"`
}

type UserGroupsInput struct {
	Limit  float64  `json:"limit"`           
	Offset *float64 `json:"offset,omitempty"`
}

// fetch a list of users
type QueryUsers struct {
	Input  *UsersInput     `json:"input,omitempty"` 
	Output *UserConnection `json:"output,omitempty"`
}

type UsersInput struct {
	Limit  float64  `json:"limit"`           
	Offset *float64 `json:"offset,omitempty"`
}

// Get a Workflow object by ID.
type WorkflowClass struct {
	Input  *WorkflowInput `json:"input,omitempty"` 
	Output *Workflow      `json:"output,omitempty"`
}

type WorkflowInput struct {
	WorkflowID string `json:"workflowId"`
}

// Fetch details about a  Workflow by it's name
type WorkflowByName struct {
	Input  *WorkflowByNameInput `json:"input,omitempty"` 
	Output *Workflow            `json:"output,omitempty"`
}

type WorkflowByNameInput struct {
	ApplicationID string `json:"applicationId"`
	WorkflowName  string `json:"workflowName"` 
}

// Get a list of Workflows, by applicationId. This returns paginated data.
type QueryWorkflows struct {
	Input  *WorkflowsInput     `json:"input,omitempty"` 
	Output *WorkflowConnection `json:"output,omitempty"`
}

type WorkflowsInput struct {
	Filters []*WorkflowFilter `json:"filters,omitempty"`
	Limit   float64           `json:"limit"`            
	Offset  *float64          `json:"offset,omitempty"` 
}

type WorkflowFilter struct {
	Application               *IDFilter                        `json:"application,omitempty"`              
	OrchestrationWorkflowType *OrchestrationWorkflowTypeFilter `json:"orchestrationWorkflowType,omitempty"`
	Tag                       *WorkflowTagFilter               `json:"tag,omitempty"`                      
	Workflow                  *IDFilter                        `json:"workflow,omitempty"`                 
}

type OrchestrationWorkflowTypeFilter struct {
	Operator *Operator                    `json:"operator,omitempty"`
	Values   []*OrchestrationWorkflowType `json:"values,omitempty"`  
}

type WorkflowTagFilter struct {
	EntityType *WorkflowTagType `json:"entityType,omitempty"`
	Tags       []*TagInput      `json:"tags,omitempty"`      
}

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
//
// This corresponds to MANAGE_APPLICATIONS permission on UI
type AccountPermissionType string
const (
	AdministerCe AccountPermissionType = "ADMINISTER_CE"
	AdministerOtherAccountFunctions AccountPermissionType = "ADMINISTER_OTHER_ACCOUNT_FUNCTIONS"
	CreateAndDeleteApplication AccountPermissionType = "CREATE_AND_DELETE_APPLICATION"
	CreateCustomDashboards AccountPermissionType = "CREATE_CUSTOM_DASHBOARDS"
	ManageAPIKeys AccountPermissionType = "MANAGE_API_KEYS"
	ManageAlertNotificationRules AccountPermissionType = "MANAGE_ALERT_NOTIFICATION_RULES"
	ManageApplicationStacks AccountPermissionType = "MANAGE_APPLICATION_STACKS"
	ManageAuthenticationSettings AccountPermissionType = "MANAGE_AUTHENTICATION_SETTINGS"
	ManageCloudProviders AccountPermissionType = "MANAGE_CLOUD_PROVIDERS"
	ManageConfigAsCode AccountPermissionType = "MANAGE_CONFIG_AS_CODE"
	ManageConnectors AccountPermissionType = "MANAGE_CONNECTORS"
	ManageCustomDashboards AccountPermissionType = "MANAGE_CUSTOM_DASHBOARDS"
	ManageDelegateProfiles AccountPermissionType = "MANAGE_DELEGATE_PROFILES"
	ManageDelegates AccountPermissionType = "MANAGE_DELEGATES"
	ManageDeploymentFreezes AccountPermissionType = "MANAGE_DEPLOYMENT_FREEZES"
	ManageIPWhitelist AccountPermissionType = "MANAGE_IP_WHITELIST"
	ManagePipelineGovernanceStandards AccountPermissionType = "MANAGE_PIPELINE_GOVERNANCE_STANDARDS"
	ManageRestrictedAccess AccountPermissionType = "MANAGE_RESTRICTED_ACCESS"
	ManageSSHAndWinrm AccountPermissionType = "MANAGE_SSH_AND_WINRM"
	ManageSecretManagers AccountPermissionType = "MANAGE_SECRET_MANAGERS"
	ManageSecrets AccountPermissionType = "MANAGE_SECRETS"
	ManageTags AccountPermissionType = "MANAGE_TAGS"
	ManageTemplateLibrary AccountPermissionType = "MANAGE_TEMPLATE_LIBRARY"
	ManageUserAndUserGroupsAndAPIKeys AccountPermissionType = "MANAGE_USER_AND_USER_GROUPS_AND_API_KEYS"
	ManageUsersAndGroups AccountPermissionType = "MANAGE_USERS_AND_GROUPS"
	ReadUsersAndGroups AccountPermissionType = "READ_USERS_AND_GROUPS"
	ViewAudits AccountPermissionType = "VIEW_AUDITS"
	ViewCe AccountPermissionType = "VIEW_CE"
	ViewUserAndUserGroupsAndAPIKeys AccountPermissionType = "VIEW_USER_AND_USER_GROUPS_AND_API_KEYS"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
//
// Beta: This action will be used to govern workflow rollback
type Actions string
const (
	ActionsDELETE Actions = "DELETE"
	Create Actions = "CREATE"
	Execute Actions = "EXECUTE"
	ExecutePipeline Actions = "EXECUTE_PIPELINE"
	ExecuteWorkflow Actions = "EXECUTE_WORKFLOW"
	Read Actions = "READ"
	RollbackWorkflow Actions = "ROLLBACK_WORKFLOW"
	Update Actions = "UPDATE"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type FilterTypeEnum string
const (
	FilterTypeALL FilterTypeEnum = "ALL"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type FilterType string
const (
	NonProductionEnvironments FilterType = "NON_PRODUCTION_ENVIRONMENTS"
	ProductionEnvironments FilterType = "PRODUCTION_ENVIRONMENTS"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type AppPermissionType string
const (
	AppPermissionTypeALL AppPermissionType = "ALL"
	AppPermissionTypeDEPLOYMENT AppPermissionType = "DEPLOYMENT"
	AppPermissionTypePIPELINE AppPermissionType = "PIPELINE"
	AppPermissionTypePROVISIONER AppPermissionType = "PROVISIONER"
	AppPermissionTypeSERVICE AppPermissionType = "SERVICE"
	AppPermissionTypeWORKFLOW AppPermissionType = "WORKFLOW"
	Env AppPermissionType = "ENV"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type PipelinePermissionFilterType string
const (
	NonProductionPipelines PipelinePermissionFilterType = "NON_PRODUCTION_PIPELINES"
	ProductionPipelines PipelinePermissionFilterType = "PRODUCTION_PIPELINES"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type WorkflowPermissionFilterType string
const (
	NonProductionWorkflows WorkflowPermissionFilterType = "NON_PRODUCTION_WORKFLOWS"
	ProductionWorkflows WorkflowPermissionFilterType = "PRODUCTION_WORKFLOWS"
	WorkflowTemplates WorkflowPermissionFilterType = "WORKFLOW_TEMPLATES"
)

// Type of entity the tag is to be attached to
//
// Type of entity the tag is to be detached from
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type TagEntityType string
const (
	TagEntityTypeAPPLICATION TagEntityType = "APPLICATION"
	TagEntityTypeENVIRONMENT TagEntityType = "ENVIRONMENT"
	TagEntityTypePIPELINE TagEntityType = "PIPELINE"
	TagEntityTypePROVISIONER TagEntityType = "PROVISIONER"
	TagEntityTypeSERVICE TagEntityType = "SERVICE"
	TagEntityTypeWORKFLOW TagEntityType = "WORKFLOW"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type Operator string
const (
	OperatorEQUALS Operator = "EQUALS"
	OperatorIN Operator = "IN"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type IDOperator string
const (
	IDOperatorEQUALS IDOperator = "EQUALS"
	IDOperatorIN IDOperator = "IN"
	Like IDOperator = "LIKE"
	NotIn IDOperator = "NOT_IN"
	NotNull IDOperator = "NOT_NULL"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type InfrastructureDefinitionTagType string
const (
	InfrastructureDefinitionTagTypeENVIRONMENT InfrastructureDefinitionTagType = "ENVIRONMENT"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type EnvironmentType string
const (
	NonProd EnvironmentType = "NON_PROD"
	Prod EnvironmentType = "PROD"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type URLTypeEnum string
const (
	Account URLTypeEnum = "ACCOUNT"
	Repo URLTypeEnum = "REPO"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type AwsCredentialsType string
const (
	Ec2Iam AwsCredentialsType = "EC2_IAM"
	Manual AwsCredentialsType = "MANUAL"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type CloudProviderType string
const (
	Aws CloudProviderType = "AWS"
	Azure CloudProviderType = "AZURE"
	CloudProviderTypePCF CloudProviderType = "PCF"
	Gcp CloudProviderType = "GCP"
	KubernetesCluster CloudProviderType = "KUBERNETES_CLUSTER"
	PhysicalDataCenter CloudProviderType = "PHYSICAL_DATA_CENTER"
	SpotInst CloudProviderType = "SPOT_INST"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type ClusterDetailsType string
const (
	InheritClusterDetails ClusterDetailsType = "INHERIT_CLUSTER_DETAILS"
	ManualClusterDetails ClusterDetailsType = "MANUAL_CLUSTER_DETAILS"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type ManualClusterDetailsAuthenticationType string
const (
	ClientKeyAndCertificate ManualClusterDetailsAuthenticationType = "CLIENT_KEY_AND_CERTIFICATE"
	ManualClusterDetailsAuthenticationTypeCUSTOM ManualClusterDetailsAuthenticationType = "CUSTOM"
	OidcToken ManualClusterDetailsAuthenticationType = "OIDC_TOKEN"
	ServiceAccountToken ManualClusterDetailsAuthenticationType = "SERVICE_ACCOUNT_TOKEN"
	UsernameAndPassword ManualClusterDetailsAuthenticationType = "USERNAME_AND_PASSWORD"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type ConnectorType string
const (
	AmazonS3 ConnectorType = "AMAZON_S3"
	AmazonS3HelmRepo ConnectorType = "AMAZON_S3_HELM_REPO"
	ApmVerification ConnectorType = "APM_VERIFICATION"
	AppDynamics ConnectorType = "APP_DYNAMICS"
	Artifactory ConnectorType = "ARTIFACTORY"
	Bamboo ConnectorType = "BAMBOO"
	BugSnag ConnectorType = "BUG_SNAG"
	DataDog ConnectorType = "DATA_DOG"
	Docker ConnectorType = "DOCKER"
	DynaTrace ConnectorType = "DYNA_TRACE"
	Ecr ConnectorType = "ECR"
	Elb ConnectorType = "ELB"
	Elk ConnectorType = "ELK"
	GCR ConnectorType = "GCR"
	Gcs ConnectorType = "GCS"
	GcsHelmRepo ConnectorType = "GCS_HELM_REPO"
	Git ConnectorType = "GIT"
	HTTPHelmRepo ConnectorType = "HTTP_HELM_REPO"
	Jenkins ConnectorType = "JENKINS"
	Jira ConnectorType = "JIRA"
	Logz ConnectorType = "LOGZ"
	NewRelic ConnectorType = "NEW_RELIC"
	Nexus ConnectorType = "NEXUS"
	Prometheus ConnectorType = "PROMETHEUS"
	SFTP ConnectorType = "SFTP"
	SMB ConnectorType = "SMB"
	SMTP ConnectorType = "SMTP"
	Servicenow ConnectorType = "SERVICENOW"
	Slack ConnectorType = "SLACK"
	Splunk ConnectorType = "SPLUNK"
	Sumo ConnectorType = "SUMO"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type NexusVersion string
const (
	V2 NexusVersion = "V2"
	V3 NexusVersion = "V3"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type SSHAuthenticationScheme string
const (
	Kerberos SSHAuthenticationScheme = "KERBEROS"
	SSHAuthenticationSchemeSSH SSHAuthenticationScheme = "SSH"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type TGTGenerationUsing string
const (
	KeyTabFile TGTGenerationUsing = "KEY_TAB_FILE"
	TGTGenerationUsingPASSWORD TGTGenerationUsing = "PASSWORD"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type SSHCredentialType string
const (
	SSHCredentialTypePASSWORD SSHCredentialType = "PASSWORD"
	SSHKey SSHCredentialType = "SSH_KEY"
	SSHKeyFilePath SSHCredentialType = "SSH_KEY_FILE_PATH"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type SecretType string
const (
	EncryptedFile SecretType = "ENCRYPTED_FILE"
	EncryptedText SecretType = "ENCRYPTED_TEXT"
	SSHCredential SecretType = "SSH_CREDENTIAL"
	WinrmCredential SecretType = "WINRM_CREDENTIAL"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type WinRMAuthenticationScheme string
const (
	NTLM WinRMAuthenticationScheme = "NTLM"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type SecretManagerType string
const (
	AwsKms SecretManagerType = "AWS_KMS"
	AwsSecretManager SecretManagerType = "AWS_SECRET_MANAGER"
	AzureKeyVault SecretManagerType = "AZURE_KEY_VAULT"
	Cyberark SecretManagerType = "CYBERARK"
	GoogleKms SecretManagerType = "GOOGLE_KMS"
	HashicorpVault SecretManagerType = "HASHICORP_VAULT"
)

// Artifact Selection type
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type ArtifactSelectionType string
const (
	FromPayloadSource ArtifactSelectionType = "FROM_PAYLOAD_SOURCE"
	FromTriggeringArtifact ArtifactSelectionType = "FROM_TRIGGERING_ARTIFACT"
	FromTriggeringPipeline ArtifactSelectionType = "FROM_TRIGGERING_PIPELINE"
	LastCollected ArtifactSelectionType = "LAST_COLLECTED"
	LastDeployedPipeline ArtifactSelectionType = "LAST_DEPLOYED_PIPELINE"
	LastDeployedWorkflow ArtifactSelectionType = "LAST_DEPLOYED_WORKFLOW"
)

// Execution type: Workflow/Pipeline
//
// Workflow or Pipeline
//
// Execution type: workflow/ pipeline
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type ExecutionType string
const (
	ExecutionTypePIPELINE ExecutionType = "PIPELINE"
	ExecutionTypeWORKFLOW ExecutionType = "WORKFLOW"
)

// type of the value: name or if
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type VariableValueType string
const (
	Expression VariableValueType = "EXPRESSION"
	ID VariableValueType = "ID"
	Name VariableValueType = "NAME"
)

// Condition to execute Trigger: ON_NEW_ARTIFACT, ON_PIPELINE_COMPLETION, ON_SCHEDULE,
// ON_WEBHOOK
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type ConditionType string
const (
	OnNewArtifact ConditionType = "ON_NEW_ARTIFACT"
	OnPipelineCompletion ConditionType = "ON_PIPELINE_COMPLETION"
	OnSchedule ConditionType = "ON_SCHEDULE"
	OnWebhook ConditionType = "ON_WEBHOOK"
)

// Bitbucket  event, Required if webhookSourceType = BITBUCKET
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type BitbucketEvent string
const (
	BitbucketEventANY BitbucketEvent = "ANY"
	BitbucketEventPUSH BitbucketEvent = "PUSH"
	BuildStatusCreated BitbucketEvent = "BUILD_STATUS_CREATED"
	BuildStatusUpdated BitbucketEvent = "BUILD_STATUS_UPDATED"
	CommitCommentCreated BitbucketEvent = "COMMIT_COMMENT_CREATED"
	DiagnosticsPing BitbucketEvent = "DIAGNOSTICS_PING"
	Fork BitbucketEvent = "FORK"
	IssueAny BitbucketEvent = "ISSUE_ANY"
	IssueCommentCreated BitbucketEvent = "ISSUE_COMMENT_CREATED"
	IssueCreated BitbucketEvent = "ISSUE_CREATED"
	IssueUpdated BitbucketEvent = "ISSUE_UPDATED"
	PullRequestAny BitbucketEvent = "PULL_REQUEST_ANY"
	PullRequestApprovalRemoved BitbucketEvent = "PULL_REQUEST_APPROVAL_REMOVED"
	PullRequestApproved BitbucketEvent = "PULL_REQUEST_APPROVED"
	PullRequestCommentCreated BitbucketEvent = "PULL_REQUEST_COMMENT_CREATED"
	PullRequestCommentDeleted BitbucketEvent = "PULL_REQUEST_COMMENT_DELETED"
	PullRequestCommentUpdated BitbucketEvent = "PULL_REQUEST_COMMENT_UPDATED"
	PullRequestCreated BitbucketEvent = "PULL_REQUEST_CREATED"
	PullRequestDeclined BitbucketEvent = "PULL_REQUEST_DECLINED"
	PullRequestMerged BitbucketEvent = "PULL_REQUEST_MERGED"
	PullRequestUpdated BitbucketEvent = "PULL_REQUEST_UPDATED"
	RefsChanged BitbucketEvent = "REFS_CHANGED"
	Updated BitbucketEvent = "UPDATED"
)

// Github Action for the event type.
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type GitHubAction string
const (
	Assigned GitHubAction = "ASSIGNED"
	Closed GitHubAction = "CLOSED"
	Created GitHubAction = "CREATED"
	Deleted GitHubAction = "DELETED"
	Edited GitHubAction = "EDITED"
	Labeled GitHubAction = "LABELED"
	Opened GitHubAction = "OPENED"
	PackagePublished GitHubAction = "PACKAGE_PUBLISHED"
	PreReleased GitHubAction = "PRE_RELEASED"
	Published GitHubAction = "PUBLISHED"
	Released GitHubAction = "RELEASED"
	Reopened GitHubAction = "REOPENED"
	ReviewRequested GitHubAction = "REVIEW_REQUESTED"
	ReviewRequestedRemoved GitHubAction = "REVIEW_REQUESTED_REMOVED"
	Synchronized GitHubAction = "SYNCHRONIZED"
	Unassigned GitHubAction = "UNASSIGNED"
	Unlabeled GitHubAction = "UNLABELED"
	Unpublished GitHubAction = "UNPUBLISHED"
)

// Github event type like PUSH, PULL_REQUEST, etc
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type GitHubEventType string
const (
	GitHubEventTypeANY GitHubEventType = "ANY"
	GitHubEventTypeDELETE GitHubEventType = "DELETE"
	GitHubEventTypePULLREQUEST GitHubEventType = "PULL_REQUEST"
	GitHubEventTypePUSH GitHubEventType = "PUSH"
	Package GitHubEventType = "PACKAGE"
	Release GitHubEventType = "RELEASE"
)

// Gitlab  event, Required if webhookSourceType = GITLAB
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type GitlabEvent string
const (
	GitlabEventANY GitlabEvent = "ANY"
	GitlabEventPULLREQUEST GitlabEvent = "PULL_REQUEST"
	GitlabEventPUSH GitlabEvent = "PUSH"
)

// Source of the webhook: GITHUB/GITLAB/BITBUCKET/CUSTOM(curl based)
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type WebhookSource string
const (
	Bitbucket WebhookSource = "BITBUCKET"
	Github WebhookSource = "GITHUB"
	Gitlab WebhookSource = "GITLAB"
	WebhookSourceCUSTOM WebhookSource = "CUSTOM"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type TimeOperator string
const (
	After TimeOperator = "AFTER"
	Before TimeOperator = "BEFORE"
	TimeOperatorEQUALS TimeOperator = "EQUALS"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type NumericOperator string
const (
	GreaterThan NumericOperator = "GREATER_THAN"
	GreaterThanOrEquals NumericOperator = "GREATER_THAN_OR_EQUALS"
	LessThan NumericOperator = "LESS_THAN"
	LessThanOrEquals NumericOperator = "LESS_THAN_OR_EQUALS"
	NotEquals NumericOperator = "NOT_EQUALS"
	NumericOperatorEQUALS NumericOperator = "EQUALS"
	NumericOperatorIN NumericOperator = "IN"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type DeploymentTagType string
const (
	DeploymentTagTypeAPPLICATION DeploymentTagType = "APPLICATION"
	DeploymentTagTypeDEPLOYMENT DeploymentTagType = "DEPLOYMENT"
	DeploymentTagTypeENVIRONMENT DeploymentTagType = "ENVIRONMENT"
	DeploymentTagTypeSERVICE DeploymentTagType = "SERVICE"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type ExportExecutionsStatus string
const (
	Expired ExportExecutionsStatus = "EXPIRED"
	Failed ExportExecutionsStatus = "FAILED"
	Queued ExportExecutionsStatus = "QUEUED"
	Ready ExportExecutionsStatus = "READY"
)

// type of the artifactValue: Build number, artifactId or parameterized artifact source
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type ArtifactInputType string
const (
	ArtifactID ArtifactInputType = "ARTIFACT_ID"
	BuildNumber ArtifactInputType = "BUILD_NUMBER"
	ParameterizedArtifactSource ArtifactInputType = "PARAMETERIZED_ARTIFACT_SOURCE"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type TagType string
const (
	TagTypeAPPLICATION TagType = "APPLICATION"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type TimeUnit string
const (
	Days TimeUnit = "DAYS"
	Hours TimeUnit = "HOURS"
	Minutes TimeUnit = "MINUTES"
	Weeks TimeUnit = "WEEKS"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type CeCost string
const (
	CeCostIDLECOST CeCost = "IDLECOST"
	CeCostTOTALCOST CeCost = "TOTALCOST"
	CeCostUNALLOCATEDCOST CeCost = "UNALLOCATEDCOST"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type CeAggregationFunction string
const (
	Avg CeAggregationFunction = "AVG"
	CeAggregationFunctionSUM CeAggregationFunction = "SUM"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type CeUtilization string
const (
	CPULimit CeUtilization = "CPU_LIMIT"
	CPURequest CeUtilization = "CPU_REQUEST"
	CPUUtilizationValue CeUtilization = "CPU_UTILIZATION_VALUE"
	MemoryLimit CeUtilization = "MEMORY_LIMIT"
	MemoryRequest CeUtilization = "MEMORY_REQUEST"
	MemoryUtilizationValue CeUtilization = "MEMORY_UTILIZATION_VALUE"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type CeTagType string
const (
	CeTagTypeAPPLICATION CeTagType = "APPLICATION"
	CeTagTypeENVIRONMENT CeTagType = "ENVIRONMENT"
	CeTagTypeSERVICE CeTagType = "SERVICE"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type CeEntityGroupBy string
const (
	CeEntityGroupByApplication CeEntityGroupBy = "Application"
	CeEntityGroupByEnvironment CeEntityGroupBy = "Environment"
	CeEntityGroupByService CeEntityGroupBy = "Service"
	Cluster CeEntityGroupBy = "Cluster"
	EcsService CeEntityGroupBy = "EcsService"
	LaunchType CeEntityGroupBy = "LaunchType"
	Namespace CeEntityGroupBy = "Namespace"
	Node CeEntityGroupBy = "Node"
	Pod CeEntityGroupBy = "Pod"
	Region CeEntityGroupBy = "Region"
	Task CeEntityGroupBy = "Task"
	Workload CeEntityGroupBy = "Workload"
	WorkloadType CeEntityGroupBy = "WorkloadType"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type TimeType string
const (
	Day TimeType = "DAY"
	Hour TimeType = "HOUR"
	Month TimeType = "MONTH"
	Week TimeType = "WEEK"
)

// This data structure will be useful for bar charts which are aggregated over a period of
// time
//
// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type SortOrder string
const (
	Ascending SortOrder = "ASCENDING"
	Descending SortOrder = "DESCENDING"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type CeSortType string
const (
	CeSortTypeIDLECOST CeSortType = "IDLECOST"
	CeSortTypeTOTALCOST CeSortType = "TOTALCOST"
	CeSortTypeUNALLOCATEDCOST CeSortType = "UNALLOCATEDCOST"
	Time CeSortType = "TIME"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type CountAggregateOperation string
const (
	CountAggregateOperationSUM CountAggregateOperation = "SUM"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type DurationAggregateOperation string
const (
	Average DurationAggregateOperation = "AVERAGE"
	Max DurationAggregateOperation = "MAX"
	Min DurationAggregateOperation = "MIN"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type DeploymentEntityAggregation string
const (
	CloudProvider DeploymentEntityAggregation = "CloudProvider"
	DeploymentEntityAggregationApplication DeploymentEntityAggregation = "Application"
	DeploymentEntityAggregationEnvironment DeploymentEntityAggregation = "Environment"
	DeploymentEntityAggregationEnvironmentType DeploymentEntityAggregation = "EnvironmentType"
	DeploymentEntityAggregationPipeline DeploymentEntityAggregation = "Pipeline"
	DeploymentEntityAggregationService DeploymentEntityAggregation = "Service"
	DeploymentEntityAggregationTrigger DeploymentEntityAggregation = "Trigger"
	DeploymentEntityAggregationWorkflow DeploymentEntityAggregation = "Workflow"
	Status DeploymentEntityAggregation = "Status"
	TriggeredBy DeploymentEntityAggregation = "TriggeredBy"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type DeploymentSortType string
const (
	Count DeploymentSortType = "Count"
	Duration DeploymentSortType = "Duration"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type InstanceTypeEnum string
const (
	AutoscalingGroupInstance InstanceTypeEnum = "AUTOSCALING_GROUP_INSTANCE"
	CodeDeployInstance InstanceTypeEnum = "CODE_DEPLOY_INSTANCE"
	Ec2Instance InstanceTypeEnum = "EC2_INSTANCE"
	EcsContainerInstance InstanceTypeEnum = "ECS_CONTAINER_INSTANCE"
	KubernetesContainerInstance InstanceTypeEnum = "KUBERNETES_CONTAINER_INSTANCE"
	PcfInstance InstanceTypeEnum = "PCF_INSTANCE"
	PhysicalHostInstance InstanceTypeEnum = "PHYSICAL_HOST_INSTANCE"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type PipelineTagType string
const (
	PipelineTagTypeAPPLICATION PipelineTagType = "APPLICATION"
	PipelineTagTypePIPELINE PipelineTagType = "PIPELINE"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type DeploymentType string
const (
	Ami DeploymentType = "AMI"
	AwsCodedeploy DeploymentType = "AWS_CODEDEPLOY"
	AwsLambda DeploymentType = "AWS_LAMBDA"
	AzureVmss DeploymentType = "AZURE_VMSS"
	AzureWebapp DeploymentType = "AZURE_WEBAPP"
	DeploymentTypeCUSTOM DeploymentType = "CUSTOM"
	DeploymentTypePCF DeploymentType = "PCF"
	DeploymentTypeSSH DeploymentType = "SSH"
	Ecs DeploymentType = "ECS"
	Helm DeploymentType = "HELM"
	Kubernetes DeploymentType = "KUBERNETES"
	Spotinst DeploymentType = "SPOTINST"
	Winrm DeploymentType = "WINRM"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type ServiceTagType string
const (
	ServiceTagTypeAPPLICATION ServiceTagType = "APPLICATION"
	ServiceTagTypeSERVICE ServiceTagType = "SERVICE"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type SSOType string
const (
	LDAP SSOType = "LDAP"
	Saml SSOType = "SAML"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type EntityType string
const (
	CollaborationProvider EntityType = "COLLABORATION_PROVIDER"
	Connector EntityType = "CONNECTOR"
	EntityTypeAPPLICATION EntityType = "APPLICATION"
	EntityTypeARTIFACT EntityType = "ARTIFACT"
	EntityTypeCLOUDPROVIDER EntityType = "CLOUD_PROVIDER"
	EntityTypeDEPLOYMENT EntityType = "DEPLOYMENT"
	EntityTypeENVIRONMENT EntityType = "ENVIRONMENT"
	EntityTypePIPELINE EntityType = "PIPELINE"
	EntityTypePROVISIONER EntityType = "PROVISIONER"
	EntityTypeSERVICE EntityType = "SERVICE"
	EntityTypeTRIGGER EntityType = "TRIGGER"
	EntityTypeWORKFLOW EntityType = "WORKFLOW"
	Instance EntityType = "INSTANCE"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type OrchestrationWorkflowType string
const (
	Basic OrchestrationWorkflowType = "BASIC"
	BlueGreen OrchestrationWorkflowType = "BLUE_GREEN"
	Build OrchestrationWorkflowType = "BUILD"
	Canary OrchestrationWorkflowType = "CANARY"
	MultiService OrchestrationWorkflowType = "MULTI_SERVICE"
	OrchestrationWorkflowTypeCUSTOM OrchestrationWorkflowType = "CUSTOM"
	Rolling OrchestrationWorkflowType = "ROLLING"
)

// Built-in String
//
// Unique ID of the harness entity
//
// Name of the tag
//
// Value of the tag
//
// Artifact Build/Tag to filter artifacts when using LAST_COLLECTED
//
// Artifact source Id to select artifact from. Required for
// LAST_COLLECTED,FROM_PAYLOAD_SOURCE
//
// Pipeline Id to select artifact from, Required when using LAST_DEPLOYED_PIPELINE
//
// Id of the service providing artifact selection for
//
// Workflow Id to select artifact from, Required when using LAST_DEPLOYED_WORKFLOW
//
// Entity identifier of the Workflow or Pipeline
//
// name of the variable
//
// value
//
// Application Id In which Trigger will be created
//
// Build/Tag Filter: Artifacts matching this Filter only will execte the Trigger, Can be
// Exact match or Regex
//
// Artifact Source Id: A new Artifact in this ArtifactSource matching the Artifact Filter
// will execute the Trigger.
//
// PipelineId: The trigger will be executed on success of this pipeline.
//
// Cron Expression: The time format must be a cron quartz expression.
//
// Branch in which the filePaths exist.
//
// Branch filter, can be used if using PullRequest or Push events.
//
// Source Repo Provider setup in Harness
//
// Git repository name in case when Account level Git connector is provided
//
// Beta: Webhook secret to authorize Github webhooks
//
// Description of the Trigger
//
// Name of the Trigger
//
// Application Id
//
// Id of Trigger to be deleted
//
// Name of the stage to be resumed. i.e "Stage 1"
//
// Application identifier of a Workflow or Pipeline
//
// Entity identifier of a Workflow or Pipeline
//
// Execution notes
//
// artifactId
//
// name of the artifact source to which the specified build number comes from
//
// build number to deploy
//
// parameter name
//
// runtime value for parameter
//
// name of the service providing input for
//
// Specify the repository name. If your Harness Source Repo Provider uses the Git Account
// type, provide the Repo Name to use from that account.
//
// Id of Trigger to be updated
//
// Unique ID of a changeSet
//
// Unique ID of dependent or child resource, e.g.Environment, Services, etc.
//
// Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this
// information
//
// Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information
type WorkflowTagType string
const (
	WorkflowTagTypeAPPLICATION WorkflowTagType = "APPLICATION"
	WorkflowTagTypeWORKFLOW WorkflowTagType = "WORKFLOW"
)

type Harness struct {
	AnythingArray []interface{}
	Bool          *bool
	Double        *float64
	HarnessClass  *HarnessClass
	Integer       *int64
	String        *string
}

func (x *Harness) UnmarshalJSON(data []byte) error {
	x.AnythingArray = nil
	x.HarnessClass = nil
	var c HarnessClass
	object, err := unmarshalUnion(data, &x.Integer, &x.Double, &x.Bool, &x.String, true, &x.AnythingArray, true, &c, false, nil, false, nil, true)
	if err != nil {
		return err
	}
	if object {
		x.HarnessClass = &c
	}
	return nil
}

func (x *Harness) MarshalJSON() ([]byte, error) {
	return marshalUnion(x.Integer, x.Double, x.Bool, x.String, x.AnythingArray != nil, x.AnythingArray, x.HarnessClass != nil, x.HarnessClass, false, nil, false, nil, true)
}

func unmarshalUnion(data []byte, pi **int64, pf **float64, pb **bool, ps **string, haveArray bool, pa interface{}, haveObject bool, pc interface{}, haveMap bool, pm interface{}, haveEnum bool, pe interface{}, nullable bool) (bool, error) {
	if pi != nil {
		*pi = nil
	}
	if pf != nil {
		*pf = nil
	}
	if pb != nil {
		*pb = nil
	}
	if ps != nil {
		*ps = nil
	}

	dec := json.NewDecoder(bytes.NewReader(data))
	dec.UseNumber()
	tok, err := dec.Token()
	if err != nil {
		return false, err
	}

	switch v := tok.(type) {
	case json.Number:
		if pi != nil {
			i, err := v.Int64()
			if err == nil {
				*pi = &i
				return false, nil
			}
		}
		if pf != nil {
			f, err := v.Float64()
			if err == nil {
				*pf = &f
				return false, nil
			}
			return false, errors.New("Unparsable number")
		}
		return false, errors.New("Union does not contain number")
	case float64:
		return false, errors.New("Decoder should not return float64")
	case bool:
		if pb != nil {
			*pb = &v
			return false, nil
		}
		return false, errors.New("Union does not contain bool")
	case string:
		if haveEnum {
			return false, json.Unmarshal(data, pe)
		}
		if ps != nil {
			*ps = &v
			return false, nil
		}
		return false, errors.New("Union does not contain string")
	case nil:
		if nullable {
			return false, nil
		}
		return false, errors.New("Union does not contain null")
	case json.Delim:
		if v == '{' {
			if haveObject {
				return true, json.Unmarshal(data, pc)
			}
			if haveMap {
				return false, json.Unmarshal(data, pm)
			}
			return false, errors.New("Union does not contain object")
		}
		if v == '[' {
			if haveArray {
				return false, json.Unmarshal(data, pa)
			}
			return false, errors.New("Union does not contain array")
		}
		return false, errors.New("Cannot handle delimiter")
	}
	return false, errors.New("Cannot unmarshal union")

}

func marshalUnion(pi *int64, pf *float64, pb *bool, ps *string, haveArray bool, pa interface{}, haveObject bool, pc interface{}, haveMap bool, pm interface{}, haveEnum bool, pe interface{}, nullable bool) ([]byte, error) {
	if pi != nil {
		return json.Marshal(*pi)
	}
	if pf != nil {
		return json.Marshal(*pf)
	}
	if pb != nil {
		return json.Marshal(*pb)
	}
	if ps != nil {
		return json.Marshal(*ps)
	}
	if haveArray {
		return json.Marshal(pa)
	}
	if haveObject {
		return json.Marshal(pc)
	}
	if haveMap {
		return json.Marshal(pm)
	}
	if haveEnum {
		return json.Marshal(pe)
	}
	if nullable {
		return json.Marshal(nil)
	}
	return nil, errors.New("Union must not be null")
}
