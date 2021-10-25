import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert } from "react-bootstrap";
import { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Navbar from './Navbar';
import Select from 'react-select'
import countryList from 'react-select-country-list'

function Register() {
    
    //set states 
    //name
    const [nameReg, setNameReg] = useState("")
    //course
    const [courseReg, setCourseReg] = useState("")
    //year
    const [yearReg, setYearReg] = useState("")
    //more info
    /*
    *
    *
    */

    //country list
    const[value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    //function to set the country
    const changeHandler = value => {
        setValue(value)
    }

    //post the details to the backend
    const addDetails = () => {
        console.log(nameReg, courseReg, yearReg, value);
        axios.post('http://localhost:3001/register', {
            name: nameReg, course: courseReg, year: yearReg, country: value
        })
        .then((response) => {
            console.log(response)
        });
    }

    //display
    return (
        <div id="login-page">
            <Navbar />
            <div class="form-style-6">
                <Card>
                    <Form id="loginForm">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <br>
                            </br>
                            <Form.Control 
                            onChange={(e) => {
                                setNameReg(e.target.value)
                            }}
                            type="name" name="name" id="name" >

                            </Form.Control>
                        </Form.Group>
                        <br>
                        </br>
                        <Form.Group>
                            <Form.Label>Course</Form.Label>
                            <br>
                            </br>
                            <Form.Control 
                             onChange={(e) => {
                                setCourseReg(e.target.value)
                            }}
                            name="course" id="course" >

                            </Form.Control>
                        </Form.Group>

                        <br>
                        </br>
                        <Form.Group>
                            <Form.Label>Graduate Year</Form.Label>
                            <br>
                            </br>
                            <Form.Control 
                            onChange={(e) => {
                                setYearReg(e.target.value)
                            }}
                            name="year" id="year" >

                            </Form.Control>
                        </Form.Group>

                        <br>
                        </br>
                        <Form.Group>
                            <Form.Label>Where are you now?</Form.Label>
                            <br>
                            </br>
                            <Select options={options} value={value} onChange={changeHandler} />
                        </Form.Group>

                        <br>
                        </br>
                        <Form.Group>
                            <Form.Label>More info about you</Form.Label>
                            <br>
                            </br>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button
                        //method in here 
                        onClick={addDetails}
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