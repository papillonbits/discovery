import { selectCredentialsObjects } from './index'

export function uiSelectCredentialsObjectsKeys(state, action) {
  const credentialsSelectedInstance = state.credentials.find(
    (credentialsItem) => credentialsItem.instanceId === action.payload.selectedInstanceId,
  )

  const credentialsRest = state.credentials.filter((credentialsItem) => credentialsItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = credentialsSelectedInstance.credentialsObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newCredentialsObjectsKeys = selectCredentialsObjects({
    credentialsObjects: objectsSelected[0].keys,
    changedObjects: action.payload.changedObjectsKeys,
  })

  const newCredentialsObjects = credentialsSelectedInstance.credentialsObjects.map((credentialsObject) => ({
    ...credentialsObject,
    keys: credentialsObject.id === objectsSelected[0].id ? newCredentialsObjectsKeys : credentialsObject.keys,
  }))

  const keysSelected = newCredentialsObjectsKeys.filter(({ isSelected }) => isSelected === true)

  return {
    ...state,
    credentials: [
      ...credentialsRest,
      {
        ...credentialsSelectedInstance,
        credentialsObjects: newCredentialsObjects,
        edit: {
          ...credentialsSelectedInstance.edit,
          object: objectsSelected.length === 1 ? { ...objectsSelected[0] } : null,
          key: objectsSelected.length === 1 && keysSelected.length === 1 ? { ...keysSelected[0] } : null,
        },
      },
    ],
  }
}
