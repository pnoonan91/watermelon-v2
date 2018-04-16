import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import user from './user'
import game from './game'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({user, game}) //root reducer

const AppReducer = persistReducer(persistConfig, reducer)

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(AppReducer, middleware)
export const persistor = persistStore(store)

export default store
export * from './user'
