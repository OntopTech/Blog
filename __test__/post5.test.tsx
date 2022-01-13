import { render, screen } from '@testing-library/react'
import { Post5 } from '../components/atoms/post5'

describe('Post5', () => {
  it('Post 5', () => {
    render(<Post5 />)
  })

  it('Post5 heading', () => {
    render(<Post5 />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
  it('Post5 list', () => {
    render(<Post5 />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('Post5 imgs', () => {
    render(<Post5 />)
    const img = screen.getAllByRole('img')
    expect(img)
  })

  it('Post5 not menu', () => {
    render(<Post5 />)
    const menu = screen.queryByRole('menu')
    expect(menu).not.toBeInTheDocument()
  })
})
