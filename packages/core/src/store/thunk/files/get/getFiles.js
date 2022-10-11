import { bindActionCreators } from 'redux'
import { messageType } from '../../../../library/constant'
import { setNewInstance } from '../../../reducer/ui/instances/set'
import * as actionCreators from '../../../action/actionCreators'
import { alertTextFiles } from '../../../../library/constant/alertText/files'

export const getFilesObjectsNewSelectedInstanceThunk =
  ({ newInstance }) =>
  async (dispatch) => {
    const {
      contextSetInstanceAction,
      uiSetInstancesAction,
      uiSetFilesAction,
      uiSetCredentialsAction,
      uiSetPipelinesAction,
      uiSetStateAction,
    } = bindActionCreators(actionCreators, dispatch)

    uiSetStateAction({
      message: {
        text: alertTextFiles.action.get.progress,
        type: messageType.info,
      },
      isLoading: true,
    })

    uiSetStateAction({
      message: {
        text: alertTextFiles.action.get.success,
        type: messageType.success,
      },
      isLoading: false,
    })

    setNewInstance({
      newInstance,
      contextSetInstanceAction,
      uiSetInstancesAction,
      uiSetFilesAction,
      uiSetCredentialsAction,
      uiSetPipelinesAction,
      uiSetStateAction,
    })
  }
