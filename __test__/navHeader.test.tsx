/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { NavHeader } from '../components/atoms/navHeader'

describe('NavHeader', () => {
    it('Render NavHeader', () => {
        render(<NavHeader />)
    })

    it('NavHeader list', () => {
        render(<NavHeader />)
        const list = screen.queryByRole('list')
        expect(list).toBeInTheDocument();
    })

    it('NavHeader has not className', () => {
        const { container } = render(<NavHeader />)
        expect(container.firstChild).toHaveClass('navbar-nav')
    })

    it('NavHeader has not className', () => {
        const { container } = render(<NavHeader />)
        expect(container.firstChild).not.toHaveClass('header')
    })

    it('NavHeader a', () => {
        render(<NavHeader />)
        const a = screen.queryByRole('a')
        expect(a).not.toBeInTheDocument()
    })
});