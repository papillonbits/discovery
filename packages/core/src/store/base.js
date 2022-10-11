import { applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { isRunningOnLocalHost } from '../library/environment/host'

class Store {
  constructor() {
    this.isRunningOnLocalHost = isRunningOnLocalHost

    this.setMiddlewares()
    this.setEnhancer()
  }

  setMiddlewares() {
    this.middlewares = [thunk]

    if (this.isRunningOnLocalHost) {
      const logger = createLogger({
        collapsed: true,
        logger: console,
      })

      this.middlewares.push(logger)
    }

    return this.middlewares
  }

  /* istanbul ignore next */
  setEnhancer() {
    const composeEnhancers =
      typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && this.isRunningOnLocalHost
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose

    this.enhancer = composeEnhancers(applyMiddleware(...this.middlewares))
  }
}

export { Store }
