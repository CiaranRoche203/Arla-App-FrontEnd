import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
      title: 'Home',
      path: '/',
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
        icon: <IoIcons.IoMdMail/>,
        cName: 'nav-text'
      },
      {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoMdLogIn />,
        cName: 'nav-text'
      },
  ];