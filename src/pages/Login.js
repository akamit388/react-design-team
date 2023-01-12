import React from "react";
import HeaderNavbar from "../components/common/HeaderNavbar";
import InnerBanner from "../components/common/InnerBanner";
import LoginForm from "../components/login/LoginForm";
import Footer from "../components/common/Footer";

export default function Login(){
    return(
        <>
            <HeaderNavbar />
            <InnerBanner innerBannerTitle="Login" />
            <LoginForm />
            <Footer />
        </>
    )
}