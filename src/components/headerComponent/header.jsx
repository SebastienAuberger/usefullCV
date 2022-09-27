import "./header.css";
import cv from "../../shared/cvInfo.json";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons"

class Header extends React.Component {

    componentDidMount(){

    }

    render(){
        return(
            <div id="header" className="smallShadow headerSlide">
                <div id="socials">
                <ul id="social_Before">
                    <li><FontAwesomeIcon icon={faFacebookF} inverse /></li>
                    <li><FontAwesomeIcon icon={faLinkedinIn} inverse /></li>
                </ul>
                <h1 id="header_name">{cv.name.toUpperCase()}</h1>
                <ul id="social_After">
                    <li><FontAwesomeIcon icon={faInstagram} inverse /></li>
                    <li><FontAwesomeIcon icon={faTwitter} inverse /></li>
                </ul>
                </div>
            </div>      
        );
    }
} 

export default Header;