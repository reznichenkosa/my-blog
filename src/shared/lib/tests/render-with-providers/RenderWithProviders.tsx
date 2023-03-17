import { type DeepPartial } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { type StateSchema, StoreProvider } from 'app/providers/store-provider'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTest from 'shared/config/i18n/i18nForTest'

export interface renderWithProvidersOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const renderWithProviders = (
  component: ReactNode,
  options: renderWithProvidersOptions = {},
) => {
  const { route = '/', initialState } = options
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  )
}
