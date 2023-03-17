import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'shared/lib/tests/render-with-providers/RenderWithProviders'

import { Counter } from './Counter'

describe('Counter', () => {
  test('is exist in document', () => {
    renderWithProviders(<Counter />, { initialState: { counter: { value: 10 } } })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('decrement', () => {
    renderWithProviders(<Counter />, { initialState: { counter: { value: 10 } } })
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })

  test('increment', () => {
    renderWithProviders(<Counter />, { initialState: { counter: { value: 10 } } })
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })
})
