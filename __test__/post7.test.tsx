/**
  @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { Post7 } from '../components/atoms/post7'

describe('Post7', () => {
  it('Post 7', () => {
    render(<Post7 />)
  })

  it('Post7 heading', () => {
    render(<Post7 />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
  it('Post7 list', () => {
    render(<Post7 />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('Post7 imgs', () => {
    render(<Post7 />)
    const img = screen.getAllByRole('img')
    expect(img)
  })

  it('Post7 not menu', () => {
    render(<Post7 />)
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })
})
