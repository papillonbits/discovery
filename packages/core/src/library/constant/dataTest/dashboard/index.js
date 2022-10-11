import { baseUrl } from '../index'

export const dataTestDashboard = Object.freeze({
  alert: {
    div: {
      default: 'dashboard-alert-div-default',
    },
    button: {
      approve: 'dashboard-alert-button-approve',
      cancel: 'dashboard-alert-button-cancel',
    },
  },
  page: {
    path: `${baseUrl}/dashboard`,
  },
})
