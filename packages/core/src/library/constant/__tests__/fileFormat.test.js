import * as fileFormatConstants from '../fileFormat'

describe('fileFormat', () => {
  beforeEach(() => {
    jest.spyOn(Object, 'freeze').mockImplementation(jest.fn())
  })

  test('must return all file format constants', () => {
    expect(fileFormatConstants).toHaveProperty('regularFileFormat')
    expect(fileFormatConstants).toHaveProperty('pipelineFileFormat')
  })
})
