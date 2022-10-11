import { getSort, sortObjects } from '@papillonbits/library/sort'

export function uiSetCredentialsSortKey(state, action) {
  const credentialsSelectedInstance = state.credentials.find(
    (credentialsItem) => credentialsItem.instanceId === action.payload.selectedInstanceId,
  )
  const credentialsRest = state.credentials.filter((credentialsItem) => credentialsItem.instanceId !== action.payload.selectedInstanceId)

  const newSort = getSort({ currentSort: credentialsSelectedInstance.sort.key, newSort: action.payload.newSort })

  return {
    ...state,
    credentials: [
      ...credentialsRest,
      {
        ...credentialsSelectedInstance,
        credentialsObjects: credentialsSelectedInstance.credentialsObjects.map((credentialsObject) => ({
          ...credentialsObject,
          keys: sortObjects({ sort: newSort, objects: credentialsObject.keys }),
        })),
        sort: {
          ...credentialsSelectedInstance.sort,
          key: newSort,
        },
      },
    ],
  }
}
