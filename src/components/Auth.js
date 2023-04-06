import React, { useState } from 'react';

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
        
          <input type="text" name='username' value={userName} className='form-control' placeholder='User Name'></input>
          <input type="text" name='password' value={password} className='form-control' placeholder='Password'></input>
        </form>
    </div>
    <div className='sign-up'>

    </div>
  </div>  
)
}
export default Auth;