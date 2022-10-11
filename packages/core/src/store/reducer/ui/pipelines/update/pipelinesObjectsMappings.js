import { updatePipelinesObjects } from './index'

export function uiUpdatePipelinesObjectsMappings(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = pipelinesSelectedInstance.pipelinesObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newPipelinesObjectsMappings = updatePipelinesObjects({
    pipelinesObjects: objectsSelected[0].mappings,
    object: pipelinesSelectedInstance.edit.mapping,
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
