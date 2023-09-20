
import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <div className='register'>
        <div className='registerform_container'>
            <h1>Register Here</h1>
            <form action="localhost://4000/register" method='post' className='registerform'>
                <input type="text" placeholder='Username'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Confirm Password'/>
                <button className='btn'>Register</button>
                <p>Already have an account? <a className='loginlink' href="/login">Login</a></p>
            </form>
        </div>
    </div>
  )
}

export default Register;