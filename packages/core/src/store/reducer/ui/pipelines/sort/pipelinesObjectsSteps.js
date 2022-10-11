import { getSort, sortObjects } from '@papillonbits/library/sort'

export function uiSetPipelinesSortStep(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const newSort = getSort({ currentSort: pipelinesSelectedInstance.sort.step, newSort: action.payload.newSort })

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        pipelinesObjects: pipelinesSelectedInstance.pipelinesObjects.map((pipelinesObject) => ({
          ...pipelinesObject,
          steps: sortObjects({ sort: newSort, objects: pipelinesObject.steps }),
        })),
        sort: {
          ...pipelinesSelectedInstance.sort,
          step: newSort,
        },
      },
    ],
  }
}
