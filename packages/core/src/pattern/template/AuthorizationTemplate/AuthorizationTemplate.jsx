import { primer } from '@papillonbits/components'
import { defaultProps, propTypes } from './AuthorizationTemplate.prop'
import { useAuthorizationState } from './AuthorizationTemplate.hook'
import styles from './AuthorizationTemplate.scss'

export function AuthorizationTemplate() {
  const {
    Alert: { Alert },
  } = primer

  const { container, alert } = styles

  const { state } = useAuthorizationState()

  return (
    <div className={container}>
      <Alert className={alert} variant={state.message.type} consent={state?.consent}>
        {state.message.text}
      </Alert>
    </div>
  )
}

AuthorizationTemplate.defaultProps = defaultProps

AuthorizationTemplate.propTypes = propTypes
