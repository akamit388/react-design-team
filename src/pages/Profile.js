import React from "react";
import Footer from "../components/common/Footer";
import HeaderNavbar from "../components/common/HeaderNavbar";
import ProfileBanner from "../components/profile/ProfileBanner";
import ProfileAbout from "../components/profile/ProfileAbout";

const Profile = () => {
    return(
        <>
            <HeaderNavbar/>
            <ProfileBanner innerBannerTitle="Phasellus laoreet"/>
            <ProfileAbout/>
            <Footer/>
        </>
    )
}

export default Profile;