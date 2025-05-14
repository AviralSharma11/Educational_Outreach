import React from "react";
import "../../Styles/OurPeople.css";

export default function Team({ img, detail, position, contact, email, address }) {
    return (
        <div className="people-card-wrapper">
            <div className="people-card-heading">{position}</div> {/* Position heading outside the card box */}
            <div className="people-card">
                <div className="people-card-outer">
                    <div className="people-card-image">
                        <img src={img} alt="Person" />
                        
                    </div>
                    <div className="Info people-card-deatil-text" style={{ fontWeight: "600" }}>{detail} </div>
                    <div className="people-card-detail">
                        <div className="Info" style={{ fontWeight: "600" }}>{detail} </div>
                        <div className="Info" style={{ fontSize: "10px" }}>Contact No: {contact}</div>
                        <div className="Info" style={{ fontSize: "10px" }}>{email}</div>
                        <div className="Info" style={{ fontSize: "10px" }}>{address}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
