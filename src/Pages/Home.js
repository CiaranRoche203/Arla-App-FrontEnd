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
          <div class="form-style-8">
          <div >
            <Card >
            <Form id="loginForm">
              <Form.Group>
                <Form.Label>
                  Name
                </Form.Label>
                <Form.Control name="name"
                  placeholder="Name"
                  value={information.name}
                  disabled
                  style={{height: 60, fontSize: 24}}
                />
                <br>
                </br>
                <Form.Label>
                  Course
                </Form.Label>
                <Form.Control name="course"
                  placeholder="Course"
                  value={information.course}
                  style={{height: 60, fontSize: 24}}
                  disabled
                  
                  
                />
                <br>
                </br>
                <Form.Label>
                  Year Graduated
                </Form.Label>
                <Form.Control name="name"
                  placeholder="Year"
                  value={information.year}
                  style={{height: 60, fontSize: 24}}
                  disabled
                />
    
                <br>
                </br>
                <Form.Label>
                  More Information about you
                </Form.Label>
                <Form.Control name="name"
                  placeholder="More info"
                  value={information.info}
                  style={{height: 60, fontSize: 24}}
                  disabled />
                <br>
                </br>
                <Form.Label>
                  Interests
                </Form.Label>
                <Form.Control name="name"
                  placeholder="Basketball"
                  value={information.fields}
                  style={{height: 60, fontSize: 24}}
                  disabled />
                <br>
                </br>
                </Form.Group>
<Button style={{height: 100, fontSize: 32, backgroundColor:"black", color:"white"}} href="/register">
  Edit your Profile
</Button>
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
          <div  id="header" >
              <h2>
                Welcome:
                <br></br>
                 {profile.Name}
              </h2>
            <h2>
              {//Profile Pic: {profile.Image}
               }
              <img class="image-test" src="https://media.istockphoto.com/photos/beautiful-panoramic-sunset-view-over-the-claddagh-galway-in-galway-picture-id1045814682?k=20&m=1045814682&s=612x612&w=0&h=sz8SItXaXCEpKpDBLZU6uOhLxdC-bxM85157kn49WCQ=">

              </img>
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
     <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
      <Navbar />
      
      <Container id="login-page2">
      
     <Row>
       <Col>
       {displayProfilePic()}
       
      </Col>
     <Col >
    
     {displayData()}
     </Col>
     <Col >
  
     </Col>
     </Row>
     </Container>
    </div>
  );
}

export default Home;