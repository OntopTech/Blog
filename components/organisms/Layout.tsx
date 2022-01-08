import Head from 'next/head'
import { ReactNode } from 'react'
import { Header } from '../molecules/Header'
import layout from '../../styles/Layout.module.css'
import { Categorie } from '../molecules/Categorie'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <Categorie />
      <section className="container-fluid">
        <main>{props.children}</main>
      </section>
      <footer>Abajo</footer>
    </>
  )
}
