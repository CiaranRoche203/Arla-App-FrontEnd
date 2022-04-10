import React from "react"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import firebase from "firebase/compat/app"
import Navbar from './Navbar';
import { auth } from "./firebase"
import './../Styles/Register.css';
export default function MessengerLogin() {
//redirect to messenger page
  const checkLogin = () => {
    window.location.href = '/messenger'
  }
  return (
    <div id="login-page">
      <Navbar />
      <div id='login-card'>

        <h2>Welcome to ARLA Messenger!</h2>
        <br>
        </br>
        <div
          className='login-button google'
          onClick={() =>
            //use auth from firebase to sign in
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider(),
            checkLogin()
            )}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br /><br />

      </div>
    </div>
  )
}