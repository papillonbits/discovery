import { isRunningOnLocalHost } from '../../../library/environment/host'

export const authorization = {
  token: null,
  // reverse this condition in all places to try out what happens when not running on localhost
  isRequired: !isRunningOnLocalHost,
}
