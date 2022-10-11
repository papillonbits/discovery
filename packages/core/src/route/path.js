const rootPath = '/'
const dashboardPath = '/dashboard'
const instancesPath = '/instances'
const filesPath = '/files'
const credentialsPath = '/credentials'
const pipelinesPath = '/pipelines'
const monitorsPath = '/monitors'

export const appRootPath = process.env.BASE_URL ? `${process.env.BASE_URL}${rootPath}` : rootPath
export const dashboardPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${dashboardPath}` : dashboardPath
export const instancesPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${instancesPath}` : instancesPath
export const filesPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${filesPath}` : filesPath
export const credentialsPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${credentialsPath}` : credentialsPath
export const pipelinesPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${pipelinesPath}` : pipelinesPath
export const monitorsPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${monitorsPath}` : monitorsPath

export const startPagePath = filesPagePath
