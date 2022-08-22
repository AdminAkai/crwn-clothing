import { createSlice } from '@reduxjs/toolkit'

// Initial State
const initialState = {
  categories: []
}

// Slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      state.categories = payload
    }
  }
})

// Actions - Reducer
export const { setCategories } = categoriesSlice.actions
export default categoriesSlice.reducer