import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/store-provider'
import { getCounterValue } from './get-counter-value'

describe('get couter value', () => {
  test('should first', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
