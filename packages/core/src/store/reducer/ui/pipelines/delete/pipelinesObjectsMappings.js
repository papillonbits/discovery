import { deletePipelinesObjects } from './index'

export function uiDeletePipelinesObjectsMappings(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = pipelinesSelectedInstance.pipelinesObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newPipelinesObjectsMappings = deletePipelinesObjects({
    pipelinesObjects: objectsSelected[0].mappings,
    selectedObjects: action.payload.selectedObjectsMappings,
  })

  const newPipelinesObjects = pipelinesSelectedInstance.pipelinesObjects.map((pipelinesObject) => ({
    ...pipelinesObject,
    mappings: pipelinesObject.id === objectsSelected[0].id ? newPipelinesObjectsMappings : pipelinesObject.mappings,
  }))

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        pipelinesObjects: newPipelinesObjects,
        edit: {
          ...pipelinesSelectedInstance.edit,
          mapping: null,
        },
      },
    ],
  }
}
