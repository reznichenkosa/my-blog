import { type StateSchema } from 'app/providers/store-provider/config/state-schema'
import { type AuthSchema } from '../../types/auth-schema'

export const getAuthState = (state: StateSchema): AuthSchema => state.authForm
