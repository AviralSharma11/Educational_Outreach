import React from "react";
import "../Styles/Announcements.css"; 
import announcements from "../List/announcements";


export default function Announcements() {
    return (
        <div className="announcements">
            <h2 className="announcements-heading">Announcements</h2>
            <div className="announcements-list">
            {announcements.map((annc, index) => (
                <div key={index} className="announcement-item">
                    {annc.text}
                    {annc.isNew && <span className="new-badge">NEW</span>}
                </div>
            ))}
            </div>
        </div>
    );
}
