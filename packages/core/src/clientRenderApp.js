/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { primer } from '@papillonbits/components'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { checkAccessibilityIssues } from '@papillonbits/library/a11y'
import { startPagePath } from './route/path'
import {
  appRootRoute,
  dashboardPageRoute,
  instancesPageRoute,
  filesPageRoute,
  credentialsPageRoute,
  pipelinesPageRoute,
  monitorsPageRoute,
  notFoundPageRoute,
} from './route'
import { clientAppStore } from './store/client'

/* istanbul ignore next */
export function App() {
  const { ErrorBoundary } = primer

  return (
    <ErrorBoundary>
      <Provider store={clientAppStore}>
        <BrowserRouter>
          <Routes>
            <Route path={appRootRoute.path} element={<Navigate to={startPagePath} />} />
            <Route path={dashboardPageRoute.path} element={dashboardPageRoute.clientComponent()} />
            <Route path={instancesPageRoute.path} element={instancesPageRoute.clientComponent()} />
            <Route path={filesPageRoute.path} element={filesPageRoute.clientComponent()} />
            <Route path={credentialsPageRoute.path} element={credentialsPageRoute.clientComponent()} />
            <Route path={pipelinesPageRoute.path} element={pipelinesPageRoute.clientComponent()} />
            <Route path={monitorsPageRoute.path} element={monitorsPageRoute.clientComponent()} />
            <Route path="*" element={notFoundPageRoute.clientComponent()} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.createRoot(document.getElementById('app')).render(<App />)

  if (module.hot) {
    module.hot.accept()
  }
}

renderApp()
