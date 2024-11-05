import React, { useEffect, useRef} from "react";
import "../Styles/News$Events.css";
import EventCards from "./EventCards";
import events from "../List/events";

export default function NewsEvents({ searchQuery, onMatchFound }) {
    const Ref = useRef(null);

    useEffect(() => {
        if (searchQuery) {
            if (Ref.current) {
                const firstHighlighted = Ref.current.querySelector(".highlight");
                if (firstHighlighted) {
                    firstHighlighted.scrollIntoView({ behavior: "smooth", block: "center" });

                    onMatchFound(true); 
                } else {
                    onMatchFound(false); 
                }
            }
        } else {
            onMatchFound(true); 
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
        <div id="News" ref={Ref}>
            <h1 className="heading">News and Activities</h1>
            <div className="news">
                {events.map((event, index) => (
                    <EventCards 
                        key={index}
                        img={event.imgURL}
                        detail={highlightText(event.content)} 
                    />
                ))}
            </div>
        </div>
    );
}
