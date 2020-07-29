import React from 'react';
import Logo from '../../assets/img/portalflix.png';
import './Menu.css';
import Button from '../Button';

const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="PortalFlix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;