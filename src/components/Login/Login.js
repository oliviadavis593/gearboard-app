import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import LandingHeader from '../../views/LandingHeader'
import TokenService from '../../services/token-service'
import '../../styles/Login.css'

export default class Login extends Component {
    
    handleSubmitBasicAuth = ev => {
        ev.preventDefault();
        const { email, password } = ev.target 

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(email.value, password.value)
        )
    }

    render() {
        return(
            <div className='gb-login-page'>
                <header>
                    <LandingHeader />
                </header>
                <main role='main'>
                    <form 
                    className='gb-login__form' 
                    onSubmit={this.handleSubmitBasicAuth}
                    >
                        <fieldset>
                            <legend><h2>Login</h2></legend>
                            <label htmlFor='user-email'>Email:</label>
                            <input 
                            id='user-email'
                            type='email'
                            name='email'
                            required
                            />
    
                            <label htmlFor='user-password'>Password:</label>
                            <input 
                            id='user-password'
                            type='password'
                            name='password'
                            required
                            />
                        </fieldset>
    
                        <div className='gb-container'>
                        <button className='gb-login__button' type='submit'>Log In</button>
                            <div className='gb-login-form__links'>
                                <Link to='/registration' className='gb-registration__route'>Register</Link>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        )
    }
}