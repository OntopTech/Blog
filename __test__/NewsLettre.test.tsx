/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { ContentNewsLettre } from '../components/molecules/ContentNewsLettre'

describe('NewsLettre', () => {
  it('Render newsLettre', () => {
    render(<ContentNewsLettre />)
  })

  it('NewsLettre textbox', () => {
    render(<ContentNewsLettre />)
    const textbox = screen.getByRole('textbox')
    expect(textbox).toBeInTheDocument()
  })

  it('NewsLettre not container menu', () => {
    render(<ContentNewsLettre />)
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })

  it('NewsLettre className newslettre', () => {
    const { container } = render(<ContentNewsLettre />)
    expect(container.firstChild).toHaveClass('newslettre')
  })

  it('NewsLettre not alert', () => {
    render(<ContentNewsLettre />)
    const alert = screen.queryByRole('alert')
    expect(alert).not.toBeInTheDocument()
  })
})
