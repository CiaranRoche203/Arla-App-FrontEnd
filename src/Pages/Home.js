import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUserSecret } from 'react-icons/fa';
import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert, Container } from "react-bootstrap";
import Navbar from './Navbar';
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
function Home() {
  const [information, getInformation] = useState([]);
  const [profile, getProfile] = useState([]);

  var course = []
  var country = []
 var course_year = []
 var interest = []

  useEffect(() => {
    getAllInformation();
    //getProfilePic();
  }, []);


  const getAllInformation = () => {
    axios.get(`http://localhost:3001/people/all/Ciaran`)
      .then((response) => {
        console.log(response);
        const myInfo = response.data;
        course = myInfo.course
        country = myInfo.country
        course_year = myInfo.course_Year
        interest = myInfo.interest
        console.log(course, country, course_year, interest)
        getInformation(myInfo);
      })
  }

  const editProfile = () => {
    console.log("Editing Profile")
    window.location.href = '/edit'

  }



  /*const getProfilePic = () => {
    axios.get('http://localhost:3001/people')
      .then((response) => {
        console.log(response);
        const myInfo = response.data;
        getProfile(myInfo);
      })
  }*/
 
  /*const displayProfilePic = () => {
    return profile ? (
      profile.map((profile) => {
        return (
          <div id="header" >
            <h2>
              Welcome:
              <br></br>
              {profile.Name}
            </h2>
              <img class="image-test" src={profile.Token} alt="cannot display">

              </img>
  

          </div>
        );
      })
    ) : (
      <h3>No data yet</h3>
    );
  }*/

  return (

    <div id="login-page">
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
      <Navbar />
    
            <Card >
              <Form id="loginForm">
                <Form.Group>
                <Form.Label>
                  Course
                </Form.Label>
                <Form.Control name="course"
                  placeholder="Course"
                  value={information.course}
                  style={{ height: 60, fontSize: 24 }}
                  disabled


                />

                <br>
                </br>
                <Form.Label>
                  Country
                </Form.Label>
                <Form.Control name="country"
                  placeholder="country"
                  value={information.country}
                  style={{ height: 60, fontSize: 24 }}
                  disabled


                  
                />
                <br>
                </br>
                <Form.Label>
                  Year(s)
                </Form.Label>
                <Form.Control name="year"
                  placeholder="year"
                  value={information.course_Year}
                  style={{ height: 60, fontSize: 24 }}
                  disabled


                />
                <br>
                </br>
                <Form.Label>
                  Year(s)
                </Form.Label>
                <Form.Control name="interest"
                  placeholder="interest"
                  value={information.interest}
                  style={{ height: 60, fontSize: 24 }}
                  disabled

                />
                
                </Form.Group>
                <Button
                onClick={editProfile}>
  Edit Profile
</Button>
              </Form>



            </Card>

    

      </div>
  );
}

export default Home;