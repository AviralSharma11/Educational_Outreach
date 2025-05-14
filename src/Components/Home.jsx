import React from 'react';
import ParallaxHeader from './New/ParallaxHeader';
import Video from './New/Video';
import AboutSection from './New/AboutSection';
import DeanMessage from './New/DeanMessage';
import Program from './New/Program';
import MoU from './MoU';
import mou from '../List/mou';
import Announcements from './Announcements';
import ReachOut from './ReachOut';
import TeamMain from './New/TeamMain';

function Home() {

    return (
        <div >
            <ParallaxHeader/>
            <Video />
            <AboutSection />
            <DeanMessage />
            <Program />
            <MoU data={mou}/>
            <Announcements />
            <TeamMain/>
            <ReachOut />
        </div>
    );
}

export default Home;
