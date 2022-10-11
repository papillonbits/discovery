import { getSort, sortObjects } from '@papillonbits/library/sort'

export function uiSetPipelinesSortExecution(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const newSort = getSort({ currentSort: pipelinesSelectedInstance.sort.execution, newSort: action.payload.newSort })

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        pipelinesObjects: pipelinesSelectedInstance.pipelinesObjects.map((pipelinesObject) => ({
          ...pipelinesObject,
          executions: sortObjects({ sort: newSort, objects: pipelinesObject.executions }),
        })),
        sort: {
          ...pipelinesSelectedInstance.sort,
          execution: newSort,
        },
      },
    ],
  }
}
