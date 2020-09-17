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
         </form>
      </div>
   );
}

export default Signup