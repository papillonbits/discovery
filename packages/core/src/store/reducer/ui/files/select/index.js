export function selectFilesObjects({ filesObjects, changedObjects }) {
  return filesObjects.map((object) => {
    const { contents } = object

    if (contents) {
      const newObject = {
        ...object,
        isSelected: (() => {
          const isChangedObject = changedObjects.find((changedObject) => changedObject.id === object.id)
          return isChangedObject ? isChangedObject.isSelected : object.isSelected
        })(),
        contents: selectFilesObjects({
          filesObjects: contents,
          changedObjects,
        }),
      }

      return newObject
    }

    const newObject = {
      ...object,
      isSelected: (() => {
        const isChangedObject = changedObjects.find((changedObject) => changedObject.id === object.id)
        return isChangedObject ? isChangedObject.isSelected : object.isSelected
      })(),
    }

    return newObject
  })
}
