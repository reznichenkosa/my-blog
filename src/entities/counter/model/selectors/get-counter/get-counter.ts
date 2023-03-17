import { type StateSchema } from 'app/providers/store-provider'
import { type CounterSchema } from '../../types/counter-schema'

export const getCounter = (state: StateSchema): CounterSchema => state.counter
