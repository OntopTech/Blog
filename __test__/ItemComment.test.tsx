/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { ItemComment } from '../components/atoms/ItemComment'

describe('ItemComment', () => {
  it('Render ItemComment', () => {
    render(<ItemComment />)
  })
  it('Comment Item not class', () => {
    const { container } = render(<ItemComment />)
    expect(container.firstChild).not.toHaveClass('footer')
  })
  it('ItemComment link', () => {
    render(<ItemComment />)
    screen.queryAllByRole('link')
  })
  it('ItemComment list', () => {
    render(<ItemComment />)
    const grid = screen.getByRole('list')
    expect(grid).toBeInTheDocument()
  })
  it('Footer className main', () => {
    const { container } = render(<ItemComment />)
    expect(container.firstChild).toHaveClass('comment-item')
  })
})
