import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { useDispatch } from 'react-redux';
let firebase = require('firebase/app');

const Dashboard = () => {
   const dispatch = useDispatch();

   // let currentUser = firebase.auth().currentUser;

   let [pimg_url, set_pimg_url] = useState(require('../../assets/dummy_img.png'));
   let [user_name, set_user_name] = useState('n/a');

   // useEffect(() => {
   //    if (currentUser.emailVerified) {
   //       set_status_color({ backgroundColor: 'green' });
   //       set_status('Verified');
   //    } else {
   //       set_status_color({ backgroundColor: 'brown' });
   //       set_status('Not Verified');
   //    }
   // });

   firebase.auth().onAuthStateChanged((currentUser) => {
      (currentUser.photoURL) ? set_pimg_url(currentUser.photoURL) : console.log('No photo url.');
      (currentUser.displayName) ? set_user_name(currentUser.displayName): console.log('No user name.');
   });

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

   const send_email = () => {
      firebase.auth().currentUser.sendEmailVerification()
         .then(() => {
            alert('Verification email sent to: ' + firebase.auth().currentUser.email);
         })
         .catch(err => alert(err));
   }

   return (
      <div id='dashboard'>
         <h1><u>Profile</u></h1>
         <br />
         <div className='dashboard-img-wrap'>
            <img className='profile-img' src={pimg_url} alt='Profile Photo' />
         </div>
         <br />
         <div className='dashboard-status-wrap'>
            <div>Email Verification Status</div>
            {
               (firebase.auth().currentUser.emailVerified) ?
                  <div className='email-status' style={{ backgroundColor: 'green' }}>Verified</div>
                  :
                  <div className='email-status'>
                     <div style={{ backgroundColor: 'brown' }}>Not Verified</div>
                     <button onClick={send_email}>Send Verification Email</button>
                  </div>
            }
         </div>
         <br />
         <div className='dashboard-status-wrap'>
            <div>EMAIL</div>
            <div style={{backgroundColor: 'green'}}>{firebase.auth().currentUser.email}</div>
         </div>
         <br />
         <div className='dashboard-status-wrap'>
            <div>NAME</div>
            <div style={{backgroundColor: 'green'}}>{user_name}</div>
         </div>
         <br />
         <button className='logout-button' onClick={sign_out}>Log Out</button>
         <br />
         <br />
      </div>
   );
}

export default Dashboard;