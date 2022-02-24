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

  const onSuccess = () => {
    alert('Logged out')
    localStorage.clear() //clear storage so no user is stored in the session
    //redirect user to the home page, which is protected, so will redirect to login page
    window.location.href = '/';
  }
  //what is displayed
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            {// onclick the sidebar is displayed
            }
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        {
          // the action of moving and displaying the navbar on the screen
        }
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {
              //mapthe data calling the sidebardata function
              // displays the list of items declared in sidebar data
            }
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
            {
              //log the user out of the application
            }
            <li className="nav-text">
              <Link className='nav-text'>
                <GoogleLogout
                  theme='dark'
                  icon={true}
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Logout"
                  onLogoutSuccess={onSuccess}>
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