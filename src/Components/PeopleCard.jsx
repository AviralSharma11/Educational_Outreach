import React from "react";
import "../Styles/OurPeople.css";

export default function PeopleCard({img ,detail ,position}){
    return(
        <div className="news-card">
            <div className="news-card-image">
                <img src = {img} />
            </div>
            <div className="news-card-detail">
                    <span style={{fontWeight: "600"}}>{detail}</span>
                    <br/>
                    <span style={{fontSize: "10px"}}>{position}</span>
            </div>
        </div>
    );
}