import React from "react";
import cv from "../../shared/cvInfo.json";
import {
    Link
  } from "react-router-dom";
import "./nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faBook, faCode, faHouseChimney, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

class Nav extends React.Component {
    componentDidMount(){

    }

    render(){
        return(
                <div id="nav" className="smallShadow">
                    <ul>
                        <li><Link to={cv.category[0].link}><FontAwesomeIcon icon={faCity} inverse /> {cv.category[0].name}</Link></li>
                        <li><Link to={cv.category[1].link}><FontAwesomeIcon icon={faBook} inverse /> {cv.category[1].name}</Link></li>
                        <li><Link to={cv.category[2].link}><FontAwesomeIcon icon={faCode} inverse /> {cv.category[2].name}</Link></li>
                        <li><Link to={cv.category[3].link}><FontAwesomeIcon icon={faHouseChimney} inverse /> {cv.category[3].name}</Link></li>
                        <li><Link to={cv.category[4].link}><FontAwesomeIcon icon={faMagnifyingGlass} inverse /> {cv.category[4].name}</Link></li>
                    </ul>
                </div>
        )
    }
}

export default Nav;