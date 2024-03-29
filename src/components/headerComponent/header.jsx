import "./header.css";
import cv from "../../shared/cvInfo.json";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram,faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useMediaQuery } from 'react-responsive'

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 890 })
    return isMobile ? children : null
  }

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 891 })
    return isDesktop ? children : null
  }

class Header extends React.Component {

    componentDidMount(){

    }

    render(){
        return(
            <>
            <Desktop>
            <div id="header" className="smallShadow headerSlide">
                <div id="socials">
                <ul id="social_Before">
                    <li><a href="https://www.facebook.com/saubg7" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} inverse /></a></li>
                    <li><a href="https://www.linkedin.com/in/seb-abg/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} inverse /></a></li>
                </ul>
                <h1 id="header_name">{cv.name.toUpperCase()}</h1>
                <ul id="social_After">
                    <li><a href="https://www.instagram.com/s.auberger/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} inverse /></a></li>
                    <li><a href="https://twitter.com/fergvae" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} inverse /></a></li>
                </ul>
                </div>
            </div>
            </Desktop>
            <Mobile>
                <div id="resp_header" className="smallShadow headerSlide">
                    <h1 id="header_name">{cv.name.toUpperCase()}</h1>
                    <div id="resp_socials">
                        <ul>
                            <li><a href="https://www.facebook.com/saubg7" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} inverse /></a></li>
                            <li><a href="https://www.linkedin.com/in/seb-abg/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} inverse /></a></li>
                            <li><a href="https://www.instagram.com/s.auberger/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} inverse /></a></li>
                            <li><a href="https://twitter.com/fergvae" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} inverse /></a></li>
                        </ul>
                    </div>
                </div>
            </Mobile>   
            </>  
        );
    }
} 

export default Header;