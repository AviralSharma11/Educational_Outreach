import React, { useEffect, useRef } from "react";
import "../Styles/MoU.css";

function MoU({ data, searchQuery, onMatchFound }) {
    const tableRef = useRef(null);

    useEffect(() => {
        if (searchQuery) {
            if (tableRef.current) {
                const firstHighlighted = tableRef.current.querySelector(".highlight");
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
        <div id="MOU" ref={tableRef}>
            <h1 className="heading">MoUs</h1>
            <div className="table-container">
                <table className="mou-table" ref={tableRef}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Nature</th>
                            <th>Purpose/Title</th>
                            <th>Signed on</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{highlightText(item.nature)}</td>
                                <td>{highlightText(item.title)}</td>
                                <td>{highlightText(item.signed)}</td>
                                <td>{highlightText(item.duration)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MoU;

