import { pipelineDirections, pipelineStates } from '../../../../../library/constant'

export function getPipelinesObjectsByDirection({ objects, objectDirection }) {
  if (!objectDirection) {
    return objects
  }

  const selectedObjectDirectionText = objectDirection.find(({ isSelected }) => isSelected === true).text

  if (selectedObjectDirectionText === pipelineDirections.default) {
    return objects
  }

  let objectsByDirection = []

  objectsByDirection = [
    ...objectsByDirection,
    // eslint-disable-next-line no-unsafe-optional-chaining
    ...objects?.filter((filterObject) => {
      const selectedFilterObjectDirectionText = filterObject['pipeline-direction'].find(({ isSelected }) => isSelected === true).text

      return selectedFilterObjectDirectionText === selectedObjectDirectionText
    }),
  ]

  return objectsByDirection?.filter((item, position) => objectsByDirection.indexOf(item) === position)
}

export function getPipelinesObjectsByState({ objects, objectState }) {
  if (!objectState) {
    return objects
  }

  const selectedObjectStateText = objectState.find(({ isSelected }) => isSelected === true).text

  if (selectedObjectStateText === pipelineStates.default) {
    return objects
  }

  let objectsByState = []

  objectsByState = [
    ...objectsByState,
    ...objects.filter((filterObject) => {
      const selectedFilterObjectStateText = filterObject['pipeline-state'].find(({ isSelected }) => isSelected === true).text

      return selectedFilterObjectStateText === selectedObjectStateText
    }),
  ]

  return objectsByState.filter((item, position) => objectsByState.indexOf(item) === position)
}

export function getPipelinesObjectsByName({ objects, objectName }) {
  if (!objectName) {
    return objects
  }

  let objectsByName = []

  objectsByName = [
    ...objectsByName,
    ...objects.filter((filterObject) => filterObject.name.toLowerCase().includes(objectName.toLowerCase())),
  ]

  return objectsByName.filter((item, position) => objectsByName.indexOf(item) === position)
}

export function getPipelinesObjectsByPrefix({ objects, objectPrefix }) {
  if (!objectPrefix) {
    return objects
  }

  let objectsByPrefix = []

  objectsByPrefix = [
    ...objectsByPrefix,
    ...objects.filter((filterObject) => filterObject.prefix.toLowerCase().includes(objectPrefix.toLowerCase())),
  ]

  return objectsByPrefix.filter((item, position) => objectsByPrefix.indexOf(item) === position)
}

export function getPipelineNewSearch({ pipelinesSelectedInstance, newSearchPipelinesObjects }) {
  let newSearch

  newSearch = {
    'pipeline-direction': pipelinesSelectedInstance.search?.['pipeline-direction'],
    'pipeline-state': pipelinesSelectedInstance.search?.['pipeline-state'],
    name: pipelinesSelectedInstance.search?.name,
    prefix: pipelinesSelectedInstance.search?.prefix,
    pipelinesObjects: !pipelinesSelectedInstance.search
      ? null
      : getPipelinesObjectsByDirection({
          objects: newSearchPipelinesObjects,
          objectDirection: pipelinesSelectedInstance.search?.['pipeline-direction'],
        }),
  }

  newSearch = {
    'pipeline-direction': pipelinesSelectedInstance.search?.['pipeline-direction'],
    'pipeline-state': pipelinesSelectedInstance.search?.['pipeline-state'],
    name: pipelinesSelectedInstance.search?.name,
    prefix: pipelinesSelectedInstance.search?.prefix,
    pipelinesObjects: !pipelinesSelectedInstance.search
      ? newSearch?.pipelinesObjects
      : getPipelinesObjectsByState({
          objects: newSearch?.pipelinesObjects || newSearchPipelinesObjects,
          objectState: pipelinesSelectedInstance.search?.['pipeline-state'],
        }),
  }

  newSearch = {
    'pipeline-direction': pipelinesSelectedInstance.search?.['pipeline-direction'],
    'pipeline-state': pipelinesSelectedInstance.search?.['pipeline-state'],
    name: pipelinesSelectedInstance.search?.name,
    prefix: pipelinesSelectedInstance.search?.prefix,
    pipelinesObjects: !pipelinesSelectedInstance.search
      ? newSearch?.pipelinesObjects
      : getPipelinesObjectsByName({
          objects: newSearch?.pipelinesObjects || newSearchPipelinesObjects,
          objectName: pipelinesSelectedInstance.search?.name,
        }),
  }

  newSearch = {
    'pipeline-direction': pipelinesSelectedInstance.search?.['pipeline-direction'],
    'pipeline-state': pipelinesSelectedInstance.search?.['pipeline-state'],
    name: pipelinesSelectedInstance.search?.name,
    prefix: pipelinesSelectedInstance.search?.prefix,
    pipelinesObjects: !pipelinesSelectedInstance.search
      ? newSearch?.pipelinesObjects
      : getPipelinesObjectsByPrefix({
          objects: newSearch?.pipelinesObjects || newSearchPipelinesObjects,
          objectPrefix: pipelinesSelectedInstance.search?.prefix,
        }),
  }

  return newSearch
}
