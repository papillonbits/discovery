import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MonitorsPage.prop'

const LazyMonitorsPage = lazy(() => import('./MonitorsPage'))

export function AsyncMonitorsPage() {
  return (
    <Suspense fallback={null}>
      <LazyMonitorsPage />
    </Suspense>
  )
}

AsyncMonitorsPage.defaultProps = defaultProps

AsyncMonitorsPage.propTypes = propTypes
