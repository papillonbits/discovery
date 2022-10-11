import { sortObjects } from '@papillonbits/library/sort'
import { updateInstancesObjects } from './index'

export function uiUpdateInstancesObjects(state) {
  const newInstancesObjects = updateInstancesObjects({
    instancesObjects: state.instances.instancesObjects,
    object: state.instances.edit.object,
  })

  return {
    ...state,
    instances: {
      ...state.instances,
      instancesObjects: sortObjects({ sort: state.instances.sort.object, objects: newInstancesObjects }),
      edit: {
        object: null,
      },
    },
  }
}
