import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { fetchAllCategories } from '../../redux/features/categoriesSlice';

import CategoriesPreview from '../CategoriesPreview'
import Category from '../Category'

function Shop() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop