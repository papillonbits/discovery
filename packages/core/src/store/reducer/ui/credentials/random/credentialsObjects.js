import { v4 as uuidv4 } from 'uuid'
import { getRandomItemFromArray, getRange } from '@papillonbits/library/array'
import { getRandomBoolean } from '@papillonbits/library/boolean'
import { getRandomDate } from '@papillonbits/library/date'
import { getRandomInteger } from '@papillonbits/library/number'
import { getRandomAlphaNumericStringByLength } from '@papillonbits/library/string'
import { endpointDirection, endpointType } from '../../../../../library/constant'

function getRandomCredentialsObjectKey() {
  return {
    id: uuidv4(),
    name: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    fingerprint: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    'checksum-valid': getRandomBoolean(),
    value: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    'date-imported': getRandomDate(),
    'date-modified': null,
    'date-created': getRandomDate(),
    isSelected: false,
  }
}

export function getNewCredentialsObjectKey({ key }) {
  const id = uuidv4()

  return {
    id,
    name: key?.name ?? null,
    fingerprint: key?.fingerprint ?? null,
    'checksum-valid': key?.['checksum-valid'] ?? false,
    value: key?.value ?? null,
    'date-imported': new Date(),
    'date-modified': null,
    'date-created': new Date(),
    isSelected: false,
  }
}

function getRandomCredentialsObject({ instance, maxKeyRange }) {
  const randomEndpointDirection = getRandomItemFromArray(endpointDirection)
  const randomEndpointDirectionItems = endpointDirection.map((item) => ({
    id: uuidv4(),
    href: '#url',
    text: item,
    isSelected: item === randomEndpointDirection,
  }))
  const randomEndpointType = getRandomItemFromArray(endpointType)
  const randomEndpointTypeItems = endpointType.map((item) => ({
    id: uuidv4(),
    href: '#url',
    text: item,
    isSelected: item === randomEndpointType,
  }))

  const password = getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) })

  return {
    id: uuidv4(),
    'endpoint-direction': randomEndpointDirectionItems,
    'endpoint-type': randomEndpointTypeItems,
    name: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    'account-name': instance.text,
    url: `https://${getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) })}`,
    'port-number': getRandomInteger({ max: 9999 }),
    username: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    password,
    'confirm-password': password,
    'wiki-link': `https://${getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) })}`,
    keys: getRange({ range: getRandomInteger({ max: maxKeyRange }) }).map(() => getRandomCredentialsObjectKey()),
    'date-modified': null,
    'date-created': getRandomDate(),
    isSelected: false,
  }
}

export function getNewCredentialsObject({ instance, object }) {
  const id = uuidv4()

  return {
    id,
    'endpoint-direction': object?.['endpoint-direction'] ?? null,
    'endpoint-type': object?.['endpoint-type'] ?? null,
    name: object?.name ?? null,
    url: object?.url ?? null,
    'port-number': object?.['port-number'] ?? null,
    username: object?.username ?? null,
    password: object?.password ?? null,
    'confirm-password': object?.['confirm-password'] ?? null,
    'wiki-link': object?.['wiki-link'] ?? null,
    keys: [],
    'account-name': instance.text ?? null,
    'date-modified': null,
    'date-created': new Date(),
    isSelected: false,
  }
}

export function getRandomCredentialsObjects({ instance, maxParentRange, maxKeyRange }) {
  return getRange({ range: getRandomInteger({ max: maxParentRange }) }).map(() => getRandomCredentialsObject({ instance, maxKeyRange }))
}
