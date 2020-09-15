import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = (props) => {
   const first = 'home_large_1.png';
   const second = 'home_large_2.png';
   const third = 'home_large_3.png';

   let [home_img, set_home_img] = useState(first);

   const slider = (e) => {
      if (e.target.classList.contains('arrow-left')){
         home_img === first ? set_home_img(third)
         : home_img === second ? set_home_img(first)
         : set_home_img(second);
      } else {
         home_img === first ? set_home_img(second)
         : home_img === second ? set_home_img(third)
         : set_home_img(first);
      }
   }

   return (
      <div id='home'>
         <div className='home-img-wrap'>
            <img className='home-img' src={require(`../assets/${home_img}`)} draggable='false' />
            <div className='home-arrow-wrap'>
               <div className='arrow arrow-left' onClick={slider}>&#8249;</div>
               <div className='arrow arrow-right' onClick={slider}>&#8250;</div>
            </div>
         </div>
         <div className='nav-full-wrap'>
            <div className='close-nav-full-wrap'>&#10005;</div>
            <div className='nav-flex-wrap'>
               <div>SIGN-IN</div>
               <div>ABOUT</div>
               <div>HARDWARE</div>
               <div>SOFTWARE</div>
            </div>
         </div>
      </div>
   );
}

export default Home;