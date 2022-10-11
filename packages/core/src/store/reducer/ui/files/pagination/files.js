import { getCurrentIndex } from '@papillonbits/library/array'
import { paginationActionTypes, setNewIndexItemsOnMove } from '@papillonbits/library/pagination'
import { getFilesSpecifiedInstance, getFilesUnspecifiedInstances } from '../get'

export function uiSetFilesPagination(state, action) {
  let filesSelectedInstance
  let filesUnselectedInstances
  let newIndexItemsOnBackwards
  let newIndexItemsOnBackwardsCurrentIndex
  let newIndexItemsOnForward
  let newIndexItemsOnForwardCurrentIndex

  switch (action.payload.paginationAction) {
    case paginationActionTypes.onBackwards:
      filesSelectedInstance = getFilesSpecifiedInstance({ state, instanceId: action.payload.selectedInstanceId })
      filesUnselectedInstances = getFilesUnspecifiedInstances({ state, instanceId: action.payload.selectedInstanceId })

      newIndexItemsOnBackwards = setNewIndexItemsOnMove({
        onBackwards: true,
        currentPage: filesSelectedInstance.pagination.currentPage,
      })
      newIndexItemsOnBackwardsCurrentIndex = getCurrentIndex(newIndexItemsOnBackwards)

      return {
        ...state,
        files: [
          ...filesUnselectedInstances,
          {
            ...filesSelectedInstance,
            pagination: {
              ...filesSelectedInstance.pagination,
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
      filesSelectedInstance = getFilesSpecifiedInstance({ state, instanceId: action.payload.selectedInstanceId })
      filesUnselectedInstances = getFilesUnspecifiedInstances({ state, instanceId: action.payload.selectedInstanceId })

      newIndexItemsOnForward = setNewIndexItemsOnMove({
        onForward: true,
        currentPage: filesSelectedInstance.pagination.currentPage,
      })
      newIndexItemsOnForwardCurrentIndex = getCurrentIndex(newIndexItemsOnForward)

      return {
        ...state,
        files: [
          ...filesUnselectedInstances,
          {
            ...filesSelectedInstance,
            pagination: {
              ...filesSelectedInstance.pagination,
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
