import React from "react";
import '../App.css'

const Card = (props) => {
    const img = props.img
    const title = props.title
    const location = props.location
    const date = props.date

    return (
        <div className="card" style={{maxWidth: "210px"}}>
            <img src={`/${img}`} alt="Image" style={{ width: "200px", height: "200px"}}/>
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{date}</p>
            <button className="btn" type="button">View Box Score</button>
        </div>
        
    )
}

export default Card