import { v4 as uuidv4 } from 'uuid'
import { getRandomItemFromArray, getRange } from '@papillonbits/library/array'
import { getRandomDate } from '@papillonbits/library/date'
import { getRandomInteger } from '@papillonbits/library/number'
import { getRandomAlphaNumericStringByLength } from '@papillonbits/library/string'
import { getFilesObjectsByExtensions } from '../../files/get/filesObjects'
import { pipelineFileFormat } from '../../../../../library/constant/fileFormat'
import { getRandomPipelineSteps } from './pipelinesSteps'

function getRandomPipelinesTemplate({ filesNewSelectedInstance }) {
  return {
    id: uuidv4(),
    name: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    description: getRandomAlphaNumericStringByLength({ length: getRandomInteger({ max: 20 }) }),
    file: getRandomItemFromArray(
      getFilesObjectsByExtensions({
        objects: filesNewSelectedInstance.filesObjects,
        objectExtensions: pipelineFileFormat.map(
          (pipelineFileFormatItem) => pipelineFileFormatItem.extension.toLowerCase().split('.')?.[1],
        ),
      }),
    ),
    steps: getRandomPipelineSteps(),
    'date-modified': null,
    'date-created': getRandomDate(),
    isSelected: false,
  }
}

export function getRandomPipelinesTemplates({ maxParentRange, filesNewSelectedInstance }) {
  return getRange({ range: getRandomInteger({ max: maxParentRange }) }).map(() => getRandomPipelinesTemplate({ filesNewSelectedInstance }))
}
