import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/local-storage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { userActions, type User } from 'entities/user'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'auth/loginByUsername',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData)
      if (!response.data) {
        throw new AxiosError('authError')
      }
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
      thunkApi.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue('authError')
    }
  },
)
