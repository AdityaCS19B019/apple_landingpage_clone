import React from "react";
import './Card.css'
function Card({ mobilename, caption, Availablecost, image}) {
    
        return (
            <div className="card-container" style={{
                backgroundImage: `url(${image})`
                
            }
            }>
                <div className="card-iphone">
                    <p>{mobilename}</p>
                </div>
                <div className="card-content">
                    <div className="card-caption">
                        <h3>{caption}</h3>
                    </div>
                    <div className="card-available">
                        <p>{Availablecost}</p>
                    </div>
                </div>

            </div>
        )
    
    /*else
    {
        <div className="card-container" style={{
            backgroundImage: `url(${image})`
        }}>
            <div className="card-iphone">
                <p>{mobilename}</p>
            </div>
            <div className="card-content">
                <div className="card-caption">
                    <h3>{caption}</h3>
                </div>
                <div className="card-available">
                    <p>{Availablecost}</p>
                </div>
            </div>

        </div>
    }*/


}
export default Card