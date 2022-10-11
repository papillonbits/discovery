import { useSelector } from 'react-redux'
import { paginate } from '@papillonbits/library/pagination'
import { sortDefault } from '@papillonbits/library/sort'
import { useBindActionCreators } from '../../../store/dispatch'
import {
  idPrefix,
  eventKey,
  pageSize as pageSizeDefault,
  pageNumber as pageNumberDefault,
  messageType,
  pageContent,
  filesObjectKind,
} from '../../../library/constant'
import { locateFilesObjectById } from '../../../store/reducer/ui/files/location/filesObjects'
import { dataTestFiles } from '../../../library/constant/dataTest/files'
import { alertTextFiles } from '../../../library/constant/alertText/files'

export function useFilesState() {
  const {
    uiSelectFilesObjectsAction,
    uiSetFilesLocationAction,
    uiSetFilesPaginationAction,
    uiSetFilesSearchAction,
    uiSetFilesSortAction,
    uiSetStateRegularThunk,
    uiSetStateConsentThunk,
    uploadFilesObjectsCurrentSelectedInstanceThunk,
    downloadFilesObjectsCurrentSelectedInstanceThunk,
    deleteFilesObjectsCurrentSelectedInstanceThunk,
    // storeFilesObjectsCurrentSelectedInstanceThunk,
    renameFilesObjectsCurrentSelectedInstanceThunk,
    createFolderCurrentSelectedInstanceThunk,
  } = useBindActionCreators()

  const defaultFilesItem = {
    location: {
      ariaAttr: {
        label: '',
        current: '',
      },
      items: [],
      filesObjects: [],
    },
    filesObjects: [],
    pagination: {
      pageSize: pageSizeDefault.files,
      pageNumber: pageNumberDefault,
      currentPage: {
        indexItems: [],
        currentIndex: -1,
        canMoveBackwards: false,
        canMoveForward: false,
      },
    },
    search: {
      keyword: null,
      filesObjects: null,
    },
    sort: sortDefault,
  }

  const navigatorHeading = pageContent.files.subheadHeading
  const contextAuthorization = useSelector(({ context }) => context.authorization)
  const selectedInstanceId = useSelector(
    ({ context }) => context.instance.items.find((instanceItem) => instanceItem.isSelected === true)?.id,
  )
  const selectedInstanceName = useSelector(
    ({ context }) => context.instance.items.find((instanceItem) => instanceItem.isSelected === true)?.text,
  )
  const {
    location,
    filesObjects,
    pagination: { pageSize, pageNumber, currentPage },
    search,
    sort,
  } = useSelector(({ ui }) => ui.files.find((filesItem) => filesItem.instanceId === selectedInstanceId)) ?? defaultFilesItem
  const state = useSelector(({ ui }) => ui.state)

  const paginatedRandomFilesObjects = paginate({
    array: search.filesObjects || location.filesObjects,
    pageSize,
    pageNumber,
  })

  const selectedObjects = paginatedRandomFilesObjects.filter(({ isSelected }) => isSelected === true)

  const selectedObjectsNameList = selectedObjects.map(({ name }) => `'${name.value}'`).join(' ')

  const paginatedRandomFilesObjectsNamesValues = search.filesObjects
    ? paginatedRandomFilesObjects.map((filesObject) =>
        (({ contents, path, id, isSelected, kind, size, 'date-created': dateCreated, ...otherProperties }) => ({
          names: Object.keys({ id, isSelected, name, location, ...otherProperties }), // eslint-disable-line no-restricted-globals
          values: Object.values({
            id,
            isSelected,
            name, // eslint-disable-line no-restricted-globals
            location: filesObject.path.map(({ text }) => text).join('/'),
            ...otherProperties,
          }),
        }))(filesObject),
      )
    : paginatedRandomFilesObjects.map((filesObject) =>
        (({ contents, path, id, isSelected, 'date-created': dateCreated, ...otherProperties }) => ({
          names: Object.keys({ id, isSelected, ...otherProperties }),
          values: Object.values({ id, isSelected, ...otherProperties }),
        }))(filesObject),
      )

  /* istanbul ignore next */
  function findKeywordInputOnChange(event) {
    uiSetFilesSearchAction({
      selectedInstanceId,
      keyword: event.target.value,
    })
  }

  /* istanbul ignore next */
  function findKeywordInputOnKeyUp(event) {
    if (event.key === eventKey.enter) {
      uiSetFilesSearchAction({
        selectedInstanceId,
        keyword: event.target.value,
      })
      return
    }

    if (event.key === eventKey.escape) {
      uiSetFilesSearchAction({
        selectedInstanceId,
        keyword: null,
      })
      return
    }

    uiSetFilesSearchAction({
      selectedInstanceId,
      keyword: search.keyword,
    })
  }

  /* istanbul ignore next */
  function findKeywordInputOnFocus() {
    uiSetFilesSearchAction({
      selectedInstanceId,
      keyword: search.keyword,
    })
  }

  /* istanbul ignore next */
  function paginationOnClick(paginationAction) {
    uiSetFilesPaginationAction({ selectedInstanceId, paginationAction })
    uiSetStateRegularThunk({ message: { text: alertTextFiles.pagination.browsing, type: messageType.info } })
  }

  /* istanbul ignore next */
  function createFolderButtonOnClick() {
    uiSetStateConsentThunk({
      message: { text: alertTextFiles.action.create.consent.question, type: messageType.consent },
      isLoading: true,
      consent: {
        action: {
          approve: (consentValue) => {
            if (location.filesObjects.some(({ kind, name: { value } }) => kind === filesObjectKind.folder && value === consentValue)) {
              uiSetStateRegularThunk({ message: { text: alertTextFiles.action.create.validation.sameName, type: messageType.warning } })
              return
            }

            createFolderCurrentSelectedInstanceThunk({ newFolderName: consentValue })
          },
          cancel: () => {
            uiSetStateRegularThunk({ message: { text: alertTextFiles.action.create.consent.cancel, type: messageType.warning } })
          },
        },
        withInput: true,
      },
    })
  }

  /* istanbul ignore next */
  function uploadFilesButtonOnClick(selectedFiles) {
    uploadFilesObjectsCurrentSelectedInstanceThunk({ selectedFiles, location })
  }

  /* istanbul ignore next */
  function downloadFilesButtonOnClick() {
    if (selectedObjects.length === 0) {
      uiSetStateRegularThunk({ message: { text: alertTextFiles.action.download.validation.nothingSelected, type: messageType.warning } })
      return
    }

    if (selectedObjects.some(({ id }) => id.includes(idPrefix.directory))) {
      uiSetStateRegularThunk({ message: { text: alertTextFiles.action.download.validation.filesOnly, type: messageType.warning } })
      return
    }

    if (selectedObjects.length > 1) {
      uiSetStateRegularThunk({ message: { text: alertTextFiles.action.download.validation.singleFile, type: messageType.warning } })
      return
    }

    if (selectedObjectsNameList) {
      uiSetStateConsentThunk({
        message: { text: alertTextFiles.action.download.consent.question(selectedObjectsNameList), type: messageType.consent },
        isLoading: true,
        consent: {
          action: {
            approve: () => {
              downloadFilesObjectsCurrentSelectedInstanceThunk()
            },
            cancel: () => {
              uiSetStateRegularThunk({ message: { text: alertTextFiles.action.download.consent.cancel, type: messageType.warning } })
            },
          },
        },
      })
    }
  }

  /* istanbul ignore next */
  function deleteButtonOnClick() {
    if (selectedObjects.length === 0) {
      uiSetStateRegularThunk({ message: { text: alertTextFiles.action.delete.validation.nothingSelected, type: messageType.warning } })
      return
    }

    if (selectedObjectsNameList) {
      uiSetStateConsentThunk({
        message: { text: alertTextFiles.action.delete.consent.question(selectedObjectsNameList), type: messageType.consent },
        isLoading: true,
        consent: {
          action: {
            approve: () => {
              deleteFilesObjectsCurrentSelectedInstanceThunk({ selectedObjects })
              // storeFilesObjectsCurrentSelectedInstanceThunk({ selectedObjects })
            },
            cancel: () => {
              uiSetStateRegularThunk({ message: { text: alertTextFiles.action.delete.consent.cancel, type: messageType.warning } })
            },
          },
        },
      })
    }
  }

  /* istanbul ignore next */
  function renameButtonOnClick() {
    if (selectedObjects.length === 0) {
      uiSetStateRegularThunk({ message: { text: alertTextFiles.action.rename.validation.nothingSelected, type: messageType.warning } })
      return
    }

    if (selectedObjects.length > 1) {
      uiSetStateRegularThunk({ message: { text: alertTextFiles.action.rename.validation.singleFileFolder, type: messageType.warning } })
      return
    }

    if (selectedObjectsNameList) {
      uiSetStateConsentThunk({
        message: { text: alertTextFiles.action.rename.consent.question(selectedObjects[0].name.value), type: messageType.consent },
        isLoading: true,
        consent: {
          action: {
            approve: (consentValue) => {
              if (
                selectedObjects[0].kind === filesObjectKind.folder &&
                location.filesObjects.some(({ kind, name: { value } }) => kind === filesObjectKind.folder && value === consentValue)
              ) {
                uiSetStateRegularThunk({
                  message: { text: alertTextFiles.action.rename.validation.sameNameFolder, type: messageType.warning },
                })
                return
              }

              if (
                selectedObjects[0].kind !== filesObjectKind.folder &&
                location.filesObjects.some(({ kind, name: { value } }) => kind !== filesObjectKind.folder && value === consentValue)
              ) {
                uiSetStateRegularThunk({
                  message: { text: alertTextFiles.action.rename.validation.sameNameFile, type: messageType.warning },
                })
                return
              }

              renameFilesObjectsCurrentSelectedInstanceThunk({
                selectedObjects,
                newFileFolderName: consentValue,
              })
            },
            cancel: () => {
              uiSetStateRegularThunk({ message: { text: alertTextFiles.action.rename.consent.cancel, type: messageType.warning } })
            },
          },
          withInput: true,
        },
      })
    }
  }

  /* !!! istanbul ignore next  !!! */
  function flexGridOnChange(changedObjects) {
    uiSelectFilesObjectsAction({ changedObjects, selectedInstanceId })
  }

  /* !!! istanbul ignore next  !!! */
  function flexGridOnClick(newSort) {
    uiSetFilesSortAction({ newSort, selectedInstanceId })
  }

  /* !!! istanbul ignore next  !!! */
  function flexGridOnDoubleClick(itemIndex) {
    const { id } = paginatedRandomFilesObjects[itemIndex]

    locateFilesObjectById({
      filesObjects,
      objects: filesObjects,
      objectId: id,
      uiSetFilesLocationAction,
      location,
      selectedInstanceId,
    })
    uiSetStateRegularThunk({ message: { text: alertTextFiles.display.browsing, type: messageType.info } })
  }

  /* istanbul ignore next */
  function breadcrumbOnClick(newLocation) {
    const selectedLocationItem = newLocation.items.find((item) => item.isSelected === true)

    locateFilesObjectById({
      filesObjects,
      objects: filesObjects,
      objectId: selectedLocationItem.href,
      uiSetFilesLocationAction,
      location,
      selectedInstanceId,
    })

    uiSetStateRegularThunk({ message: { text: alertTextFiles.location.browsing, type: messageType.info } })
  }

  return {
    dataTestFiles,
    alertTextFiles,
    navigatorHeading,
    selectedInstanceId,
    selectedInstanceName,
    contextAuthorization,
    location,
    filesObjects,
    currentPage,
    search,
    sort,
    state,
    paginatedRandomFilesObjectsNamesValues,
    findKeywordInputOnChange,
    findKeywordInputOnKeyUp,
    findKeywordInputOnFocus,
    paginationOnClick,
    createFolderButtonOnClick,
    uploadFilesButtonOnClick,
    downloadFilesButtonOnClick,
    deleteButtonOnClick,
    renameButtonOnClick,
    flexGridOnChange,
    flexGridOnClick,
    flexGridOnDoubleClick,
    breadcrumbOnClick,
  }
}
