import { getSort, sortObjects } from '@papillonbits/library/sort'
import { getFilesSpecifiedInstance, getFilesUnspecifiedInstances } from '../get'

export function uiSetFilesSort(state, action) {
  const filesSelectedInstance = getFilesSpecifiedInstance({ state, instanceId: action.payload.selectedInstanceId })
  const filesUnselectedInstances = getFilesUnspecifiedInstances({ state, instanceId: action.payload.selectedInstanceId })

  const newSort = getSort({ currentSort: filesSelectedInstance.sort, newSort: action.payload.newSort })

  return {
    ...state,
    files: [
      ...filesUnselectedInstances,
      {
        ...filesSelectedInstance,
        filesObjects: sortObjects({ sort: newSort, objects: filesSelectedInstance.filesObjects }),
        location: {
          ...filesSelectedInstance.location,
          filesObjects: sortObjects({ sort: newSort, objects: filesSelectedInstance.location.filesObjects }),
        },
        search: {
          ...filesSelectedInstance.search,
          filesObjects: sortObjects({ sort: newSort, objects: filesSelectedInstance.search.filesObjects }),
        },
        sort: newSort,
      },
    ],
  }
}
