import { getSort, sortObjects } from '@papillonbits/library/sort'

export function uiSetCredentialsSortObject(state, action) {
  const credentialsSelectedInstance = state.credentials.find(
    (credentialsItem) => credentialsItem.instanceId === action.payload.selectedInstanceId,
  )
  const credentialsRest = state.credentials.filter((credentialsItem) => credentialsItem.instanceId !== action.payload.selectedInstanceId)

  const newSort = getSort({ currentSort: credentialsSelectedInstance.sort.object, newSort: action.payload.newSort })

  return {
    ...state,
    credentials: [
      ...credentialsRest,
      {
        ...credentialsSelectedInstance,
        credentialsObjects: sortObjects({ sort: newSort, objects: credentialsSelectedInstance.credentialsObjects }),
        sort: {
          ...credentialsSelectedInstance.sort,
          object: newSort,
        },
      },
    ],
  }
}
