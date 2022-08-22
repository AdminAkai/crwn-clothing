import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsCartOpen: (state, { payload }) => {
      state.isCartOpen = payload
    },
    addItemToCart: (state, { payload }) => {      const foundItem = state.cartItems.find(item => item.id === payload.id)
      if (foundItem) {
        state.cartItems = state.cartItems.map(item => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity + 1}
          }
          return item
        })    
      } else {
        state.cartItems = [ ...state.cartItems, { ...payload, quantity: 1 } ]
      }
    },
    removeItemFromCart: (state, { payload }) => {
      const foundItem = state.cartItems.find(item => item.id === payload.id)
      if (foundItem && foundItem.quantity === 1) {
        state.newCartItems = state.cartItems.filter(cartItem => cartItem.id !== payload.id)
      }
      
      state.cartItems = state.cartItems.map(item => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity - 1}
        }
        return item
      })    
    },
    clearItemFromCart: (state, { payload }) => {
      console.log(payload)
      state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== payload.id)
    }
  }
})

// Actions - Reducer
export const { 
  setIsCartOpen, addItemToCart, 
  removeItemFromCart, clearItemFromCart 
} = cartSlice.actions
export default cartSlice.reducer