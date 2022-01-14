import Head from 'next/head'
import { ReactNode } from 'react'
import { Categorie } from '../molecules/Categorie'
import { Footer } from '../molecules/Footer'
import { NewsLettre } from '../molecules/NewsLettre'
import { HeaderContainer } from '../molecules/headerContainer'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <HeaderContainer />
      <Categorie />
      <main>{props.children}</main>
      <NewsLettre />
      <Footer />
    </>
  )
}
