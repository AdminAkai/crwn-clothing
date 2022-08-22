import { useSelector } from 'react-redux/es/hooks/useSelector'

import { 
  selectCartItems,
  selectCartTotal 
} from '../../redux/features/cartSlice/selectors'

import CheckoutItem from '../../components/CheckoutItem'

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from './styledComponents.js'

function Checkout() {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

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