import { v4 as uuidv4 } from 'uuid'
import { getRange } from '@papillonbits/library/array'
import { getRandomDate } from '@papillonbits/library/date'
import { getRandomInteger } from '@papillonbits/library/number'
import { getRandomAlphaNumericStringByLength } from '@papillonbits/library/string'

function getRandomInstancesObject() {
  return {
    id: uuidv4(),
    name: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    'date-modified': null,
    'date-created': getRandomDate(),
    isSelected: false,
  }
}

export function getNewInstancesObject({ object }) {
  const id = uuidv4()

  return {
    id,
    name: object?.name ?? null,
    'date-modified': null,
    'date-created': new Date(),
    isSelected: false,
  }
}

export function getRandomInstancesObjects({ maxParentRange }) {
  return getRange({ range: getRandomInteger({ max: maxParentRange }) }).map(() => getRandomInstancesObject())
}
