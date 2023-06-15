import React from "react";
import  { useState } from 'react';


const reg ='Login Here'




const Login = (props) => {

  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const handleSubmit = (e) => {
      e.preventDefault ();
  }

  return ( 
<div>
<>
    
  

      
            <>
            <div className="form-1">
            <form  onsubmit ={handleSubmit}>
            <h2>{reg}</h2>
            <label for='Email'></label>
<input value={email} onChange ={(e) => setEmail(e.target.value)  } type='Email' placeholder='Email' id='Email' name='Email' />

<label for='Password'></label>
<input value={password} onchange = {(e) => setPassword (e.taret.value)} type='Password' placeholder='Password' id='Password' name='password' />
<button className="btn-1 " type='submit'>Log in</button>

            </form>
            </div>
            </>
            <div className="text-center">
            <button className="  me-5 btn-1  mb-4 mt-1" onClick={()=> props.onFormSwitch ('signup')}>Dont have an account? Register Here</button>
            </div>



    
      
     
    </>





</div>
   );
}
 
export default Login;




 
