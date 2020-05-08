import React from 'react';
import { Link } from 'react-router-dom'

export default function Registration() {
    return(
        <div>
            <main role='main'>
                <form className='gb-registration__form' method='post'>
                    <fieldset>
                        <legend><h2>Registration</h2></legend>
                        <label htmlFor='first-name'>First Name:</label>
                        <input 
                        id='first-name'
                        type='text'
                        name='first-name'
                        required
                        />

                        <label htmlFor='last-name'>Last Name:</label>
                        <input 
                        id='last-name'
                        type='text'
                        name='last-name'
                        required
                        />

                        <label htmlFor='email'>Email:</label>
                        <input 
                        id='email'
                        type='email'
                        name='email'
                        required
                        />

                        <label htmlFor='password'>Password:</label>
                        <input 
                        id='password'
                        type='password'
                        name='password'
                        required
                        />

                        <label htmlFor='confirm-password'>Confirm Password:</label>
                        <input 
                        id='confirm-password'
                        type='confirm-password'
                        name='confirm-password'
                        required
                        />
                    </fieldset>
                    <div className='gb-register-form__links'>
                    <button 
                        className='gb-register__button'
                    >
                            Register
                        </button>
                    <Link to='/homepage'>Demo</Link>
                    </div>
                </form>
            </main>
        </div>
    )
}