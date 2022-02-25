import React from "react"

import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'

import firebase from "firebase/compat/app"

import { auth } from "./firebase"
import './../Styles/Register.css';
export default function MessengerLogin() {

  return (
    <div id='chats-page'>
     
        <h2>Welcome to Unichat!</h2>

        <div
          className='login-button google'
          onClick={() =>
           
             auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider(), 
            )}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br/><br/>

    </div>
  )
}