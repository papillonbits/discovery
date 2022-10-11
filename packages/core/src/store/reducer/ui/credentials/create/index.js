import { getNewCredentialsObject } from '../random/credentialsObjects'

export function createCredentialsObjects({ instance, credentialsObjects, object }) {
  const newCredentialsObject = getNewCredentialsObject({
    instance,
    object,
  })

  return [
    ...credentialsObjects.map((credentialsObject) => ({
      ...credentialsObject,
      isSelected: false,
    })),
    newCredentialsObject,
  ]
}
