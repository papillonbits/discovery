import { getNewFilesObject } from '../random/filesObjects'
import { idPrefix, rootLocation } from '../../../../../library/constant'

export function createFilesObjects({ filesObjects, locationId, locationItems, newFile, newFolder }) {
  const newFilesObject = getNewFilesObject({
    idPrefixFileFolder: newFile?.name ? idPrefix.file : idPrefix.directory,
    name: newFile?.name ?? newFolder.name,
    size: newFile?.size ?? newFolder.size,
    locationItems,
  })

  if (locationId === rootLocation.href) {
    return [...filesObjects, newFilesObject]
  }

  return filesObjects.map((object) => {
    const { contents } = object

    if (contents) {
      const newObject = {
        ...object,
        contents:
          object.id === locationId
            ? [
                ...createFilesObjects({
                  filesObjects: contents,
                  locationId,
                  locationItems,
                  newFile,
                  newFolder,
                }),
                newFilesObject,
              ]
            : [
                ...createFilesObjects({
                  filesObjects: contents,
                  locationId,
                  locationItems,
                  newFile,
                  newFolder,
                }),
              ],
      }

      return newObject
    }

    const newObject = {
      ...object,
      contents: object.id === locationId ? [newFilesObject] : object.contents,
    }

    return newObject
  })
}
