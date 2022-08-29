import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../images/logo.png';

import './header.css';

function Header() {
  return (
    <header className='header-container'>
      <div className='header-logo'>
        <img className='logo' src={ Logo } alt='Logo da empresa' />
      </div>
      <nav className='nav-link'>
        <NavLink
          to='/'
          activeClassName='selected'
          className='link'
        >
          Clientes
        </NavLink>
        <NavLink
          to='/calculator'
          activeClassName='selected'
          className='link'
        >
          Calculadora
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
