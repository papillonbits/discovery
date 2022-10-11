export function uiSetCredentialsNavigation(state, action) {
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
        navigation: {
          ...credentialsSelectedInstance.navigation,
          items: action.payload.newNavigation.items,
          selectedIndex: action.payload.newNavigation.items.map(({ isSelected }) => isSelected).indexOf(true),
        },
      },
    ],
  }
}
