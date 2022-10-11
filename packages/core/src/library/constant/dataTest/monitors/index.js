import { baseUrl } from '../index'

export const dataTestMonitors = Object.freeze({
  alert: {
    div: {
      default: 'monitors-alert-div-default',
    },
    button: {
      approve: 'monitors-alert-button-approve',
      cancel: 'monitors-alert-button-cancel',
    },
  },
  page: {
    path: `${baseUrl}/monitors`,
  },
})
