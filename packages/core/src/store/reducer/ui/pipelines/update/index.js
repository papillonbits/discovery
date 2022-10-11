export function updatePipelinesObjects({ pipelinesObjects, object }) {
  return pipelinesObjects?.map((pipelinesObject) =>
    pipelinesObject.id === object.id
      ? { ...object, 'date-modified': new Date(), isSelected: false }
      : { ...pipelinesObject, isSelected: false },
  )
}
