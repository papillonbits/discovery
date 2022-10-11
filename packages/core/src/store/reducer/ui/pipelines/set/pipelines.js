export function uiSetPipelines(state, action) {
  const pipelinesSelectedInstance = state?.pipelines?.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.instanceId)

  if (pipelinesSelectedInstance) {
    return state
  }

  return {
    ...state,
    pipelines: state.pipelines ? [...state.pipelines, action.payload] : [action.payload],
  }
}
