import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './CredentialsPage.prop'

const LazyCredentialsPage = lazy(() => import('./CredentialsPage'))

export function AsyncCredentialsPage() {
  return (
    <Suspense fallback={null}>
      <LazyCredentialsPage />
    </Suspense>
  )
}

AsyncCredentialsPage.defaultProps = defaultProps

AsyncCredentialsPage.propTypes = propTypes
