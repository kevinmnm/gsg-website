import React, { useState } from 'react';
import Signup from './component/signup.js';
import './Signin.css';

const Signin = (props) => {
   let [signup, set_signup] = useState(false);

   const signup_show = () => {
      set_signup(true);
   }

   return (
      <div id='Signin'>
         <div className='signin'>
            <div className='signin-img-wrap'>
               <img className='signin-img' src={require('../assets/logo.png')} />
            </div>
            <br />
            <h1 className='signin-h1'><span>Sign in to GSC</span></h1>
            <form className='signin-regular'>
               <input type='text' placeholder='Email' /> <br />
               <input type='password' placeholder='Password' /> <br />
               <button>SIGN IN</button>
            </form>
            <div>or</div>
            <div className='signin-other'>
               <div className='other-google'>GOOGLE</div>
               <div className='other-facebook'>FACEBOOK</div>
            </div>
         </div>
         <br />
         <div className='signup-title'>
            <div onClick={signup_show}>Sign up</div>
         </div>
            {
               signup ? <Signup /> : null
            }
      </div>
   );
}

export default Signin