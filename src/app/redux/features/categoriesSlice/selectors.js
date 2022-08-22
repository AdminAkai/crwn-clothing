import { createSelector } from 'reselect'

const selectCategorieSliceReducer = state => state.categories

export const selectCategories = createSelector(
  [selectCategorieSliceReducer],
  categoriesSlice => categoriesSlice.categories
  )

// Selectors
export const selectCategoriesMap = createSelector(
  [selectCategories],
  categories => categories.reduce((acc, category) => {
    const { title, items } = category
    acc[title.toLowerCase()] = items
    
    return acc
  }, {}
))