import React from 'react';
import '../styles/Landing.css';
import { Link } from 'react-router-dom';
import LandingHeader from './LandingHeader';
import Footer from '../components/Footer/Footer'


function Landing() {
    return(
        <div>
            <header>
                <LandingHeader />
            </header>
            <div className='landing-main'>
                    <h2>Keep tabs on your gear</h2>
                    <h3>Use GearBoard to track all of your instruments</h3>
                <div className='btns'>
                    <Link to='/login' className='login__button'>
                        <button>Login</button>
                    </Link>
                    <Link to='/registration' className='registration__button'>
                        <button>Registration</button>
                    </Link>
                </div>
            </div>
            <div className='landing-about__icons'>
                <div className='rating__icon'>
                    Card Info #1
                </div>
                <div className='track__icon'>
                    Card Info #2
                </div>
                <div className='comment__icon'>
                    Card Info #3
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing; 