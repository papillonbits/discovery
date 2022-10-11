import { bindActionCreators } from 'redux'
import { timeout, messageType, filesObjectKind } from '../../../../library/constant'
import { getReadableFileSize } from '../../../../library/file'
import * as actionCreators from '../../../action/actionCreators'
import { getSelectedInstanceId } from '../../../reducer/ui/instances/get'
import { alertTextApp } from '../../../../library/constant/alertText/app'
import { alertTextFiles } from '../../../../library/constant/alertText/files'

export const uploadFilesObjectsCurrentSelectedInstanceThunk =
  ({ selectedFiles, location }) =>
  async (dispatch, getState) => {
    let selectedFilesIndex = 0
    const selectedFilesObjects = []
    const locationString = location.items.map(({ text }) => text).join('/')
    const { uiCreateFilesObjectsAction, uiSetStateAction } = bindActionCreators(actionCreators, dispatch)

    const selectedInstanceId = getSelectedInstanceId({ state: getState() })

    const reader = new FileReader()

    async function readSelectedFile() {
      if (selectedFilesIndex >= selectedFiles.length) {
        uiSetStateAction({
          message: {
            text: alertTextFiles.action.upload.progress,
            type: messageType.info,
          },
          isLoading: true,
        })

        uiSetStateAction({
          message: {
            text: alertTextFiles.action.upload.success,
            type: messageType.success,
          },
          isLoading: false,
        })

        Array.from(selectedFiles).forEach(({ name, size }) => {
          if (location.filesObjects.some(({ kind, name: { value } }) => kind !== filesObjectKind.folder && value === name)) {
            return
          }

          uiCreateFilesObjectsAction({
            newFile: {
              name,
              size: getReadableFileSize({ size }),
            },
            selectedInstanceId,
          })
        })

        setTimeout(() => {
          uiSetStateAction({
            message: {
              text: alertTextApp.ready,
              type: messageType.success,
            },
            isLoading: false,
          })
        }, timeout.fetch)
      }

      reader.onload = (e) => {
        const base64Prefix = 'base64,'
        const targetResult = e.target.result

        selectedFilesObjects.push({
          binary: targetResult.substring(targetResult.indexOf(base64Prefix) + base64Prefix.length),
          path: {
            old: null,
            new: `${locationString}/${selectedFiles[selectedFilesIndex].name}`,
          },
          kind: filesObjectKind.file,
        })

        selectedFilesIndex += 1
        readSelectedFile()
      }

      reader.onerror = () => {
        console.log('~onerror~', reader.error) // eslint-disable-line

        uiSetStateAction({
          message: {
            text: alertTextFiles.action.upload.exception,
            type: messageType.error,
          },
          isLoading: false,
        })
      }

      reader.readAsDataURL(selectedFiles[selectedFilesIndex])
    }

    readSelectedFile()
  }
