import React from "react";
import Footer from './Footer';
import Header from './Header';
import Heroes from './Heroes';
import ReachOut from './ReachOut';

function Home(){
    return(
        <div>
          <Header/>
          <Heroes/>
          <ReachOut/>
          <Footer/>
        </div>
    );
}

export default Home;