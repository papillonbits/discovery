import { getCurrentIndex } from '@papillonbits/library/array'
import { paginationActionTypes, setNewIndexItemsOnMove } from '@papillonbits/library/pagination'

export function uiSetCredentialsPagination(state, action) {
  let credentialsSelectedInstance
  let credentialsRest
  let newIndexItemsOnBackwards
  let newIndexItemsOnBackwardsCurrentIndex
  let newIndexItemsOnForward
  let newIndexItemsOnForwardCurrentIndex

  switch (action.payload.paginationAction) {
    case paginationActionTypes.onBackwards:
      credentialsSelectedInstance = state.credentials.find(
        (credentialsItem) => credentialsItem.instanceId === action.payload.selectedInstanceId,
      )
      credentialsRest = state.credentials.filter((credentialsItem) => credentialsItem.instanceId !== action.payload.selectedInstanceId)

      newIndexItemsOnBackwards = setNewIndexItemsOnMove({
        onBackwards: true,
        currentPage: credentialsSelectedInstance.pagination.currentPage,
      })
      newIndexItemsOnBackwardsCurrentIndex = getCurrentIndex(newIndexItemsOnBackwards)

      return {
        ...state,
        credentials: [
          ...credentialsRest,
          {
            ...credentialsSelectedInstance,
            pagination: {
              ...credentialsSelectedInstance.pagination,
              pageNumber: newIndexItemsOnBackwardsCurrentIndex + 1,
              currentPage: {
                indexItems: newIndexItemsOnBackwards,
                currentIndex: newIndexItemsOnBackwardsCurrentIndex,
                canMoveBackwards: newIndexItemsOnBackwardsCurrentIndex > 0,
                canMoveForward: newIndexItemsOnBackwardsCurrentIndex < newIndexItemsOnBackwards.length - 1,
              },
            },
          },
        ],
      }
    case paginationActionTypes.onForward:
      credentialsSelectedInstance = state.credentials.find(
        (credentialsItem) => credentialsItem.instanceId === action.payload.selectedInstanceId,
      )
      credentialsRest = state.credentials.filter((credentialsItem) => credentialsItem.instanceId !== action.payload.selectedInstanceId)

      newIndexItemsOnForward = setNewIndexItemsOnMove({
        onForward: true,
        currentPage: credentialsSelectedInstance.pagination.currentPage,
      })
      newIndexItemsOnForwardCurrentIndex = getCurrentIndex(newIndexItemsOnForward)

      return {
        ...state,
        credentials: [
          ...credentialsRest,
          {
            ...credentialsSelectedInstance,
            pagination: {
              ...credentialsSelectedInstance.pagination,
              pageNumber: newIndexItemsOnForwardCurrentIndex + 1,
              currentPage: {
                indexItems: newIndexItemsOnForward,
                currentIndex: newIndexItemsOnForwardCurrentIndex,
                canMoveBackwards: newIndexItemsOnForwardCurrentIndex > 0,
                canMoveForward: newIndexItemsOnForwardCurrentIndex < newIndexItemsOnForward.length - 1,
              },
            },
          },
        ],
      }
    default:
      throw new Error()
  }
}
