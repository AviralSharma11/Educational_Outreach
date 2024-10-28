import React, { useEffect, useRef } from "react";
import '../Styles/Message.css';

export default function Devandra_sir_message({ searchQuery }) {
    const Ref = useRef(null);

    useEffect(() => {
        if (searchQuery && Ref.current) {
            // Search through all text nodes within the component
            const textNodes = Ref.current.querySelectorAll("h3, p");
            for (const node of textNodes) {
                if (node.textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
                    node.scrollIntoView({ behavior: "smooth", block: "center" });
                    break; // Stop at the first match
                }
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
        <div className="container" ref={Ref}>
            <div className="row box">
                <div className="column-left">
                    <img className="img-fluid" src="/Images/devendra_sir.jpg" alt="Prof. Devendra Deshmukh" />
                </div>
                <div className="column-right">
                    <h3 className="font-weight-darker head">{highlightText("Communities are our priority!")}</h3>
                    <p className="text-muted">
                        {highlightText("Aximintia dolupta quatis essiminienit faciam dis utam rest fugitatis solor moditas mo blaborrum apicab illa simolorrunda vendigendus alit vendaerro ium quidendis doluptaerume dolore ium Otatibus andaecte nima nobit la eum dit aut voloraecti dipisin cuptatinum identiates et moluptat")}
                    </p>
                    <p className="my-1 font-weight-darker text-body">
                        {highlightText("Prof. Devendra Deshmukh")} <br /> IIT Indore
                    </p>
                </div>
            </div>
        </div>
    );
}

