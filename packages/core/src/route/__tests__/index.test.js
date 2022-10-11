/* eslint-disable import/no-dynamic-require, global-require */
const mockRequireAuthorizationPage = () => {
  const authorizationPagePath = '../../pattern/page/AuthorizationPage'
  jest.mock(authorizationPagePath, () => 'AuthorizationPage')
  return require(authorizationPagePath)
}

const mockRequireDashboardPage = () => {
  const dashboardPagePath = '../../pattern/page/DashboardPage'
  jest.mock(dashboardPagePath, () => 'DashboardPage')
  return require(dashboardPagePath)
}

const mockRequireInstancesPage = () => {
  const instancesPagePath = '../../pattern/page/InstancesPage'
  jest.mock(instancesPagePath, () => 'InstancesPage')
  return require(instancesPagePath)
}

const mockRequireFilesPage = () => {
  const filesPagePath = '../../pattern/page/FilesPage'
  jest.mock(filesPagePath, () => 'FilesPage')
  return require(filesPagePath)
}

const mockRequireCredentialsPage = () => {
  const credentialsPagePath = '../../pattern/page/CredentialsPage'
  jest.mock(credentialsPagePath, () => 'CredentialsPage')
  return require(credentialsPagePath)
}

const mockRequirePipelinesPage = () => {
  const pipelinesPagePath = '../../pattern/page/PipelinesPage'
  jest.mock(pipelinesPagePath, () => 'PipelinesPage')
  return require(pipelinesPagePath)
}

const mockRequireMonitorsPage = () => {
  const monitorsPagePath = '../../pattern/page/MonitorsPage'
  jest.mock(monitorsPagePath, () => 'MonitorsPage')
  return require(monitorsPagePath)
}

const mockRequireNotFoundPage = () => {
  const notFoundPagePath = '../../pattern/page/NotFoundPage'
  jest.mock(notFoundPagePath, () => 'NotFoundPage')
  return require(notFoundPagePath)
}

const mockRequirePath = () => {
  const pathPath = '../path'
  jest.mock(pathPath, () => ({
    appRootPath: 'fantastic-app-root-path',
    authorizationPagePath: 'fantastic-authorization-page-path',
    dashboardPagePath: 'fantastic-dashboard-page-path',
    instancesPagePath: 'fantastic-instances-page-path',
    filesPagePath: 'fantastic-files-page-path',
    credentialsPagePath: 'fantastic-credentials-page-path',
    pipelinesPagePath: 'fantastic-pipelines-page-path',
    monitorsPagePath: 'fantastic-monitors-page-path',
    notFoundPagePath: 'fantastic-not-found-page-path',
  }))
  return require(pathPath)
}

describe('index', () => {
  const path = mockRequirePath()

  const requireIndex = () => require('../index')

  describe('appRootRoute', () => {
    const expectedAppRootRoute = {
      path: path.appRootPath,
    }

    test('must return app root route object', () => {
      const { appRootRoute } = requireIndex()
      expect(appRootRoute).toEqual(expectedAppRootRoute)
    })
  })

  describe('authorizationPageRoute', () => {
    const authorizationPage = mockRequireAuthorizationPage()

    const expectedAuthorizationPageRoute = {
      path: path.authorizationPagePath,
      clientComponent: authorizationPage.AsyncAuthorizationPage,
      serverComponent: authorizationPage.AuthorizationPage,
    }

    test('must return authorization page route object', () => {
      const { authorizationPageRoute } = requireIndex()
      expect(authorizationPageRoute).toEqual(expectedAuthorizationPageRoute)
    })
  })

  describe('dashboardPageRoute', () => {
    const dashboardPage = mockRequireDashboardPage()

    const expectedDashboardPageRoute = {
      path: path.dashboardPagePath,
      clientComponent: dashboardPage.AsyncDashboardPage,
      serverComponent: dashboardPage.DashboardPage,
    }

    test('must return dashboard page route object', () => {
      const { dashboardPageRoute } = requireIndex()
      expect(dashboardPageRoute).toEqual(expectedDashboardPageRoute)
    })
  })

  describe('instancesPageRoute', () => {
    const instancesPage = mockRequireInstancesPage()

    const expectedInstancesPageRoute = {
      path: path.instancesPagePath,
      clientComponent: instancesPage.AsyncInstancesPage,
      serverComponent: instancesPage.InstancesPage,
    }

    test('must return instances page route object', () => {
      const { instancesPageRoute } = requireIndex()
      expect(instancesPageRoute).toEqual(expectedInstancesPageRoute)
    })
  })

  describe('filesPageRoute', () => {
    const filesPage = mockRequireFilesPage()

    const expectedFilesPageRoute = {
      path: path.filesPagePath,
      clientComponent: filesPage.AsyncFilesPage,
      serverComponent: filesPage.FilesPage,
    }

    test('must return files page route object', () => {
      const { filesPageRoute } = requireIndex()
      expect(filesPageRoute).toEqual(expectedFilesPageRoute)
    })
  })

  describe('credentialsPageRoute', () => {
    const credentialsPage = mockRequireCredentialsPage()

    const expectedCredentialsPageRoute = {
      path: path.credentialsPagePath,
      clientComponent: credentialsPage.AsyncCredentialsPage,
      serverComponent: credentialsPage.CredentialsPage,
    }

    test('must return credentials page route object', () => {
      const { credentialsPageRoute } = requireIndex()
      expect(credentialsPageRoute).toEqual(expectedCredentialsPageRoute)
    })
  })

  describe('pipelinesPageRoute', () => {
    const pipelinesPage = mockRequirePipelinesPage()

    const expectedPipelinesPageRoute = {
      path: path.pipelinesPagePath,
      clientComponent: pipelinesPage.AsyncPipelinesPage,
      serverComponent: pipelinesPage.PipelinesPage,
    }

    test('must return pipelines page route object', () => {
      const { pipelinesPageRoute } = requireIndex()
      expect(pipelinesPageRoute).toEqual(expectedPipelinesPageRoute)
    })
  })

  describe('monitorsPageRoute', () => {
    const monitorsPage = mockRequireMonitorsPage()

    const expectedMonitorsPageRoute = {
      path: path.monitorsPagePath,
      clientComponent: monitorsPage.AsyncMonitorsPage,
      serverComponent: monitorsPage.MonitorsPage,
    }

    test('must return monitors page route object', () => {
      const { monitorsPageRoute } = requireIndex()
      expect(monitorsPageRoute).toEqual(expectedMonitorsPageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    const notFoundPage = mockRequireNotFoundPage()

    const expectedNotFoundPageRoute = {
      clientComponent: notFoundPage.AsyncNotFoundPage,
      serverComponent: notFoundPage.NotFoundPage,
    }

    test('must return not found page route object', () => {
      const { notFoundPageRoute } = requireIndex()
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
/* eslint-enable import/no-dynamic-require, global-require */
