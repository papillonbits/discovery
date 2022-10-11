import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './AuthorizationPage.prop'

const LazyAuthorizationPage = lazy(() => import('./AuthorizationPage'))

export function AsyncAuthorizationPage() {
  return (
    <Suspense fallback={null}>
      <LazyAuthorizationPage />
    </Suspense>
  )
}

AsyncAuthorizationPage.defaultProps = defaultProps

AsyncAuthorizationPage.propTypes = propTypes
