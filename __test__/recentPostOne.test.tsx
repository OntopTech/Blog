/**
  @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { RecentPostOne } from '../components/atoms/recentPostOne'

describe('RecentPostOne', () => {
    it('RecentPost One', () => {
        render(<RecentPostOne />)
    })
});

it('RecentPostOne link', () => {
    render(<RecentPostOne />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument();
});

it('RecentPostOne img', () => {
    render(<RecentPostOne />)
    const img = screen.getAllByRole('img')
    expect(img);
});

it('RecentPostOne list', () => {
    render(<RecentPostOne />)
    const list = screen.queryByRole('list')
    expect(list).not.toBeInTheDocument();
});

it('RecentPostOne span', () => {
    render(<RecentPostOne />)
    const span = screen.queryByRole('span')
    expect(span).not.toBeInTheDocument();
});