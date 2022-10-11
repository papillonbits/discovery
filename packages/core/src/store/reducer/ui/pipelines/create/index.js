import {
  getNewPipelinesObject,
  getNewPipelinesObjectStep,
  getNewPipelinesObjectMapping,
  getNewPipelinesObjectExecution,
} from '../random/pipelinesObjects'

export function createPipelinesObjects({ pipelinesObjects, object }) {
  const newPipelinesObject = getNewPipelinesObject({ object })

  return pipelinesObjects
    ? [
        ...(pipelinesObjects?.map((pipelinesObject) => ({
          ...pipelinesObject,
          isSelected: false,
        })) ?? []),
        newPipelinesObject,
      ]
    : null
}

export function createPipelinesObjectsSteps({ pipelinesObjectsSteps, step }) {
  const newPipelinesObjectStep = getNewPipelinesObjectStep({ step })

  return [
    ...pipelinesObjectsSteps.map((pipelinesObjectsStep) => ({
      ...pipelinesObjectsStep,
      isSelected: false,
    })),
    newPipelinesObjectStep,
  ]
}

export function createPipelinesObjectsMappings({ pipelinesObjectsMappings, mapping }) {
  const newPipelinesObjectMapping = getNewPipelinesObjectMapping({ mapping })

  return [
    ...pipelinesObjectsMappings.map((pipelinesObjectsMapping) => ({
      ...pipelinesObjectsMapping,
      isSelected: false,
    })),
    newPipelinesObjectMapping,
  ]
}

export function createPipelinesObjectsExecutions({ pipelinesObjectsExecutions, execution }) {
  const newPipelinesObjectExecution = getNewPipelinesObjectExecution({ execution })

  return [
    ...pipelinesObjectsExecutions.map((pipelinesObjectsExecution) => ({
      ...pipelinesObjectsExecution,
      isSelected: false,
    })),
    newPipelinesObjectExecution,
  ]
}
