/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { Tags } from '../components/molecules/Tags'

describe('Tags', () => {
  it('Render tags', () => {
    render(<Tags />)
  })

  it('Tags container heading', () => {
    render(<Tags />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  it('Tags not a classNmae', () => {
    const { container } = render(<Tags />)
    expect(container.firstChild).not.toHaveClass('navbar')
  })

  it('Tags a className request', () => {
    const { container } = render(<Tags />)
    expect(container.firstChild).toHaveClass('widget')
  })

  it('Tags container not menu', () => {
    render(<Tags />)
    const heading = screen.queryByRole('menu')
    expect(heading).not.toBeInTheDocument()
  })
})
