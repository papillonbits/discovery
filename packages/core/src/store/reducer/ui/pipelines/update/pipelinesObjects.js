import { v4 as uuidv4 } from 'uuid'
import { sortObjects } from '@papillonbits/library/sort'
import { getPipelineNewSearch } from '../get/pipelines'
import { pipelineDirection, pipelineState } from '../../../../../library/constant'
import { updatePipelinesObjects } from './index'

export function uiUpdatePipelinesObjects(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const newPipelinesObjects = updatePipelinesObjects({
    pipelinesObjects: pipelinesSelectedInstance.pipelinesObjects,
    object: pipelinesSelectedInstance.edit.object,
  })

  const newSearchPipelinesObjects = updatePipelinesObjects({
    pipelinesObjects: pipelinesSelectedInstance.search.pipelinesObjects,
    object: pipelinesSelectedInstance.edit.object,
  })

  const newSearch = getPipelineNewSearch({ pipelinesSelectedInstance, newSearchPipelinesObjects })

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        pipelinesObjects: sortObjects({ sort: pipelinesSelectedInstance.sort.object, objects: newPipelinesObjects }),
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
