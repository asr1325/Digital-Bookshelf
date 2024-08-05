import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert';

import Navbar from '../Components/Navbar'
function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/login', { email, password});
            localStorage.setItem('email', email);
            console.log('Response from server:' ,response.data);
            console.log('Email stored in localStorage:', localStorage.getItem('email'));
            alert('User Logged In');
        }
        catch(error)
        {
            console.error('Error submitting form:', error);
        }
    }

  return (
    <>
    <div className="container">
        <div className="main">
            <form onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <br />
            <label>Email Address</label>
            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <br /><br />
            <label>Password</label>
            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <p>Forgot password?</p>
            <br />
            <button className='btn'>Log In</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login