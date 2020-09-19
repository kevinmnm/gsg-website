import React from 'react';
import './Hardware.css';
import hardware_list from './component/hardware-list.js';

class Hardware extends React.Component {
   render() {
      return (
         <div id='Hardware'>
            <h1><u>Hardwares</u></h1>
            <div className='hardware-content-wrap'>
               {
                  hardware_list.map( product => {
                     return (
                        <div className='hardware-content' key={product.type}>
                           <div className='content-title'>{product.type}</div>
                           <img src={require('../assets/'+product.img)} alt='Product Image' />
                           <div className='content-spec'>{product.spec}</div>
                        </div>
                     )
                  })
               }
            </div>
            <br /><br /><br />
         </div>
      );
   }
}

export default Hardware