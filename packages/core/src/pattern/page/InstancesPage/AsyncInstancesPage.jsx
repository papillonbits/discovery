import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './InstancesPage.prop'

const LazyInstancesPage = lazy(() => import('./InstancesPage'))

export function AsyncInstancesPage() {
  return (
    <Suspense fallback={null}>
      <LazyInstancesPage />
    </Suspense>
  )
}

AsyncInstancesPage.defaultProps = defaultProps

AsyncInstancesPage.propTypes = propTypes
