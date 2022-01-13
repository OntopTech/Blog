/**
  @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { Post3 } from '../components/atoms/post3'

describe('Post3', () => {
  it('Post 3', () => {
    render(<Post3 />)
  })

  it('Post3 heading', () => {
    render(<Post3 />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
  it('Post3 list', () => {
    render(<Post3 />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('Post3 imgs', () => {
    render(<Post3 />)
    const img = screen.getAllByRole('img')
    expect(img)
  })

  it('Post3 not menu', () => {
    render(<Post3 />)
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })
})
