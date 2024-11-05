import React from "react";
import "../Styles/News$Events.css";

export default function EventCards({img, detail}){
    return(
        <div className="news-card">
            <div className="news-card-image">
                <img src = {img} alt="news"/>
            </div>
            <div className="news-card-detail">
                    {detail}
            </div>
        </div>
    );
}