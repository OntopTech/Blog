import Navbar from 'react-bootstrap/Navbar'
import header from '../../styles/Header.module.css'
import React from 'react'
import Link from 'next/link'
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <Navbar
      expand="lg"
      className={header.navbar}
      fixed="top"
      bg="light"
      variant="dark"
    >
      <div className="container-fluid">
        <Navbar.Brand>
          <div className={header.logo}>
            <Link href="/">
              <a>
                <img src="/logo-dark.png" alt="Picture of the author" />
              </a>
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Item className={header.nav_item}>
              <Link href="/" passHref>
                <Nav.Link className={header.nav_link}>
                  <a>Home</a>
                </Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Nav className={`${header.navbar_right} me-auto`}>
          <div className={header.social_icones}>
            <ul className="d-flex flex-row-reverse bd-highlight">
              <li className="p-2 bd-highlight">
                <Link href="/">
                  <a>
                    <i>
                      <FontAwesomeIcon icon={faFacebook} />
                    </i>
                  </a>
                </Link>
              </li>
              <li className="p-2 bd-highlight">
                <Link href="/">
                  <a>
                    <i>
                      <FontAwesomeIcon icon={faInstagramSquare} />
                    </i>
                  </a>
                </Link>
              </li>
              <li className="p-2 bd-highlight">
                <Link href="/">
                  <a>
                    <i>
                      <FontAwesomeIcon icon={faTwitter} />
                    </i>
                  </a>
                </Link>
              </li>
              <li className="p-2 bd-highlight">
                <Link href="/">
                  <a>
                    <i>
                      <FontAwesomeIcon icon={faYoutube} />
                    </i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={header.search_icon}>
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </div>
        </Nav>
      </div>
    </Navbar>
  )
}
