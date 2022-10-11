import { bindActionCreators } from 'redux'
import { maxParentRange, messageType } from '../../../library/constant'
import * as actionCreators from '../../action/actionCreators'
import { getRandomInstancesObjects } from '../../reducer/ui/instances/random/instancesObjects'

export async function getInstances({ dispatch }) {
  const { uiSetStateAction } = bindActionCreators(actionCreators, dispatch)

  const selectedItemIndex = 0

  uiSetStateAction({
    message: {
      text: 'Collecting instances...',
      type: messageType.info,
    },
    isLoading: true,
  })

  const instancesResponseData = getRandomInstancesObjects({ maxParentRange })

  uiSetStateAction({
    message: {
      text: instancesResponseData?.length !== 0 ? 'Successfully collected instances!' : 'There are no instances yet!',
      type: instancesResponseData?.length !== 0 ? messageType.success : messageType.warning,
    },
    isLoading: false,
  })

  const newInstance = await {
    summary: instancesResponseData?.[0].name ?? '',
    ariaAttr: {
      haspopup: true,
      current: 'page',
    },
    items: instancesResponseData.map(({ id, name, 'date-modified': dateModified, 'date-created': dateCreated }, index) => ({
      id,
      href: '#url',
      text: name,
      'date-modified': new Date(dateModified) || new Date(),
      'date-created': new Date(dateCreated) || new Date(),
      isSelected: index === selectedItemIndex,
    })),
  }

  return newInstance
}
