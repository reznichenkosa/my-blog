import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslations } from 'shared/lib/tests/render-with-translation.ts/renderWithTranslations'
import { Sidebar } from './Sidebar'

describe('sidebar', () => {
  test('is exist in document', () => {
    renderWithTranslations(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('is exist in document', () => {
    renderWithTranslations(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
