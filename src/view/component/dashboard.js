import React, { useEffect, useState, useRef } from 'react';
import './dashboard.css';
import { useDispatch } from 'react-redux';
let firebase = require('firebase/app');

const Dashboard = () => {
   const dispatch = useDispatch();

   const url_input_field = useRef(null);

   let [pimg_url, set_pimg_url] = useState(require('../../assets/dummy_img.png'));
   let [user_name, set_user_name] = useState('n/a');
   let [img_setting, set_img_setting] = useState('none');
   let [input_url, set_input_url] = useState(null);

   firebase.auth().onAuthStateChanged((currentUser) => {
      (currentUser.photoURL) ? set_pimg_url(currentUser.photoURL) : console.log('No photo url.');
      (currentUser.displayName) ? set_user_name(currentUser.displayName) : console.log('No user name.');
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

   const input_url_handler = (e) => {
      set_input_url(e.target.value);
   }

   const open_change_img = () => {
      set_img_setting('flex');
      url_input_field.current.value = pimg_url;
      console.log('Current Url: ' + pimg_url);
   }

   const close_change_img = () => {
      url_input_field.current.value = pimg_url;
      set_img_setting('none');
   }

   const confirm_img_url = () => {
      firebase.auth().currentUser.updateProfile({
         photoURL: input_url
      })
         .then(() => {
            alert('Successfully updated image URL.');
         })
         .then(()=> set_img_setting('none'))
         .catch(err => alert(err));
   }

   return (
      <div id='dashboard'>
         <div className='change-img-setting' style={{ display: img_setting }}>
            <div className='img-setting-title'>Change your profile image URL (200 x 200)</div>
            {/* <div className='current-url'>{pimg_url}</div> */}
            <input type='text' placeholder='Profile Image URL' onChange={input_url_handler} ref={url_input_field} />
            <button onClick={confirm_img_url}>Confirm</button>
            <button onClick={close_change_img}>Cancel</button>
         </div>
         <h1><u>Profile</u></h1>
         <br />
         <div className='dashboard-img-wrap'>
            <img className='profile-img' onClick={open_change_img} src={pimg_url} alt='Profile Photo' draggable='false' />
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
            <div style={{ backgroundColor: 'green' }}>{firebase.auth().currentUser.email}</div>
         </div>
         <br />
         <div className='dashboard-status-wrap'>
            <div>NAME</div>
            <div style={{ backgroundColor: 'green' }}>{user_name}</div>
         </div>
         <br />
         <button className='logout-button' onClick={sign_out}>Log Out</button>
         <br />
         <br />
      </div>
   );
}

export default Dashboard;