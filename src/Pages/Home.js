import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUserSecret } from 'react-icons/fa';
import './../Styles/Register.css';
import Navbar from './Navbar';
import React from 'react';
function Home() {
    const [information, getInformation] = useState([]);

    
    useEffect(() => {
        getAllInformation();
    }, []);


    const getAllInformation = () => {
        axios.get('http://localhost:3001/register')
            .then((response) => {
                console.log(response);
                const myInfo = response.data;
                getInformation(myInfo);
            })
    }
    const displayData = () => {
        return information ? (
            information.map((information) => {
            return (
              <div className="information" key={information.name}>
                <h3>{information.name}</h3>
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
        <h1>
            Here is the Home Page
        </h1>
        <div>
            {displayData()}
       </div>

    </div>
);
}

export default Home;