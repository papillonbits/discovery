import { getPagination } from '@papillonbits/library/pagination'
import { sortObjects } from '@papillonbits/library/sort'
import { createInstancesObjects } from './index'

export function uiCreateInstancesObjects(state, action) {
  const newInstancesObjects = createInstancesObjects({
    instancesObjects: state.instances.instancesObjects,
    newInstancesObject: action.payload.newInstancesObject,
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
