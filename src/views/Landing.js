import React from 'react';
import '../styles/Landing.css';
import { Link } from 'react-router-dom';


function Landing() {
    return(
        <div>
            <div className='landing-main'>
                    <h2>Keep tabs on your gear</h2>
                    <h3>Use GearBoard to track all of your instruments</h3>
                <div className='btns'>
                    <Link to='/login' className='login__button'>Login</Link>
                    <Link to='/registration' className='registration__button'>Registration</Link>
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

            <footer className='footer'>
                <div className='footer__brand-container'>
                    <p className='footer__author-text'>
                        Created by <a href='https://oliviadavis593.github.io/portfolio/' target='_blank' rel="noopener noreferrer">Olivia Davis</a>
                    </p>
                </div>
                <div className='footer__social-media'>
                    <a href='https://github.com/oliviadavis593' target='_blank' rel="noopener noreferrer">GitHub</a>
                    <a href='https://www.linkedin.com/in/olivia-davis-ab1848105/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className='copyright-text'>
                    <p>
                        Copyright &copy; 2020
                    <br />
                        All Rights Reserved
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Landing; 