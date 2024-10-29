import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Heroes from './Heroes';
import ReachOut from './ReachOut';
import Program from "./Program";
import Devendra_sir_message from './Devendra_sir_message';
import Director_message from './Director_message';
import News$Events from "./News&Events";
import OurPeople from "./OurPeople";
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
            <Director_message searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <Devendra_sir_message searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <OurPeople searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <Program searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <MoU data={mou} searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <News$Events searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <ReachOut searchQuery={searchQuery} onMatchFound={handleMatchFound} />
            <Footer />
        </div>
    );
}

export default Home;
