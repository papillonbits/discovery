import { timeout, messageType } from '../../../../../library/constant'
import { getNewInstances } from '../random/instances'
import { getNewFiles } from '../../files/random/files'
import { getNewCredentials } from '../../credentials/random/credentials'
import { getNewPipelines } from '../../pipelines/random/pipelines'
import { alertTextApp } from '../../../../../library/constant/alertText/app'
import { alertTextInstances } from '../../../../../library/constant/alertText/instances'

export function setNewInstance({
  newInstance,
  contextSetInstanceAction,
  uiSetInstancesAction,
  uiSetFilesAction,
  uiSetCredentialsAction,
  uiSetPipelinesAction,
  uiSetStateAction,
}) {
  const newSelectedInstance = newInstance.items.find((instanceItem) => instanceItem.isSelected === true)

  uiSetStateAction({
    message: {
      text: alertTextInstances.action.set.progress,
      type: messageType.info,
    },
    isLoading: true,
  })

  contextSetInstanceAction(newInstance)
  const filesNewSelectedInstance = getNewFiles({ instance: newSelectedInstance })
  uiSetInstancesAction(getNewInstances({ instance: newInstance }))
  uiSetFilesAction(filesNewSelectedInstance)
  uiSetCredentialsAction(getNewCredentials({ instance: newSelectedInstance }))
  uiSetPipelinesAction(getNewPipelines({ instance: newSelectedInstance, filesNewSelectedInstance }))

  uiSetStateAction({
    message: {
      text: alertTextInstances.action.set.success,
      type: messageType.success,
    },
    isLoading: false,
  })

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
