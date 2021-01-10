import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { Nav, Image } from "react-bootstrap"

import { SidebarData } from './sidebarData';
import "../../assets/css/App.css"

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const currentRoute = window.location.pathname

    const showSidebar = () => setSidebar(!sidebar); return (
        <>
            <IconContext.Provider value={{ color: '#000000' }}>
                <div className='navbar'>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Link to='#' className='menu-bars' onClick={showSidebar} >
                            <h5>Gadjian</h5>
                        </Link>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Nav.Item id="user-title">
                            <Nav.Link href="/home">Hallo , Gajian User</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Image src="https://randomuser.me/api/portraits/thumb/women/10.jpg" roundedCircle />
                        </Nav.Item>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose color="#81ecec" />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            let fil = "";
                            if (item.path == currentRoute) { fil = "#81ecec" }
                            return (
                                <li key={index} className={item.cName} >
                                    <Link to={item.path} >
                                        {item.icon}
                                        <span style={{ color: fil }}>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;