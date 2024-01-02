jest.mock('redux', () => ({
  createStore: () => ({ dispatch: jest.fn() }),
  applyMiddleware: jest.fn(),
  compose: jest.fn(),
  combineReducers: jest.fn(),
}))
jest.mock('redux-logger', () => ({ createLogger: jest.fn() }))
jest.mock('redux-thunk', () => ({ thunk: { someThunk: 'fantastic-thunk' }, withExtraArgument: jest.fn() }))

jest.mock('@papillonbits/library/array', () => {
  const items = [
    { isCurrent: false, index: 0 },
    { isCurrent: false, index: 1 },
    { isCurrent: true, index: 2 },
    { isCurrent: false, index: 3 },
    { isCurrent: false, index: 4 },
    { isCurrent: false, index: 5 },
    { isCurrent: false, index: 6 },
  ]

  return {
    getRange: () => items,
  }
})

jest.mock('@papillonbits/library/sort', () => ({
  sortDefault: 'fantastic-sort-default',
}))

jest.mock('../../state', () => ({
  state: {
    default: {
      appState: { context: { navigation: { items: [] } } },
    },
  },
}))
jest.mock('../reducer', () => ({ getAppReducer: jest.fn() }))
jest.mock('../thunk/app/completeState', () => ({ setAppCompleteStateThunk: jest.fn() }))

const reduxMockObject = require('redux') // eslint-disable-line
const reduxLoggerMockObject = require('redux-logger') // eslint-disable-line
const reduxThunkMockObject = require('redux-thunk') // eslint-disable-line
const libraryArrayMockObject = require('@papillonbits/library/array') // eslint-disable-line
const librarySortMockObject = require('@papillonbits/library/sort') // eslint-disable-line
const stateMockObject = require('../../state') // eslint-disable-line
const reducerMockObject = require('../reducer')

describe('client', () => {
  beforeEach(() => {
    jest.spyOn(reducerMockObject, 'getAppReducer').mockImplementation(jest.fn())
  })

  afterEach(() => jest.clearAllMocks())

  describe('setAppDefaultState()', () => {
    test('must set app state', async () => {
      const { AppStore } = await import('../client')

      const clientAppStore = new AppStore()

      expect(clientAppStore.appState).toMatchObject(stateMockObject.state.default.appState)
    })
  })
})
