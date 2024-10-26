import React from "react";
import "../Styles/Program.css";

export default function ProgramCard({img ,detail}){
    return(
        <div className="program-card">
            <div className="program-card-image">
                <img src = {img} />
            </div>
            <div className="program-card-detail">
                    {detail}
            </div>
        </div>
    );
}