import { configureStore } from '@reduxjs/toolkit'
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

import { userSlice, categoriesSlice, cartSlice } from './features'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const reducers = combineReducers({
  user: userSlice,
  categories: categoriesSlice,
  cart: cartSlice
})

const persistedReducer = persistReducer(persistConfig, reducers)

const middleWares = [process.env.NODE_ENV !== 'development' && logger].filter(Boolean)

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

export default store