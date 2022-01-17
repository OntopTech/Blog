/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { NewsLettreSocialicones } from '../components/atoms/newsLettreSocialIcones'

describe('HeaderSocialIcon', () => {
  it('Render HeaderSocialIcon', () => {
    render(<NewsLettreSocialicones />)
  })

  it('HeaderSocialIcon list', () => {
    render(<NewsLettreSocialicones />)
    const list = screen.queryByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('HeaderSocialIcon has not className', () => {
    const { container } = render(<NewsLettreSocialicones />)
    expect(container.firstChild).toHaveClass('social_icones')
  })

  it('HeaderSocialIcon has not className', () => {
    const { container } = render(<NewsLettreSocialicones />)
    expect(container.firstChild).not.toHaveClass('header')
  })

  it('HeaderSocialIcon icon', () => {
    render(<NewsLettreSocialicones />)
    const icon = screen.queryByRole('icon')
    expect(icon)
  })
})
