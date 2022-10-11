import { getSort, sortObjects } from '@papillonbits/library/sort'

export function uiSetPipelinesSortMapping(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const newSort = getSort({ currentSort: pipelinesSelectedInstance.sort.mapping, newSort: action.payload.newSort })

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        pipelinesObjects: pipelinesSelectedInstance.pipelinesObjects.map((pipelinesObject) => ({
          ...pipelinesObject,
          mappings: sortObjects({ sort: newSort, objects: pipelinesObject.mappings }),
        })),
        sort: {
          ...pipelinesSelectedInstance.sort,
          mapping: newSort,
        },
      },
    ],
  }
}
