import header from '../../styles/Header.module.css'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { Nav, Navbar } from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar expand="lg" fixed="top" className={`${header.navbar} navbar`}>
      <div className="container-fluid">
        <div className={header.logo}>
          <Link href="/">
            <a>
              <Image
                src="/images/OnTop-sinSlogan.png"
                alt="Picture of the author"
                height="50"
                width="150"
                className={header.logo_white}
              />
            </a>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center flex-grow-1 pe-3"
          id="main_nav"
        >
          <Nav className=" navbar-nav ml-auto mr-auto">
            <li className={`${header.nav_item} nav-item dropdown`}>
              <Link href="/">
                <a
                  className={`${header.nav_link} nav-link dropdown-toggle active`}
                  data-toggle="dropdown"
                >
                  Home
                </a>
              </Link>
              <ul
                className={`${header.dropdown_menu} ${header.fade_up} dropdown-menu fade-up`}
              >
                <li>
                  <a
                    className={`${header.dropdown_item} dropdown-item`}
                    href="index.html"
                  >
                    Demo 1
                  </a>
                </li>
                <li>
                  <a
                    className={`${header.dropdown_item} dropdown-item`}
                    href="index.html"
                  >
                    Demo 1
                  </a>
                </li>
                <li>
                  <a
                    className={`${header.dropdown_item} dropdown-item`}
                    href="index.html"
                  >
                    Demo 1
                  </a>
                </li>
              </ul>
            </li>
          </Nav>
        </Navbar.Collapse>
        <div
          className={`${header.navbar_right} navbar-right ml-auto d-flex flex-row bd-highlight`}
        >
          <div className={`${header.social_icones} social-icones`}>
            <ul className="list-inline">
              <li className="p-2 bd-highlight">
                <Link href="/">
                  <a>
                    <i>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={header.icon}
                      />
                    </i>
                  </a>
                </Link>
              </li>
              <li className="p-2 bd-highlight">
                <Link href="/">
                  <a>
                    <i>
                      <FontAwesomeIcon
                        icon={faInstagramSquare}
                        className={header.icon}
                      />
                    </i>
                  </a>
                </Link>
              </li>
              <li className="p-2 bd-highlight">
                <Link href="/">
                  <a>
                    <i>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className={header.icon}
                      />
                    </i>
                  </a>
                </Link>
              </li>
              <li className="p-2 bd-highlight">
                <Link href="/">
                  <a>
                    <i>
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className={header.icon}
                      />
                    </i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${header.search_icon} search-icon`}>
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </div>
        </div>
      </div>
    </Navbar>
  )
}
