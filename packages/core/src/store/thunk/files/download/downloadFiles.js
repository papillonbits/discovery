import { bindActionCreators } from 'redux'
import { timeout, messageType } from '../../../../library/constant'
import { alertTextApp } from '../../../../library/constant/alertText/app'
import { alertTextFiles } from '../../../../library/constant/alertText/files'
import * as actionCreators from '../../../action/actionCreators'

export const downloadFilesObjectsCurrentSelectedInstanceThunk = () => async (dispatch) => {
  const { uiSetStateAction } = bindActionCreators(actionCreators, dispatch)

  uiSetStateAction({
    message: {
      text: alertTextFiles.action.download.progress,
      type: messageType.info,
    },
    isLoading: true,
  })

  uiSetStateAction({
    message: {
      text: alertTextFiles.action.download.success,
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
