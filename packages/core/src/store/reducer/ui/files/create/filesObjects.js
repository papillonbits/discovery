import { getPagination } from '@papillonbits/library/pagination'
import { sortObjects } from '@papillonbits/library/sort'
import { getLocation, getFilesObjectsByName } from '../get/filesObjects'
import { createFilesObjects } from './index'
import { getFilesSpecifiedInstance, getFilesUnspecifiedInstances } from '../get'

export function uiCreateFilesObjects(state, action) {
  const filesSelectedInstance = getFilesSpecifiedInstance({ state, instanceId: action.payload.selectedInstanceId })
  const filesUnselectedInstances = getFilesUnspecifiedInstances({ state, instanceId: action.payload.selectedInstanceId })

  const newFilesObjects = createFilesObjects({
    filesObjects: filesSelectedInstance.filesObjects,
    locationId: filesSelectedInstance.location.items.find((locationItem) => locationItem.isSelected === true).href,
    locationItems: filesSelectedInstance.location.items,
    newFile: action.payload?.newFile,
    newFolder: action.payload?.newFolder,
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

  const newPagination = getPagination({
    searchObjects: newSearch.filesObjects,
    regularObjects: newLocation.filesObjects,
    pagination: filesSelectedInstance.pagination,
  })

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
        pagination: newPagination,
        search: {
          ...newSearch,
          filesObjects: sortObjects({ sort: filesSelectedInstance.sort, objects: newSearch.filesObjects }),
        },
      },
    ],
  }
}
