import { createSlice } from '@reduxjs/toolkit'

// Initial State
const initialState = {
  loading: false,
  categories: [],
  error: ''
}

// Slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesStart: state => {
      state.loading = true
    },
    fetchCategoriesSuccess: (state, { payload }) => {
      state.categories = payload
      state.loading = false
    },
    fetchCategoriesFailed: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
  }
})

// Actions - Reducer
export const { fetchCategoriesStart } = categoriesSlice.actions
export default categoriesSlice.reducer