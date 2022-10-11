export function contextSetAuthorization(state, action) {
  return {
    ...state,
    authorization: {
      ...state.authorization,
      ...action.payload,
    },
  }
}
