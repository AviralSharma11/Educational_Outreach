import React, { useEffect, useRef} from "react";
import "../Styles/IITI.css";

function IITI({ searchQuery, onMatchFound }) {
    const contentRef = useRef(null);

    useEffect(() => {
        if (searchQuery) {
            if (contentRef.current) {
                const firstHighlighted = contentRef.current.querySelector(".highlight");
                if (firstHighlighted) {
                    firstHighlighted.scrollIntoView({ behavior: "smooth", block: "center" });
                    onMatchFound(true); 
                } else {
                    onMatchFound(false); 
                }
            }
        } else {
            onMatchFound(true); 
        }
    }, [searchQuery, onMatchFound]);

    const highlightText = (text) => {
        if (!searchQuery) return <span>{text}</span>;
        const regex = new RegExp(`(${searchQuery})`, "gi");
        const parts = text.split(regex);
        return parts.map((part, index) =>
            regex.test(part) ? (
                <span key={index} className="highlight">{part}</span>
            ) : (
                <span key={index}>{part}</span>
            )
        );
    };
    return (
        <div ref={contentRef}>
                <img src="/Images/IITI_intro.jpg" className="intro" alt="intro" />
            <div className="content">
                <h1>{highlightText("IIT Indore")}</h1>
                <p>{highlightText("Indian Institute of Technology Indore (IIT Indore or IITI) is one of the premier engineering and technology institutes in India. Established in 2009, it is one of the eight new Indian Institutes of Technology (IITs) established by the Ministry of Education, Government of India.")}</p>
                <p>{highlightText("IIT Indore offers undergraduate, graduate, and doctoral programs in engineering and technology. Some of the popular programs include Computer Science and Engineering, Electrical Engineering, Mechanical Engineering, and Chemical Engineering.")}</p>
                <p>{highlightText("The campus of IIT Indore is located in the city of Indore, in the state of Madhya Pradesh, India. It is spread over an area of around 501.42 acres and is equipped with state-of-the-art infrastructure and facilities, including well-equipped labs, libraries, and sports facilities.")}</p>
                <p>{highlightText("IIT Indore is known for its strong research focus and has various research centers such as Center for Energy and Environment, Center for Robotics and Intelligent Systems, Center for VLSI and Embedded Systems and Center for Nano Science and Technology.")}</p>
                <p>{highlightText("The institute is also actively involved in various outreach activities and community service programs. It has established a strong network of industry collaborations and partnerships, which provides students with opportunities for internships, projects, and placements. Overall, IIT Indore is a premier institution for engineering and technology education in India, providing students with a strong foundation in the field and equipping them with the skills and knowledge needed for a successful career.")}</p>
                <div className="hostel">
                    <img src="/Images/Hostel.png" alt="Hostel" />
                    <img src="/Images/Hostel_Room.jpg" alt="Hostel Room" />
                    <img src="/Images/Hostel2.jpg" alt="HJB" />
                </div>
            </div>
        </div>
    );
}

export default IITI;
