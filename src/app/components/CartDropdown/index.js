import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import CartItem from '../CartItem'

import { CartContext } from '../../contexts/cart'

import './styles.scss'

function CartDropdown() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        }
      </div>
      <Button buttonOptions={{ onClick: goToCheckoutHandler }}>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown