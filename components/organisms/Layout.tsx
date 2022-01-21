import Head from 'next/head'
import { ReactNode } from 'react'
import { Header } from '../molecules/Header'
import { Categorie } from '../molecules/Categorie'
import { Footer } from '../molecules/Footer'
import { NewsLettre } from '../molecules/NewsLettre'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Blog Ontop</title>
      </Head>
      <Header />
      <Categorie />
      <main>{props.children}</main>
      <NewsLettre />
      <Footer />
    </>
  )
}
