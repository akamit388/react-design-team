import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const RegisterForm = () => {
    return(
        <>
            <section>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form className="form-wrap shadow-sm p-5">
                                <h2 className="down-line">Register</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="name" placeholder="Name" />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3 small" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="I agree with the terms and condition" />
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

export default RegisterForm;