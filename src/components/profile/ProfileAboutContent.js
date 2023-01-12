import React from "react";
import { SiCsswizardry } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";

const ProfileAboutContent = () => {
    return(
        <>
            <div className="profile-about-sec">
                <p className="h4 profile-name"><strong>Phasellus laoreet</strong></p>
                <p><em>UX Designer</em></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce diam orci, varius quis efficitur aliquet, posuere sodales enim.</p>
                <p><strong>Total Experience</strong><br/>
                6 Years</p>
                <p><strong>Joining Date</strong><br/>
                Mar 12, 2017</p>
                <p><strong>Projects</strong><br/>
                Intel, Commloan</p>
                <p><strong>Technology</strong><br/>
                <FiFigma className="tech-icon"/>
                <SiCsswizardry className="tech-icon"/>
                <TiHtml5 className="tech-icon"/>
                <IoLogoJavascript className="tech-icon"/>
                </p>
            </div>
        </>
    )
}

export default ProfileAboutContent;