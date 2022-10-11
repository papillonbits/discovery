import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './DashboardPage.prop'

const LazyDashboardPage = lazy(() => import('./DashboardPage'))

export function AsyncDashboardPage() {
  return (
    <Suspense fallback={null}>
      <LazyDashboardPage />
    </Suspense>
  )
}

AsyncDashboardPage.defaultProps = defaultProps

AsyncDashboardPage.propTypes = propTypes
