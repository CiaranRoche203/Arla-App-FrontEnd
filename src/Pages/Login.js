import gmitlogo from './../Images/gmitlogo.png'
import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert } from "react-bootstrap";
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Navbar';
import { GoogleLogin } from 'react-google-login';
import Auth from './Auth';
import GoogleButton from 'react-google-button'
import firebase from "firebase/compat/app"

import { auth } from "./firebase"
//Login function
function Login() {
    //on a successful login set the name, email, token and image
    const onSuccess = (res) => {
        const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
        };

        console.log('Login Success')
        console.log(googleresponse)

        // call the authenticate function from Auth
        Auth.authenticate();
        //post the details to backend server
        axios.post('http://localhost:3001/people', googleresponse)
            .then((result) => {
                let responseJson = result;
                console.log(googleresponse.token)
                //access the rest of the protected routes by checking the session storage and getting the token
                // this will return unique data to the user
                sessionStorage.setItem("userData", googleresponse.token);
                sessionStorage.setItem("userPic", googleresponse.Image);

            });
    };

    //add a response should login fail
    const onFailure = (res) => {
        console.log('Login Failed');
    };
    const checkLogin = () => {
        window.location.href = '/messenger'
    }

    return (
        <div id="login-page">

            <Navbar />
            <h1>
                <img src={gmitlogo}></img>
            </h1>
            <br></br>
            <br></br>
            <div class='row'>
                <div class='column'>
                    <div class="form-style-6a">

                        <Card className="w-200 mx-auto mb-8 text-center bg-dark text-white">
                            <Card.Body>
                                <Card.Title>
                                    Welcome to the ARLA
                                    <br></br>
                                    <br>
                                    </br>
                                </Card.Title>
                                <GoogleLogin
                                    theme='dark'
                                    icon={true}
                                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}

                                    buttonText="Login With Google"
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div class='column'>
                    <div >
                    <h2>Welcome to ARLA Messenger!</h2>
                        <Card className="w-2 mx-auto mb-4 text-center messengercard">
                        
                        <br>
                        </br>
                        <div
                            className='login-button google'
                            onClick={() =>

                                auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider(),
                                    checkLogin()
                                )}
                        >
                            <GoogleOutlined /> Sign In with Google
                        </div>

                        <br /><br />

                        </Card>

                        
                    </div>
                </div>
            </div>


        </div >

    );
}

export default Login;