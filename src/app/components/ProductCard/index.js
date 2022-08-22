import { useDispatch } from 'react-redux'

import Button, { BUTTON_TYPE_CLASSES } from '../Button'

import { addItemToCart } from '../../redux/features/cartSlice'

import {
  ProductCardContainer,
  ProductImage,
  Footer,
  Name,
  Price
} from './styledComponents.js'

function ProductCard({ product }) {
  const dispatch = useDispatch()
  
  const addProductHandler = () => dispatch(addItemToCart(product))

  return (
    <ProductCardContainer>
      <ProductImage src={product.imageUrl} alt='product' />
      <Footer>
        <Name>{product.name}</Name>
        <Price>${product.price}</Price>
      </Footer>
      <Button 
        buttonType={BUTTON_TYPE_CLASSES.inverted} 
        buttonOptions={{ onClick: addProductHandler }}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard