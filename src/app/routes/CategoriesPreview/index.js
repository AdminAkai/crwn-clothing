import { useSelector } from 'react-redux'

import CategoryPreview from '../../components/CategoryPreview'
import Spinner from '../../components/Spinner'

import { selectCategoriesMap, selectCategoriesLoading } from '../../redux/features/categoriesSlice/selectors'

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap)
  const loading = useSelector(selectCategoriesLoading)

  return (
    <>
      {
        loading && ( <Spinner /> )
        ||
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]

          return <CategoryPreview key={title} title={title} products={products} />
        })
      }
    </>
  )
}

export default CategoriesPreview