import { getCurrentIndex } from '@papillonbits/library/array'
import { paginationActionTypes, setNewIndexItemsOnMove } from '@papillonbits/library/pagination'

export function uiSetPipelinesPagination(state, action) {
  let pipelinesSelectedInstance
  let pipelinesRest
  let newIndexItemsOnBackwards
  let newIndexItemsOnBackwardsCurrentIndex
  let newIndexItemsOnForward
  let newIndexItemsOnForwardCurrentIndex

  switch (action.payload.paginationAction) {
    case paginationActionTypes.onBackwards:
      pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
      pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

      newIndexItemsOnBackwards = setNewIndexItemsOnMove({
        onBackwards: true,
        currentPage: pipelinesSelectedInstance.pagination.currentPage,
      })
      newIndexItemsOnBackwardsCurrentIndex = getCurrentIndex(newIndexItemsOnBackwards)

      return {
        ...state,
        pipelines: [
          ...pipelinesRest,
          {
            ...pipelinesSelectedInstance,
            pagination: {
              ...pipelinesSelectedInstance.pagination,
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
      pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
      pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

      newIndexItemsOnForward = setNewIndexItemsOnMove({
        onForward: true,
        currentPage: pipelinesSelectedInstance.pagination.currentPage,
      })
      newIndexItemsOnForwardCurrentIndex = getCurrentIndex(newIndexItemsOnForward)

      return {
        ...state,
        pipelines: [
          ...pipelinesRest,
          {
            ...pipelinesSelectedInstance,
            pagination: {
              ...pipelinesSelectedInstance.pagination,
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
