import { v4 as uuidv4 } from 'uuid'
import { createPipelinesObjectsSteps } from './index'
import { getDefaultPipelineStepDirection, getDefaultPipelineStepType } from '../random/pipelinesSteps'
import { getCalculatedPipelineDirection } from '../random/pipelinesObjects'
import { pipelineDirection } from '../../../../../library/constant'

export function uiCreatePipelinesObjectsSteps(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)

  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = pipelinesSelectedInstance.pipelinesObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newPipelinesObjectsSteps = createPipelinesObjectsSteps({
    pipelinesObjectsSteps: objectsSelected[0].steps,
    step: pipelinesSelectedInstance.edit.step,
  })

  const newPipelinesObjects = pipelinesSelectedInstance.pipelinesObjects?.map((pipelinesObject) => {
    const steps = pipelinesObject.id === objectsSelected[0].id ? newPipelinesObjectsSteps : pipelinesObject.steps

    const calculatedPipelineDirectionItems = pipelineDirection.map((item) => ({
      id: uuidv4(),
      href: '#url',
      text: item,
      isSelected: item === getCalculatedPipelineDirection({ steps }),
    }))

    return {
      ...pipelinesObject,
      'pipeline-direction': calculatedPipelineDirectionItems,
      steps,
    }
  })

  const newSearchPipelinesObjects = pipelinesSelectedInstance.search.pipelinesObjects?.map((pipelinesObject) => {
    const steps = pipelinesObject.id === objectsSelected[0].id ? newPipelinesObjectsSteps : pipelinesObject.steps

    const calculatedPipelineDirectionItems = pipelineDirection.map((item) => ({
      id: uuidv4(),
      href: '#url',
      text: item,
      isSelected: item === getCalculatedPipelineDirection({ steps }),
    }))

    return {
      ...pipelinesObject,
      'pipeline-direction': calculatedPipelineDirectionItems,
      steps,
    }
  })

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        pipelinesObjects: newPipelinesObjects,
        search: {
          ...pipelinesSelectedInstance.search,
          pipelinesObjects: newSearchPipelinesObjects,
        },
        edit: {
          ...pipelinesSelectedInstance.edit,
          object:
            objectsSelected.length === 1
              ? {
                  ...objectsSelected[0],
                  'pipeline-direction': pipelineDirection.map((item) => ({
                    id: uuidv4(),
                    href: '#url',
                    text: item,
                    isSelected:
                      item ===
                      getCalculatedPipelineDirection({
                        steps: newPipelinesObjects.find(({ isSelected }) => isSelected === true).steps,
                      }),
                  })),
                }
              : null,
          step: {
            'pipeline-step-direction': getDefaultPipelineStepDirection(),
            'pipeline-step-type': getDefaultPipelineStepType(),
          },
        },
      },
    ],
  }
}
