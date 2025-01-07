import React, { useEffect, useRef } from "react";
import "../Styles/Announcements.css"; 
import announcements from "../List/announcements";

export default function Announcements() {
    const listRef = useRef(null); 

    useEffect(() => {
        const announcementsList = listRef.current;
        if (!announcementsList) return;

        let scrollDirection = 1; 
        const scrollStep = 1; 
        const scrollInterval = 100; // Time 

        const scrollFunction = () => {
            announcementsList.scrollTop += scrollStep * scrollDirection;

            //  bottom
            if (announcementsList.scrollTop + announcementsList.clientHeight >= announcementsList.scrollHeight) {
                scrollDirection = -1; // scroll up
            }

            // top
            if (announcementsList.scrollTop <= 0) {
                scrollDirection = 1;//scroll down
            }
        };

        const interval = setInterval(scrollFunction, scrollInterval);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="announcements">
            <h2 className="announcements-heading">Announcements</h2>
            <div className="announcements-list" ref={listRef}>
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
