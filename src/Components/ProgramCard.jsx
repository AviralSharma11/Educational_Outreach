import React from "react";
import "../Styles/Program.css";

export default function ProgramCard({ detail, content}) {
    return (
        <div className="program-card">
            <div className="program-card-outer">
                {/* Front Side */}
                <div className="program-card-front">
                    {/* <div className="program-card-image">
                        <img src={img} alt={title} />
                    </div> */}
                    <div className="program-card-title">
                        <h3 >{detail}</h3>
                    </div>
                </div>
                {/* Back Side */}
                <div className="program-card-back">
                    <div className="program-card-detail">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}