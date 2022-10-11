import { getPagination } from '@papillonbits/library/pagination'
import { sortObjects } from '@papillonbits/library/sort'
import { getFilesObjectsByName } from '../get/filesObjects'
import { getFilesSpecifiedInstance, getFilesUnspecifiedInstances } from '../get'

export function uiSetFilesSearch(state, action) {
  const filesSelectedInstance = getFilesSpecifiedInstance({ state, instanceId: action.payload.selectedInstanceId })
  const filesUnselectedInstances = getFilesUnspecifiedInstances({ state, instanceId: action.payload.selectedInstanceId })

  const newSearch = {
    keyword: action.payload.keyword,
    filesObjects: !action.payload.keyword
      ? null
      : getFilesObjectsByName({ objects: filesSelectedInstance.location.filesObjects, objectName: action.payload.keyword }),
  }

  const newPagination = getPagination({
    searchObjects: newSearch.filesObjects,
    regularObjects: filesSelectedInstance.location.filesObjects,
    pagination: filesSelectedInstance.pagination,
  })

  return {
    ...state,
    files: [
      ...filesUnselectedInstances,
      {
        ...filesSelectedInstance,
        filesObjects: sortObjects({ sort: filesSelectedInstance.sort, objects: filesSelectedInstance.filesObjects }),
        location: {
          ...filesSelectedInstance.location,
          filesObjects: sortObjects({ sort: filesSelectedInstance.sort, objects: filesSelectedInstance.location.filesObjects }),
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
