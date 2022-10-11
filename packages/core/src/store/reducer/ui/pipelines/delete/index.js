export function deletePipelinesObjects({ pipelinesObjects, selectedObjects }) {
  return pipelinesObjects
    ?.map((object) => {
      let newObject

      if (object.id !== selectedObjects.find((selectedObject) => selectedObject.id === object.id)?.id) {
        newObject = object
      }

      return newObject
    })
    .filter((object) => object)
}
