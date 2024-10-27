import React from "react";
import Footer from './Footer';
import Header from './Header';
import Heroes from './Heroes';
import ReachOut from "./ReachOut";
import Engagements from "./Engagements";

function Engagements_and_Cooperations(){
    return(
        <div>
          <Header/>
          <Heroes/>
          <Engagements />
          <ReachOut/>
          <Footer/>
        </div>
    );
}

export default Engagements_and_Cooperations;