/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { Categories } from '../components/molecules/categories'

describe('Categories', () => {
  it('Render Categories', () => {
    render(<Categories />)
  })

  it('Categories heading', () => {
    render(<Categories />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('Categories has not className', () => {
    const { container } = render(<Categories />)
    expect(container.firstChild).not.toHaveClass('categorie-section')
  })

  it('Categories className main', () => {
    const { container } = render(<Categories />)
    expect(container.firstChild).toHaveClass('widget')
  })

  it('Categories button', () => {
    render(<Categories />)
    const button = screen.queryByRole('button')
    expect(button).not.toBeInTheDocument()
  })
})
