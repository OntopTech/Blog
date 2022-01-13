/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { Categorie } from '../components/molecules/Categorie'

describe('Categorie', () => {
  it('Render Categorie', () => {
    render(<Categorie />)
  })

  it('Categorie className main', () => {
    const { container } = render(<Categorie />)
    expect(container.firstChild).toHaveClass('categorie-section')
  })

  it('Categorie link', () => {
    render(<Categorie />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
  })

  it('Categorie Heading', () => {
    render(<Categorie />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('Categori grid', () => {
    render(<Categorie />)
    const grid = screen.queryByRole('grid')
    expect(grid).not.toBeInTheDocument()
  })
})
