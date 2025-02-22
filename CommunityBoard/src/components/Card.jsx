import React from "react";
import '../App.css'

const Card = (props) => {
    const img = props.img
    const title = props.title
    const location = props.location
    const date = props.date

    return (
        <div className="card">
            <img src={`/${img}`} alt="Image" style={{ width: "200px", height: "auto"}}/>
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{date}</p>
        </div>
        
    )
}

export default Card