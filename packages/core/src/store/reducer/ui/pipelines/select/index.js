export function selectPipelinesObjects({ pipelinesObjects, changedObjects }) {
  return (
    pipelinesObjects?.map((object) => ({
      ...object,
      isSelected: (() => {
        const isChangedObject = changedObjects.find((changedObject) => changedObject.id === object.id)
        return isChangedObject ? isChangedObject.isSelected : object.isSelected
      })(),
    })) ?? null
  )
}
