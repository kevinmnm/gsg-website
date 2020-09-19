import React from 'react';
import './About.css';

const About = (props) => {
   return (
      <div id='About'>
         <br />
         <br />
         <h1>About GSG</h1>
         <div class='about-paragraph'>
            Welcome to GSG! GSG stands for Gaming Setup Guide. We will help you to optimize your gaming experience on PC so that we won't ever have to lose due to unexpected lag spikes. 
         </div>
         <br />
         <br />
         <br />
         <div class='disclaimer-title'>DISCLAIMER</div>
         <br />
         <div class='about-disclaimer'>This website is built to be included in my portfolio project list!. This website is developed to demonstrate how React.js can be utilized to create real-world website. This website is NOT an official website nor belongs to legitimate business by any means.</div>
      </div>
   );
}

export default About