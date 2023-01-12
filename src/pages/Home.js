import React from "react";
import HeaderNavbar from "../components/common/HeaderNavbar";
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Team from "../components/home/Team";
import Technology from "../components/home/Technology";
import Footer from "../components/common/Footer";

export default function Home(){
    return(
        <>
            <HeaderNavbar />
            <Banner />
            <About />
            <Team />
            <Technology />
            <Footer />
        </>
    );
}