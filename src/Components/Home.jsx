import React from "react";
import Footer from './Footer';
import Header from './Header';
import Heroes from './Heroes';
import ReachOut from './ReachOut';
import Program from "./Program";
import Devendra_sir_message from './Devendra_sir_message'
import Director_message from './Director_message'

function Home(){
    return(
        <div>
          <Header/>
          <Heroes/>
          <Director_message />
          <Devendra_sir_message />
          <Program />
          <ReachOut/>
          <Footer/>
        </div>
    );
}

export default Home;