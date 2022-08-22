import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'

import { setIsCartOpen } from '../../redux/features/cartSlice'

import { 
  selectCartCount,
  selectIsCartOpen
} from '../../redux/features/cartSlice/selectors.js'

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount
} from './styledComponents.js'

function CartIcon() {
  const dispatch = useDispatch()
  const cartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleDropdown = () => {
    dispatch(setIsCartOpen(!cartOpen))
  }

  return (
    <CartIconContainer onClick={toggleDropdown} >
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon