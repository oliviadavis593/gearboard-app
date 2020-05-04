import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Registration.css'

function Registration() {
    return(
        <div>
            <form>
            <h2>Registration</h2>
                <div>
                    <label>First Name</label>
                    <input 
                    type='text'
                    name='first_name'
                    placeholder='Johnny Doe'
                    required
                    />
                </div>
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
                    <label>Confirm Password</label>
                    <input 
                    type='text'
                    name='re-password'
                    placeholder='gearBoardgreat!'
                    required
                    />
                </div>
                <div>
                    <button type='submit'>
                        Submit
                    </button>
                    <NavLink to='/'>Demo</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Registration; 