import React from 'react';
import './Missing.css';

const Missing = () => {
   return (
      <div id='Missing'>
         <div className='missing-content'>
            <img className='missing-img' src={require('../assets/404.png')} alet='404.png' draggable='false' alt='Missing page'/>
         </div>
      </div>
   );
}

export default Missing;