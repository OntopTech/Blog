import header from '../../styles/Header.module.css'
import { Nav } from 'react-bootstrap'
import Link from 'next/link'

export const NavHeader = () => {

    return (
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
    );
}