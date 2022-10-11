import * as types from '../path'

describe('endpointPaths', () => {
  test('must return all endpoint paths', () => {
    expect(types).toHaveProperty('endpointPaths')
  })
})
