import React from "react";
import {ModalFooter, Container } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer(){
    return(
        <>
            <ModalFooter>
                {/* <div className="fotter-top">
                    <Container>
                        <Row>
                            <Col xs={3}>
                                <p>Ultricies eros proin scelerisque magnis varius, luctus. Ultricies dolor lobortis elit nunc, nullam iaculis neque vestibulum. Quam hac parturient nam tortor porttitor mauris curae.</p>
                            </Col>
                            <Col xs={3}>
                                <h4>Main </h4>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="/home">Active</Nav.Link>
                                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                </Nav>
                            </Col>
                            <Col xs={3}>
                                <h4>Technology</h4>
                                <Nav defaultActiveKey="/home" className="flex-column">
                                    <Nav.Link href="/home">Active</Nav.Link>
                                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                </Nav>
                            </Col>
                            <Col xs={3}></Col>
                        </Row>
                    </Container>
                </div> */}
                <div className="footer-top">
                    <Container>
                        <p>
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaTwitter /></a>
                            <a href=""><FaLinkedinIn /></a>
                        </p>
                    </Container>
                </div>
                <div className="footer-bottom">
                    <Container>
                        <p>© 2022 Copyright: Design Team</p>
                    </Container>
                </div>
            </ModalFooter>
        </>
    )
}