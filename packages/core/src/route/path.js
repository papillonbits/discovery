import { isRunningOnLocalHost } from '../library/environment/host'

const rootPath = '/'
const authorizationPath = '/authorization'
const dashboardPath = '/dashboard'
const instancesPath = '/instances'
const filesPath = '/files'
const credentialsPath = '/credentials'
const pipelinesPath = '/pipelines'
const monitorsPath = '/monitors'

export const appRootPath = process.env.BASE_URL ? `${process.env.BASE_URL}${rootPath}` : rootPath
export const authorizationPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${authorizationPath}` : authorizationPath
export const dashboardPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${dashboardPath}` : dashboardPath
export const instancesPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${instancesPath}` : instancesPath
export const filesPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${filesPath}` : filesPath
export const credentialsPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${credentialsPath}` : credentialsPath
export const pipelinesPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${pipelinesPath}` : pipelinesPath
export const monitorsPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${monitorsPath}` : monitorsPath

/* istanbul ignore next */
export const continuePagePath = isRunningOnLocalHost ? filesPagePath : filesPagePath

/* istanbul ignore next */
// reverse this condition in all places to try out what happens when not running on localhost
export const startPagePath = isRunningOnLocalHost ? continuePagePath : authorizationPagePath
