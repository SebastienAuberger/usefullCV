import React from "react";
import ExperiencesCard from "./experienceCardComponent/experienceCard"
import "./experience.css"
import cv from "../../shared/cvInfo.json"
export default class Experiences extends React.Component{

    render(){
        return(
            <div className="main experiences smallShadow">
                <h1>Experiences</h1>
                <div className="experienceCards">
                    {
                        cv.category[0].content.cards.map((el) => {
                               return(<ExperiencesCard title={el.title} company={el.companyName} location={el.location} date={el.date} />)
                        })
                    }
                </div>
            </div>
        )
    }
}