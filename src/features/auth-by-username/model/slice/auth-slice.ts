import { loginByUsername } from './../services/login-by-username/login-by-username'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AuthSchema } from '../types/auth-schema'

const initialState: AuthSchema = {
  isLoading: false,
  username: '',
  password: '',
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginByUsername.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
