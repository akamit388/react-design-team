import React from "react";
import {Navbar, Container, Offcanvas, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderNavbar(){
    return(
        <>
            <Navbar fixed="top" className="headerNav" bg="dark" variant="dark" expand={false}>
                <Container>
                    <Navbar.Brand href="#">Design Team</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Design Team</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link>
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link>
                                <Link to='/login'>Login</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/register'>Register</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/profile'>Profile</Link>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}