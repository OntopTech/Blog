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
    expect(container.firstChild).toHaveClass('footer')
  })

  it('Footer link', () => {
    render(<Footer />)
    screen.queryAllByRole('link')
  })

  it('Footer Heading', () => {
    render(<Footer />)
    const heading = screen.queryByRole('heading')
    expect(heading).not.toBeInTheDocument()
  })

  it('Categori grid', () => {
    render(<Footer />)
    const grid = screen.queryByRole('grid')
    expect(grid).not.toBeInTheDocument()
  })
})
