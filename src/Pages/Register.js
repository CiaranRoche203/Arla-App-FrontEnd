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
    const [infoReg, setInfoReg] = useState("")

    //country list
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const [fields, setFields] = useState([{ value: null }]);

    function handleChange(i, event) {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    }
    function handleAdd() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }


    //function to set the country
    const changeHandler = value => {
        setValue(value)
    }

    //post the details to the backend
    const addDetails = () => {
        axios.post('http://localhost:3001/people', {
            name: nameReg, bio: infoReg

        })
            .then((response) => {
                console.log(response)
            });
        
    }
    const addRelationships1 = () => {
        console.log(nameReg, courseReg)
        axios.post(`http://localhost:3001/people/interest/:${nameReg}`, {
            name: nameReg, interest: fields
           

        })
            .then((response) => {
                console.log(response)
            });
        
    }

     const addCourse = () => {
        axios.post(`http://localhost:3001/course`, {
            name: courseReg

        })
            .then((response) => {
                console.log(response)
            });
        
    }
    const addRelationships2 = () => {
        console.log(nameReg, courseReg)
        axios.post(`http://localhost:3001/people/course/:${nameReg}`, {
            name: nameReg, course: courseReg
           

        })
            .then((response) => {
                console.log(response)
            });
        
    }


    //display
    return (
        <div id="login-page">
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
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
                        <Button
                            //method in here 
                            onClick={addDetails}
                            >
          
                            Add name
                        </Button>
                        
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
                        <Button
                            //method in here 
                            onClick={addCourse}
                            >
          
                            Add course
                        </Button>
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



                        <Form.Group>
                            <Form.Label> More Interests</Form.Label>
                            <Button onClick={() => handleAdd()}>Add

                            </Button>
                            {fields.map((field, idx) => {
                                return (
                                    <div key={`${field}-${idx}`}>
                                        <br></br>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Interests"
                                            value={field.value || ""}
                                            onChange={e => handleChange(idx, e)}
                                        />
                                    </div>);
                            })}
                        </Form.Group>


                        <br>
                        </br>
                        <Form.Group>
                            <Form.Label>More info about you</Form.Label>
                            <br>
                            </br>
                            <Form.Control
                                onChange={(e) => {
                                    setInfoReg(e.target.value)
                                }} as="textarea" rows={3} />
                        </Form.Group>

                       

                        <Button
                            //method in here 
                            onClick={addRelationships1, addRelationships2}
                            >
          
                            Create Profile
                        </Button>

                    </Form>


                </Card>

            </div>

        </div>



    );
}

export default Register;