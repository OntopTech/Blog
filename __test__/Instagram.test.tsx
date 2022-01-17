/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { Instagram } from '../components/molecules/instagram'

describe('instagram', () => {
  it('Render instagram', () => {
    render(<Instagram />)
  })

  it('instagram heading', () => {
    render(<Instagram />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('instagram has not className', () => {
    const { container } = render(<Instagram />)
    expect(container.firstChild).not.toHaveClass('categorie')
  })

  it('instagram className main', () => {
    const { container } = render(<Instagram />)
    expect(container.firstChild).toHaveClass('widget')
  })

  it('instagram button', () => {
    render(<Instagram />)
    const button = screen.queryByRole('button')
    expect(button).not.toBeInTheDocument()
  })
})
