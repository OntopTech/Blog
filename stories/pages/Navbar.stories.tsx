import { Header } from '../../components/molecules/Header'
import {  ComponentMeta } from '@storybook/react';

export default {
  title: 'Pages/Navbar',
  component: Header,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as ComponentMeta<typeof Header>;

export const Navbar = () => <Header />
