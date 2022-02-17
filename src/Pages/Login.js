import gmitlogo from './../Images/gmitlogo.png'
import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert } from "react-bootstrap";
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Navbar';
import { GoogleLogin } from 'react-google-login';
import Auth from './Auth';

function Login() {
    const onSuccess = (res) => {
        const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,


        };
        console.log('Login Success')
        console.log(googleresponse)
        Auth.authenticate();
        axios.post('http://localhost:3001/people', googleresponse)
       

            .then((result) => {
                let responseJson = result;
                console.log(googleresponse.token)
                sessionStorage.setItem("userData", googleresponse.token);

            });
    };

    const onFailure = (res) => {
        console.log('Login Failed');
    };


    return (
        <div id="login-page">
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
            <Navbar />
            <h1>
                <img src={gmitlogo}></img>
            </h1>
            <br></br>
            <br></br>
            <div class="form-style-6">

                <Card>
                    <Form id="loginForm">
                        <h2>Login or Sign Up</h2>
                        <Form.Group >
                            <GoogleLogin

                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText="Login With Google"
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}

                            />
                        </Form.Group>
                    </Form>
                </Card>
            </div>
        </div>

    );
}

export default Login;