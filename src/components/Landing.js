import React from 'react';
import '../styles/Landing.css'



function Landing() {
    return(
        <div>
            <div className='landing-main'>
                    <h2>Keep tabs on your gear</h2>
                    <h3>Use GearBoard to track all of your instruments</h3>
                <div className='btns'>
                    <button
                    className='login__button'
                    >
                        Login
                    </button>
                    <button
                    className='registration__button'
                    >
                        Registration
                    </button>
                </div>
            </div>
            <div className='landing-about__icons'>
                <div className='rating__icon'>
                    
                </div>
                <div className='track__icon'>

                </div>
                <div className='comment__icon'>

                </div>
            </div>
        </div>
    )
}

export default Landing; 