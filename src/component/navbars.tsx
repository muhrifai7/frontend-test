import React from 'react'
import { Navbar, Nav, NavDropdown, FormControl, Button, Form, Image } from "react-bootstrap"

import Gap from "./Gap"

function Navbars() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Gajian</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars
