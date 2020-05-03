import React from 'react';

function Login() {
    return(
        <div>
            <header>
                <h2>Login</h2>
            </header>
            <form>
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
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login; 