/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Auth=()=>{
  const[userName,setUserName]=useState("")
  const[password,setPassword]=useState("")
  const[jwt ,setJWT]=useState("")
  const handleSubmit=event=>{
    const login={
      "username":userName,
      "password":password
    }

    fetch(apiURL,{
      method:"POST",
      headers:{  'Accept': 'application/json',
          "Content-Type": "application/json"},
      body:JSON.stringify(login)
  }).then( result => result.json() ).then(data=>{
    console.log(data.jwt)
      setJWT(data.jwt)
  })
  .catch( (error) => { console.log(error) } ) 

  props.history.push({
    
    pathname: '/',
    userName,
    jwt
  })

    event.preventDefault();
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
export default Auth
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInApi from '../APIs/SignInApi';
import { useLocalState } from "../util/useLocalStorage";
const apiURL="http://localhost:8080/authenticate"


const Auth=(props)=>{
  const[userName,setUserName]=useState("")
  const[password,setPassword]=useState("")
  const[jwt, setJWT] = useLocalState("", "jwt");
  const handleSubmit=event=>{
    const login={
      "username":userName,
      "password":password
    }
    fetch(apiURL,{
      method:"POST",
      headers:{  'Accept': 'application/json',
          "Content-Type": "application/json"},
      body:JSON.stringify(login)
  }).then( result => result.json() ).then(data=>{
    console.log(data.jwt)
      setJWT(data.jwt)
  })
  .catch( (error) => { console.log(error) } ) 

  props.history.push({
    
    pathname: '/',
    userName,
    jwt
  })

    event.preventDefault();
  }
  function sendLoginRequest() {
    console.log("I'm sending a request!");
    
    const reqBody = {
      username: "Adan",
      password: "password",
    };
    fetch("api/auth/login", {
      headers: {
        "Content-Type": "application/json",
      }, 
      method: "Post",
      body: JSON.stringify(reqBody),
    } )
    .then((response) => Promise.all([response.json(), response.headers]))
    .then(([body, headers]) => {
        setJWT(headers.get("authorization"));
    });

  }

return (
  <div className='login-wrapper'>
    <div className='signin'>
        <h1>Login to Your Account</h1>
        
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' value={userName} className='form-control' placeholder='User Name' onChange={(event)=>{setUserName(event.target.value)}}></input>
          <input type="password" name='password' value={password} className='form-control' placeholder='Password' onChange={(event)=>{setPassword(event.target.value)}}></input>
          <button type='submit' className='btn' onClick={() => sendLoginRequest()}>Sign In</button>
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
export default Auth
