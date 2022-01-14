/**
  @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { Post4 } from '../components/atoms/post4'

describe('Post4', () => {
  it('Post 4', () => {
    render(<Post4 />)
  })

  it('Post4 heading', () => {
    render(<Post4 />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
  it('Post4 list', () => {
    render(<Post4 />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('Post4 imgs', () => {
    render(<Post4 />)
    const img = screen.getAllByRole('img')
    expect(img)
  })

  it('Post4 not menu', () => {
    render(<Post4 />)
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })
})
