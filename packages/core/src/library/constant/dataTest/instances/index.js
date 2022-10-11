import { baseUrl } from '../index'

export const dataTestInstances = Object.freeze({
  alert: {
    div: {
      default: 'instances-alert-div-default',
    },
    button: {
      approve: 'instances-alert-button-approve',
      cancel: 'instances-alert-button-cancel',
    },
  },
  edit: {
    input: {
      instanceName: 'instances-edit-input-instance-name',
    },
  },
  action: {
    button: {
      createInstance: 'instances-action-button-create-instance',
      deleteInstance: 'instances-action-button-delete-instance',
    },
  },
  page: {
    path: `${baseUrl}/instances`,
  },
})
