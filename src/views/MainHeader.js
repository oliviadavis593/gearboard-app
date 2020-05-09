import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LandingHeader() {
    return(
        <header className="header-top">
          <nav className="nav">
            <NavLink to="/" className="nav__link">
              <h1>GearBoard</h1>
            </NavLink>
            <div className="nav__main-links">
              <NavLink to="/homepage">All Gear</NavLink>
              <NavLink to="/new-item">Submit new item</NavLink>
              <NavLink to="/">Logout</NavLink>
            </div>
            <span className="navbar-toggle" id="js-navbar-toggle"></span>
          </nav>
        </header>
    )
}