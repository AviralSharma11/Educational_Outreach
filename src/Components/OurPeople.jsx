import React, { useEffect, useRef } from "react";
import "../Styles/OurPeople.css";
import people from "../List/people";
import PeopleCard from "./PeopleCard";

export default function OurPeople({ searchQuery, onMatchFound }) {
    const peopleRef = useRef(null);

    useEffect(() => {
        if (searchQuery) {
            if (peopleRef.current) {
                const firstHighlighted = peopleRef.current.querySelector(".highlight");
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
        <div id="People" ref={peopleRef}>
            <h1 className="heading">Our People</h1>
            <div className="people">
                {people.map((person, index) => (
                    <PeopleCard
                        key={index}
                        img={person.imgURL}
                        detail={highlightText(person.content)}
                        position={highlightText(person.position)}
                        contact={highlightText(person.contact_no)}
                        email={person.email_id ? highlightText(person.email_id) : null}
                        address={highlightText(person.address)}
                    />
                ))}
            </div>
        </div>  
    );
}
