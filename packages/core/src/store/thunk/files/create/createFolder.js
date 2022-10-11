import { bindActionCreators } from 'redux'
import { timeout, messageType } from '../../../../library/constant'
import { alertTextApp } from '../../../../library/constant/alertText/app'
import { alertTextFiles } from '../../../../library/constant/alertText/files'
import * as actionCreators from '../../../action/actionCreators'
import { getSelectedInstanceId } from '../../../reducer/ui/instances/get'

export const createFolderCurrentSelectedInstanceThunk =
  ({ newFolderName }) =>
  async (dispatch, getState) => {
    const { uiCreateFilesObjectsAction, uiSetStateAction } = bindActionCreators(actionCreators, dispatch)

    const selectedInstanceId = getSelectedInstanceId({ state: getState() })

    uiSetStateAction({
      message: {
        text: alertTextFiles.action.create.progress,
        type: messageType.info,
      },
      isLoading: true,
    })

    uiSetStateAction({
      message: {
        text: alertTextFiles.action.create.success,
        type: messageType.success,
      },
      isLoading: false,
    })

    uiCreateFilesObjectsAction({
      newFolder: {
        name: newFolderName,
        size: '--',
      },
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
