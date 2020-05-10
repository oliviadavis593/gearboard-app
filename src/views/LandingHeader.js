import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/LandingHeader.css'

export default function LandingHeader() {
    return(
        <header className="gb-landing__header">
            <NavLink to="/" className="nav__link">
              <h1>GearBoard</h1>
            </NavLink>
        </header>
    )
}