import { configureStore,  } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { userSlice, categoriesSlice, cartSlice } from './features'

const middleWares = [logger]

const store = configureStore({
  reducer: {
    user: userSlice,
    categories: categoriesSlice,
    cart: cartSlice
  },
  middleware: middleWares
})

export default store