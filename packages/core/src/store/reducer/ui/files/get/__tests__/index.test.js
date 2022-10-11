import { getFilesSelectedInstance, getFilesUnselectedInstances, getFilesSpecifiedInstance, getFilesUnspecifiedInstances } from '../index'

jest.mock('../../../instances/get', () => ({ getSelectedInstanceId: jest.fn() }))

const instancesGetMockObject = require('../../../instances/get')

describe('index', () => {
  describe('getFilesSelectedInstance()', () => {
    test('must return selected instance files object when instance ids match', () => {
      const stateMockObject = {
        files: [{ instanceId: '1' }, { instanceId: '2' }, { instanceId: '3' }],
      }

      jest.spyOn(instancesGetMockObject, 'getSelectedInstanceId').mockImplementation(jest.fn(() => stateMockObject.files[2].instanceId))

      expect(getFilesSelectedInstance({ state: stateMockObject })).toEqual(stateMockObject.files[2])
    })

    test('must return empty object when nothing to collect', () => {
      const stateMockObject = {}

      jest.spyOn(instancesGetMockObject, 'getSelectedInstanceId').mockImplementation(jest.fn(() => '-1'))

      expect(getFilesSelectedInstance({ state: stateMockObject })).toMatchObject({})
    })
  })

  describe('getFilesUnselectedInstances()', () => {
    test('must return unselected instances files array when instance ids do not match', () => {
      const stateMockObject = {
        files: [{ instanceId: '1' }, { instanceId: '2' }, { instanceId: '3' }],
      }

      jest.spyOn(instancesGetMockObject, 'getSelectedInstanceId').mockImplementation(jest.fn(() => stateMockObject.files[2].instanceId))

      expect(getFilesUnselectedInstances({ state: stateMockObject })).toEqual([stateMockObject.files[0], stateMockObject.files[1]])
    })

    test('must return empty array when nothing to collect', () => {
      const stateMockObject = {}

      jest.spyOn(instancesGetMockObject, 'getSelectedInstanceId').mockImplementation(jest.fn(() => '-1'))

      expect(getFilesUnselectedInstances({ state: stateMockObject })).toMatchObject([])
    })
  })

  describe('getFilesSpecifiedInstance()', () => {
    test('must return selected instance files object when instance ids match', () => {
      const stateMockObject = {
        files: [{ instanceId: '1' }, { instanceId: '2' }, { instanceId: '3' }],
      }

      expect(getFilesSpecifiedInstance({ state: stateMockObject, instanceId: stateMockObject.files[2].instanceId })).toEqual(
        stateMockObject.files[2],
      )
    })

    test('must return empty object when nothing to collect', () => {
      const stateMockObject = {}

      expect(getFilesSpecifiedInstance({ state: stateMockObject, instanceId: '-1' })).toMatchObject({})
    })
  })

  describe('getFilesUnspecifiedInstances()', () => {
    test('must return unselected instances files array when instance ids do not match', () => {
      const stateMockObject = {
        files: [{ instanceId: '1' }, { instanceId: '2' }, { instanceId: '3' }],
      }

      expect(getFilesUnspecifiedInstances({ state: stateMockObject, instanceId: stateMockObject.files[2].instanceId })).toEqual([
        stateMockObject.files[0],
        stateMockObject.files[1],
      ])
    })

    test('must return empty array when nothing to collect', () => {
      const stateMockObject = {}

      expect(getFilesUnspecifiedInstances({ state: stateMockObject, instanceId: '-1' })).toMatchObject([])
    })
  })
})
