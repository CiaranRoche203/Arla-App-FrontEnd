import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert } from "react-bootstrap";
import { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Navbar from './Navbar';
import Select from 'react-select'
import countryList from 'react-select-country-list'


function EditProfile() {
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
        axios.put('http://localhost:3001/people/John', {
            name: nameReg, bio: infoReg

        })
            .then((response) => {
                console.log(response)
            });

    }

       
// add to backend neo4j
const removeCourse = () => {
    axios.delete(`http://localhost:3001/course/Johnny`, {
        name: courseReg, year: yearReg

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

            <div className="row">
                <div class="column">


                    <Card >
                        <Form className="form-style-6">
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

                                Edit Name
                            </Button>
                        </Form>
                    </Card>
                    <br>
                    </br>
                    <Card>

                        <Form className="form-style-6">

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
                                onClick={removeCourse}
                            >

                                    Edit Course
                            </Button>
                        </Form>
                    </Card>
                   
                </div>

            </div>

        </div>



    );
}

export default EditProfile;