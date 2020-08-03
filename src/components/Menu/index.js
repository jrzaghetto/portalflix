/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/portalflix.png';
import './Menu.css';
import { MenuWrapper, LogoImage } from './style';
import Button from '../Button';

const Menu = () => (
  <MenuWrapper className="Menu">
    <Link to="/">
      <LogoImage src={Logo} alt="PortalFlix Logo" />
    </Link>

    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo Video
    </Button>
  </MenuWrapper>
);

export default Menu;
