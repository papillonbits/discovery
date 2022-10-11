import { authorization, instance, navigation } from './context'
import { messageType } from '../../library/constant'
import { isRunningOnLocalHost } from '../../library/environment/host'
import { getNewInstances } from '../../store/reducer/ui/instances/random/instances'

export const appState = {
  context: {
    isRunningOnLocalHost,
    authorization,
    instance,
    navigation,
  },
  api: {},
  ui: {
    instances: getNewInstances({ instance }),
    files: [],
    credentials: [],
    pipelines: [],
    state: {
      message: {
        text: 'Starting...',
        type: messageType.info,
      },
      isLoading: false,
    },
  },
}
