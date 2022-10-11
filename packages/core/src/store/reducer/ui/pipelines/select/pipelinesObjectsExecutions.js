import { selectPipelinesObjects } from './index'
import { getPipelineNewSearch } from '../get/pipelines'

export function uiSelectPipelinesObjectsExecutions(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)

  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = pipelinesSelectedInstance.pipelinesObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newPipelinesObjectsExecutions = selectPipelinesObjects({
    pipelinesObjects: objectsSelected[0].executions,
    changedObjects: action.payload.changedObjectsExecutions,
  })

  const newPipelinesObjects = pipelinesSelectedInstance.pipelinesObjects.map((pipelinesObject) => ({
    ...pipelinesObject,
    executions: pipelinesObject.id === objectsSelected[0].id ? newPipelinesObjectsExecutions : pipelinesObject.executions,
  }))

  const newSearch = getPipelineNewSearch({ pipelinesSelectedInstance, newPipelinesObjects })

  const executionsSelected = newPipelinesObjectsExecutions.filter(({ isSelected }) => isSelected === true)

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
          object: objectsSelected.length === 1 ? { ...objectsSelected[0] } : null,
          execution: objectsSelected.length === 1 && executionsSelected.length === 1 ? { ...executionsSelected[0] } : null,
        },
      },
    ],
  }
}
