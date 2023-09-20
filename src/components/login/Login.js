
import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className='loginform_container'>
            <h1>Login Here</h1>
            <form action="" className='loginform'>
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
                <button className='btn'>Register</button>
                <p>New to TruckDekho? <a className='registerlink' href="/register">Sign-in</a></p>
            </form>
        </div>
    </div>
  )
}

export default Login;