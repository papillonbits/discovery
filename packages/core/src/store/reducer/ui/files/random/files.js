import { getCurrentIndex, getIndexItems, getRange } from '@papillonbits/library/array'
import { sortDefault, sortObjects } from '@papillonbits/library/sort'
import { getRandomFilesObjects, getFilesObjectsWithPaths } from './filesObjects'
import { pageSize, pageNumber, maxParentRange, maxChildrenRange, rootLocation } from '../../../../../library/constant'

export function getNewFiles({ instance }) {
  const location = {
    active: rootLocation.text,
    ariaAttr: {
      label: 'Breadcrumb',
      current: 'page',
    },
    items: [rootLocation],
  }

  const filesObjects = sortObjects({
    sort: sortDefault,
    objects: getFilesObjectsWithPaths({
      objects: getRandomFilesObjects({ maxParentRange, maxChildrenRange }),
      path: location.items,
    }),
  })

  const items = getRange({
    range: Math.ceil(filesObjects.length / pageSize.files),
  }).map((_, index) => ({
    isCurrent: index === pageNumber - 1,
  }))

  const currentPage = {
    indexItems: getIndexItems(items),
    currentIndex: getCurrentIndex(getIndexItems(items)),
    canMoveBackwards: getCurrentIndex(getIndexItems(items)) > 0,
    canMoveForward: getCurrentIndex(getIndexItems(items)) < getIndexItems(items).length - 1,
  }

  return {
    instanceId: instance.id,
    pagination: {
      pageSize: pageSize.files,
      pageNumber,
      currentPage,
    },
    filesObjects,
    location: {
      ...location,
      filesObjects,
    },
    search: {
      keyword: null,
      filesObjects: null,
    },
    sort: sortDefault,
  }
}
