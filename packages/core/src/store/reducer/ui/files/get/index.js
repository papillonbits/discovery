import { getSelectedInstanceId } from '../../instances/get'

export function getFilesSelectedInstance({ state }) {
  return state?.files?.find((filesItem) => filesItem.instanceId === getSelectedInstanceId({ state })) ?? {}
}

export function getFilesUnselectedInstances({ state }) {
  return state?.files?.filter((filesItem) => filesItem.instanceId !== getSelectedInstanceId({ state })) ?? []
}

export function getFilesSpecifiedInstance({ state, instanceId }) {
  return state?.files?.find((filesItem) => filesItem.instanceId === instanceId) ?? {}
}

export function getFilesUnspecifiedInstances({ state, instanceId }) {
  return state?.files?.filter((filesItem) => filesItem.instanceId !== instanceId) ?? []
}
