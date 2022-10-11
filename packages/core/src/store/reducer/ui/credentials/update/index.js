export function updateCredentialsObjects({ credentialsObjects, object }) {
  return credentialsObjects.map((credentialsObject) =>
    credentialsObject.id === object.id
      ? { ...object, 'date-modified': new Date(), isSelected: false }
      : { ...credentialsObject, isSelected: false },
  )
}
