export const alertTextPipelines = Object.freeze({
  authorize: { notAuthorized: 'You are not authorized to proceed to pipelines!' },
  object: {
    pagination: { browsing: 'Browsing through pages...' },
    action: {
      create: {
        validation: {
          emptyName: 'Pipeline can only be created with a name!',
          sameName: (pipelineObjectName) => `There is already a pipeline with the name '${pipelineObjectName}'`,
        },
        consent: {
          question: (pipelineObjectName) => `Are you sure to create pipeline '${pipelineObjectName}'?`,
          cancel: 'Create pipeline cancelled!',
        },
        progress: 'Creating pipeline...',
        success: 'Successfully created pipeline!',
      },
      update: {
        validation: {
          nothingSelected: 'No pipeline selected to update!',
          singleObject: 'It is possible to update only one pipeline at a time!',
        },
        consent: {
          question: (pipelineObjectName) => `Are you sure to update pipeline '${pipelineObjectName}'?`,
          cancel: 'Update pipeline cancelled!',
        },
        progress: 'Updating pipeline...',
        success: 'Successfully updated pipeline!',
      },
      delete: {
        validation: {
          nothingSelected: 'No pipeline selected to delete!',
        },
        consent: {
          question: (pipelineObjectNameList) => `Are you sure to delete the following pipeline(s)? '${pipelineObjectNameList}'`,
          cancel: 'Delete pipeline(s) cancelled!',
        },
        progress: 'Deleting pipeline(s)...',
        success: 'Successfully deleted pipeline(s)!',
      },
    },
  },
  step: {
    display: {
      noParent: 'No pipeline is currently selected! Select a pipeline to display its steps!',
      multiParent: 'Several pipelines are currently selected! Select one pipeline only to display its steps!',
      noChild: 'Pipeline has no step(s) yet! Create step(s) to display!',
    },
    action: {
      create: {
        validation: {
          noParent: 'It is possible to create step for a selected pipeline!',
          emptyName: 'Step can only be created with a name!',
          sameName: (pipelineStepName) => `There is already a step with the name '${pipelineStepName}'`,
          passwordMatch: 'Password and confirm password do not match!',
        },
        consent: {
          question: (pipelineStepName) => `Are you sure to create step '${pipelineStepName}'?`,
          cancel: 'Create step cancelled!',
        },
        progress: 'Creating step...',
        success: 'Successfully created step!',
      },
      update: {
        validation: {
          noParent: 'It is possible to update step for a selected pipeline!',
          singleStep: 'It is possible to update only one step at a time!',
          nothingSelected: 'No step selected to update!',
          emptyName: 'Step can only be updated with a name!',
          passwordMatch: 'Password and confirm password do not match!',
          sameName: (pipelineStepName) => `There is already a step with the name '${pipelineStepName}'`,
        },
        consent: {
          question: (pipelineStepName) => `Are you sure to update step '${pipelineStepName}'?`,
          cancel: 'Update step cancelled!',
        },
        progress: 'Updating step...',
        success: 'Successfully updated step!',
      },
      delete: {
        validation: {
          noParent: 'It is possible to delete step for a selected pipeline!',
          nothingSelected: 'No step(s) selected to delete!',
        },
        consent: {
          question: (pipelineStepNameList) => `Are you sure to delete the following step(s)? '${pipelineStepNameList}'`,
          cancel: 'Delete step(s) cancelled!',
        },
        progress: 'Deleting step(s)...',
        success: 'Successfully deleted step(s)!',
      },
    },
  },
  mapping: {
    display: {
      noParent: 'No pipeline is currently selected! Select a pipeline to display its mappings!',
      multiParent: 'Several pipelines are currently selected! Select one pipeline only to display its mappings!',
      noChild: 'Pipeline has no mapping(s) yet! Create mapping(s) to display!',
    },
    action: {
      create: {
        validation: {
          noParent: 'It is possible to create mapping for a selected pipeline!',
          emptyName: 'Mapping can only be created with a name!',
          sameName: (pipelineMappingName) => `There is already a mapping with the name '${pipelineMappingName}'`,
        },
        consent: {
          question: (pipelineMappingName) => `Are you sure to create mapping '${pipelineMappingName}'?`,
          cancel: 'Create mapping cancelled!',
        },
        progress: 'Creating mapping...',
        success: 'Successfully created mapping!',
      },
      update: {
        validation: {
          noParent: 'It is possible to update mapping for a selected pipeline!',
          singleMapping: 'It is possible to update only one mapping at a time!',
          nothingSelected: 'No mapping selected to update!',
          emptyName: 'Mapping can only be updated with a name!',
          sameName: (pipelineMappingName) => `There is already a mapping with the name '${pipelineMappingName}'`,
        },
        consent: {
          question: (pipelineMappingName) => `Are you sure to update mapping '${pipelineMappingName}'?`,
          cancel: 'Update mapping cancelled!',
        },
        progress: 'Updating mapping...',
        success: 'Successfully updated mapping!',
      },
      delete: {
        validation: {
          noParent: 'It is possible to delete mapping for a selected pipeline!',
          nothingSelected: 'No mapping(s) selected to delete!',
        },
        consent: {
          question: (pipelineMappingNameList) => `Are you sure to delete the following mapping(s)? '${pipelineMappingNameList}'`,
          cancel: 'Delete mapping(s) cancelled!',
        },
        progress: 'Deleting mapping(s)...',
        success: 'Successfully deleted mapping(s)!',
      },
    },
  },
  execution: {
    display: {
      noParent: 'No pipeline is currently selected! Select a pipeline to display its executions!',
      multiParent: 'Several pipelines are currently selected! Select one pipeline only to display its executions!',
      noChild: 'Pipeline has no execution(s) yet! Create execution(s) to display!',
    },
    action: {
      create: {
        validation: {
          noParent: 'It is possible to create execution for a selected pipeline!',
          emptyName: 'Execution can only be created with a name!',
          sameName: (pipelineExecutionName) => `There is already a execution with the name '${pipelineExecutionName}'`,
        },
        consent: {
          question: (pipelineExecutionName) => `Are you sure to create execution '${pipelineExecutionName}'?`,
          cancel: 'Create execution cancelled!',
        },
        progress: 'Creating execution...',
        success: 'Successfully created execution!',
      },
      update: {
        validation: {
          noParent: 'It is possible to update execution for a selected pipeline!',
          singleExecution: 'It is possible to update only one execution at a time!',
          nothingSelected: 'No execution selected to update!',
          emptyName: 'Execution can only be updated with a name!',
          sameName: (pipelineExecutionName) => `There is already a execution with the name '${pipelineExecutionName}'`,
        },
        consent: {
          question: (pipelineExecutionName) => `Are you sure to update execution '${pipelineExecutionName}'?`,
          cancel: 'Update execution cancelled!',
        },
        progress: 'Updating execution...',
        success: 'Successfully updated execution!',
      },
      delete: {
        validation: {
          noParent: 'It is possible to delete execution for a selected pipeline!',
          nothingSelected: 'No execution(s) selected to delete!',
        },
        consent: {
          question: (pipelineExecutionNameList) => `Are you sure to delete the following execution(s)? '${pipelineExecutionNameList}'`,
          cancel: 'Delete execution(s) cancelled!',
        },
        progress: 'Deleting execution(s)...',
        success: 'Successfully deleted execution(s)!',
      },
    },
  },
})
