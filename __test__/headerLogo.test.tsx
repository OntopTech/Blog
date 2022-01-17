/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { HeaderLogo } from "../components/atoms/headerLogo";

describe('HeaderLogo', () => {
    it('Render HeaderLogo', () => {
        render(<HeaderLogo />)
    })

    it('HeaderLogo link', () => {
        render(<HeaderLogo />)
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()
    })

    it('HeaderLogo img', () => {
        render(<HeaderLogo />)
        const img = screen.getAllByRole('img')
        expect(img);
    })

    it('HeaderLogo span', () => {
        render(<HeaderLogo />)
        const span = screen.queryByRole('span')
        expect(span).not.toBeInTheDocument();
    });

    it('HeaderLogo has not className', () => {
        const { container } = render(<HeaderLogo />)
        expect(container.firstChild).not.toHaveClass('header')
    })
});