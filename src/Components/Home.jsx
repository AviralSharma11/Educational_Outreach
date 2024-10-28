import React, { useState } from 'react';
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
import "../Styles/Highlight.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); 

    return (
        <div>
            <Header setSearchQuery={setSearchQuery} />
            <Heroes searchQuery={searchQuery} />
            <Director_message searchQuery={searchQuery} />
            <Devendra_sir_message searchQuery={searchQuery} />
            <OurPeople searchQuery={searchQuery} />
            <Program searchQuery={searchQuery} />
            <MoU data={mou} />
            <News$Events searchQuery={searchQuery} />
            <ReachOut  searchQuery={searchQuery} />
            <Footer />
        </div>
    );
}

export default Home;
