import { baseUrl } from '../index'

export const dataTestFiles = Object.freeze({
  alert: {
    div: {
      default: 'files-alert-div-default',
    },
    button: {
      approve: 'files-alert-button-approve',
      cancel: 'files-alert-button-cancel',
    },
  },
  action: {
    button: {
      createFolder: 'files-action-button-create-folder',
      renameFileFolder: 'files-action-button-rename-file-folder',
      uploadFile: 'files-action-button-upload-file',
      downloadFile: 'files-action-button-download-file',
      deleteFileFolder: 'files-action-button-delete-file-folder',
    },
  },
  page: {
    path: `${baseUrl}/files`,
  },
})
