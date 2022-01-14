/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { Footer } from '../components/molecules/Footer'

describe('Footer', () => {
  it('Render Footer', () => {
    render(<Footer />)
  })

  it('Footer className main', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toHaveClass('Footer-section')
  })

  it('Footer link', () => {
    render(<Footer />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
  })

  it('Footer Heading', () => {
    render(<Footer />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('Categori grid', () => {
    render(<Footer />)
    const grid = screen.queryByRole('grid')
    expect(grid).not.toBeInTheDocument()
  })
})
