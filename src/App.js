import React, { Suspense, lazy } from 'react';
import './App.css';
import Home from './view/Home.js';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
// import { auth } from 'firebase';

const About = lazy(() => import('./view/About.js'));
const Hardware = lazy(() => import('./view/Hardware.js'));
const Software = lazy(() => import('./view/Software.js'));
const Signin = lazy(() => import('./view/Signin.js'));
const Missing = lazy(() => import('./view/Missing.js'));
const Nav_div = lazy(() => import('./view/component/nav-div.js'));

class App extends React.Component {
   state = {
      nav_expand: false
   }

   componentDidMount(){
      window.addEventListener('resize', this.window_handler);
   }

   componentWillUnmount(){
      window.removeEventListener('resize', this.window_handler);
   }

   window_handler = () => {
      if (window.innerWidth >= 600){
         this.setState(prevState => {
            return {
               ...prevState,
               nav_expand: false
            }
         });
      }
   }

   nav_slide = () => {
      this.setState(prevState => {
         return {
            ...prevState,
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
                     <NavLink to={`${process.env.PUBLIC_URL}/`}><img className='logo' src={require('./assets/logo.png')} alt='logo.png' /></NavLink>
                  </div>
                  <div className='nav-list'>
                     <div><NavLink to={`${process.env.PUBLIC_URL}/about`}>ABOUT</NavLink></div>
                     <div><NavLink to={`${process.env.PUBLIC_URL}/hardware`}>HARDWARE</NavLink></div>
                     <div><NavLink to={`${process.env.PUBLIC_URL}/software`}>SOFTWARE</NavLink></div>
                  </div>
                  <div className='sign-in'>
                     <NavLink
                        to={`${process.env.PUBLIC_URL}/signin`}
                        activeStyle={{
                           color: 'dodgerBlue',
                           textShadow: '0 0 1px black'
                        }}>
                        {
                           (this.props.auth_state) ?
                              'Dashboard'
                              :
                              'Sign In'
                        }
                     </NavLink>
                  </div>

                  <div className={(this.state.nav_expand && window.innerWidth < 600) ? 'container change' : 'container'} onClick={this.nav_slide}>
                     <div className="bar1"></div>
                     <div className="bar2"></div>
                     <div className="bar3"></div>
                  </div>

               </div>

               <Suspense fallback={<div>Loading..</div>}>
                  {
                     (this.state.nav_expand) ?
                        <Nav_div expander={this.nav_slide} />
                        :
                        null
                  }
                  <Switch>

                     <Route path={`${process.env.PUBLIC_URL}/`} exact>
                        <Home />
                     </Route>

                     <Route path={`${process.env.PUBLIC_URL}/about`} exact>
                        {
                           (this.props.auth_state) ?
                              <About />
                              :
                              <Redirect to={`${process.env.PUBLIC_URL}/signin`} />
                        }
                     </Route>

                     <Route path={`${process.env.PUBLIC_URL}/hardware`} exact>
                        {
                           (this.props.auth_state) ?
                              <Hardware />
                              :
                              <Redirect to={`${process.env.PUBLIC_URL}/signin`} />
                        }
                     </Route>

                     <Route path={`${process.env.PUBLIC_URL}/software`} exact>
                        {
                           (this.props.auth_state) ?
                              <Software />
                              :
                              <Redirect to={`${process.env.PUBLIC_URL}/signin`} />
                        }
                     </Route>

                     <Route path={`${process.env.PUBLIC_URL}/signin`} exact>
                        <Signin />
                     </Route>

                     <Route render={() => <Missing />} />

                  </Switch>
               </Suspense>
            </Router>
         </div>
      );
   }
}

const mapStateToProps = allState => {
   return {
      auth_state: allState.auth,
      nav_state: allState.nav
   }
}

const mapDispatchToProps = dispatch => {
   return {
      show_small_nav: () => dispatch({ type: 'OPEN_NAV' }),
      hide_small_nav: () => dispatch({ type: 'CLOSE_NAV' })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
