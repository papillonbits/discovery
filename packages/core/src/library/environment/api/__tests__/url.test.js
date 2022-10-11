import { getBaseUrl } from '../url'

jest.requireActual('../../host')

const hostMockObject = require('../../host')

describe('url', () => {
  describe('getBaseUrl()', () => {
    test('must return base url when current host is localhost', () => {
      // eslint-disable-next-line
      hostMockObject.currentHost = 'http://localhost:8080'.split('://')[1].split('-')[0].split(':')[0]
      expect(getBaseUrl()).toEqual('http://acceptance/api')
    })

    test('must return base url when current host is test', () => {
      // eslint-disable-next-line
      hostMockObject.currentHost = 'http://test'.split('://')[1].split('-')[0].split(':')[0]
      expect(getBaseUrl()).toEqual('http://test/api')
    })

    test('must return base url when current host is acceptance', () => {
      // eslint-disable-next-line
      hostMockObject.currentHost = 'http://acceptance'.split('://')[1].split('-')[0].split(':')[0]
      expect(getBaseUrl()).toEqual('http://acceptance/api')
    })

    test('must return base url when current host is production', () => {
      // eslint-disable-next-line
      hostMockObject.currentHost = 'http://production'.split('://')[1].split('-')[0].split(':')[0]
      expect(getBaseUrl()).toEqual('http://production/api')
    })
  })
})
