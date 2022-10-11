export function getReadableFileSize({ size }) {
  let result = size
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let i = 0
  while (result >= 1024) {
    result /= 1024
    i += 1
  }

  return `${result.toFixed(1)} ${units[i]}`
}
