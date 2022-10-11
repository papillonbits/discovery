export const alertTextInstances = Object.freeze({
  authorize: { notAuthorized: 'You are not authorized to proceed to instances!' },
  pagination: { browsing: 'Browsing through pages...' },
  action: {
    create: {
      validation: {
        emptyName: 'Instance can only be created with a name!',
        sameName: 'There is already a instance with the same name!',
      },
      consent: {
        question: (instanceName) => `Are you sure to create instance '${instanceName}'?`,
        cancel: 'Create instance cancelled!',
      },
      progress: 'Creating instance...',
      success: 'Successfully created instance!',
    },
    delete: {
      validation: {
        nothingSelected: 'No instances selected to delete!',
        currentSelected: 'Current instance cannot be deleted!',
        relatedSelected: 'Some selected instances have files and folders and therefore cannot be deleted!',
      },
      consent: {
        question: (instanceNameList) => `Are you sure to delete the following instance(s)? '${instanceNameList}'`,
        cancel: 'Delete instance(s) cancelled!',
      },
      progress: 'Deleting instance(s)...',
      success: 'Successfully deleted instance(s)!',
    },
    set: {
      progress: 'Setting active instance...',
      success: 'Successfully set active instance!',
    },
  },
})
