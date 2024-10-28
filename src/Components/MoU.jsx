import React, { useEffect, useRef } from "react";
import "../Styles/MoU.css";

function MoU({ data, searchQuery }) {
    const tableRef = useRef(null);

    useEffect(() => {
        if (searchQuery && tableRef.current) {
            const rows = tableRef.current.querySelectorAll("tbody tr");
            let found = false;

            for (const row of rows) {
                const cells = row.querySelectorAll("td");
                for (const cell of cells) {
                    if (cell.textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
                        row.scrollIntoView({ behavior: "smooth", block: "center" });
                        found = true;
                        break; 
                    }
                }
                if (found) break; 
            }

            if (!found) {
                console.log("No matches found for:", searchQuery);
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
        <div id="MOU">
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
                                <td>{highlightText(item.signedOn)}</td>
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

