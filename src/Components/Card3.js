import React from "react";
import './Card3.css'

function Card3({imageurl , text}){
    return(
        <>
        
        <div className="Title" style={{
            backgroundImage : `url(${imageurl})`
        }}>
            <h3>{text}</h3>
        </div>
        </>
    )
}

export default Card3;