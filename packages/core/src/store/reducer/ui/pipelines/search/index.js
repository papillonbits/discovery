import {
  getPipelinesObjectsByDirection,
  getPipelinesObjectsByState,
  getPipelinesObjectsByName,
  getPipelinesObjectsByPrefix,
} from '../get/pipelines'

export function getPipelineNewSearch({ pipelinesSelectedInstance, action }) {
  let newSearch

  newSearch = {
    'pipeline-direction': action.payload?.['pipeline-direction'] ?? pipelinesSelectedInstance.search?.['pipeline-direction'],
    'pipeline-state': action.payload?.['pipeline-state'] ?? pipelinesSelectedInstance.search?.['pipeline-state'],
    name: action.payload?.name ?? pipelinesSelectedInstance.search?.name,
    prefix: action.payload?.prefix ?? pipelinesSelectedInstance.search?.prefix,
    pipelinesObjects:
      !action.payload['pipeline-direction'] && !pipelinesSelectedInstance.search
        ? null
        : getPipelinesObjectsByDirection({
            objects: pipelinesSelectedInstance.pipelinesObjects,
            objectDirection: action.payload?.['pipeline-direction'],
          }),
  }

  newSearch = {
    'pipeline-direction': action.payload?.['pipeline-direction'] ?? pipelinesSelectedInstance.search?.['pipeline-direction'],
    'pipeline-state': action.payload?.['pipeline-state'] ?? pipelinesSelectedInstance.search?.['pipeline-state'],
    name: action.payload?.name ?? pipelinesSelectedInstance.search?.name,
    prefix: action.payload?.prefix ?? pipelinesSelectedInstance.search?.prefix,
    pipelinesObjects:
      !action.payload['pipeline-state'] && !pipelinesSelectedInstance.search
        ? newSearch.pipelinesObjects || pipelinesSelectedInstance.pipelinesObjects
        : getPipelinesObjectsByState({
            objects: newSearch.pipelinesObjects || pipelinesSelectedInstance.pipelinesObjects,
            objectState: action.payload?.['pipeline-state'],
          }),
  }

  newSearch = {
    'pipeline-direction': action.payload?.['pipeline-direction'] ?? pipelinesSelectedInstance.search?.['pipeline-direction'],
    'pipeline-state': action.payload?.['pipeline-state'] ?? pipelinesSelectedInstance.search?.['pipeline-state'],
    name: action.payload?.name ?? pipelinesSelectedInstance.search?.name,
    prefix: action.payload?.prefix ?? pipelinesSelectedInstance.search?.prefix,
    pipelinesObjects:
      !action.payload.name && !pipelinesSelectedInstance.search
        ? newSearch.pipelinesObjects || pipelinesSelectedInstance.pipelinesObjects
        : getPipelinesObjectsByName({
            objects: newSearch.pipelinesObjects || pipelinesSelectedInstance.pipelinesObjects,
            objectName: action.payload?.name,
          }),
  }

  newSearch = {
    'pipeline-direction': action.payload?.['pipeline-direction'] ?? pipelinesSelectedInstance.search?.['pipeline-direction'],
    'pipeline-state': action.payload?.['pipeline-state'] ?? pipelinesSelectedInstance.search?.['pipeline-state'],
    name: action.payload?.name ?? pipelinesSelectedInstance.search?.name,
    prefix: action.payload?.prefix ?? pipelinesSelectedInstance.search?.prefix,
    pipelinesObjects:
      !action.payload.prefix && !pipelinesSelectedInstance.search
        ? newSearch.pipelinesObjects || pipelinesSelectedInstance.pipelinesObjects
        : getPipelinesObjectsByPrefix({
            objects: newSearch.pipelinesObjects || pipelinesSelectedInstance.pipelinesObjects,
            objectPrefix: action.payload?.prefix,
          }),
  }

  return newSearch
}
