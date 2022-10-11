import { v4 as uuidv4 } from 'uuid'
import { getRandomItemFromArray, getRange } from '@papillonbits/library/array'
import { getRandomBoolean } from '@papillonbits/library/boolean'
import { getRandomDate } from '@papillonbits/library/date'
import { getRandomInteger } from '@papillonbits/library/number'
import { getRandomAlphaNumericStringByLength } from '@papillonbits/library/string'
import { pipelineDirections, pipelineDirection, pipelineState } from '../../../../../library/constant'
import { pipelineFileFormat } from '../../../../../library/constant/fileFormat'
import { getRandomPipelineSteps } from './pipelinesSteps'

export function getNewPipelinesObjectStep({ step }) {
  const id = uuidv4()

  return {
    id,
    'pipeline-step-direction': step?.['pipeline-step-direction'] ?? null,
    'pipeline-step-type': step?.['pipeline-step-type'] ?? null,
    name: step?.name ?? null,
    description: step?.description ?? null,
    url: step?.url ?? null,
    'port-number': step?.['port-number'] ?? null,
    username: step?.username ?? null,
    password: step?.password ?? null,
    'confirm-password': step?.['confirm-password'] ?? null,
    'wiki-link': step?.['wiki-link'] ?? null,
    'date-modified': null,
    'date-created': new Date(),
    isSelected: false,
  }
}

function getRandomPipelinesObjectMapping() {
  return {
    id: uuidv4(),
    name: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    description: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    configuration: {},
    predicates: [],
    data: [],
    'date-modified': null,
    'date-created': getRandomDate(),
    isSelected: false,
  }
}

export function getNewPipelinesObjectMapping({ mapping }) {
  const id = uuidv4()

  return {
    id,
    name: mapping?.name ?? null,
    description: mapping?.description ?? null,
    configuration: mapping?.configuration ?? null,
    predicates: mapping?.predicates ?? null,
    data: mapping?.data ?? null,
    'date-modified': null,
    'date-created': new Date(),
    isSelected: false,
  }
}

function getRandomPipelinesObjectExecution() {
  return {
    id: uuidv4(),
    name: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    description: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    'date-modified': null,
    'date-created': getRandomDate(),
    isSelected: false,
  }
}

export function getNewPipelinesObjectExecution({ execution }) {
  const id = uuidv4()

  return {
    id,
    name: execution?.name ?? null,
    description: execution?.description ?? null,
    'date-modified': null,
    'date-created': new Date(),
    isSelected: false,
  }
}

export function getCalculatedPipelineDirection({ steps }) {
  const stepTexts = steps
    .map((step) => step['pipeline-step-direction'].find(({ isSelected }) => isSelected === true))
    .map(({ text }) => text)

  let calculatedPipelineDirection = pipelineDirections.mixed

  if (stepTexts.every((stepText) => stepText === pipelineDirections.inbound)) {
    calculatedPipelineDirection = pipelineDirections.inbound
  }

  if (stepTexts.every((stepText) => stepText === pipelineDirections.outbound)) {
    calculatedPipelineDirection = pipelineDirections.outbound
  }

  if (
    stepTexts.some((stepText) => stepText === pipelineDirections.inbound) &&
    stepTexts.some((stepText) => stepText === pipelineDirections.outbound)
  ) {
    calculatedPipelineDirection = pipelineDirections.mixed
  }

  return calculatedPipelineDirection
}

function getRandomPipelinesObject({ pipelinesTemplates, maxMappingsRange, maxExecutionsRange }) {
  const pipelineTemplate = getRandomBoolean() ? getRandomItemFromArray(pipelinesTemplates) : null
  const steps = pipelineTemplate ? pipelineTemplate.steps : getRandomPipelineSteps()

  const calculatedPipelineDirectionItems = pipelineDirection.map((item) => ({
    id: uuidv4(),
    href: '#url',
    text: item,
    isSelected: item === getCalculatedPipelineDirection({ steps }),
  }))
  const randomPipelineState = getRandomItemFromArray(pipelineState)
  const randomPipelineStateItems = pipelineState.map((item) => ({
    id: uuidv4(),
    href: '#url',
    text: item,
    isSelected: item === randomPipelineState,
  }))
  const randomFileFormat = getRandomItemFromArray(pipelineFileFormat)

  return {
    id: uuidv4(),
    'pipeline-direction': calculatedPipelineDirectionItems,
    'pipeline-state': randomPipelineStateItems,
    name: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    description: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    prefix: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    file: pipelineTemplate
      ? pipelineTemplate.file
      : `${getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) })}${randomFileFormat.extension}`,
    steps,
    mappings: getRange({ range: getRandomInteger({ max: maxMappingsRange }) }).map(() => getRandomPipelinesObjectMapping()),
    executions: getRange({ range: getRandomInteger({ max: maxExecutionsRange }) }).map(() => getRandomPipelinesObjectExecution()),
    'date-modified': null,
    'date-created': getRandomDate(),
    isSelected: false,
  }
}

export function getNewPipelinesObject({ object }) {
  const id = uuidv4()

  return {
    id,
    'pipeline-direction': object?.['pipeline-direction'] ?? null,
    'pipeline-state': object?.['pipeline-state'] ?? null,
    name: object?.name ?? null,
    description: object?.description ?? null,
    prefix: object?.prefix ?? null,
    file: object?.file ?? null,
    steps: [],
    mappings: [],
    executions: [],
    'date-modified': null,
    'date-created': new Date(),
    isSelected: false,
  }
}

export function getRandomPipelinesObjects({ pipelinesTemplates, maxParentRange, maxMappingsRange, maxExecutionsRange }) {
  return getRange({ range: getRandomInteger({ max: maxParentRange }) }).map(() =>
    getRandomPipelinesObject({ pipelinesTemplates, maxMappingsRange, maxExecutionsRange }),
  )
}
