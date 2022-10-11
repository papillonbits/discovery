import { v4 as uuidv4 } from 'uuid'
import { getRandomItemFromArray, getRange } from '@papillonbits/library/array'
import { getRandomBoolean } from '@papillonbits/library/boolean'
import { getRandomDate } from '@papillonbits/library/date'
import { getRandomDecimal, getRandomInteger } from '@papillonbits/library/number'
import { getRandomAlphaNumericStringByLength } from '@papillonbits/library/string'
import { rootLocation, idPrefix, filesObjectKind } from '../../../../../library/constant'
import { regularFileFormat, pipelineFileFormat } from '../../../../../library/constant/fileFormat'
import { fileSizeUnit } from '../../../../../library/constant/fileSizeUnit'

function getFilesObjectWithIcon({ filesObject }) {
  return filesObject.contents?.length > 0 || filesObject.kind === filesObjectKind.folder
    ? {
        ...filesObject,
        id: filesObject.id.replace(idPrefix.file, idPrefix.directory),
        name: { icon: 'FileDirectory16', value: filesObject.name.split('.')?.[0] },
        kind: filesObjectKind.folder,
        size: '--',
      }
    : {
        ...filesObject,
        name: { icon: 'File16', value: filesObject.name },
      }
}

function getRandomFilesObject({ maxChildrenRange, fileFormat }) {
  const randomFileFormat = getRandomItemFromArray(fileFormat)
  const randomFileSizeUnit = getRandomItemFromArray(fileSizeUnit)
  const randomDecimalUnits = getRandomItemFromArray(getRange({ range: 4 }))

  return {
    id: `${idPrefix.file}${uuidv4()}`,
    name: `${getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) })}${randomFileFormat.extension}`,
    kind: randomFileFormat.name,
    size: `${getRandomDecimal({ max: 100000, decimal: randomDecimalUnits })} ${randomFileSizeUnit}`,
    'date-modified': getRandomDate(),
    'date-created': getRandomDate(),
    isSelected: false,
    contents: (() => {
      const range = getRandomInteger({ max: maxChildrenRange })

      return range !== 0 && getRandomBoolean()
        ? [
            ...getRange({ range }).map(() =>
              getFilesObjectWithIcon({ filesObject: getRandomFilesObject({ maxChildrenRange, fileFormat }) }),
            ),
          ]
        : null
    })(),
  }
}

export function getNewFilesObject({ idPrefixFileFolder, name, size, locationItems }) {
  const id = `${idPrefixFileFolder}${uuidv4()}`

  return {
    id,
    name: {
      icon: idPrefixFileFolder === idPrefix.directory ? 'FileDirectory16' : 'File16',
      value: name,
    },
    kind: idPrefixFileFolder === idPrefix.directory ? filesObjectKind.folder : filesObjectKind.file,
    size,
    'date-modified': new Date(),
    'date-created': new Date(),
    isSelected: false,
    contents: idPrefixFileFolder === idPrefix.directory ? [] : null,
    path: [
      ...locationItems.map(({ href, text }) => ({
        href,
        text,
        isSelected: href === rootLocation.href,
      })),
      {
        href: id,
        text: name,
        isSelected: false,
      },
    ],
  }
}

export function getRandomFilesObjects({ maxParentRange, maxChildrenRange }) {
  return [
    ...getRange({ range: getRandomInteger({ max: maxParentRange }) }).map(() =>
      getFilesObjectWithIcon({ filesObject: getRandomFilesObject({ maxChildrenRange, fileFormat: regularFileFormat }) }),
    ),
    ...getRange({ range: getRandomInteger({ max: maxParentRange }) }).map(() =>
      getFilesObjectWithIcon({ filesObject: getRandomFilesObject({ maxChildrenRange: 0, fileFormat: pipelineFileFormat }) }),
    ),
  ]
}

export function getFilesObjectsWithPaths({ objects, path }) {
  return objects.map((object) => {
    const { id, name, contents } = object
    const currentPath = [...path, { href: id, text: name.value, isSelected: false }]

    if (contents) {
      return {
        ...object,
        path: currentPath,
        contents: getFilesObjectsWithPaths({
          objects: contents,
          path: currentPath,
        }),
      }
    }

    return { ...object, path: currentPath }
  })
}
