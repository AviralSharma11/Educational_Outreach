import React from "react";
import Footer from './Footer';
import Header from './Header';
import Heroes from './Heroes';
import ReachOut from './ReachOut';
import Program from "./Program";
import Devendra_sir_message from './Devendra_sir_message'
import Director_message from './Director_message'
import News$Events from "./News&Events";
import OurPeople from "./OurPeople";
import MoU from "./MoU";
import mou from "../List/mou";

function Home(){
    return(
        <div>
          <Header/>
          <Heroes/>
          <Director_message />
          <Devendra_sir_message />
          <OurPeople/>
          <Program />
          <MoU data={mou} />
          <News$Events />
          <ReachOut/>
          <Footer/>
        </div>
    );
}

export default Home;