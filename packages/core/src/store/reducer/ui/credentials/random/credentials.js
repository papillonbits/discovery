import { v4 as uuidv4 } from 'uuid'
import { getCurrentIndex, getIndexItems, getRange } from '@papillonbits/library/array'
import { sortDefault, sortObjects } from '@papillonbits/library/sort'
import { getRandomCredentialsObjects } from './credentialsObjects'
import { pageSize, pageNumber, maxParentRange, maxKeyRange, endpointDirection, endpointType } from '../../../../../library/constant'

export function getNewCredentials({ instance }) {
  const credentialsObjects = sortObjects({
    sort: sortDefault,
    objects: getRandomCredentialsObjects({ instance, maxParentRange, maxKeyRange }),
  })

  const items = getRange({
    range: Math.ceil(credentialsObjects.length / pageSize.credentials),
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
      pageSize: pageSize.credentials,
      pageNumber,
      currentPage,
    },
    credentialsObjects,
    search: {
      keyword: null,
      credentialsObjects: null,
    },
    sort: {
      object: sortDefault,
      key: sortDefault,
    },
    navigation: {
      ariaAttr: {
        label: 'Objects keys',
        current: 'page',
      },
      items: [
        {
          href: '#',
          text: 'Credentials',
          isSelected: true,
          enabled: true,
          visible: true,
        },
        {
          href: '#',
          text: 'Keys',
          isSelected: false,
          enabled: true,
          visible: true,
        },
      ],
      selectedIndex: 0,
    },
    edit: {
      object: {
        'endpoint-direction': endpointDirection.map((item) => ({
          id: uuidv4(),
          href: '#url',
          text: item,
          isSelected: item === endpointDirection[0],
        })),
        'endpoint-type': endpointType.map((item) => ({
          id: uuidv4(),
          href: '#url',
          text: item,
          isSelected: item === endpointType[0],
        })),
      },
    },
  }
}
