import React from 'react';
import ParallaxHeader from './New/ParallaxHeader';
import AboutSection from './New/AboutSection';
import DeanMessage from './New/DeanMessage';
import Program from './New/Program';
import MoU from './MoU';
import mou from '../List/mou';
import Announcements from './Announcements';
import ReachOut from './ReachOut';
import TeamMain from './New/TeamMain';
import FacebookPageEmbed from './New/FacebookPageEmbedded';

function Home() {

    return (
        <div >
            <ParallaxHeader/>
            <AboutSection />
            <DeanMessage />
            <Program />
            <MoU data={mou}/>
            <Announcements />
            <TeamMain/>
            <FacebookPageEmbed />
            <ReachOut />
        </div>
    );
}

export default Home;
