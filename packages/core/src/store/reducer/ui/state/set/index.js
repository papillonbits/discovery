export function uiSetState(state, action) {
  return {
    ...state,
    state: {
      ...action.payload,
    },
  }
}
