import { selectPipelinesObjects } from './index'
import { getPipelineNewSearch } from '../get/pipelines'

export function uiSelectPipelinesObjectsMappings(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)

  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = pipelinesSelectedInstance.pipelinesObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newPipelinesObjectsMappings = selectPipelinesObjects({
    pipelinesObjects: objectsSelected[0].mappings,
    changedObjects: action.payload.changedObjectsMappings,
  })

  const newPipelinesObjects = pipelinesSelectedInstance.pipelinesObjects.map((pipelinesObject) => ({
    ...pipelinesObject,
    mappings: pipelinesObject.id === objectsSelected[0].id ? newPipelinesObjectsMappings : pipelinesObject.mappings,
  }))

  const newSearch = getPipelineNewSearch({ pipelinesSelectedInstance, newPipelinesObjects })

  const mappingsSelected = newPipelinesObjectsMappings.filter(({ isSelected }) => isSelected === true)

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
          mapping: objectsSelected.length === 1 && mappingsSelected.length === 1 ? { ...mappingsSelected[0] } : null,
        },
      },
    ],
  }
}
