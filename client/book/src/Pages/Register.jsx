import React from 'react'
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios'



function Registration() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/register' , {
                name, 
                email, 
                password
            });
            console.log('Response from server:', response.data);
            alert('User Registered!');
        }
        catch(error)
        {
            console.error('Error submitting form:', error);
        };
    }


  return (
  <>
    <div className="container">
        <div className="main2">
          <form onSubmit={handleSubmit}>
            <h2>Create a free account!</h2>
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/><br />
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
            <p>Password must have 8 characters</p>
            <p>Number or special characters</p>
            <br />
            <button className='btn2' type='submit'>Sign up
            </button>
            <br /><br />
            <p>Already have an account? <b>Sign-in</b> instead.</p>
            <br />
            </form>
        </div>
    </div>
    </>
  )
}
export default Registration
