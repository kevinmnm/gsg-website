import React from 'react';
import './Software.css';
import software_list from './component/software-list.js';

class Software extends React.Component {
   render() {
      return (
         <div id='Software'>
            <h1><u>Softwares</u></h1>
            <div className='software-content-wrap'>
               {
                  software_list.map(product => {
                     return (
                        <div className='software-content' key={product.title}>
                           <div className='software-content-title'>{product.title}</div>
                           <img src={require('../assets/' + product.img)} alt='Software' />
                           <div className='software-content-desc'>{product.desc}</div>
                        </div>
                     )
                  })
               }
            </div>
            <br /><br />
         </div>
      );
   }
}

export default Software