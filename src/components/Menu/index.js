/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/portalflix.png';
import './Menu.css';
import { MenuWrapper, LogoImage } from './style';
import Button from '../Button';

const NomeMenuSuperior = () => {
  if (window.location.pathname === '/cadastro/video') {
    return (
      <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
        Nova Categoria
      </Button>
    );
  }
  return (
    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo Video
    </Button>
  );
};

const Menu = () => (
  <MenuWrapper className="Menu">
    <Link to="/">
      <LogoImage src={Logo} alt="PortalFlix Logo" />
    </Link>
    {NomeMenuSuperior()}
  </MenuWrapper>
);

export default Menu;
