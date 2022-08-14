import { useState, createContext, useEffect } from 'react'

const addCartItem = (cartItems, product) => {
  const foundItem = cartItems.find(item => item.id === product.id)

  if (foundItem) {
    return cartItems.map(item => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1}
      }
      return item
    })    
  }

  return [ ...cartItems, { ...product, quantity: 1 } ]
} 

const removeCartItem = (cartItems, product) => {
  const foundItem = cartItems.find(item => item.id === product.id)

  if (foundItem && foundItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== product.id)
  }

  return cartItems.map(item => {
    if (item.id === product.id) {
      return { ...item, quantity: item.quantity - 1}
    }
    return item
  })    
}

const clearCartItem = (cartItems, product) => {
  return cartItems.filter(cartItem => cartItem.id !== product.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  
  useEffect(() => {
    const newCartCount  = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
  
    setCartCount(newCartCount)
  }, [cartItems])
  
  useEffect(() => {
    const newCartTotal  = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
  
    setCartTotal(newCartTotal)
  }, [cartCount, cartTotal])

  const addItemToCart = (product) => {
    setCartItems(state => addCartItem(state, product))
  }

  const removeItemFromCart = (product) => {
    setCartItems(state => removeCartItem(state, product))
  }

  const clearItemFromCart = (product) => {
    setCartItems(state => clearCartItem(state, product))
  }

  const value = { 
    isCartOpen, cartItems, cartCount, cartTotal,
    setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}