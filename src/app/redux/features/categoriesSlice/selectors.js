import { createSelector } from 'reselect'

const selectCategoriesSliceReducer = state => state.categories

export const selectCategories = createSelector(
  [selectCategoriesSliceReducer],
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

export const selectCategoriesLoading = createSelector(
  [selectCategoriesSliceReducer],
  categoriesSlice => categoriesSlice.loading
)