import React from "react";
import { useState } from "react";
import Getimage from "./Getimage";
import Login from "./Login";
import Signup from "./Signup";
import Mycard from "./Mycard";
import Footer from "./Footer";

const tittle =' Welcome to Godwin Enterprises';
const tittle1 = 'Electronic Top Up'
const anothertittle ='Our partners'
const anothertittle2 ='Download our app'
const description = 'we offer an instant airtime, data bundles, cable tv subscription, electricity bill payment, waec and neco pin and lots more.......'
const description1='Electronic vending of data and airtime'


const Home = () => {
const [currentForm, setCurrentForm] = useState('login')
const toggleForm = (formName) => {
   setCurrentForm (formName);
}
   return (
    <div>  
<div className="inner overflow-hidden mt-3">
<div className="overlay-1 overflow-hidden">
<h1 className="text-white fw-bold ms-1 mt-5">{tittle}</h1>
<p className="text-white fw-bold ms-1 col-10 col-lg-10 mb-5">{description}</p>
<div className="row">
  {currentForm ==='login' ? <Login onFormSwitch = {toggleForm} /> : <Signup onFormSwitch = {toggleForm} />}
      
</div>
</div>
</div>

<div className="row-1">
   
   <Getimage  img={'c1'}   /> 
   <Getimage  img={'c2'}   /> 
   
</div>
<div>
<h3>{anothertittle}</h3>
<div className="row-2">
   <Getimage  img={'c3'}   /> 
   <Getimage  img={'c4'}   /> 
   <Getimage  img={'c5'}   /> 
   <Getimage  img={'c6'}   /> 
</div>
</div>
<h3>{anothertittle2}</h3>
<div>
<div className='row-1'>
<Getimage img={'c7'} />
<Getimage img={'c8'}  />
</div>
</div>
<div className="card-2 overflow-hidden">
   <h3 className="mt-3 ">{tittle1}</h3>
   

   <p className="text-center fw-bold">{description1}</p>
<div className="card-1">
<Mycard   tittle={'Buy Airtime'} img={'c9'} description={' Enjoy huge discount when you purchase airtime.. '} btn={'buy now'}type='alert'/> 
<Mycard   tittle={'Buy Databundle'} img={'c10'} description={' Start enjoying this very low rates for your internet browsing databundle. '} btn={'buy now'} type='alert'/> 
<Mycard   tittle={'Cable Subscription'} img={'c12'} description={'Instant recharge of DStv, GOtv and Startimes e.t.c.. '} btn={'Start now'} link={'board'}/> 
</div>
</div>
<div>
   < Footer />
</div>

</div>

    );
}
 
export default Home;