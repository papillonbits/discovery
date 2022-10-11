import { getLocation, getFilesObjectsByName } from '../get/filesObjects'
import { selectFilesObjects } from './index'
import { getFilesSpecifiedInstance, getFilesUnspecifiedInstances } from '../get'

export function uiSelectFilesObjects(state, action) {
  const filesSelectedInstance = getFilesSpecifiedInstance({ state, instanceId: action.payload.selectedInstanceId })
  const filesUnselectedInstances = getFilesUnspecifiedInstances({ state, instanceId: action.payload.selectedInstanceId })

  const newFilesObjects = selectFilesObjects({
    filesObjects: filesSelectedInstance.filesObjects,
    changedObjects: action.payload.changedObjects,
  })

  const newLocation = getLocation({
    ...filesSelectedInstance.location,
    filesObjects: newFilesObjects,
  })

  const newSearch = {
    keyword: filesSelectedInstance.search.keyword,
    filesObjects: !filesSelectedInstance.search.keyword
      ? null
      : getFilesObjectsByName({ objects: newLocation.filesObjects, objectName: filesSelectedInstance.search.keyword }),
  }

  return {
    ...state,
    files: [
      ...filesUnselectedInstances,
      {
        ...filesSelectedInstance,
        filesObjects: newFilesObjects,
        location: {
          ...newLocation,
          filesObjects: newLocation.filesObjects,
        },
        search: {
          ...newSearch,
          filesObjects: newSearch.filesObjects,
        },
      },
    ],
  }
}
