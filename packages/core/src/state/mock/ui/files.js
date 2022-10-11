import { sortDefault } from '@papillonbits/library/sort'
import { pageSize, pageNumber, rootLocation } from '../../../library/constant'
import { getFilesObjectsWithPaths } from '../../../store/reducer/ui/files/random/filesObjects'
import { filesObjects as staticFilesObjects } from './filesObjects'

const location = {
  active: rootLocation.text,
  ariaAttr: {
    label: 'Breadcrumb',
    current: 'page',
  },
  items: [rootLocation],
}

const filesObjects = getFilesObjectsWithPaths({
  objects: staticFilesObjects,
  path: location.items,
})

export const files = {
  instanceId: null,
  pagination: {
    pageSize: pageSize.files,
    pageNumber,
    currentPage: {},
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
