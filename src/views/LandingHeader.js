import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/LandingHeader.css'
import Logo from '../img/gearlogo.png'

export default function LandingHeader() {
    return(
        <div>
            <header className="gb-landing__header">
            <NavLink to='/' className="nav__link">
                <img src={Logo} alt='gb-logo'/>
            </NavLink>
        </header>
        </div>
    )
}