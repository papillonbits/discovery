import {
  contextSetInstanceAction,
  contextSetNavigationAction,
  uiSetInstancesAction,
  uiCreateInstancesObjectsAction,
  uiDeleteInstancesObjectsAction,
  uiUpdateInstancesObjectsAction,
  uiSelectInstancesObjectsAction,
  uiSetInstancesPaginationAction,
  uiSetInstancesSortObjectAction,
  uiSetInstancesEditObjectAction,
  uiSetFilesAction,
  uiCreateFilesObjectsAction,
  uiDeleteFilesObjectsAction,
  uiStoreFilesObjectsAction,
  uiRenameFilesObjectsAction,
  uiSelectFilesObjectsAction,
  uiSetFilesLocationAction,
  uiSetFilesPaginationAction,
  uiSetFilesSearchAction,
  uiSetFilesSortAction,
  uiSetCredentialsAction,
  uiCreateCredentialsObjectsAction,
  uiCreateCredentialsObjectsKeysAction,
  uiDeleteCredentialsObjectsAction,
  uiDeleteCredentialsObjectsKeysAction,
  uiUpdateCredentialsObjectsAction,
  uiUpdateCredentialsObjectsKeysAction,
  uiSelectCredentialsObjectsAction,
  uiSelectCredentialsObjectsKeysAction,
  uiSetCredentialsNavigationAction,
  uiSetCredentialsPaginationAction,
  uiSetCredentialsSortObjectAction,
  uiSetCredentialsSortKeyAction,
  uiSetCredentialsEditObjectAction,
  uiSetCredentialsEditKeyAction,
  uiSetPipelinesAction,
  uiCreatePipelinesObjectsAction,
  uiCreatePipelinesObjectsStepsAction,
  uiCreatePipelinesObjectsMappingsAction,
  uiCreatePipelinesObjectsExecutionsAction,
  uiDeletePipelinesObjectsAction,
  uiDeletePipelinesObjectsStepsAction,
  uiDeletePipelinesObjectsMappingsAction,
  uiDeletePipelinesObjectsExecutionsAction,
  uiUpdatePipelinesObjectsAction,
  uiUpdatePipelinesObjectsStepsAction,
  uiUpdatePipelinesObjectsMappingsAction,
  uiUpdatePipelinesObjectsExecutionsAction,
  uiSelectPipelinesObjectsAction,
  uiSelectPipelinesObjectsStepsAction,
  uiSelectPipelinesObjectsMappingsAction,
  uiSelectPipelinesObjectsExecutionsAction,
  uiSetPipelinesNavigationAction,
  uiSetPipelinesPaginationAction,
  uiSetPipelinesSearchAction,
  uiSetPipelinesSortObjectAction,
  uiSetPipelinesSortStepAction,
  uiSetPipelinesSortMappingAction,
  uiSetPipelinesSortExecutionAction,
  uiSetPipelinesEditObjectAction,
  uiSetPipelinesEditStepAction,
  uiSetPipelinesEditMappingAction,
  uiSetPipelinesEditExecutionAction,
  uiSetStateAction,
} from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'fantastic-payload' }

  describe('context', () => {
    describe('contextSetInstanceAction()', () => {
      test('must return action with given payload', () => {
        expect(contextSetInstanceAction(payload)).toMatchObject({ type: 'CONTEXT_SET_INSTANCE', payload })
      })
    })

    describe('contextSetNavigationAction()', () => {
      test('must return action with given payload', () => {
        expect(contextSetNavigationAction(payload)).toMatchObject({ type: 'CONTEXT_SET_NAVIGATION', payload })
      })
    })
  })

  describe('api', () => {})

  describe('ui', () => {
    describe('instances', () => {
      describe('pagination', () => {
        describe('uiSetInstancesPaginationAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetInstancesPaginationAction(payload)).toMatchObject({ type: 'UI_SET_INSTANCES_PAGINATION', payload })
          })
        })
      })

      describe('sort', () => {
        describe('uiSetInstancesSortObjectAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetInstancesSortObjectAction(payload)).toMatchObject({ type: 'UI_SET_INSTANCES_SORT_OBJECT', payload })
          })
        })
      })

      describe('edit', () => {
        describe('uiSetInstancesEditObjectAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetInstancesEditObjectAction(payload)).toMatchObject({ type: 'UI_SET_INSTANCES_EDIT_OBJECT', payload })
          })
        })
      })

      describe('objects', () => {
        describe('uiSetInstancesAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetInstancesAction(payload)).toMatchObject({ type: 'UI_SET_INSTANCES', payload })
          })
        })

        describe('uiCreateInstancesObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiCreateInstancesObjectsAction(payload)).toMatchObject({ type: 'UI_CREATE_INSTANCES_OBJECTS', payload })
          })
        })

        describe('uiDeleteInstancesObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiDeleteInstancesObjectsAction(payload)).toMatchObject({ type: 'UI_DELETE_INSTANCES_OBJECTS', payload })
          })
        })

        describe('uiUpdateInstancesObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiUpdateInstancesObjectsAction(payload)).toMatchObject({ type: 'UI_UPDATE_INSTANCES_OBJECTS', payload })
          })
        })

        describe('uiSelectInstancesObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSelectInstancesObjectsAction(payload)).toMatchObject({ type: 'UI_SELECT_INSTANCES_OBJECTS', payload })
          })
        })
      })
    })

    describe('files', () => {
      describe('uiSetFilesAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetFilesAction(payload)).toMatchObject({ type: 'UI_SET_FILES', payload })
        })
      })

      describe('uiCreateFilesObjectsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiCreateFilesObjectsAction(payload)).toMatchObject({ type: 'UI_CREATE_FILES_OBJECTS', payload })
        })
      })

      describe('uiDeleteFilesObjectsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiDeleteFilesObjectsAction(payload)).toMatchObject({ type: 'UI_DELETE_FILES_OBJECTS', payload })
        })
      })

      describe('uiStoreFilesObjectsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiStoreFilesObjectsAction(payload)).toMatchObject({ type: 'UI_STORE_FILES_OBJECTS', payload })
        })
      })

      describe('uiRenameFilesObjectsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiRenameFilesObjectsAction(payload)).toMatchObject({ type: 'UI_RENAME_FILES_OBJECTS', payload })
        })
      })

      describe('uiSelectFilesObjectsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSelectFilesObjectsAction(payload)).toMatchObject({ type: 'UI_SELECT_FILES_OBJECTS', payload })
        })
      })

      describe('uiSetFilesLocationAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetFilesLocationAction(payload)).toMatchObject({ type: 'UI_SET_FILES_LOCATION', payload })
        })
      })

      describe('uiSetFilesPaginationAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetFilesPaginationAction(payload)).toMatchObject({ type: 'UI_SET_FILES_PAGINATION', payload })
        })
      })

      describe('search', () => {
        describe('uiSetFilesSearchAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetFilesSearchAction(payload)).toMatchObject({ type: 'UI_SET_FILES_SEARCH', payload })
          })
        })
      })

      describe('sort', () => {
        describe('uiSetFilesSortAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetFilesSortAction(payload)).toMatchObject({ type: 'UI_SET_FILES_SORT', payload })
          })
        })
      })
    })

    describe('credentials', () => {
      describe('navigation', () => {
        describe('uiSetCredentialsNavigationAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetCredentialsNavigationAction(payload)).toMatchObject({ type: 'UI_SET_CREDENTIALS_NAVIGATION', payload })
          })
        })
      })

      describe('pagination', () => {
        describe('uiSetCredentialsPaginationAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetCredentialsPaginationAction(payload)).toMatchObject({ type: 'UI_SET_CREDENTIALS_PAGINATION', payload })
          })
        })
      })

      describe('sort', () => {
        describe('uiSetCredentialsSortObjectAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetCredentialsSortObjectAction(payload)).toMatchObject({ type: 'UI_SET_CREDENTIALS_SORT_OBJECT', payload })
          })
        })

        describe('uiSetCredentialsSortKeyAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetCredentialsSortKeyAction(payload)).toMatchObject({ type: 'UI_SET_CREDENTIALS_SORT_KEY', payload })
          })
        })
      })

      describe('edit', () => {
        describe('uiSetCredentialsEditObjectAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetCredentialsEditObjectAction(payload)).toMatchObject({ type: 'UI_SET_CREDENTIALS_EDIT_OBJECT', payload })
          })
        })

        describe('uiSetCredentialsEditKeyAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetCredentialsEditKeyAction(payload)).toMatchObject({ type: 'UI_SET_CREDENTIALS_EDIT_KEY', payload })
          })
        })
      })

      describe('objects', () => {
        describe('uiSetCredentialsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetCredentialsAction(payload)).toMatchObject({ type: 'UI_SET_CREDENTIALS', payload })
          })
        })

        describe('uiCreateCredentialsObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiCreateCredentialsObjectsAction(payload)).toMatchObject({ type: 'UI_CREATE_CREDENTIALS_OBJECTS', payload })
          })
        })

        describe('uiDeleteCredentialsObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiDeleteCredentialsObjectsAction(payload)).toMatchObject({ type: 'UI_DELETE_CREDENTIALS_OBJECTS', payload })
          })
        })

        describe('uiUpdateCredentialsObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiUpdateCredentialsObjectsAction(payload)).toMatchObject({ type: 'UI_UPDATE_CREDENTIALS_OBJECTS', payload })
          })
        })

        describe('uiSelectCredentialsObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSelectCredentialsObjectsAction(payload)).toMatchObject({ type: 'UI_SELECT_CREDENTIALS_OBJECTS', payload })
          })
        })
      })

      describe('keys', () => {
        describe('uiCreateCredentialsObjectsKeysAction()', () => {
          test('must return action with given payload', () => {
            expect(uiCreateCredentialsObjectsKeysAction(payload)).toMatchObject({ type: 'UI_CREATE_CREDENTIALS_OBJECTS_KEYS', payload })
          })
        })

        describe('uiDeleteCredentialsObjectsKeysAction()', () => {
          test('must return action with given payload', () => {
            expect(uiDeleteCredentialsObjectsKeysAction(payload)).toMatchObject({ type: 'UI_DELETE_CREDENTIALS_OBJECTS_KEYS', payload })
          })
        })

        describe('uiUpdateCredentialsObjectsKeysAction()', () => {
          test('must return action with given payload', () => {
            expect(uiUpdateCredentialsObjectsKeysAction(payload)).toMatchObject({ type: 'UI_UPDATE_CREDENTIALS_OBJECTS_KEYS', payload })
          })
        })

        describe('uiSelectCredentialsObjectsKeysAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSelectCredentialsObjectsKeysAction(payload)).toMatchObject({ type: 'UI_SELECT_CREDENTIALS_OBJECTS_KEYS', payload })
          })
        })
      })
    })

    describe('pipelines', () => {
      describe('navigation', () => {
        describe('uiSetPipelinesNavigationAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetPipelinesNavigationAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_NAVIGATION', payload })
          })
        })
      })

      describe('pagination', () => {
        describe('uiSetPipelinesPaginationAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetPipelinesPaginationAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_PAGINATION', payload })
          })
        })
      })

      describe('search', () => {
        describe('uiSetPipelinesSearchAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetPipelinesSearchAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_SEARCH', payload })
          })
        })
      })

      describe('sort', () => {
        describe('sort', () => {
          describe('uiSetPipelinesSortObjectAction()', () => {
            test('must return action with given payload', () => {
              expect(uiSetPipelinesSortObjectAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_SORT_OBJECT', payload })
            })
          })

          describe('uiSetPipelinesSortStepAction()', () => {
            test('must return action with given payload', () => {
              expect(uiSetPipelinesSortStepAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_SORT_STEP', payload })
            })
          })

          describe('uiSetPipelinesSortMappingAction()', () => {
            test('must return action with given payload', () => {
              expect(uiSetPipelinesSortMappingAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_SORT_MAPPING', payload })
            })
          })

          describe('uiSetPipelinesSortExecutionAction()', () => {
            test('must return action with given payload', () => {
              expect(uiSetPipelinesSortExecutionAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_SORT_EXECUTION', payload })
            })
          })
        })
      })

      describe('edit', () => {
        describe('uiSetPipelinesEditObjectAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetPipelinesEditObjectAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_EDIT_OBJECT', payload })
          })
        })

        describe('uiSetPipelinesEditStepAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetPipelinesEditStepAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_EDIT_STEP', payload })
          })
        })

        describe('uiSetPipelinesEditMappingAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetPipelinesEditMappingAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_EDIT_MAPPING', payload })
          })
        })

        describe('uiSetPipelinesEditExecutionAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetPipelinesEditExecutionAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES_EDIT_EXECUTION', payload })
          })
        })
      })

      describe('objects', () => {
        describe('uiSetPipelinesAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSetPipelinesAction(payload)).toMatchObject({ type: 'UI_SET_PIPELINES', payload })
          })
        })

        describe('uiCreatePipelinesObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiCreatePipelinesObjectsAction(payload)).toMatchObject({ type: 'UI_CREATE_PIPELINES_OBJECTS', payload })
          })
        })

        describe('uiDeletePipelinesObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiDeletePipelinesObjectsAction(payload)).toMatchObject({ type: 'UI_DELETE_PIPELINES_OBJECTS', payload })
          })
        })

        describe('uiUpdatePipelinesObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiUpdatePipelinesObjectsAction(payload)).toMatchObject({ type: 'UI_UPDATE_PIPELINES_OBJECTS', payload })
          })
        })

        describe('uiSelectPipelinesObjectsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSelectPipelinesObjectsAction(payload)).toMatchObject({ type: 'UI_SELECT_PIPELINES_OBJECTS', payload })
          })
        })
      })

      describe('steps', () => {
        describe('uiCreatePipelinesObjectsStepsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiCreatePipelinesObjectsStepsAction(payload)).toMatchObject({ type: 'UI_CREATE_PIPELINES_OBJECTS_STEPS', payload })
          })
        })

        describe('uiDeletePipelinesObjectsStepsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiDeletePipelinesObjectsStepsAction(payload)).toMatchObject({ type: 'UI_DELETE_PIPELINES_OBJECTS_STEPS', payload })
          })
        })

        describe('uiUpdatePipelinesObjectsStepsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiUpdatePipelinesObjectsStepsAction(payload)).toMatchObject({ type: 'UI_UPDATE_PIPELINES_OBJECTS_STEPS', payload })
          })
        })

        describe('uiSelectPipelinesObjectsStepsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSelectPipelinesObjectsStepsAction(payload)).toMatchObject({ type: 'UI_SELECT_PIPELINES_OBJECTS_STEPS', payload })
          })
        })
      })

      describe('mappings', () => {
        describe('uiCreatePipelinesObjectsMappingsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiCreatePipelinesObjectsMappingsAction(payload)).toMatchObject({ type: 'UI_CREATE_PIPELINES_OBJECTS_MAPPINGS', payload })
          })
        })

        describe('uiDeletePipelinesObjectsMappingsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiDeletePipelinesObjectsMappingsAction(payload)).toMatchObject({ type: 'UI_DELETE_PIPELINES_OBJECTS_MAPPINGS', payload })
          })
        })

        describe('uiUpdatePipelinesObjectsMappingsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiUpdatePipelinesObjectsMappingsAction(payload)).toMatchObject({ type: 'UI_UPDATE_PIPELINES_OBJECTS_MAPPINGS', payload })
          })
        })

        describe('uiSelectPipelinesObjectsMappingsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSelectPipelinesObjectsMappingsAction(payload)).toMatchObject({ type: 'UI_SELECT_PIPELINES_OBJECTS_MAPPINGS', payload })
          })
        })
      })

      describe('executions', () => {
        describe('uiCreatePipelinesObjectsExecutionsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiCreatePipelinesObjectsExecutionsAction(payload)).toMatchObject({
              type: 'UI_CREATE_PIPELINES_OBJECTS_EXECUTIONS',
              payload,
            })
          })
        })

        describe('uiDeletePipelinesObjectsExecutionsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiDeletePipelinesObjectsExecutionsAction(payload)).toMatchObject({
              type: 'UI_DELETE_PIPELINES_OBJECTS_EXECUTIONS',
              payload,
            })
          })
        })

        describe('uiUpdatePipelinesObjectsExecutionsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiUpdatePipelinesObjectsExecutionsAction(payload)).toMatchObject({
              type: 'UI_UPDATE_PIPELINES_OBJECTS_EXECUTIONS',
              payload,
            })
          })
        })

        describe('uiSelectPipelinesObjectsExecutionsAction()', () => {
          test('must return action with given payload', () => {
            expect(uiSelectPipelinesObjectsExecutionsAction(payload)).toMatchObject({
              type: 'UI_SELECT_PIPELINES_OBJECTS_EXECUTIONS',
              payload,
            })
          })
        })
      })
    })

    describe('state', () => {
      describe('uiSetStateAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetStateAction(payload)).toMatchObject({ type: 'UI_SET_STATE', payload })
        })
      })
    })
  })
})
