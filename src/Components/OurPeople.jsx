import React, { useEffect, useRef } from "react";
import "../Styles/OurPeople.css";
import people from "../List/people";
import PeopleCard from "./PeopleCard";

export default function OurPeople({ searchQuery }) {
    const peopleRef = useRef(null);

    useEffect(() => {
        if (searchQuery && peopleRef.current) {
            const cards = peopleRef.current.querySelectorAll(".people-card");
            let found = false; // To check if we found a matching card

            for (const card of cards) {
                if (card.textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
                    card.scrollIntoView({ behavior: "smooth", block: "center" });
                    found = true; // Set found to true if a match is found
                    break; // Stop at the first match
                }
            }

            // If no match is found, you can scroll to the top or display a message
            if (!found) {
                // Example: scroll to the top of the people section
                peopleRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [searchQuery]);

    const highlightText = (text) => {
        if (!searchQuery) return text;
        const regex = new RegExp(`(${searchQuery})`, "gi");
        const parts = text.split(regex);
        return parts.map((part, index) => (
            regex.test(part) ? <span key={index} className="highlight">{part}</span> : part
        ));
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
                    />
                ))}
            </div>
        </div>
    );
}
