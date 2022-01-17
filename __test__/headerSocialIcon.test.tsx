/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { HeaderSocialIcon } from "../components/atoms/headerSocialIcon";

describe('HeaderSocialIcon', () => {
    it('Render HeaderSocialIcon', () => {
        render(<HeaderSocialIcon />)
    })

    it('HeaderSocialIcon list', () => {
        render(<HeaderSocialIcon />)
        const list = screen.queryByRole('list')
        expect(list).toBeInTheDocument();
    })

    it('HeaderSocialIcon has not className', () => {
        const { container } = render(<HeaderSocialIcon />)
        expect(container.firstChild).toHaveClass('social_icones')
    })

    it('HeaderSocialIcon has not className', () => {
        const { container } = render(<HeaderSocialIcon />)
        expect(container.firstChild).not.toHaveClass('header')
    })

    it('HeaderSocialIcon icon', () => {
        render(<HeaderSocialIcon />)
        const icon = screen.queryByRole('icon')
        expect(icon);
    })
});