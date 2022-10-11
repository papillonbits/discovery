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
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: localhostHref }))
      const { currentHost, localHost } = await import('../index')
      expect(currentHost).toEqual(localHost)
    })

    test('must equal test host href when running on test', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: testHref }))
      const { currentHost, stagingHosts } = await import('../index')
      expect(currentHost).toEqual(stagingHosts.test.href)
    })

    test('must equal acceptance host href when running on acceptance', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: acceptanceHref }))
      const { currentHost, stagingHosts } = await import('../index')
      expect(currentHost).toEqual(stagingHosts.acceptance.href)
    })

    test('must equal production host href when running on production', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: productionHref }))
      const { currentHost, productionHost } = await import('../index')
      expect(currentHost).toEqual(productionHost.href)
    })

    test('must equal elsewhere host when running elsewhere', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: elsewhereHref }))
      const { currentHost } = await import('../index')
      expect(currentHost).toEqual('elsewhere')
    })
  })

  describe('isRunningOnLocalHost', () => {
    test('must be truthy when running on localhost', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: localhostHref }))

      const isRunningOnLocalHost = await import('../index')
      expect(isRunningOnLocalHost).toBeTruthy()
    })

    test('must be falsy when running elsewhere', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: elsewhereHref }))

      const { isRunningOnLocalHost } = await import('../index')
      expect(isRunningOnLocalHost).toBeFalsy()
    })
  })

  describe('isRunningOnStaging', () => {
    test('must be truthy when running on test', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: testHref }))

      const { isRunningOnStaging } = await import('../index')
      expect(isRunningOnStaging).toBeTruthy()
    })

    test('must be truthy when running on acceptance', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: acceptanceHref }))

      const { isRunningOnStaging } = await import('../index')
      expect(isRunningOnStaging).toBeTruthy()
    })

    test('must be falsy when running elsewhere', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: elsewhereHref }))

      const { isRunningOnStaging } = await import('../index')
      expect(isRunningOnStaging).toBeFalsy()
    })
  })

  describe('isRunningOnProduction', () => {
    test('must be truthy when running on production', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: productionHref }))

      const { isRunningOnProduction } = await import('../index')
      expect(isRunningOnProduction).toBeTruthy()
    })

    test('must be falsy when running elsewhere', async () => {
      jest.spyOn(window, 'location', 'get').mockImplementation(() => ({ href: elsewhereHref }))

      const { isRunningOnProduction } = await import('../index')
      expect(isRunningOnProduction).toBeFalsy()
    })
  })
})
