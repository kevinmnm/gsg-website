import React from 'react';
import './dashboard.css';
import { useDispatch } from 'react-redux';
let firebase = require('firebase/app');

const Dashboard = () => {
   const dispatch = useDispatch();

   const sign_out = () => {
      firebase.auth().signOut()
         .then(() => {
            alert('Singed Out!');
         }).
         then(() => {
            dispatch({
               type: 'LOGGED_OUT'
            });
         })
         .catch((error) => {
            alert(error);
         });
   }

   return (
      <div id='dashboard'>
         <h1>Profile</h1>
         <div className='dashboard-img-wrap'>

         </div>
         <button onClick={sign_out}>Log Out</button>
      </div>
   );
}

export default Dashboard;