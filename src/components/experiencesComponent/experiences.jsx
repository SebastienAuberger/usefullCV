import React from "react";
import ExperiencesCard from "./experienceCardComponent/experienceCard"
import "./experience.css"
export default class Experiences extends React.Component{

    render(){
        return(
            <div className="main experiences smallShadow">
                <h1>Experiences</h1>
                <div className="experienceCards">
                    <ExperiencesCard />
                </div>
            </div>
        )
    }
}