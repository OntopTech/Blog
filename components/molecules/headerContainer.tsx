import header from '../../styles/Header.module.css'
import { Navbar } from 'react-bootstrap'
import { HeaderLogo } from '../atoms/headerLogo';
import { NavHeader } from '../atoms/navHeader';
import { HeaderSocialIcon } from '../atoms/headerSocialIcon';

export const HeaderContainer = () => {

    return (
        <Navbar expand="lg" fixed="top" className={`${header.navbar} navbar`}>
            <div className="container-fluid">
                <HeaderLogo />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    className="justify-content-center flex-grow-1 pe-3"
                    id="main_nav"
                >
                    <NavHeader />
                </Navbar.Collapse>
                <div className={`${header.navbar_right} navbar-right ml-auto d-flex flex-row bd-highlight`}>
                    <HeaderSocialIcon />
                </div>
            </div>
        </Navbar>
    );
}