import { useContext } from 'react'

import CheckoutItem from '../../components/CheckoutItem'

import { CartContext } from '../../contexts/cart'

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from './styledComponents'

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)
      }
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default Checkout