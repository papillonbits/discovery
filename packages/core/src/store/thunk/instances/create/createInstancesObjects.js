import { bindActionCreators } from 'redux'
import { getNewInstancesObject } from '../../../reducer/ui/instances/random/instancesObjects'
import { createInstancesObjects } from '../../../reducer/ui/instances/create'
import * as actionCreators from '../../../action/actionCreators'
import { timeout, messageType } from '../../../../library/constant'
import { alertTextApp } from '../../../../library/constant/alertText/app'
import { alertTextInstances } from '../../../../library/constant/alertText/instances'
import { getNewInstances } from '../../../reducer/ui/instances/random/instances'

export const createInstancesObjectsThunk =
  ({ instance, instancesObjects, edit }) =>
  async (dispatch) => {
    const { contextSetInstanceAction, uiSetInstancesAction, uiSetStateAction } = bindActionCreators(actionCreators, dispatch)

    const newInstancesObject = getNewInstancesObject({
      object: {
        name: edit.object.name,
      },
    })

    const newInstancesObjects = createInstancesObjects({
      instancesObjects,
      newInstancesObject,
    })

    const selectedInstanceId = instance.items.find((newInstancesObjectsItem) => newInstancesObjectsItem.isSelected === true)?.id

    uiSetStateAction({
      message: {
        text: alertTextInstances.action.create.progress,
        type: messageType.info,
      },
      isLoading: true,
    })

    const setInstancesResponse = {
      data: newInstancesObjects.map(({ id, name, 'date-created': dateCreated }) => ({
        id,
        name,
        'date-modified': dateCreated,
        'date-created': dateCreated,
      })),
    }

    uiSetStateAction({
      message: {
        text: alertTextInstances.action.create.success,
        type: messageType.success,
      },
      isLoading: false,
    })

    const newInstance = {
      ...instance,
      summary: setInstancesResponse.data.length === 1 ? setInstancesResponse.data[0].name : instance.summary,
      items: setInstancesResponse.data.map(({ id, name, 'date-created': dateCreated }) => ({
        id,
        href: '#url',
        text: name,
        'date-modified': new Date(dateCreated) || new Date(),
        'date-created': new Date(dateCreated) || new Date(),
        isSelected: selectedInstanceId === undefined ? true : selectedInstanceId === id,
      })),
    }

    contextSetInstanceAction(newInstance)

    uiSetInstancesAction(getNewInstances({ instance: newInstance }))

    setTimeout(() => {
      uiSetStateAction({
        message: {
          text: alertTextApp.ready,
          type: messageType.success,
        },
        isLoading: false,
      })
    }, timeout.fetch)
  }
