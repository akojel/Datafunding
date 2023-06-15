import React from "react";
import  { useState } from 'react';

const reg ='Signup here'





const Signup = (props) => {

 
  const [name, setName] = useState ('')
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  
  const handleSubmit = (e) => {
      e.preventDefault ();
  }


  return ( 
<div>
  
<>
      

     <div className="form-1">
            <form  onsubmit ={handleSubmit}>
             <h1>{reg}</h1>
            <label htmlfor='name'></label>
<input value={name} onchange = {(e) => setName (e.taret.value)} type='text' placeholder='Fullname' id='name' name='name' />



            <label htmlfor='email'></label>
<input value={email} onChange ={(e) => setEmail(e.target.value)  } type='email' placeholder='Email' id='email' name='email' />

<label htmlfor='password'></label>
<input value={password} onchange = {(e) => setPassword (e.taret.value)} type='password' placeholder='password' id='password' name='password' />
<button className="btn-1" type='submit'>Sign up</button>

            </form>
            </div>
            </>
            <div className="text-center">
            <button className="btn-1 me-5 mb-5 mt-1" onClick={()=> props.onFormSwitch ('login')}>Aready have an account? Login Here</button>
            </div>
</div>
   );
}
 
export default Signup;




 
