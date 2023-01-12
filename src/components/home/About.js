import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function About(){
    return(
        <>
            <section className="about-sec">
                <Container>
                    <Row>
                        <Col xs={6}>
                            <p className="tagline">About Design Team</p>
                            <h2 className="down-line">This is our gools to explain our solutions and services</h2>
                            <p>Morbi egestas mollis bibendum facilisi nonummy tristique quis aptent class eleifend. Montes elit sem ullamcorper, risus egestas mattis. Sit auctor fringilla elementum condimentum praesent.</p>
                            <Button className="btn btn-primary-transparent" href="#">Learn More</Button>
                        </Col>
                        <Col xs={6}>
                            <p>Sociis quam ante condimentum justo, nisl hymenaeos magnis ultricies torquent laoreet facilisi dictum venenatis id elit commodo condimentum hymenaeos, dis urna natoque. Ultrices porttitor dolor mattis posuere rutrum netus. Torquent praesent suspendisse proin sollicitudin dignissim sociosqu cursus leo mollis erat penatibus eget ad volutpat velit nibh sollicitudin odio vulputate. Laoreet neque. Quisque felis nisi. Adipiscing per eros hymenaeos malesuada curae.</p>
                            <p>Sapien eget praesent. Consequat posuere mauris porta nascetur suspendisse sem primis phasellus felis donec rutrum suscipit proin vitae habitant. Lectus tincidunt semper, natoque at Eu pretium nibh rhoncus sodales.</p>
                            <Row>
                                <Col className="shape shape1">
                                    <p className="tag">Total Call Received</p>
                                    <p className="numbers">270K</p>
                                </Col>
                                <Col className="shape shape2">
                                    <p className="tag">Project We Success</p>
                                    <p className="numbers">387+</p>
                                </Col>
                                <Col className="shape shape3">
                                    <p className="tag">Project We Success</p>
                                    <p className="numbers">387+</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}