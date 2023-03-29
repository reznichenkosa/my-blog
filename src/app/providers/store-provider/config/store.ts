import { type StateSchema } from './state-schema'
import {
  type AnyAction,
  configureStore,
  type ThunkMiddleware,
  type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { counterReducer } from 'entities/counter'
import { userReducer } from 'entities/user'

export function createReduxStore(
  initialState?: StateSchema,
): ToolkitStore<any, AnyAction, [ThunkMiddleware<any, AnyAction, undefined>]> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: IS_DEV,
    preloadedState: initialState,
  })
}
