import React from 'react';
import './nav-div.css';
import { NavLink } from 'react-router-dom';

const Nav_div = (props) => {

   const closer = () => {
      console.log(props);
      props.expander();
   }

   return (
      <div id='nav_div'>
         <div onClick={closer}><NavLink to="/signin">SIGN-IN</NavLink></div>
         <div onClick={closer}><NavLink to="/about">ABOUT</NavLink></div>
         <div onClick={closer}><NavLink to="/hardware">HARDWARE</NavLink></div>
         <div onClick={closer}><NavLink to="/software">SOFTWARE</NavLink></div>
      </div>
   );
}

export default Nav_div;