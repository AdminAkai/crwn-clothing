import {
  CartItemContainer,
  CartImage,
  ItemDetails,
  Name
} from './styledComponents.js'

function CartItem({ cartItem }) {
  return (
    <CartItemContainer>
      <CartImage src={cartItem.imageUrl} alt={`${cartItem.name}`} />
      <ItemDetails>
        <Name>{cartItem.name}</Name>
        <span>{cartItem.quantity} x ${cartItem.price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem