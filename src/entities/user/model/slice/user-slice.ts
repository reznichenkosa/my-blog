import { LOCAL_STORAGE_USER_KEY } from './../../../../shared/constants/local-storage'
import { type User } from './../types/user'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/user'

const initialState: UserSchema = {
  authData: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
      state.authData = null
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
