import { useBindActionCreators } from '../index'

jest.mock('redux', () => ({ bindActionCreators: jest.fn() }))
jest.mock('react-redux', () => ({ useDispatch: jest.fn() }))
jest.mock('../../action/actionCreators', () => ({ fantasticAction: jest.fn() }))
jest.mock('../../thunk/app/completeState', () => ({ fantasticCompleteStateThunk: jest.fn() }))
jest.mock('../../thunk/state/uiSetState', () => ({ fantasticUIStateThunk: jest.fn() }))
jest.mock('../../thunk/instances/create/createInstancesObjects', () => ({ fantasticCreateInstancesObjectsThunk: jest.fn() }))
jest.mock('../../thunk/instances/delete/deleteInstancesObjects', () => ({ fantasticDeleteInstancesObjectsThunk: jest.fn() }))
jest.mock('../../thunk/files/get/getFiles', () => ({ fantasticGetFilesThunk: jest.fn() }))
jest.mock('../../thunk/files/upload/uploadFiles', () => ({ fantasticUploadFilesThunk: jest.fn() }))
jest.mock('../../thunk/files/download/downloadFiles', () => ({ fantasticDownloadFilesThunk: jest.fn() }))
jest.mock('../../thunk/files/delete/deleteFiles', () => ({ fantasticDeleteFilesThunk: jest.fn() }))
jest.mock('../../thunk/files/store/storeFiles', () => ({ fantasticStoreFilesThunk: jest.fn() }))
jest.mock('../../thunk/files/rename/renameFiles', () => ({ fantasticRenameFilesThunk: jest.fn() }))
jest.mock('../../thunk/files/create/createFolder', () => ({ fantasticCreateFolderThunk: jest.fn() }))

const reduxMockObject = require('redux')
const reactReduxMockObject = require('react-redux')
const actionCreatorsMockObject = require('../../action/actionCreators')
const completeStateMockObject = require('../../thunk/app/completeState')
const uiSetStateMockObject = require('../../thunk/state/uiSetState')
const createInstancesObjectsMockObject = require('../../thunk/instances/create/createInstancesObjects')
const deleteInstancesObjectsMockObject = require('../../thunk/instances/delete/deleteInstancesObjects')
const getFilesMockObject = require('../../thunk/files/get/getFiles')
const uploadFilesMockObject = require('../../thunk/files/upload/uploadFiles')
const downloadFilesMockObject = require('../../thunk/files/download/downloadFiles')
const deleteFilesMockObject = require('../../thunk/files/delete/deleteFiles')
const storeFilesMockObject = require('../../thunk/files/store/storeFiles')
const renameFilesMockObject = require('../../thunk/files/rename/renameFiles')
const createFolderMockObject = require('../../thunk/files/create/createFolder')

const bindActionCreatorsMockObject = {
  ...actionCreatorsMockObject,
  completeStateMockObject,
  uiSetStateMockObject,
  createInstancesObjectsMockObject,
  deleteInstancesObjectsMockObject,
  getFilesMockObject,
  uploadFilesMockObject,
  downloadFilesMockObject,
  deleteFilesMockObject,
  storeFilesMockObject,
  renameFilesMockObject,
  createFolderMockObject,
}

describe('index', () => {
  beforeEach(() => {
    jest.spyOn(reduxMockObject, 'bindActionCreators').mockImplementation(jest.fn(() => bindActionCreatorsMockObject))
    jest.spyOn(reactReduxMockObject, 'useDispatch').mockImplementation(jest.fn())
  })

  afterEach(() => jest.clearAllMocks())

  describe('useBindActionCreators()', () => {
    test('must return all bound actions and thunks', () => {
      expect(useBindActionCreators()).toEqual(bindActionCreatorsMockObject)
    })
  })
})
