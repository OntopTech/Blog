/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { PreviwPost } from '../components/atoms/PreviwPost'

describe('Next Post', () => {
  it('Render NextPost', () => {
    render(<PreviwPost />)
  })
  it('PreviwPost className main', () => {
    const { container } = render(<PreviwPost />)
    expect(container.firstChild).toHaveClass('widget')
  })

  it('PreviwPost link', () => {
    render(<PreviwPost />)
    screen.queryAllByRole('link')
  })

  it('PreviwPost Heading', () => {
    render(<PreviwPost />)
    const heading = screen.queryByRole('heading')
    expect(heading).not.toBeInTheDocument()
  })

  it('PreviwPost grid', () => {
    render(<PreviwPost />)
    const grid = screen.queryByRole('grid')
    expect(grid).not.toBeInTheDocument()
  })
})
