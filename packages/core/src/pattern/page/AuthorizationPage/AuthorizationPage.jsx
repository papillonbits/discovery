import { AuthorizationTemplate } from '../../template/AuthorizationTemplate'
import { defaultProps, propTypes } from './AuthorizationPage.prop'

export function AuthorizationPage() {
  return <AuthorizationTemplate />
}

AuthorizationPage.defaultProps = defaultProps

AuthorizationPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default AuthorizationPage
