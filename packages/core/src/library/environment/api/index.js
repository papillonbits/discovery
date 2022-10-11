import { getBaseUrl } from './url'
import { endpointPaths } from './path'

export function getEndpoints() {
  return {
    instances: `${getBaseUrl()}${endpointPaths.instances}`,
    files: `${getBaseUrl()}${endpointPaths.files}`,
  }
}
