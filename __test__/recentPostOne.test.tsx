/**
  @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import { RecentPostOne } from '../components/atoms/recentPostOne'

describe('RecentPostOne', () => {
    it('RecentPost One', () => {
        render(<RecentPostOne />)
    })
});