export const alertTextFiles = Object.freeze({
  authorize: { notAuthorized: 'You are not authorized to proceed to files!' },
  pagination: { browsing: 'Browsing through pages...' },
  display: { browsing: 'Browsing through files and folders...' },
  location: { browsing: 'Browsing through location...' },
  action: {
    general: {
      validation: {},
    },
    create: {
      validation: {
        sameName: 'There is already a folder with the same name here!',
      },
      consent: {
        question: 'What is the name of the folder you would like to create?',
        cancel: 'Create folder cancelled!',
      },
      progress: 'Creating folder...',
      success: 'Successfully created folder!',
    },
    delete: {
      validation: {
        nothingSelected: 'No file(s), folder(s) selected to delete!',
      },
      consent: {
        question: (fileFolderNameList) => `Are you sure to delete the following? '${fileFolderNameList}'`,
        cancel: 'Delete file(s), folder(s) cancelled!',
      },
      progress: 'Deleting file(s), folder(s)...',
      success: 'Successfully deleted file(s), folder(s)!',
    },
    download: {
      validation: {
        nothingSelected: 'No file(s) selected to download!',
        filesOnly: 'Only file(s) can be downloaded!',
        singleFile: 'It is possible to download only one file at a time!',
      },
      consent: {
        question: (fileNameList) => `Are you sure to download the following? '${fileNameList}'`,
        cancel: 'Download file cancelled!',
      },
      progress: 'Downloading file...',
      success: 'Successfully downloaded file!',
    },
    get: {
      progress: 'Collecting files of selected instance...',
      success: 'Successfully collected files of selected instance!',
      exception: 'Something went wrong when collecting files of selected instance!',
    },
    rename: {
      validation: {
        nothingSelected: 'No file or folder selected to rename!',
        singleFileFolder: 'It is possible to rename only one file or folder at a time!',
        sameNameFolder: 'There is already a folder with the same name here!',
        sameNameFile: 'There is already a file with the same name here!',
      },
      consent: {
        question: (fileFolderName) => `What would you like to rename '${fileFolderName}' to?`,
        cancel: 'Rename file, folder cancelled!',
      },
      progress: 'Renaming file, folder...',
      success: 'Successfully renamed file, folder!',
    },
    upload: {
      progress: 'Uploading file(s)...',
      success: 'Successfully uploaded file(s)!',
      exception: 'Something went wrong uploading file(s)!',
    },
  },
})
