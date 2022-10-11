import { combineReducers } from 'redux'
import {
  CONTEXT_SET_AUTHORIZATION,
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
} from '../action/actionTypes'
import { contextSetAuthorization, contextSetInstance, contextSetNavigation } from './context'

import { uiSetInstances } from './ui/instances/set/instances'
import { uiCreateInstancesObjects } from './ui/instances/create/instancesObjects'
import { uiDeleteInstancesObjects } from './ui/instances/delete/instancesObjects'
import { uiUpdateInstancesObjects } from './ui/instances/update/instancesObjects'
import { uiSelectInstancesObjects } from './ui/instances/select/instancesObjects'
import { uiSetInstancesPagination } from './ui/instances/pagination/instances'
import { uiSetInstancesSortObject } from './ui/instances/sort/instances'
import { uiSetInstancesEditObject } from './ui/instances/edit/instances'

import { uiSetFiles } from './ui/files/set/files'
import { uiCreateFilesObjects } from './ui/files/create/filesObjects'
import { uiDeleteFilesObjects } from './ui/files/delete/filesObjects'
import { uiStoreFilesObjects } from './ui/files/store/filesObjects'
import { uiRenameFilesObjects } from './ui/files/rename/filesObjects'
import { uiSelectFilesObjects } from './ui/files/select/filesObjects'
import { uiSetFilesLocation } from './ui/files/location/files'
import { uiSetFilesPagination } from './ui/files/pagination/files'
import { uiSetFilesSearch } from './ui/files/search/files'
import { uiSetFilesSort } from './ui/files/sort/files'

import { uiSetCredentials } from './ui/credentials/set/credentials'
import { uiCreateCredentialsObjects } from './ui/credentials/create/credentialsObjects'
import { uiCreateCredentialsObjectsKeys } from './ui/credentials/create/credentialsObjectsKeys'
import { uiDeleteCredentialsObjects } from './ui/credentials/delete/credentialsObjects'
import { uiDeleteCredentialsObjectsKeys } from './ui/credentials/delete/credentialsObjectsKeys'
import { uiUpdateCredentialsObjects } from './ui/credentials/update/credentialsObjects'
import { uiUpdateCredentialsObjectsKeys } from './ui/credentials/update/credentialsObjectsKeys'
import { uiSelectCredentialsObjects } from './ui/credentials/select/credentialsObjects'
import { uiSelectCredentialsObjectsKeys } from './ui/credentials/select/credentialsObjectsKeys'
import { uiSetCredentialsNavigation } from './ui/credentials/navigation/credentials'
import { uiSetCredentialsPagination } from './ui/credentials/pagination/credentials'
import { uiSetCredentialsSortObject } from './ui/credentials/sort/credentialsObjects'
import { uiSetCredentialsSortKey } from './ui/credentials/sort/credentialsObjectsKeys'
import { uiSetCredentialsEditObject } from './ui/credentials/edit/credentialsObjects'
import { uiSetCredentialsEditKey } from './ui/credentials/edit/credentialsObjectsKeys'

import { uiSetPipelines } from './ui/pipelines/set/pipelines'
import { uiCreatePipelinesObjects } from './ui/pipelines/create/pipelinesObjects'
import { uiCreatePipelinesObjectsSteps } from './ui/pipelines/create/pipelinesObjectsSteps'
import { uiCreatePipelinesObjectsMappings } from './ui/pipelines/create/pipelinesObjectsMappings'
import { uiCreatePipelinesObjectsExecutions } from './ui/pipelines/create/pipelinesObjectsExecutions'
import { uiDeletePipelinesObjects } from './ui/pipelines/delete/pipelinesObjects'
import { uiDeletePipelinesObjectsSteps } from './ui/pipelines/delete/pipelinesObjectsSteps'
import { uiDeletePipelinesObjectsMappings } from './ui/pipelines/delete/pipelinesObjectsMappings'
import { uiDeletePipelinesObjectsExecutions } from './ui/pipelines/delete/pipelinesObjectsExecutions'
import { uiUpdatePipelinesObjects } from './ui/pipelines/update/pipelinesObjects'
import { uiUpdatePipelinesObjectsSteps } from './ui/pipelines/update/pipelinesObjectsSteps'
import { uiUpdatePipelinesObjectsMappings } from './ui/pipelines/update/pipelinesObjectsMappings'
import { uiUpdatePipelinesObjectsExecutions } from './ui/pipelines/update/pipelinesObjectsExecutions'
import { uiSelectPipelinesObjects } from './ui/pipelines/select/pipelinesObjects'
import { uiSelectPipelinesObjectsSteps } from './ui/pipelines/select/pipelinesObjectsSteps'
import { uiSelectPipelinesObjectsMappings } from './ui/pipelines/select/pipelinesObjectsMappings'
import { uiSelectPipelinesObjectsExecutions } from './ui/pipelines/select/pipelinesObjectsExecutions'
import { uiSetPipelinesNavigation } from './ui/pipelines/navigation/pipelines'
import { uiSetPipelinesPagination } from './ui/pipelines/pagination/pipelines'
import { uiSetPipelinesSearch } from './ui/pipelines/search/pipelines'
import { uiSetPipelinesSortObject } from './ui/pipelines/sort/pipelinesObjects'
import { uiSetPipelinesSortStep } from './ui/pipelines/sort/pipelinesObjectsSteps'
import { uiSetPipelinesSortMapping } from './ui/pipelines/sort/pipelinesObjectsMappings'
import { uiSetPipelinesSortExecution } from './ui/pipelines/sort/pipelinesObjectsExecutions'
import { uiSetPipelinesEditObject } from './ui/pipelines/edit/pipelinesObjects'
import { uiSetPipelinesEditStep } from './ui/pipelines/edit/pipelinesObjectsSteps'
import { uiSetPipelinesEditMapping } from './ui/pipelines/edit/pipelinesObjectsMappings'
import { uiSetPipelinesEditExecution } from './ui/pipelines/edit/pipelinesObjectsExecutions'

import { uiSetState } from './ui/state/set'

export const getAppReducer = () =>
  combineReducers({
    // eslint-disable-next-line default-param-last
    context: (state = {}, action) => {
      switch (action.type) {
        case CONTEXT_SET_AUTHORIZATION:
          return contextSetAuthorization(state, action)
        case CONTEXT_SET_INSTANCE:
          return contextSetInstance(state, action)
        case CONTEXT_SET_NAVIGATION:
          return contextSetNavigation(state, action)
        default:
          return state
      }
    },
    // eslint-disable-next-line default-param-last
    api: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
    // eslint-disable-next-line default-param-last
    ui: (state = {}, action) => {
      switch (action.type) {
        case UI_SET_INSTANCES:
          return uiSetInstances(state, action)
        case UI_CREATE_INSTANCES_OBJECTS:
          return uiCreateInstancesObjects(state, action)
        case UI_DELETE_INSTANCES_OBJECTS:
          return uiDeleteInstancesObjects(state, action)
        case UI_UPDATE_INSTANCES_OBJECTS:
          return uiUpdateInstancesObjects(state, action)
        case UI_SELECT_INSTANCES_OBJECTS:
          return uiSelectInstancesObjects(state, action)
        case UI_SET_INSTANCES_PAGINATION:
          return uiSetInstancesPagination(state, action)
        case UI_SET_INSTANCES_SORT_OBJECT:
          return uiSetInstancesSortObject(state, action)
        case UI_SET_INSTANCES_EDIT_OBJECT:
          return uiSetInstancesEditObject(state, action)
        case UI_SET_FILES:
          return uiSetFiles(state, action)
        case UI_CREATE_FILES_OBJECTS:
          return uiCreateFilesObjects(state, action)
        case UI_DELETE_FILES_OBJECTS:
          return uiDeleteFilesObjects(state, action)
        case UI_STORE_FILES_OBJECTS:
          return uiStoreFilesObjects(state, action)
        case UI_RENAME_FILES_OBJECTS:
          return uiRenameFilesObjects(state, action)
        case UI_SELECT_FILES_OBJECTS:
          return uiSelectFilesObjects(state, action)
        case UI_SET_FILES_LOCATION:
          return uiSetFilesLocation(state, action)
        case UI_SET_FILES_PAGINATION:
          return uiSetFilesPagination(state, action)
        case UI_SET_FILES_SEARCH:
          return uiSetFilesSearch(state, action)
        case UI_SET_FILES_SORT:
          return uiSetFilesSort(state, action)
        case UI_SET_CREDENTIALS:
          return uiSetCredentials(state, action)
        case UI_CREATE_CREDENTIALS_OBJECTS:
          return uiCreateCredentialsObjects(state, action)
        case UI_CREATE_CREDENTIALS_OBJECTS_KEYS:
          return uiCreateCredentialsObjectsKeys(state, action)
        case UI_DELETE_CREDENTIALS_OBJECTS:
          return uiDeleteCredentialsObjects(state, action)
        case UI_DELETE_CREDENTIALS_OBJECTS_KEYS:
          return uiDeleteCredentialsObjectsKeys(state, action)
        case UI_UPDATE_CREDENTIALS_OBJECTS:
          return uiUpdateCredentialsObjects(state, action)
        case UI_UPDATE_CREDENTIALS_OBJECTS_KEYS:
          return uiUpdateCredentialsObjectsKeys(state, action)
        case UI_SELECT_CREDENTIALS_OBJECTS:
          return uiSelectCredentialsObjects(state, action)
        case UI_SELECT_CREDENTIALS_OBJECTS_KEYS:
          return uiSelectCredentialsObjectsKeys(state, action)
        case UI_SET_CREDENTIALS_NAVIGATION:
          return uiSetCredentialsNavigation(state, action)
        case UI_SET_CREDENTIALS_PAGINATION:
          return uiSetCredentialsPagination(state, action)
        case UI_SET_CREDENTIALS_SORT_OBJECT:
          return uiSetCredentialsSortObject(state, action)
        case UI_SET_CREDENTIALS_SORT_KEY:
          return uiSetCredentialsSortKey(state, action)
        case UI_SET_CREDENTIALS_EDIT_OBJECT:
          return uiSetCredentialsEditObject(state, action)
        case UI_SET_CREDENTIALS_EDIT_KEY:
          return uiSetCredentialsEditKey(state, action)
        case UI_SET_PIPELINES:
          return uiSetPipelines(state, action)
        case UI_CREATE_PIPELINES_OBJECTS:
          return uiCreatePipelinesObjects(state, action)
        case UI_CREATE_PIPELINES_OBJECTS_STEPS:
          return uiCreatePipelinesObjectsSteps(state, action)
        case UI_CREATE_PIPELINES_OBJECTS_MAPPINGS:
          return uiCreatePipelinesObjectsMappings(state, action)
        case UI_CREATE_PIPELINES_OBJECTS_EXECUTIONS:
          return uiCreatePipelinesObjectsExecutions(state, action)
        case UI_DELETE_PIPELINES_OBJECTS:
          return uiDeletePipelinesObjects(state, action)
        case UI_DELETE_PIPELINES_OBJECTS_STEPS:
          return uiDeletePipelinesObjectsSteps(state, action)
        case UI_DELETE_PIPELINES_OBJECTS_MAPPINGS:
          return uiDeletePipelinesObjectsMappings(state, action)
        case UI_DELETE_PIPELINES_OBJECTS_EXECUTIONS:
          return uiDeletePipelinesObjectsExecutions(state, action)
        case UI_UPDATE_PIPELINES_OBJECTS:
          return uiUpdatePipelinesObjects(state, action)
        case UI_UPDATE_PIPELINES_OBJECTS_STEPS:
          return uiUpdatePipelinesObjectsSteps(state, action)
        case UI_UPDATE_PIPELINES_OBJECTS_MAPPINGS:
          return uiUpdatePipelinesObjectsMappings(state, action)
        case UI_UPDATE_PIPELINES_OBJECTS_EXECUTIONS:
          return uiUpdatePipelinesObjectsExecutions(state, action)
        case UI_SELECT_PIPELINES_OBJECTS:
          return uiSelectPipelinesObjects(state, action)
        case UI_SELECT_PIPELINES_OBJECTS_STEPS:
          return uiSelectPipelinesObjectsSteps(state, action)
        case UI_SELECT_PIPELINES_OBJECTS_MAPPINGS:
          return uiSelectPipelinesObjectsMappings(state, action)
        case UI_SELECT_PIPELINES_OBJECTS_EXECUTIONS:
          return uiSelectPipelinesObjectsExecutions(state, action)
        case UI_SET_PIPELINES_NAVIGATION:
          return uiSetPipelinesNavigation(state, action)
        case UI_SET_PIPELINES_PAGINATION:
          return uiSetPipelinesPagination(state, action)
        case UI_SET_PIPELINES_SEARCH:
          return uiSetPipelinesSearch(state, action)
        case UI_SET_PIPELINES_SORT_OBJECT:
          return uiSetPipelinesSortObject(state, action)
        case UI_SET_PIPELINES_SORT_STEP:
          return uiSetPipelinesSortStep(state, action)
        case UI_SET_PIPELINES_SORT_MAPPING:
          return uiSetPipelinesSortMapping(state, action)
        case UI_SET_PIPELINES_SORT_EXECUTION:
          return uiSetPipelinesSortExecution(state, action)
        case UI_SET_PIPELINES_EDIT_OBJECT:
          return uiSetPipelinesEditObject(state, action)
        case UI_SET_PIPELINES_EDIT_STEP:
          return uiSetPipelinesEditStep(state, action)
        case UI_SET_PIPELINES_EDIT_MAPPING:
          return uiSetPipelinesEditMapping(state, action)
        case UI_SET_PIPELINES_EDIT_EXECUTION:
          return uiSetPipelinesEditExecution(state, action)
        case UI_SET_STATE:
          return uiSetState(state, action)
        default:
          return state
      }
    },
  })
