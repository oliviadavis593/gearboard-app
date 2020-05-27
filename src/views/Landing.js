import React from 'react';
import '../styles/Landing.css';
import { Link } from 'react-router-dom';
import LandingHeader from './LandingHeader';
import Footer from '../components/Footer/Footer'
import Star from '../img/star.png'
import List from '../img/list.png'
import Check from '../img/check.png'


function Landing() {
    return(
        <div>
            <header>
                <LandingHeader />
            </header>
            <div className='landing-main'>
                    <div className='landing-main__text'>
                        <h2>Keep tabs on your gear</h2>
                        <h3>Use GearBoard to track all of your instruments</h3>
                    </div>
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
                    <img src={Star} alt='star' className='gb-star__landing'/>
                    <p>Rate your gear</p>
                </div>
                <div className='track__icon'> 
                    <img src={Check} alt='check' className='gb-check__landing' />
                    <p>Add your gear</p>
                </div>
                <div className='comment__icon'>
                <img src={List} alt='list' className='gb-list__landing' />
                    <p>List all quality features</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing; 