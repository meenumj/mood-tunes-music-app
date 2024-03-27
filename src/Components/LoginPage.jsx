import React from 'react'
import './LoginPage.css'
import { FaUser,FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <body className='login-page'>
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <FaUser className='icon'/>
                </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <FaLock className='icon' />
                </div>
            <div className="remenber-forgot">
                <label><input type='checkbox' />Remember me</label>
                <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit'>Login</button>

            <div className="register-link">
            <p>Don't have an account? <a href='#'>Register</a></p>
            </div>

            <div className="register-link">
            <p>Want to Go Back? <Link to='/'>Go to Home</Link></p>
            </div>

        </form>
      
    </div>
    </body>
    
  )
}

export default LoginPage
