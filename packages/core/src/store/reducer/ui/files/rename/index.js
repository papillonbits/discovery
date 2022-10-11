export function renameFilesObjects({ filesObjects, renamedObject }) {
  return filesObjects.map((object) => {
    const { contents } = object

    if (contents) {
      const newObject = {
        ...object,
        name: {
          ...object.name,
          value: object.id === renamedObject.id ? renamedObject.newFileFolderName : object.name.value,
        },
        isSelected: object.id === renamedObject.id ? false : object.isSelected,
        contents: renameFilesObjects({
          filesObjects: contents,
          renamedObject,
        }),
        path: object.path.map((pathItem) => ({
          ...pathItem,
          text: pathItem.href === renamedObject.id ? renamedObject.newFileFolderName : pathItem.text,
        })),
      }

      return newObject
    }

    const newObject = {
      ...object,
      name: {
        ...object.name,
        value: object.id === renamedObject.id ? renamedObject.newFileFolderName : object.name.value,
      },
      isSelected: object.id === renamedObject.id ? false : object.isSelected,
      path: object.path.map((pathItem) => ({
        ...pathItem,
        text: pathItem.href === renamedObject.id ? renamedObject.newFileFolderName : pathItem.text,
      })),
    }

    return newObject
  })
}
