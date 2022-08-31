import React from "react";
import { NavLink } from "react-router-dom";

import './header.css';

function Header() {
  return (
    <header className='header-container'>
      <div className='header-logo'>
        <h1 className='header-text'>Dental Simulator</h1>
      </div>
      <nav className='nav-link'>
        <NavLink
          to='/'
          className='link'
        >
          Relatórios
        </NavLink>
        <NavLink
          to='/clients'
          className='link'
        >
          Clientes
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
