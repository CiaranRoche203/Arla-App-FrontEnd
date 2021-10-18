import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
      title: 'Home',
      path: '/home',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Register',
      path: '/register',
      icon: <IoIcons.IoMdCreate />,
      cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoMdLogIn />,
        cName: 'nav-text'
      },

  ];