export function contextSetInstance(state, action) {
  return {
    ...state,
    instance: {
      ...action.payload,
    },
  }
}
