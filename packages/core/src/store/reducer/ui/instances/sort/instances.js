import { getSort, sortObjects } from '@papillonbits/library/sort'

export function uiSetInstancesSortObject(state, action) {
  const newSort = getSort({ currentSort: state.instances.sort.object, newSort: action.payload.newSort })

  return {
    ...state,
    instances: {
      ...state.instances,
      instancesObjects: sortObjects({ sort: newSort, objects: state.instances.instancesObjects }),
      sort: {
        ...state.instances.sort,
        object: newSort,
      },
    },
  }
}
