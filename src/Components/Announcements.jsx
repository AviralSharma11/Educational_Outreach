import React, { useEffect, useRef } from "react";
import "../Styles/Announcements.css"; 
import announcements from "../List/announcements";

export default function Announcements({ searchQuery, onMatchFound }) {
    const listRef = useRef(null); 
    const announcementsRef = useRef(null);

    useEffect(() => {
        const announcementsList = listRef.current;
        if (!announcementsList) return;

        let scrollDirection = 1; 
        const scrollStep = 1; 
        const scrollInterval = 100; // Time 

        const scrollFunction = () => {
            announcementsList.scrollTop += scrollStep * scrollDirection;

            // Bottom check
            if (announcementsList.scrollTop + announcementsList.clientHeight >= announcementsList.scrollHeight) {
                scrollDirection = -1; // Scroll up
            }

            // Top check
            if (announcementsList.scrollTop <= 0) {
                scrollDirection = 1; // Scroll down
            }
        };

        const interval = setInterval(scrollFunction, scrollInterval);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!searchQuery || !announcementsRef.current) {
            onMatchFound(true);
            return;
        }

        const firstHighlighted = announcementsRef.current.querySelector(".highlight");
        if (firstHighlighted) {
            firstHighlighted.scrollIntoView({ behavior: "smooth", block: "center" });
            onMatchFound(true);
        } else {
            onMatchFound(false);
        }
    }, [searchQuery, onMatchFound]);

    const highlightText = (text) => {
        if (!searchQuery) return <span>{text}</span>; 

        const regex = new RegExp(`(${searchQuery})`, "gi");
        const parts = text.split(regex);
        return parts.map((part, index) =>
            regex.test(part) ? (
                <span key={index} className="highlight">{part}</span>
            ) : (
                <span key={index}>{part}</span>
            )
        );
    };

    return (
        <div className="announcements" id="Announcements" ref={announcementsRef}>
            <h2 className="announcements-heading">Announcements</h2>
            <div className="announcements-list" ref={listRef}>
                {announcements.map((annc, index) => (
                    <div key={index} className="announcement-item">
                        {highlightText(annc.text)}
                        {annc.isNew && <span className="new-badge">NEW</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}
