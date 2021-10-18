import gmitlogo from './../Images/gmitlogo.jpg'
import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Navbar';

function Login() {

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
                        <h2>Account Login</h2>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                //method in here
                                type="email" name="email" id="email" />
                        </Form.Group>
                        <br>
                        </br>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                //method in here
                                type="password" name="password"  id="password" />
                        </Form.Group>
                        <br>
                        </br>

                        <Button
                        //method in here 
                        >
                            Proceed
                        </Button>
                    </Form>
                </Card>
                </div>
        </div>

    );
}

export default Login;