import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Auth=()=>{
  const[userName,setUserName]=useState("")
  const[password,setPassword]=useState("")
  const handleSubmit=event=>{
    const login={
      "username":userName,
      "password":password
    }
  }
return (
  <div className='login-wrapper'>
    <div className='signin'>
        <h1>Login to Your Account</h1>
        
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' value={userName} className='form-control' placeholder='User Name' onChange={(event)=>{setUserName(event.target.value)}}></input>
          <input type="password" name='password' value={password} className='form-control' placeholder='Password' onChange={(event)=>{setPassword(event.target.value)}}></input>
          <button type='submit' className='btn'>Sign In</button>
        </form>
    </div>
    <div className='sign-up'>
<div className='signup-wrapper'>
  <h1>New Here?</h1>
  <p>Sign up to tutor and help others</p>
  <Link className='btn' to="/signup">Sign Up</Link>
</div >
    </div>
  </div>  
)
}
export default Auth;