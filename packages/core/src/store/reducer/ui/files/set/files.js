export function uiSetFiles(state, action) {
  const filesSelectedInstance = state?.files?.find((filesItem) => filesItem.instanceId === action.payload.instanceId)

  if (filesSelectedInstance) {
    return state
  }

  return {
    ...state,
    files: state.files ? [...state.files, action.payload] : [action.payload],
  }
}
