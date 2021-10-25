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
        console.log('Login Success')
        Auth.authenticate();

    };

    const onFailure = (res) => {
        console.log('Login Failed');
    };
    return (
        <div id="login-page">
            <Navbar />
            <h1>
                <img src={gmitlogo}></img>
            </h1>
            <br></br>
            <br></br>
            <div class="form-style-6">

                <Card>
                    <Form id="loginForm">
                        <h2>Login</h2>

                        <Form.Group>
                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText="Login"
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}

                            />
                        </Form.Group>
                        <br>
                        </br>
                        <Form.Group>
                            <Form.Label>Login With Facebook</Form.Label>
                            <br>
                            </br>
                            <Button>
                                <FacebookOutlined />
                            </Button>
                        </Form.Group>
                        <br>
                        </br>
                    </Form>
                </Card>
            </div>
        </div>

    );
}

export default Login;