/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { Header } from '../components/molecules/Header'

describe('Header', () => {
  it('Render Header', () => {
    render(<Header />)
  })

  it('Header navigation', () => {
    render(<Header />)
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })

  it('Header has not className', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).not.toHaveClass('widget')
  })

  it('Header className main', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toHaveClass('navbar')
  })

  it('Header button', () => {
    render(<Header />)
    const button = screen.queryByRole('button')
    expect(button).toBeInTheDocument()
  })
})
