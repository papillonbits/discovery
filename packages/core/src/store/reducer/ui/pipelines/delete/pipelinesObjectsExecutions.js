import { deletePipelinesObjects } from './index'

export function uiDeletePipelinesObjectsExecutions(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  const objectsSelected = pipelinesSelectedInstance.pipelinesObjects.filter(({ isSelected }) => isSelected === true)

  if (objectsSelected.length !== 1) {
    return state
  }

  const newPipelinesObjectsExecutions = deletePipelinesObjects({
    pipelinesObjects: objectsSelected[0].executions,
    selectedObjects: action.payload.selectedObjectsExecutions,
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
