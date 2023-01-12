import React from "react";
import { Container } from "react-bootstrap";

const InnerBanner = (props) => {
    return(
        <>
            <section className="inner-banner login-banner">
                <div className="overlay"></div>
                <Container>
                    <div className="caption">
                        <h1>{props.innerBannerTitle}</h1>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default InnerBanner;