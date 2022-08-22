import { useDispatch } from 'react-redux'

import { 
  clearItemFromCart, 
  addItemToCart, 
  removeItemFromCart 
} from '../../redux/features/cartSlice'

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
  const dispatch = useDispatch()

  const clearItemHandler = () => { dispatch(clearItemFromCart(item)) }
  const addItemHandler = () => { dispatch(addItemToCart(item)) }
  const removeitemHandler = () => { dispatch(removeItemFromCart(item)) }
  
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