import React, { useEffect, useRef } from "react";
import "../Styles/Program.css";
import ProgramCard from "./ProgramCard";
import programDetails from "../List/programDetails";

export default function Program({ searchQuery, onMatchFound }) {
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
        <div id="Program" ref={Ref}>
            <h1 className="heading">Our Programs</h1>
            <div className="programs">
                {programDetails.map((program, index) => (
                    <ProgramCard 
                        key={index}
                        img={program.imgURL}
                        detail={highlightText(program.content)} 
                    />
                ))}
            </div>
        </div>
    );
}
