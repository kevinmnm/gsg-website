import React, { Suspense, lazy } from 'react';
import './App.css';
import Home from './view/Home.js';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

const About = lazy(() => import('./view/About.js'));
const Hardware = lazy(()=>import('./view/Hardware.js'));
const Software = lazy(()=>import('./view/Software.js'));
const Signin = lazy(()=>import('./view/Signin.js'));

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
                     <NavLink to="/"><img className='logo' src={require('./assets/logo.png')} alt='logo.png' /></NavLink>
                  </div>
                  <div className='nav-list'>
                     <div><NavLink to="/about">ABOUT</NavLink></div>
                     <div><NavLink to="/hardware">HARDWARE</NavLink></div>
                     <div><NavLink to="/software">SOFTWARE</NavLink></div>
                  </div>
                  <div className='sign-in'>
                     <NavLink
                        to="/signin"
                        activeStyle={{
                           color: 'dodgerBlue',
                           textShadow: '0 0 1px black'
                        }}>
                        Sign In
                     </NavLink>
                  </div>
                  {/* <div className={this.state.nav_expand ? 'container change' : 'container'} onClick={this.nav_slide}> */}
                  <div className={(this.state.nav_expand && window.innerWidth < 600) ? 'container change' : 'container'} onClick={this.nav_slide}>
                     <div className="bar1"></div>
                     <div className="bar2"></div>
                     <div className="bar3"></div>
                  </div>
               </div>
               <Suspense fallback={<div>Loading..</div>}>
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
               </Suspense>
            </Router>
         </div>
      );
   }
}


export default App;
