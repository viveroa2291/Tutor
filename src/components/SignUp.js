import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupApi from '../APIs/SignupApi';
const SignUp=()=>{
    const[userName,setUserName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
 const handleSubmit=event=>{
      const user={
        "username":userName,
        "email":email,
        "password":password
      }
SignupApi.createUser(user)
event.preventDefault();
    }
    
    return(
<div className='signup-wrapper2'>
    <div className="sign-up"><h1>Welcome Back</h1> 
    <p>Sign in to access your account</p>
    <Link className='btn' to="/auth">Sign In</Link>
    </div>
    <div className='signup-form'>
    
<h1>Create Account</h1>
<form onSubmit={handleSubmit}>
    
<label className='form-label' for="username">User Name</label>
    <input className='form-control' name='username' value={userName} onChange={(event)=>{setUserName(event.target.value)}}></input>
    <label className='form-label' for="email">Email</label>
    <input className='form-control' name='email' value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
    <label className='form-label' for="password">Password</label>
    <input className='form-control' name='password' type='password' value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
    <button className='btn'>Sign Up</button>
</form>
</div>
</div>
    )
    
}

export default SignUp;