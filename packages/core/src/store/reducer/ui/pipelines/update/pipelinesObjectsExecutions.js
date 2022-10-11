import { updatePipelinesObjects } from './index'

export function uiUpdatePipelinesObjectsExecutions(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = pipelinesSelectedInstance.pipelinesObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newPipelinesObjectsExecutions = updatePipelinesObjects({
    pipelinesObjects: objectsSelected[0].executions,
    object: pipelinesSelectedInstance.edit.execution,
  })

  const newPipelinesObjects = pipelinesSelectedInstance.pipelinesObjects.map((pipelinesObject) => ({
    ...pipelinesObject,
    executions: pipelinesObject.id === objectsSelected[0].id ? newPipelinesObjectsExecutions : pipelinesObject.executions,
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
          execution: null,
        },
      },
    ],
  }
}
