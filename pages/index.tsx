import type { NextPage } from 'next'
import { ContainerCards } from '../components/molecules/containerCards'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <ContainerCards />
    </div>
  )
}

export default Home
