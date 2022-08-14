import { useState, createContext, useEffect } from 'react'

const addCartItem = (cartItems, product) => {
  const foundItem = cartItems.find(item => item.id === product.id)

  if (foundItem) {
    const newCart = cartItems.map(item => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1}
      }
      return item
    })    
    return newCart
  }

  return [ ...cartItems, { ...product, quantity: 1 } ]
} 

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  
  useEffect(() => {
    const newCartCount  = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
  
    setCartCount(newCartCount)
  }, [cartItems])

  const addItemToCart = (product) => {
    setCartItems(state => addCartItem(state, product))
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}