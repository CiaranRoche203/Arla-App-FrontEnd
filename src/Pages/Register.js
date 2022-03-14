import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert } from "react-bootstrap";
import { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Navbar from './Navbar';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import Carousel from 'react-bootstrap/Carousel'
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

    // interests
    const [fields, setFields] = useState([{ value: null }]);

    //finding the details of the logged in user
    let userLogged = sessionStorage.getItem("userData")

    // handle the selections of interests and country
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

    //post the details to the backend of the user that is logged in
    const addDetails = () => {
        axios.put(`http://localhost:3001/people/:${userLogged}`, {
            token: userLogged, name: nameReg, bio: infoReg

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
    //post country to the backend
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
    const addInterestRelationships = () => {
        axios.post(`http://localhost:3001/people/interest/:${userLogged}`, {
            name: userLogged, interest: fields


        })
            .then((response) => {
                console.log(response)
            });

    }
    //creating relationship between course and person
    //post to backend to handle it
    const addCourseRelationship = () => {
        console.log(courseReg)
        axios.post(`http://localhost:3001/people/course/:${userLogged}`, {
            name: userLogged, course: courseReg
        })
            .then((response) => {
                console.log(response)
            });

    }
    ////creating relationship between country and person
    const addCountryRelationship = () => {
        axios.post(`http://localhost:3001/people/country/:${userLogged}`, {
            name: userLogged, country: value.label


        })
            .then((response) => {
                console.log(response)
            });

    }

    //display
    return (
        <div id="home-page">
            
            <Navbar />
            <div className="center">
                <Carousel interval={null}>
                    <Carousel.Item >
                        <Card className="w-2 mx-auto mb-4 text-center RegisterCard" >
                            <Form>
                                <Form.Group>
                                    <h1>Name</h1>
                                    <br></br>
                                    <Form.Control className="form-control form-control-lg w-50 mx-auto mb-4 text-center"
                                        onChange={(e) => {
                                            setNameReg(e.target.value)
                                        }}
                                        type="name" name="name" id="name" placeholder="Enter Name..." >

                                    </Form.Control>
                                  
                                    <h1>Biography</h1>
                                    <br>
                                    </br>
                                    <Form.Control className="form-control form-control-lg w-75 mx-auto mb-4 text-center"
                                        onChange={(e) => {
                                            setInfoReg(e.target.value)
                                        }} as="textarea" rows={3} />
                                </Form.Group>
                                <Button className="btn btn-success btn-lg"
                                    //method in here 
                                    onClick={addDetails}
                                >

                                    Add name to your profile
                                </Button>


                            </Form>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Card className="w-2 mx-auto mb-4 text-center RegisterCard" >

                            <Form >

                                <Form.Group>
                                    <h1>Course</h1>

                                    <Form.Control className="form-control form-control-lg w-50 mx-auto mb-4 text-center"
                                        onChange={(e) => {
                                            setCourseReg(e.target.value)
                                        }}
                                        name="course" id="course" placeholder="Enter Course..." >

                                    </Form.Control>
                                    <h1>Graduate Year</h1>

                                    <Form.Control className="form-control form-control-lg w-50 mx-auto mb-4 text-center"
                                        onChange={(e) => {
                                            setYearReg(e.target.value)
                                        }}
                                        name="year" id="year" placeholder="Enter Year..." >

                                    </Form.Control>
                                </Form.Group>
                                <br>
                                </br>
                                <Button className="btn btn-success btn-lg"
                                    //method in here 
                                    onClick={addCourse}
                                >

                                    Add course to your profile
                                </Button>
                                <br></br>
                                <br></br>

                                <Button className="btn btn-dark btn-lg"
                                    //method in here 
                                    onClick={addCourseRelationship}
                                >

                                    Create Link to Course
                                </Button>
                            </Form>

                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Card className="w-2 mx-auto mb-4 text-center RegisterCard" >
                            <Form>
                                <Form.Group >
                                    <h1>Where are you now?</h1>
                                    <br>
                                    </br>
                                    <Select className="form-control form-control-lg w-75 mx-auto mb-4 text-center" options={options} value={value} onChange={changeHandler} />
                                </Form.Group>
                                <br>
                                </br>
                                <Button className="btn btn-success btn-lg"
                                    //method in here 
                                    onClick={addCountry}
                                >

                                    Add country to your profile
                                </Button>
                                <br></br>
                                <br></br>
                                <Button className="btn btn-dark btn-lg"
                                    //method in here 
                                    onClick={addCountryRelationship}
                                >

                                    Create a Link to Country
                                </Button>
                            </Form>

                        </Card >
                    </Carousel.Item>

                    <Carousel.Item>
                    <Card className="w-2 mx-auto mb-4 text-center RegisterCard" >

                            <Form>

                                <Form.Group>
                                    <h1>Interests and Hobbies</h1>
                                    <br></br>
                                    <br></br>
                                    <Button className="btn btn-light btn-lg" onClick={() => handleAdd()}>Add Another Interest

                                    </Button>
                                    {fields.map((field, idx) => {
                                        return (
                                            <div key={`${field}-${idx}`}>
                                                <br></br>
                                                <Form.Control className="form-control form-control-lg w-75 mx-auto mb-4 text-center"
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
                                <br>
                                </br>
                                <Button className="btn btn-success btn-lg"
                                    //method in here 
                                    onClick={addInterest}
                                >

                                    Add Interest(s) to Profile
                                </Button>
                                <br></br>
                                <br></br>
                                <Button className="btn btn-dark btn-lg"
                                //method in here 
                                onClick={addInterestRelationships}
                            //href="/"
                            >

                                Create a link To Interest(s)
                            </Button>

                            </Form>

                        </Card>
                    </Carousel.Item>

                   
                </Carousel>


            </div>
        </div>





    );
}

export default Register;