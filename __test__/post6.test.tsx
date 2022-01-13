/**
  @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { Post6 } from '../components/atoms/post6'

describe('Post6', () => {
  it('Post 6', () => {
    render(<Post6 />)
  })

  it('Post6 heading', () => {
    render(<Post6 />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
  it('Post6 list', () => {
    render(<Post6 />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('Post6 imgs', () => {
    render(<Post6 />)
    const img = screen.getAllByRole('img')
    expect(img)
  })

  it('Post6 not menu', () => {
    render(<Post6 />)
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })
})
