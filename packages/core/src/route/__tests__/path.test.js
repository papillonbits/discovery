/* eslint-disable global-require */
describe('path', () => {
  const someBaseUrl = 'fantastic-base-url'

  const extendEnvironmentVariables = () => {
    process.env.BASE_URL = someBaseUrl
  }

  const restoreEnvironmentVariables = () => {
    delete process.env.BASE_URL
  }

  const requirePath = () => require('../path')

  afterEach(() => {
    restoreEnvironmentVariables()
  })

  describe('appRootPath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { appRootPath } = requirePath()
      expect(appRootPath).toBe(`${process.env.BASE_URL}/`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { appRootPath } = requirePath()
      expect(appRootPath).toBe('/')
    })
  })

  describe('authorizationPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { authorizationPagePath } = requirePath()
      expect(authorizationPagePath).toBe(`${process.env.BASE_URL}/authorization`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { dashboardPagePath } = requirePath()
      expect(dashboardPagePath).toBe('/dashboard')
    })
  })

  describe('dashboardPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { dashboardPagePath } = requirePath()
      expect(dashboardPagePath).toBe(`${process.env.BASE_URL}/dashboard`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { dashboardPagePath } = requirePath()
      expect(dashboardPagePath).toBe('/dashboard')
    })
  })

  describe('instancesPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { instancesPagePath } = requirePath()
      expect(instancesPagePath).toBe(`${process.env.BASE_URL}/instances`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { instancesPagePath } = requirePath()
      expect(instancesPagePath).toBe('/instances')
    })
  })

  describe('filesPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { filesPagePath } = requirePath()
      expect(filesPagePath).toBe(`${process.env.BASE_URL}/files`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { filesPagePath } = requirePath()
      expect(filesPagePath).toBe('/files')
    })
  })

  describe('credentialsPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { credentialsPagePath } = requirePath()
      expect(credentialsPagePath).toBe(`${process.env.BASE_URL}/credentials`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { credentialsPagePath } = requirePath()
      expect(credentialsPagePath).toBe('/credentials')
    })
  })

  describe('pipelinesPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { pipelinesPagePath } = requirePath()
      expect(pipelinesPagePath).toBe(`${process.env.BASE_URL}/pipelines`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { pipelinesPagePath } = requirePath()
      expect(pipelinesPagePath).toBe('/pipelines')
    })
  })

  describe('monitorsPagePath', () => {
    test('must return path with base url when process.env.BASE_URL is present', () => {
      jest.resetModules()
      extendEnvironmentVariables()
      const { monitorsPagePath } = requirePath()
      expect(monitorsPagePath).toBe(`${process.env.BASE_URL}/monitors`)
    })

    test('must return path without base url when process.env.BASE_URL is absent', () => {
      jest.resetModules()
      const { monitorsPagePath } = requirePath()
      expect(monitorsPagePath).toBe('/monitors')
    })
  })
})
/* eslint-enable global-require */
