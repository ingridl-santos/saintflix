import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="Header">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo da SaintFlix" />
      </Link>
    </nav>
  );
}

export default Header;