import { getEndpoints } from '../index'

jest.mock('../url', () => ({ getBaseUrl: jest.fn() }))

const urlMockObject = require('../url')

describe('index', () => {
  const baseUrlMockString = 'fantastic-base-url'

  describe('getEndpoints()', () => {
    beforeEach(() => {
      jest.spyOn(urlMockObject, 'getBaseUrl').mockImplementation(jest.fn(() => baseUrlMockString))
    })

    afterEach(() => jest.clearAllMocks())

    test('must return endpoints', async () => {
      expect(getEndpoints()).toMatchObject({
        files: `${baseUrlMockString}`,
        instances: `${baseUrlMockString}`,
      })
    })
  })
})
