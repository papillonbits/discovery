export function getCredentialsObjectsByName({ objects, objectName }) {
  let objectsByName = []

  objectsByName = [
    ...objectsByName,
    ...objects.filter((filterObject) => filterObject.name.value.toLowerCase().includes(objectName.toLowerCase())),
  ]

  return objectsByName.filter((item, position) => objectsByName.indexOf(item) === position)
}
