import { bindActionCreators } from 'redux'
import * as actionCreators from '../../action/actionCreators'
import { timeout as timeoutDefault, messageType } from '../../../library/constant'

export const uiSetStateRegularThunk =
  ({ message: { text, type }, isLoading = false, timeout = timeoutDefault.alert }) =>
  async (dispatch) => {
    const { uiSetStateAction } = bindActionCreators(actionCreators, dispatch)

    uiSetStateAction({ message: { text, type }, isLoading })

    if (type !== messageType.error) {
      setTimeout(() => {
        uiSetStateAction({ message: { text: 'Ready...', type: messageType.success }, isLoading: false })
      }, timeout)
    }
  }

export const uiSetStateConsentThunk =
  ({ message: { text, type }, isLoading, consent }) =>
  async (dispatch) => {
    const { uiSetStateAction } = bindActionCreators(actionCreators, dispatch)

    const {
      action: { approve, cancel },
      withInput,
    } = consent

    uiSetStateAction({ message: { text, type }, isLoading, consent: { action: { approve, cancel }, withInput } })
  }
