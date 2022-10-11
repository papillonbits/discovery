import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './FilesPage.prop'

const LazyFilesPage = lazy(() => import('./FilesPage'))

export function AsyncFilesPage() {
  return (
    <Suspense fallback={null}>
      <LazyFilesPage />
    </Suspense>
  )
}

AsyncFilesPage.defaultProps = defaultProps

AsyncFilesPage.propTypes = propTypes
