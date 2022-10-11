import * as dataTest from '../index'

describe('index', () => {
  describe('getDataTestSelector()', () => {
    test('must return dataTest', () => {
      const dataTestValue = 'some-data-test'
      expect(dataTest.getDataTestSelector(dataTestValue)).toEqual(`[data-test='${dataTestValue}']`)
    })
  })
})
