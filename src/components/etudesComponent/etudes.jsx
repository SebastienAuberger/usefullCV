import React from "react";
import cv from "../../shared/cvInfo.json"
import EtudeCard from "./etudesCardComponent/etudeCard";
import "./etudes.css"
export default class Etudes extends React.Component{

    render(){
        return(
            <div className="main etudes smallShadow">
                <h1>Experiences</h1>
                <div className="etudeCards">
                    {
                        cv.category[1].content.cards.map((el) => {
                               return(<EtudeCard degree={el.degree} school={el.school} city={el.city} date={el.date} />)
                        })
                    }
                </div>
            </div>
        )
    }
}