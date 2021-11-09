import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUserSecret } from 'react-icons/fa';
import './../Styles/Register.css';
import { Form, Card, Button, Row, Col, Alert } from "react-bootstrap";
import Navbar from './Navbar';
import React from 'react';
function Home() {
  const [information, getInformation] = useState([]);
  const [profile, getProfile] = useState([]);


  useEffect(() => {
    getAllInformation();
    getProfilePic();
  }, []);


  const getAllInformation = () => {
    axios.get(`http://localhost:3001/login/:${information.name}`)
      .then((response) => {
        console.log(response);
        const myInfo = response.data;
        getInformation(myInfo);
      })
  }
  const getProfilePic = () =>{
    axios.get('http://localhost:3001/register')
    .then((response) => {
      console.log(response);
      const myInfo = response.data;
      getProfile(myInfo);
    })
  }
  const displayData = () => {
    return information ? (
      information.map((information) => {
        return (
          <div >
            <div>
              <h2>
                Welcome Back {information.name}
              </h2>
            </div>
          <div className="form-style-8">
            <Card>
              <Form>
                <Form.Label>
                  Name
                </Form.Label>
                <Form.Control name="name"
                  placeholder="Name"
                  value={information.name}
                  disabled
                />
                <br>
                </br>
                <Form.Control name="course"
                  placeholder="Course"
                  value={information.course}
                  disabled
                />
                <br>
                </br>
                <Form.Control name="name"
                  placeholder="Year"
                  value={information.year}
                  disabled
                />
    
                <br>
                </br>
                <Form.Control name="name"
                  placeholder="More info"
                  value={information.info}
                  disabled />
                <br>
                </br>
              </Form>
            </Card>
          </div>
          </div>
        );
      })
    ) : (
      <h3>No data yet</h3>
    );
  }
  const displayProfilePic = () =>{
    return profile ? (
      profile.map((profile)=>{
        return (
          <div>
            <h2>
              Profile Pic: {profile.Image}
            </h2>
          </div>
       );
      })
    ) : (
      <h3>No data yet</h3>
    );
  }

  return (
    <div id="login-page">
      <Navbar />

      <div >
        {displayProfilePic()}
        {displayData()}
      </div>
    </div>
  );
}

export default Home;