import { rootLocation } from '../../../../../library/constant'

function getFilesObjectById({ objects, objectId }) {
  let objectById

  objectById = objects.find((object) => object.id === objectId)

  if (!objectById) {
    objects.forEach((object) => {
      if (object.contents) {
        const result = getFilesObjectById({ objects: object.contents, objectId })
        objectById = result || objectById

        return objectById
      }
      return objectById
    })
  }

  return objectById
}

export function getLocation(location) {
  const { active, ariaAttr, items, filesObjects } = location

  const selectedObject = items.find((item) => item.isSelected === true)

  if (selectedObject.href === rootLocation.href) {
    return {
      active,
      ariaAttr,
      items,
      filesObjects,
    }
  }

  return {
    active,
    ariaAttr,
    items,
    filesObjects: getFilesObjectById({ objects: filesObjects, objectId: selectedObject.href })?.contents || [],
  }
}

export function getFilesObjectsByName({ objects, objectName }) {
  let objectsByName = []

  objectsByName = [
    ...objectsByName,
    ...objects.filter((filterObject) => filterObject.name.value.toLowerCase().includes(objectName.toLowerCase())),
  ]

  objects.forEach((object) => {
    if (object.contents) {
      objectsByName = [
        ...objectsByName,
        ...getFilesObjectsByName({ objects: object.contents, objectName }),
        ...objects.filter((filterObject) => filterObject.name.value.toLowerCase().includes(objectName.toLowerCase())),
      ]

      return objectsByName
    }
    return objectsByName
  })

  return objectsByName.filter((item, position) => objectsByName.indexOf(item) === position)
}

export function getFilesObjectsByExtensions({ objects, objectExtensions }) {
  let objectsByExtension = []

  objectsByExtension = [
    ...objectsByExtension,
    ...objects.filter((filterObject) => objectExtensions.includes(filterObject.name.value.toLowerCase().split('.')?.[1])),
  ]

  return objectsByExtension.filter((item, position) => objectsByExtension.indexOf(item) === position)
}
