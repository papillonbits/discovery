export function contextSetNavigation(state, action) {
  return {
    ...state,
    navigation: {
      ...action.payload,
    },
  }
}
