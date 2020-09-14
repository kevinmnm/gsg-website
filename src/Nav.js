import React, { useState, useEffect } from 'react';
import './Nav.css';

class Nav extends React.Component {
   render() {
      return (
         <div id='nav'>
            <div className='logo-wrap'>
               <img className='logo' src={require('./assets/logo.png')} alt='logo.png' />
            </div>
            <div className='nav-list'>
               <div>HOME</div>
               <div>ABOUT</div>
               <div>HARDWARE</div>
               <div>SOFTWARE</div>
            </div>
            <div className='sign-in'>Sign In</div>
         </div>
      );
   }
}

export default Nav