/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { SocialMedia } from '../components/atoms/SocialMedia'

describe('SocialMedia', () => {
  it('Render SocialMedia', () => {
    render(<SocialMedia />)
  })
  it('SocialMedia className main', () => {
    const { container } = render(<SocialMedia />)
    expect(container.firstChild).toHaveClass('social_media')
  })

  it('SocialMedia link', () => {
    render(<SocialMedia />)
    screen.queryAllByRole('link')
  })

  it('SocialMedia Heading', () => {
    render(<SocialMedia />)
    const heading = screen.queryByRole('heading')
    expect(heading).not.toBeInTheDocument()
  })

  it('SocialMedia grid', () => {
    render(<SocialMedia />)
    const grid = screen.queryByRole('grid')
    expect(grid).not.toBeInTheDocument()
  })
})
