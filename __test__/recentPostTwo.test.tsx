/**
  @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { RecentPostTwo } from "../components/atoms/recentPostTwo";

describe('RecentPostTwo', () => {
    it('RecentPost Two', () => {
        render(<RecentPostTwo />)
    })
});

it('RecentPostTwo link', () => {
    render(<RecentPostTwo />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument();
});

it('RecentPostTwo img', () => {
    render(<RecentPostTwo />)
    const img = screen.getAllByRole('img')
    expect(img);
});

it('RecentPostTwo list', () => {
    render(<RecentPostTwo />)
    const list = screen.queryByRole('list')
    expect(list).not.toBeInTheDocument();
});

it('RecentPostTwo span', () => {
    render(<RecentPostTwo />)
    const span = screen.queryByRole('span')
    expect(span).not.toBeInTheDocument();
});