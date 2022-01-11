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

export const Header = () => {
  return (
    <div
      className={`${header.navbar} navbar navbar-expand-lg navbar-light bg-light`}
    >
      <div className="container-fluid">
        <div className={header.logo}>
          <Link href="/">
            <a>
              <Image
                src="/images/ontop.png"
                alt="Picture of the author"
                height="50"
                width="150"
                className={header.logo_white}
              />
            </a>
          </Link>
        </div>
        <div
          className="justify-content-center flex-grow-1 pe-3 collapse navbar-collapse"
          id="main_nav"
        >
          <ul className=" navbar-nav ml-auto mr-auto">
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
          </ul>
        </div>
        <div
          className={`${header.navbar_right} ml-auto d-flex flex-row bd-highlight`}
        >
          <div className={header.social_icones}>
            <ul className="list-inline">
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
        </div>
      </div>
    </div>
  )
}
