import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiAdobexd, SiAdobephotoshop, SiCsswizardry, SiReact, SiWordpress } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";

export default function Technology(){
    return(
        <>
            <section className="tech-sec">
                <Container>
                    <Row>
                        <Col xs={8}>
                            <div className="tech-wrap">
                                <div className="tech-icon">
                                    <SiAdobephotoshop className="icon" />
                                    <p>Photoshop</p>
                                </div>
                                <div className="tech-icon">
                                    <SiAdobexd className="icon" />
                                    <p>Adobe XD</p>
                                </div>
                                <div className="tech-icon">
                                    <FiFigma className="icon" />
                                    <p>Figma</p>
                                </div>
                                <div className="tech-icon">
                                    <TiHtml5 className="icon" />
                                    <p>HTML5</p>
                                </div>
                                <div className="tech-icon">
                                    <SiCsswizardry className="icon" />
                                    <p>CSS</p>
                                </div>
                                <div className="tech-icon">
                                    <IoLogoJavascript className="icon" />
                                    <p>Java Script</p>
                                </div>
                                <div className="tech-icon">
                                    <SiReact className="icon" />
                                    <p>React JS</p>
                                </div>
                                <div className="tech-icon">
                                    <SiWordpress className="icon" />
                                    <p>Wordpress</p>
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={4}>
                            <h2 className="down-line">Technology we offered</h2>
                            <p>Penatibus vulputate fringilla elementum tortor aliquam viverra et ultricies eros proin scelerisque magnis varius, luctus. Ultricies dolor lobortis elit nunc, nullam iaculis neque vestibulum. Quam hac parturient nam tortor porttitor mauris curae.</p>
                            <p>Ultricies eros proin scelerisque magnis varius, luctus. Ultricies dolor lobortis elit nunc, nullam iaculis neque vestibulum. Quam hac parturient nam tortor porttitor mauris curae.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}