import React from "react";
import Footer from "../components/common/Footer";
import HeaderNavbar from "../components/common/HeaderNavbar";
import InnerBanner from "../components/common/InnerBanner";
import RegisterForm from "../components/register/RegisterForm";

export default function Register(){
    return(
        <>
            <HeaderNavbar/>
            <InnerBanner innerBannerTitle="Register"/>
            <RegisterForm/>
            <Footer/>
        </>
    )
}