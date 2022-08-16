import { useContext } from 'react'

import { CartContext } from '../../contexts/cart'

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton
} from './styledComponents.js'

function CheckoutItem({ item }) {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

  const clearItemHandler = () => { clearItemFromCart(item) }
  const addItemHandler = () => { addItemToCart(item) }
  const removeitemHandler = () => { removeItemFromCart(item) }
  
  return (
    <CheckoutItemContainer>
      <ImageContainer className='image-container'>
        <Image src={item.imageUrl} alt={`${item.name}`} />
      </ImageContainer>
      <Name>{item.name}</Name>
      <Quantity>
        <Arrow onClick={removeitemHandler}>
          &#10094;
        </Arrow>
        <Value>{item.quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>${item.price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem