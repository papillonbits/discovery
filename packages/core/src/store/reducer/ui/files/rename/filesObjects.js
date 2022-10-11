import { sortObjects } from '@papillonbits/library/sort'
import { getLocation, getFilesObjectsByName } from '../get/filesObjects'
import { renameFilesObjects } from './index'
import { getFilesSpecifiedInstance, getFilesUnspecifiedInstances } from '../get'

export function uiRenameFilesObjects(state, action) {
  const filesSelectedInstance = getFilesSpecifiedInstance({ state, instanceId: action.payload.selectedInstanceId })
  const filesUnselectedInstances = getFilesUnspecifiedInstances({ state, instanceId: action.payload.selectedInstanceId })

  const newFilesObjects = renameFilesObjects({
    filesObjects: filesSelectedInstance.filesObjects,
    renamedObject: action.payload,
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
        filesObjects: sortObjects({ sort: filesSelectedInstance.sort, objects: newFilesObjects }),
        location: {
          ...newLocation,
          filesObjects: sortObjects({ sort: filesSelectedInstance.sort, objects: newLocation.filesObjects }),
        },
        search: {
          ...newSearch,
          filesObjects: sortObjects({ sort: filesSelectedInstance.sort, objects: newSearch.filesObjects }),
        },
      },
    ],
  }
}
