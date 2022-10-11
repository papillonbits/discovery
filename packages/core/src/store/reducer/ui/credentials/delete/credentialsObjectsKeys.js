import { deleteCredentialsObjects } from './index'

export function uiDeleteCredentialsObjectsKeys(state, action) {
  const credentialsSelectedInstance = state.credentials.find(
    (credentialsItem) => credentialsItem.instanceId === action.payload.selectedInstanceId,
  )
  const credentialsRest = state.credentials.filter((credentialsItem) => credentialsItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = credentialsSelectedInstance.credentialsObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newCredentialsObjectsKeys = deleteCredentialsObjects({
    credentialsObjects: objectsSelected[0].keys,
    selectedObjects: action.payload.selectedObjectsKeys,
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
