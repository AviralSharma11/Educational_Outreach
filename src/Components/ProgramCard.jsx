import React from "react";
import "../Styles/Program.css";

export default function ProgramCard({ img, detail }) {
    return (
        <div className="program-card">
            <div className="program-card-outer">
                <div className="program-card-front">
                    <div className="program-card-image">
                        <img src={img} alt="Program" />
                    </div>
                </div>
                <div className="program-card-back">
                    <div className="program-card-detail">
                        {detail}
                    </div>
                </div>
            </div>
        </div>
    );
}
