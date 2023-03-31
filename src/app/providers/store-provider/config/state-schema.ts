import { type CounterSchema } from 'entities/counter'
import { type UserSchema } from 'entities/user'
import { type AuthSchema } from 'features/auth-by-username'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  authForm: AuthSchema
}
