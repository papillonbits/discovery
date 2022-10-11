import { v4 as uuidv4 } from 'uuid'
import { getRandomItemFromArray } from '@papillonbits/library/array'
import { getRandomInteger } from '@papillonbits/library/number'
import { getRandomAlphaNumericStringByLength } from '@papillonbits/library/string'
import { getRandomBoolean } from '@papillonbits/library/boolean'
import { pipelineStepDirection, pipelineStepType } from '../../../../../library/constant'

export function getDefaultPipelineStepDirection() {
  return pipelineStepDirection.map((item) => ({
    id: uuidv4(),
    href: '#url',
    text: item,
    isSelected: item === pipelineStepDirection[0],
  }))
}

export function getRandomPipelineStepDirection() {
  const randomPipelineStepDirection = getRandomItemFromArray(pipelineStepDirection)

  return pipelineStepDirection.map((item) => ({
    id: uuidv4(),
    href: '#url',
    text: item,
    isSelected: item === randomPipelineStepDirection,
  }))
}

export function getDefaultPipelineStepType() {
  return pipelineStepType.map((item) => ({
    id: uuidv4(),
    href: '#url',
    text: item,
    isSelected: item === pipelineStepType[0],
  }))
}

export function getRandomPipelineStepType() {
  const randomPipelineStepType = getRandomItemFromArray(pipelineStepType)

  return pipelineStepType.map((item) => ({
    id: uuidv4(),
    href: '#url',
    text: item,
    isSelected: item === randomPipelineStepType,
  }))
}

export function getPipelineStep({ name, description }) {
  const password = getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) })

  return {
    id: uuidv4(),
    'pipeline-step-direction': getRandomPipelineStepDirection(),
    'pipeline-step-type': getRandomPipelineStepType(),
    name,
    description,
    url: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    'port-number': getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    username: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    password,
    'confirm-password': password,
    'wiki-link': getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    'date-modified': null,
    'date-created': new Date(),
    isSelected: false,
  }
}
export function getPipelineSteps() {
  return [
    { ...getPipelineStep({ name: 'Retrieval', description: 'Fantastic retrieval step' }) },
    { ...getPipelineStep({ name: 'Staging', description: 'Fantastic staging step' }) },
    { ...getPipelineStep({ name: 'Processing', description: 'Fantastic processing step' }) },
    { ...getPipelineStep({ name: 'Update promotions', description: 'Fantastic update promotions step' }) },
    { ...getPipelineStep({ name: 'Update reporting dimensions', description: 'Fantastic update reporting dimensions step' }) },
    { ...getPipelineStep({ name: 'Delivery', description: 'Fantastic delivery step' }) },
  ]
}

export function getRandomPipelineSteps() {
  return getPipelineSteps()
    .map((pipelineStep) => (getRandomBoolean() ? pipelineStep : null))
    .filter((pipelineStep) => pipelineStep !== null)
}
