import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from 'shared/lib/tests/render-with-providers/RenderWithProviders'
import { Sidebar } from './Sidebar'

describe('sidebar', () => {
  test('is exist in document', () => {
    renderWithProviders(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('is exist in document', () => {
    renderWithProviders(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
