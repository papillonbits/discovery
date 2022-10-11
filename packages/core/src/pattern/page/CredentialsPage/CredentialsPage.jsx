import { CredentialsTemplate } from '../../template/CredentialsTemplate'
import { defaultProps, propTypes } from './CredentialsPage.prop'

export function CredentialsPage() {
  return <CredentialsTemplate />
}

CredentialsPage.defaultProps = defaultProps

CredentialsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default CredentialsPage
