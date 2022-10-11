import { sortObjects } from '@papillonbits/library/sort'
import { getPagination } from '@papillonbits/library/pagination'
import { getPipelineNewSearch } from './index'

export function uiSetPipelinesSearch(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const newSearch = getPipelineNewSearch({ pipelinesSelectedInstance, action })

  const newPagination = getPagination({
    searchObjects: newSearch.pipelinesObjects,
    regularObjects: pipelinesSelectedInstance.pipelinesObjects,
    pagination: pipelinesSelectedInstance.pagination,
  })

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        pipelinesObjects: sortObjects({ sort: pipelinesSelectedInstance.sort.object, objects: pipelinesSelectedInstance.pipelinesObjects }),
        pagination: newPagination,
        search: {
          ...newSearch,
          pipelinesObjects: sortObjects({ sort: pipelinesSelectedInstance.sort.object, objects: newSearch.pipelinesObjects }),
        },
      },
    ],
  }
}
