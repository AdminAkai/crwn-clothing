import { useSelector } from 'react-redux'

import CategoryPreview from '../../components/CategoryPreview'

import { selectCategoriesMap } from '../../redux/features/categoriesSlice/selectors'

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <>
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]

          return <CategoryPreview key={title} title={title} products={products} />
        })
      }
    </>
  )
}

export default CategoriesPreview