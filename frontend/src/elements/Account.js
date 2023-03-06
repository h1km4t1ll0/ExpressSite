import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData.js';
import './Navbar.css';
import {IconContext} from 'react-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from "./ProfileInfo";

function Account() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    document.body.style.background = "#111111";

    return (
    <div className="NAV_MAIN">
        <div className="Navbar-main">
            <div className="navbar-menu">
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <div className="nav-picture">
                                <AiIcons.AiOutlineClose/>
                                </div>
                            </Link>
                        </li>
                        <div className="h">
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
                        </div>
                    </ul>
                </nav>
            </IconContext.Provider>
            </div>
            <div className="navbar-buttons">
        <Navbar expand="lg">
            <Container>
                <div className="nav-brand">
                <Navbar.Brand href="#home">Personal account</Navbar.Brand>
                </div>
                <div className="nav-buttons">
                <Nav className="me-auto">
                    <div className="nav-home-button">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </div>
                    <div className="nav-link-button">
                        <Nav.Link href="#link">Link</Nav.Link>
                    </div>
                    <div className="nav-dropdown-button">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    </Nav>
                </div>
            </Container>
        </Navbar>
            </div>
        </div>
        <div id="full">
            <Profile></Profile>
        </div>
    </div>
);
}

export default Account;
