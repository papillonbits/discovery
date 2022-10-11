import { baseUrl } from '../index'

export const dataTestPipelines = Object.freeze({
  alert: {
    div: {
      default: 'pipelines-alert-div-default',
    },
    button: {
      approve: 'pipelines-alert-button-approve',
      cancel: 'pipelines-alert-button-cancel',
    },
  },
  object: {
    action: {
      button: {
        createPipeline: 'pipelines-object-action-button-create-pipeline',
        updatePipeline: 'pipelines-object-action-button-update-pipeline',
        deletePipeline: 'pipelines-object-action-button-delete-pipeline',
      },
    },
  },
  step: {
    action: {
      button: {
        createStep: 'pipelines-step-action-button-create-step',
        updateStep: 'pipelines-step-action-button-update-step',
        deleteStep: 'pipelines-step-action-button-delete-step',
      },
    },
  },
  mapping: {
    action: {
      button: {
        createMapping: 'pipelines-mapping-action-button-create-mapping',
        updateMapping: 'pipelines-mapping-action-button-update-mapping',
        deleteMapping: 'pipelines-mapping-action-button-delete-mapping',
      },
    },
  },
  execution: {
    action: {
      button: {
        createExecution: 'pipelines-execution-action-button-create-execution',
        updateExecution: 'pipelines-execution-action-button-update-execution',
        deleteExecution: 'pipelines-execution-action-button-delete-execution',
      },
    },
  },
  page: {
    path: `${baseUrl}/pipelines`,
  },
})
