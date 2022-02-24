import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUserSecret } from 'react-icons/fa';
import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert, Container } from "react-bootstrap";
import Navbar from './Navbar';
import React from 'react';
import 'bootstrap';
function Home() {
  // use state
  const [information, getInformation] = useState([]);
  const [profile, getProfile] = useState([]);

  // setting empty arrays to store data in
  var course = []
  var country = []
  var course_year = []
  var interest = []
  var people_name = []

  // get the user who is logged in from the session
  let userLogged = sessionStorage.getItem("userData")

  // use effect to get the information
  useEffect(() => {
    getAllInformation();
    //getProfilePic();
  }, []);

  // get information using axios and the user sessions token 
  const getAllInformation = () => {
    axios.get(`http://localhost:3001/people/all/${userLogged}`)
      .then((response) => {
        console.log("here is the info", response);
        //setting the data to myInfo and the individual pieces of data from the response to the arrays declared above
        const myInfo = response.data;
        console.log(myInfo.people)
        people_name = myInfo.people
        course = myInfo.course
        country = myInfo.country
        course_year = myInfo.course_Year
        interest = myInfo.interest
        console.log(course, country, course_year, interest, people_name)
        getInformation(myInfo);
        //console.log("showing who is logged in: ", sessionStorage.getItem("userData"))

        console.log("User logged in as: ", userLogged)
      })
  }

  //edit profile page link
  const editProfile = () => {
    console.log("Editing Profile")
    window.location.href = '/edit'

  }

  /***
   * Created a fucntion to get a profile pic and display it but there were complications on both ends
   * of the backend and the front end so we abandoned implemnetation
   *  until the very end of development if we had time then
   */
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

  //in return display the data on a card and display the unique information that is set to the user in the backend
  return (

    <div id="login-page">
      <Navbar />
      <Container className="">
        <Row className="justify-center">
          <Col>
            <h2 className="mt-3 text-center">Welcome Profile of:</h2>

            <div className="text-center">
              <h2> {information.people}</h2>
            </div>
          </Col>
          <Col>
            <Card className="w-75 mx-auto mb-4 text-left">
              <Card.Img style={{ maxHeight: "7rem", objectFit: "cover" }} src=""></Card.Img>

              <Card.Body>
                <Card.Title value={information.people_name}>Name: <br></br> {information.people}</Card.Title>
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

              </Card.Body>
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