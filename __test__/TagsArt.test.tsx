/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { Tags } from '../components/atoms/Tags'

describe('TagsArt', () => {
  it('Render SocialMedia', () => {
    render(<Tags />)
  })
  it('SocialMedia className main', () => {
    const { container } = render(<Tags />)
    expect(container.firstChild).toHaveClass('tags')
  })

  it('SocialMedia link', () => {
    render(<Tags />)
    screen.queryAllByRole('link')
  })

  it('SocialMedia Heading', () => {
    render(<Tags />)
    const heading = screen.queryByRole('heading')
    expect(heading).not.toBeInTheDocument()
  })

  it('SocialMedia grid', () => {
    render(<Tags />)
    const grid = screen.queryByRole('grid')
    expect(grid).not.toBeInTheDocument()
  })
})
