import React from "react";

export default class ExperienceCard extends React.Component {
    render(){
        return(
            <div className="experienceCard">
                <h4 className="dates">{this.props.date}</h4>
                <h2 className="cardTitle">{this.props.title}</h2>
                <h3 className="companyName">{this.props.company}</h3>
                <h4 className="cityName">{this.props.location}</h4>
            </div>
            
        )
    }
}