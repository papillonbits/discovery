import { v4 as uuidv4 } from 'uuid'
import { getPagination } from '@papillonbits/library/pagination'
import { sortObjects } from '@papillonbits/library/sort'
import { endpointDirection, endpointType } from '../../../../../library/constant'
import { getCredentialsObjectsByName } from '../get/credentialsObjects'
import { createCredentialsObjects } from './index'

export function uiCreateCredentialsObjects(state, action) {
  const credentialsSelectedInstance = state.credentials.find(
    (credentialsItem) => credentialsItem.instanceId === action.payload.selectedInstance.id,
  )
  const credentialsRest = state.credentials.filter((credentialsItem) => credentialsItem.instanceId !== action.payload.selectedInstance.id)

  const newCredentialsObjects = createCredentialsObjects({
    instance: action.payload.selectedInstance,
    credentialsObjects: credentialsSelectedInstance.credentialsObjects,
    object: credentialsSelectedInstance.edit.object,
  })

  const newSearch = {
    keyword: credentialsSelectedInstance.search.keyword,
    credentialsObjects: !credentialsSelectedInstance.search.keyword
      ? null
      : getCredentialsObjectsByName({ objects: newCredentialsObjects, objectName: credentialsSelectedInstance.search.keyword }),
  }

  const newPagination = getPagination({
    searchObjects: newSearch.credentialsObjects,
    regularObjects: newCredentialsObjects,
    pagination: credentialsSelectedInstance.pagination,
  })

  return {
    ...state,
    credentials: [
      ...credentialsRest,
      {
        ...credentialsSelectedInstance,
        credentialsObjects: sortObjects({ sort: credentialsSelectedInstance.sort.object, objects: newCredentialsObjects }),
        pagination: newPagination,
        search: {
          ...newSearch,
          credentialsObjects: sortObjects({ sort: credentialsSelectedInstance.sort.object, objects: newSearch.credentialsObjects }),
        },
        edit: {
          ...credentialsSelectedInstance.edit,
          object: {
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
          key: null,
        },
      },
    ],
  }
}
