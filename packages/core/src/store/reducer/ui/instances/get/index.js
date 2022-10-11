export function getSelectedInstanceId({ state }) {
  return state.context.instance.items.find((instanceItem) => instanceItem.isSelected === true)?.id ?? ''
}
