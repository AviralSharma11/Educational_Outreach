import React, { useState, useEffect } from 'react';
import Header from "./Header";
import ReachOut from "./ReachOut";
import IITI from './IITI';
import "../Styles/IITI.css";



function IITIPage() {
    const [searchQuery, setSearchQuery] = useState(""); 
    const [noMatch, setNoMatch] = useState(false);

    const handleMatchFound = (found) => {
        if (found) {
            setNoMatch(false);
        }
    };

    useEffect(() => {
        setNoMatch(true);
    }, [searchQuery]);


    return (
        <div>
            <Header setSearchQuery={setSearchQuery}/>
            {noMatch && searchQuery && (
                <div className="popup">
                    There was no such word found
                    <button onClick={() => setNoMatch(false)}>Close</button>
                </div>
            )}
            <IITI searchQuery={searchQuery} onMatchFound={handleMatchFound}/>
            <ReachOut className="footer"  searchQuery={searchQuery} onMatchFound={handleMatchFound} />
        </div>
    );
}

export default IITIPage;