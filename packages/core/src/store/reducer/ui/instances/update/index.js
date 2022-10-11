export function updateInstancesObjects({ instancesObjects, object }) {
  return instancesObjects.map((instancesObject) =>
    instancesObject.id === object.id
      ? { ...object, 'date-modified': new Date(), isSelected: false }
      : { ...instancesObject, isSelected: false },
  )
}
