import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCategoriesAndDocuments } from '../../../utils/firebase'

export const fetchAllCategories = createAsyncThunk(
  'categories/fetchAllCategories',
  async (thunkAPI) => {
    try {
      const response = await getCategoriesAndDocuments()
      return response
    } catch(err) {
      return err
    }
  }
)

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
    setCategories: (state, { payload }) => {
      state.categories = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAllCategories.fulfilled, (state, { payload }) => {
      state.categories = payload
      state.error = ''
      state.loading = false
    })
    builder.addCase(fetchAllCategories.rejected, (state, { payload }) => {
      state.error = payload.message
      state.categories = []
      state.loading = false
    })
  }
})

// Actions - Reducer
export const { setCategories } = categoriesSlice.actions
export default categoriesSlice.reducer