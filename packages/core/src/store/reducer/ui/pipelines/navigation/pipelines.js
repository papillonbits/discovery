export function uiSetPipelinesNavigation(state, action) {
  const pipelinesSelectedInstance = state.pipelines.find((pipelinesItem) => pipelinesItem.instanceId === action.payload.selectedInstanceId)
  const pipelinesRest = state.pipelines.filter((pipelinesItem) => pipelinesItem.instanceId !== action.payload.selectedInstanceId)

  return {
    ...state,
    pipelines: [
      ...pipelinesRest,
      {
        ...pipelinesSelectedInstance,
        navigation: {
          ...pipelinesSelectedInstance.navigation,
          items: action.payload.newNavigation.items,
          selectedIndex: action.payload.newNavigation.items.map(({ isSelected }) => isSelected).indexOf(true),
        },
      },
    ],
  }
}
