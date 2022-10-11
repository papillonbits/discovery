export const alertTextCredentials = Object.freeze({
  object: {
    pagination: { browsing: 'Browsing through pages...' },
    action: {
      create: {
        validation: {
          emptyName: 'Credential can only be created with a name!',
          sameName: (credentialObjectName) => `There is already a credential with the name '${credentialObjectName}'`,
          passwordMatch: 'Password and confirm password do not match!',
        },
        consent: {
          question: (credentialObjectName) => `Are you sure to create credential '${credentialObjectName}'?`,
          cancel: 'Create credential cancelled!',
        },
        progress: 'Creating credential...',
        success: 'Successfully created credential!',
      },
      update: {
        validation: {
          nothingSelected: 'No credential selected to update!',
          singleObject: 'It is possible to update only one credential at a time!',
          passwordMatch: 'Password and confirm password do not match!',
        },
        consent: {
          question: (credentialObjectName) => `Are you sure to update credential '${credentialObjectName}'?`,
          cancel: 'Update credential cancelled!',
        },
        progress: 'Updating credential...',
        success: 'Successfully updated credential!',
      },
      delete: {
        validation: {
          nothingSelected: 'No credential selected to delete!',
        },
        consent: {
          question: (credentialObjectNameList) => `Are you sure to delete the following credential(s)? '${credentialObjectNameList}'`,
          cancel: 'Delete credential(s) cancelled!',
        },
        progress: 'Deleting credential(s)...',
        success: 'Successfully deleted credential(s)!',
      },
    },
  },
  key: {
    display: {
      noParent: 'No credential is currently selected! Select a credential to display its keys!',
      multiParent: 'Several credentials are currently selected! Select one credential only to display its keys!',
      noChild: 'Credential has no key(s) yet! Create key(s) to display!',
    },
    action: {
      create: {
        validation: {
          noParent: 'It is possible to create key for a selected credential!',
          emptyName: 'Key can only be created with a name!',
          sameName: (credentialKeyName) => `There is already a key with the name '${credentialKeyName}'`,
        },
        consent: {
          question: (credentialKeyName) => `Are you sure to create key '${credentialKeyName}'?`,
          cancel: 'Create key cancelled!',
        },
        progress: 'Creating key...',
        success: 'Successfully created key!',
      },
      update: {
        validation: {
          noParent: 'It is possible to update key for a selected credential!',
          singleKey: 'It is possible to update only one key at a time!',
          nothingSelected: 'No key selected to update!',
          emptyName: 'Key can only be updated with a name!',
          sameName: (credentialKeyName) => `There is already a key with the name '${credentialKeyName}'`,
        },
        consent: {
          question: (credentialKeyName) => `Are you sure to update key '${credentialKeyName}'?`,
          cancel: 'Update key cancelled!',
        },
        progress: 'Updating key...',
        success: 'Successfully updated key!',
      },
      delete: {
        validation: {
          noParent: 'It is possible to delete key for a selected credential!',
          nothingSelected: 'No key(s) selected to delete!',
        },
        consent: {
          question: (credentialKeyNameList) => `Are you sure to delete the following key(s)? '${credentialKeyNameList}'`,
          cancel: 'Delete key(s) cancelled!',
        },
        progress: 'Deleting key(s)...',
        success: 'Successfully deleted key(s)!',
      },
    },
  },
})
