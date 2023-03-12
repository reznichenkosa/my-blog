import { Button } from './Button'
import { render, screen } from '@testing-library/react'

describe('button', () => {
  test('is exist in document', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('with Primary class', () => {
    render(<Button variant='primary'>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('primary')
  })
})
