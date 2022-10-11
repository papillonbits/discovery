import { v4 as uuidv4 } from 'uuid'
import { getCredentialsObjectsByName } from '../get/credentialsObjects'
import { endpointDirection, endpointType } from '../../../../../library/constant'
import { selectCredentialsObjects } from './index'

export function uiSelectCredentialsObjects(state, action) {
  const credentialsSelectedInstance = state.credentials.find(
    (credentialsItem) => credentialsItem.instanceId === action.payload.selectedInstanceId,
  )
  const credentialsRest = state.credentials.filter((credentialsItem) => credentialsItem.instanceId !== action.payload.selectedInstanceId)

  const newCredentialsObjects = selectCredentialsObjects({
    credentialsObjects: credentialsSelectedInstance.credentialsObjects,
    changedObjects: action.payload.changedObjects,
  })

  const newSearch = {
    keyword: credentialsSelectedInstance.search.keyword,
    credentialsObjects: !credentialsSelectedInstance.search.keyword
      ? null
      : getCredentialsObjectsByName({ objects: newCredentialsObjects, objectName: credentialsSelectedInstance.search.keyword }),
  }

  const objectsSelected = newCredentialsObjects.filter(({ isSelected }) => isSelected === true)

  let keysSelected
  if (objectsSelected.length === 1) {
    keysSelected = objectsSelected[0].keys.filter(({ isSelected }) => isSelected === true)
  }

  return {
    ...state,
    credentials: [
      ...credentialsRest,
      {
        ...credentialsSelectedInstance,
        credentialsObjects: newCredentialsObjects,
        search: {
          ...newSearch,
          credentialsObjects: newSearch.credentialsObjects,
        },
        edit: {
          ...credentialsSelectedInstance.edit,
          object:
            objectsSelected.length === 1
              ? { ...objectsSelected[0] }
              : {
                  'endpoint-direction': endpointDirection.map((item) => ({
                    id: uuidv4(),
                    href: '#url',
                    text: item,
                    isSelected: item === endpointDirection[0],
                  })),
                  'endpoint-type': endpointType.map((item) => ({
                    id: uuidv4(),
                    href: '#url',
                    text: item,
                    isSelected: item === endpointType[0],
                  })),
                },
          key: objectsSelected.length === 1 && keysSelected.length === 1 ? { ...keysSelected[0] } : null,
        },
      },
    ],
  }
}
