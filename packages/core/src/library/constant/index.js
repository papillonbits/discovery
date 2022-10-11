export const pageSize = Object.freeze({
  instances: 22,
  files: 21,
  credentials: 17,
  pipelines: 16,
})

export const pageNumber = 1
export const maxParentRange = 50
export const maxChildrenRange = 2

export const rootLocation = Object.freeze({ href: 'Files', text: 'Files', isSelected: true })

export const idPrefix = Object.freeze({
  directory: 'directory-',
  file: 'file-',
})

export const eventKey = Object.freeze({
  enter: 'Enter',
  escape: 'Escape',
})

export const endpointDirection = Object.freeze(['Inbound', 'Outbound'])
export const endpointType = Object.freeze(['SFTP', 'HTTP', 'Azure Blob Storage'])

export const maxKeyRange = 10

export const pipelineDirections = Object.freeze({
  default: 'Select Pipeline Direction',
  inbound: 'Inbound',
  outbound: 'Outbound',
  mixed: 'Mixed',
  none: 'None',
})

export const pipelineStates = Object.freeze({
  default: 'Select Pipeline State',
  active: 'Active',
  inactive: 'Inactive',
})

export const pipelineTypes = Object.freeze({
  sftp: 'SFTP',
  http: 'HTTP',
  azure: 'Azure Blob Storage',
})

export const pipelineSearchDirection = Object.freeze([
  pipelineDirections.default,
  pipelineDirections.mixed,
  pipelineDirections.inbound,
  pipelineDirections.outbound,
])
export const pipelineSearchState = Object.freeze([pipelineStates.default, pipelineStates.active, pipelineStates.inactive])
export const pipelineDirection = Object.freeze([pipelineDirections.mixed, pipelineDirections.inbound, pipelineDirections.outbound])
export const pipelineState = Object.freeze([pipelineStates.active, pipelineStates.inactive])

export const pipelineStepDirection = Object.freeze([pipelineDirections.none, pipelineDirections.inbound, pipelineDirections.outbound])
export const pipelineStepType = Object.freeze([pipelineTypes.sftp, pipelineTypes.http, pipelineTypes.azure])

export const maxMappingsRange = 5
export const maxExecutionsRange = 15

export const timeout = Object.freeze({
  alert: 1000,
  fetch: 500,
})

export const http = Object.freeze({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  methods: {
    post: 'POST',
    get: 'GET',
    put: 'PUT',
    patch: 'PATCH',
    delete: 'DELETE',
  },
  status: {
    ok: 200,
    created: 201,
    internalServerError: 500,
  },
})

export const messageType = Object.freeze({
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success',
  consent: 'consent',
})

export const pageContent = Object.freeze({
  dashboard: { subheadHeading: 'Dashboard', contextNavigationItemText: 'Dashboard' },
  instances: { subheadHeading: 'Instances', contextNavigationItemText: 'Instances' },
  files: { subheadHeading: 'Files', contextNavigationItemText: 'Files' },
  credentials: { subheadHeading: 'Credentials', contextNavigationItemText: 'Credentials' },
  pipelines: { subheadHeading: 'Pipelines', contextNavigationItemText: 'Pipelines' },
  monitors: { subheadHeading: 'Monitors', contextNavigationItemText: 'Monitors' },
})

export const filesObjectKind = Object.freeze({
  folder: 'Folder',
  file: 'File',
})
