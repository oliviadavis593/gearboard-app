import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingHeader from '../../views/LandingHeader';
import TokenService from '../../services/token-service';
import '../../styles/Login.css';
import AuthApiService from '../../services/auth-api-service';

export default class Login extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    //Authentication for the login form 
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { email, password } = ev.target 

        AuthApiService.postLogin({
            email: email.value, 
            password: password.value 
        })
        .then(res => {
            email.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
            this.props.history.push('/homepage')
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }


    render() {
        const { error } = this.state 
        return(
                <div className='gb-login-page'>
                <header>
                    <LandingHeader />
                </header>
                <main role='main'>
                    <form 
                    className='gb-login__form' 
                    onSubmit={this.handleSubmitJwtAuth}
                    >
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

                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div className='gb-container'>
                        <button className='gb-login__button' type='submit'>Login</button>
                        </div>
                    </form>
                    <div className='gb-demo__container'>
                        <h2>Demo</h2>
                        <p>Email: gearboard@demo.com</p>
                        <p>Password: Gearpass100!</p>
                    </div>
                    <div className='gb-login-form__links'>
                            Don't have an account?
                            <Link to='/registration' className='gb-registration__route'>Register</Link>
                    </div>
                </main>
            </div>
        )
    }
}