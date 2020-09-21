import React from 'react';
import './About.css';

const About = () => {

   const open_insta = () => window.open('https://www.instagram.com/kevinmnm/');
   const open_linkedin = () => window.open('https://www.linkedin.com/in/kevin-song-b67138169/');
   const open_facebook = () => window.open('https://www.facebook.com/kevin.song.790/');
   const open_gmail = () => window.open('mailto:kevinmnm2010@gmail.com');

   return (
      <div id='About'>
         <br />
         <br />
         <h1>About GSG</h1>
         <div className='about-paragraph'>
            Welcome to GSG! GSG stands for Gaming Setup Guide. We will help you to optimize your gaming experience on PC so that we won't ever have to lose due to unexpected lag spikes.
         </div>
         <br />
         <br />
         <br />
         <div className='disclaimer-title'>DISCLAIMER</div>
         <br />
         <div className='about-disclaimer'>This website is built to be included in my portfolio project list!. This website is developed to demonstrate how React.js can be utilized to create real-world website. This website is NOT an official website nor belongs to legitimate business by any means.</div>

         <div className='imgs-wrap'>
            <img onClick={open_linkedin} src={require('../assets/linkedin_img.png')} alt='Social Media Icon' />
            <img onClick={open_gmail} src={require('../assets/gmail_img.png')} alt='Social Media Icon' />
            <img onClick={open_insta} src={require('../assets/instagram_img.png')} alt='Social Media Icon' />
            <img onClick={open_facebook} src={require('../assets/facebook_img.png')} alt='Social Media Icon' />
         </div>

      </div>
   );
}

export default About