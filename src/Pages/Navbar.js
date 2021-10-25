import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './../Styles/Navbar.css';
import { IconContext } from 'react-icons';
import { IoIosConstruct, IoIosLogOut } from 'react-icons/io';
import { GoogleLogout } from 'react-google-login';

//navbar function
function Navbar() {
  //set the states
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    //logout function to clear storage
    
      const onSuccess =() =>{
        alert('Logged out')
        localStorage.clear()
        //need to adjust this there is an error if someone clicks the logout button when already logged out
        window.location.href='/';
  }
  //what is displayed
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li className="nav-text">
              <Link className='nav-text'>
                <GoogleLogout
                clientId = {process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess = {onSuccess}>
                </GoogleLogout>
              
            </Link>
            </li>
            </ul>
            
          </nav>
        </IconContext.Provider>
      </>
    );
  }
  
  export default Navbar;