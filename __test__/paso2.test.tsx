/**
  @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { Post2 } from '../components/atoms/post2'

describe('Post2', () => {
  it('Post 1', () => {
    render(<Post2 />)
  })

  it('Post2 heading', () => {
    render(<Post2 />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
  it('Post2 list', () => {
    render(<Post2 />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('Post2 imgs', () => {
    render(<Post2 />)
    const img = screen.getAllByRole('img')
    expect(img)
  })

  it('Post2 not menu', () => {
    render(<Post2 />)
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })
})
