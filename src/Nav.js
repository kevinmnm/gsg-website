import React from 'react';
import './Nav.css';

class Nav extends React.Component {
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
            <div className={this.state.nav_expand ? 'container change' : 'container'} onClick={this.nav_slide}>
               <div className="bar1"></div>
               <div className="bar2"></div>
               <div className="bar3"></div>
            </div>
         </div>
      );
   }
}

export default Nav