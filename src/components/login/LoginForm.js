import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function LoginForm(){
    return(
        <>
            <section>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form className="form-wrap shadow-sm p-5">
                                <h2 className="down-line">Login</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" className="border-red" />
                                    <Form.Text className="text-danger">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Button className="btn btn-primary-transparent" type="submit">
                                    Submit
                                </Button>

                                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <p>skkskdksq</p>
                                </Form.Group> */}
                                
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}