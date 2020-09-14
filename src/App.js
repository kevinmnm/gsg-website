import React, { useState, useEffect } from 'react';
import './App.css';
//import Nav from './Nav.js';
import Home from './view/Home.js'

class App extends React.Component {
   state = {
      nav_expand: false
   }

   nav_slide = ()=>{
      this.setState( prevState => {
         return {
            nav_expand: !prevState.nav_expand
         }
      });
   }

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
            {/* <div className={this.state.nav_expand ? 'container change' : 'container'} onClick={this.nav_slide}> */}
            <div className={this.state.nav_expand ? 'container change' : 'container'} onClick={this.nav_slide}>
               <div className="bar1"></div>
               <div className="bar2"></div>
               <div className="bar3"></div>
            </div>

            <Home />
         </div>
      );
   }
}


export default App;
