import { bindActionCreators } from 'redux'
import { timeout, messageType } from '../../../../library/constant'
import * as actionCreators from '../../../action/actionCreators'
import { getSelectedInstanceId } from '../../../reducer/ui/instances/get'
import { alertTextApp } from '../../../../library/constant/alertText/app'
import { alertTextFiles } from '../../../../library/constant/alertText/files'

export const storeFilesObjectsCurrentSelectedInstanceThunk =
  ({ selectedObjects }) =>
  async (dispatch, getState) => {
    const { uiStoreFilesObjectsAction, uiSetStateAction } = bindActionCreators(actionCreators, dispatch)

    const selectedInstanceId = getSelectedInstanceId({ state: getState() })

    uiSetStateAction({
      message: {
        text: alertTextFiles.action.delete.progress,
        type: messageType.info,
      },
      isLoading: true,
    })

    uiSetStateAction({
      message: {
        text: alertTextFiles.action.delete.success,
        type: messageType.success,
      },
      isLoading: false,
    })

    uiStoreFilesObjectsAction({
      selectedObjects,
      selectedInstanceId,
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
