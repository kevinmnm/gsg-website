import React, { useState, useEffect } from 'react';
import Signup from './component/signup.js';
import './Signin.css';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './component/dashboard.js';
let firebase = require('firebase/app');

const Signin = () => {
   const google_provider = new firebase.auth.GoogleAuthProvider();
   const facebook_provider = new firebase.auth.FacebookAuthProvider();
   const dispatch = useDispatch();

   let [signup, set_signup] = useState(false);
   let logged_status = useSelector(x => x.auth);

   firebase.auth().onAuthStateChanged(user => {
      if (user) {
         dispatch({
            type: 'LOGGED_IN'
         });
      }
   });

   const signup_show = () => {
      set_signup(true);
   }

   const google_signin = () => {
      firebase.auth().signInWithPopup(google_provider)
         .then(result => {
            console.log(result);
         });
   }


   {
      if (!logged_status) {
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
                     <div className='other-google' onClick={google_signin}>GOOGLE</div>
                     <div className='other-facebook'>FACEBOOK</div>
                  </div>
               </div>
               <br />
               {
                  signup ?
                     <div className='signup-title2'><span>Sign Up</span></div> :
                     <div className='signup-title' onClick={signup_show}>Sign up</div>
               }
               {
                  signup ? <Signup /> : null
               }
            </div>
         );
      } else {
         return (
            <Dashboard />
         );
      }
   }

}

export default Signin