import React from "react";
import Slider from "react-slick";
import "../../Styles/New/Program.css";

const events = [
    {
        title: "Executive M.Tech program in Hybrid And Electric Vehicle Technology",
        description: "This program bridges the gap between academia and industry, empowering professionals with specialized skills in hybrid and electric vehicle technology to advance sustainable transportation and foster innovation.",
    },
    {
        title: "M.Tech in CFDST",
        description: "Cutting-edge program focusing on Computational Fluid Dynamics and Space Technology.",
    },
    {
        title: "UG In-Bound Program",
        description: "A specialized program for undergraduates to explore real-world research projects.",
    },
    {
        title: "MSDSM (Jointly by IIT Indore & IIM Indore)",
        description: "A collaborative program focusing on strategic decision-making and management.",
    },
    {
        title: "MoU with Sant Shiromani Ravidas Global Skill Park (GSP)",
        description: "The potential beneficiary of this scheme will be the students of ITI, Diploma, and B.E./B.Tech programs of educational institutions running under the aegis of Govt. of Madhya Pradesh.",
    },
    {
        title: "MoU with Department of Technical Education Skill Development and Employment (Part-time Ph.D)",
        description: "IIT Indore has started Part-time Doctor of Philosophy (Ph.D.) Program for permanent faculties from all the Government (Autonomous) Engineering Colleges including University Institute of Technology – Rajeev Gandhi Proudyuogiki Vishwavidyalaya, Bhopal.",
    },
];

const Program = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="latest-events">
            <h2 className="events-heading">Latest Programs</h2>
            <Slider {...settings} className="events-carousel">
                {events.map((event, index) => (
                    <div className="event-card" key={index}>
                        <div className="event-content">
                            <h3>{event.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Program;
