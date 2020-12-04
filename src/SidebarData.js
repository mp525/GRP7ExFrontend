import React from 'react';
import * as FaIcons from 'react-icons/fa';
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
    title: 'Login',
    path: '/login',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/page1',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  }/* ,
  {
    title: 'Search reviews',
    path: '/page3',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Write reviews',
    path: '/userPage',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Admin page',
    path: '/page4',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  } */
];