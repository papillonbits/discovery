import { bindActionCreators } from 'redux'
import { setNewInstance } from '../../reducer/ui/instances/set'
import * as actionCreators from '../../action/actionCreators'
import { appState } from '../../../state/default'
import { getInstances } from './index'

export const setAppCompleteStateThunk = () => async (dispatch) => {
  const {
    contextSetInstanceAction,
    contextSetNavigationAction,
    uiSetInstancesAction,
    uiSetFilesAction,
    uiSetCredentialsAction,
    uiSetPipelinesAction,
    uiSetStateAction,
  } = bindActionCreators(actionCreators, dispatch)

  const getInstancesResponseData = await getInstances({ dispatch })

  setNewInstance({
    newInstance: getInstancesResponseData,
    contextSetInstanceAction,
    uiSetInstancesAction,
    uiSetFilesAction,
    uiSetCredentialsAction,
    uiSetPipelinesAction,
    uiSetStateAction,
  })

  contextSetNavigationAction(appState.context.navigation)
}
