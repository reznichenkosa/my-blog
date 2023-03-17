import { type CounterSchema } from './../types/counter-schema'
import { counterReducer } from 'entities/counter'
import { counterActions } from './counter-slice'

describe('counter slice test', () => {
  test('counter decrement test', () => {
    const state: CounterSchema = {
      value: 10,
    }
    expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 })
  })
  test('counter increment test', () => {
    const state: CounterSchema = {
      value: 10,
    }
    expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 })
  })
})
