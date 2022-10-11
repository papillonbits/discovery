import { v4 as uuidv4 } from 'uuid'
import { getPipelineNewSearch } from '../get/pipelines'
import { pipelineDirection, pipelineState } from '../../../../../library/constant'
import { selectPipelinesObjects } from './index'
import { getDefaultPipelineStepDirection, getDefaultPipelineStepType } from '../random/pipelinesSteps'

export function uiSelectPipelinesObjects(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const newPipelinesObjects = selectPipelinesObjects({
    pipelinesObjects: pipelinesSelectedInstance.pipelinesObjects,
    changedObjects: action.payload.changedObjects,
  })

  const newSearchPipelinesObjects = selectPipelinesObjects({
    pipelinesObjects: pipelinesSelectedInstance.search.pipelinesObjects,
    changedObjects: action.payload.changedObjects,
  })

  const newSearch = getPipelineNewSearch({ pipelinesSelectedInstance, newSearchPipelinesObjects })

  const objectsSelected = newPipelinesObjects.filter(({ isSelected }) => isSelected === true)

  let stepsSelected
  if (objectsSelected.length === 1) {
    stepsSelected = objectsSelected[0].steps.filter(({ isSelected }) => isSelected === true)
  }

  let mappingsSelected
  if (objectsSelected.length === 1) {
    mappingsSelected = objectsSelected[0].mappings.filter(({ isSelected }) => isSelected === true)
  }

  let executionsSelected
  if (objectsSelected.length === 1) {
    executionsSelected = objectsSelected[0].executions.filter(({ isSelected }) => isSelected === true)
  }

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        pipelinesObjects: newPipelinesObjects,
        search: {
          ...newSearch,
          pipelinesObjects: newSearch.pipelinesObjects,
        },
        edit: {
          ...pipelinesSelectedInstance.edit,
          object:
            objectsSelected.length === 1
              ? { ...objectsSelected[0] }
              : {
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
          step:
            objectsSelected.length === 1 && stepsSelected.length === 1
              ? { ...stepsSelected[0] }
              : {
                  'pipeline-step-direction': getDefaultPipelineStepDirection(),
                  'pipeline-step-type': getDefaultPipelineStepType(),
                },
          mapping: objectsSelected.length === 1 && mappingsSelected.length === 1 ? { ...mappingsSelected[0] } : null,
          execution: objectsSelected.length === 1 && executionsSelected.length === 1 ? { ...executionsSelected[0] } : null,
        },
      },
    ],
  }
}
