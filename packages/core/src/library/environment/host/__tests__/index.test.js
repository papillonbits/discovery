import * as hosts from '../index'

describe('index', () => {
  afterEach(() => jest.resetModules())

  const localhostHref = 'https://localhost'
  const testHref = 'https://test'
  const acceptanceHref = 'https://acceptance'
  const productionHref = 'https://production'
  const elsewhereHref = 'https://elsewhere'

  describe('hosts and indicators', () => {
    test('must return all hosts and indicators', () => {
      expect(hosts).toHaveProperty('currentHost')
      expect(hosts).toHaveProperty('localHost')
      expect(hosts).toHaveProperty('stagingHosts')
      expect(hosts).toHaveProperty('productionHost')
      expect(hosts).toHaveProperty('isRunningOnLocalHost')
      expect(hosts).toHaveProperty('isRunningOnStaging')
      expect(hosts).toHaveProperty('isRunningOnProduction')
    })
  })

  describe('currentHost', () => {
    test('must equal localhost when running on localhost', async () => {
      window.location.hash = localhostHref

      const { currentHost, localHost } = await import('../index')
      expect(currentHost).toEqual(localHost)
    })

    test('must equal test host href when running on test', async () => {
      window.location.hash = testHref

      const { currentHost, stagingHosts } = await import('../index')
      expect(currentHost).toEqual(stagingHosts.test.href)
    })

    test('must equal acceptance host href when running on acceptance', async () => {
      window.location.hash = acceptanceHref

      const { currentHost, stagingHosts } = await import('../index')
      expect(currentHost).toEqual(stagingHosts.acceptance.href)
    })

    test('must equal production host href when running on production', async () => {
      window.location.hash = productionHref

      const { currentHost, productionHost } = await import('../index')
      expect(currentHost).toEqual(productionHost.href)
    })

    test('must equal elsewhere host when running elsewhere', async () => {
      window.location.hash = elsewhereHref

      const { currentHost } = await import('../index')
      expect(currentHost).toEqual('elsewhere')
    })
  })

  describe('isRunningOnLocalHost', () => {
    test('must be truthy when running on localhost', async () => {
      window.location.hash = localhostHref

      const isRunningOnLocalHost = await import('../index')
      expect(isRunningOnLocalHost).toBeTruthy()
    })

    test('must be falsy when running elsewhere', async () => {
      window.location.hash = elsewhereHref

      const { isRunningOnLocalHost } = await import('../index')
      expect(isRunningOnLocalHost).toBeFalsy()
    })
  })

  describe('isRunningOnStaging', () => {
    test('must be truthy when running on test', async () => {
      window.location.hash = testHref

      const { isRunningOnStaging } = await import('../index')
      expect(isRunningOnStaging).toBeTruthy()
    })

    test('must be truthy when running on acceptance', async () => {
      window.location.hash = acceptanceHref

      const { isRunningOnStaging } = await import('../index')
      expect(isRunningOnStaging).toBeTruthy()
    })

    test('must be falsy when running elsewhere', async () => {
      window.location.hash = elsewhereHref

      const { isRunningOnStaging } = await import('../index')
      expect(isRunningOnStaging).toBeFalsy()
    })
  })

  describe('isRunningOnProduction', () => {
    test('must be truthy when running on production', async () => {
      window.location.hash = productionHref

      const { isRunningOnProduction } = await import('../index')
      expect(isRunningOnProduction).toBeTruthy()
    })

    test('must be falsy when running elsewhere', async () => {
      window.location.hash = elsewhereHref

      const { isRunningOnProduction } = await import('../index')
      expect(isRunningOnProduction).toBeFalsy()
    })
  })
})
