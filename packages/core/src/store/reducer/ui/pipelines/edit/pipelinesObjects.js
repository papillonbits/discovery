export function uiSetPipelinesEditObject(state, action) {
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
          object: { ...action.payload.object },
          step: { ...pipelinesSelectedInstance.edit?.step },
          mapping: { ...pipelinesSelectedInstance.edit?.mapping },
          execution: { ...pipelinesSelectedInstance.edit?.execution },
        },
      },
    ],
  }
}
