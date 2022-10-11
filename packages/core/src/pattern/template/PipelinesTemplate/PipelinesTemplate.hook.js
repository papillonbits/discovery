import { useSelector } from 'react-redux'
import { paginate } from '@papillonbits/library/pagination'
import { sortDefault } from '@papillonbits/library/sort'
import { useBindActionCreators } from '../../../store/dispatch'
import { eventKey, pageSize as pageSizeDefault, pageNumber as pageNumberDefault, messageType, pageContent } from '../../../library/constant'
import { dataTestPipelines } from '../../../library/constant/dataTest/pipelines'
import { alertTextPipelines } from '../../../library/constant/alertText/pipelines'

export function usePipelinesState() {
  const {
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
    uiSetStateRegularThunk,
    uiSetStateConsentThunk,
  } = useBindActionCreators()

  const defaultPipelinesItem = {
    navigation: {
      ariaAttr: {},
    },
    pipelinesObjects: [],
    pagination: {
      pageSize: pageSizeDefault.pipelines,
      pageNumber: pageNumberDefault,
      currentPage: {
        indexItems: [],
        currentIndex: -1,
        canMoveBackwards: false,
        canMoveForward: false,
      },
    },
    search: {
      pipelinesObjects: null,
    },
    sort: sortDefault,
  }

  const navigatorHeading = pageContent.pipelines.subheadHeading
  const instance = useSelector(({ context }) => context.instance)
  const contextAuthorization = useSelector(({ context }) => context.authorization)
  const selectedInstance = useSelector(({ context }) => context.instance.items.find((instanceItem) => instanceItem.isSelected === true))
  const {
    // pipelinesTemplates,
    pipelinesObjects,
    navigation,
    pagination: { pageSize, pageNumber, currentPage },
    search,
    sort,
    edit,
  } = useSelector(({ ui }) => ui.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === selectedInstance?.id)) ??
  defaultPipelinesItem
  const state = useSelector(({ ui }) => ui.state)

  const paginatedRandomPipelinesObjects = paginate({
    array: search.pipelinesObjects || pipelinesObjects,
    pageSize,
    pageNumber,
  })

  const selectedObjects = paginatedRandomPipelinesObjects.filter(({ isSelected }) => isSelected === true)

  const selectedObjectsIdNameList = selectedObjects.map(({ name }) => `${name}`).join('\n')

  const selectedObjectsSteps = selectedObjects?.[0]?.steps.filter(({ isSelected }) => isSelected === true)

  const selectedObjectsStepsIdNameList = selectedObjectsSteps?.map(({ name }) => `${name}`).join('\n')

  const selectedObjectsMappings = selectedObjects?.[0]?.mappings.filter(({ isSelected }) => isSelected === true)

  const selectedObjectsMappingsIdNameList = selectedObjectsMappings?.map(({ name }) => `${name}`).join('\n')

  const selectedObjectsExecutions = selectedObjects?.[0]?.executions.filter(({ isSelected }) => isSelected === true)

  const selectedObjectsExecutionsIdNameList = selectedObjectsExecutions?.map(({ name }) => `${name}`).join('\n')

  const paginatedRandomPipelinesObjectsNamesValues = paginatedRandomPipelinesObjects.map((pipelinesObject) =>
    (({ id, isSelected, steps, mappings, executions, ...otherProperties }) => ({
      names: Object.keys({ id, isSelected, ...otherProperties }),
      values: Object.values({ id, isSelected, ...otherProperties }),
    }))(pipelinesObject),
  )

  const selectedPipelinesObjects = pipelinesObjects.filter(({ isSelected }) => isSelected === true)

  let selectedPipelinesObjectSteps = []
  let selectedPipelinesObjectMappings = []
  let selectedPipelinesObjectExecutions = []
  if (selectedPipelinesObjects.length === 1) {
    selectedPipelinesObjectSteps = selectedPipelinesObjects[0].steps
    selectedPipelinesObjectMappings = selectedPipelinesObjects[0].mappings
    selectedPipelinesObjectExecutions = selectedPipelinesObjects[0].executions
  }

  const paginatedRandomPipelinesObjectStepsNamesValues = selectedPipelinesObjectSteps.map((pipelinesObjectStep) =>
    (({ id, isSelected, password, 'confirm-password': confirmPassword, ...otherProperties }) => ({
      names: Object.keys({ id, isSelected, ...otherProperties }),
      values: Object.values({ id, isSelected, ...otherProperties }),
    }))(pipelinesObjectStep),
  )

  const paginatedRandomPipelinesObjectMappingsNamesValues = selectedPipelinesObjectMappings.map((pipelinesObjectMapping) =>
    (({ id, isSelected, configuration, predicates, data, ...otherProperties }) => ({
      names: Object.keys({ id, isSelected, ...otherProperties }),
      values: Object.values({ id, isSelected, ...otherProperties }),
    }))(pipelinesObjectMapping),
  )

  const paginatedRandomPipelinesObjectExecutionsNamesValues = selectedPipelinesObjectExecutions.map((pipelinesObjectExecution) =>
    (({ id, isSelected, ...otherProperties }) => ({
      names: Object.keys({ id, isSelected, ...otherProperties }),
      values: Object.values({ id, isSelected, ...otherProperties }),
    }))(pipelinesObjectExecution),
  )

  /* istanbul ignore next */
  function searchPipelineDirectionOnClick(newPipelineDirection) {
    uiSetPipelinesSearchAction({
      selectedInstanceId: selectedInstance.id,
      'pipeline-direction': newPipelineDirection.items,
      'pipeline-state': search['pipeline-state'],
      name: search.name,
      prefix: search.prefix,
    })
  }

  /* istanbul ignore next */
  function searchPipelineStateOnClick(newPipelineState) {
    uiSetPipelinesSearchAction({
      selectedInstanceId: selectedInstance.id,
      'pipeline-direction': search['pipeline-direction'],
      'pipeline-state': newPipelineState.items,
      name: search.name,
      prefix: search.prefix,
    })
  }

  /* istanbul ignore next */
  function findNameInputOnChange(event) {
    uiSetPipelinesSearchAction({
      selectedInstanceId: selectedInstance.id,
      'pipeline-direction': search['pipeline-direction'],
      'pipeline-state': search['pipeline-state'],
      name: event.target.value,
      prefix: search.prefix,
    })
  }

  /* istanbul ignore next */
  function findNameInputOnKeyUp(event) {
    if (event.key === eventKey.enter) {
      uiSetPipelinesSearchAction({
        selectedInstanceId: selectedInstance.id,
        'pipeline-direction': search['pipeline-direction'],
        'pipeline-state': search['pipeline-state'],
        name: event.target.value,
        prefix: search.prefix,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetPipelinesSearchAction({
        selectedInstanceId: selectedInstance.id,
        'pipeline-direction': search['pipeline-direction'],
        'pipeline-state': search['pipeline-state'],
        name: null,
        prefix: search.prefix,
      })
      return
    }

    uiSetPipelinesSearchAction({
      selectedInstanceId: selectedInstance.id,
      'pipeline-direction': search['pipeline-direction'],
      'pipeline-state': search['pipeline-state'],
      name: search.name,
      prefix: search.prefix,
    })
  }

  /* istanbul ignore next */
  function findNameInputOnFocus() {
    uiSetPipelinesSearchAction({
      selectedInstanceId: selectedInstance.id,
      'pipeline-direction': search['pipeline-direction'],
      'pipeline-state': search['pipeline-state'],
      name: search.name,
      prefix: search.prefix,
    })
  }

  /* istanbul ignore next */
  function findNameInputOnBlur() {
    // uiSetPipelinesSearchAction({
    //   selectedInstanceId: selectedInstance.id,
    //   'pipeline-direction': search['pipeline-direction'],
    //   'pipeline-state': search['pipeline-state'],
    //   name: search.name,
    //   prefix: search.prefix,
    // })
  }

  /* istanbul ignore next */
  function findPrefixInputOnChange(event) {
    uiSetPipelinesSearchAction({
      selectedInstanceId: selectedInstance.id,
      'pipeline-direction': search['pipeline-direction'],
      'pipeline-state': search['pipeline-state'],
      name: search.name,
      prefix: event.target.value,
    })
  }

  /* istanbul ignore next */
  function findPrefixInputOnKeyUp(event) {
    if (event.key === eventKey.enter) {
      uiSetPipelinesSearchAction({
        selectedInstanceId: selectedInstance.id,
        'pipeline-direction': search['pipeline-direction'],
        'pipeline-state': search['pipeline-state'],
        name: search.name,
        prefix: event.target.value,
      })
      return
    }
    if (event.key === eventKey.escape) {
      uiSetPipelinesSearchAction({
        selectedInstanceId: selectedInstance.id,
        'pipeline-direction': search['pipeline-direction'],
        'pipeline-state': search['pipeline-state'],
        name: search.name,
        prefix: null,
      })
      return
    }

    uiSetPipelinesSearchAction({
      selectedInstanceId: selectedInstance.id,
      'pipeline-direction': search['pipeline-direction'],
      'pipeline-state': search['pipeline-state'],
      name: search.name,
      prefix: search.prefix,
    })
  }

  /* istanbul ignore next */
  function findPrefixInputOnFocus() {
    uiSetPipelinesSearchAction({
      selectedInstanceId: selectedInstance.id,
      'pipeline-direction': search['pipeline-direction'],
      'pipeline-state': search['pipeline-state'],
      name: search.name,
      prefix: search.prefix,
    })
  }

  /* istanbul ignore next */
  function findPrefixInputOnBlur() {
    // uiSetPipelinesSearchAction({
    //   selectedInstanceId: selectedInstance.id,
    //   'pipeline-direction': search['pipeline-direction'],
    //   'pipeline-state': search['pipeline-state'],
    //   name: search.name,
    //   prefix: search.prefix,
    // })
  }

  /* istanbul ignore next */
  function editObjectPipelineDirectionOnClick(newPipelineDirection) {
    uiSetPipelinesEditObjectAction({
      selectedInstanceId: selectedInstance.id,
      object: { ...edit.object, 'pipeline-direction': newPipelineDirection.items },
    })
  }

  /* istanbul ignore next */
  function editObjectPipelineStateOnClick(newPipelineState) {
    uiSetPipelinesEditObjectAction({
      selectedInstanceId: selectedInstance.id,
      object: { ...edit.object, 'pipeline-state': newPipelineState.items },
    })
  }

  /* istanbul ignore next */
  function editObjectNameOnChange(event) {
    uiSetPipelinesEditObjectAction({ selectedInstanceId: selectedInstance.id, object: { ...edit.object, name: event.target.value } })
  }

  /* istanbul ignore next */
  function editObjectDescriptionOnChange(event) {
    uiSetPipelinesEditObjectAction({ selectedInstanceId: selectedInstance.id, object: { ...edit.object, description: event.target.value } })
  }

  /* istanbul ignore next */
  function editObjectPrefixOnChange(event) {
    uiSetPipelinesEditObjectAction({ selectedInstanceId: selectedInstance.id, object: { ...edit.object, prefix: event.target.value } })
  }

  /* istanbul ignore next */
  function editObjectFileOnChange(event) {
    uiSetPipelinesEditObjectAction({ selectedInstanceId: selectedInstance.id, object: { ...edit.object, file: event.target.value } })
  }

  /* istanbul ignore next */
  function editStepDirectionOnClick(newStepDirection) {
    uiSetPipelinesEditStepAction({
      selectedInstanceId: selectedInstance.id,
      step: { ...edit.step, 'pipeline-step-direction': newStepDirection.items },
    })
  }

  /* istanbul ignore next */
  function editStepStateOnClick(newStepState) {
    uiSetPipelinesEditStepAction({
      selectedInstanceId: selectedInstance.id,
      step: { ...edit.step, 'pipeline-step-type': newStepState.items },
    })
  }

  /* istanbul ignore next */
  function editStepNameOnChange(event) {
    uiSetPipelinesEditStepAction({ selectedInstanceId: selectedInstance.id, step: { ...edit.step, name: event.target.value } })
  }

  /* istanbul ignore next */
  function editStepDescriptionOnChange(event) {
    uiSetPipelinesEditStepAction({ selectedInstanceId: selectedInstance.id, step: { ...edit.step, description: event.target.value } })
  }

  /* istanbul ignore next */
  function editStepUrlOnChange(event) {
    uiSetPipelinesEditStepAction({ selectedInstanceId: selectedInstance.id, step: { ...edit.step, url: event.target.value } })
  }

  /* istanbul ignore next */
  function editStepPortNumberOnChange(event) {
    uiSetPipelinesEditStepAction({ selectedInstanceId: selectedInstance.id, step: { ...edit.step, 'port-number': event.target.value } })
  }

  /* istanbul ignore next */
  function editStepUsernameOnChange(event) {
    uiSetPipelinesEditStepAction({ selectedInstanceId: selectedInstance.id, step: { ...edit.step, username: event.target.value } })
  }

  /* istanbul ignore next */
  function editStepPasswordOnChange(event) {
    uiSetPipelinesEditStepAction({ selectedInstanceId: selectedInstance.id, step: { ...edit.step, password: event.target.value } })
  }

  /* istanbul ignore next */
  function editStepConfirmPasswordOnChange(event) {
    uiSetPipelinesEditStepAction({
      selectedInstanceId: selectedInstance.id,
      step: { ...edit.step, 'confirm-password': event.target.value },
    })
  }

  /* istanbul ignore next */
  function editStepWikiLinkOnChange(event) {
    uiSetPipelinesEditStepAction({ selectedInstanceId: selectedInstance.id, step: { ...edit.step, 'wiki-link': event.target.value } })
  }

  /* istanbul ignore next */
  function editMappingNameOnChange(event) {
    uiSetPipelinesEditMappingAction({ selectedInstanceId: selectedInstance.id, mapping: { ...edit.mapping, name: event.target.value } })
  }

  /* istanbul ignore next */
  function editMappingDescriptionOnChange(event) {
    uiSetPipelinesEditMappingAction({
      selectedInstanceId: selectedInstance.id,
      mapping: { ...edit.mapping, description: event.target.value },
    })
  }

  /* istanbul ignore next */
  function editExecutionNameOnChange(event) {
    uiSetPipelinesEditExecutionAction({
      selectedInstanceId: selectedInstance.id,
      execution: { ...edit.execution, name: event.target.value },
    })
  }

  /* istanbul ignore next */
  function editExecutionDescriptionOnChange(event) {
    uiSetPipelinesEditExecutionAction({
      selectedInstanceId: selectedInstance.id,
      execution: { ...edit.execution, description: event.target.value },
    })
  }

  /* istanbul ignore next */
  function paginationOnClick(paginationAction) {
    uiSetPipelinesPaginationAction({ selectedInstanceId: selectedInstance.id, paginationAction })
    uiSetStateRegularThunk({ message: { text: alertTextPipelines.object.pagination.browsing, type: messageType.info } })
  }

  /* istanbul ignore next */
  function createObjectButtonOnClick() {
    if (!edit.object.name) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.object.action.create.validation.emptyName, type: messageType.warning },
      })
      return
    }

    if (pipelinesObjects.some(({ name }) => name === edit.object.name)) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.object.action.create.validation.sameName(edit.object.name), type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextPipelines.object.action.create.consent.question(edit.object.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiCreatePipelinesObjectsAction({ selectedInstance })
            uiSetStateRegularThunk({ message: { text: alertTextPipelines.object.action.create.success, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({
              message: { text: alertTextPipelines.object.action.create.consent.cancel, type: messageType.warning },
            })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function updateObjectButtonOnClick() {
    if (selectedObjects.length === 0) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.object.action.update.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (selectedObjects.length > 1) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.object.action.update.validation.singleObject, type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextPipelines.object.action.update.consent.question(edit.object.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiUpdatePipelinesObjectsAction({ selectedInstanceId: selectedInstance.id })
            uiSetStateRegularThunk({ message: { text: alertTextPipelines.object.action.update.success, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({
              message: { text: alertTextPipelines.object.action.update.consent.cancel, type: messageType.warning },
            })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function deleteObjectButtonOnClick() {
    if (selectedObjects.length === 0) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.object.action.delete.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsIdNameList) {
      uiSetStateConsentThunk({
        message: { text: alertTextPipelines.object.action.delete.consent.question(selectedObjectsIdNameList), type: messageType.consent },
        isLoading: true,
        consent: {
          action: {
            approve: () => {
              uiDeletePipelinesObjectsAction({ selectedObjects, selectedInstanceId: selectedInstance.id })
              uiSetStateRegularThunk({ message: { text: alertTextPipelines.object.action.delete.success, type: messageType.success } })
            },
            cancel: () => {
              uiSetStateRegularThunk({
                message: { text: alertTextPipelines.object.action.delete.consent.cancel, type: messageType.warning },
              })
            },
          },
        },
      })
    }
  }

  /* istanbul ignore next */
  function pipelinesObjectsFlexGridOnChange(changedObjects) {
    uiSelectPipelinesObjectsAction({ changedObjects, selectedInstanceId: selectedInstance.id })
  }

  /* !!! istanbul ignore next  !!! */
  function pipelinesObjectsFlexGridOnClick(newSort) {
    uiSetPipelinesSortObjectAction({ newSort, selectedInstanceId: selectedInstance.id })
  }

  /* istanbul ignore next */
  function createStepButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.create.validation.noParent, type: messageType.warning } })
      return
    }

    if (!edit?.step?.name) {
      uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.create.validation.emptyName, type: messageType.warning } })
      return
    }

    if (selectedObjects[0].steps.some(({ name }) => name === edit.step.name)) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.step.action.create.validation.sameName(edit.step.name), type: messageType.warning },
      })
      return
    }

    if (edit.step.password !== edit.step['confirm-password']) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.step.action.create.validation.passwordMatch, type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextPipelines.step.action.create.consent.question(edit.step.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiCreatePipelinesObjectsStepsAction({ selectedInstanceId: selectedInstance.id })
            uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.create.success, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.create.consent.cancel, type: messageType.warning } })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function updateStepButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.update.validation.noParent, type: messageType.warning } })
      return
    }

    if (selectedObjectsSteps.length > 1) {
      uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.update.validation.singleStep, type: messageType.warning } })
      return
    }

    if (selectedObjectsSteps.length === 0) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.step.action.update.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (!edit?.step?.name) {
      uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.update.validation.emptyName, type: messageType.warning } })
      return
    }

    if (edit.step.password !== edit.step['confirm-password']) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.step.action.update.validation.passwordMatch, type: messageType.warning },
      })
      return
    }

    if (selectedObjects[0].steps.some(({ id, name }) => id !== edit.step.id && name === edit.step.name)) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.step.action.update.validation.sameName(edit.step.name), type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextPipelines.step.action.update.consent.question(edit.step.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiUpdatePipelinesObjectsStepsAction({ selectedInstanceId: selectedInstance.id })
            uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.update.sucess, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.update.consent.cancel, type: messageType.warning } })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function deleteStepButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.delete.validation.noParent, type: messageType.warning } })
      return
    }

    if (selectedObjectsSteps.length === 0) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.step.action.delete.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsStepsIdNameList) {
      uiSetStateConsentThunk({
        message: {
          text: alertTextPipelines.step.action.delete.consent.question(selectedObjectsStepsIdNameList),
          type: messageType.consent,
        },
        isLoading: true,
        consent: {
          action: {
            approve: () => {
              uiDeletePipelinesObjectsStepsAction({ selectedObjectsSteps, selectedInstanceId: selectedInstance.id })
              uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.delete.success, type: messageType.success } })
            },
            cancel: () => {
              uiSetStateRegularThunk({ message: { text: alertTextPipelines.step.action.delete.consent.cancel, type: messageType.warning } })
            },
          },
        },
      })
    }
  }

  /* istanbul ignore next */
  function pipelinesObjectsStepsFlexGridOnChange(changedObjectsSteps) {
    uiSelectPipelinesObjectsStepsAction({ changedObjectsSteps, selectedInstanceId: selectedInstance.id })
  }

  /* !!! istanbul ignore next  !!! */
  function pipelinesObjectsStepsFlexGridOnClick(newSort) {
    uiSetPipelinesSortStepAction({ newSort, selectedInstanceId: selectedInstance.id })
  }

  /* istanbul ignore next */
  function createMappingButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({ message: { text: alertTextPipelines.mapping.action.create.validation.noParent, type: messageType.warning } })
      return
    }

    if (!edit?.mapping?.name) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.mapping.action.create.validation.emptyName, type: messageType.warning },
      })
      return
    }

    if (selectedObjects[0].mappings.some(({ name }) => name === edit.mapping.name)) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.mapping.action.create.validation.sameName(edit.mapping.name), type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextPipelines.mapping.action.create.consent.question(edit.mapping.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiCreatePipelinesObjectsMappingsAction({ selectedInstanceId: selectedInstance.id })
            uiSetStateRegularThunk({ message: { text: alertTextPipelines.mapping.action.create.success, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({
              message: { text: alertTextPipelines.mapping.action.create.consent.cancel, type: messageType.warning },
            })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function updateMappingButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({ message: { text: alertTextPipelines.mapping.action.update.validation.noParent, type: messageType.warning } })
      return
    }

    if (selectedObjectsMappings.length > 1) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.mapping.action.update.validation.singleMapping, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsMappings.length === 0) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.mapping.action.update.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (!edit?.mapping?.name) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.mapping.action.update.validation.emptyName, type: messageType.warning },
      })
      return
    }

    if (selectedObjects[0].mappings.some(({ id, name }) => id !== edit.mapping.id && name === edit.mapping.name)) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.mapping.action.update.validation.sameName(edit.mapping.name), type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextPipelines.mapping.action.update.consent.question(edit.mapping.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiUpdatePipelinesObjectsMappingsAction({ selectedInstanceId: selectedInstance.id })
            uiSetStateRegularThunk({ message: { text: alertTextPipelines.mapping.action.update.sucess, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({
              message: { text: alertTextPipelines.mapping.action.update.consent.cancel, type: messageType.warning },
            })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function deleteMappingButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({ message: { text: alertTextPipelines.mapping.action.delete.validation.noParent, type: messageType.warning } })
      return
    }

    if (selectedObjectsMappings.length === 0) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.mapping.action.delete.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsMappingsIdNameList) {
      uiSetStateConsentThunk({
        message: {
          text: alertTextPipelines.mapping.action.delete.consent.question(selectedObjectsMappingsIdNameList),
          type: messageType.consent,
        },
        isLoading: true,
        consent: {
          action: {
            approve: () => {
              uiDeletePipelinesObjectsMappingsAction({ selectedObjectsMappings, selectedInstanceId: selectedInstance.id })
              uiSetStateRegularThunk({ message: { text: alertTextPipelines.mapping.action.delete.success, type: messageType.success } })
            },
            cancel: () => {
              uiSetStateRegularThunk({
                message: { text: alertTextPipelines.mapping.action.delete.consent.cancel, type: messageType.warning },
              })
            },
          },
        },
      })
    }
  }

  /* istanbul ignore next */
  function pipelinesObjectsMappingsFlexGridOnChange(changedObjectsMappings) {
    uiSelectPipelinesObjectsMappingsAction({ changedObjectsMappings, selectedInstanceId: selectedInstance.id })
  }

  /* !!! istanbul ignore next  !!! */
  function pipelinesObjectsMappingsFlexGridOnClick(newSort) {
    uiSetPipelinesSortMappingAction({ newSort, selectedInstanceId: selectedInstance.id })
  }

  /* istanbul ignore next */
  function createExecutionButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.execution.action.create.validation.noParent, type: messageType.warning },
      })
      return
    }

    if (!edit?.execution?.name) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.execution.action.create.validation.emptyName, type: messageType.warning },
      })
      return
    }

    if (selectedObjects[0].executions.some(({ name }) => name === edit.execution.name)) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.execution.action.create.validation.sameName(edit.execution.name), type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextPipelines.execution.action.create.consent.question(edit.execution.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiCreatePipelinesObjectsExecutionsAction({ selectedInstanceId: selectedInstance.id })
            uiSetStateRegularThunk({ message: { text: alertTextPipelines.execution.action.create.success, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({
              message: { text: alertTextPipelines.execution.action.create.consent.cancel, type: messageType.warning },
            })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function updateExecutionButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.execution.action.update.validation.noParent, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsExecutions.length > 1) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.execution.action.update.validation.singleExecution, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsExecutions.length === 0) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.execution.action.update.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (!edit?.execution?.name) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.execution.action.update.validation.emptyName, type: messageType.warning },
      })
      return
    }

    if (selectedObjects[0].executions.some(({ id, name }) => id !== edit.execution.id && name === edit.execution.name)) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.execution.action.update.validation.sameName(edit.execution.name), type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextPipelines.execution.action.update.consent.question(edit.execution.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiUpdatePipelinesObjectsExecutionsAction({ selectedInstanceId: selectedInstance.id })
            uiSetStateRegularThunk({ message: { text: alertTextPipelines.execution.action.update.sucess, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({
              message: { text: alertTextPipelines.execution.action.update.consent.cancel, type: messageType.warning },
            })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function deleteExecutionButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.execution.action.delete.validation.noParent, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsExecutions.length === 0) {
      uiSetStateRegularThunk({
        message: { text: alertTextPipelines.execution.action.delete.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsExecutionsIdNameList) {
      uiSetStateConsentThunk({
        message: {
          text: alertTextPipelines.execution.action.delete.consent.question(selectedObjectsExecutionsIdNameList),
          type: messageType.consent,
        },
        isLoading: true,
        consent: {
          action: {
            approve: () => {
              uiDeletePipelinesObjectsExecutionsAction({ selectedObjectsExecutions, selectedInstanceId: selectedInstance.id })
              uiSetStateRegularThunk({ message: { text: alertTextPipelines.execution.action.delete.success, type: messageType.success } })
            },
            cancel: () => {
              uiSetStateRegularThunk({
                message: { text: alertTextPipelines.execution.action.delete.consent.cancel, type: messageType.warning },
              })
            },
          },
        },
      })
    }
  }

  /* istanbul ignore next */
  function pipelinesObjectsExecutionsFlexGridOnChange(changedObjectsExecutions) {
    uiSelectPipelinesObjectsExecutionsAction({ changedObjectsExecutions, selectedInstanceId: selectedInstance.id })
  }

  /* !!! istanbul ignore next  !!! */
  function pipelinesObjectsExecutionsFlexGridOnClick(newSort) {
    uiSetPipelinesSortExecutionAction({ newSort, selectedInstanceId: selectedInstance.id })
  }

  /* istanbul ignore next */
  function pipelinesNavigationTabNavOnClick(newNavigation) {
    uiSetPipelinesNavigationAction({
      newNavigation,
      selectedInstanceId: selectedInstance.id,
    })
  }

  return {
    dataTestPipelines,
    alertTextPipelines,
    navigatorHeading,
    instance,
    contextAuthorization,
    navigation,
    currentPage,
    search,
    sort,
    edit,
    state,
    selectedObjects,
    paginatedRandomPipelinesObjectsNamesValues,
    paginatedRandomPipelinesObjectStepsNamesValues,
    paginatedRandomPipelinesObjectMappingsNamesValues,
    paginatedRandomPipelinesObjectExecutionsNamesValues,
    searchPipelineDirectionOnClick,
    searchPipelineStateOnClick,
    findNameInputOnChange,
    findNameInputOnKeyUp,
    findNameInputOnFocus,
    findNameInputOnBlur,
    findPrefixInputOnChange,
    findPrefixInputOnKeyUp,
    findPrefixInputOnFocus,
    findPrefixInputOnBlur,
    editObjectPipelineDirectionOnClick,
    editObjectPipelineStateOnClick,
    editObjectNameOnChange,
    editObjectDescriptionOnChange,
    editObjectPrefixOnChange,
    editObjectFileOnChange,
    editStepDirectionOnClick,
    editStepStateOnClick,
    editStepNameOnChange,
    editStepDescriptionOnChange,
    editStepUrlOnChange,
    editStepPortNumberOnChange,
    editStepUsernameOnChange,
    editStepPasswordOnChange,
    editStepConfirmPasswordOnChange,
    editStepWikiLinkOnChange,
    editMappingNameOnChange,
    editMappingDescriptionOnChange,
    editExecutionNameOnChange,
    editExecutionDescriptionOnChange,
    paginationOnClick,
    createObjectButtonOnClick,
    updateObjectButtonOnClick,
    deleteObjectButtonOnClick,
    pipelinesObjectsFlexGridOnChange,
    pipelinesObjectsFlexGridOnClick,
    createStepButtonOnClick,
    updateStepButtonOnClick,
    deleteStepButtonOnClick,
    pipelinesObjectsStepsFlexGridOnChange,
    pipelinesObjectsStepsFlexGridOnClick,
    createMappingButtonOnClick,
    updateMappingButtonOnClick,
    deleteMappingButtonOnClick,
    pipelinesObjectsMappingsFlexGridOnChange,
    pipelinesObjectsMappingsFlexGridOnClick,
    createExecutionButtonOnClick,
    updateExecutionButtonOnClick,
    deleteExecutionButtonOnClick,
    pipelinesObjectsExecutionsFlexGridOnChange,
    pipelinesObjectsExecutionsFlexGridOnClick,
    pipelinesNavigationTabNavOnClick,
  }
}
