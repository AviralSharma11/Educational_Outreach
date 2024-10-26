import React from "react";
import "../Styles/IITI.css";
import Header from "./Header";
import Introduction from "./Introduction";
import ReachOut from "./ReachOut";

function IITI(){
    return(
        <div>
            <Header />
            <Introduction/>
            <div className="content">
                <h1>IIT Indore</h1>
                <p> Indian Institute of Technology Indore (IIT Indore or IITI) is one of the premier engineering and technology
                    institutes in India. Established in 2009, it is one of the eight new Indian Institutes of Technology (IITs)
                    established by the Ministry of Education, Government of India.
                </p> 
                <p>   
                    IIT Indore offers undergraduate, graduate, and doctoral programs in engineering and technology. Some
                    of the popular programs include Computer Science and Engineering, Electrical Engineering, Mechanical
                    Engineering, and Chemical Engineering.
                </p>
                <p>    
                    The campus of IIT Indore is located in the city of Indore, in the state of Madhya Pradesh, India. It is spread
                    over an area of around 501.42 acres and is equipped with state-of-the-art infrastructure and facilities, including
                    well-equipped labs, libraries, and sports facilities.
                </p>
                <p>
                    IIT Indore is known for its strong research focus and has various research centers such as Center for Energy
                    and Environment, Center for Robotics and Intelligent Systems, Center for VLSI and Embedded Systems and
                    Center for Nano Science and Technology.
                </p>
                <p>    
                    The institute is also actively involved in various outreach activities and community service programs. It has
                    established a strong network of industry collaborations and partnerships, which provides students with
                    opportunities for internships, projects, and placements.
                    Overall, IIT Indore is a premier institution for engineering and technology education in India, providing
                    students with a strong foundation in the field and equipping them with the skills and knowledge needed for a
                    successful career.
                </p>
            
                <div className="hostel">
                    <img src="/Images/DA.jpg"/>
                    <img src="/Images/Hostel_Room.jpg" />
                    <img src="/Images/HJB.jpg"/>
                </div>
            </div>
                <ReachOut className="footer"/>
        </div>
    );
}

export default IITI;