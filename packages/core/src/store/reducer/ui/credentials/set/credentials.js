export function uiSetCredentials(state, action) {
  const credentialsSelectedInstance = state?.credentials?.find(
    (credentialsItem) => credentialsItem.instanceId === action.payload.instanceId,
  )

  if (credentialsSelectedInstance) {
    return state
  }

  return {
    ...state,
    credentials: state.credentials ? [...state.credentials, action.payload] : [action.payload],
  }
}
