import React, { useEffect, useRef } from "react";
import '../Styles/Message.css';

export default function Devandra_sir_message({ searchQuery, onMatchFound }) {
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
        <div className="container" ref={Ref}>
            <div className="row box">
                <div className="column-left">
                    <img className="img-fluid" src="/Images/devendra_sir.jpg" alt="Prof. Devendra Deshmukh" />
                </div>
                <div className="column-right">
                    <h3 className="font-weight-darker head">{highlightText("Communities are our priority!")}</h3>
                    <p className="text-muted">
                        {highlightText("The vision of the Education Outreach Department is driven by a deep belief in the transformative power of education to shape lives, build communities, and create a prosperous world. At the core of our mission lies a commitment to excellence, equity, and empowerment in education. We believe that education is not merely a pathway to personal success but a powerful catalyst for positive change in our communities and beyond.")}
                    </p>
                    <p className="my-1 font-weight-darker text-body">
                        {highlightText("Prof. Devendra L. Deshmukh")} <br /> IIT Indore
                    </p>
                </div>
            </div>
        </div>
    );
}
