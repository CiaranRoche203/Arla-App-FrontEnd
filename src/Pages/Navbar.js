import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './../Styles/Navbar.css';
import { IconContext } from 'react-icons';
import { IoIosConstruct, IoIosLogOut } from 'react-icons/io';

//navbar function
function Navbar() {
  //set the states
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    //logout function to clear storage
    const logout = ()=>{
      localStorage.clear()
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
              <Link className='nav-text' onClick={() =>{
                logout();
              }}>
                <IoIosLogOut />
              <span>Logout</span>
              
            </Link>
            </li>
            </ul>
            
          </nav>
        </IconContext.Provider>
      </>
    );
  }
  
  export default Navbar;