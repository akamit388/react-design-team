import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogList from "../common/BlogList";
import ProfileAboutContent from "./ProfileAboutContent";

const ProfileAbout = () => {
    return(
        <>
            <section>
                <Container>
                    <Row>
                        <Col md={8}>
                            <Row>
                                <Col md={6}>
                                    <BlogList/>
                                </Col>
                                <Col md={6}>
                                    <BlogList/>
                                </Col>
                                <Col md={6}>
                                    <BlogList/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <ProfileAboutContent/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProfileAbout;