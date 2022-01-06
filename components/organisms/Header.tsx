import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import styled from '../../styles/Header.module.css'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

export const Header = () => {
  return (
    <Navbar expand="lg" className={styled.navbar} fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <div className={styled.logo}>
            <Link href="/">
              <a>
                <img src="logo.png" className={styled.logo_white} />
              </a>
            </Link>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
