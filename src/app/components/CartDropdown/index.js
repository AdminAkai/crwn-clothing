import { useContext } from 'react'

import Button from '../Button'
import CartItem from '../CartItem'

import { CartContext } from '../../contexts/cart'

import './styles.scss'

function CartDropdown() {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        }
      </div>
      <Button>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown