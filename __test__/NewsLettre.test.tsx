/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { NewsLettre } from '../components/molecules/NewsLettre'

describe('NewsLettre', () => {
  it('Render newsLettre', () => {
    render(<NewsLettre />)
  })

  it('NewsLettre textbox', () => {
    render(<NewsLettre />)
    const textbox = screen.getByRole('textbox')
    expect(textbox).toBeInTheDocument()
  })

  it('NewsLettre not container menu', () => {
    render(<NewsLettre />)
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })

  it('NewsLettre className newslettre', () => {
    const { container } = render(<NewsLettre />)
    expect(container.firstChild).toHaveClass('newslettre')
  })

  it('NewsLettre not alert', () => {
    render(<NewsLettre />)
    const alert = screen.queryByRole('alert')
    expect(alert).not.toBeInTheDocument()
  })
})
