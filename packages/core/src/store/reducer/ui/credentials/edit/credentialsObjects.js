export function uiSetCredentialsEditObject(state, action) {
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
          object: { ...action.payload.object },
          key: { ...credentialsSelectedInstance.edit?.key },
        },
      },
    ],
  }
}
