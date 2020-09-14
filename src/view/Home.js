import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
   let [home_img, set_home_img] = useState('home_large_1.png');

   return (
      <div id='home'>
         <div className='home-img-wrap'>
            <img className='home-img' src={require(`../assets/${home_img}`)} />
         </div>
      </div>
   );
}

export default Home;