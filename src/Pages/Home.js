import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUserSecret } from 'react-icons/fa';

import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert, Container } from "react-bootstrap";
import Navbar from './Navbar';
import React from 'react';
import 'bootstrap';
import gmitlogo from './../Images/gmitlogo.png'
import gmit from './../Images/gmit.jpg'

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
  let userImage = sessionStorage.getItem("userPic")

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
    window.location.href = '/register'

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

  // for purposes of display and design i have stored the users google profile pic in session storage
  // and display it as an image
  const displayProfilePic = () => {
    return (
      <div id="header" >
        <img class="image-test" src={userImage} alt="cannot display">

        </img>


      </div>
    );
  }

  //in return display the data on a card and display the unique information that is set to the user in the backend
  return (

    <div id="login-page" >
      <Navbar />
      <div class="container">
        <h1>Hover here!</h1>

        <div class="cardy">

          <div class="front">

            <img src={gmitlogo}></img>
            <div class="logo"><span></span></div>

          </div>
          <div class="back">
            {displayProfilePic()}
            <h1>{information.people}
              <span>{information.course}</span>
            </h1>
            <br>
            </br>
            <h3>
              Where you are
            </h3>
            <h2>
              {information.country}
            </h2>
            <br>
            </br>
            <br>
            </br>
            <h3>
              Interests
            </h3>
            <h2>
              {information.interest}
            </h2>
            <br>
            </br>
            <br>
            </br>
            <h3>
              Biography
            </h3>
            <h2>
              {information.bio}
            </h2>


          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;