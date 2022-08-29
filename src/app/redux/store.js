import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { all, call } from 'redux-saga/effects'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import  { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import categoriesSaga from '../redux/features/categoriesSlice/saga'
import { userSlice, categoriesSlice, cartSlice } from './features'

const sagas = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const reducers = combineReducers({
  user: userSlice,
  categories: categoriesSlice,
  cart: cartSlice
})

const persistedReducer = persistReducer(persistConfig, reducers)

const middleWares = [process.env.NODE_ENV !== 'development' && logger, sagas].filter(Boolean)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ 
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }), 
    ...middleWares
  ]
})

export const persistor = persistStore(store)

function* rootSaga() {
  yield all([call(categoriesSaga)])
}

sagas.run(rootSaga)

export default store