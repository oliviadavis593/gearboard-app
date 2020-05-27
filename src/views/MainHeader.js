import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/gearlogo.png'
import '../styles/MainHeader.css'

export default function LandingHeader() {
    return(
        <div className='gb-header__container'>
          <header className="gb-main__header">
            <NavLink to='/homepage'>
              <img src={Logo} alt='gb-logo' className='gb-logo'/>
            </NavLink>
          </header>
          <nav className="nav">
            <div className="nav__main-links">
              <NavLink to="/homepage" className='gb-link__all'>All Gear</NavLink>
              <NavLink to="/new-item" className='gb-link__new'>Submit new item</NavLink>
              <NavLink to="/" className='gb-link__logout'>Logout</NavLink>
            </div>
            <span className="navbar-toggle" id="js-navbar-toggle"></span>
          </nav>
        </div>
    )
}