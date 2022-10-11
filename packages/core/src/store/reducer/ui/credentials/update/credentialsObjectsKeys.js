import { updateCredentialsObjects } from './index'

export function uiUpdateCredentialsObjectsKeys(state, action) {
  const credentialsSelectedInstance = state.credentials.find(
    (credentialsItem) => credentialsItem.instanceId === action.payload.selectedInstanceId,
  )
  const credentialsRest = state.credentials.filter((credentialsItem) => credentialsItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = credentialsSelectedInstance.credentialsObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newCredentialsObjectsKeys = updateCredentialsObjects({
    credentialsObjects: objectsSelected[0].keys,
    object: credentialsSelectedInstance.edit.key,
  })

  const newCredentialsObjects = credentialsSelectedInstance.credentialsObjects.map((credentialsObject) => ({
    ...credentialsObject,
    keys: credentialsObject.id === objectsSelected[0].id ? newCredentialsObjectsKeys : credentialsObject.keys,
  }))

  return {
    ...state,
    credentials: [
      ...credentialsRest,
      {
        ...credentialsSelectedInstance,
        credentialsObjects: newCredentialsObjects,
        edit: {
          ...credentialsSelectedInstance.edit,
          key: null,
        },
      },
    ],
  }
}
