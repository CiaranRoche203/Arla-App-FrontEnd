import gmitlogo from './../Images/gmitlogo.jpg'
import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert } from "react-bootstrap";

function Register() {
    return (
        <div id="login-page">
            <h1>
                <img src={gmitlogo}></img>
            </h1>
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

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                //method in here
                                type="password" name="password" placeholder="hunter2" id="password" />
                        </Form.Group>


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

export default Register;