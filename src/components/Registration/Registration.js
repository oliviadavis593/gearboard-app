import React, { Component } from 'react';
import LandingHeader from '../../views/LandingHeader'
import AuthApiService from '../../services/auth-api-service'
import '../../styles/Registration.css'

export default class Registration extends Component  {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, email, password } = ev.target

        this.setState({ error: null })
        AuthApiService.postUser({
            full_name: full_name.value, 
            email: email.value, 
            password: password.value, 
        })
        .then(user => {
            full_name.value = '' 
            email.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
            this.props.history.push('/login')
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        const { error } = this.state
        return(
                <div>
                <header>
                    <LandingHeader />
                </header>
                <main role='main'>
                    <form 
                    className='gb-registration__form' 
                    onSubmit={this.handleSubmit}
                    >
                        <fieldset>
                            <legend><h2>Registration</h2></legend>
                            <label htmlFor='full_name'>Full Name:</label>
                            <input 
                            id='full_name'
                            type='text'
                            name='full_name'
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
    
                        </fieldset>
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div className='gb-register-container__buttons'>
                        <button 
                            className='gb-register__button'
                            type='submit'
                        >
                                Register
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        )
    }
}