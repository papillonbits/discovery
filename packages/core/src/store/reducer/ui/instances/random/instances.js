import { getCurrentIndex, getIndexItems, getRange } from '@papillonbits/library/array'
import { sortDefault, sortObjects } from '@papillonbits/library/sort'
import { pageSize, pageNumber } from '../../../../../library/constant'

export function getNewInstances({ instance }) {
  const instancesObjects = sortObjects({
    sort: sortDefault,
    objects: instance.items.map((item) => ({
      id: item.id,
      name: item.text,
      'date-modified': item['date-modified'],
      'date-created': item['date-created'],
    })),
  })

  const items = getRange({
    range: Math.ceil(instancesObjects.length / pageSize.instances),
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
    pagination: {
      pageSize: pageSize.instances,
      pageNumber,
      currentPage,
    },
    instancesObjects,
    sort: {
      object: sortDefault,
    },
    edit: {
      object: null,
    },
  }
}
