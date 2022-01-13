/**
  @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { Post1 } from '../components/atoms/post1'

describe('Post1', () => {
  it('Post 1', () => {
    render(<Post1 />)
  })

  it('Post1 heading', () => {
    render(<Post1 />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
  it('Post1 list', () => {
    render(<Post1 />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('Post1 imgs', () => {
    render(<Post1 />)
    const img = screen.getAllByRole('img')
    expect(img)
  })

  it('Post1 not menu', () => {
    render(<Post1 />)
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })
})
