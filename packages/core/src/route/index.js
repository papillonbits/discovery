import { AsyncDashboardPage, DashboardPage } from '../pattern/page/DashboardPage'
import { AsyncInstancesPage, InstancesPage } from '../pattern/page/InstancesPage'
import { AsyncFilesPage, FilesPage } from '../pattern/page/FilesPage'
import { AsyncCredentialsPage, CredentialsPage } from '../pattern/page/CredentialsPage'
import { AsyncPipelinesPage, PipelinesPage } from '../pattern/page/PipelinesPage'
import { AsyncMonitorsPage, MonitorsPage } from '../pattern/page/MonitorsPage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import {
  appRootPath,
  dashboardPagePath,
  instancesPagePath,
  filesPagePath,
  credentialsPagePath,
  pipelinesPagePath,
  monitorsPagePath,
} from './path'

export const appRootRoute = {
  path: appRootPath,
}

export const dashboardPageRoute = {
  path: dashboardPagePath,
  clientComponent: AsyncDashboardPage,
  serverComponent: DashboardPage,
}

export const instancesPageRoute = {
  path: instancesPagePath,
  clientComponent: AsyncInstancesPage,
  serverComponent: InstancesPage,
}

export const filesPageRoute = {
  path: filesPagePath,
  clientComponent: AsyncFilesPage,
  serverComponent: FilesPage,
}

export const credentialsPageRoute = {
  path: credentialsPagePath,
  clientComponent: AsyncCredentialsPage,
  serverComponent: CredentialsPage,
}

export const pipelinesPageRoute = {
  path: pipelinesPagePath,
  clientComponent: AsyncPipelinesPage,
  serverComponent: PipelinesPage,
}

export const monitorsPageRoute = {
  path: monitorsPagePath,
  clientComponent: AsyncMonitorsPage,
  serverComponent: MonitorsPage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
