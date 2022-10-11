export function uiSetInstancesEditObject(state, action) {
  return {
    ...state,
    instances: {
      ...state.instances,
      edit: {
        ...state.instances.edit,
        object: { ...action.payload.object },
      },
    },
  }
}
