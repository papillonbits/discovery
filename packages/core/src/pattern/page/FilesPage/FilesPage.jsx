import { FilesTemplate } from '../../template/FilesTemplate'
import { defaultProps, propTypes } from './FilesPage.prop'

export function FilesPage() {
  return <FilesTemplate />
}

FilesPage.defaultProps = defaultProps

FilesPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default FilesPage
