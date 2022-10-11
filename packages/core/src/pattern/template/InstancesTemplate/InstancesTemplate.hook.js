import { useSelector } from 'react-redux'
import { paginate } from '@papillonbits/library/pagination'
import { useBindActionCreators } from '../../../store/dispatch'
import { messageType, pageContent } from '../../../library/constant'
import { dataTestInstances } from '../../../library/constant/dataTest/instances'
import { alertTextInstances } from '../../../library/constant/alertText/instances'

export function useInstancesState() {
  const {
    uiSelectInstancesObjectsAction,
    uiSetInstancesPaginationAction,
    uiSetInstancesSortObjectAction,
    uiSetInstancesEditObjectAction,
    uiSetStateRegularThunk,
    uiSetStateConsentThunk,
    createInstancesObjectsThunk,
    deleteInstancesObjectsThunk,
  } = useBindActionCreators()

  const navigatorHeading = pageContent.instances.subheadHeading
  const instance = useSelector(({ context }) => context.instance)
  const contextAuthorization = useSelector(({ context }) => context.authorization)
  const selectedInstance = useSelector(({ context }) => context.instance.items.find((instanceItem) => instanceItem.isSelected === true))
  const {
    instancesObjects,
    pagination: { pageSize, pageNumber, currentPage },
    sort,
    edit,
  } = useSelector(({ ui }) => ui.instances)
  const files = useSelector(({ ui }) => ui.files)
  const state = useSelector(({ ui }) => ui.state)

  const paginatedRandomInstancesObjects = paginate({
    array: instancesObjects,
    pageSize,
    pageNumber,
  })

  const selectedObjects = paginatedRandomInstancesObjects.filter(({ isSelected }) => isSelected === true)

  const selectedObjectsIdNameList = selectedObjects.map(({ name }) => `${name}`).join('\n')

  const paginatedRandomInstancesObjectsNamesValues = paginatedRandomInstancesObjects.map((instancesObject) =>
    (({ id, isSelected, 'date-modified': dateModified, ...otherProperties }) => ({
      names: Object.keys({ id, isSelected, ...otherProperties }),
      values: Object.values({ id, isSelected, ...otherProperties }),
    }))(instancesObject),
  )

  /* istanbul ignore next */
  function editObjectNameOnChange(event) {
    uiSetInstancesEditObjectAction({
      object: { ...edit.object, name: event.target.value },
    })
  }

  /* istanbul ignore next */
  function paginationOnClick(paginationAction) {
    uiSetInstancesPaginationAction({ paginationAction })
    uiSetStateRegularThunk({ message: { text: alertTextInstances.pagination.browsing, type: messageType.info } })
  }

  /* istanbul ignore next */
  function createObjectButtonOnClick() {
    if (!edit.object?.name) {
      uiSetStateRegularThunk({ message: { text: alertTextInstances.action.create.validation.emptyName, type: messageType.warning } })
      return
    }

    if (instancesObjects.some(({ name }) => name === edit.object?.name)) {
      uiSetStateRegularThunk({ message: { text: alertTextInstances.action.create.validation.sameName, type: messageType.warning } })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextInstances.action.create.consent.question(edit.object?.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            createInstancesObjectsThunk({ instance, instancesObjects, edit })
          },
          cancel: () => {
            uiSetStateRegularThunk({ message: { text: alertTextInstances.action.create.consent.cancel, type: messageType.warning } })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function deleteObjectButtonOnClick() {
    const selectedInstanceIds = selectedObjects.map((selectedObject) => selectedObject.id)

    if (selectedObjects.length === 0) {
      uiSetStateRegularThunk({ message: { text: alertTextInstances.action.delete.validation.nothingSelected, type: messageType.warning } })
      return
    }

    if (selectedInstanceIds.includes(selectedInstance.id)) {
      uiSetStateRegularThunk({ message: { text: alertTextInstances.action.delete.validation.currentSelected, type: messageType.warning } })
      return
    }

    const someSelectedInstancesHaveFilesObjects = selectedInstanceIds.some((selectedInstanceId) =>
      files
        .filter((filesItem) => filesItem.filesObjects.length > 0)
        .map((filesItem) => filesItem.instanceId)
        .includes(selectedInstanceId),
    )

    if (someSelectedInstancesHaveFilesObjects) {
      uiSetStateRegularThunk({
        message: { text: alertTextInstances.action.delete.validation.relatedSelected, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsIdNameList) {
      uiSetStateConsentThunk({
        message: { text: alertTextInstances.action.delete.consent.question(selectedObjectsIdNameList), type: messageType.consent },
        isLoading: true,
        consent: {
          action: {
            approve: () => {
              deleteInstancesObjectsThunk({ instance, instancesObjects, selectedObjects })
            },
            cancel: () => {
              uiSetStateRegularThunk({ message: { text: alertTextInstances.action.delete.consent.cancel, type: messageType.warning } })
            },
          },
        },
      })
    }
  }

  /* istanbul ignore next */
  function instancesObjectsFlexGridOnChange(changedObjects) {
    uiSelectInstancesObjectsAction({ changedObjects })
  }

  /* !!! istanbul ignore next  !!! */
  function instancesObjectsFlexGridOnClick(newSort) {
    uiSetInstancesSortObjectAction({ newSort })
  }

  return {
    dataTestInstances,
    alertTextInstances,
    navigatorHeading,
    contextAuthorization,
    currentPage,
    sort,
    edit,
    state,
    paginatedRandomInstancesObjectsNamesValues,
    editObjectNameOnChange,
    paginationOnClick,
    createObjectButtonOnClick,
    deleteObjectButtonOnClick,
    instancesObjectsFlexGridOnChange,
    instancesObjectsFlexGridOnClick,
  }
}
