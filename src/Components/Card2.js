import React from "react";
import './Card2.css'

function Card2({imageurl , text , price}){
    return(
        <>
         <div className="card-container">
                <div className="image">
                    <img src={imageurl}></img>
                </div>
                <div className="card-content">
                    <div className="card-caption">
                        <p><b>{text}</b></p>
                    </div>
                    <div className="card-available">
                        <p>{price}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card2;