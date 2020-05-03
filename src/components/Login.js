import React from 'react';
import '../styles/Login.css'

function Login() {
    return(
        <div className='Login__box'>
            <form>
                <h2>Login</h2>
                <div>
                    <label>Email</label>
                    <input 
                    type='text'
                    name='email'
                    placeholder='gearboard123@gmail.com'
                    required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                    type='text'
                    name='password'
                    placeholder='gearBoardgreat!'
                    required
                    />
                </div>
                <div>
                    <button type='submit'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login; 