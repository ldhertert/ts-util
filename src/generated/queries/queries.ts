import { gql } from 'graphql-tag'

export const addAccountPermission = gql`mutation addAccountPermission($input: AddAccountPermissionInput!) {
  result: addAccountPermission(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const addAppPermission = gql`mutation addAppPermission($input: AddAppPermissionInput!) {
  result: addAppPermission(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const addUserToUserGroup = gql`mutation addUserToUserGroup($input: AddUserToUserGroupInput!) {
  result: addUserToUserGroup(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const attachTag = gql`mutation attachTag($input: AttachTagInput!) {
  result: attachTag(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const createApplication = gql`mutation createApplication($input: CreateApplicationInput!) {
  result: createApplication(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const createCloudProvider = gql`mutation createCloudProvider($input: CreateCloudProviderInput!) {
  result: createCloudProvider(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const createConnector = gql`mutation createConnector($input: CreateConnectorInput!) {
  result: createConnector(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const createSecret = gql`mutation createSecret($input: CreateSecretInput!) {
  result: createSecret(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const createSecretManager = gql`mutation createSecretManager($input: CreateSecretManagerInput!) {
  result: createSecretManager(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const createTrigger = gql`mutation createTrigger($input: CreateTriggerInput!) {
  result: createTrigger(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const createUser = gql`mutation createUser($input: CreateUserInput!) {
  result: createUser(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const createUserGroup = gql`mutation createUserGroup($input: CreateUserGroupInput!) {
  result: createUserGroup(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const deleteApplication = gql`mutation deleteApplication($input: DeleteApplicationInput!) {
  result: deleteApplication(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const deleteCloudProvider = gql`mutation deleteCloudProvider($input: DeleteCloudProviderInput!) {
  result: deleteCloudProvider(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const deleteConnector = gql`mutation deleteConnector($input: DeleteConnectorInput!) {
  result: deleteConnector(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const deleteSecret = gql`mutation deleteSecret($input: DeleteSecretInput!) {
  result: deleteSecret(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const deleteSecretManager = gql`mutation deleteSecretManager($input: DeleteSecretManagerInput!) {
  result: deleteSecretManager(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const deleteTrigger = gql`mutation deleteTrigger($input: DeleteTriggerInput!) {
  result: deleteTrigger(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const deleteUser = gql`mutation deleteUser($input: DeleteUserInput!) {
  result: deleteUser(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const deleteUserGroup = gql`mutation deleteUserGroup($input: DeleteUserGroupInput!) {
  result: deleteUserGroup(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const detachTag = gql`mutation detachTag($input: DetachTagInput!) {
  result: detachTag(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const exportExecutions = gql`mutation exportExecutions($input: ExportExecutionsInput!) {
  result: exportExecutions(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const removeApplicationGitSyncConfig = gql`mutation removeApplicationGitSyncConfig($input: RemoveApplicationGitSyncConfigInput!) {
  result: removeApplicationGitSyncConfig(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const removeUserFromUserGroup = gql`mutation removeUserFromUserGroup($input: RemoveUserFromUserGroupInput!) {
  result: removeUserFromUserGroup(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const resumeExecution = gql`mutation resumeExecution($input: ResumeExecutionInput) {
  result: resumeExecution(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const startExecution = gql`mutation startExecution($input: StartExecutionInput!) {
  result: startExecution(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateApplication = gql`mutation updateApplication($input: UpdateApplicationInput!) {
  result: updateApplication(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateApplicationGitSyncConfig = gql`mutation updateApplicationGitSyncConfig($input: UpdateApplicationGitSyncConfigInput!) {
  result: updateApplicationGitSyncConfig(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateApplicationGitSyncConfigStatus = gql`mutation updateApplicationGitSyncConfigStatus($input: UpdateApplicationGitSyncConfigStatusInput!) {
  result: updateApplicationGitSyncConfigStatus(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateCloudProvider = gql`mutation updateCloudProvider($input: UpdateCloudProviderInput!) {
  result: updateCloudProvider(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateConnector = gql`mutation updateConnector($input: UpdateConnectorInput!) {
  result: updateConnector(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateSecret = gql`mutation updateSecret($input: UpdateSecretInput!) {
  result: updateSecret(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateSecretManager = gql`mutation updateSecretManager($input: UpdateSecretManagerInput!) {
  result: updateSecretManager(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateTrigger = gql`mutation updateTrigger($input: UpdateTriggerInput!) {
  result: updateTrigger(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateUser = gql`mutation updateUser($input: UpdateUserInput!) {
  result: updateUser(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateUserGroup = gql`mutation updateUserGroup($input: UpdateUserGroupInput!) {
  result: updateUserGroup(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const updateUserGroupPermissions = gql`mutation updateUserGroupPermissions($input: UpdateUserGroupPermissionsInput) {
  result: updateUserGroupPermissions(input: $input) {
    resource: something {
      id
      name
    }
  }
}`

export const application = gql`query application($applicationId: String!) {
  result: application(applicationId: $applicationId) {
    id
    name
  }
}`

export const applicationByName = gql`query applicationByName($name: String!) {
  result: applicationByName(name: $name) {
    id
    name
  }
}`

export const applications = gql`query applications($filters: [ApplicationFilter], $limit: Int = 100, $offset: Int = 0) {
  result: applications(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const artifact = gql`query artifact($artifactId: String!) {
  result: artifact(artifactId: $artifactId) {
    id
    name
  }
}`

export const artifacts = gql`query artifacts($filters: [ArtifactFilter], $limit: Int = 100, $offset: Int = 0) {
  result: artifacts(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const auditChangeContent = gql`query auditChangeContent($filters: [ChangeContentFilter], $limit: Int = 100, $offset: Int = 0) {
  result: auditChangeContent(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const audits = gql`query audits($filters: [ChangeSetFilter], $limit: Int = 100, $offset: Int = 0) {
  result: audits(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const ceClusterBillingData = gql`query ceClusterBillingData($aggregateFunction: [ceAggregation], $filters: [ceFilter], $groupBy: [ceGroupBy], $limit: Int, $offset: Int = 0, $select: [ceSelect], $sortCriteria: [ceSort]) {
  result: ceClusterBillingData(
    aggregateFunction: $aggregateFunction
    filters: $filters
    groupBy: $groupBy
    limit: $limit
    offset: $offset
    select: $select
    sortCriteria: $sortCriteria
  ) {
    id
    name
  }
}`

export const cloudProvider = gql`query cloudProvider($cloudProviderId: String!) {
  result: cloudProvider(cloudProviderId: $cloudProviderId) {
    id
    name
  }
}`

export const cloudProviderByName = gql`query cloudProviderByName($name: String!) {
  result: cloudProviderByName(name: $name) {
    id
    name
  }
}`

export const cloudProviders = gql`query cloudProviders($filters: [CloudProviderFilter], $limit: Int = 100, $offset: Int = 0) {
  result: cloudProviders(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const connector = gql`query connector($connectorId: String!) {
  result: connector(connectorId: $connectorId) {
    id
    name
  }
}`

export const connectors = gql`query connectors($filters: [ConnectorFilter], $limit: Int = 100, $offset: Int = 0) {
  result: connectors(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const deploymentStats = gql`query deploymentStats($aggregateFunction: DeploymentAggregationFunction, $filters: [DeploymentFilter], $groupBy: [DeploymentAggregation], $includeIndirectExecutions: Boolean, $sortCriteria: [DeploymentSortCriteria]) {
  result: deploymentStats(
    aggregateFunction: $aggregateFunction
    filters: $filters
    groupBy: $groupBy
    includeIndirectExecutions: $includeIndirectExecutions
    sortCriteria: $sortCriteria
  ) {
    id
    name
  }
}`

export const environment = gql`query environment($environmentId: String!) {
  result: environment(environmentId: $environmentId) {
    id
    name
  }
}`

export const environments = gql`query environments($filters: [EnvironmentFilter], $limit: Int = 100, $offset: Int = 0) {
  result: environments(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const execution = gql`query execution($executionId: String!) {
  result: execution(executionId: $executionId) {
    id
    name
  }
}`

export const executionInputs = gql`query executionInputs($applicationId: String!, $entityId: String!, $executionType: ExecutionType!, $variableInputs: [VariableInput]) {
  result: executionInputs(
    applicationId: $applicationId
    entityId: $entityId
    executionType: $executionType
    variableInputs: $variableInputs
  ) {
    id
    name
  }
}`

export const executions = gql`query executions($filters: [ExecutionFilter], $includeIndirectExecutions: Boolean, $limit: Int = 100, $offset: Int = 0) {
  result: executions(
    filters: $filters
    includeIndirectExecutions: $includeIndirectExecutions
    limit: $limit
    offset: $offset
  ) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const infrastructureDefinition = gql`query infrastructureDefinition($infrastructureId: String!) {
  result: infrastructureDefinition(infrastructureId: $infrastructureId) {
    id
    name
  }
}`

export const infrastructureDefinitionByName = gql`query infrastructureDefinitionByName($environmentId: String!, $infrastructureName: String!) {
  result: infrastructureDefinitionByName(
    environmentId: $environmentId
    infrastructureName: $infrastructureName
  ) {
    id
    name
  }
}`

export const infrastructureDefinitions = gql`query infrastructureDefinitions($filters: [InfrastructureDefinitionFilter], $limit: Int = 100, $offset: Int = 0) {
  result: infrastructureDefinitions(
    filters: $filters
    limit: $limit
    offset: $offset
  ) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const instances = gql`query instances($filters: [InstanceFilter], $limit: Int = 100, $offset: Int = 0) {
  result: instances(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const k8sLabels = gql`query k8sLabels($filters: [K8sLabelFilter], $limit: Int = 100, $offset: Int = 0) {
  result: k8sLabels(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const k8sWorkloadRecommendations = gql`query k8sWorkloadRecommendations($filters: [WorkloadFilter], $limit: Int = 100, $offset: Int = 0) {
  result: k8sWorkloadRecommendations(
    filters: $filters
    limit: $limit
    offset: $offset
  ) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const pipeline = gql`query pipeline($pipelineId: String!) {
  result: pipeline(pipelineId: $pipelineId) {
    id
    name
  }
}`

export const pipelineByName = gql`query pipelineByName($applicationId: String!, $pipelineName: String!) {
  result: pipelineByName(
    applicationId: $applicationId
    pipelineName: $pipelineName
  ) {
    id
    name
  }
}`

export const pipelines = gql`query pipelines($filters: [PipelineFilter], $limit: Int = 100, $offset: Int = 0) {
  result: pipelines(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const secret = gql`query secret($secretId: String!, $secretType: SecretType!) {
  result: secret(secretId: $secretId, secretType: $secretType) {
    id
    name
  }
}`

export const secretByName = gql`query secretByName($name: String!, $secretType: SecretType!) {
  result: secretByName(name: $name, secretType: $secretType) {
    id
    name
  }
}`

export const secretManager = gql`query secretManager($secretManagerId: String!) {
  result: secretManager(secretManagerId: $secretManagerId) {
    id
    name
  }
}`

export const secretManagerByName = gql`query secretManagerByName($name: String!) {
  result: secretManagerByName(name: $name) {
    id
    name
  }
}`

export const secretManagers = gql`query secretManagers($filters: [SecretManagerFilter], $limit: Int = 100, $offset: Int = 0) {
  result: secretManagers(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const service = gql`query service($serviceId: String!) {
  result: service(serviceId: $serviceId) {
    id
    name
  }
}`

export const services = gql`query services($filters: [ServiceFilter], $limit: Int = 100, $offset: Int = 0) {
  result: services(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const ssoProvider = gql`query ssoProvider($ssoProviderId: String!) {
  result: ssoProvider(ssoProviderId: $ssoProviderId) {
    id
    name
  }
}`

export const ssoProviders = gql`query ssoProviders($limit: Int = 100, $offset: Int = 0) {
  result: ssoProviders(limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const tag = gql`query tag($tagId: String!) {
  result: tag(tagId: $tagId) {
    id
    name
  }
}`

export const tagByName = gql`query tagByName($name: String!) {
  result: tagByName(name: $name) {
    id
    name
  }
}`

export const tags = gql`query tags($filters: [TagEntityFilter], $limit: Int = 100, $offset: Int = 0) {
  result: tags(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const trigger = gql`query trigger($triggerId: String!) {
  result: trigger(triggerId: $triggerId) {
    id
    name
  }
}`

export const triggerByName = gql`query triggerByName($applicationId: String!, $triggerName: String!) {
  result: triggerByName(applicationId: $applicationId, triggerName: $triggerName) {
    id
    name
  }
}`

export const triggers = gql`query triggers($filters: [TriggerFilter], $limit: Int = 100, $offset: Int = 0) {
  result: triggers(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const user = gql`query user($id: String!) {
  result: user(id: $id) {
    id
    name
  }
}`

export const userByEmail = gql`query userByEmail($email: String!) {
  result: userByEmail(email: $email) {
    id
    name
  }
}`

export const userByName = gql`query userByName($name: String!) {
  result: userByName(name: $name) {
    id
    name
  }
}`

export const userGroup = gql`query userGroup($userGroupId: String!) {
  result: userGroup(userGroupId: $userGroupId) {
    id
    name
  }
}`

export const userGroupByName = gql`query userGroupByName($name: String!) {
  result: userGroupByName(name: $name) {
    id
    name
  }
}`

export const userGroups = gql`query userGroups($limit: Int = 100, $offset: Int = 0) {
  result: userGroups(limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const users = gql`query users($limit: Int = 100, $offset: Int = 0) {
  result: users(limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`

export const workflow = gql`query workflow($workflowId: String!) {
  result: workflow(workflowId: $workflowId) {
    id
    name
  }
}`

export const workflowByName = gql`query workflowByName($applicationId: String!, $workflowName: String!) {
  result: workflowByName(
    applicationId: $applicationId
    workflowName: $workflowName
  ) {
    id
    name
  }
}`

export const workflows = gql`query workflows($filters: [WorkflowFilter], $limit: Int = 100, $offset: Int = 0) {
  result: workflows(filters: $filters, limit: $limit, offset: $offset) {
    nodes {
      id
      name
    }
    pageInfo {
      hasMore
      total
    }
  }
}`