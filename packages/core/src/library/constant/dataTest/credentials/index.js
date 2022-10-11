import { baseUrl } from '../index'

export const dataTestCredentials = Object.freeze({
  alert: {
    div: {
      default: 'credentials-alert-div-default',
    },
    button: {
      approve: 'credentials-alert-button-approve',
      cancel: 'credentials-alert-button-cancel',
    },
  },
  object: {
    action: {
      button: {
        createCredential: 'credentials-object-action-button-create-credential',
        updateCredential: 'credentials-object-action-button-update-credential',
        deleteCredential: 'credentials-object-action-button-delete-credential',
      },
    },
  },
  key: {
    action: {
      button: {
        createKey: 'credentials-key-action-button-create-key',
        updateKey: 'credentials-key-action-button-update-key',
        deleteKey: 'credentials-key-action-button-delete-key',
      },
    },
  },
  page: {
    path: `${baseUrl}/credentials`,
  },
})
