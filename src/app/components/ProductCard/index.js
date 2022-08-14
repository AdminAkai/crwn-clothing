import { useContext } from 'react'

import Button from '../Button'

import { CartContext } from '../../contexts/cart'

import './styles.scss'

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext)
  
  const addProductHandler = () => addItemToCart(product)

  return (
    <div className='product-card-container'>
      <img src={product.imageUrl} alt='product' />
      <div className='footer'>
        <span className='name'>{product.name}</span>
        <span className='price'>{product.price}</span>
      </div>
      <Button buttonType='inverted' buttonOptions={{ onClick: addProductHandler }}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard