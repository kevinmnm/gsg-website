import React from 'react';
import './App.css';
import Home from './view/Home.js';
import About from './view/About.js';
import Hardware from './view/Hardware.js';
import Software from './view/Software.js';
import Signin from './view/Signin.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
   state = {
      nav_expand: false
   }

   nav_slide = () => {
      this.setState(prevState => {
         return {
            nav_expand: !prevState.nav_expand
         }
      });
   }

   render() {
      return (
         <div id='app'>
            <Router>
               <div id='nav'>
                  <div className='logo-wrap'>
                     <Link to="/"><img className='logo' src={require('./assets/logo.png')} alt='logo.png' /></Link>
                  </div>
                  <div className='nav-list'>
                     <div><Link to="/about">ABOUT</Link></div>
                     <div><Link to="/hardware">HARDWARE</Link></div>
                     <div><Link to="/software">SOFTWARE</Link></div>
                  </div>
                  <div className='sign-in'><Link to="/signin">Sign In</Link></div>
                  {/* <div className={this.state.nav_expand ? 'container change' : 'container'} onClick={this.nav_slide}> */}
                  <div className={(this.state.nav_expand && window.innerWidth < 600) ? 'container change' : 'container'} onClick={this.nav_slide}>
                     <div className="bar1"></div>
                     <div className="bar2"></div>
                     <div className="bar3"></div>
                  </div>
               </div>
               <Switch>
                  <Route path="/" exact>
                     <Home />
                  </Route>
                  <Route path="/about" exact>
                     <About />
                  </Route>
                  <Route path="/hardware" exact>
                     <Hardware />
                  </Route>
                  <Route path="/software" exact>
                     <Software />
                  </Route>
                  <Route path="/signin" exact>
                     <Signin />
                  </Route>
               </Switch>
            </Router>
         </div>
      );
   }
}


export default App;
