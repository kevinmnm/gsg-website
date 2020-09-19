import React, { useState, useEffect, useRef } from 'react';
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
   let [signin_m, set_signin_m] = useState(null);
   let logged_status = useSelector(x => x.auth);

   const user_email = useRef(null);
   const user_pw = useRef(null);

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
         .then(result => console.log(result));
   }

   const facebook_signin = () => {
      firebase.auth().signInWithPopup(facebook_provider)
         .then(result => console.log(result));
   }

   const signin_attempt = (e) => {
      e.preventDefault();
      let email_val = user_email.current.value;
      let pw_val = user_pw.current.value;

      if (user_email.current.value && user_pw.current.value) {
         firebase.auth().signInWithEmailAndPassword(email_val, pw_val)
            .then(() => console.log('Logged in'))
            .catch(err => {
               set_signin_m('*'+err.message+'*');
            });
      }
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
                  <div className='signin-message'>{signin_m}</div>
                  <form className='signin-regular' onSubmit={signin_attempt}>
                     <input type='text' placeholder='Email' ref={user_email} /> <br />
                     <input type='password' placeholder='Password' ref={user_pw} /> <br />
                     <button>SIGN IN</button>
                  </form>
                  <div>or</div>
                  <div className='signin-other'>
                     <div className='other-google' onClick={google_signin}>GOOGLE</div>
                     <div className='other-facebook' onClick={facebook_signin}>FACEBOOK</div>
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