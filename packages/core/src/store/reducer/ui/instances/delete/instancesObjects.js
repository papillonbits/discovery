import { getPagination } from '@papillonbits/library/pagination'
import { sortObjects } from '@papillonbits/library/sort'
import { deleteInstancesObjects } from './index'

export function uiDeleteInstancesObjects(state, action) {
  const newInstancesObjects = deleteInstancesObjects({
    instancesObjects: state.instances.instancesObjects,
    selectedObjects: action.payload.selectedObjects,
  })

  const newPagination = getPagination({
    searchObjects: newInstancesObjects,
    regularObjects: newInstancesObjects,
    pagination: state.instances.pagination,
  })

  return {
    ...state,
    instances: {
      ...state.instances,
      instancesObjects: sortObjects({ sort: state.instances.sort.object, objects: newInstancesObjects }),
      pagination: newPagination,
      edit: {
        object: null,
      },
    },
  }
}
