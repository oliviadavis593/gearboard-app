import React from 'react';
import { Link } from 'react-router-dom'

export default function Login() {
    return(
        <div className='gb-login-page'>
            <main role='main'>
                <form className='gb-login__form' method='post'>
                    <fieldset>
                        <legend><h2>Login</h2></legend>
                        <label htmlFor='user-email'>Email</label>
                        <input 
                        id='user-email'
                        type='email'
                        name='email'
                        required
                        />

                        <label htmlFor='user-password'>Password</label>
                        <input 
                        id='user-password'
                        type='password'
                        name='password'
                        required
                        />
                    </fieldset>

                    <button className='gb-login__button' type='submit'>Log In</button>
                        <div className='gb-login-form__links'>
                            <Link to='/registration'>Register</Link>
                        </div>
                </form>
            </main>
        </div>
    )
}