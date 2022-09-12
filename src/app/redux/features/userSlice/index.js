import { createSlice } from '@reduxjs/toolkit'

// Initial State
const initialState = {
  loading: false,
  currentUser: null,
  error: ""
}

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkUserSession: () => {},
    googleSigninStart: state => {
      state.loading = true
    },
    emailSigninStart: state => {
      state.loading = true
    },
    signinSuccess: (state, { payload }) => {
      state.currentUser = payload
      state.loading = false
    },
    signinFailure: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    signupStart: (state) => {
      state.loading = true
    },
    signupSuccess: () => {},
    signupFailure: (state, { payload }) => {
      state.error = payload
    },
  }
})

// Actions - Reducer
export const { 
  setCurrentUser, signinSuccess, signinFailure, 
  checkUserSession, googleSigninStart, emailSigninStart,
  signupStart, signupSuccess, signupFailure
} = userSlice.actions
export default userSlice.reducer