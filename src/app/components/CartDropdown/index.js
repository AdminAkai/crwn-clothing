import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import CartItem from '../CartItem'

import { CartContext } from '../../contexts/cart'

import { 
  CartDropdownContainer, 
  EmptyMessage, 
  CartItems 
} from './styledComponents.js'

function CartDropdown() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? 
          ( cartItems.map(item => <CartItem key={item.id} cartItem={item} />) )
          :
          ( <EmptyMessage>Your cart is empty</EmptyMessage> )
        }
      </CartItems>
      <Button buttonOptions={{ onClick: goToCheckoutHandler }}>Go to Checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown