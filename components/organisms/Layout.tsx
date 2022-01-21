import Head from 'next/head'
import { ReactNode, useState } from 'react'
import { Footer } from '../molecules/Footer'
import { HeaderContainer } from '../molecules/headerContainer'
import { ContentNewsLettre } from '../molecules/ContentNewsLettre'
import validator from 'validator';
import { SendBludBird } from '../../utils/SendEmail'


export const Layout = (props: { children: ReactNode }) => {
  const [email, setEmail] = useState("");
  const Onsubmit = async () => {
    event?.preventDefault
    if (validator.isEmail(email)) {
      await SendBludBird(email)
    }
  }
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <HeaderContainer />
      <main>{props.children}</main>
      <ContentNewsLettre onChange={Onsubmit} email={setEmail} />
      <Footer />
    </>
  )
}
