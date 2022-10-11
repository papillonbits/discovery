import { getPagination } from '@papillonbits/library/pagination'
import { sortObjects } from '@papillonbits/library/sort'
import { getLocation, getFilesObjectsByName } from '../get/filesObjects'
import { getFilesSpecifiedInstance, getFilesUnspecifiedInstances } from '../get'

export function uiSetFilesLocation(state, action) {
  const filesSelectedInstance = getFilesSpecifiedInstance({ state, instanceId: action.payload.selectedInstanceId })
  const filesUnselectedInstances = getFilesUnspecifiedInstances({ state, instanceId: action.payload.selectedInstanceId })

  const newLocation = getLocation(action.payload.location)

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
    resetPageNumber: true,
  })

  return {
    ...state,
    files: [
      ...filesUnselectedInstances,
      {
        ...filesSelectedInstance,
        filesObjects: sortObjects({ sort: filesSelectedInstance.sort, objects: filesSelectedInstance.filesObjects }),
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
