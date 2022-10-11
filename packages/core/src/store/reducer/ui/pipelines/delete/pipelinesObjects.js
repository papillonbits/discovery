import { v4 as uuidv4 } from 'uuid'
import { getPagination } from '@papillonbits/library/pagination'
import { sortObjects } from '@papillonbits/library/sort'
import { getPipelineNewSearch } from '../get/pipelines'
import { pipelineDirection, pipelineState } from '../../../../../library/constant'
import { deletePipelinesObjects } from './index'

export function uiDeletePipelinesObjects(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const newPipelinesObjects = deletePipelinesObjects({
    pipelinesObjects: pipelinesSelectedInstance.pipelinesObjects,
    selectedObjects: action.payload.selectedObjects,
  })

  const newSearchPipelinesObjects = deletePipelinesObjects({
    pipelinesObjects: pipelinesSelectedInstance.search.pipelinesObjects,
    selectedObjects: action.payload.selectedObjects,
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
