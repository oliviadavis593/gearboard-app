import React from 'react';
import { NavLink } from 'react-router-dom'

export default function LandingHeader() {
    return(
        <header className="header-top">
          <nav className="nav">
            <NavLink to="/" className="nav__link">
              <h1>GearBoard</h1>
            </NavLink>
          </nav>
        </header>
    )
}