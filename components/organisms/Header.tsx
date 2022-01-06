import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import styled from '../../styles/Header.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (
    <Navbar expand="lg" className={styled.navbar} fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <div className={styled.logo}>
            <Link href="/">
              <a>
              <Image
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
              </a>
          </Link>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
