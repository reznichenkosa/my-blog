import { type StateSchema } from './state-schema'
import { type AnyAction, configureStore, type ThunkMiddleware } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { counterReducer } from 'entities/counter'

export function createReduxStore(
  initialState?: StateSchema,
): ToolkitStore<any, AnyAction, [ThunkMiddleware<any, AnyAction, undefined>]> {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: IS_DEV,
    preloadedState: initialState,
  })
}
