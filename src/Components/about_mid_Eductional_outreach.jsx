import React from 'react';
import '../Styles/about_mid_Eductional_Outreach.css'; // Add external CSS

export default function About_Mid_Eductional_Outreach() {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <img src="public\Images\devendra_sir.jpg" alt="Prof. Devendra Deshmukh" className="image" />
        </div>
        <div className="text-container">
          <div>
            <h1 className="heading">Communities are our priority!</h1>
            <p className="paragraph">
              The vision of the Education Outreach Department is driven by a deep belief in the transformative power of education
              to shape lives, build communities, and create a prosperous world. At the core of our mission lies a commitment to
              excellence, equity, and empowerment in education. We believe that education is not merely a pathway to personal
              success but a powerful catalyst for positive change in our communities and beyond.
            </p>
            <p className="prof-name">Prof. Devendra Deshmukh</p>
            <p className="prof-title">Dean, Education Outreach, IIT Indore</p>
          </div>
        </div>
      </div>

      <div className="vision-container">
        <div className="vision-heading">
          <b>Our Vision</b>
        </div>
        <div className="vision-text">
          Leverage the academic expertise of IIT Indore to develop collaboration with external institutes, industry and society for capacity building, research, and skill development.
        </div>
      </div>
      <hr />
    </>
  );
}
