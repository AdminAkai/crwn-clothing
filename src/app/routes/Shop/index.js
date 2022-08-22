import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { setCategories } from '../../redux/features/categoriesSlice';
import { getCategoriesAndDocuments } from '../../utils/firebase'

import CategoriesPreview from '../CategoriesPreview'
import Category from '../Category'

function Shop() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments()

      dispatch(setCategories(categoriesArray))
    }

    getCategoriesMap()
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop