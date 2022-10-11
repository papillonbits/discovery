import { rootLocation } from '../../../../../library/constant'

export function locateFilesObjectById({ filesObjects, objects, objectId, uiSetFilesLocationAction, location, selectedInstanceId }) {
  if (objectId === rootLocation.href) {
    uiSetFilesLocationAction({
      selectedInstanceId,
      location: {
        active: rootLocation.text,
        ariaAttr: {
          label: 'Breadcrumb',
          current: 'page',
        },
        items: [rootLocation],
        filesObjects,
      },
    })

    return filesObjects
  }

  return objects.map((object) => {
    const { path, contents } = object

    if (contents) {
      const newObject = {
        ...object,
        path: path.map(({ href, text }) => ({
          href,
          text,
          isSelected: href === objectId,
        })),
        contents: locateFilesObjectById({
          filesObjects,
          objects: contents,
          objectId,
          uiSetFilesLocationAction,
          location,
          selectedInstanceId,
        }),
      }

      if (newObject.id === objectId && newObject.contents) {
        uiSetFilesLocationAction({
          selectedInstanceId,
          location: {
            active: newObject.name.value,
            ariaAttr: location.ariaAttr,
            items: newObject.path,
            filesObjects,
          },
        })
      }

      return newObject
    }

    const newObject = {
      ...object,
      path: path.map(({ href, text }) => ({
        href,
        text,
        isSelected: href === objectId,
      })),
    }

    if (newObject.id === objectId && newObject.contents) {
      uiSetFilesLocationAction({
        selectedInstanceId,
        location: {
          active: newObject.name.value,
          ariaAttr: location.ariaAttr,
          items: newObject.path,
          filesObjects,
        },
      })
    }

    return newObject
  })
}
