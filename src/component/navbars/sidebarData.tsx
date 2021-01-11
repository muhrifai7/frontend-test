import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Beranda',
        path: '/',
        icon: <AiIcons.AiFillHome color="#81ecec" />,
        cName: 'nav-text'
    },
    {
        title: 'Personal List',
        path: '/employes',
        icon: <IoIcons.IoIosPaper color="#81ecec" />,
        cName: 'nav-text'
    },
    {
        title: 'Attandence',
        path: '/attendance',
        icon: <FaIcons.FaCartPlus color="#81ecec" />,
        cName: 'nav-text'
    },
];