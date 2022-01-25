/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { NextPost } from '../components/atoms/NextPost'

describe('Next Post', () => {
  it('Render NextPost', () => {
    render(<NextPost />)
  })
  it('NextPost className main', () => {
    const { container } = render(<NextPost />)
    expect(container.firstChild).toHaveClass('widget')
  })

  it('NextPost link', () => {
    render(<NextPost />)
    screen.queryAllByRole('link')
  })

  it('NextPost Heading', () => {
    render(<NextPost />)
    const heading = screen.queryByRole('heading')
    expect(heading).not.toBeInTheDocument()
  })

  it('NextPost grid', () => {
    render(<NextPost />)
    const grid = screen.queryByRole('grid')
    expect(grid).not.toBeInTheDocument()
  })
})
