import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav.js';
import Home from './view/Home.js'

class App extends React.Component {
   render() {
      return (
         <div id='app'>
            <Nav />
            <Home />
         </div>
      );
   }
}

export default App;
