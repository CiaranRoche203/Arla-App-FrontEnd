import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUserSecret } from 'react-icons/fa';
import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert, Container } from "react-bootstrap";
import Navbar from './Navbar';
import React from 'react';
import 'bootstrap';
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

// change to unique token
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
      <Navbar />
      <Container className="">
        <Row className="justify-center">
          <Col>
            <h2 className="mt-3 text-center">Welcome Profile Here</h2>

            <div className="text-center">
              <h2> Name</h2>
            </div>
          </Col>
          <Col>
            <Card className="w-75 mx-auto mb-4 text-left">
              <Card.Img style={{ maxHeight: "7rem", objectFit: "cover" }} src=""></Card.Img>

              <Card.Body>
                <Card.Title>Name (Waiting for users backend)</Card.Title>
                <br></br>
                <br></br>
                <Card.Subtitle value={information.course}
                  style={{ height: 60, fontSize: 24 }}>Course: <br></br> {information.course}</Card.Subtitle>
                <br></br>
                <br></br>
                <Card.Subtitle value={information.interest}
                  style={{ height: 60, fontSize: 24 }}>Interests: {information.interest}</Card.Subtitle>
                <br></br>
                <Card.Subtitle value={information.country}
                  style={{ height: 60, fontSize: 24 }}>Where you are now: {information.country}</Card.Subtitle>

                <Card.Text className="mt-3" //value={information.bio}
                  style={{ height: 60, fontSize: 24 }}>Bio (users)</Card.Text>
              </Card.Body>

              <Card.Footer className="text-left text-muted" //value={information.course_Year}
                style={{ height: 60, fontSize: 24 }}>Year (fix)</Card.Footer>
              <Button
                onClick={editProfile}
              >
                Edit Profile
              </Button>
            </Card>


          </Col>


        </Row>
      </Container>



    </div>
  );
}

export default Home;