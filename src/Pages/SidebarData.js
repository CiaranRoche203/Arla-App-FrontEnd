import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

//sidebar data function where all the different links are declared and will be used in the Navbar page
export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add Info',
    path: '/register',
    icon: <IoIcons.IoMdCreate />,
    cName: 'nav-text'
  },
  {
    title: 'Messenger',
    path: '/messenger',
    icon: <IoIcons.IoMdMail />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/',
    icon: <IoIcons.IoMdLogIn />,
    cName: 'nav-text'
  },
  {
    title: 'My networks',
    path: '/graph',
    icon: <IoIcons.IoMdGitNetwork />,
    cName: 'nav-text'
  },

];