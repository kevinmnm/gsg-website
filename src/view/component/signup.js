import React from 'react';
import './signup.css';

const Signup = () => {
   return (
      <div className='signup'>
         <form className='signup-form'>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Confirm' />
            <input type='text' placeholder='First name' />
            <input type='text' placeholder='Last name' />
            <button>SIGN UP</button>
         </form>
         <br /><br /><br />
      </div>
   );
}

export default Signup