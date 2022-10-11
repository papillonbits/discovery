import { selectInstancesObjects } from './index'

export function uiSelectInstancesObjects(state, action) {
  const newInstancesObjects = selectInstancesObjects({
    instancesObjects: state.instances.instancesObjects,
    changedObjects: action.payload.changedObjects,
  })

  const objectsSelected = newInstancesObjects.filter(({ isSelected }) => isSelected === true)

  return {
    ...state,
    instances: {
      ...state.instances,
      instancesObjects: newInstancesObjects,
      edit: {
        ...state.instances.edit,
        object: objectsSelected.length === 1 ? { ...objectsSelected[0] } : null,
      },
    },
  }
}
