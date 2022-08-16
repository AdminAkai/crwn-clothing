import { useContext } from 'react'

import { CartContext } from '../../contexts/cart'

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount
} from './styledComponents.js'

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleDropdown = () => {
    setIsCartOpen(() => !isCartOpen)
  }

  return (
    <CartIconContainer onClick={toggleDropdown} >
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon