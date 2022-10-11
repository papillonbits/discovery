export function deleteFilesObjects({ filesObjects, selectedObjects }) {
  return filesObjects
    .map((object) => {
      const { contents } = object

      if (contents) {
        let newObject

        if (object.id !== selectedObjects.find((selectedObject) => selectedObject.id === object.id)?.id) {
          newObject = object
        }

        return newObject
          ? {
              ...newObject,
              contents: deleteFilesObjects({
                filesObjects: contents,
                selectedObjects,
              }),
            }
          : undefined
      }

      let newObject

      if (object.id !== selectedObjects.find((selectedObject) => selectedObject.id === object.id)?.id) {
        newObject = object
      }

      return newObject
    })
    .filter((object) => object)
}
