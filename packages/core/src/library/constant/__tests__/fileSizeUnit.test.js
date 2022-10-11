import * as fileSizeUnitConstants from '../fileSizeUnit'

describe('fileSizeUnit', () => {
  beforeEach(() => {
    jest.spyOn(Object, 'freeze').mockImplementation(jest.fn())
  })

  afterEach(() => jest.clearAllMocks())

  test('must return all file size unit constants', () => {
    expect(fileSizeUnitConstants).toHaveProperty('fileSizeUnit')
  })
})
