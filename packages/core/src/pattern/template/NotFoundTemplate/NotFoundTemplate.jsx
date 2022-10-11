import { primer } from '@papillonbits/components'
import { Link } from 'react-router-dom'
import { startPagePath } from '../../../route/path'
import { defaultProps, propTypes } from './NotFoundTemplate.prop'
import styles from './NotFoundTemplate.scss'

const {
  Alert: { Alert, alertVariant },
} = primer

const { alert } = styles

export function NotFoundTemplate() {
  return (
    <Alert className={alert} variant={alertVariant.error}>
      {`No match for route. Return to `}
      <Link to={startPagePath}>start page.</Link>
    </Alert>
  )
}

NotFoundTemplate.defaultProps = defaultProps

NotFoundTemplate.propTypes = propTypes
