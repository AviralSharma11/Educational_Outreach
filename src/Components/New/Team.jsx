import React from "react";
import "../../Styles/New/Team.css";
import people from "../../List/people";

const Team = () => {
    return (
      <div className="team-section">
        <h2 className="team-heading">Our Team</h2>
        <div className="team-grid">
          {people.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.imgURL} alt={member.name} className="team-image" />
              <div className="team-overlay">
                <h3>{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-email">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;