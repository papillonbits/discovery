import * as constants from '../index'

describe('index', () => {
  beforeEach(() => {
    jest.spyOn(Object, 'freeze').mockImplementation(jest.fn())
  })

  afterEach(() => jest.clearAllMocks())

  test('must return all constants', () => {
    expect(constants).toHaveProperty('pageSize')
    expect(constants).toHaveProperty('pageNumber')
    expect(constants).toHaveProperty('maxParentRange')
    expect(constants).toHaveProperty('maxChildrenRange')
    expect(constants).toHaveProperty('rootLocation')
    expect(constants).toHaveProperty('idPrefix')
    expect(constants).toHaveProperty('eventKey')
    expect(constants).toHaveProperty('endpointDirection')
    expect(constants).toHaveProperty('endpointType')
    expect(constants).toHaveProperty('maxKeyRange')
    expect(constants).toHaveProperty('pipelineDirections')
    expect(constants).toHaveProperty('pipelineStates')
    expect(constants).toHaveProperty('pipelineTypes')
    expect(constants).toHaveProperty('pipelineSearchDirection')
    expect(constants).toHaveProperty('pipelineSearchState')
    expect(constants).toHaveProperty('pipelineDirection')
    expect(constants).toHaveProperty('pipelineState')
    expect(constants).toHaveProperty('pipelineStepDirection')
    expect(constants).toHaveProperty('pipelineStepType')
    expect(constants).toHaveProperty('maxMappingsRange')
    expect(constants).toHaveProperty('maxExecutionsRange')
    expect(constants).toHaveProperty('timeout')
    expect(constants).toHaveProperty('http')
    expect(constants).toHaveProperty('messageType')
    expect(constants).toHaveProperty('pageContent')
    expect(constants).toHaveProperty('filesObjectKind')
  })
})
