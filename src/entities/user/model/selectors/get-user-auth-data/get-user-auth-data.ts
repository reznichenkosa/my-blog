import { type StateSchema } from 'app/providers/store-provider'
import { type User } from '../../types/user'

export const getUserAuthData = (state: StateSchema): User | null => state.user.authData
