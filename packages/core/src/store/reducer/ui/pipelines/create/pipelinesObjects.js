import { v4 as uuidv4 } from 'uuid'
import { getPagination } from '@papillonbits/library/pagination'
import { sortObjects } from '@papillonbits/library/sort'
import { getPipelineNewSearch } from '../get/pipelines'
import { pipelineDirection, pipelineState } from '../../../../../library/constant'
import { createPipelinesObjects } from './index'

export function uiCreatePipelinesObjects(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstance.id)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstance.id)

  const newPipelinesObjects = createPipelinesObjects({
    pipelinesObjects: pipelinesSelectedInstance.pipelinesObjects,
    object: pipelinesSelectedInstance.edit.object,
  })

  const newSearchPipelinesObjects = createPipelinesObjects({
    pipelinesObjects: pipelinesSelectedInstance.search.pipelinesObjects,
    object: pipelinesSelectedInstance.edit.object,
  })

  const newSearch = getPipelineNewSearch({ pipelinesSelectedInstance, newSearchPipelinesObjects })

  const newPagination = getPagination({
    searchObjects: newSearch.pipelinesObjects,
    regularObjects: newPipelinesObjects,
    pagination: pipelinesSelectedInstance.pagination,
  })

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        pipelinesObjects: sortObjects({ sort: pipelinesSelectedInstance.sort.object, objects: newPipelinesObjects }),
        pagination: newPagination,
        search: {
          ...newSearch,
          pipelinesObjects: sortObjects({ sort: pipelinesSelectedInstance.sort.object, objects: newSearch.pipelinesObjects }),
        },
        edit: {
          ...pipelinesSelectedInstance.edit,
          object: {
            'pipeline-direction': pipelineDirection.map((item) => ({
              id: uuidv4(),
              href: '#url',
              text: item,
              isSelected: item === pipelineDirection[0],
            })),
            'pipeline-state': pipelineState.map((item) => ({
              id: uuidv4(),
              href: '#url',
              text: item,
              isSelected: item === pipelineState[0],
            })),
          },
          step: null,
          mapping: null,
          execution: null,
        },
      },
    ],
  }
}
