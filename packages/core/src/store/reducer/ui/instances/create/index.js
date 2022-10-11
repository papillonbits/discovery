export function createInstancesObjects({ instancesObjects, newInstancesObject }) {
  return [
    ...instancesObjects.map((instancesObject) => ({
      ...instancesObject,
      isSelected: false,
    })),
    newInstancesObject,
  ]
}
