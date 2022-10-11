import { getSort, sortObjects } from '@papillonbits/library/sort'

export function uiSetPipelinesSortObject(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const newSort = getSort({ currentSort: pipelinesSelectedInstance.sort.object, newSort: action.payload.newSort })

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        pipelinesObjects: sortObjects({ sort: newSort, objects: pipelinesSelectedInstance.pipelinesObjects }),
        search: {
          ...pipelinesSelectedInstance.search,
          pipelinesObjects: sortObjects({ sort: newSort, objects: pipelinesSelectedInstance.search.pipelinesObjects }),
        },
        sort: {
          ...pipelinesSelectedInstance.sort,
          object: newSort,
        },
      },
    ],
  }
}
