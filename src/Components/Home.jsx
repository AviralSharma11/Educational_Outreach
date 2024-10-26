import React from "react";
import Footer from './Footer';
import Header from './Header';
import Heroes from './Heroes';
import ReachOut from './ReachOut';
import Program from "./Program";

function Home(){
    return(
        <div>
          <Header/>
          <Heroes/>
          <Program />
          <ReachOut/>
          <Footer/>
        </div>
    );
}

export default Home;