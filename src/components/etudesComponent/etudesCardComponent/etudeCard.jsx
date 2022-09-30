import React from "react";

export default class EtudeCard extends React.Component {
    render(){
        return(
            <div className="etudeCard">
                <h4 className="dates">{this.props.date}</h4>
                <h2 className="degree">{this.props.degree}</h2>
                <h3 className="schoolName">{this.props.school}</h3>
                <h4 className="cityName">{this.props.city}</h4>
            </div>
            
        )
    }
}