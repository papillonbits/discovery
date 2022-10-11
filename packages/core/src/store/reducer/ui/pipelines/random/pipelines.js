import { v4 as uuidv4 } from 'uuid'
import { getCurrentIndex, getIndexItems, getRange } from '@papillonbits/library/array'
import { sortDefault, sortObjects } from '@papillonbits/library/sort'
import { getRandomPipelinesObjects } from './pipelinesObjects'
import { getRandomPipelinesTemplates } from './pipelinesTemplates'
import {
  pageSize,
  pageNumber,
  maxParentRange,
  maxMappingsRange,
  maxExecutionsRange,
  pipelineDirections,
  pipelineSearchDirection,
  pipelineStates,
  pipelineSearchState,
  pipelineDirection,
  pipelineState,
} from '../../../../../library/constant'
import { getDefaultPipelineStepDirection, getDefaultPipelineStepType } from './pipelinesSteps'

export function getNewPipelines({ instance, filesNewSelectedInstance }) {
  const pipelinesTemplates = sortObjects({
    sort: sortDefault,
    objects: getRandomPipelinesTemplates({ maxParentRange, filesNewSelectedInstance }),
  })

  const pipelinesObjects = sortObjects({
    sort: sortDefault,
    objects: getRandomPipelinesObjects({
      pipelinesTemplates,
      maxParentRange,
      maxMappingsRange,
      maxExecutionsRange,
    }),
  })

  const items = getRange({
    range: Math.ceil(pipelinesObjects.length / pageSize.pipelines),
  }).map((_, index) => ({
    isCurrent: index === pageNumber - 1,
  }))

  const currentPage = {
    indexItems: getIndexItems(items),
    currentIndex: getCurrentIndex(getIndexItems(items)),
    canMoveBackwards: getCurrentIndex(getIndexItems(items)) > 0,
    canMoveForward: getCurrentIndex(getIndexItems(items)) < getIndexItems(items).length - 1,
  }

  return {
    instanceId: instance.id,
    pagination: {
      pageSize: pageSize.pipelines,
      pageNumber,
      currentPage,
    },
    pipelinesTemplates,
    pipelinesObjects,
    search: {
      'pipeline-direction': pipelineSearchDirection.map((item) => ({
        id: uuidv4(),
        href: '#url',
        text: item,
        isSelected: item === pipelineDirections.default,
      })),
      'pipeline-state': pipelineSearchState.map((item) => ({
        id: uuidv4(),
        href: '#url',
        text: item,
        isSelected: item === pipelineStates.default,
      })),
      name: null,
      prefix: null,
      pipelinesObjects: null,
    },
    sort: {
      object: sortDefault,
      step: sortDefault,
      mapping: sortDefault,
      execution: sortDefault,
    },
    navigation: {
      ariaAttr: {
        label: 'Objects steps mappings executions',
        current: 'page',
      },
      items: [
        {
          href: '#',
          text: 'Pipelines',
          isSelected: true,
          enabled: true,
          visible: true,
        },
        {
          href: '#',
          text: 'Steps',
          isSelected: false,
          enabled: true,
          visible: true,
        },
        {
          href: '#',
          text: 'Mappings',
          isSelected: false,
          enabled: true,
          visible: true,
        },
        {
          href: '#',
          text: 'Executions',
          isSelected: false,
          enabled: true,
          visible: true,
        },
      ],
      selectedIndex: 0,
    },
    edit: {
      object: {
        'pipeline-direction': pipelineDirection.map((item) => ({
          id: uuidv4(),
          href: '#url',
          text: item,
          isSelected: item === pipelineDirection[0],
        })),
        'pipeline-state': pipelineState.map((item) => ({
          id: uuidv4(),
          href: '#url',
          text: item,
          isSelected: item === pipelineState[0],
        })),
      },
      step: {
        'pipeline-step-direction': getDefaultPipelineStepDirection(),
        'pipeline-step-type': getDefaultPipelineStepType(),
      },
    },
  }
}
