import React from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  // return different navigation between landing and homepage
  return (
    <div className="header-wrapper">
      {window.location.pathname === '/' ? (
        <header className="header-top">
          <nav className="nav">
            <NavLink to="/" className="nav__link">
              <h1>GearBoard</h1>
            </NavLink>
          </nav>
        </header>
      ) : (
        <header className="header-top">
          <nav className="nav">
            <NavLink to="/" className="nav__link">
              <h1>GearBoard</h1>
            </NavLink>
            <div className="nav__main-links">
              <NavLink to="/homepage">All Gear</NavLink>
              <NavLink to="/newitem">Submit new item</NavLink>
              <NavLink to="/">Logout</NavLink>
            </div>
            <span className="navbar-toggle" id="js-navbar-toggle"></span>
          </nav>
        </header>
      )}
    </div>
  );
}

export default Header;
