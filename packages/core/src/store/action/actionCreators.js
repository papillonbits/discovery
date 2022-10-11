import {
  CONTEXT_SET_INSTANCE,
  CONTEXT_SET_NAVIGATION,
  UI_SET_INSTANCES,
  UI_CREATE_INSTANCES_OBJECTS,
  UI_DELETE_INSTANCES_OBJECTS,
  UI_UPDATE_INSTANCES_OBJECTS,
  UI_SELECT_INSTANCES_OBJECTS,
  UI_SET_INSTANCES_PAGINATION,
  UI_SET_INSTANCES_SORT_OBJECT,
  UI_SET_INSTANCES_EDIT_OBJECT,
  UI_SET_FILES,
  UI_CREATE_FILES_OBJECTS,
  UI_DELETE_FILES_OBJECTS,
  UI_STORE_FILES_OBJECTS,
  UI_RENAME_FILES_OBJECTS,
  UI_SELECT_FILES_OBJECTS,
  UI_SET_FILES_LOCATION,
  UI_SET_FILES_PAGINATION,
  UI_SET_FILES_SEARCH,
  UI_SET_FILES_SORT,
  UI_SET_CREDENTIALS,
  UI_CREATE_CREDENTIALS_OBJECTS,
  UI_CREATE_CREDENTIALS_OBJECTS_KEYS,
  UI_DELETE_CREDENTIALS_OBJECTS,
  UI_DELETE_CREDENTIALS_OBJECTS_KEYS,
  UI_UPDATE_CREDENTIALS_OBJECTS,
  UI_UPDATE_CREDENTIALS_OBJECTS_KEYS,
  UI_SELECT_CREDENTIALS_OBJECTS,
  UI_SELECT_CREDENTIALS_OBJECTS_KEYS,
  UI_SET_CREDENTIALS_NAVIGATION,
  UI_SET_CREDENTIALS_PAGINATION,
  UI_SET_CREDENTIALS_SORT_OBJECT,
  UI_SET_CREDENTIALS_SORT_KEY,
  UI_SET_CREDENTIALS_EDIT_OBJECT,
  UI_SET_CREDENTIALS_EDIT_KEY,
  UI_SET_PIPELINES,
  UI_CREATE_PIPELINES_OBJECTS,
  UI_CREATE_PIPELINES_OBJECTS_STEPS,
  UI_CREATE_PIPELINES_OBJECTS_MAPPINGS,
  UI_CREATE_PIPELINES_OBJECTS_EXECUTIONS,
  UI_DELETE_PIPELINES_OBJECTS,
  UI_DELETE_PIPELINES_OBJECTS_STEPS,
  UI_DELETE_PIPELINES_OBJECTS_MAPPINGS,
  UI_DELETE_PIPELINES_OBJECTS_EXECUTIONS,
  UI_UPDATE_PIPELINES_OBJECTS,
  UI_UPDATE_PIPELINES_OBJECTS_STEPS,
  UI_UPDATE_PIPELINES_OBJECTS_MAPPINGS,
  UI_UPDATE_PIPELINES_OBJECTS_EXECUTIONS,
  UI_SELECT_PIPELINES_OBJECTS,
  UI_SELECT_PIPELINES_OBJECTS_STEPS,
  UI_SELECT_PIPELINES_OBJECTS_MAPPINGS,
  UI_SELECT_PIPELINES_OBJECTS_EXECUTIONS,
  UI_SET_PIPELINES_NAVIGATION,
  UI_SET_PIPELINES_PAGINATION,
  UI_SET_PIPELINES_SEARCH,
  UI_SET_PIPELINES_SORT_OBJECT,
  UI_SET_PIPELINES_SORT_STEP,
  UI_SET_PIPELINES_SORT_MAPPING,
  UI_SET_PIPELINES_SORT_EXECUTION,
  UI_SET_PIPELINES_EDIT_OBJECT,
  UI_SET_PIPELINES_EDIT_STEP,
  UI_SET_PIPELINES_EDIT_MAPPING,
  UI_SET_PIPELINES_EDIT_EXECUTION,
  UI_SET_STATE,
} from './actionTypes'

export const contextSetInstanceAction = (payload) => ({ type: CONTEXT_SET_INSTANCE, payload })
export const contextSetNavigationAction = (payload) => ({ type: CONTEXT_SET_NAVIGATION, payload })
export const uiSetInstancesAction = (payload) => ({ type: UI_SET_INSTANCES, payload })
export const uiCreateInstancesObjectsAction = (payload) => ({ type: UI_CREATE_INSTANCES_OBJECTS, payload })
export const uiDeleteInstancesObjectsAction = (payload) => ({ type: UI_DELETE_INSTANCES_OBJECTS, payload })
export const uiUpdateInstancesObjectsAction = (payload) => ({ type: UI_UPDATE_INSTANCES_OBJECTS, payload })
export const uiSelectInstancesObjectsAction = (payload) => ({ type: UI_SELECT_INSTANCES_OBJECTS, payload })
export const uiSetInstancesPaginationAction = (payload) => ({ type: UI_SET_INSTANCES_PAGINATION, payload })
export const uiSetInstancesSortObjectAction = (payload) => ({ type: UI_SET_INSTANCES_SORT_OBJECT, payload })
export const uiSetInstancesEditObjectAction = (payload) => ({ type: UI_SET_INSTANCES_EDIT_OBJECT, payload })
export const uiSetFilesAction = (payload) => ({ type: UI_SET_FILES, payload })
export const uiCreateFilesObjectsAction = (payload) => ({ type: UI_CREATE_FILES_OBJECTS, payload })
export const uiDeleteFilesObjectsAction = (payload) => ({ type: UI_DELETE_FILES_OBJECTS, payload })
export const uiStoreFilesObjectsAction = (payload) => ({ type: UI_STORE_FILES_OBJECTS, payload })
export const uiRenameFilesObjectsAction = (payload) => ({ type: UI_RENAME_FILES_OBJECTS, payload })
export const uiSelectFilesObjectsAction = (payload) => ({ type: UI_SELECT_FILES_OBJECTS, payload })
export const uiSetFilesLocationAction = (payload) => ({ type: UI_SET_FILES_LOCATION, payload })
export const uiSetFilesPaginationAction = (payload) => ({ type: UI_SET_FILES_PAGINATION, payload })
export const uiSetFilesSearchAction = (payload) => ({ type: UI_SET_FILES_SEARCH, payload })
export const uiSetFilesSortAction = (payload) => ({ type: UI_SET_FILES_SORT, payload })
export const uiSetCredentialsAction = (payload) => ({ type: UI_SET_CREDENTIALS, payload })
export const uiCreateCredentialsObjectsAction = (payload) => ({ type: UI_CREATE_CREDENTIALS_OBJECTS, payload })
export const uiCreateCredentialsObjectsKeysAction = (payload) => ({ type: UI_CREATE_CREDENTIALS_OBJECTS_KEYS, payload })
export const uiDeleteCredentialsObjectsAction = (payload) => ({ type: UI_DELETE_CREDENTIALS_OBJECTS, payload })
export const uiDeleteCredentialsObjectsKeysAction = (payload) => ({ type: UI_DELETE_CREDENTIALS_OBJECTS_KEYS, payload })
export const uiUpdateCredentialsObjectsAction = (payload) => ({ type: UI_UPDATE_CREDENTIALS_OBJECTS, payload })
export const uiUpdateCredentialsObjectsKeysAction = (payload) => ({ type: UI_UPDATE_CREDENTIALS_OBJECTS_KEYS, payload })
export const uiSelectCredentialsObjectsAction = (payload) => ({ type: UI_SELECT_CREDENTIALS_OBJECTS, payload })
export const uiSelectCredentialsObjectsKeysAction = (payload) => ({ type: UI_SELECT_CREDENTIALS_OBJECTS_KEYS, payload })
export const uiSetCredentialsNavigationAction = (payload) => ({ type: UI_SET_CREDENTIALS_NAVIGATION, payload })
export const uiSetCredentialsPaginationAction = (payload) => ({ type: UI_SET_CREDENTIALS_PAGINATION, payload })
export const uiSetCredentialsSortObjectAction = (payload) => ({ type: UI_SET_CREDENTIALS_SORT_OBJECT, payload })
export const uiSetCredentialsSortKeyAction = (payload) => ({ type: UI_SET_CREDENTIALS_SORT_KEY, payload })
export const uiSetCredentialsEditObjectAction = (payload) => ({ type: UI_SET_CREDENTIALS_EDIT_OBJECT, payload })
export const uiSetCredentialsEditKeyAction = (payload) => ({ type: UI_SET_CREDENTIALS_EDIT_KEY, payload })
export const uiSetPipelinesAction = (payload) => ({ type: UI_SET_PIPELINES, payload })
export const uiCreatePipelinesObjectsAction = (payload) => ({ type: UI_CREATE_PIPELINES_OBJECTS, payload })
export const uiCreatePipelinesObjectsStepsAction = (payload) => ({ type: UI_CREATE_PIPELINES_OBJECTS_STEPS, payload })
export const uiCreatePipelinesObjectsMappingsAction = (payload) => ({ type: UI_CREATE_PIPELINES_OBJECTS_MAPPINGS, payload })
export const uiCreatePipelinesObjectsExecutionsAction = (payload) => ({ type: UI_CREATE_PIPELINES_OBJECTS_EXECUTIONS, payload })
export const uiDeletePipelinesObjectsAction = (payload) => ({ type: UI_DELETE_PIPELINES_OBJECTS, payload })
export const uiDeletePipelinesObjectsStepsAction = (payload) => ({ type: UI_DELETE_PIPELINES_OBJECTS_STEPS, payload })
export const uiDeletePipelinesObjectsMappingsAction = (payload) => ({ type: UI_DELETE_PIPELINES_OBJECTS_MAPPINGS, payload })
export const uiDeletePipelinesObjectsExecutionsAction = (payload) => ({ type: UI_DELETE_PIPELINES_OBJECTS_EXECUTIONS, payload })
export const uiUpdatePipelinesObjectsAction = (payload) => ({ type: UI_UPDATE_PIPELINES_OBJECTS, payload })
export const uiUpdatePipelinesObjectsStepsAction = (payload) => ({ type: UI_UPDATE_PIPELINES_OBJECTS_STEPS, payload })
export const uiUpdatePipelinesObjectsMappingsAction = (payload) => ({ type: UI_UPDATE_PIPELINES_OBJECTS_MAPPINGS, payload })
export const uiUpdatePipelinesObjectsExecutionsAction = (payload) => ({ type: UI_UPDATE_PIPELINES_OBJECTS_EXECUTIONS, payload })
export const uiSelectPipelinesObjectsAction = (payload) => ({ type: UI_SELECT_PIPELINES_OBJECTS, payload })
export const uiSelectPipelinesObjectsStepsAction = (payload) => ({ type: UI_SELECT_PIPELINES_OBJECTS_STEPS, payload })
export const uiSelectPipelinesObjectsMappingsAction = (payload) => ({ type: UI_SELECT_PIPELINES_OBJECTS_MAPPINGS, payload })
export const uiSelectPipelinesObjectsExecutionsAction = (payload) => ({ type: UI_SELECT_PIPELINES_OBJECTS_EXECUTIONS, payload })
export const uiSetPipelinesNavigationAction = (payload) => ({ type: UI_SET_PIPELINES_NAVIGATION, payload })
export const uiSetPipelinesPaginationAction = (payload) => ({ type: UI_SET_PIPELINES_PAGINATION, payload })
export const uiSetPipelinesSearchAction = (payload) => ({ type: UI_SET_PIPELINES_SEARCH, payload })
export const uiSetPipelinesSortObjectAction = (payload) => ({ type: UI_SET_PIPELINES_SORT_OBJECT, payload })
export const uiSetPipelinesSortStepAction = (payload) => ({ type: UI_SET_PIPELINES_SORT_STEP, payload })
export const uiSetPipelinesSortMappingAction = (payload) => ({ type: UI_SET_PIPELINES_SORT_MAPPING, payload })
export const uiSetPipelinesSortExecutionAction = (payload) => ({ type: UI_SET_PIPELINES_SORT_EXECUTION, payload })
export const uiSetPipelinesEditObjectAction = (payload) => ({ type: UI_SET_PIPELINES_EDIT_OBJECT, payload })
export const uiSetPipelinesEditStepAction = (payload) => ({ type: UI_SET_PIPELINES_EDIT_STEP, payload })
export const uiSetPipelinesEditMappingAction = (payload) => ({ type: UI_SET_PIPELINES_EDIT_MAPPING, payload })
export const uiSetPipelinesEditExecutionAction = (payload) => ({ type: UI_SET_PIPELINES_EDIT_EXECUTION, payload })
export const uiSetStateAction = (payload) => ({ type: UI_SET_STATE, payload })
