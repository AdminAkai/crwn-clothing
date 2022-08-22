import { createSlice } from '@reduxjs/toolkit'

// Initial State
const initialState = {
  currentUser: null
}

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload
    }
  }
})

// Actions - Reducer
export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer