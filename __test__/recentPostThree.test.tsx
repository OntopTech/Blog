/**
  @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { RecentPostThree } from "../components/atoms/recentPostThree";

describe('RecentPostThree', () => {
    it('RecentPost Three', () => {
        render(<RecentPostThree />)
    })
});

it('RecentPostThree link', () => {
    render(<RecentPostThree />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument();
});

it('RecentPostThree img', () => {
    render(<RecentPostThree />)
    const img = screen.getAllByRole('img')
    expect(img);
});

it('RecentPostThree list', () => {
    render(<RecentPostThree />)
    const list = screen.queryByRole('list')
    expect(list).not.toBeInTheDocument();
});

it('RecentPostThree span', () => {
    render(<RecentPostThree />)
    const span = screen.queryByRole('span')
    expect(span).not.toBeInTheDocument();
});