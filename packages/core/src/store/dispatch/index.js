import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as actionCreators from '../action/actionCreators'
import { setAppCompleteStateThunk } from '../thunk/app/completeState'
import { uiSetStateRegularThunk, uiSetStateConsentThunk } from '../thunk/state/uiSetState'
import { createInstancesObjectsThunk } from '../thunk/instances/create/createInstancesObjects'
import { deleteInstancesObjectsThunk } from '../thunk/instances/delete/deleteInstancesObjects'
import { getFilesObjectsNewSelectedInstanceThunk } from '../thunk/files/get/getFiles'
import { uploadFilesObjectsCurrentSelectedInstanceThunk } from '../thunk/files/upload/uploadFiles'
import { downloadFilesObjectsCurrentSelectedInstanceThunk } from '../thunk/files/download/downloadFiles'
import { deleteFilesObjectsCurrentSelectedInstanceThunk } from '../thunk/files/delete/deleteFiles'
import { storeFilesObjectsCurrentSelectedInstanceThunk } from '../thunk/files/store/storeFiles'
import { renameFilesObjectsCurrentSelectedInstanceThunk } from '../thunk/files/rename/renameFiles'
import { createFolderCurrentSelectedInstanceThunk } from '../thunk/files/create/createFolder'

export function useBindActionCreators() {
  return bindActionCreators(
    {
      ...actionCreators,
      setAppCompleteStateThunk,
      uiSetStateRegularThunk,
      uiSetStateConsentThunk,
      createInstancesObjectsThunk,
      deleteInstancesObjectsThunk,
      getFilesObjectsNewSelectedInstanceThunk,
      uploadFilesObjectsCurrentSelectedInstanceThunk,
      downloadFilesObjectsCurrentSelectedInstanceThunk,
      deleteFilesObjectsCurrentSelectedInstanceThunk,
      storeFilesObjectsCurrentSelectedInstanceThunk,
      renameFilesObjectsCurrentSelectedInstanceThunk,
      createFolderCurrentSelectedInstanceThunk,
    },
    useDispatch(),
  )
}
