import { authorization, instance, navigation } from './context'
import { messageType } from '../../library/constant'
import { files } from './ui'

export const appState = {
  context: {
    isRunningOnLocalHost: true,
    authorization,
    instance,
    navigation,
  },
  api: {},
  ui: {
    files,
    state: {
      message: {
        text: 'Starting...',
        type: messageType.info,
      },
      isLoading: false,
    },
  },
}
