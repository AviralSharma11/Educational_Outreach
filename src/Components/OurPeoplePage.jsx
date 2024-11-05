import React, { useState, useEffect } from 'react';
import Header from "./Header";
import ReachOut from "./ReachOut";
import OurPeople from './OurPeople';
import "../Styles/IITI.css";



function OurPeoplePage() {
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
            <OurPeople searchQuery={searchQuery} onMatchFound={handleMatchFound}/>
            <ReachOut className="footer"  searchQuery={searchQuery} onMatchFound={handleMatchFound} />
        </div>
    );
}

export default OurPeoplePage;