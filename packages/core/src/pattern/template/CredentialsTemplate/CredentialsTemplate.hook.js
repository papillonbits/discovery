import { useSelector } from 'react-redux'
import { paginate } from '@papillonbits/library/pagination'
import { sortDefault } from '@papillonbits/library/sort'
import { useBindActionCreators } from '../../../store/dispatch'
import { pageSize as pageSizeDefault, pageNumber as pageNumberDefault, messageType, pageContent } from '../../../library/constant'
import { dataTestCredentials } from '../../../library/constant/dataTest/credentials'
import { alertTextCredentials } from '../../../library/constant/alertText/credentials'

export function useCredentialsState() {
  const {
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
    uiSetStateRegularThunk,
    uiSetStateConsentThunk,
  } = useBindActionCreators()

  const defaultCredentialsItem = {
    navigation: {
      ariaAttr: {},
    },
    credentialsObjects: [],
    pagination: {
      pageSize: pageSizeDefault.credentials,
      pageNumber: pageNumberDefault,
      currentPage: {
        indexItems: [],
        currentIndex: -1,
        canMoveBackwards: false,
        canMoveForward: false,
      },
    },
    search: {
      credentialsObjects: null,
    },
    sort: sortDefault,
  }

  const navigatorHeading = pageContent.credentials.subheadHeading
  const instance = useSelector(({ context }) => context.instance)
  const contextAuthorization = useSelector(({ context }) => context.authorization)
  const selectedInstance = useSelector(({ context }) => context.instance.items.find((instanceItem) => instanceItem.isSelected === true))
  const {
    credentialsObjects,
    navigation,
    pagination: { pageSize, pageNumber, currentPage },
    search,
    sort,
    edit,
  } = useSelector(({ ui }) => ui.credentials.find((credentialsItem) => credentialsItem.instanceId === selectedInstance?.id)) ??
  defaultCredentialsItem
  const state = useSelector(({ ui }) => ui.state)

  const paginatedRandomCredentialsObjects = paginate({
    array: search.credentialsObjects || credentialsObjects,
    pageSize,
    pageNumber,
  })

  const selectedObjects = paginatedRandomCredentialsObjects.filter(({ isSelected }) => isSelected === true)

  const selectedObjectsIdNameList = selectedObjects.map(({ name }) => `${name}`).join('\n')

  const selectedObjectsKeys = selectedObjects?.[0]?.keys.filter(({ isSelected }) => isSelected === true)

  const selectedObjectsKeysIdNameList = selectedObjectsKeys?.map(({ name }) => `${name}`).join('\n')

  const paginatedRandomCredentialsObjectsNamesValues = paginatedRandomCredentialsObjects.map((credentialsObject) =>
    (({ id, isSelected, keys, 'account-name': accountName, password, 'confirm-password': confirmPassword, ...otherProperties }) => ({
      names: Object.keys({ id, isSelected, ...otherProperties }),
      values: Object.values({ id, isSelected, ...otherProperties }),
    }))(credentialsObject),
  )

  const selectedCredentialsObjects = credentialsObjects.filter(({ isSelected }) => isSelected === true)

  let selectedCredentialsObjectKeys = []
  if (selectedCredentialsObjects.length === 1) {
    selectedCredentialsObjectKeys = selectedCredentialsObjects[0].keys
  }

  const paginatedRandomCredentialsObjectKeysNamesValues = selectedCredentialsObjectKeys.map((credentialsObjectKey) =>
    (({ id, isSelected, keys, value, ...otherProperties }) => ({
      names: Object.keys({ id, isSelected, ...otherProperties }),
      values: Object.values({ id, isSelected, ...otherProperties }),
    }))(credentialsObjectKey),
  )

  /* istanbul ignore next */
  function editObjectEndpointDirectionOnClick(newEndpointDirection) {
    uiSetCredentialsEditObjectAction({
      selectedInstanceId: selectedInstance.id,
      object: { ...edit.object, 'endpoint-direction': newEndpointDirection.items },
    })
  }

  /* istanbul ignore next */
  function editObjectEndpointTypeOnClick(newEndpointType) {
    uiSetCredentialsEditObjectAction({
      selectedInstanceId: selectedInstance.id,
      object: { ...edit.object, 'endpoint-type': newEndpointType.items },
    })
  }

  /* istanbul ignore next */
  function editObjectNameOnChange(event) {
    uiSetCredentialsEditObjectAction({ selectedInstanceId: selectedInstance.id, object: { ...edit.object, name: event.target.value } })
  }

  /* istanbul ignore next */
  function editObjectUrlOnChange(event) {
    uiSetCredentialsEditObjectAction({ selectedInstanceId: selectedInstance.id, object: { ...edit.object, url: event.target.value } })
  }

  /* istanbul ignore next */
  function editObjectPortNumberOnChange(event) {
    uiSetCredentialsEditObjectAction({
      selectedInstanceId: selectedInstance.id,
      object: { ...edit.object, 'port-number': event.target.value },
    })
  }

  /* istanbul ignore next */
  function editObjectUsernameOnChange(event) {
    uiSetCredentialsEditObjectAction({ selectedInstanceId: selectedInstance.id, object: { ...edit.object, username: event.target.value } })
  }

  /* istanbul ignore next */
  function editObjectPasswordOnChange(event) {
    uiSetCredentialsEditObjectAction({ selectedInstanceId: selectedInstance.id, object: { ...edit.object, password: event.target.value } })
  }

  /* istanbul ignore next */
  function editObjectConfirmPasswordOnChange(event) {
    uiSetCredentialsEditObjectAction({
      selectedInstanceId: selectedInstance.id,
      object: { ...edit.object, 'confirm-password': event.target.value },
    })
  }

  /* istanbul ignore next */
  function editObjectWikiLinkOnChange(event) {
    uiSetCredentialsEditObjectAction({
      selectedInstanceId: selectedInstance.id,
      object: { ...edit.object, 'wiki-link': event.target.value },
    })
  }

  /* istanbul ignore next */
  function editKeyNameOnChange(event) {
    uiSetCredentialsEditKeyAction({ selectedInstanceId: selectedInstance.id, key: { ...edit.key, name: event.target.value } })
  }

  /* istanbul ignore next */
  function editKeyFingerprintOnChange(event) {
    uiSetCredentialsEditKeyAction({ selectedInstanceId: selectedInstance.id, key: { ...edit.key, fingerprint: event.target.value } })
  }

  /* istanbul ignore next */
  function editKeyChecksumValidOnChange(event) {
    uiSetCredentialsEditKeyAction({ selectedInstanceId: selectedInstance.id, key: { ...edit.key, 'checksum-valid': event.target.checked } })
  }

  /* istanbul ignore next */
  function editKeyValueOnChange(event) {
    uiSetCredentialsEditKeyAction({ selectedInstanceId: selectedInstance.id, key: { ...edit.key, value: event.target.value } })
  }

  /* istanbul ignore next */
  function paginationOnClick(paginationAction) {
    uiSetCredentialsPaginationAction({ selectedInstanceId: selectedInstance.id, paginationAction })
    uiSetStateRegularThunk({ message: { text: alertTextCredentials.object.pagination.browsing, type: messageType.info } })
  }

  /* istanbul ignore next */
  function createObjectButtonOnClick() {
    if (!edit.object.name) {
      uiSetStateRegularThunk({
        message: { text: alertTextCredentials.object.action.create.validation.emptyName, type: messageType.warning },
      })
      return
    }

    if (credentialsObjects.some(({ name }) => name === edit.object.name)) {
      uiSetStateRegularThunk({
        message: { text: alertTextCredentials.object.action.create.validation.sameName(edit.object.name), type: messageType.warning },
      })
      return
    }

    if (edit.object.password !== edit.object['confirm-password']) {
      uiSetStateRegularThunk({
        message: { text: alertTextCredentials.object.action.create.validation.passwordMatch, type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextCredentials.object.action.create.consent.question(edit.object.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiCreateCredentialsObjectsAction({ selectedInstance })
            uiSetStateRegularThunk({
              message: { text: alertTextCredentials.object.action.create.success, type: messageType.success },
            })
          },
          cancel: () => {
            uiSetStateRegularThunk({
              message: { text: alertTextCredentials.object.action.create.consent.cancel, type: messageType.warning },
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
        message: { text: alertTextCredentials.object.action.update.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (selectedObjects.length > 1) {
      uiSetStateRegularThunk({
        message: { text: alertTextCredentials.object.action.update.validation.singleObject, type: messageType.warning },
      })
      return
    }

    if (edit.object.password !== edit.object['confirm-password']) {
      uiSetStateRegularThunk({
        message: { text: alertTextCredentials.object.action.update.validation.passwordMatch, type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextCredentials.object.action.update.consent.question(edit.object.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiUpdateCredentialsObjectsAction({ selectedInstanceId: selectedInstance.id })
            uiSetStateRegularThunk({ message: { text: alertTextCredentials.object.action.update.success, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({
              message: { text: alertTextCredentials.object.action.update.consent.cancel, type: messageType.warning },
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
        message: { text: alertTextCredentials.object.action.delete.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsIdNameList) {
      uiSetStateConsentThunk({
        message: {
          text: alertTextCredentials.object.action.delete.consent.question(selectedObjectsIdNameList),
          type: messageType.consent,
        },
        isLoading: true,
        consent: {
          action: {
            approve: () => {
              uiDeleteCredentialsObjectsAction({ selectedObjects, selectedInstanceId: selectedInstance.id })
              uiSetStateRegularThunk({ message: { text: alertTextCredentials.object.action.delete.success, type: messageType.success } })
            },
            cancel: () => {
              uiSetStateRegularThunk({
                message: { text: alertTextCredentials.object.action.delete.consent.cancel, type: messageType.warning },
              })
            },
          },
        },
      })
    }
  }

  /* istanbul ignore next */
  function credentialsObjectsFlexGridOnChange(changedObjects) {
    uiSelectCredentialsObjectsAction({
      changedObjects,
      selectedInstanceId: selectedInstance.id,
    })
  }

  /* !!! istanbul ignore next  !!! */
  function credentialsObjectsFlexGridOnClick(newSort) {
    uiSetCredentialsSortObjectAction({ newSort, selectedInstanceId: selectedInstance.id })
  }

  /* istanbul ignore next */
  function createKeyButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.create.validation.noParent, type: messageType.warning } })
      return
    }

    if (!edit?.key?.name) {
      uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.create.validation.emptyName, type: messageType.warning } })
      return
    }

    if (selectedObjects[0].keys.some(({ name }) => name === edit.key.name)) {
      uiSetStateRegularThunk({
        message: { text: alertTextCredentials.key.action.create.validation.sameName(edit.key.name), type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextCredentials.key.action.create.consent.question(edit.key.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiCreateCredentialsObjectsKeysAction({ selectedInstanceId: selectedInstance.id })
            uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.create.success, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.create.consent.cancel, type: messageType.warning } })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function updateKeyButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.update.validation.noParent, type: messageType.warning } })
      return
    }

    if (selectedObjectsKeys.length > 1) {
      uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.update.validation.singleKey, type: messageType.warning } })
      return
    }

    if (selectedObjectsKeys.length === 0) {
      uiSetStateRegularThunk({
        message: { text: alertTextCredentials.key.action.update.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (!edit?.key?.name) {
      uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.update.validation.emptyName, type: messageType.warning } })
      return
    }

    if (selectedObjects[0].keys.some(({ id, name }) => id !== edit.key.id && name === edit.key.name)) {
      uiSetStateRegularThunk({
        message: { text: alertTextCredentials.key.action.update.validation.sameName(edit.key.name), type: messageType.warning },
      })
      return
    }

    uiSetStateConsentThunk({
      message: { text: alertTextCredentials.key.action.update.consent.question(edit.key.name), type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: () => {
            uiUpdateCredentialsObjectsKeysAction({ selectedInstanceId: selectedInstance.id })
            uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.update.success, type: messageType.success } })
          },
          cancel: () => {
            uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.update.consent.cancel, type: messageType.warning } })
          },
        },
      },
    })
  }

  /* istanbul ignore next */
  function deleteKeyButtonOnClick() {
    if (selectedObjects.length !== 1) {
      uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.delete.validation.noParent, type: messageType.warning } })
      return
    }

    if (selectedObjectsKeys.length === 0) {
      uiSetStateRegularThunk({
        message: { text: alertTextCredentials.key.action.delete.validation.nothingSelected, type: messageType.warning },
      })
      return
    }

    if (selectedObjectsKeysIdNameList) {
      uiSetStateConsentThunk({
        message: {
          text: alertTextCredentials.key.action.delete.consent.question(selectedObjectsKeysIdNameList),
          type: messageType.consent,
        },
        isLoading: true,
        consent: {
          action: {
            approve: () => {
              uiDeleteCredentialsObjectsKeysAction({ selectedObjectsKeys, selectedInstanceId: selectedInstance.id })
              uiSetStateRegularThunk({ message: { text: alertTextCredentials.key.action.delete.success, type: messageType.success } })
            },
            cancel: () => {
              uiSetStateRegularThunk({
                message: { text: alertTextCredentials.key.action.delete.consent.cancel, type: messageType.warning },
              })
            },
          },
        },
      })
    }
  }

  /* istanbul ignore next */
  function credentialsObjectsKeysFlexGridOnChange(changedObjectsKeys) {
    uiSelectCredentialsObjectsKeysAction({ changedObjectsKeys, selectedInstanceId: selectedInstance.id })
  }

  /* !!! istanbul ignore next  !!! */
  function credentialsObjectsKeysFlexGridOnClick(newSort) {
    uiSetCredentialsSortKeyAction({ newSort, selectedInstanceId: selectedInstance.id })
  }

  /* istanbul ignore next */
  function credentialsNavigationTabNavOnClick(newNavigation) {
    uiSetCredentialsNavigationAction({ newNavigation, selectedInstanceId: selectedInstance.id })
  }

  return {
    dataTestCredentials,
    alertTextCredentials,
    navigatorHeading,
    instance,
    contextAuthorization,
    navigation,
    currentPage,
    sort,
    edit,
    state,
    selectedObjects,
    paginatedRandomCredentialsObjectsNamesValues,
    paginatedRandomCredentialsObjectKeysNamesValues,
    editObjectEndpointDirectionOnClick,
    editObjectEndpointTypeOnClick,
    editObjectNameOnChange,
    editObjectUrlOnChange,
    editObjectPortNumberOnChange,
    editObjectUsernameOnChange,
    editObjectPasswordOnChange,
    editObjectConfirmPasswordOnChange,
    editObjectWikiLinkOnChange,
    editKeyNameOnChange,
    editKeyFingerprintOnChange,
    editKeyChecksumValidOnChange,
    editKeyValueOnChange,
    paginationOnClick,
    createObjectButtonOnClick,
    updateObjectButtonOnClick,
    deleteObjectButtonOnClick,
    credentialsObjectsFlexGridOnChange,
    credentialsObjectsFlexGridOnClick,
    createKeyButtonOnClick,
    updateKeyButtonOnClick,
    deleteKeyButtonOnClick,
    credentialsObjectsKeysFlexGridOnChange,
    credentialsObjectsKeysFlexGridOnClick,
    credentialsNavigationTabNavOnClick,
  }
}
