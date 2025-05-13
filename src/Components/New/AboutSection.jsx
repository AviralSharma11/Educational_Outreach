import React from 'react';
import '../../Styles/New/AboutSection.css';

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <img src="/Images/iiti.jpg" alt="IIT Indore Building" />
                </div>
                <div className="about-content">
                    <h2>ABOUT</h2>
                    <h3>Educational Outreach @ IIT Indore</h3>
                    <p>
                        <strong>Educational Outreach:</strong> Educational outreach refers to efforts made by educational institutions, organizations, or
                        individuals to engage with communities beyond their immediate academic setting. These efforts
                        aim to share knowledge, resources, and opportunities with various groups, such as students,
                        teachers, parents, and the general public, to promote learning, skill development, and awareness
                    </p>
                    <p>
                        <strong>Our Vision:</strong> Leverage the academic expertise of IIT Indore to develop
                            collaboration with external institutes, industry and society for capacity building, research and skill development
                            <br/>
                            Develop and deliver academic programs for industry professionals :
                            Executive degree and certificate programs, skill development workshops
                            (CEP)
                            <br/>
                            Collaborate with external institute to augment the expertise for delivering
                            academic programs required for industry and society (Collaborative
                            programs with IIM-I, RRCAT,)
                            <br/>
                            Develop and deliver the academic programs for quality improvement in
                            technical education (QIP,GSP) and school education (PM-SHRI,
                            Teacher Training, )
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;