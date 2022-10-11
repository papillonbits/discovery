export function selectInstancesObjects({ instancesObjects, changedObjects }) {
  return instancesObjects.map((object) => ({
    ...object,
    isSelected: (() => {
      const isChangedObject = changedObjects.find((changedObject) => changedObject.id === object.id)
      return isChangedObject ? isChangedObject.isSelected : object.isSelected
    })(),
  }))
}
