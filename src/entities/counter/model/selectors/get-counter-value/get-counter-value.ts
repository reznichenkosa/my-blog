import { type CounterSchema } from './../../types/counter-schema'
import { type StateSchema } from 'app/providers/store-provider'

export const getCounterValue = (state: StateSchema): CounterSchema['value'] => state.counter.value
