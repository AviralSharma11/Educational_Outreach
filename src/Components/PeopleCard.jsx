import React from "react";
import "../Styles/OurPeople.css";

export default function PeopleCard({ img, detail, position, contact, email, address }) {
    return (
        <div className="people-card">
            <div className="people-card-outer">
                <div className="people-card-image">
                    <img src={img} />
                </div>
                <div className="wrapping">
                    <div className="Info " style={{ fontWeight: "600" }}>{detail}</div>
                    <div className="Info " style={{ fontSize: "12px" }}>{position}</div>
                </div>
                <div className="people-card-detail">
                    <div className="Info" style={{ fontWeight: "600" }}>{detail}</div>
                    <div className="Info" style={{ fontSize: "10px" }}>{position}</div>
                    <div className="Info" style={{ fontSize: "10px" }}>Contact No: {contact}</div>
                    <div className="Info" style={{ fontSize: "10px" }}>{email}</div>
                    <div className="Info" style={{ fontSize: "10px" }}>{address}</div>
                </div>
            </div>
        </div>
    );
}