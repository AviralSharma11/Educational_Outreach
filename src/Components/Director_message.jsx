import React, { useEffect, useRef} from "react";
import '../Styles/Message.css';

export default function Director_message({ searchQuery, onMatchFound }) {
    const Ref = useRef(null);


    useEffect(() => {
        if (searchQuery) {
            if (Ref.current) {
                const firstHighlighted = Ref.current.querySelector(".highlight");
                if (firstHighlighted) {
                    firstHighlighted.scrollIntoView({ behavior: "smooth", block: "center" });
                    onMatchFound(true); // Notify parent that a match was found
                } else {
                    onMatchFound(false); // Notify parent that no match was found
                }
            }
        } else {
            onMatchFound(true); // Reset noMatch if searchQuery is empty
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
                    <img className="img-fluid" src="/Images/Prof_Suhas_Joshi.png" alt="Prof. Suhas S. Joshi" />
                </div>
                <div className="column-right">
                    <h3 className="font-weight-darker head">{highlightText("Communities are our priority!")}</h3>
                    <p className="text-muted">
                        {highlightText("Aximintia dolupta quatis essiminienit faciam dis utam rest fugitatis solor moditas mo blaborrum apicab illa simolorrunda vendigendus alit vendaerro ium quidendis doluptaerume dolore ium Otatibus andaecte nima nobit la eum dit aut voloraecti dipisin cuptatinum identiates et moluptat")}
                    </p>
                    <p className="my-1 font-weight-darker text-body">
                        {highlightText("Prof. Suhas S. Joshi")} <br /> Director, IIT Indore
                    </p>
                </div>
            </div>
        </div>
    );
}
