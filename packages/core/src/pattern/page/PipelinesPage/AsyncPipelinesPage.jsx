import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './PipelinesPage.prop'

const LazyPipelinesPage = lazy(() => import('./PipelinesPage'))

export function AsyncPipelinesPage() {
  return (
    <Suspense fallback={null}>
      <LazyPipelinesPage />
    </Suspense>
  )
}

AsyncPipelinesPage.defaultProps = defaultProps

AsyncPipelinesPage.propTypes = propTypes
