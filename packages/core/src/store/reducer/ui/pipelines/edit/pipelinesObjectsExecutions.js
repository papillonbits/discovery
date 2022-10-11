export function uiSetPipelinesEditExecution(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        edit: {
          ...pipelinesSelectedInstance.edit,
          object: { ...pipelinesSelectedInstance.edit?.object },
          execution: { ...action.payload.execution },
        },
      },
    ],
  }
}
