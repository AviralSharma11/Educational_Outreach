import React, { useState } from 'react';
import Header from "./Header";
import ReachOut from "./ReachOut";
import IITI from './IITI';
import "../Styles/IITI.css";



function IITI_page() {
    const [searchQuery, setSearchQuery] = useState(""); 

    return (
        <div>
            <Header setSearchQuery={setSearchQuery}/>
            <IITI searchQuery={searchQuery}/>
            <ReachOut className="footer" />
        </div>
    );
}

export default IITI_page;