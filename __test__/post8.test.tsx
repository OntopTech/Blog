/**
  @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { Post8 } from '../components/atoms/post8'

describe('Post8', () => {
  it('Post 3', () => {
    render(<Post8 />)
  })

  it('Post8 heading', () => {
    render(<Post8 />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
  it('Post8 list', () => {
    render(<Post8 />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('Post8 imgs', () => {
    render(<Post8 />)
    const img = screen.getAllByRole('img')
    expect(img)
  })

  it('Post8 not menu', () => {
    render(<Post8 />)
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })
})
