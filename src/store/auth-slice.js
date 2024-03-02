import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  },
})

export const {setAuth} = authSlice.actions

export default authSlice.reducer
