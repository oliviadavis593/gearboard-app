import React from 'react';
import '../../styles/Footer.css'


export default function Footer() {
    return(
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
    )
}