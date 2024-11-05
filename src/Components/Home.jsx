import React, { useEffect, useState } from 'react';
import Header from './Header';
import Heroes from './Heroes';
import ReachOut from './ReachOut';
import Program from "./Program";
import DevendraSirMessage from './DevendraSirMessage';
import DirectorMessage from './DirectorMessage';
import NewsEvents from "./NewsEvents";
import MoU from "./MoU";
import mou from "../List/mou";
import "../Styles/Highlight.css";
import "../Styles/popup_button.css";

function Home() {
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
            <Header setSearchQuery={setSearchQuery} />
            <Heroes searchQuery={searchQuery} />
            {noMatch && searchQuery && (
                <div className="popup">
                    There was no such word found
                    <button onClick={() => setNoMatch(false)}>Close</button>
                </div>
            )}
            <DirectorMessage searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <DevendraSirMessage searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            {/* <OurPeople searchQuery={searchQuery} onMatchFound={handleMatchFound} /> */}
            <Program searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <MoU data={mou} searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <NewsEvents searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <ReachOut searchQuery={searchQuery} onMatchFound={handleMatchFound} />
        </div>
    );
}

export default Home;
