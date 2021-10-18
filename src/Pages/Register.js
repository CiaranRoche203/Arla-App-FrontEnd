import gmitlogo from './../Images/gmitlogo.jpg'
import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Navbar';

function Register() {
    // email and password registration
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    //using axios to identify the credentials
    axios.defaults.withCredentials = true;
    //register function
    //post method to post the data
    //sample data for the moment while backend is developed
    const register = () => {
        axios.post('http://localhost:3001/register', {
            email: emailReg, password: passwordReg
        })
            .then((response) => {
                console.log(response)
            });
    }

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
                        <h2>Account Registration</h2>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                //method in here
                                onChange={(e) => {
                                    setEmailReg(e.target.value)
                                }}
                                type="email" name="email" id="email" />
                        </Form.Group>
                        <br>
                        </br>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                //method in here
                                onChange={(e) => {
                                    setPasswordReg(e.target.value)
                                }}
                                type="password" name="password"  id="password" />
                        </Form.Group>
                        <br>
                        </br>

                        <Button
                        //method in here 
                        onClick={register}
                        >
                            Proceed
                        </Button>
                    </Form>
                </Card>
                </div>
        </div>

    );
}

export default Register;