/**
  @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { RecentPostFour } from "../components/atoms/recentPostFour";

describe('RecentPostFour', () => {
    it('RecentPost Four', () => {
        render(<RecentPostFour />)
    })
});

it('RecentPostFour link', () => {
    render(<RecentPostFour />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument();
});

it('RecentPostFour img', () => {
    render(<RecentPostFour />)
    const img = screen.getAllByRole('img')
    expect(img);
});

it('RecentPostFour list', () => {
    render(<RecentPostFour />)
    const list = screen.queryByRole('list')
    expect(list).not.toBeInTheDocument();
});

it('RecentPostFour span', () => {
    render(<RecentPostFour />)
    const span = screen.queryByRole('span')
    expect(span).not.toBeInTheDocument();
});