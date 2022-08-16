import { useContext } from 'react'

import Button, { BUTTON_TYPE_CLASSES } from '../Button'

import { CartContext } from '../../contexts/cart'

import {
  ProductCardContainer,
  ProductImage,
  Footer,
  Name,
  Price
} from './styledComponents.js'

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext)
  
  const addProductHandler = () => addItemToCart(product)

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