/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { Pagination } from 'react-bootstrap'

describe('Pagination', () => {
  it('Render Pagination', () => {
    render(<Pagination />)
  })

  it('Pagination list', () => {
    render(<Pagination />)
    const heading = screen.getByRole('list')
    expect(heading).toBeInTheDocument()
  })

  it('Pagination has not className', () => {
    const { container } = render(<Pagination />)
    expect(container.firstChild).not.toHaveClass('listInline')
  })

  it('Pagination className pagination main', () => {
    const { container } = render(<Pagination />)
    expect(container.firstChild).toHaveClass('pagination')
  })

  it('Pagination a not button', () => {
    render(<Pagination />)
    const button = screen.queryByRole('button')
    expect(button).not.toBeInTheDocument()
  })
})
