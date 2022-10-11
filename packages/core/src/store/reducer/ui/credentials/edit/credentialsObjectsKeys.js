export function uiSetCredentialsEditKey(state, action) {
  const credentialsSelectedInstance = state.credentials.find(
    (credentialsItem) => credentialsItem.instanceId === action.payload.selectedInstanceId,
  )
  const credentialsRest = state.credentials.filter((credentialsItem) => credentialsItem.instanceId !== action.payload.selectedInstanceId)

  return {
    ...state,
    credentials: [
      ...credentialsRest,
      {
        ...credentialsSelectedInstance,
        edit: {
          ...credentialsSelectedInstance.edit,
          object: { ...credentialsSelectedInstance.edit?.object },
          key: { ...action.payload.key },
        },
      },
    ],
  }
}
