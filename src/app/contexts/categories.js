import { useState, createContext, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase/index.js'

export const CategoriesContext = createContext({
  categoryMap: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()

      setCategoriesMap(categoryMap)
    }

    getCategoriesMap()
  }, [])

  const value = { categoriesMap }

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}