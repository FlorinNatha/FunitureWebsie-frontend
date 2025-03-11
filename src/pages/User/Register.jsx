import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 ' style={{backgroundColor: "#cad1ce"}}> 
      <div  className='bg-white p-3 rounded w-25'>
        <form >
            <h2 className='m-4'> Register </h2>
            <div className='mb-3'>
                <label for="name"><strong>Full Name</strong></label>
                <input type='name' placeholder='Enter your full name' className='form-control rounded-4'/>
            </div>
            <div className='mb-3'>
                <label for="email"><strong>Email</strong></label>
                <input type='email' placeholder='Enter Email' className='form-control rounded-4'/>
            </div>
            <div className='mb-3'>
                <label for="password"><strong>Password</strong></label>
                <input type='password' placeholder='Enter Password' className='form-control rounded-4'/>
            </div>
            <div className='mb-3'>
                <label for="password"><strong>Confirm Password</strong></label>
                <input type='password' placeholder='Confirm your password' className='form-control rounded-4'/>
            </div>
            <button className='btn btn-success w-100 mb-4 mt-4'>Register</button>
            <div className='mb-3 ms-3'>
                <Link to="/login"><p>Already registered? Sign in </p></Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register
