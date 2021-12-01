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

    // add to backend neo4j
    const addCourse = () => {
        axios.post(`http://localhost:3001/course`, {
            name: courseReg, year: yearReg

        })
            .then((response) => {
                console.log(response)
            });

    }

    //not working ignore this while i find a solution
    const addInterest = () => {
        console.log(fields[0])
        //var params = JSON.stringify(fields)

        //console.log(params)
        axios.post(`http://localhost:3001/interest`, {
            fields: fields

        })
            .then((response) => {
                console.log("passing to backend", response)
            });

    }
    const addCountry = () => {
        console.log(value)
        axios.post(`http://localhost:3001/country`, {
            name: value.label

        })
            .then((response) => {
                console.log("passing to backend", response)
            });

    }

    //create relationships in neo4j
    //need to fix interest post first
    const addRelationships1 = () => {
        axios.post(`http://localhost:3001/people/interest/:${nameReg}`, {
            name: nameReg, interest: fields


        })
            .then((response) => {
                console.log(response)
            });

    }
    const addRelationships2 = () => {
        console.log(courseReg)
        axios.post(`http://localhost:3001/people/course/:${nameReg}`, {
            name: nameReg, course: courseReg
        })
            .then((response) => {
                console.log(response)
            });

    }
    const addRelationships3 = () => {
        axios.post(`http://localhost:3001/people/country/:${nameReg}`, {
            name: nameReg, country: value.label


        })
            .then((response) => {
                console.log(response)
            });

    }



    //display
    return (
        <div id="login-page3">

            <div className="">

            
            <Card className="w-25 mx-auto mb-4 text-center" >
                <Form>
                    <Form.Group>
                    <h1>Name</h1>
                        <Form.Control class="form-control form-control-lg"
                            onChange={(e) => {
                                setNameReg(e.target.value)
                            }}
                            type="name" name="name" id="name" placeholder="Enter Name..." >

                        </Form.Control>
                        <br>
                        </br>
                    </Form.Group>
                    <Button class="btn-success btn-lg"
                        //method in here 
                        onClick={addDetails}
                    >

                        Add name to your profile
                    </Button>
                </Form>
            </Card>
            <br>
            </br>
            <Card className="w-25 mx-auto mb-4 text-center">

                <Form >

                    <Form.Group>
                        <h1>Course</h1>
                       
                        <Form.Control class="form-control form-control-lg"
                            onChange={(e) => {
                                setCourseReg(e.target.value)
                            }}
                            name="course" id="course" placeholder="Enter Course..." >

                        </Form.Control>
                        <h1>Graduate Year</h1>
                        
                        <Form.Control class="form-control form-control-lg"
                            onChange={(e) => {
                                setYearReg(e.target.value)
                            }}
                            name="year" id="year" placeholder="Enter Year..." >

                        </Form.Control>
                    </Form.Group>
                    <br>
                    </br>
                    <Button class="btn-success btn-lg"
                        //method in here 
                        onClick={addCourse}
                    >

                        Add course to your profile
                    </Button>
                </Form>
            </Card>
            
            <br>
            </br>

            <Card className="w-25 mx-auto mb-4 text-center">
                <Form>
                    <Form.Group>
                        <h1>Where are you now?</h1>
                        <br>
                        </br>
                        <Select  options={options} value={value} onChange={changeHandler} />
                    </Form.Group>
                    <br>
                    </br>
                    <Button class="btn-success btn-lg"
                        //method in here 
                        onClick={addCountry}
                    >

                        Add country to your profile
                    </Button>

                </Form>
            </Card >
            <br>
            </br>
            <Card className="w-25 mx-auto mb-4 text-center">

                <Form>

                    <Form.Group>
                    <h1>Interests and Hobbies</h1>
                        <Button class="btn-dark btn-lg" onClick={() => handleAdd()}>Add Another Interest

                        </Button>
                        {fields.map((field, idx) => {
                            return (
                                <div key={`${field}-${idx}`}>
                                    <br></br>
                                    <Form.Control class="form-control form-control-lg"
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
                    <Button class="btn-success btn-lg"
                        //method in here 
                        onClick={addInterest}
                    >

                        Add interest(s) to profile
                    </Button>

                </Form>
            </Card>
            <br>
            </br>
            <br>
            </br>
            <Card className="w-25 mx-auto mb-4 text-center">

                <Form>
                    <Form.Group>
                    <h1>Some more info about you!</h1>
                        <br>
                        </br>
                        <Form.Control
                            onChange={(e) => {
                                setInfoReg(e.target.value)
                            }} as="textarea" rows={3} />
                    </Form.Group>

                </Form>
                <Button class="btn-success btn-lg"
                        //method in here 
                        onClick={addRelationships2}
                    >

                        Create Profile
                    </Button>

            </Card>
            </div>
        </div>





    );
}

export default Register;