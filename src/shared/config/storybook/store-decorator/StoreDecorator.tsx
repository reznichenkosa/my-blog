import { type DeepPartial } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { StoreProvider, type StateSchema } from 'app/providers/store-provider'

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) =>
  (StoryComponent: Story): JSX.Element => {
    return (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    )
  }
