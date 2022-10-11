import { selectPipelinesObjects } from './index'
import { getPipelineNewSearch } from '../get/pipelines'
import { getDefaultPipelineStepDirection, getDefaultPipelineStepType } from '../random/pipelinesSteps'

export function uiSelectPipelinesObjectsSteps(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)

  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = pipelinesSelectedInstance.pipelinesObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newPipelinesObjectsSteps = selectPipelinesObjects({
    pipelinesObjects: objectsSelected[0].steps,
    changedObjects: action.payload.changedObjectsSteps,
  })

  const newPipelinesObjects = pipelinesSelectedInstance.pipelinesObjects?.map((pipelinesObject) => ({
    ...pipelinesObject,
    steps: pipelinesObject.id === objectsSelected[0].id ? newPipelinesObjectsSteps : pipelinesObject.steps,
  }))

  const newSearchPipelinesObjects = pipelinesSelectedInstance.search.pipelinesObjects?.map((pipelinesObject) => ({
    ...pipelinesObject,
    steps: pipelinesObject.id === objectsSelected[0].id ? newPipelinesObjectsSteps : pipelinesObject.steps,
  }))

  const newSearch = getPipelineNewSearch({ pipelinesSelectedInstance, newSearchPipelinesObjects })

  const stepsSelected = newPipelinesObjectsSteps.filter(({ isSelected }) => isSelected === true)

  const result = {
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
          object: objectsSelected.length === 1 ? { ...objectsSelected[0] } : null,
          step:
            objectsSelected.length === 1 && stepsSelected.length === 1
              ? { ...stepsSelected[0] }
              : {
                  'pipeline-step-direction': getDefaultPipelineStepDirection(),
                  'pipeline-step-type': getDefaultPipelineStepType(),
                },
        },
      },
    ],
  }

  return result
}
