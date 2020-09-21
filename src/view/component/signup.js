import React, { useState } from 'react';
import './signup.css';
let firebase = require('firebase/app');

const Signup = () => {

   let [email, set_email] = useState(null);
   let [pw, set_pw] = useState(null);
   let [pwc, set_pwc] = useState(null);
   let [fn, set_fn] = useState(null);
   let [ln, set_ln] = useState(null);
   let [errorM, set_errorM] = useState('*Email verification required*');
   let [errm_style, set_errm_style] = useState(null);

   const email_set = (e) => e.target.value ? set_email(e.target.value) : null;

   const pw_set = (e) => e.target.value ? set_pw(e.target.value) : null;

   const pwc_set = (e) => e.target.value ? set_pwc(e.target.value) : null;

   const fn_set = (e) => e.target.value ? set_fn(e.target.value) : null;

   const ln_set = (e) => e.target.value ? set_ln(e.target.value) : null;

   const create_cred = (e) => {
      e.preventDefault();
      if (email && pw && pwc && fn && ln) {
         if (pw === pwc) {
            firebase.auth().createUserWithEmailAndPassword(email, pw)
               .then(res => {
                  res.user.updateProfile({
                     displayName: fn + ' ' + ln
                  });
               })
               .then(()=>{
                  alert(firebase.auth().currentUser.displayName);
               })
               .catch(err => {
                  set_errorM('*'+err.message+'*');
                  set_errm_style({color:'red'});
               });
         }
      }
   }

   return (
      <div className='signup'>
         <div className='err-m' style={errm_style}>{errorM}</div> <br />
         <form className='signup-form' onSubmit={create_cred}>
            <input onChange={email_set} type='text' placeholder='Email' />
            <input onChange={pw_set} type='password' placeholder='Password' />
            <input onChange={pwc_set} type='password' placeholder='Confirm' />
            <input onChange={fn_set} type='text' placeholder='First name' />
            <input onChange={ln_set} type='text' placeholder='Last name' />
            <button>SIGN UP</button>
         </form>
         <br /><br /><br />
      </div>
   );
}

export default Signup