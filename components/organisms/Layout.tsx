import { ReactNode } from 'react'
import { Header } from '../molecules/Header'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="container">
        <main>{props.children}</main>
      </div>
    </>
  )
}
