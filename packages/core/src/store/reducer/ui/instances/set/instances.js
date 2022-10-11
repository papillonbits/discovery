export function uiSetInstances(state, action) {
  return {
    ...state,
    instances: action.payload,
  }
}
