import React from "react";
import { Container } from "react-bootstrap";
import BlogImg from "../../assets/images/user-icon.jpg";

const ProfileBanner = (props) => {
    return(
        <>
            <section className="inner-banner login-banner profile-banner">
                <div className="overlay"></div>
                <Container>
                    <div className="caption">
                        <div className="profile-img">
                            <img src={BlogImg} title=""/>
                        </div>
                        <h1>
                            {props.innerBannerTitle}
                            <span>UI Developer</span>
                        </h1>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProfileBanner;